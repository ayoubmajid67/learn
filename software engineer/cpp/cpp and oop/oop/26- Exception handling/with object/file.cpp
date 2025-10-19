#include<iostream>

using namespace std; 


class cException{

int arr[100]; 

public : 
cException(){
fill(arr,arr+100,0); 

} 

int getElement(int index){

 if(index>=100) throw xBig(); 
 else if(index<0) throw xSmall(); 
 else {
    return arr[index]; 
 }


}

class xBig{
public: 
xBig(){


}

static void Big(){
cout<<"big element :"<<endl; 

}

}; 
class xSmall{
public: 
xSmall(){

}

 static void Small(){
   cout<<"Small element : "<<endl;   
}

}; 

}; 

 


int main(){

int i=0; 

cException a; 
try{
 
 cout<<"choice the element :"<<endl; 
 cin>>i; 
 cout<<"the element : \t"<<a.getElement(i)<<endl; 
     
}

catch(cException::xSmall){
 cException::xSmall::Small(); 

}

catch(cException::xBig){
cException::xBig::Big(); 

}


    return 0; 
}