#include <iostream>
#include <cmath>
//ignore the using of std::
using namespace std;

int main()
{

    int age;

    try
    {
        cout << "entre your age :";
        cin >> age;
        cin.ignore();
        if (cin.fail())
            throw runtime_error("invalid input :");

        if (age >= 100)
            throw string("your are too old to entre the site :");

        else if (age >= 18)
            throw string("welcome to the website :");

        else
            throw string("you are no old enough to entre :");
    }
    catch (runtime_error &e)
    {
        cin.clear();
        cout << "Error " << e.what() << endl;
    }
    catch (string &msg)
    {
        cout << msg << endl;
    }

    return 0;
}