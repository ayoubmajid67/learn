#include<iostream>
using namespace std; 

main(){

// memory  address = a location in memory where data is stored : 
// a memory address can accessed with & (address-of operator ): 


string name="bro"; 
int age=12; 
bool student= true; 

cout<<&name<<endl;
cout<<&age<<endl;
cout<<&student<<endl;

return 0 ;     
}