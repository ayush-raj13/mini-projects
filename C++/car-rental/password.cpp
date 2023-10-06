#include <bits/stdc++.h>
#include <conio.h>
#include "password.h"

using namespace std;

void writetofile(string un, string pwd, string phone){
    ofstream of;
    of.open("users.txt", ios::app);
    of<<un<<" "<<pwd<<" "<<phone<<endl;
    of.close();
}

void writetofile(string company, string model, string number, string seats, string distance, string year, string colour, string reserved){
    ofstream of;
    of.open("cars.txt", ios::app);
    of<<company<<" "<<model<<" "<<number<<" "<<seats<<" "<<distance<<" "<<year<<" "<<colour<<" "<<reserved<<endl;
    of.close();
}

string takePasswdFromUser()
{
    string ipt;
    char ipt_ch;
    while (true) {
        ipt_ch = getch();
        if (ipt_ch < 32) {
            cout << endl;
            return ipt;
        }
        ipt.push_back(ipt_ch);
        putchar('*');
    }
}