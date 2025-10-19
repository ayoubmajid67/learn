#include<iostream>
using namespace std; 
// static  means that  line of code  is  sharing thing between all its functions : 


// example : 

void  increase(){

// sharing line : it will be set one time : 
static int x=0; 

cout<<"the value is "<<++x<<endl; 

}

class student{
private : 
//static class member : 
  static int count; 
string name; 
int first,second,final,total,id; 
public : 

// empty constructor : 
student(){

name="no name"; 
id=0; 
first=second=final=0; 
count++; 


}
//static  member function : 
static void print_count(){

    cout<<"the number of students constructed "<<count<<endl; 
}


};

int student::count=0; 



int main(){


student ob1,ob2,ob3; 
 
student::print_count(); 

    return 0; 
}

 // static variables : ______________________________________________________________________________
/*
Certainly! In C++, when you declare a variable as `static` inside a function, it changes the variable's 
storage class, giving it a special property that differs from regular local variables.
 Here are the main characteristics and behavior of `static` variables inside functions:

1. Persistence of Value:
   - The key feature of a `static` local variable is that its value persists across multiple function calls.
    When the function exits, the variable doesn't get destroyed as regular local variables do. Instead, 
    it retains its value until the program terminates.

2. Initialization:
   - `static` local variables are initialized only once when the function is first called.
    Subsequent calls to the function do not reinitialize the variable; it retains its last assigned value.

3. Lifetime:
   - The lifetime of a `static` local variable extends throughout the program's execution.
    It is created before the program starts executing and exists until the program terminates.

4. Scope:
   - The scope of a `static` local variable is limited to the function in which it is declared. 
   It cannot be accessed or modified from outside the function.

Here's an example to illustrate these properties:

```cpp
#include <iostream>
using namespace std;

void exampleFunction() {
    static int count = 0; // static local variable

    cout << "Count: " << count << endl;

    count++;
}

int main() {
    for (int i = 0; i < 5; i++) {
        exampleFunction();
    }

    return 0;
}
```

Output:
```
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
```
In the above example, the `exampleFunction()` contains a `static` local variable `count`. 
During each call to `exampleFunction()`, the `count` variable retains its value and increments by one on each subsequent call.

Use Cases of Static Local Variables:
- Maintaining state between function calls: Static local variables are often used to maintain state information between function calls.
 For example, counting the number of function invocations or storing intermediate results in recursive functions.
- Initialization of global resources: Static local variables can be used to initialize a global resource only once,
 ensuring that the resource is not reinitialized on each function call.

Keep in mind that `static` local variables are not thread-safe in a multi-threaded environment. If you need thread safety, 
consider using alternative synchronization mechanisms or using thread-local storage (C++11 onwards) 
to ensure each thread gets its own copy of the variable.
*/

//all:  ______________________
/*
In C++, the `static` keyword has multiple meanings and uses depending on the context in which it is used. 
Here are the main uses of the `static` keyword in C++:

1. Static Variables:
   - When used inside a function, `static` changes the storage class of a local variable. It means the variable's value persists across
    function calls.
   - When used inside a class or a struct, `static` creates a class-level or static variable shared by all instances of that class.
    It means the variable is not tied to any specific object but belongs to the class itself.

Example of a static variable inside a function:
```cpp
void exampleFunction() {
    static int count = 0; // static local variable
    count++;
    cout << "Count: " << count << endl;
}
```

Example of a static variable inside a class:
```cpp
class MyClass {
public:
    static int classVariable; // static class-level variable
};

int MyClass::classVariable = 0; // Definition of the static variable outside the class

int main() {
    MyClass::classVariable = 42; // Accessing the static variable using the class name
    return 0;
}
```

2. Static Member Functions:
   - When used in a member function of a class, `static` means the function is tied to the class itself, 
   not to a particular instance of the class. As a result, it can be called without creating an object of the class.

Example of a static member function:
```cpp
class MyClass {
public:
    static void staticFunction() {
        cout << "This is a static member function." << endl;
    }
};

int main() {
    MyClass::staticFunction(); // Calling the static member function without creating an object
    return 0;
}
```

3. Static Data Members in Classes:
   - When used with a data member of a class, `static` makes the data member shared by all instances of the class. 
   It means all objects of the class will share the same memory location for that data member.

Example of a static data member in a class:
```cpp
class MyClass {
public:
    static int staticData; // static data member
};

int MyClass::staticData = 42; // Definition of the static data member outside the class

int main() {
    MyClass obj1;
    MyClass obj2;

    obj1.staticData = 100;
    cout << obj2.staticData << endl; // Output: 100

    return 0;
}
```

These are the main uses of the `static` keyword in C++. Each use provides different behavior and functionality, 
and it's essential to understand the context in which `static` is used to make proper use of it in your code.
*/

// inline keyword : 
/*
Sure! In C++, the `inline` keyword is used as a compiler hint to suggest that a function or variable should be expanded in-line
 (i.e., replaced directly at the call site) instead of being treated as a separate entity. The `inline` keyword is primarily 
 used for small, simple functions and static data members.

When you mark a function or a static data member as `inline`, it tells the compiler that the function's or data member's 
definition will be provided in multiple translation units (source files). In other words,
 the function or data member may have multiple definitions across different source files, 
 but the definitions should be identical.

Using the `inline` keyword allows the compiler to decide whether to inline the function or not.
 The compiler may choose not to inline the function if it believes inlining would not be beneficial 
 (e.g., the function is too large or too complex).

Here's an example of using the `inline` keyword for a function:

```cpp
#include <iostream>
using namespace std;

inline int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(10, 20);
    cout << "Result: " << result << endl; // Output: Result: 30

    return 0;
}
```

In this example, we define a simple `add` function marked as `inline`. Since it is a small function, 
the compiler may choose to inline it at the call site, which can lead to better performance by avoiding the overhead
 of a function call.

When using the `inline` keyword for static data members in a class (C++17 or later), 
it allows you to provide the definition and initialization directly inside the class definition, as shown in the previous answer:

```cpp
class MyClass {
public:
    inline static int staticData = 42;
};
```

Note that inlining decisions are ultimately made by the compiler, and the `inline` keyword is just a suggestion. 
The compiler may choose not to inline a function or static data member if it determines that inlining would not be beneficial or appropriate. However, in some cases, explicitly marking functions or data members as `inline` can help improve performance, especially for small, frequently used functions.
*/



