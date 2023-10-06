#include "database.h"
#include "person.h"
#include "car.h" 
#include <bits/stdc++.h>

using namespace std;

map<string, Person>personDatabase;
map<string, car>carDatabase;

void putIntoPersonDatabase(){
    string name, pass, phone, temp;
    ifstream file;
    file.open("users.txt");
    char c;
    
    if(!file.is_open()){ 
        cout<<"File is not opened"<<endl;
        return;
    }
    
    while(getline(file, temp)){
        istringstream ss(temp);
        ss>>name>>pass>>phone;
        Person P(name, pass, phone);
        personDatabase.insert({name,P});
    }
    file.close();
}

void putIntoCarDatabase(){
    string company, model, number, seats, distance, year, colour, reserved, temp;
    ifstream file;
    file.open("cars.txt");
    char c;
    
    if(!file.is_open()){ 
        cout<<"File is not opened"<<endl;
        return;
    }
    
    while(getline(file, temp)){
        istringstream ss(temp);
        ss>>company>>model>>number>>seats>>distance>>year>>colour>>reserved;
        //cout<<reserved<<endl;
        car C(company, model, number, seats, distance, year, colour, reserved);
        carDatabase.insert({number,C});
    }
    file.close();
}