#include<iostream>
using namespace std; 



///  class Template :  T 
template<class T>
class number{

T first, second; 

public: 
//parametrized  constructor: 
number(T a , T b):first(a),second(b){}

// 
T max(); 

}; 


// if you want to file a template function out of the class : 
template<class T>
T number<T>::max(){
  return first>second ? first:second; 
}




//template specialization : 

// create a class to handel with a specific data type :


template<class T>
class AChar{

    public: 
    AChar(T x){
     cout<<x<<" is not a character"<<endl; 

    }
}; 

// Special class for charater : 
template<>
class AChar<char>
{
 public : 
 AChar(char x){

     cout<<x<<" is a character :"<<endl; 
 }
 
 

}; 


int main(){


// int it will replace in each T in the class : 
number<int>ob1(5,10);
number<double>ob2(5.3,10.4);

cout<<"the maximum element is : "<<ob1.max()<<endl; 
cout<<"the maximum element is : "<<ob2.max()<<endl; 




AChar<int>ob3(2);  
AChar<char>ob4('A');  


return 0; 
}