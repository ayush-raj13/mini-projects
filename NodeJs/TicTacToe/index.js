import { TicTacToe } from "./judge/TicTacToe.js";

async function input(message) {
  process.stdout.write(message); // print without \n at the end
  return new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.once('data', data => {
      process.stdin.pause();
      resolve(data.toString().trim());
    });
  });
}

async function waitForAnyKey(message) {
  console.log(message);
  process.stdin.setRawMode(true)
  await new Promise(resolve => {
    process.stdin.resume();
    process.stdin.once('data', () => {
      process.stdin.pause();
      resolve();
    });
  });
  process.stdin.setRawMode(false);
  console.clear();
}

(async () => {
  const welcomeMessage = [
    "==============================================================================",
    "Welcome to TicTacToe.",
    "This is a multiplayer simultaneously game.",
    "Each round, you need to type the coordinate of the position you want to play.",
    "For example: 0 0",
    "Or: 1 2",
    "When you are ready, press any key to start the game.",
    "==============================================================================",
  ]
  await waitForAnyKey(welcomeMessage.join('\n'));
  
  let ticTacToe = new TicTacToe();
  ticTacToe.printBoard();
  while(true) {
    let i, j, result = 0;
    
    while(true) {
      const coordinates = await input('Type the coordinate you want to play: ');
      [i, j] = coordinates.replace(/ +/g, " ").split(' ').map(Number);
      
      if(!Number.isNaN(i) && !Number.isNaN(j)) {
        try {
          result = ticTacToe.playMove(i, j);
          break;
        } catch(error) {
          console.log(error.message);
        }
      } else {
        console.log("Coordinate should be two numbers separated by space");
      }
      console.log("Try again...");
    }
    
  
    console.clear();
    ticTacToe.printBoard();
  
    if(result) { // Check victory
      if(result == 1 || result == 2) {
        console.log("Congratulations...");
        console.log(`Player${result} wins!!!`);
      } else {
        console.log("Draw!!!");
      }

      // Read desire to play again
      let res = (await input('Do you want to play again? (y/n): ')).trim().toLowerCase();
      while(res != 'y' && res != 'n') {
        console.log("Please, type only 'y' or 'n'");
        res = (await input('Do you want to play again? (y/n): ')).trim().toLowerCase();
      }

      if(res == 'n') {
        break;
      }

      // Reset game
      ticTacToe = new TicTacToe();
      result = 0;

      console.clear();
      ticTacToe.printBoard();
    }
  }
})()
