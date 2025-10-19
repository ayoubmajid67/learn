#include<iostream>
#include<cstring>
#include<algorithm>

using namespace std; 


//struct 

//private : you don't have the right to arrive to the private element  only in  the class 
class  car{

private: 
 string name; 
    string color; 
    int maxSpeed; 
    int model;  


public : 

void setName(string name){
    this->name=name; 
}
void setColor(string color){
    this->color=color; 
}

void setMaxSpeed(int MaxSpeed){
    this->maxSpeed=MaxSpeed; 
}
void setModel(int model){
    this->model=model; 
}
string getName(){ return name;}
string getColor(){return color;}
int getMaxSpeed(){return maxSpeed;}
int getmodel(){return model;}


void print(){
    cout<<endl; 
    cout<<"the name: "<<name<<endl; 
    cout<<"the color: "<<color<<endl;
    cout<<"the  max speed: "<<maxSpeed<<"km"<<endl;
    cout<<"th model: "<<model<<endl;
    cout<<endl; 
}
}; 

int main(){

// create an car object : 
car ob1; 
ob1.setName("mercedes"); 
ob1.setColor("black");
ob1.setMaxSpeed(350);
ob1.setModel(2023);
ob1.print(); 


    return 0; 
}