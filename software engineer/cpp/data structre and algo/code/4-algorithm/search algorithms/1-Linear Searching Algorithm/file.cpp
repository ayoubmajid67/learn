#include<iostream>
using namespace std; 


void linearSearch(int a[],int size, int element ){
 
 for(int i=0;i<size;i++){
    if(a[i]==element) {
        cout<<"exist value "<<endl; 
        return; 
    }

 }

cout<<"not element found  "<<endl; 


}
int main()
{
int arr[]={1,2,42,41,95,23,5,2,6,2,6,2,78,8,456};
int size=(sizeof(arr)/sizeof(int));
linearSearch(arr,size,4526); 


}
