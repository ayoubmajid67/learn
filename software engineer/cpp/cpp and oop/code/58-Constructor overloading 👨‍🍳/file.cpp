#include<iostream>


using namespace std; 


class pizza {

public: 
string topping1;
string topping2;  
pizza(){

} 
 pizza (string topping1){
    this->topping1=topping1; 

}

 pizza (string topping1,string topping2 ){
    this->topping1=topping1;
    this->topping2=topping2;  
}

}; 
int main(){

//overloaded constructors =multiple constructors W/ same name but different parameters 
// allows for varying arguments when instantiating  an object : 
pizza ob1("papperoni");
pizza  ob2("mushrooms","peppers");
pizza ob3; 

cout<<ob1.topping1<<"\n____________\n";

cout<<ob2.topping1<<endl;
cout<<ob2.topping2<<"\n_______________\n"; 

cout<<ob3.topping1<<"\n____\n"; 



return 0 ; 
}