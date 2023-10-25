Priority Scheduling Algorithm Readme

This C++ program demonstrates the Priority Scheduling algorithm for process scheduling. Priority Scheduling is a non-preemptive scheduling algorithm where each process is assigned a priority. The process with the highest priority is executed first. If two processes have the same priority, they are scheduled in the order of their arrival time.

Program Overview

The program collects information about processes, including execution time, arrival time, and priority. It then calculates the waiting time and turnaround time for each process using Priority Scheduling and displays the results in a tabular format. The program is designed to be efficient, readable, and easy to understand.

How to Use:

Compile the Program:

g++ -o CPU_SCHEDULING CPU_SCHEDULING.cpp

Run the Program:

./CPU_SCHEDULING

Program Structure
Struct Definition (Process):

Contains attributes: Process ID, Execution Time, Arrival Time, Priority, Waiting Time, Turnaround Time.
Class Definition (PriorityScheduler):

Methods:
getData(): Collects input data for processes.
calculateTimes(): Implements the Priority Scheduling algorithm to calculate waiting time and turnaround time.
display(): Displays the waiting time and turnaround time for each process.
Main Function:

Creates an instance of PriorityScheduler.
Calls getData(), calculateTimes(), and display() methods to execute the Priority Scheduling algorithm.
