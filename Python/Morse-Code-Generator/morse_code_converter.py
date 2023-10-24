import winsound
import time

morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
}

text = input("Enter the text to convert to Morse code: ").upper()

morse_code = ' '.join(morse_code_dict.get(char, '') for char in text)
print(morse_code)

pitch = 550
duration_dot = 200
duration_dash = 600

for symbol in morse_code:
    if symbol == '.':
        winsound.Beep(pitch, duration_dot)
        time.sleep(duration_dot / 1000.0)
    elif symbol == '-':
        winsound.Beep(pitch, duration_dash)
        time.sleep(duration_dash / 1000.0)
    elif symbol == '/':
        time.sleep(0.5)
    elif symbol == ' ':
        time.sleep(0.3)
    time.sleep(0.2)
