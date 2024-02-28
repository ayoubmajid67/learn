// call library :
#include <iostream>
#include <string>

// ignore the using of std before   entity :
using namespace std;

typedef std::string text_t;

main()
{

    //  get input from user :

    text_t name;
    string last_name;
    string full_name = "no value ";
    int age;

    cout << "entre your name : ";
    cin >> name;
    cout << "entre your age :  ";
    cin >> age;
    cout << "entre you last name : ";
    cin >> last_name;

    cout << "_______________________________" << endl;
    cout << "your name is : " << name << endl
         << "your age is : " << age << endl
         << "your last  name is : " << last_name << endl;

    cout << "entre your full name  : ";
    // fflush(stdin);
    getline(cin >> ws, full_name);
    cout << "your full name is : " << full_name << endl;





       cin.clear();  //ignore any  flag error  :
      fflush(stdin); // clear any character : 
        
     /*
     cin.clear(): This function is used to clear the error flags of the input stream (cin). 
     It resets the state of the stream, allowing further input operations to be performed. 
     It should be called after detecting an error condition, such as an incorrect input format or type
      mismatch. cin.clear() clears the error state flags (failbit, eofbit, and badbit), 
      but it does not remove the invalid input from the input stream.

cin.ignore(): This function is used to discard characters from the input stream.
 It helps to skip over invalid input and move to the next valid input. 
 It takes two arguments: the maximum number of characters 
 to ignore (n) and an optional delimiter character (delim). 
 It discards characters until either n characters have been ignored or the delimiter character 
 is encountered.

cin.fail(): This function is used to check whether a previous input operation has failed.
 It returns true if an error state flag is set in the input stream,
  indicating a failed input operation. 
  It is commonly used in combination with cin.clear() to detect and handle input errors.

fflush(stdin): This function is commonly used in C to flush the output buffer of a stream.
 However, invoking fflush(stdin) is undefined behavior in C and C++ when used with an input stream like
  stdin. It should not be used to clear the input stream as it can lead to unpredictable results.
     */

// example : 
#include <limits>
  int number;
  std::cout << "Enter a number: ";
  std::cin >> number;

  if (std::cin.fail()) {
    std::cout << "Invalid input. Please enter a valid number." << std::endl;
    std::cin.clear(); // Clear the error state of cin
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Discard the invalid input
  }

  // Continue with further input operations or processing the valid input

// example : 

using namespace std;

bool isNumber(string number); 


using std::cout; 
using std::string; 
using std::cin; 
using std::endl;  
string name; 

cout<<"get value using cin function : "<<endl; 
cout<<"entre your name "; 
cin>>name; 
cout<<name<<endl; 

cout<<"get number using getline function "<<endl; 
cout<<"entre your name : ";
//fflush(stdin);  
getline(cin>>ws,name);
cout<<name<<endl; 

cout<<"ignore error entre by using : "<<endl; 
int number ; 
cout<<"entre a number : "; 
cin>>number; 
cin.clear(); 
cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');




cout<<"text if string  is  digit value : "<<endl; 

 name="23132"; 

isNumber(name)==1 ? cout<<" that is a digit : "<<endl :cout<<"that's not a digit"<<endl; 





return 0 ; 
}
bool isNumber(string number ){


for(int i=0;i<number.size();i++){
if(!isdigit(number[i])) return 0; 


} 

return 1 ; 

}






