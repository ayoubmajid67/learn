#include<iostream>
#include<string> 
#include<iomanip> 

using namespace std; 

// constructor has the same name of the class 
// it's called  in declaration of an object   :

class compte{
private: 
int key; 
string email; 
string  password; 

public : 

//  type of constructor  : ____________

//empty constructor :  doesn't has any argument  
compte(){
    cout<<"first constructor : "<<endl; 
    key=0; 
    email="unknow"; 
    password="unknow"; 
}

//parametrize constructor :  
compte(int  key, string email , string password ){
      this->key=key; 
    this->email=email; 
    this->password=password; 
}


void SetCompte(int  key, string email , string password  ){ 
    this->key=key; 
    this->email=email; 
    this->password=password; 
}
void showCompte(){
    cout<<endl; 
    cout<<"key = "<<key<<endl; 
    cout<<"email = "<<email<<endl; 
    cout<<"password = "<<password<<endl; 
    

    cout<<endl; 
}

}; 


class copyP{ 
private :  
int a1,a2,a3,a4,a5,a6,a7,a8; 
public :
copyP(int a1,int a2,int a3 ,int a4 ,int a5 ,int a6 ,int a7 ,int a8){
   this->a1=a1;
    this->a2=a2;
    this->a3=a3; 
    this->a4=a4; 
    this->a5=a5; 
    this->a6=a6; 
    this->a7=a7; 
    this->a8=a8; 

}

copyP(const copyP &ob){
    this->a1=ob.a1;
    this->a2=ob.a2;
    this->a3=ob.a3; 
    this->a4=ob.a4; 
    this->a5=ob.a5; 
    this->a6=ob.a6; 
    this->a7=ob.a7; 
    this->a8=ob.a8; 
}
void display(){
    cout<<endl<<a1<<" "<<a2<<" "<<a3<<" "<<a4<<" "<<a5<<" "<<a6<<" "<<a7<<" "<<a8<<endl; 
}

};

int main(){


cout<<" ------------------empty  constructor : ------------------"<<endl;
// call the empty constructor  :____

   //class_name ob() or ob 
compte ob1;
ob1.showCompte(); 
ob1.SetCompte(1,"ayoubmajid@gmail.com","majid12345"); 
cout<<"after set value to  the data member : "<<endl; 
ob1.showCompte(); 


cout<<" ------------------parametrizes constructor : ------------------"<<endl;
// call the parametrizes constructor : 
compte  ob2(2,"youness@gmail.com","adoun12345"); 
ob2.showCompte(); 



//copy class :
cout<<"copyP class : "<<endl; 

copyP obC1(1,2,3,4,5,6,7,8); 
copyP obC2(obC1);
obC1.display(); 

obC2.display();  

   
   
   
   

   
    return 0; 
}