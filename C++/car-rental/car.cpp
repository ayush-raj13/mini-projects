#include "car.h"
#include <bits/stdc++.h>

using namespace std;
car::car(string company, string model, string number, string seats, string distance, string year, string colour, string reserved): 
carCompany(company), carModel(model), carNo(number), seats(seats), distanceCovered(distance), yearOfManufacture(year), colour(colour), isReserved(reserved){

}
string car::getCompany(){
    return carCompany;
}

string car::getModel(){
    return carModel;
}

string car::getCarNumber(){
    return carNo;
}

string car::getSeats(){
    return seats;
}

string car::getDistanceCovered(){
    return distanceCovered;
}

string car::getYearOfManufactue(){
    return yearOfManufacture;
}

string car::getColour(){
    return colour;
}

void car::setReserve(){
    isReserved = "1";
}

string car::getIsReserved(){
    return isReserved;
}