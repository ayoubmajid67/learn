#include<iostream>
using namespace std; 

// 1- normal sum ------------------[-]
int sumOneType(int x , int y){

return x+y;
}


// 2- template sum : --------------[-]


//template <[typename or class] template_name ,..> 
// template_name variable-name 


// return an element of  t1 type :  (in the run type)
// template function : 
template <typename t1>
t1 sumTemplate(t1 x , t1  y){

    return x+y; 
                     
}



//3- multiple parameter : ----------[-] 

// the return type it will depend on the type of the first argument : 
template <typename m1 ,typename m2>
m1 sumMUltiTemplate(m1 x, m2 y){
    return x+y; 
}


//auto keyWord  it will be return the compatible type depended on the type of arguments passed to function:
template <typename m1, typename m2>
auto sumMultiTemplateAuto(m1 x, m2 y){
    return x + y;
}



int main(){

// 1- normal sum ------------------[-]

int xInt=10,yInt=5; 

cout<<"the sum of x and y is "<<sumOneType(xInt,yInt)<<endl; // 15 




// 2- template sum : --------------[-]
double xDb=5.33,yDb=5.44; 


//pass Xdb and yDb then replace the t1 type by double : 
cout<<"the sum of x and y is "<<sumTemplate(xDb,yDb)<<endl;

// pass an argument from type to type : functionName<type1,typ2...> (argument1,argument2...);

// xInt with xDb to sumTemplate :
//cout<<"the sum of x and y is: "<<sumTemplate(xInt,xDb); // this line make error because we passe multi type to one Template element :

// I need to use the casting to make the type compatible of the xInt or use multi parameter : 

cout<<"the sum of x and y is: "<<sumTemplate<double>(xInt,xDb); 




//3- multiple parameter : ----------[-] :
cout<<"\n\nthe sum of x and y is: "<<sumMUltiTemplate(xInt,xDb)<<endl;  // return int : 
cout<<"the sum of x and y is: "<<sumMUltiTemplate(double(xInt),xDb)<<endl;  // return double: 
cout<<"the sum of x and y is: "<<sumMUltiTemplate<double>(xInt,xDb)<<endl;  // return double: 
cout<<"the sum of x and y is: "<<sumMUltiTemplate<double>(xDb,xInt)<<endl;  // return double: 
cout<<"the sum of x and y is: "<<sumMUltiTemplate<int>(xDb,xInt)<<endl;  // return int: 

cout<<"\n\nthe sum of x and y is: "<<sumMultiTemplateAuto(xInt,xDb)<<endl; 


    return 0; 
    return 0; 
}