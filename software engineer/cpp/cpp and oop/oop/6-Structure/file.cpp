#include<iostream>
#include<string>

using namespace std; 
 

// declare a car struct : 
struct car
{
    string name;
    string color; 
    int maxSpeed; 
    int model; 

    car(string name="undefined" , string color="undefined", int maxSpeed=0, int model=0):name(name),color(color),maxSpeed(maxSpeed),model(model){}

void f(){cout<<"hi";}  // you can add a function into the struct : 

}T={"mercedes","black",320,2021}; // we can declare an element just here we don't need to declare the object in the main function :
//  we just add the name befor the semicolon(;)

// print function that print the information of the car struct: 

void print(car ob){
    cout<<endl; 
    cout<<"the name is "<<ob.name<<endl; 
    cout<<"the color is "<<ob.color<<endl; 
    cout<<"the maxSpeed is "<<ob.maxSpeed<<endl; 
    cout<<"the model is "<<ob.model<<endl; 
  cout<<endl; 
 }


int main()
{
// structName objectName; 
cout<<"first way: "<<endl; 
car g; 
g.name="kia"; 
g.color="red";
g.maxSpeed=280; 
g.model=2016; 


print(g); 
// initialize  value of a struct :  objectName={arg1Val,arg2Val..}
cout<<"second way: "<<endl; 
g={"hyundai","green",320,2019};
print(g); 

cout<<"the  third  way :"<<endl; 
print(T); 



return 0 ;     
}