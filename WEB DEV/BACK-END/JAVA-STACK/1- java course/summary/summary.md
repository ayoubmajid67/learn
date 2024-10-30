**Java** is a high-level, object-oriented programming language developed by Sun Microsystems in 1995 and later acquired by Oracle Corporation. It is designed to be platform-independent, meaning that programs written in Java can run on any operating system that supports the Java Virtual Machine (JVM), a feature commonly referred to as "write once, run anywhere" (WORA).

Java follows an object-oriented programming (OOP) model, which makes code modular, flexible, and reusable. It supports key OOP principles like inheritance, encapsulation, abstraction, and polymorphism. Java is widely used for building applications ranging from mobile apps (especially Android apps), web applications, enterprise-level solutions, and large-scale systems, to distributed applications and cloud services.

### Why Choose Java?

1. **Platform Independence**: Java’s WORA capability ensures that code written once can run anywhere without modification, making it versatile across different operating systems and platforms.

2. **Large Ecosystem**: Java has a vast ecosystem of libraries, frameworks (like Spring, Hibernate), and development tools that speed up development and provide solutions to common tasks.

3. **Scalability**: Java is used in large-scale enterprise applications because of its scalability and ability to handle large workloads efficiently.

4. **Strong Community Support**: With a large global community, Java benefits from regular updates, extensive documentation, and active forums where developers can seek advice and share knowledge.

5. **Security**: Java provides built-in security features, such as bytecode verification, exception handling, and the Java Security Manager, which helps create secure and stable applications.

6. **Job Market Demand**: Java remains one of the most in-demand languages in the software development industry, especially for enterprise-level applications, backend services, and Android development.

7. **Mature and Reliable**: Being over two decades old, Java is mature and reliable, making it a good choice for projects that need long-term maintenance and stability.

If you're looking for a language with strong versatility, performance, and community support, Java is an excellent choice, especially for cross-platform applications, Android development, and large-scale enterprise systems.

---

### What is the Java Virtual Machine (JVM)?

The **Java Virtual Machine (JVM)** is a key component of the Java programming environment. It is a virtual machine that allows a computer to run **Java programs** regardless of the underlying operating system or hardware platform. JVM is a crucial part of making Java a platform-independent language, supporting the "write once, run anywhere" (WORA) principle.

#### Key Responsibilities of the JVM:

1. **Bytecode Execution**:
   The JVM executes Java **bytecode**, which is the intermediate representation of your code after compilation. When you write Java code and compile it, the source code is translated into bytecode, which the JVM can interpret and execute on any machine.

2. **Memory Management**:
   JVM handles memory allocation and garbage collection automatically, which helps prevent memory leaks and optimize performance by reclaiming memory that's no longer in use.

3. **Platform Independence**:
   Since the JVM abstracts away the underlying hardware, it allows Java programs to run on any system that has a compatible JVM, regardless of the operating system (Windows, macOS, Linux, etc.).

4. **Security**:
   JVM includes a security manager that helps define access levels for Java applications, preventing unauthorized access to system resources.

5. **Performance Optimization**:
   The JVM incorporates techniques like **Just-In-Time (JIT) compilation**, which compiles bytecode into native machine code during runtime to improve performance.

In short, the JVM is what allows Java to achieve portability, manage memory effectively, and optimize performance, making it a core part of Java's success as a widely-used programming language

---

### Steps to Run Java on Your Machine :

The **Java Development Kit (JDK)** is essential for developing and running Java applications because it provides:

1. **Java Compiler (javac)**: Converts Java code into bytecode for execution by the JVM.
2. **Java Runtime Environment (JRE)**: Includes the JVM to run Java applications.
3. **Development Tools**: Offers tools like `javadoc`, `jar`, and `jdb` for compiling, debugging, and packaging Java code.
4. **Standard Libraries**: Gives access to essential Java APIs and libraries for building applications.

Without the JDK, you can't compile or run Java programs on your machine.

1. **Install the Java JDK**

   - Go to the [Oracle JDK Downloads page](https://www.oracle.com/java/technologies/downloads/#jdk23-windows) (or you can use an open-source JDK like [OpenJDK](https://openjdk.java.net/)).
   - Download the appropriate version for your operating system (Windows, macOS, Linux).
   - Follow the installation instructions for your OS.
   - After installation, set the **JAVA_HOME** environment variable:
     - **Windows**: Add the path of the JDK to the `JAVA_HOME` environment variable and update the `Path` variable.
     - **macOS/Linux**: Add `export JAVA_HOME=/path/to/jdk` to your `.bash_profile` or `.bashrc`, then run `source ~/.bash_profile`.

   Verify the installation by running the following command in your terminal:

   ```
   java -version
   ```

2. **Install Visual Studio Code (VS Code)**

   - Download and install **VS Code** from the [official site](https://code.visualstudio.com/).
   - After installation, open **VS Code**.

3. **Install the Java Extension Pack in VS Code**

   - Open **VS Code** and go to the **Extensions** tab (or press `Ctrl+Shift+X`).
   - Search for **"Java Extension Pack"**.
   - Install it. This will automatically install several useful extensions for Java development, including support for running and debugging Java applications.

4. **Configure VS Code for Java**

   - Once the **Java Extension Pack** is installed, VS Code will detect the JDK on your machine.
   - Ensure the `JAVA_HOME` variable is set correctly and detected by VS Code.
   - You can open the **Command Palette** (`Ctrl+Shift+P`) and search for "Java: Configure Java Runtime" to ensure the correct JDK is selected.

5. **Create a New Java Project**

   - In VS Code, press `Ctrl+Shift+P` and type "Java: Create Java Project".
   - Choose **No Build Tools** for a basic project or **Maven/Gradle** for more advanced projects.
   - Select a location for the project and create a new folder.

6. **Write a Simple Java Program**

   - In the newly created project folder, create a new file named `Main.java`.
   - Add the following code:
     ```java
     public class Main {
         public static void main(String[] args) {
             System.out.println("Hello, World!");
         }
     }
     ```

7. **Run the Java Program**

   - Right-click inside the `Main.java` file and select **Run Java**.
   - Alternatively, press `F5` to run and debug the program using VS Code's integrated debugging tools.

   You should see **"Hello, World!"** printed in the terminal.

---

Now your Java environment is set up, and you can run Java programs using VS Code!

## run java in terminal :

just open your terminal then run the command

```command
jshell
```

then you will get a command prompt that you
can use to run your java code directly within the terminal

## print something :

**notion** : you can use the print command alone just when dealing with jshell

```java
System.out.print(value)
```

### Example :

1. print a string [it is necessary to use double quotes , a single quotes will raise an exception]

```java
System.out.print("Hello world")
```

## quit the jshell :

you can press `Ctrl+D`

## print "Hello world" :

1. create a class with the same name as the java file
2. add a `main` function that represents the entry point of the application (it is crucial to pass the `args` to the `main` function )
3. Use the `System.out` to access the `println` function

### Example :

```java
class Code {
   public static void main(String[] var0) {
      System.out.println("Hello world");
   }
}
```

## Run a Java Code:

Java compiles code in two main stages: **compilation** and **execution**. Here's how it works:

### 1. **Writing the Java Code (Source Code)**

You write your Java code in a plain text file with the `.java` extension. This file contains human-readable code, known as source code, written using Java syntax.

Example (`HelloWorld.java`):

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 2. **Compilation Stage: Converting Source Code to Bytecode**

When you compile a Java program, the **Java compiler** (`javac`) translates your source code into **bytecode**. Bytecode is not hardware-specific and can be executed on any machine with a Java Runtime Environment (JRE).

**Steps:**

- **Compiler (`javac`)**: The Java compiler reads the `.java` file.
- **Syntax Checking**: The compiler checks the source code for errors.
- **Bytecode Generation**: If there are no errors, the compiler generates bytecode (a `.class` file).

Example command:

```bash
javac HelloWorld.java
```

After running this, a `HelloWorld.class` file is created with bytecode.

### 3. **Execution Stage: Running Bytecode on the JVM**

The **Java Virtual Machine (JVM)**, part of the **JRE**, is responsible for running the bytecode. The JVM is platform-independent and works on any system with a JRE installed.

**Steps:**

- **Class Loader**: The JVM loads the `.class` file into memory.
- **Bytecode Verification**: Ensures the bytecode is safe and valid.
- **JIT Compilation**: The JVM uses a Just-In-Time (JIT) compiler to convert frequently executed bytecode into machine code for faster execution.
- **Execution**: The JVM executes the machine code, handling memory and thread management.

Example command to run the bytecode:

```bash
java HelloWorld
```

This runs the `HelloWorld.class` file, printing:

```
Hello, World!
```

### Key Components:

The **Java Runtime Environment (JRE)** is a key part of the Java ecosystem. Here's a quick summary:

#### What is the JRE?

- **JRE** stands for **Java Runtime Environment**, and it's the runtime component of Java. It provides the libraries and components needed to run Java applications.

#### Components of the JRE:

1. **JVM (Java Virtual Machine)**: The core part that runs Java bytecode.
2. **Core Libraries**: Pre-built Java classes (like `java.util`, `java.io`, etc.) that are necessary for running applications.
3. **Other Components**: Such as tools for memory management, exception handling, etc.

#### What Does the JRE Do?

- The JRE provides the environment in which Java bytecode can be executed. It includes the **JVM** and other resources like libraries that Java programs rely on.
- It does **not** include the Java compiler (`javac`)—that’s part of the **JDK** (Java Development Kit).

#### JRE vs. JDK

- **JRE**: Used for running Java applications (contains the JVM).
- **JDK**: Used for developing Java applications (contains JRE + compiler + other tools).

#### Summary

- **JRE**: Everything needed to run Java applications.
- **JVM**: The engine within the JRE that executes the bytecode.
- **JDK**: Includes JRE and additional tools for development.

In short, the **JRE** is necessary if you want to **run** Java programs, while the **JDK** is required if you want to **develop** Java programs.

### Compilation and Execution Workflow:

1. **Source Code (.java)**: Write the Java program.
2. **Compile** (`javac HelloWorld.java`): Converts the code to bytecode (`HelloWorld.class`).
3. **Bytecode (.class)**: This is platform-independent.
4. **Run** (`java HelloWorld`): The JVM executes the bytecode using JIT for optimization.

### Why Bytecode?

- **Portability**: Bytecode can run on any system with a JRE, supporting the "write once, run anywhere" principle.
- **Security**: Bytecode verification protects against malicious code.
- **Performance**: JIT compilation ensures efficient execution.

### Summary:

- **Compilation**: Source code → Bytecode via `javac`.
- **Execution**: Bytecode runs on the JVM, optimized by JIT compilation.

## Print a string without adding a new line :
```java
class Main{
 public static void main(String[] args){
    System.out.print("Hello world")

 }

}
```
---

### Data Types in Java

Data types are a fundamental concept in Java that defines the type of data a variable can hold. Each data type specifies the size and type of values that can be stored, as well as the operations that can be performed on them. Understanding data types is essential for effective programming, as they help in managing memory and ensuring the correctness of operations.

#### 1. **Primitive Data Types**

Java has eight built-in primitive data types. These data types are predefined and represent the simplest forms of data.

| Data Type | Size (in bytes) | Description                                  |
|-----------|------------------|----------------------------------------------|
| `byte`    | 1                | Represents an 8-bit signed integer. Range: -128 to 127. |
| `short`   | 2                | Represents a 16-bit signed integer. Range: -32,768 to 32,767. |
| `int`     | 4                | Represents a 32-bit signed integer. Range: -2^31 to 2^31-1. |
| `long`    | 8                | Represents a 64-bit signed integer. Range: -2^63 to 2^63-1. |
| `float`   | 4                | Represents a single-precision 32-bit IEEE 754 floating-point :  ≈ 3.4028235 * 10^38 |
| `double`  | 8                | Represents a double-precision 64-bit IEEE 754 floating-point. ≈ 1.7976931348623157 * 10^308|
| `char`    | 2                | Represents a single 16-bit Unicode character. |
| `boolean` | 1                | Represents one of two values: `true` or `false`. |

**Example:**
```java
int age = 30;         // Integer variable
double salary = 50000.50; // Double variable
char initial = 'A';   // Character variable
boolean isActive = true; // Boolean variable
```

#### 2. ** No Primitive Data Types**

We will talk about it later


### Variables 

In Java, a variable is a container that holds data that can be changed during the execution of a program. Variables are fundamental to programming as they allow you to store and manipulate data effectively. Understanding how to use variables is essential for writing efficient and maintainable Java code.


#### 1. **Variable Declaration and Initialization**

In Java, variables must be declared before they can be used. The declaration specifies the variable's type and name. Initialization is the process of assigning a value to the variable. 

**Syntax for declaring and initializing a variable:**
```java
dataType variableName = initialValue;
```
**Example:**
```java
int age = 25; // Declaration and initialization of an integer variable
float mark = 90.1f; // ensure that the value is not double 
long lightSpeedInSecond=300000 ;
char letter='A';
```

#### 2. **Types of Variables**

Java has three main types of variables:

- **Local Variables**: 
  - These are declared within a method, constructor, or block of code. 
  - They are created when the method, constructor, or block is entered and destroyed when it is exited. 
  - Local variables must be initialized before use. 
  - Example:
    ```java
    void exampleMethod() {
        int localVar = 10; // Local variable
        System.out.println(localVar);
    }
    ```

- **Instance Variables**: 
  - Also known as non-static fields, instance variables are declared inside a class but outside any method or constructor. 
  - They are specific to an instance of a class, meaning each object of the class has its own copy of the instance variables. 
  - Example:
    ```java
    class MyClass {
        int instanceVar; // Instance variable
    }
    ```

- **Static Variables**: 
  - These are declared with the `static` keyword within a class but outside any method or constructor. 
  - Static variables are shared among all instances of a class, meaning they belong to the class itself rather than any individual object. 
  - Example:
    ```java
    class MyClass {
        static int staticVar; // Static variable
    }
    ```

#### 3. **Variable Scope**

The scope of a variable determines where it can be accessed within the code. 

- **Local Variable Scope**: Accessible only within the method or block in which they are declared.
- **Instance Variable Scope**: Accessible to all methods within the class.
- **Static Variable Scope**: Accessible to all methods and instances of the class.

Understanding variable scope is crucial for preventing naming conflicts and ensuring that variables are used correctly within the program.


#### 4. **Variable Naming Conventions**

When naming variables in Java, follow these conventions:

- Use meaningful names that reflect the variable's purpose (e.g., `studentName`, `totalAmount`).
- Start variable names with a lowercase letter and use camelCase for multi-word names (e.g., `firstName`, `totalScore`).
- Avoid using reserved keywords and special characters in variable names.

#### 5. **Type Conversion**

Java supports two types of type conversion:

- **Widening Conversion**: Implicit conversion of a smaller primitive type to a larger primitive type (e.g., `int` to `float`). This is done automatically by the compiler.
  
  **Example:**
  ```java
  int num = 100;
  double d = num; // Widening conversion from int to double
  ```

- **Narrowing Conversion**: Explicit conversion of a larger primitive type to a smaller primitive type (e.g., `float` to `int`). This requires casting and can result in data loss.
  
  **Example:**
  ```java
  double d = 9.78;
  int num = (int) d; // Narrowing conversion from double to int
  ```

#### 6. **Type Checking and Default Values**

- **Type Checking**: Java is a statically typed language, meaning that variable types are checked at compile-time. This helps catch type-related errors early.
- **Default Values**: When variables are declared but not initialized, they receive default values:
  - `int`, `short`, `byte`, `long`: `0`
  - `float`: `0.0`
  - `double`: `0.0`
  - `char`: `'\u0000'` (null character)
  - `boolean`: `false`
  -Primitive Data Types(Reference types): `null`



### Conclusion

Variables are an integral part of Java programming. They enable developers to store, manipulate, and access data dynamically. By understanding the different types of variables, their scope, and proper naming conventions, you can write clear and effective Java code.

## literal :

### 1. binary literal :
 Use binary to assign an integer variable:
```java
int intVariable =0b101 
System.out.println(intVariable); // result= 5  
```
### 2.  Hexadecimal literal :
 Use Hexadecimal to assign an integer variable:
```java
int intVariable =0xFF 
System.out.println(intVariable); // result= 255
```
### 3. underscore literal :
Used to clarify the large number format
#### Example:
```java
int intVariable =1_000_000_000
System.out.println(intVariable);// 1000000000
```
### 4. epsilon literal :
Used to express  a number * 10^base 
```java
 double dblVariable =5e7
System.out.println(dblVariable);// 5 * 10^7
```

### 5. Increment Literal:
The increment literal is used to increase the value of a variable by one. It is commonly used with numeric types and characters, and can be applied in two ways: post-increment and pre-increment.

#### 1. Post-increment (`var++`):
In **post-increment**, the current value of the variable is used in an expression or operation, and then the variable is incremented after that operation. 

- **Syntax**: `var++`
- **Example**:
  ```java
  class PostIncrementExample {
      public static void main(String[] args) {
          int num = 5;
          int result = num++; // result gets the value 5, then num becomes 6

          System.out.println("Post-increment result: " + result); // 5
          System.out.println("Value of num after increment: " + num); // 6
      }
  }
  ```

#### 2. Pre-increment (`++var`):
In **pre-increment**, the variable is incremented first, and then the new value is used in the expression or operation.

- **Syntax**: `++var`
- **Example**:
  ```java
  class PreIncrementExample {
      public static void main(String[] args) {
          int num = 5;
          int result = ++num; // num becomes 6, and result is 6

          System.out.println("Pre-increment result: " + result); // 6
          System.out.println("Value of num after increment: " + num); // 6
      }
  }
  ```

### 6. Decrement Literal:
The decrement literal is used to decrease the value of a variable by one. Similar to incrementing, it can be done using post-decrement and pre-decrement operations.

#### 1. Post-decrement (`var--`):
In **post-decrement**, the current value of the variable is used in an expression or operation, and then the variable is decremented after that operation.

- **Syntax**: `var--`
- **Example**:
  ```java
  class PostDecrementExample {
      public static void main(String[] args) {
          int num = 5;
          int result = num--; // result gets the value 5, then num becomes 4

          System.out.println("Post-decrement result: " + result); // 5
          System.out.println("Value of num after decrement: " + num); // 4
      }
  }
  ```

#### 2. Pre-decrement (`--var`):
In **pre-decrement**, the variable is decremented first, and then the new value is used in the expression or operation.

- **Syntax**: `--var`
- **Example**:
  ```java
  class PreDecrementExample {
      public static void main(String[] args) {
          int num = 5;
          char b = 'B';
          char a = --b; // a=A
          int result = --num; // num becomes 4, and result is 4

          System.out.println("Pre-decrement result: " + result); // 4
          System.out.println("Value of num after decrement: " + num); // 4
      }
  }
  ```
  
### Summary:
- **Post-increment (`var++`)** uses the current value of the variable first, then increments it.
- **Pre-increment (`++var`)** increments the variable first, then uses the new value.
- **Post-decrement (`var--`)** uses the current value of the variable first, then decrements it.
- **Pre-decrement (`--var`)** decrements the variable first, then uses the new value.

## Arithmetic operations :
`+` : Addition
`-` : Subtraction
`*` : Multiplication
`/` : Division
`%` : Modulo
`^`  : Bitwise =  ((a) base 2)  Xor ((b) base 2), Exp:  6 ^ 5 = 0`1`10 ^ 0`1`01 = 011 = 3  

## Relational operators :
`>`  : Grater than
`>=` : Grater than or equal
`<`  : Less  than
`<=` : Less than or equal
`==` : Equal 
`!=` : Different 
`!(boolean Expression)`  : Not (boolean  Expression)

## Logical operators :
`&&` : And
`||` : Or
`^`  : `Bitwise` <=>  (BooleanExp1  || BooleanExp2) && !(BooleanExp1 && BooleanExp2)
## Conditional block [if , else] :
```
if(booleanCondition){
        // do instructions 
        }
        else if(booleanCondition2){ // booleanCondition=false
        
        }
else{ // booleanCondition=false  && // booleanCondition2=false 
      // do instructions 
        }        
```
### Example :
```java
class code {
    public static void main(String[] args) {
    int x = 14;
    int y = 12;
    int z = 10;
    if (x > y && x > z) System.out.println(x);
    else if (y > z) System.out.println(y);
    else System.out.println(z);

    }
}
```
## Ternary operator :
```
result = condition ? returrnedValueIfIsTrue:returrnedValueIfIsFalse; 
```
### Example :

#### Example 1 :
```java
class code {
    public static void main(String[] args) {
        int x = 5;
        int y = 7;
        int max = x > y ? x:y;
        System.out.println("The max value is " + max);
    }
}
```
#### Example 2 :
```java
class code {
    public static void main(String[] args) {
        int x = 5;
        int y = 7;
        int z = 10;
        int max = x > y ? x > z ? x : z : y > z ? y : z;
        System.out.println("The max value is " + max);
    }
}
```
## Switch statement :
```
switch(n){
 case v1 : // v1 ==n ?
    //instructions 
    break; 
  case v2 : // v2 ==n ?
    //instructions 
    break; 
     case v3 : // v3 ==n ?
    //instructions 
    break; 
    default : // else
    // instructions 
}
```
### Example :
```java
class code {
    public static void main(String[] args) {

        int n = 7;
        switch (n) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Error");
                
        }
    }
}
```
### Combine multiple cases : 
```
switch(n){
 case v1,v2 : // v1 ==n || v2 ==n ?
    //instructions 
    break; 
     case v3 : // v3 ==n ?
    //instructions 
    break; 
    default : // else
    // instructions 
}
```
###  Using a switch without breaks 
#### Example :
```java
class code {
    public static void main(String[] args) {

        int n = 7;
        switch (n) {
            case 1 -> {
                System.out.println("Monday");
                System.out.println("Monday is the first day in the week");
            }
                
            case 2 -> System.out.println("Tuesday");
                
            case 3 -> System.out.println("Wednesday");
                
            case 4 -> System.out.println("Thursday");
                
            case 5 -> System.out.println("Friday");
              
            case 6 -> System.out.println("Saturday");
                
            case 7 -> System.out.println("Sunday");
                
            default ->
                System.out.println("Error");
                
        }
    }
}
```
###  Using a switch to return a value 
#### Example :
Methode 1 :
```java
class code {
    public static void main(String[] args) {

        int n = 7;
        String result = switch (n) {
            case 1 -> "Monday";
                
            case 2 -> "Tuesday";
                
            case 3 -> "Wednesday";
                
            case 4 -> "Thursday";
                
            case 5 -> "Friday";
              
            case 6 -> "Saturday";
                
            case 7 -> "Sunday";
                
            default -> "Error";
                
        };
        System.out.println(result);
    }
}
```
Method 2 :
```java
class code {
    public static void main(String[] args) {

        int n = 7;
        String result = switch (n) {
            case 1 : yield  "Monday";
                
            case 2 : yield "Tuesday";
                
            case 3 : yield "Wednesday";
                
            case 4 : yield "Thursday";
                
            case 5 : yield "Friday";
              
            case 6 : yield "Saturday";
                
            case 7 : yield "Sunday";
                
            default : yield "Error";
                
        };
        System.out.println(result);
    }
}
```
## Loops :
It is a way to repeat a piece of code as long as a condition is valid

### While loop :
Repeat instructions[within the loop] as long as the condition is valid
```
while(condition){
         // instructions
      }
```
### While loop :
Repeat instructions[within the loop] as long as the condition is valid [run at least one time]
```
do{
     // instructions 
  }while(condition);
```
#### Example :
```java
class code {
    public static void main(String[] args) {
        do {
            System.out.println("Hello World");
        } while (5 > 6);
       // Output   : Hello world
    } 
}
```
### for loop 
```
 for(int i =start , conditionToStop,stepsPerCycle){
  //instructions 
 }
```
#### Example :
```java
class code {
    public static void main(String[] args) {

        for (int i = 4; i >= 0; i--) {
            System.out.println(i);
        }

    }
}
```
### object-oriented-programming (OOP):
object is a set of Properties and behaviors

#### class :
it's a blueprint of an object 

```java
class className{
    int attr1; 
    int attr2; 
    // empty constructor : 
    public  className(){
        
    }
    // parametrized constructor : 
    public className(int attr1,int attr2){
        this.attr1=attr1;
        this.attr2=attr2;
    }
}
```

### Array 
```java
class code{
    public static void main(String[] args) {
        
        // define an array of fore instances 
        int[] nums = {1,2,3,4};
        int[] nums2= new int[4]; // default values :{0,0,0,0}

        // access an element of an array : 
        nums[1]=10;
        
        // get array size : 
        int size=nums.length; 
        
        // iterate over an array : 
        // using enhanced for loop  :
        for( int item : nums){
            System.out.println(item);
        }
        
        // using for loop : 
        for( int i =0 ; i < nums.length ; i++ ){
            System.out.println(nums[i]);
        }
        
        
    }
}
```
### Multi Dimensional Array 

```java
class code {
    public static void main(String[] args) {
       //declare a multi dimensional array :  
        int nums[][] = new int[3][4];

      // iterate over a 2d array : 
         for(int i = 0 ; i <nums.length ;i++){
            System.out.print("{");
            for(int j = 0 ; j <nums[i].length ; j++){
                // access an element of a 2d array : 
                 System.out.print(nums[i][j] + ",");

            }
            System.out.print("}");
            System.out.println();
        }

        // using enhanced for loop  :
        for(int[] line :nums){
            System.out.print("{");
            for(int column : line){
                System.out.print(column + ",");

            }
            System.out.print("}");
            System.out.println();
        }
        
         
    }
}
```
### Array of object in java : 
Example : 
```java
class Student {
    int rollno;
    String name;
    int marks;

}
class code {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.marks = 10;
        s1.name = "John";
        s1.rollno = 10;

        Student[] arrStudents = new Student[2];
        arrStudents[0] = s1;
        arrStudents[1] = new Student();
        for (Student item : arrStudents) {
            System.out.println(item.name);
        }

    }
}

```
Here's a structured and organized version of your content:

---

### Differences Between `String` and `StringBuffer` in Java

In Java, `String` and `StringBuffer` both represent sequences of characters but have distinct characteristics and use cases.

---

#### 1. Immutability vs. Mutability
- **`String`**: Immutable, meaning once a `String` object is created, it cannot be changed. Any operation that modifies a `String` (e.g., concatenation) creates a new `String` object.
- **`StringBuffer`**: Mutable, allowing modifications to the existing sequence of characters without creating a new object. This makes it ideal for frequent changes like appending or deleting characters.

#### 2. Performance
- **`String`**: Due to immutability, each modification (e.g., concatenation) creates a new `String` object, which can impact memory and performance, especially when repeated.
- **`StringBuffer`**: More efficient for operations that involve repeated modifications, as it modifies the original object directly. Methods like `append()` add characters to the existing sequence, which conserves memory.

#### 3. Thread Safety
- **`String`**: Since it’s immutable, `String` is inherently thread-safe.
- **`StringBuffer`**: Synchronized, making it thread-safe for concurrent access, though with a slight performance cost due to synchronization.

#### 4. Usage Scenarios
- **`String`**: Suitable for text that doesn’t change frequently or requires minimal modifications.
- **`StringBuffer`**: Suitable for scenarios where strings undergo frequent changes, like in loops or dynamic concatenations.

#### 5. StringBuilder vs. StringBuffer
- **`StringBuilder`**: Similar to `StringBuffer` but without synchronization, making it faster in single-threaded contexts.

---

### Code Examples

##### Using `String`
```java
String str = "Hello";
str += " World";  // Creates a new String object each time you modify it.
System.out.println(str); // Output: Hello World

String s1 = "Hello";
String s2 = s1 + " World";  // Creates a new String in the heap, not in the constant pool
/*
 String Concatenation Creates a New Object:
 In Java, s1 + " World" triggers the creation of a new String object because String objects are immutable.
 The + operator internally uses a StringBuilder to concatenate, then converts the result back into a String, 
 resulting in a new String object in the heap.
 */

```

##### Using `StringBuffer`
```java
StringBuffer buffer = new StringBuffer("Hello");
buffer.append(" World"); // Modifies the same StringBuffer object.
System.out.println(buffer); // Output: Hello World
```

---

### Memory Management and the String Constant Pool

The `StringBuffer` class does **not** use the **String Constant Pool**. Instead, it creates a separate object in the **heap memory**.

#### 1. String Constant Pool
- The String Constant Pool is a special area within the heap to optimize memory usage for `String` literals.
- When a `String` literal (e.g., `String str = "Hello";`) is created, Java checks the pool to see if an identical string already exists. If it does, Java reuses the reference instead of creating a new object.
- This optimization only applies to `String` literals or strings interned with the `.intern()` method.

#### 2. StringBuffer in Heap Memory
- Each `StringBuffer` object is allocated memory directly in the **heap** and doesn’t interact with the String Constant Pool.
- Since each `StringBuffer` object is mutable and distinct, pooling would be ineffective, as modifying one reference would impact all other references to that pooled object.

#### 3. StringBuffer and Internal Strings
- When performing operations, `StringBuffer` may contain a `String` internally.
- For instance, calling `toString()` on a `StringBuffer` creates a new `String` object based on the buffer’s content. This `String` resides in the heap and can enter the constant pool if interned.

---

### Memory Example

```java
StringBuffer sb1 = new StringBuffer("Hello");
StringBuffer sb2 = new StringBuffer("Hello");

// sb1 and sb2 are distinct objects in the heap
System.out.println(sb1 == sb2);  // false

String str1 = sb1.toString();
String str2 = sb2.toString();

// str1 and str2 are new, separate `String` objects in the heap
System.out.println(str1 == str2); // false

// Interning the strings
String internedStr1 = str1.intern();
String internedStr2 = str2.intern();

// Now they refer to the same constant in the pool
System.out.println(internedStr1 == internedStr2); // true
```

---

### Summary
- **`String`**: Use for immutable sequences.
- **`StringBuffer`**: Use for mutable, thread-safe sequences with frequent modifications.
- **`StringBuilder`**: Use for mutable strings in single-threaded contexts.

## Static members :
Example :
```java

class Mobile{
     String brand;
     int price;
     String network;
     static String name="Smartphone";


     Mobile(String brand, int price, String network){
         this.brand = brand;
         this.price = price;
         this.network = network;
         String name;
         name="Smartphone";
         // access name using class to prevent shadowing by the local variable `name
         Mobile.name=name;

     }

final void show(){
    System.out.println("\n"+ brand);
    System.out.println(price);
    System.out.println(network);


    }
    public static  void printName(){
         System.out.println( "\nname : "+name);
    }

}
class code {
    public static void main(String[] args) {

        Mobile obj1 = new Mobile("iphone",50,"nice");
        Mobile obj2 = new Mobile("Summsung",50,"nice");
        Mobile obj3 = new Mobile("iphone",50,"nice");
         obj1.show();
         obj2.show();
         obj3.show();
         Mobile.printName();

    }
}

```

### Static block :
It's an area that you can use to initialize your static variables in a class :

#### Example : 
```java
class Mobile {
    static String name;

    static {
        name = "Smartphone";
    }

    String brand;
    int price;
    String network;
    
    Mobile(String brand, int price, String network) {
        this.brand = brand;
        this.price = price;
        this.network = network;
        String name;
        name = "Smartphone";
        // access name using class to prevent shadowing by the local variable `name
        Mobile.name = name;

    }

    public static void printName() {
        System.out.println("\nname : " + name);
    }

   

}
```
### load a class : 
```java
    Class.forName("packageName.className");
```

### The levels of access of the class members [Access Modifiers] : 
1. **public**: Accessible from anywhere.
2. **protected**: Accessible in the same package and by subclasses.
3. **package-private** (default): Accessible in the same package (no modifier needed).
4. **private**: Accessible only within its own class.

### Naming convention :
1. using camelCase 
2. class should always start with a capital letter 
3. constants should be all capital with the using of snake casing 
4. variables[not constant] and methods should always start with a small letter

### Anonymous object :
it's an object without a name 
Example : 
```java
class A {
    public A() {
        System.out.println("\nobject created");
    }

    public void show() {
        System.out.println("show object");
    }
}

class code {
    public static void main(String[] args) {
        new A().show();
    }
}

```
### Inheritance 
Example :
```java
 class Calc{
    public  int add(int a,int b){
        return a+b;
    }
    public  int sub(int a,int b){
        return a-b;

    }
    public  int mul(int a,int b){
        return a*b;
    }
    public  int div(int a,int b){
        return a/b;
    }

}

public class AdvCalc  extends Calc{

    public int mod(int a, int b) {
        return a % b;
    }

}
class Main {
    public static void main(String[] args) {
        // base/super/parent class
        Calc cal = new Calc();
        int sum = cal.add(5,4);
        System.out.println( "5 + 4 = "+ sum);

        int mul = cal.mul(5,4);
        System.out.println( "5 * 4 = "+  mul);

        int div = cal.div(5,4);
        System.out.println("5 / 4 = "+  div);

        // sub/derived/child class
        AdvCalc advCalc = new AdvCalc();
        int mod = advCalc.mod(5,4);
        System.out.println( "5 % 4 = "+ mod);


    }
}
```
#### Types of inheritance :
1. **Single level Inheritance** : class [B] inherit from class [A]
2. **Multi level Inheritance**  : class [B] inherit from class [A]. class [c] inherit from class [B]
2. **Multiple Inheritance**  : class [c] inherit from class [A] and [B].







### Stop video :
[Link](https://www.youtube.com/watch?v=u2oT-qogaFI&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&index=53&pp=iAQB)
