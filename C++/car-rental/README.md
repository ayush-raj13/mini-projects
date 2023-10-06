Car Rental System by Hemanth Medahal

Steps to compile the program:
i) Open command prompt and change directory to the folder containing the downloaded files
ii) Type "g++ admin.cpp car.cpp database.cpp main.cpp password.cpp person.cpp user.cpp" in the console, or any other compiler that you are using. Just make sure to compile all the .cpp files
iii) The above will create an executable file named a.exe. To run it, type .\a in console

As a person, there are two roles; admin and user 
What you can do as an admin:
i) Add a car
ii) Delete a car
iii) Display all cars

What you can do as a user:
i) Display unreserved cars
ii) Reserve a car

A user can display or reserve a car only after registering and logging in

The username of admin is ADMIN and password is cars4ever

Cars and users are stored in a database hence, they will persist even after the program is terminated                                                               

Person is the base class. User class is inherited from person as it has limited capabilites. Admin class has special priviliges and is also inherited from Person class

Map container is used to store a temporary database of persons and cars. Look-up in map is done using iterators and find function

Storage in files is done using filestreams

Function writetofile shows polymorphism by taking in different number of string arguments. 
