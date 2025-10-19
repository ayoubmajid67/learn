#include<iostream>

using namespace std; 


class binary{

private : 
int x; 
int y; 
public : 

// empty constructor : 
binary(){
x=0;
y=0; 
}

// parametrize constructor : 
binary(int x, int y ):x(x),y(y){} 

//   + operator overloading for objects  :
binary operator+(binary ob){
binary temp; 
temp.x=x+ob.x; 
temp.y=y+ob.y; 
return temp; 
}
// + operator overloading for numbers 
binary operator+(int num){
binary temp; 
temp.x=x+num; 
temp.y=y+num; 
return temp; 
}



// print function : 
void print(){
cout<<endl;

cout<<"the value of x : "<<x<<endl; 
cout<<"the value of y : "<<y<<endl;

cout<<endl; 


}

friend binary  operator+(int num,  binary ob); 

};


// friend  +operator overloading function : 

binary  operator+(int num,  binary ob){

ob.x=ob.x+num;
ob.y=ob.y+num; 
return ob; 



}

int main(){

  binary ob1(5,4),ob2(5,6); 
   ob1.print(); 
   ob1=5+ob1+10;  // ob1= operator+(5,ob1).operator(10); 
  //ob1=operator+(5,ob1).operator+(10); 
   ob1.print(); 


    return 0; 
}