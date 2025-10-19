#include<iostream>
#include<string>
using namespace  std; 

int main(){

string arr[5]; 
int n=0; 
  int size=sizeof(arr)/sizeof(arr[0]); 

  for(int i=0;i<size;i++){
 cout<<"entre a food you like # or enter Q to quit " <<i<<": "<<endl; 
getline(cin>>ws,arr[i]); 
if(arr[i]=="q") break;
n++; 
    
  } 
 cout<<"you like the following food : "<<endl; 
  for(int i=0;i<n;i++ ){
     cout<<arr[i]<<endl;

  }






  return 0 ;   
}