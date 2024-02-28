
// call the iostream library : 
#include<iostream>

// ignore the using of the std:: 
using namespace std; 


class timeC{

private: 
int h,m,s; 

public : 
timeC(){
 h=0; 
 m=0; 
 s=0; 

}
  timeC(int h,int m,int s ){
 this->h=h; 
 this->m=m; 
 this->s=s; 

}


void print() const 
{

    cout<<"the time "<<h<<":"<<m<<":"<<s<<endl; 
}



}; 





// the main function : 
int main(){

// const : 
// const DataType VariableName = Value; 
const  float pi=3.14; 

// you can't change the value of  the constant variables : 



// constant object : 

// const object main is the object that can just handle (call) with the  constants functions :
const timeC ob1(12,0,0); 

// const function : 
ob1.print(); 

// const function : 
// DataType  functionName() const {//code}


return 0; 
}