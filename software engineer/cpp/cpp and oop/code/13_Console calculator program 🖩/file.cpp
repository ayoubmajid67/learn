#include <iostream>
#include <cctype>
#include <string>
#include <cmath>

using namespace std;

bool isDigitN(int number) {
    string str =to_string(number);
     cout<<number; 
    for (char ch : str) {
        if (!isdigit(ch)) {
            return false;
        }
    }
    return true;
}

int main() {
  int  num1,num2;
    char op;

    cout << "Enter the number 1: ";
    cin >> num1;
    cout<<num1;

    if (cin.fail()) {
        cout << "You should enter a valid number." << endl;
        exit(1);
    }
  
    cout <<"Enter the operator: ";
  
    cin >> op;

    cout << "Enter the number 2: ";
    cin >> num2;
    if (cin.fail()){
        cout << "You should enter a valid number." << endl;
        exit(1);
    }

    switch (op) {
        case '+':
            cout << num1 + num2;
            break;

        case '-':
            cout << num1 - num2;
            break;

        case '*':
            cout << num1 * num2;
            break;

        case '/':
            cout << num1 / num2;
            break;

        case '^':
            cout << pow(num1, num2);
            break;

        case '%':
            cout << num1 % num2;
            break;

        default:
            cout << "You should enter one of the operators (+, -, *, /, %, ^)." << endl;
    }

    return 0;
}
