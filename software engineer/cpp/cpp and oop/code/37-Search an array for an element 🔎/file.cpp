#include<iostream>
using  namespace std; 


bool searchArray(int arr[],int size, int element ); 


int main(){
 
  int numbers[]={1,2,3,4,5,6,7,8,9,10}; 

  int size=sizeof(numbers)/sizeof(int); 

int search; 

cout<<"entre the element  to search for : "; 
cin>>search; 

bool x=searchArray(numbers,size,search); 
if(x) cout<<"yes"<<endl; 

else cout<<"no"; 






}
bool searchArray(int arr[],int size, int element ){

for(int i=0;i<size;i++){

    if(arr[i]==element) return 1 ; 
}

return 0 ; 

}