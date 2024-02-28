// this is a pointer that point at  current object: 

#include<iostream>
using namespace std;


class stud{
int x; 
public : 

 void setX(int x){
    (*this).x=x; // this->x the same 
 }

void address(){
cout<<this<<endl;

}
void show(){
    cout<<"the value of x : "<<x<<endl; 
}



};
int main(){
 stud ob1; 

cout<<&ob1<<endl; 
 ob1.address(); 

ob1.setX(2);
ob1.show(); 

  return 0;   
}