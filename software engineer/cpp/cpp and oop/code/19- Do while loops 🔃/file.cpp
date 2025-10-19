#include<iostream>
using namespace std; 




int main(){

int number; 


// do {//code}while(condition) : 
cout<<"while loop : "<<endl; 
while(number<0){
  cout<<"entre a number : ";
  cin>>number;  
}


cout<<"do while loop : "<<endl; 
do{

 cout<<"entre a number : ";
  cin>>number; 

}while(number <0 ); 


return 0; 
}