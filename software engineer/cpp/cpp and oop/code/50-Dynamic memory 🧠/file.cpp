#include<iostream>
using namespace std; 

main(){


//dynamic memory = Memory  that allocated after program is already  compiled & running 
// use the new operator to allocate 
// memory in the heap rather than the stack 
// useful when we don't know how mush memory we will need makes our programs  more flexible
// especially when accepting user input . 

//  type pointer-name= new type ; 
 int *p=new int ; 
 *p=21;
 cout<<&p<<endl; 

 //delete free memory : 
 delete(p); 


 // dynamic array : 
  int size; 
  cout<<"how may grades to enter in : "; 
  cin>>size; 
 char *arr=NULL; 
 arr= new char[size];

 for(int i=0;i<size;i++){

cout<<"entre the grades : "; 
cin>>arr[i];

 } 

 cout<<arr<<endl; 
 // delete an dynamic array : 

delete [] arr; 

arr=NULL; 
if(arr==NULL) cout<<" the memory free with successfully : \n  "; 


}