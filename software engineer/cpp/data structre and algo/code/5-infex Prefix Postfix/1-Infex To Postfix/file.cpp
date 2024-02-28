#include <iostream>
#include <cctype>

#include <stack>

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

string InfixToPostfix(string infix, int size)
{

    stack<char> s;
    string postfix = "";
    for (int i = 0; i < size; i++)
    {

        if (infix[i] == ' ')
            continue;

        if (isdigit(infix[i]) || isalpha(infix[i]))
            postfix += infix[i];

        else if (infix[i] == '(')
            s.push('(');

        else if (infix[i] == ')')
        {
            while (s.top() != '(')
            {
                postfix += s.top();
                s.pop();
            }

            // push the ( tag :
            s.pop();
        }

        else
        {
            if (!s.empty() && (priority(s.top()) == priority(infix[i])) && (infix[i] == '^'))
                s.push(infix[i]);

            else
            {
                while (!s.empty() && (priority(s.top()) >= priority(infix[i])))
                {
                    postfix += s.top();
                    s.pop();
                }

                // push the operator :
                s.push(infix[i]);
            }
        }
    }

    while (!s.empty())
    {
        postfix += s.top();
        s.pop();
    }

    return postfix;
}

int main()
{

    string infix;
    cout << "entre a infix Expression: ";
    cin >> infix;
    string postfix = InfixToPostfix(infix, infix.length());

    cout << "the postfix expression is : " << postfix << endl;
    return 0;
}