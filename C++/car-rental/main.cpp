#include <bits/stdc++.h>
#include "car.h"
#include "person.h"
#include "admin.h"
#include "password.h"
#include "database.h"
#include "user.h"

using namespace std;

extern map<string ,car> carDatabase;
extern map<string, Person> personDatabase;

void registration(){
    string us, pwd, ph;
    cout<<"Enter username"<<endl;
    cin>>us;
    cout<<"Enter password"<<endl;
    pwd = takePasswdFromUser();
    cout<<"Enter your phone number"<<endl;
    cin>>ph;
    writetofile(us, pwd, ph);
    cout<<"Successfully registered!!"<<endl<<endl;
}

void login(){
    putIntoPersonDatabase();
    string usn, pwd, temp;
    int cond1 = 0, cond = 0;
    cout<<"Enter your username"<<endl;
    cin>>usn;
    map<string, Person>::iterator it;
    it = personDatabase.find(usn);

    if(it==personDatabase.end()){
        cout<<"User does not exist! Try logging in again"<<endl<<endl;
        return;
    }
    
    else{
        if(usn == "ADMIN") cout<<"Welcome Admin!"<<endl<<endl;
        
        else cout<<"Welcome "<<usn<<"!\n\n";
        int i = 0;
        while(i<=5){

            if(i==5){
                cout<<"You have tried too many times\nPlease try logging in again\n"<<endl;
                return;
            }
            cout<<"Enter your password"<<endl;
            pwd = takePasswdFromUser();
            
            if((it->second).getPassword() == pwd){
                cout<<"Successfully logged in!"<<endl<<endl;
                break;
            }
            
            else{
                cout<<"Wrong password! Try again"<<endl<<endl;
            }
            i++;
        }
        int choose;
        user U;
        Admin A;
        
        if(usn == "ADMIN"){
            
            while(1){
                cout<<"Choose an option\n1. Display all cars\n2. Add a car\n3. Delete a car\n4. Log out"<<endl;
                cin>>choose;
                switch(choose){
                    case 1: A.display();
                            break;          
                    case 2: A.add();
                            break;
                    case 3: A.deleteCar();
                            break;
                    case 4: cout<<"Logging out"<<endl<<endl;
                            return;
                    default: cout<<"Enter valid option\nLogging out"<<endl<<endl;
                             exit(0);
                }
            }
        }
        
        else{
            
            while(1){
                cout<<"Choose an option:\n1. Display available cars\n2. Reserve a car\n3. Log out"<<endl;
                cin>>choose;
                switch(choose){  
                    case 1: U.display();
                            break;
                    case 2: U.reservation();
                            break;
                    case 3: cout<<"Logging out"<<endl<<endl;
                            return;
                    default: cout<<"Enter a valid option\nLogging out"<<endl<<endl;
                             exit(0);  
                }     
            }
        }
    }
}

int main(){
    cout<<"Welcome to Car Rental System!\n";
    int choice;
    
    while(1){
        cout<<"Choose an option:\n1. Registration\n2. Logging in\n3. Exit"<<endl;
        cin>>choice;
        switch(choice){
            case 1: registration();
                    break;
            case 2: login();
                    break;
            case 3: cout<<"Thank you!";
                    exit(0);
            default: cout<<"Enter a valid option"<<endl;
                    exit(0);
        }
    }
    return 0;
}