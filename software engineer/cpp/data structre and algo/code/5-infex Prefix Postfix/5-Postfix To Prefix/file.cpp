#include <iostream>
#include <stack>
#include <cctype>
using namespace std;

string PostfixToPrefix(string Postfix, const int size)
{

    stack<string> s;

    for (int i = 0; i < size; i++)
    {

        if (isdigit(Postfix[i]) || isalpha(Postfix[i]))
        {

            string op(1, Postfix[i]);
            s.push(op);
        }
        else
        {
            string op2 = s.top();
            s.pop();
            string op1 = s.top();
            s.pop();

            string exp = Postfix[i] + op1 + op2;
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

    string prefix = PostfixToPrefix(postfix, postfix.length());

    cout << "the prefix expression is : " << prefix << endl;

    return 0;
}