#ifndef USER_H
#define USER_H
#include "person.h"
#include <bits/stdc++.h>
using namespace std;

class user:public Person{
    public:
        user() = default;
        void reservation();
};
#endif