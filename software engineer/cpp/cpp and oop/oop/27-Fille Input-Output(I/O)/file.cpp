#include<iostream>

// call the library file : 
#include<fstream>
using namespace std;
int main(){

// you use  parametrized constructor to open the file newFile("src:name","type"); 
ofstream newFile; 

// open a file : 
newFile.open("fx.txt");


// check if the file is open or not : 
if(newFile.is_open()) cout<<"it's open "<<endl;
else cout<<"there has been an error :"<<endl; 


// write in a file  : 
newFile<<"1-hello world"<<endl;

// to close a file :  
newFile.close(); 

// example 1 : Creat a file to write the name and age from User until he will click [cntrl +z]


// crete new file : 
 ofstream example1F("example1.txt"); 

 string name; 
 int age; 

 cout<<"ente the student name then age : "<<endl; 
 cout<<"click [cntrl +z] to exit"<<endl; 


 while(cin>>name>>age){

example1F<<name<<" "<<age<<endl; 

}


//example 2 : 



// binary type of file 
ofstream example2F("example2.txt",ios::binary); 

    int arr[5]={5,3,3,2,54};


// convert from array to array of character :  
example2F.write((char*)(&arr),5*sizeof(int)); 





// ifstream object to read : 
ifstream example3F("example2.txt",ios::binary);

int arr[20];

example3F.read((char*)&arr,5*sizeof(int));

for(int i=5 ;i<20;i++){
    arr[i]=i*10; 
    
}
for(int i=0;i<20;i++){
cout<<arr[i]<<" "; 

}



return 0 ; 
}

