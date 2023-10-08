"""
Tic Tac Toe Player
"""

import math
import copy

X = "X"
O = "O"
EMPTY = None


def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def player(board):
    """
    Returns player who has the next turn on a board.
    """
    x, o = 0, 0
    for row in board:
        for element in row:
            if element == X:
                x += 1
            elif element == O:
                o += 1

    if (x > o):
        return O
    else:
        return X


def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    moves = set()
    for row in range(3):
        for col in range(3):
            if board[row][col] == EMPTY:
                moves.add((row, col))
    return moves


def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """
    tempBoard = copy.deepcopy(board)
    if action not in actions(board):
        raise Exception("Invalid move")
    i, j = action
    tempBoard[i][j] = player(board)
    return tempBoard


def winner(board):
    """
    Returns the winner of the game, if there is one.
    """
    # check rows
    for i in range(3):
        if (board[i][0] == board[i][1] and board[i][1] == board[i][2] and board[i][0] != EMPTY):
            return board[i][0]
    # check columns
    for i in range(3):
        if (board[0][i] == board[1][i] and board[1][i] == board[2][i] and board[0][i] != EMPTY):
            return board[0][i]
    # Check diagonals
    if (board[0][0] == board[1][1] and board[1][1] == board[2][2] and board[0][0] != EMPTY):
        return board[0][0]
    if (board[0][2] == board[1][1] and board[1][1] == board[2][0] and board[0][2] != EMPTY):
        return board[0][2]
    return None


def terminal(board):
    """
    Returns True if game is over, False otherwise.
    """
    if winner(board) == None:
        for row in board:
            for element in row:
                if element == EMPTY:
                    return False
    return True


def utility(board):
    """
    Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    """
    if (winner(board) == X):
        return 1
    elif winner(board) == O:
        return -1
    else:
        return 0


def minValue(board,alpha,beta):
    v = math.inf
    if terminal(board):
        return utility(board)
    for action in actions(board):
        ev = maxValue(result(board, action),alpha,beta)
        v = min(v,ev)
        beta = min(beta,ev)
        if beta <= alpha:
            break
    return v


def maxValue(board,alpha,beta):
    v = -math.inf
    if (terminal(board)):
        return utility(board)
    for action in actions(board):
        ev = minValue(result(board, action),alpha,beta)
        v = max(v, ev)
        alpha = max(alpha,ev)
        if alpha >= beta:
            break
    return v


def minimax(board):
    if terminal(board):
        return None
    p = player(board)
    if p == X:
        plays = {}
        for action in actions(board):
            value = minValue(result(board, action),math.inf,-math.inf)
            plays[action] = value
        best_value = max(plays.values())
        for play in plays.keys():
            if plays[play] == best_value:
                return play
    else:
        plays = {}
        for action in actions(board):
            value = maxValue(result(board, action),-math.inf,math.inf)
            plays[action] = value
        best_value = min(plays.values())
        for play in plays.keys():
            if plays[play] == best_value:
                return play
