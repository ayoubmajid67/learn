#include<iostream>
using namespace std; 



struct student {

string name; 
double gpa; 
bool enrolled; 


};


main(){
struct  student e1; 
e1.name="ayoub";
e1.gpa=3.2; 
e1.enrolled=true; 

cout<<"name : "<<e1.name<<endl; 
cout<<"gpa : "<<e1.gpa<<endl; 
cout<<"enrolled : "<<e1.enrolled<<endl; 
 // struct  = a structure that group variable under one name 


}