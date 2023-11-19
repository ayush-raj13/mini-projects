import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Random;

public class RockPaperScissors {

    private static int userScore = 0;
    private static int computerScore = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        String[] choices = {"Rock \uD83E\uDEA8", "Paper \uD83D\uDCC4", "Scissors \u2702"};

        while (true) {
            clearScreen();
            printWithTypingEffect("Choose (1) Rock \uD83E\uDEA8, (2) Paper \uD83D\uDCC4, (3) Scissors \u2702, or (0) Exit:");
            int userChoice = getUserChoice(scanner);

            if (userChoice == 0) {
                break;
            }

            if (userChoice < 1 || userChoice > 3) {
                printWithTypingEffect("Invalid choice. Please select a number between 1 and 3, or 0 to exit.\n");
                continue;
            }

            int computerChoice = random.nextInt(3) + 1;
            printWithTypingEffect("Your choice: " + choices[userChoice - 1] + "\n");
            printWithTypingEffect("Computer's choice: " + choices[computerChoice - 1] + "\n");

            String result = switch (userChoice) {
                case 1 -> {
                    if (computerChoice == 3) {
                        userScore++;
                        yield "You win!";
                    } else if (computerChoice == 2) {
                        computerScore++;
                        yield "You lose!";
                    } else yield "It's a tie!";
                }
                case 2 -> {
                    if (computerChoice == 1) {
                        userScore++;
                        yield "You win!";
                    } else if (computerChoice == 3) {
                        computerScore++;
                        yield "You lose!";
                    } else yield "It's a tie!";
                }
                case 3 -> {
                    if (computerChoice == 2) {
                        userScore++;
                        yield "You win!";
                    } else if (computerChoice == 1) {
                        computerScore++;
                        yield "You lose!";
                    } else yield "It's a tie!";
                }
                default -> "Invalid choice";
            };

            printWithTypingEffect(result + "\n");
            printWithTypingEffect("Current Score: You - " + userScore + ", Computer - " + computerScore + "\n");

            printWithTypingEffect("\nPress Enter to continue...\n");
            waitForEnter(scanner);
        }

        scanner.close();
        clearScreen();
        printWithTypingEffect("Game ended. Final Score: You - " + userScore + ", Computer - " + computerScore);
        printWithTypingEffect("\nThank you for playing!\n");
    }

    private static int getUserChoice(Scanner scanner) {
        while (true) {
            try {
                return scanner.nextInt();
            } catch (InputMismatchException e) {
                printWithTypingEffect("Invalid input. Please enter a number.\n");
                scanner.next(); 
            }
        }
    }

    private static void waitForEnter(Scanner scanner) {
        try {
            scanner.nextLine(); 
            scanner.nextLine();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private static void clearScreen() {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            if (os.contains("win")) {
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                new ProcessBuilder("clear").inheritIO().start().waitFor();
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private static void printWithTypingEffect(String message) {
        for (char ch : message.toCharArray()) {
            System.out.print(ch);
            try {
                Thread.sleep(10); 
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
