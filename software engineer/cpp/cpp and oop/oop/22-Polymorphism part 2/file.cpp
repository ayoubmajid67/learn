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


// virtual pure function : 
virtual int area()=0;  


// virtual function : 
// virtual int  area(){

// cout<<"the base aria function"<<endl; 
// return 0; 

     
// }
void show()
{


cout<<endl; 

cout<<"the width is :"<<width<<endl; 
cout<<"the height is : "<<height<<endl; 

cout<<endl; 
}



//  polymorphism : 


void printArea(){
 
 cout<<"the area is :"<<this->area()<<endl<<endl; 


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


// the  name of a class that has a pure function is called => abstract class 

// you can't declare an object from the abstract class : 

CPolygon *ptr= new cTriangle(5,4); 

ptr->show(); 

 cout<<ptr->area();

 cout<<"\n\n---------"<<endl<<endl;   
 ptr->printArea(); 
 

system("cls"); 
 // array of pointer : 

 CPolygon *arr[3]={new cTriangle(5,3),new cRectangle(4,2),new cTriangle(2,2)};

  for(int i=0 ;i<3;i++){

    arr[i]->printArea(); 

  }

    return 0; 
}