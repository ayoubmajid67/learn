
#include<iostream>
using namespace std; 


// declaration of tri class : 
class Tri; 

 class CRectangle{
 int width, height; 

  public : 
  CRectangle(){
    width=0; 
    height=0; 

  }
   CRectangle(int width, int height ){
    this->width=width; 
    this->height=height;
  }


 friend int Sum( Tri T , CRectangle R);
 void Show(Tri ob); 


 };


class  Tri{

    int w,h;  

    public : 
   Tri(){
    w=0; 
    h=0; 
   }


    Tri(int w, int h){
        this->w=w;
        this->h=h; 
    }

    friend int Sum(Tri T , CRectangle R); 
  friend class  CRectangle; 
}; 


int Sum(Tri T , CRectangle R){

 return T.w +R.width; 

}



void CRectangle::Show(Tri ob){
 
 cout<<endl; 
 cout<<"the width is : "<<ob.w<<endl;
 cout<<"the height is : "<<ob.h<<endl; 
cout<<endl; 

}
int main(){

CRectangle ob1(4,5); 
Tri ob2(5,10);

cout<<"the sum is "<<Sum(ob2,ob1)<<endl;

ob1.Show(ob2); 


}