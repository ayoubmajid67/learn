#include<iostream>
using namespace std; 
int main(){
string cars[][3]={{"mustang","Escape","F-150"}
                 ,{"corvette","Equinox","Silverado"}
                 ,{"Challenger","Durango","Ram 1500"}};  




for(int i=0;i<3 ;i++){
for(int j=0;j<3;j++){
      j==0    ?  cout<<"(" : cout<<"     ";   
             
    cout<<cars[i][j];
   
}
cout<<"\n" ;   

}
return 0; 
}