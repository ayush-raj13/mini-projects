import { expect, test } from 'vitest';
import { TicTacToe } from './judge/TicTacToe.js';

test('Should be able to initialize a blank TicTacToe game', () => {
  const ticTacToe = new TicTacToe();

  expect(ticTacToe.board).toEqual(Array(3).fill(Array(3).fill(' ')));
});

test('Should be able to play a move on coordinate', () => {
  const ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);

  expect(ticTacToe.board[0][0]).not.toEqual(' ');
});

test('Should be able to play with a friend simultaneously', () => {
  const ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);
  ticTacToe.playMove(0, 1);
  expect(ticTacToe.board[0][0]).not.toEqual(ticTacToe.board[0][1]);
  
  ticTacToe.playMove(0, 2);
  expect(ticTacToe.board[0][2]).toEqual(ticTacToe.board[0][0]);
  ticTacToe.playMove(1, 0);
  expect(ticTacToe.board[1][0]).toEqual(ticTacToe.board[0][1]);
});

test('Should not be able to play in already filled position', async () => {
  const ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);
  await expect(async () => ticTacToe.playMove(0, 0)).rejects.toEqual(new Error('Position already filled'));

  ticTacToe.playMove(0, 1);
  await expect(async () => ticTacToe.playMove(0, 0)).rejects.toEqual(new Error('Position already filled'));
});

test('Should return 1 if 1th player wins or 2 if 2nd player wins ', () => {
  let ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);
  ticTacToe.playMove(1, 0);
  ticTacToe.playMove(0, 1);
  ticTacToe.playMove(1, 1);
  expect(ticTacToe.playMove(0, 2)).toEqual(1);

  ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);
  ticTacToe.playMove(1, 0);
  ticTacToe.playMove(0, 1);
  ticTacToe.playMove(1, 1);
  ticTacToe.playMove(2, 2);
  expect(ticTacToe.playMove(1, 2)).toEqual(2);
})

test("Should return 3 if it's a draw", () => {
  const ticTacToe = new TicTacToe();
  ticTacToe.playMove(0, 0);
  ticTacToe.playMove(0, 1);
  ticTacToe.playMove(0, 2);
  ticTacToe.playMove(1, 1);
  ticTacToe.playMove(1, 0);
  ticTacToe.playMove(1, 2);
  ticTacToe.playMove(2, 1);
  ticTacToe.playMove(2, 0);
  expect(ticTacToe.playMove(2, 2)).toEqual(3);
})