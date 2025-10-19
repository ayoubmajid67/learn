#include<iostream>
using namespace std;

main(){
//pointers = variable that stores a memory address of another variable 
// & address of operator 
// * dereference operator 
string name="bro"; 
string *ptr=&name; 
cout<<*ptr; 
}