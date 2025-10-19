#include<iostream>
#include<cctype>
#include<string>
using namespace std; 

int main(){

double temp; 
char unit; 
cout<<"F=fahrenheit \n";
cout<<"C=celsius\n";

cout<<"what unit would you like to convert to ";
cin>>unit;

if(toupper(unit)=='F' ){
    
 cout<<"entre the temperature in Celsius : "; 
cin>>temp; 
temp=(1.8*temp) +32.0; 
cout<<"temperature is "<<temp<<"F"<<endl; 

} 
else if( toupper(unit)=='C' ){
 cout<<"entre the temperature in  fahrenheit : "; 
cin>>temp; 
temp=(temp -32.0)/1.8; 
cout<<"temperature is "<<temp<<"C"<<endl; 

}
else{

 cout<<"please entre in  only F or C " ;   
}




return 0;    
}