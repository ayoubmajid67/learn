#include<iostream>

using namespace std; 

class Distance {
private:
    int feet;
    int inches;

public:
    Distance(int feet = 0, int inches = 0) {
        this->feet = feet;
        this->inches = inches;
    }

    void print() {
        cout<<endl; 
        std::cout << "the feet is: " << feet << std::endl;
        std::cout << "the inches is: " << inches << std::endl;
        cout<<endl; 
    }

    friend istream& operator>>(istream &input, Distance& ob);
    friend ostream& operator<<(ostream &output, Distance& ob);

};

istream& operator>>(istream &input,Distance& ob) {
    input >> ob.feet >> ob.inches; //operator(cin,ob.feet)
  
    
}

 ostream& operator<<(ostream &output, Distance& ob){
      cout<<endl;
 
        std::cout << "the feet is: " << ob.feet << std::endl;
        std::cout << "the inches is: " << ob.inches << std::endl;
        cout<<endl; 
        return output; 
 }





class number{

int x; 

public: 

number():x(0){}
number(int x):x(x){}

void show(){
    cout<<"the value of x is : "<<x<<endl; 
}

operator int(){
   return int(x);  
}

};




class Array{

int arr[3];

public :

Array(){

    for(int i=0; i<3; i++){
        arr[i]=i+2; 
    }
}

Array(int a, int b , int c){
arr[0]=a;
arr[0]=b;
arr[0]=c;

}

void show(){

    for(int i=0 ;i <3;i++){
        cout<<arr[i]<<endl; 
    } 
    

}


int operator[](int x){

return arr[x]; 
}

};
int main() {
    Distance ob1,ob2;
  
cin>>ob1>>ob2; 

cout<<ob1<<ob2; 




number ob(10);
int x=0; 
x=ob; 
cout<<x<<endl; 
ob.show(); 

Array arr1;
arr1.show();  
cout<<"the value is "<<endl; 
cout<<arr1[2]<<endl;



    return 0;
}
