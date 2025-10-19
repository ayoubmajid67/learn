#include<iostream>
using namespace std; 

int main(){

cout<<"first structure \n \n";     
for(int i= 0 ;i<5;i++){

for(int j=0;j<=i;j++) cout<<"*";
cout<<"\n"; 

}


cout<<"\nsecond structure \n \n"; 
for(int i=0; i<5;i++){

for(int j=0; j<5-i;j++) cout<<" "; 

for(int j=0; j<i*2+1 ;j++) cout<<"*"; 

cout<<"\n"; 


}
cout<<"\nthe third structure \n\n"; 
for(int i= 5 ;i>=0;i--){

for(int j=0;j<=i;j++) cout<<"*";
cout<<"\n"; 


}

cout<<"\nfourth  structure \n \n"; 
for(int i=5; i>=0;i--){

for(int j=0; j<5-i;j++) cout<<" "; 

for(int j=0; j<i*2+1 ;j++) cout<<"*"; 

cout<<"\n"; 



}

return 0;    
}
