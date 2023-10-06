import random

choices = ['stone','paper','scissors']

print("Choose - stone , paper or scissors ")
userInp = input("User's choice : \n")
userInp = userInp.lower()

compChoice = random.choice(choices)

if userInp in choices : 
 if userInp == compChoice:
  print("Computer Choose : " , compChoice)
  print("It's a Tie")
 elif (userInp == 'stone' and compChoice == 'scissors') or (userInp == 'paper' and compChoice == 'stone') or (userInp == 'scissors' and compChoice == 'paper') :
  print("Computer Choose : " , compChoice)
  print("Victory! V")
 else :
  print("Computer Choose : " , compChoice)
  print("Computer won :(  Gambare next time :)  ") 
else :
 print("Choose one among - stone , paper or scissors. ")  