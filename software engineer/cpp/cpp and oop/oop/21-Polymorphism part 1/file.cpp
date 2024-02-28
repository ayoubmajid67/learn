#include<iostream>
using namespace std; 



class CPolygon{

   
protected : 
int width, height; 

 
public :


CPolygon(int width=0 , int height=0){
 this->width=width; 
 this->height=height; 
}

void setValue(int width ,int height ){


this->width=width; 
this->height=height; 


}




virtual int  area(){

cout<<"the base aria function"<<endl; 
return 0; 

     
}
void show()
{


cout<<endl; 

cout<<"the width is :"<<width<<endl; 
cout<<"the height is : "<<height<<endl; 

cout<<endl; 
}

};


class cRectangle:public CPolygon{
public: 



cRectangle(int width=0 , int height=0):CPolygon(width,height){}


int area(){
cout<<"the rectangle area : "<<endl; 
 return width*height; 

}

};


class cTriangle:public CPolygon{

public:
cTriangle(int width=0 , int height=0):CPolygon(width,height){}
int area(){
cout<<"the Triangle area : "<<endl; 
    return (width*height)/2; 
}

}; 



int main(){
 

CPolygon ob1(5,4); 
cRectangle ob2(5,10); 
cTriangle ob3(5,4); 

ob1.show(); 
ob2.show(); 
ob3.show(); 

cout<<"the aria is : "<<ob2.area()<<endl; 
cout<<"the aria is : "<<ob3.area()<<endl; 




system("cls");
// polymorphism : 

CPolygon *ptr; 


ptr=&ob3; 
ptr->setValue(5,4); 
ptr->show(); 

// the ptr.area() it's not delcare in the base class then to use it we need to add a base version in the base class 

// because the type of pointer is CPolygon then to use a function in a child class you need to  delcare a base version in the parent class  
 
 

 // if I call this function  it will apply the aria function  in the base class then I can't use the aria function in another classes 
 //  for that I need to use  the  *virtual* keyword  befor the  the base function  
 // like this : 

 // virtual baseFunctionName(){
    //code 
 //}

   
cout<<ptr->area(); 




    return 0 ; 
}