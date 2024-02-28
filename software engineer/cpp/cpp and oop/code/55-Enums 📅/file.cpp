#include<iostream>
using namespace std ; 
enum day{sunday=0,monday=1,tuesday=2,wednesday=3,thursday=4,friday=5}; 


main(){
day today=sunday; 
//enums = a user defined data type that consists of paired named-integer constants 
//great  if you a set of potential options  

switch (today)
{
case sunday:
    cout<<"sunday"<<endl; 
    break;

case monday:
    cout<<"monday"<<endl; 
    break;

case tuesday:
    cout<<"tuesday"<<endl; 
    break;

case wednesday:
    cout<<"wednesday"<<endl; 
    break;

case thursday:
    cout<<"thursday"<<endl; 
    break;

case friday:
    cout<<"friday"<<endl; 
    break;


default:
cout<<"you should entre a available  value : "<<endl; 
    break;
    
    }



 


}