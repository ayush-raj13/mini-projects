let score = JSON.parse(localStorage.getItem('score'));
    if (score === null) {
      console.log(score);

      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }

    let isautoPlay = false;
    let autoPlayID;

    // const autoPlay = () => {}

    function autoPlay(){
      if(!isautoPlay){
        document.querySelector('.autoplay-button').innerHTML = 'Stop Auto Play';
        autoPlayID = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);
        isautoPlay = true;
      } else {
        document.querySelector('.autoplay-button').innerHTML = 'Auto Play';
        clearInterval(autoPlayID);
        isautoPlay = false;
      }
      
    }

    function resetScore(){
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
    
    }

    function hideRequest(){
      document.querySelector('.reset-request').innerHTML = '';
    }

    function resetScoreRequest(){
      document.querySelector('.reset-request').innerHTML = `Are you sure you want to reset the score: <button class='yes'>Yes</button>
      <button class='no'>No</button>`;
      
      document.querySelector('.yes').addEventListener('click',() => {
        resetScore();
        hideRequest();
      });
      document.querySelector('.no').addEventListener('click',() => {
        hideRequest();
      });
      
    }

    

    document.body.addEventListener('keydown',(event) => {
      if(event.key === 'r'){
        playGame('rock');
      }
      else if(event.key === 'p'){
        playGame('paper');
      } 
      else if(event.key === 's'){
        playGame('scissors');
      }
      else if(event.key === 'a'){
        autoPlay();
      }
      else if(event.key === 'Backspace'){
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      }
    })

    document.querySelector('.js-rock-button').addEventListener('click',() => playGame('rock'));

    document.querySelector('.js-paper-button').addEventListener('click',() => playGame('paper'));

    document.querySelector('.js-scissors-button').addEventListener('click',() => playGame('scissors'));

    document.querySelector('.js-reset-button').addEventListener('click',resetScoreRequest);

      

    document.querySelector('.js-autoplay-button').addEventListener('click',() => {
      autoPlay();
    });

   


    


    function playGame(playerMove) {
      const computerMove = pickComputerMove();


      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        score.wins += 1;
      }
      else if (result === 'You lose.') {
        score.losses += 1;
      }
      else if (result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;
      document.querySelector('.js-moves')
        .innerHTML = `You picked: <img src="images/${playerMove}.png" class="move-icon"> ​ ​ ​ ​ ​ ​ ​ ​  Computer picked: <img src="images/${computerMove}.png" class="move-icon">`;

      // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }