export class TicTacToe {
  #characters;
  #turn;

  constructor() {
    this.#characters = ['X', 'O'];
    this.#turn = 0;
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  playMove(i, j) {
    if(i < 0 || i > 2 || j < 0 || j > 2) {
      throw new Error('Coordinate should be between 0 and 2');
    }

    if(this.board[i][j] !== ' ') {
      throw new Error('Position already filled');
    }

    this.board[i][j] = this.#characters[this.#turn];
    this.#turn = this.#turn ^ 1;

    return this.#verifyVictory();
  }

  printBoard() {
    console.log(this.board.map(row => " " + row.join(' | ')).join('\n-----------\n'));
  }

  #verifyVictory() {
    for(let i = 0; i < 3; i++) {
      if(this.board[i][0] != ' ' && this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]) {
        return this.#characters[0] == this.board[i][0] ? 1 : 2;
      }
    }

    for(let j = 0; j < 3; j++) {
      if(this.board[0][j] != ' ' && this.board[0][j] == this.board[1][j] && this.board[1][j] == this.board[2][j]) {
        return this.#characters[0] == this.board[0][j] ? 1 : 2;
      }
    }

    if(this.board[0][0] != ' ' && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) {
      return this.#characters[0] == this.board[0][0] ? 1 : 2;
    }
    if(this.board[0][2] != ' ' && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]) {
      return this.#characters[0] == this.board[0][2] ? 1 : 2;
    }

    if(this.board.every(row => row.every(column => column != ' '))) {
      return 3;
    }

    return 0;
  }
}
