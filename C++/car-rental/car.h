#ifndef CAR_H
#define CAR_H
#include <bits/stdc++.h>

using namespace std;

class car{
    private:
        string carCompany;
        string carModel;
        string carNo;
        string seats;
        string distanceCovered;
        string yearOfManufacture;
        string colour;
        string isReserved{"0"};
    public:
        car(string company, string model, string number, string seats, string distance, string year, string colour, string reserved);
        car() = default;
        string getCompany();
        string getModel();
        string getCarNumber();
        string getSeats();
        string getDistanceCovered();
        string getYearOfManufactue();
        string getColour();
        string getIsReserved();
        void setReserve();
};

#endif