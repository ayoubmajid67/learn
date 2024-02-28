#include<iostream>
using namespace std; 
#include<ctime>
#include<string>


main(){
int num; 
int guess; 
int tries=0; 

srand(time(NULL)); 
num=(rand()%100) +1; 

cout<<"\n *********** NUMBER GUESSING GAME **********8\n"; 
do{
   
    cout<<"entre a guess between (1-100) "; 
    cin>>guess;
    tries++; 

    if(guess>num) cout<<"Too hight "<<endl; 
    else if(guess<num) cout<<"Too low"<<endl; 
    else cout<<"correct #og tries :"<<tries; 



}while(guess!=num);


}