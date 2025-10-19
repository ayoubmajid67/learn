#include <iostream>
#include <cctype>
#include <stack>
#include <string>
using namespace std;

string postFixToInfix(string PostFix, const int size)
{

    stack<string> s;

    for (int i = 0; i < size; i++)
    {

        if (isdigit(PostFix[i]) || isalpha(PostFix[i]))
        {

            // convert char to string :
            string op(1, PostFix[i]);
            // string op=postfix[i];
            s.push(op);
        }
        else
        {

            string op2 = s.top();
            s.pop();
            string op1 = s.top();
            s.pop();

            string exp = "(" + op1 + PostFix[i] + op2 + ")";
            s.push(exp);
        }
    }

    return s.top();
}

int main()
{
    string postfix;
    cout << "entre a postfix Expression: ";
    cin >> postfix;
    string infix = postFixToInfix(postfix, postfix.length());

    cout << "the infix expression is : " << infix << endl;
    return 0;

    return 0;
}