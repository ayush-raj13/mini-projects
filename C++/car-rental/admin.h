#ifndef ADMIN_H
#define ADMIN_H

#include "person.h"
#include <bits/stdc++.h>

class Admin:public Person{
    public:
        Admin() = default;
        void add();
        void deleteCar();
        void display();
};

#endif