#include<iostream>

using namespace std; 

enum EnumName {
    Enumerator1,    
    Enumerator2,
    // Add more enumerators as needed
};


// enum dataTypename {var1=value1,val2..}
enum Days {sat=1,sun,mon,tue,wed,thur,fri};



// the compiler explain this code : 
/*
const int sat=0; 
const int sun=1; 
*/
// ...



// example : 
class week{
Days d[7];

public : 

// parametrize constructor : 

week( Days W[]){

    for(int i=0;i<7;i++){
        d[i]=W[i]; 
    }


}

void display(string dStr[]){
    for(int i=0;i<7 ;i++){
    cout<<d[i]<<" "<<dStr[i]<<endl; 
}
}


};




int main(){

    // you can declare a variable or array of day : 
Days myDay=sun;
 cout<<"my day is "<<myDay<<endl;  
 string dStr[7]= { "sat","sun","mon","tue","wed","thur","fri" };
 Days  dayIndex[7]={mon,tue,wed,thur,fri,sat,sun}; 
/*
    // Define an array of Day enumeration with size 7
    Day daysOfWeek[7] = { Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday };

    // Accessing elements using index
    cout << "Day at index 0: " << daysOfWeek[0] << endl; // Output: Day at index 0: 0 (Saturday)

    // Modifying elements using index
    daysOfWeek[3] = Wednesday; // Change the value at index 3 to Wednesday


*/
 week ob1(dayIndex); 
 ob1.display(dStr);




   return 0;  
}


/*
Enumerations in programming languages like C++ are used to define a set of named constants that represent a finite set of related values. They provide a way to give meaningful names to integral constants, making the code more readable, maintainable, and less error-prone.

The real uses of enumerations include:

1. Improved Readability: Enumerations allow you to use descriptive names instead of plain numeric values, making the code more self-explanatory and easier to understand. For example, using `enum Day { Monday, Tuesday, ... }` is more readable than using `int day = 1;`.

2. Self-Documenting Code: When using enumerations, the code becomes more self-documenting. Someone reading the code can quickly understand the purpose and possible values of a variable just by looking at the enumeration definition.

3. Avoiding Magic Numbers: Enumerations help avoid the use of "magic numbers" in the code, which are hard-coded numeric values with no clear meaning. Using explicit names for constants helps prevent errors caused by mistyped or misunderstood values.

4. Type Safety: Enumerations are strongly typed. They allow the compiler to catch errors if you try to assign an incorrect value to an enumeration variable, providing an additional layer of type safety.

5. Compiler Optimization: In some cases, the compiler may optimize enumerations better than plain integers, resulting in more efficient code.

6. Enhancing Code Maintenance: If you need to add or remove values in the future, modifying an enumeration requires changing the definition in one place, making it easier to maintain the code.

7. Switch Statements: Enumerations are often used with `switch` statements, providing a concise and efficient way to handle different cases in the code.

Here's an example illustrating the benefits of using an enumeration for months of the year:

```cpp
#include <iostream>
using namespace std;

enum Month { January, February, March, April, May, June, July, August, September, October, November, December };

int main() {
    Month currentMonth = April;

    // Using the enumeration in a switch statement
    switch (currentMonth) {
        case January:
        case February:
        case December:
            cout << "It's winter!" << endl;
            break;
        case March:
        case April:
        case May:
            cout << "It's spring!" << endl;
            break;
        case June:
        case July:
        case August:
            cout << "It's summer!" << endl;
            break;
        case September:
        case October:
        case November:
            cout << "It's autumn!" << endl;
            break;
    }

    return 0;
}
```

In summary, enumerations provide a useful way to create named constants, improving code clarity, maintainability, and type safety.
*/