#include<iostream>
using namespace std;

 struct car{

string name; 
double price;  


};

car insert_car(car e1){
 cout<<"entre the name : "; 
 cin>>e1.name; 
 cout<<"entre the price : "; 
 cin>>e1.price; 

return e1; 
}

void  print(car e1 ){ 
    cout<<" the name : "<<e1.name<<endl;
       cout<<" the price : "<<e1.price<<endl;


}
main(){

car e1; 
e1=insert_car(e1); 
print(e1); 
} 
