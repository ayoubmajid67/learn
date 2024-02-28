#include<iostream>

using namespace std; 

int main(){

// break = break our of a loop 
// continue= skip current iteration : 


cout<<"continue"<<endl; 
for(int i=0;i<=20;i++){
if(i==13) continue;
cout<<i<<" ";

}
cout<<"\nbreak"<<endl; 
for(int i=0;i<=20;i++){
if(i==13) break;
cout<<i<<" ";

}

return 0 ;     
}