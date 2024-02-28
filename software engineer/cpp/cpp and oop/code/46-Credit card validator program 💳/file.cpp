#include<iostream>
using namespace std; 


int  get_double(const int number );
int  sum_evenDigits(const string cardNumber); 
int sum_odd(const string cardNumber );
bool  valid(const string cardNumber);

int main(){
/*
luhn algorithm : 

1-double every second (even  index )digit from right to left if doubled  is 2 digits ,split them  (remove the second and fourth  from L to R  )

2- (1): add all single numbered digits from right to left 

3- add all odd (index ) numbered digits from right to left : 
4- sim results from step 2 & 3 
5-  if step 4 is divisible by 10, # is valid :

*/

 string cardNumber="2323234328426664";
 bool stat=valid(cardNumber);

 stat==true ? cout<<"valid " : cout<<"not valid" ; 


 return 0;    
}

int  get_double(const int number ){

return  number%10 +(number/10)%10; 

}

int  sum_evenDigits(const string cardNumber){
int result=0;
for  (int i = cardNumber.size()-2; i >= 0; i-=2)
{
    result+= get_double((cardNumber[i]-'0')*2); 

}
 
return result; 


}
int sum_odd(const string cardNumber ){
int result=0; 
for  (int i = cardNumber.size()-1; i >= 0; i-=2){
 result+=(cardNumber[i]-'0');  

}
return result; 
}
bool  valid(const string cardNumber){

int result= sum_odd(cardNumber) +sum_evenDigits(cardNumber); 



if(result%10==0) return true; 
else return false; 

}