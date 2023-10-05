#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    std::srand(std::time(0)); // Seed for the random number generator
    int randomNumber = std::rand() % 100 + 1; // Generate random number between 1 and 100
    int guess;
    int attempts = 0;

    std::cout << "Welcome to the Random Number Guesser Game!" << std::endl;

    do {
        std::cout << "Enter your guess (between 1 and 100): ";
        std::cin >> guess;
        attempts++;

        if (guess < 1 || guess > 100) {
            std::cout << "Invalid guess! Please enter a number between 1 and 100." << std::endl;
        } else if (guess < randomNumber) {
            std::cout << "Too low! Try again." << std::endl;
        } else if (guess > randomNumber) {
            std::cout << "Too high! Try again." << std::endl;
        } else {
            std::cout << "Congratulations! You guessed the number in " << attempts << " attempts." << std::endl;
        }
    } while (guess != randomNumber);

    return 0;
}
