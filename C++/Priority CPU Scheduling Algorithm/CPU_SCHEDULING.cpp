//OperatingSystemAlgorithmByTarunBairagi
#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;

struct Process {
    int id;
    int executionTime;
    int arrivalTime;
    int priority;
    int waitingTime;
    int turnaroundTime;
};

class PriorityScheduler {
private:
    vector<Process> processes;

public:
    void getData() {
        int n;
        cout << "Enter the number of processes: ";
        cin >> n;

        processes.resize(n);
        for (int i = 0; i < n; ++i) {
            cout << "Enter execution, arrival time, and priority of process " << i + 1 << ": ";
            cin >> processes[i].executionTime >> processes[i].arrivalTime >> processes[i].priority;
            processes[i].id = i + 1;
        }
    }

    void calculateTimes() {
        sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
            return a.priority > b.priority;
        });

        int currentTime = 0;
        for (auto& process : processes) {
            process.waitingTime = currentTime - process.arrivalTime;
            if (process.waitingTime < 0) {
                process.waitingTime = 0;
                currentTime = process.arrivalTime;
            }
            process.turnaroundTime = process.waitingTime + process.executionTime;
            currentTime += process.executionTime;
        }
    }

    void display() {
        cout << setw(12) << "\nProcess ID" << setw(20) << "Waiting Time" << setw(20) << "Turnaround Time" << endl;
        for (const auto& process : processes) {
            cout << setw(12) << process.id << setw(20) << process.waitingTime << setw(20) << process.turnaroundTime << endl;
        }
    }
};

int main() {
    PriorityScheduler scheduler;
    scheduler.getData();
    scheduler.calculateTimes();
    scheduler.display();
    return 0;
}