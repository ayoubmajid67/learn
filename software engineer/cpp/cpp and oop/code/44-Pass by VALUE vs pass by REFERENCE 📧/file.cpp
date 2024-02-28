// call library : 
#include<iostream>

using namespace  std; 


void pass_val(int a, int b ); 

void pass_ref(int *a, int *b);


int main(){

int a=5,b=10; 
// pass by val : 
cout<<"pass py value : "<<endl; 
cout<<"a= "<<a<<" b="<<b<<endl; 
pass_val(a,b); 
cout<<"a= "<<a<<" b="<<b<<endl; 

// pass by reference :
cout<<"pass py reference : "<<endl; 
cout<<"a= "<<a<<" b="<<b<<endl; 
pass_ref(&a,&b);
cout<<"a= "<<a<<" b="<<b<<endl; 





  return 0 ;   
}


void pass_val(int a, int b ){
 int temp=a; 
a=b; 
b=temp; 

}

void pass_ref(int *a, int *b){
    int temp=*a;
    *a=*b; 
    *b=temp; 

}