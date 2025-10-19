#include<iostream>
using namespace std; 



class stove{

private :
int temperature=0;

public: 
stove(int temp){
 SetTemp(temp); 

}
int getTemp(){

 return  temperature; 
}

void SetTemp(int Temp){

 if(Temp <0)  temperature=0; 
else  temperature=Temp ; 
}

}; 


int main(){

//Abstraction =hiding unnecessary data from outside a class 
// getter = function that makes a private attribute  READABLE

// setter = function that makes a private attribute WRITEABLE 

stove ob1(2); 
int temper=ob1.getTemp();

cout<<"the temperature is : "<<temper<<endl;

cout<<"set the new temperature : "; 
cin>>temper; 

ob1.SetTemp(temper);

cout<<"the new temp is : "<<ob1.getTemp(); 




   return 0 ; 
}