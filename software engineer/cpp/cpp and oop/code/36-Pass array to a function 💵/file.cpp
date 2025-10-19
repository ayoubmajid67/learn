#include<iostream>
using namespace std; 

double getTotal(double prices[],int n){
double total=0;

for(int i=0;i<n;i++){

 total +=prices[i]; 

}
return total; 


}

int main(){
double prices[]={49.99,232.22,42.03,342.12,897.23}; 
int n =sizeof(prices)/sizeof(double); 
cout<<"total = "<<getTotal(prices,n); 


}