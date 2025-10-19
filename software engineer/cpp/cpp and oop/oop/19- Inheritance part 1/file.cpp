
// inheritance : 

// base class-->derived class  cpp  social (parent ->child ) 

//super class --> sub class  java social

//member private : can access from the same class
// protected  can access from the derived class and at the same class
//member public can access from anywhere  

#include<iostream>

using namespace std;

class CPolygon{
protected: 
int width,height; 

public : 
void setValues(int a ,int b ){
width=a;
height=b; 


}

}; 
//the  default  type of Inheritance is private : 
//class className: typeOfInheritance className{//code}; 


//public : normal behavior this mode allows   you access to the public members in parent class within the child class object anywhere  and protected in the child class 
// private : mains  public or inherited members  can't be used out of the inherited class (main  ||  not member function) 
//private :  all inherited members will be private in the child class 
class CRectangle:public CPolygon
{

public: 
int area(){
    return width*height; 
}

};


class CTriangle:public CPolygon
{

public: 
int area(){
    return (width*height)/2; 
}

};


    class a{
    
    int i; 
    protected: 
    int j; 
    public :
    int k; 
    int T; 

    void get(){
        this->i; 
    
    }
    }; 

    class b:  a 
    {
    int x; 
    // parentClass::memberElement to private : 
    protected: 
    // parentClass::memberElement  to protected 
    public : 
    int y; 

    // make the private  or protected element public from the parent class : 
    a::k; 

    a::j; 
    int get_j(){
        return j;
        this->x;//it's private element in the b class can access just within the class 
        this->y; //it's a public element in the B class 
        this->k; //it's a public element in the a class  and the b class inherited by the a class in private mode and that allows to b class access to Y justgv7u in its class  
        this->j; //it's a public element in the a class  and and the b class inherited by the a class in private mode and that allows to b class access to Y jus in its class 
        
    }

    };

    class c:public b{


    
    void getSize(){

        this->y; //it's a public element in the B class 

        //make an element public : 
        
    this->j;


    }
    }; 

    int main(){
    {
    CRectangle ob1; 
    CTriangle ob2; 
    ob1.setValues(5,4);
    ob2.setValues(5,4);
    cout<<"the area :"<<ob1.area()<<endl; 
    cout<<"the area :"<<ob2.area()<<endl; 
    }

    a Aob; 
    Aob.k; //it's a public element in the A class 
    Aob.T;  //it's a public element in the A class 


    b Bob; 
    Bob.y; //it's a public element in the B class 

    Bob.k; //it's should be private in the main but we use a::k in the b class that allows u to change the type of inheritance to public then we use this element in the 
    // main function  

    c Cob; 
    Cob.y; //it's a public element in the B class  and and the c class inherited by the b class in public mode and that allows to c class access to Y in the main function 

    Cob.j; 


    return 0;    
    }