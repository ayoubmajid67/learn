#include<iostream> 
using namespace std; 


void walk_I(int steps); 
void walk_R(int steps); 

int main(){

// recursion = a programming technique  where function invokes itself from within 
// break a complex into a repeatable single step ; 

// iterative vs recursion 
// advantages =less code an is cleaner

// disadvantages = uses more memory  and slower 
cout<<" iterative walk \n "; 
walk_I(50);
cout<<"recursion walk \n "; 
walk_R(50); 

return 0 ; 
}

void walk_R(int steps ){

if(steps==0)   return; 

else {
cout<<"you take  a step \n";{
walk_R(steps-1); 
}

}
}

void walk_I(int steps ){

for(int i=0 ; i<steps;i++){
cout<<"you take a step : \n "; 

}

}