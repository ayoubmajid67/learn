#include <iostream>
#include <cctype>
#include <stack>
#include <string>
using namespace std;

string preFixToInfix(string preFix, const int size)
{

    stack<string> s;

    for (int i = size - 1; i >= 0; i--)
    {

        if (isdigit(preFix[i]) || isalpha(preFix[i]))
        {

            // convert char to string :
            string op(1, preFix[i]);
            // string op=postfix[i];  error because the data type not matching  :

            s.push(op);
        }
        else
        {

            string op1 = s.top();
            s.pop();
            string op2 = s.top();
            s.pop();

            string exp = "(" + op1 + preFix[i] + op2 + ")";
            s.push(exp);
        }
    }

    return s.top();
}

int main()
{
    string prefix;
    cout << "entre a prefix Expression: ";
    cin >> prefix;
    string infix = preFixToInfix(prefix, prefix.length());

    cout << "the infix expression is : " << infix << endl;

    return 0;
}