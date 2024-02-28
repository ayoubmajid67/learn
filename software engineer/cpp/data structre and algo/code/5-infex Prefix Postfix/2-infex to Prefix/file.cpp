#include <iostream>
#include <stack>
#include <algorithm>
#include <cctype>
using namespace std;

int priority(char ops)
{

    if (ops == '^')
        return 3;
    else if (ops == '*' || ops == '/' || ops == '%')
        return 2;

    else if (ops == '+' || ops == '-')
        return 1;
    else
        return 0;
}

string Reverse(string exp)
{

    reverse(exp.begin(), exp.end());

    for (int i = 0; i < exp.length(); i++)
    {
        if (exp[i] == '(')
            exp[i] = ')';

        else if (exp[i] == ')')
            exp[i] = '(';
    }

    return exp;
}

string InfixToPrefix(string infix, int size)
{

    string prefix;
    stack<char> s;

    infix = Reverse(infix);
    cout << infix << endl;
    system("pause");

    for (int i = 0; i < size; i++)
    {

        if (infix[i] == ' ')
            continue;

        if (isdigit(infix[i]) || isalpha(infix[i]))
            prefix += infix[i];

        else if (infix[i] == '(')
            s.push(infix[i]);

        else if (infix[i] == ')')
        {
            while (!s.empty() && s.top() != '(')
            {
                prefix += s.top();
                s.pop();
            }

            // push the ( tag :
            s.pop();
        }

        else
        {

            if (!s.empty() && (priority(s.top()) == priority(infix[i])) && (infix[i] == '^'))
            {

                while (!s.empty() && (priority(s.top()) == priority(infix[i])) && (infix[i] == '^'))
                {
                    prefix += s.top();
                    s.pop();
                }

                s.push(infix[i]);
            }

            else if (!s.empty() && (priority(s.top()) == priority(infix[i])))
                s.push(infix[i]);

            else
            {

                while (!s.empty() && (priority(s.top()) > priority(infix[i])))
                {
                    prefix += s.top();
                    s.pop();
                }

                // push the operator :
                s.push(infix[i]);
            }
        }
    }

    while (!s.empty())
    {
        prefix += s.top();
        s.pop();
    }
    return Reverse(prefix);
}

int main()
{

    string infix;
    cout << "entre a infix Expression: ";
    cin >> infix;
    string prefix = InfixToPrefix(infix, infix.length());

    cout << "the prefix expression is : " << prefix << endl;
    return 0;
}