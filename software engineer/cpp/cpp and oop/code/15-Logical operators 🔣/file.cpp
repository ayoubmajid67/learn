#include<iostream>

using namespace std; 


int main(){

// &&=check id two conditions are true : 
// ||= check if at least one of two conditions is true : 
// != reverses the logical  state of its operand : 

int temp; 

std::cout<<"entre the temperature : "; 
cin>>temp; 
if(temp >0 && temp<30){ 

cout<<" the temperature it's good : "<<endl; 
}
else{ 
 cout<<"the temperature it's bad : "; 

}



    return 0; 
}