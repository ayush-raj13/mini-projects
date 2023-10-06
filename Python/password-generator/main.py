'''
Create a class to generate strong and secure passwords.
'''

import random

class Password:
    def __init__(self, length):
        self.length = length
        self.password = ''

    def generate_password(self):
        for i in range(self.length):
            self.password += chr(random.randint(33, 126))
        return self.password
    
    def generate_secure_password(self):
        for i in range(self.length):
            self.password += chr(random.randint(33, 126))
        return self.password
    
if __name__ == '__main__':
    password = Password(10)
    print(password.generate_password())
    print(password.generate_secure_password())
    