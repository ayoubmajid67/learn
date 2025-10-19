#include<iostream>
using namespace std; 




class Student{

string name; 
int id; 

public : 

// empty constructor : 
Student(){ 
 name="undefined"; 
 id=0; 
    
}
// the parametrize  constructor : 
Student(string name , int id ){ 
    this->name=name; 
    this->id=id; 

}

// show function : 
void Show(){
    cout<<endl;
     cout<<"the name is "<<name<<endl; 
     cout<<"the id is "<<id<<endl; 

     cout<<endl;  
}

// destructor  : 
~Student(){
 cout<<"the object has been deleted : "<<endl; 

} 

};


int main(){

    // array is a constant pointer : 
 int arr[5]={10,50,40,77,33}; 


// print the array using pointer : 
for( int i=0; i<5;i++){
cout<<*(arr+i)<<endl;
   
} 


// linked pointer with array : dataType *pointerName=arrayName or &arrayName[0]; 
 int *ptr=arr;  
 cout<<*ptr<<endl; 



// pointer to object :  
 Student *ob1= new Student("ayoub",2) ,ob2;
 ob1->Show(); 

delete ob1; 

// array to object:________________________________________________

// className arrayName={className(arguments),className(), object}

// when we pass an object the array don't call the constructor : 

Student arr1[3]={Student("radnan",2),Student(),Student("anas",4)}; 
arr1[0].Show(); 

// pointer to arrayObject:_______________________________________
cout<<"\n_____________________\n"; 
Student *ptrObject=arr1; 

for(int i=0 ; i < (sizeof(arr1)/sizeof(Student));i++){

//ptrObject++->Show(); 
// or 
//(ptrObject+i)->Show();
// or 
ptrObject[i].Show(); 

}





return 0; 
}