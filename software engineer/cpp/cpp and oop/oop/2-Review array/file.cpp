#include<iostream>
#include<iomanip>
#include<cstring>
using namespace std;

int main(){


// array it a dataStructure that store a list of value 
// with the same  data type :

// type array[size]={v1,v2...,vsize};

// cout<<array[1];  

int x[50]={0}; 
x[1]=5; 


cout<<x[3]<<endl;

//initialize the array by a value  fill(begin,end,value) :
fill(x,x+50,2); 
cout<<x[0]<<endl;  



// or using a for loop : 
for(int i=0;i<50;i++){
    x[i]=0; 
}

cout<<x[0]<<endl;  

// print  the array : 

for(int i=0;i<50;i++){

    cout<<x[i]<<" ";
}
cout<<"\n";

// print the some of array : 

int s=0;
for(int i=0;i<50;i++){
s+=x[i]; 
    
}
cout<<"the sum of array : "<<s<<endl;

// get value from user : 

for(int i=0;i<5;i++){
cout<<" entre the value  "<<i<<": ";
cin>>x[i]; 
}

cout<<"\n"; 
for(int i=0;i<5;i++){

    cout<<x[i]<<" ";
}


// array of character : 
char g[5]={'a','y','o','u','\0'};
char t[]="ayoub majid"; 
cout<<g<<endl; 
cout<<t<<endl;


// get  string from user : 
char e[20]; 

cout<<"entre a string : ";


// add a break point '$' : 
cin.get(e,20,'$'); 
cout<<e;

// cin.getline(cin>>ws,array); 

// function <cstring>



strcpy(str1,str2); 
strcmp(str1,str2);
strcat(str1,str2);
strlen(str); 





// convert  :


atof(str). convert from string to float 
atoi(str); convert from string to integer :
atol(str); convert from string to double 
atoll(str);  convert from string to long double 

example : 
cout<<atof("1500")+1; 


// find an element in array : 


bool x=false; 
for(int i=0;i<size;i++){

    if(arr[i]==key){
     cout<<"found element :"
     x=true; 
    } 
}

if(false){
    cout<<"not found"<<endl; 
}




//sort in order :
// bubble  sort 
// select sort 




}

