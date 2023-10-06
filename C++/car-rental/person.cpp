#include "person.h"
#include "database.h"
#include "car.h"
#include <bits/stdc++.h>

using namespace std;

extern map<string, car> carDatabase;

Person::Person(string un, string pw, string phone): username(un), password(pw), phone_no(phone){

}


string Person::getPassword(){
    return password;
}

string Person::center(const string s, const int w) {   
    stringstream ss, spaces;
    int padding = w - s.size();                 
    for(int i=0; i<padding/2; ++i)
    spaces << " ";
    ss << spaces.str() << s << spaces.str();    
    if(padding>0 && padding%2!=0)               
        ss << " ";
    return ss.str();
}

void Person::display() {
    putIntoCarDatabase();
    car C;
    cout<<center("Car Number", 30)<<center("Company", 30)<<center("Model", 30)<<center("Seats", 30)<<center("Distance Covered", 30)<<center("Year of Manufacture", 30)<<center("Colour", 30)<<endl;
    
    for(auto i:carDatabase){
        C = i.second;
        
        if(C.getIsReserved() == "1") continue;
        cout<<center(C.getCarNumber(), 30)<<center(C.getCompany(), 30)<<center(C.getModel(), 30)<<center(C.getSeats(), 30)<<center(C.getDistanceCovered(), 30)<<center(C.getYearOfManufactue(), 30)<<center(C.getColour(), 30)<<endl<<endl;
    }
}