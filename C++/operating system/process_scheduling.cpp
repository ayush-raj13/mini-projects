#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<climits>

using namespace std;

class process {
    public:
        int id, at, bt, ct, tat, wt;
};

void fcfs(vector<process>& p, int n) {
    auto lambda = [](process& p1, process& p2) {
        return p1.at < p2.at;
    };
    sort(p.begin(), p.end(), lambda);

    int current_time = 0;
    current_time = current_time + p[0].at;

    for(int i=0;i<n;i++) {
        current_time = current_time + p[i].bt;
        p[i].ct = current_time;
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;

        if(i + 1 < n && current_time < p[i+1].at) {
            int time = p[i+1].at;
            current_time = current_time + time;
        }
    }

    return;
}

void sjfnp(vector<process>& p, int n) {
    int current_time = 0;
    int pCompleted = 0;
    vector<bool> completed(n, false);

    while(pCompleted != n) {
        int min_indX = -1;
        int mini = INT_MAX;
        for(int i=0;i<n;i++) {
            if(p[i].at <= current_time && completed[i] == 0) {
                if(p[i].bt < mini) {
                    mini = p[i].bt;
                    min_indX = i;
                }
                if(p[i].bt == mini) {
                    if(p[i].at < p[min_indX].at) {
                        mini = p[i].bt;
                        min_indX = i;
                    }
                }
            }
        }
        if(min_indX == -1) {
            current_time++;
        }
        else {
            current_time = current_time + p[min_indX].bt;
            p[min_indX].ct = current_time;
            p[min_indX].tat = p[min_indX].ct - p[min_indX].at;
            p[min_indX].wt = p[min_indX].tat - p[min_indX].bt;
            completed[min_indX] = true;

            pCompleted++;
        }
    }

    return;
}

void rr(vector<process>& p, int n) {
    int tq;
    cout << "Enter time quantum: ";
    cin >> tq;

    auto lambda = [](process& p1, process& p2) {
        return p1.at < p2.at;
    };
    sort(p.begin(), p.end(), lambda);

    queue<int> rq;
    vector<int> bt_remaining(n);
    vector<bool> vis(n, false);

    for(int i=0;i<n;i++) {
        bt_remaining[i] = p[i].bt;
    }

    rq.push(0);
    vis[0] = true;

    int current_time = 0;
    int completed = 0;

    while(completed != n) {
        int indX = rq.front();
        rq.pop();

        if(bt_remaining[indX] == p[indX].bt) {
            current_time = max(current_time, p[indX].at);
        }

        if(bt_remaining[indX] - tq > 0) {
            bt_remaining[indX] -= tq;
            current_time += tq;
        }
        else {
            current_time += bt_remaining[indX];
            bt_remaining[indX] = 0;
            completed++;

            p[indX].ct = current_time;
            p[indX].tat = p[indX].ct - p[indX].at;
            p[indX].wt = p[indX].tat - p[indX].bt;
        }

        for(int i=1;i<n;i++) {
            if(bt_remaining[i] > 0 && p[i].at <= current_time && vis[i] == false) {
                rq.push(i);
                vis[i] = true;
            }
        }

        if(bt_remaining[indX] >0) rq.push(indX);

        if(rq.empty()) {
            for(int i=1;i<n;i++) {
                if(bt_remaining[i] > 0) {
                    rq.push(i);
                    vis[i] = true;
                    break;
                }
            }
        }
    }

    return;
}

void srtf(vector<process>& p, int n) {
    vector<int> bt_remaining(n);
    vector<bool> completed(n, false);
    for(int i=0;i<n;i++) {
        bt_remaining[i] = p[i].bt;
    }
    int current_time = 0;
    int pCompleted = 0;

    while(pCompleted != n) {
        int min_indX = -1;
        int mini = INT_MAX;
        for(int i=0;i<n;i++) {
            if(p[i].at <= current_time && completed[i] == false) {
                if(bt_remaining[i] < mini) {
                    mini = bt_remaining[i];
                    min_indX = i;
                }
                if(bt_remaining[i] == mini) {
                    if(p[i].at < p[min_indX].at) {
                        mini = bt_remaining[i];
                        min_indX = i;
                    }
                }
            }
        }

        if(min_indX == -1) {
            current_time++;
        }
        else {
            bt_remaining[min_indX] -= 1;
            current_time++;
            if(bt_remaining[min_indX] == 0) {
                p[min_indX].ct = current_time;
                p[min_indX].tat = p[min_indX].ct - p[min_indX].at;
                p[min_indX].wt = p[min_indX].tat - p[min_indX].bt;

                pCompleted++;
                completed[min_indX] = true;
            }
        }
    }

    return;
}

void printInfo(vector<process>& p, int n) {
    double atat=0,awt=0;

    cout << "Process\tAT\tBT\tCT\tTAT\tWT\n";
    for(int i=0;i<n;i++) {
        cout << p[i].id << "\t" << p[i].at << "\t" << p[i].bt << "\t" << p[i].ct << "\t" << p[i].tat << "\t" << p[i].wt << "\n";
        atat += p[i].tat;
        awt += p[i].wt;
    }
    atat /= n;
    awt /= n;

    cout << "Average TAT: " << atat << endl;
    cout << "Average WT: " << awt << endl;

    return;
}

int main() {
    int n = 0;
    cout << "Enter the number of process: ";
    cin >> n;

    vector<process> p(n);

    for(int i=0;i<n;i++) {
        p[i].id = i + 1;
        cout << "Enter " << "process " << p[i].id << " arrival and brust time: ";
        cin >> p[i].at;
        cin >> p[i].bt;
    }

    cout << "1 FCFS\n" << "2 SJF (Non-Preemptive)\n" << "3 SRTF\n" << "4 Round Robin\n" << "Enter your choice: ";
    int choice;
    cin >> choice;

    switch (choice)
    {
    case 1:
        fcfs(p, n);
        printInfo(p, n);
        break;
    
    case 2:
        sjfnp(p, n);
        printInfo(p, n);
        break;

    case 3:
        srtf(p, n);
        printInfo(p, n);
        break;

    case 4:
        rr(p, n);
        printInfo(p, n);
        break;

    default:
        cout << "Enter any valid choice" << endl;
        break;
    }

    return 0;
}