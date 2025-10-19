#include<iostream>
#include<string>
#include<cstring>
#include<iomanip>

using namespace std; 

// ~className(){//code}  no argument 

// free the object from memory  when we will achieve  : }
// break the object from bottom to top : 


class Rectangle{
// members are private by default : 
private : 
int w,h; 
public : 

// constructor : 
Rectangle()//:w(a),h(b)
{
    w=0; 
    h=0; 
     cout<<"a Rectangle has been created :"<<endl; 
}
Rectangle(int w,int h ){
    this->w=w;
   this->h=h; 
 cout<<"a Rectangle has been created :"<<endl; 
 Rectangle R3; 
 }

// ~destructor :

~Rectangle(){

    cout<<"\nheight : "<<this->h<<endl; 
    cout<<"weight "<<this->w<<endl; 
    cout<<"a Rectangle has been deleted :"<<endl;  
}







}; 



class phone
{
char name[10]; 
char model[10];
int price; 


public : 

phone(){
 strcpy(name,"undefined"); 
  strcpy(model,"undefined"); 
  price=0; 
}
phone(char n[], char m[], int p ){
strcpy(name,n);
strcpy(model,m);
price=p; 

}

void print(); 
~phone(); 
};


// dataType className::functionName(){//code}
void phone::print(){

cout<<"\n---------\n"; 
cout<<"the name is :"<<name<<endl; 
cout<<"the model is :"<<model<<endl;
cout<<"the price is : "<<price<<endl;  

}

//className::~className(){//code}
phone::~phone(){


cout<<"object destructed"<<endl;

}




// declare  a  not  member function : 

void F(phone ob){

phone obTemp=ob;

obTemp.print(); 

}

int main(){


phone ob1,ob2("huawei","mate 9",400); 

F(ob2); 
     system("pause"); 




     return 0 ; 


}