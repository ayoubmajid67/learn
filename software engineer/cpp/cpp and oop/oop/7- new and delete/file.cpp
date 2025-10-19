#include<iostream>
using namespace std; 



class Rectangle{
int *width,*height; 

public : 

Rectangle(); 
Rectangle(int width  , int height ); 

int Area(){

    return (*width * *height); 
}


~Rectangle(); 
};

// empty constructor : 
Rectangle::Rectangle(){
    width=new int; 
    *width=0;
    height= new int ; 
    *height=0 ;  
}

// parametrize  constructor :  
Rectangle::Rectangle(int width  , int height ){ 
this->width=new int; 
*(this->width)= width;

this->height=new int; 
*(this->height)=height; 

} 


Rectangle::~Rectangle(){



}


int main()
{
 
 
 // pointer :  dataType *pointerName=&variable
 int p=5; 
  int *ptr=&p;   
 // *pointerName return  value
 cout<<*ptr<<endl;  
 // pointerName return address 
cout<<ptr<<endl; 

 // the pointer it will be related at all datatype it will be selected automaticaly depend  on the type of pointed variable  : 
 void *prt;

 // the  using of  new  instruction  :  dataType *pointerName = new dataType (new => ignore the using of  variables   )
 // the new directly return a random available  space  in the memory : 
 int *ptr1= new int; 

 // flush the pointer or free by using delete ; 
 delete ptr1; 
 cout<<ptr1<<endl; 

 

 Rectangle ob1(10,100),ob2;  

cout<<"the area is : "<<ob1.Area()<<endl; 
cout<<"the area is : "<<ob2.Area()<<endl;  
    
}

int *intArray = new int[5];  // Allocate an array of 5 integers
delete [] intArray;           // Deallocate the array

  // Dynamically allocate an object using new
  
      MyClass *myObjectPtr = new MyClass(10);

    // Call a member function of the dynamically allocated object
    myObjectPtr->printValue();

    // Deallocate the object using delete
    delete myObjectPtr;