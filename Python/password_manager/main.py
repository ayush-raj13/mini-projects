from pathlib import Path
# from cryptography.fernet import Fernet

'''
def write_key():
    key = Fernet.generate_key()
    with open('key.key','wb') as key_file:
        key_file.write(key) 

def load_key():
    file = open("key.key",'rb')
    key = file.read()
    file.close()
    return key

write_key() 
'''

# key = load_key()
# fer = Fernet(key)  

def view():
     file = Path('passwords.txt')
     if(file.is_file()):
        with open('passwords.txt','r') as f:
          for line in f.readlines():
            # remove \n while reading
            data = line.rstrip()
            user,password = data.split("|")
            # print("User : " + user + " ,  Password : " + fer.decrypt(password.encode()).decode() )
            print("User : " + user + " ,  Password : " + password )
     else :
         print('Nothing to show')       
         pass

def add():
    name = input("Account name : ")
    pwd = input("Password : ")

    with open('passwords.txt','a') as f:
        # f.write(name+ "|" +  fer.encrypt(pwd.encode()).decode() + "\n")
        f.write(name+ "|" +  pwd + "\n")

while True:
    mode = input("Would you like to add a new password or view the passwords? (add,view) or press 'q' to quit :  ").lower()
    if mode == 'q':
        break

    if mode == "view" :
        view()
    elif mode == "add" :
        add()
    else :
        print("Invalid mode!")
        continue