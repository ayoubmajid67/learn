#include<iostream>
#include<iomanip>

using namespace std; 


class human{
public :  

string name="indefinite";  
string last_name="indefinite"; 
double salary=0.00;  

void eat(){
    cout<<"this person is eating "<<endl; 
}
void work(){

    cout<<"this person is working "<<endl; 
}

void display_info(human ob1); 

}; 



void human::display_info(human ob1){

cout<<endl; 
cout<<"the name : "<<ob1.name<<endl;
cout<<"the last  name : "<<ob1.last_name<<endl; 
cout<<"the salary : "<<setprecision(2)<<fixed<<ob1.salary;
cout<<endl;  


}
int main(){

// object = A collection of attributes  and method 
// they can have characteristics and could perform actions 
//can be used to mimic real world items 
// create from a class which acts  as as "blue-print" 

human ob1;
human ob2; 

ob2.display_info(ob1);
ob2.eat();
ob2.work(); 
cout<<"\n_________________\n"; 

ob1.name="ayoub"; 
ob1.last_name="majid";
ob1.salary=23233; 

ob1.display_info(ob1); 
ob1.eat();
ob1.work(); 



}