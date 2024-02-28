#include<iostream>
using namespace std; 


class animal {

public :
bool alive =true; 
void eat(){
cout<<"This animal is eating :"<<endl; 

}



};

class Dog: public animal{
public : 

void bark(){

    cout<<"The dog goes Woof "<<endl; 
}


}; 

class cat:public animal {

public: 
void meow(){

    cout<<"the cat goes meow ! "<<endl; 
}

};

int main(){
// inheritance =A class can recieve attributes  attributes and method from another class
// children classes inherit from a Parent class 
// helps to reuse similar code found within multiple classes : 



return 0 ;

}