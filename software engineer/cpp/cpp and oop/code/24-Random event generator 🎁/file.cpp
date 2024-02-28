#include<iostream>
#include<ctime> 
using namespace std; 


int main(){

// pseudo-random = not truly random (but close )
srand(time(0));
 // num=rand%end +start 
int num=rand()%5 +1;

 //condition ? expression1:expression2 
 if(num==1 ) cout<<"you win a bumper sticker \n";
 if( num==2 ) cout<<"you win a  free lunch \n" ; 
  if( num==3 ) cout<<"you win a  t-shirt \n" ; 

 if( num==4 ) cout<<"you win a  gift card \n" ; 

 if( num==5 ) cout<<"you win a  concert tickets  \n" ; 





return 0; 
}