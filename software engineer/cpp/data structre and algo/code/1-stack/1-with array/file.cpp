#include<iostream>
#include<string>

using namespace std; 


template <typename u >
#define   size 20 
class stack{

private  : 

int top; 

u arr[size]; 

public : 

stack(){
 top=-1; 
 fill(arr,arr+size,0);  
}

bool isEmpty(){

    if(top==-1) return true;
    else return false; 
}
bool isFull(){
    if(top==size-1) return true; 
    else return  false; 
}

void push(u value){

    if(isFull()){
        cout<<"the stack overflow: "<<endl; 
        
    }
    else{
        top++; 
        arr[top]=value; 
    }
}


u pop(){

if(isEmpty()) cout<<"the stack is underflow : "<<endl; 

else{

u popValue=arr[top];
top--;  
return popValue; 

}


}
int count(){
    return top +1; 
}

int peek(int pos){

    if(isEmpty()) cout<<"the stack  underflow "<<endl; 
    else return  arr[pos]; 
}


void change(int pos, u val ){

if(isEmpty()) cout<<"the stack is empty : "<<endl; 

else if( pos < 0  ||  pos > size-1 ) cout<<"invalid position "<<endl; 

else{ 
    
    arr[pos]=val;
     cout<<"value Changed at location "<<endl; 
    } 
}

void display(){

    if(isEmpty()) cout<<"the stack underflow"<<endl; 
    
    else{
     for(int i=top ; i>=0;i-- ) cout<<arr[i]<<" "; 

    }
    cout<<endl;  
}

~stack(){

arr[size]={0};
top=-1; 

}

}; 


int main(){


//call the stack class : 
 
stack <int>ob1;

ob1.push(12); 
ob1.push(30);
ob1.push(44);
ob1.push(32);  
ob1.change(2,200);
ob1.display(); 
cout<<"the top value in the stack is : "<<ob1.peek(2)<<endl; 








return 1;   
}