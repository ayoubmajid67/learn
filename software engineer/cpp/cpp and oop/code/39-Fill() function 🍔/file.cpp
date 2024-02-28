#include<iostream>
using namespace std; 


void display(string arr[], int size){

    for(int i=0; i<size;i++){
     cout<<arr[i]<<endl; 

    }
}
main(){
    //fill =fills a range of elements with a specified value fill(begin,end,value); 
  
    string foods[100];
    const int size=100; 
    fill(foods,foods+size/2,"pizza");
    fill(foods+size/2,foods+size,"hamburger");  
    display(foods,size); 
    
 

}