#include<iostream>
using namespace std; 
 


class myClass

{

int a,b; 
public : 

// empty constructor : 
myClass(){
 a=0; 
 b=0; 

}

//parametrize constructor : 
myClass(int a ,int b ){
    this->a=a; 
    this->b=b; 

}


// destructor  :
~myClass(){
    cout<<"am element has been deleted : "<<endl; 
} 


// friend function : 

//friend  DataType functionName(parameters); 
friend int sum(myClass ob); 



};

int sum(myClass ob){
   return  ob.a+ob.b; 
}



 int main(){

myClass ob1(10,20); 
cout<<"the sum is : "<<sum(ob1)<<endl; 



return 0; 

 }