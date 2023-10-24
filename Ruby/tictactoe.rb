# Tic-Tac-Toe Game in Ruby

# Initialize the board
board = [" ", " ", " ",
         " ", " ", " ",
         " ", " ", " "]

# Define winning combinations
WINNING_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6]]

# Display the Tic-Tac-Toe board
def display_board(board)
  puts " #{board[0]} | #{board[1]} | #{board[2]} "
  puts "-----------"
  puts " #{board[3]} | #{board[4]} | #{board[5]} "
  puts "-----------"
  puts " #{board[6]} | #{board[7]} | #{board[8]} "
end

# Check for a win
def check_win(board, player)
  WINNING_COMBINATIONS.any? do |combo|
    combo.all? { |position| board[position] == player }
  end
end

# Check for a tie
def check_tie(board)
  board.all? { |position| position != " " }
end

# Main game loop
current_player = "X"
loop do
  display_board(board)
  puts "Player #{current_player}, choose a position (1-9):"
  position = gets.chomp.to_i - 1

  if (0..8).include?(position) && board[position] == " "
    board[position] = current_player
    if check_win(board, current_player)
      display_board(board)
      puts "Player #{current_player} wins! Congratulations!"
      break
    elsif check_tie(board)
      display_board(board)
      puts "It's a tie! The game is over."
      break
    else
      current_player = (current_player == "X" ? "O" : "X")
    end
  else
    puts "Invalid move. Please choose an empty position (1-9)."
  end
end
