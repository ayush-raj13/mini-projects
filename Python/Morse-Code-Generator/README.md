"""
# Morse Code Converter

This is a simple Python script that converts text input into Morse code and plays the corresponding audio signals using the `winsound` library.

## Usage

1. Ensure you have Python installed on your system.

2. Clone or download the repository to your local machine.

3. Open a terminal or command prompt and navigate to the directory where the script is located.

4. Run the script by executing the following command:

   ```shell
   python morse_code_converter.py

5. Enter the text you want to convert to Morse code when prompted.

6. The script will print the Morse code representation of the input text and play the corresponding audio signals.

## Customization
You can customize the pitch and duration of the audio signals by modifying the following variables in the script:

'pitch': Adjust the frequency of the audio signals. The default value is 550.
'duration_dot': Set the duration (in milliseconds) for a dot symbol. The default value is 200.
'duration_dash': Set the duration (in milliseconds) for a dash symbol. The default value is 600.
Feel free to modify these variables to suit your preferences.

## Morse Code Dictionary
The script uses a dictionary morse_code_dict to map each character to its corresponding Morse code representation. You can extend or modify this dictionary to support additional characters if needed.

## Limitations
This script currently supports uppercase letters (A-Z), digits (0-9), and spaces. Other characters will be skipped during the conversion.

The audio playback relies on the winsound library, which is only available on Windows systems. If you are using a different operating system, you may need to modify the code to use an alternative audio library.