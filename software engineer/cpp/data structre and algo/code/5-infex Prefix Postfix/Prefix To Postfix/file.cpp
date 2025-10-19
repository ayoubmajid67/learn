#include <iostream>
#include <stack>
#include <cctype>
using namespace std;

string  PrefixToPostfix(string prefix, const int size)
{

    stack<string> s;

    for (int i = size-1; i >=0; i--)
    {

        if (isdigit(prefix[i]) || isalpha(prefix[i]))
        {

            string op(1, prefix[i]);
            s.push(op);
        }
        else
        {
            string op1= s.top();
            s.pop();
            string op2 = s.top();
            s.pop();

            string exp =  op1 + op2+prefix[i];  
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

    string postfix = PrefixToPostfix(prefix, prefix.length());

    cout << "the postfix expression is : " << postfix << endl;

    return 0;
}