#include<iostream>
#include<iomanip>
using namespace std; 


int sum(int a=0, int b=0 ){
    return a+b;
}

double avg(double p1=0,double p2=0, double p3=0 ){

return (p1+p2+p3)/3; 
}

int max(int n1, int n2, int n3 ){
 int max=n1; 
 if(max<n1) max=n1;
if(max<n2) max=n2; 
if(max<n3) max=n3; 

return  max; 

}

void p(){
    cout<<"adel"<<endl; 
}
int mul(int a=1,int b=1){
    return a*b; 
}


void edit(int *a, int *b){
 ++(*a);
 ++(*b); 
}
int main(){

cout<<"welcome"<<endl; 


// write a program  that add two integer number : 
cout<<"x=1 and y=20"<<endl;
int x=1,y=20; 
int z=x+y; 
cout<<"the sum is : "<<z<<endl; 


// write again    a program  that add two integer number : 
cout<<"f=1 and g=20"<<endl;
int f=11,g=22;
int k=f+g; 
cout<<k<<endl; 

// we can use a function to ignore the repetition and make the code easy to edit ..

//{return}function_name(arguments){//code}; 

cout<<"the sum is : "<<sum(5,6)<<endl;


// get data from user : 

cout<<"\n"<<"get data from user :\n";  


cout<<"entre x and y  : "; 
cin>>x>>y;
cout<<" the sum is : "<<sum(x,y)<<endl;

// write a function that help us to know the average  of three  mark : 
cout<<"\n"<<"// write a function that help us to know the average  of three  mark : \n"; 
double m1=0,m2=0,m3=0; 
cout<<"entre a value :"; 
cin>>m1>>m2>>m3;
cout<<setprecision(2)<<fixed<<avg(m1,m2,m3); 

//write a function that  return the maximum of three number : 
int n1,n2,n3; 
cout<<endl<<"write a function that  return the maximum of three number : "<<endl; 
cout<<"entre a value :"; 
cin>>n1>>n2>>n3;
cout<<"the maximum value is : "<<max(n1,n2,n3)<<endl; 


// write function that print adel :
cout<<"\n"<<"// write function that print adel :"<<endl; 
p(); 

// write a function that  return the multiplication : of two number :
int a,b;
cout<<"\n"<<"// write a function that  return the multiplication : of two number :\n"; 

cout<<"entre two number ";
cin>>a>>b;  
cout<<"the multiplication is  :"<<mul(a,b); 

//  write a function that provide  to edit the value of two variable :
a=20;
b=30; 
cout<<"\n"<<"//  write a function that provide  to edit the value of two variable :"<<endl; 
cout<<"a=20, b=30"<<endl; 
edit(&a,&b); 
// or edit(a,b) && void edit(int &a, int &b){//code}; 

cout<<"the new value is :"<<"\n"<<"a= "<<a<<" b="<<b<<endl;

//build  functions :
/*
#include<cmath>
pow(a,b);
sqrt(x);
ceil(x);
floor(x);
round(x);
max(a,b);
min(a,b);
log(x);
abs(x);
swap(a,b); 
y=x+y;
x=y-x;
y=y-x; 
 



*/ 

return 0 ; 
}