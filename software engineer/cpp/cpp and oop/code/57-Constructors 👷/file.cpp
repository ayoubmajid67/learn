#include<iostream>
using namespace std; 



class student{

public : 
string name;
int age; 
double gpa; 

// if the name of the attribute  is the of the argument  in the constructor class
// you don't need to use keyword this.attribute; 

student(string name, int age , double gpa){
this->name=name; 
this->age=age; 
this->gpa=gpa; 
}

}; 




int main(){


// constructor = special method that is automatically called an object  is instantiated 
// useful for assigning values to attributes as arguments : 

student ob1("ayoub",18,2.3);  

cout<<ob1.name; 




    return 0 ; 
}