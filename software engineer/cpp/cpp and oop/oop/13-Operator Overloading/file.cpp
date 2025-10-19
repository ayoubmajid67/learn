#include<iostream>
using namespace std; 


class Triangle{

float width; 
float height; 

public : 

// empty constructor : 
Triangle(){
 width=0; 
 height=0; 

}

//parametrize constructor : 
Triangle(float width , float  height=0){
this->width=width; 
this->height=height; 

} 

// show  class Object : 
void Show(){

cout<<endl; 
cout<<"the width is : "<<width<<endl; 
cout<<"the height is : "<<height<<endl; 
cout<<endl; 

}

// show any Object function : 
static void showAny(Triangle ob){
cout<<endl; 
cout<<"the width is : "<<ob.width<<endl; 
cout<<"the height is : "<<ob.height<<endl; 
cout<<endl; 
}

// add Two objects function : 
void addObject(Triangle ob1 , Triangle ob2){
  

  width=ob1.width+ob2.width; 
  height=ob1.height+ob2.height;
 
 
}

// DataType operator(operator)(arguments){//code}
Triangle operator-(Triangle ob2){
    Triangle Temp; 
    Temp.width=width-ob2.width;
    Temp.height=height-ob2.height; 
    return Temp; 
}


Triangle operator*(Triangle ob){
    Triangle Temp; 
    Temp.width=width*ob.width;
    Temp.height=height*ob.height; 
    return Temp;    
}

Triangle operator+(Triangle ob){
    Triangle Temp; 
    Temp.width=width+ob.width;
    Temp.height=height+ob.height; 
    return Temp;    
}


Triangle operator/(Triangle ob){
    Triangle Temp; 
    Temp.width=width/ob.width;
    Temp.height=height/ob.height; 
    return Temp;    
}



// destructor  

~Triangle(){
    cout<<"an element has been deleted : "<<endl; 
}

};




int main(){

Triangle ob1(3,3);
Triangle ob2(7,17); 
ob1.Show(); 
ob2.Show();  

//Operator Overloading : 
Triangle ob3; 

ob3=ob1-ob2 +ob2 ; // ob1.operator_(ob2);
cout<<"\n----------\n";
ob3.Show();  
ob3=ob1.operator-(ob2).operator+(ob2);  
ob3.Show();

 return 0;    
}


/*
Sure! To achieve the expression `c1 * c2 + c2` using the `operator*` and `operator+` methods explicitly,
 you can write the following C++ code:

```cpp
#include <iostream>

class Complex {
private:
    double real;
    double imaginary;

public:
    Complex(double r = 0.0, double i = 0.0) : real(r), imaginary(i) {}

    // Overloading the + operator for Complex objects
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imaginary + other.imaginary);
    }

    // Overloading the * operator for Complex objects
    Complex operator*(const Complex& other) const {
        double result_real = real * other.real - imaginary * other.imaginary;
        double result_imaginary = real * other.imaginary + imaginary * other.real;
        return Complex(result_real, result_imaginary);
    }

    // Overloading the << operator for output stream
    friend std::ostream& operator<<(std::ostream& os, const Complex& c) {
        os << c.real << " + " << c.imaginary << "i";
        return os;
    }
};

int main() {
    Complex c1(2.0, 3.0);
    Complex c2(1.0, 2.0);

    Complex result = c1.operator*(c2).operator+(c2);

    std::cout << "c1: " << c1 << std::endl;
    std::cout << "c2: " << c2 << std::endl;
    std::cout << "Result: " << result << std::endl;

    return 0;
}
```

In this version, instead of using the operator overloads directly as `c1 * c2 + c2`,2
 we explicitly call the `operator*` and `operator+` methods using the `operator.` notation, 
 like this: `c1.operator*(c2).operator+(c2)`. This will achieve the same result as before, and the output will be:

```
c1: 2 + 3i
c2: 1 + 2i
Result: 0 + 9i
```

While this syntax is valid, it is less common and less readable than using the regular operators directly,
 as shown in the previous examples. Therefore, 
 it is generally recommended to use the standard operator notation when overloading operators.

*/