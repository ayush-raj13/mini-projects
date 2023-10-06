#include "user.h"
#include "database.h"
#include "car.h"
#include "password.h"
#include <bits/stdc++.h>

extern map<string,car> carDatabase;

void user::reservation(){
    putIntoCarDatabase();
    string carNumber;
    int choice;
    cout<<"Enter the car number you want to reserve"<<endl;
    cin>>carNumber;
    map<string, car>::iterator it;
    it = carDatabase.find(carNumber);
    if(it == carDatabase.end()){
        cout<<"Car not present!"<<endl<<endl;
        return;
    }
    car C;
    C = it->second;
    cout<<"Do you want to reserve the "<<C.getYearOfManufactue()<<" "<<C.getCompany()<<" "<<C.getModel()<<"?"<<endl; 
    cout<<"Enter 1 for YES, 2 for NO"<<endl;
    cin>>choice;
    
    if(choice == 2){
        cout<<"Car not reserved"<<endl<<endl;
        return;
    }
    else cout<<"Car successfully reserved!!"<<endl<<endl;
    carDatabase.erase(it);
    C.setReserve();
    carDatabase.insert({C.getCarNumber(),C});
    ofstream ofs;
    ofs.open("cars.txt", ofstream::out | ofstream::trunc);
    ofs.close();
    
    for(auto jt:carDatabase){
        C = jt.second;
        writetofile(C.getCompany(), C.getModel(), C.getCarNumber(), C.getSeats(), C.getDistanceCovered(), C.getYearOfManufactue(), C.getColour(), C.getIsReserved());
    }
}

