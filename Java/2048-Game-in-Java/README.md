# 2048 Game in Java

This is a simple implementation of the popular game 2048 in Java. The game follows the same rules as the original version: combine tiles with the same value to reach the 2048 tile and win the game.

## How to Play

1. Run the Java program and start the game.
2. Use the following keys to move the tiles:
   - 'W' to move Up
   - 'A' to move Left
   - 'S' to move Down
   - 'D' to move Right
3. After each move, the game board will be displayed.
4. Continue making moves until you reach the 2048 tile or decide to quit.
5. To quit the game, enter 'Q'.

## Game Features

- The game board is a 4x4 grid represented by a 2D array.
- The initial board has two random tiles (either 2 or 4) placed in random empty cells.
- Each move updates the board and adds a new random tile (either 2 or 4) in an empty cell.
- The game ends when there are no more valid moves (i.e., no empty cells and no adjacent tiles with the same value).
- If you reach the 2048 tile, you win the game.
- If the game ends without reaching 2048, you lose.

## Class Structure

The code consists of a single class, `Board`, which handles the game logic. The class contains the following methods:

- `Board()`: Constructor that initializes the game board and random number generator.
- `play()`: Starts the game and handles user input, moves, and game progression.
- `hasWon()`: Checks if the player has reached the 2048 tile and returns a boolean value.
- `display()`: Displays the current game board on the console.
- `moveUp()`, `moveLeft()`, `moveRight()`, `moveDown()`: Implements the logic for moving the tiles in the respective directions.
- `generateRandomTile()`: Adds a new random tile (2 or 4) to an empty cell on the board.
- `emptyCells()`: Returns a list of empty cells on the board.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to modify and customize the code according to your needs.

Enjoy playing the game!
