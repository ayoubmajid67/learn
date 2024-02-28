#include<iostream>
using namespace std; 



class Relational{

int x,y,z; 
public: 
Relational(){

    x=y=z=0; 

}
Relational(int a,int b ,int c){

x=a;
y=b;
z=c; 
}


bool operator==(Relational ob){
 
return ( x==ob.x && y==ob.y  && y==ob.y ); 


}

bool operator!=(Relational ob){
 
return !(*(this)==ob ); 


}

// > op 
// < op 

// <= op 
// >= op 

};

int main(){
Relational a(10,10,10),b(10,10,10); 

if(a!=b){
    cout<<"true"; 
}
else{
    cout<<"false"; 
}

    return 0; 
}