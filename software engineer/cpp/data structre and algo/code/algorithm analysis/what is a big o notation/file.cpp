#include<iostream> 
using namespace std;

// O(n)
void sumAlgo1(double n ){ 
   double sum=0; 

    for(int i=0;i<=n;i++){
        sum+=i; 
    }
    cout<<"the sum is : "<<sum<<endl; 
}
//O(1): 
void sumAlgo2(double n ){

 double sum=(n*(n+1))/2; 
   cout<<"the sum is : "<<sum<<endl; 

}



int main(){

double n; 
cout<<"entre a  value : "; 
cin>>n; 
if(cin.fail()) cout<<"entre wa valid number : "<<endl; 
cin.clear(); 
fflush(stdin); 




cout<<"\nconstant Time behaviour : "<<endl; 
sumAlgo2(n); 

cout<<"\nlinear behaviour : "<<endl; 

sumAlgo1(n); 







    return 0; 
}


