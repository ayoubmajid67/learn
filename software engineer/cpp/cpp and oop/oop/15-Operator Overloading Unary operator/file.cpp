#include<iostream>

using namespace std; 

// prefix : ++x  add then do...
// postfix x++  do.. then add


class Unary{

int x,y; 

public:
Unary(){};
Unary(int x,int y ){
    this->x=x;
    this->y=y; 
}

void show(string name){
  
    cout<<name<<endl; 
    cout<<"x = "<<x<<endl;
    cout<<"y=  "<<y<<endl;  
cout<<endl; 
}

// int 
/*
Now, both pre-increment and post-increment operators are defined for the Unary class, 
and you can use them as ob1++ and ++ob1 in your code.
 The post-increment operator requires the int parameter,
 which is not used in the implementation, 
but its presence is necessary to distinguish it from the pre-increment operator.
*/
//prefix expression : 
Unary operator++(){

x+=1;
y+=1; 
return *(this);  
}


// [int] mean that you will work with the postfix expression : 
Unary operator++(int){
Unary temp; 
temp.x=x++;
temp.y=y++;  
return temp;  
}

//prefix expression : 
Unary operator--(){

x--;
y--; 
return *(this);  
}

Unary operator-(){
  x=-x;
  y=-y; 
  return *(this); 

}

bool operator!(){
  return (x==0 && y==0); 
}

// [int] mean that you will work with the postfix expression : 
Unary operator--(int){
Unary temp; 
temp.x=x--;
temp.y=y--;  
return temp;  
}


void operator+=(Unary ob){
    x+=ob.x; 
    y+=ob.y; 
    
}

void operator-=(Unary ob){
    x-=ob.x; 
    y-=ob.y; 
    
}
void operator*=(Unary ob){
    x*=ob.x; 
    y*=ob.y; 
    
}
void operator/=(Unary ob){
    x/=ob.x; 
    y/=ob.y; 
    
}

};

using namespace std; 

int main(){


Unary ob1(2,0);
ob1.show("ob1");
-ob1;
ob1.show("ob1"); 

if(!ob1) cout<<" true"<<endl;
else cout<<"false"<<endl; 

Unary ob2(2,1); 
ob1+=ob2; 
ob1.show("ob1"); 

 return 0;    
}