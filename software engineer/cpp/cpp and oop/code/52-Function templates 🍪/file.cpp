#include<iostream>
using namespace std;


template <typename T,typename U>  

auto maxV(T x,U y ){

    return (x>y) ? x:y; 
}

//auto choice the right return data type : 

//template <typename template_name ,..> 
// template_name variable-name 
main(){

// function template = describes what a function look like 
// can be used to generate as many overloaded for as needed, each using different data type 

cout<<maxV(true,1.1); 

}