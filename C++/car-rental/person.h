#ifndef PERSON_H
#define PERSON_H

#include <bits/stdc++.h>

using namespace std;

class Person{
    private:
        string username;
        string password;
        string phone_no;
    public:
        Person(string un, string pw, string phone);
        Person() = default;
        void search(string modelName);
        void search(int carNumber);
        virtual void display();
        string getPassword();
        string center(const string s, const int w);
};

#endif