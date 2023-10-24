# TicTacToe-AI

This is a simple Tic-Tac-Toe game built using Python and Pygame. The game allows the player to choose to play as X or O and has a simple AI that plays as the other player. It uses the minimax algorithm to calculate optimal moves.

## Requirements

- Python 3.x
- Pygame

## Usage

To play the game, run `runner.py` in a terminal or using an IDE. The game will start and prompt you to choose a player. Click on the "Play as X" or "Play as O" button to choose your player.

Once you've chosen a player, the game board will be displayed. You can make moves by clicking on an empty tile on the board. The game will alternate between the player and the AI until the game is over.

If the game ends in a tie or someone wins, the game will prompt you to play again.

## Files

- `runner.py`: This file contains the main game logic and uses Pygame to create the game window and handle user input.

- `tictactoe.py`: This file contains the logic for the Tic-Tac-Toe game, including checking for wins and generating AI moves using the minimax algorithm.
