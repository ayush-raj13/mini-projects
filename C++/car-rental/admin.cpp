#include <bits/stdc++.h>
#include "car.h"
#include "admin.h"
#include "password.h"
#include "database.h"
#include "person.h"

using namespace std;

extern map<string, car> carDatabase;

void Admin::add(){
    string company, model, colour, number, seats, distance, year;
    string reserve{"0"};
    cout<<"Enter the company of the car"<<endl;
    cin>>company;
    cout<<"Enter the model of the car"<<endl;
    cin>>model;
    cout<<"Enter the car number"<<endl;
    cin>>number;
    cout<<"Enter the number of seats"<<endl;
    cin>>seats;
    cout<<"Enter the distance the car has travelled"<<endl;
    cin>>distance;
    cout<<"Enter the year the car was manufactured"<<endl;
    cin>>year;
    cout<<"Enter the colour of the car"<<endl;
    cin>>colour;
    writetofile(company, model, number, seats, distance, year, colour, reserve); 
}

void Admin::display(){
    putIntoCarDatabase();
    car C;
    cout<<center("Car Number", 20)<<center("Company", 20)<<center("Model", 20)<<center("Seats", 20)<<center("Distance Covered", 20)<<center("Year of Manufacture", 20)<<center("Colour", 20)<<center("Is Reserved?", 20)<<endl;
    
    for(auto i:carDatabase){
        C = i.second;
        cout<<center(C.getCarNumber(), 20)<<center(C.getCompany(), 20)<<center(C.getModel(), 20)<<center(C.getSeats(), 20)<<center(C.getDistanceCovered(), 20)<<center(C.getYearOfManufactue(), 20)<<center(C.getColour(), 20)<<center(C.getIsReserved(),20)<<endl<<endl;
    }
}

void Admin::deleteCar(){
    putIntoCarDatabase();
    string carNumber;
    int choice;
    cout<<"Enter the car number you want to delete"<<endl;
    cin>>carNumber;
    map<string, car>::iterator it;
    it = carDatabase.find(carNumber);
    
    if(it == carDatabase.end()){
        cout<<"Car not present!"<<endl;
        return;
    }
    car C;
    C = it->second;
    cout<<"Do you want to delete the "<<C.getYearOfManufactue()<<" "<<C.getCompany()<<" "<<C.getModel()<<"?"<<endl; 
    cout<<"Enter 1 for YES, 2 for NO"<<endl;
    cin>>choice;
    
    if(choice == 2){
        cout<<"Car not reserved"<<endl<<endl;
        return;
    }

    else cout<<"Car successfully deleted"<<endl<<endl;
    carDatabase.erase(it);
    ofstream ofs;
    ofs.open("cars.txt", ofstream::out | ofstream::trunc);
    ofs.close();
    
    for(auto jt:carDatabase){
        C = jt.second;
        writetofile(C.getCompany(), C.getModel(), C.getCarNumber(), C.getSeats(), C.getDistanceCovered(), C.getYearOfManufactue(), C.getColour(), C.getIsReserved());
    }
}