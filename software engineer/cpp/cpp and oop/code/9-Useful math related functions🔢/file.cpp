#include <iostream>
#include <math.h>

using namespace std;
int main()
{

    double x = 4;
    double y = 10;

    double z = 10.4;

    cout << "max(x,y)  " << max(x, y) << endl;
    cout << "min(x,y)  " << min(x, y) << endl;
    cout << "pow(x,y)  " << pow(x, y) << endl;
    cout << "sqrt(x)" << sqrt(x) << endl;
    cout << "abs(z)    " << abs(z) << endl;
    cout << "round(z)  " << round(z) << endl;
    cout << "ceil(z)   " << ceil(z) << endl;
    cout << "floor(z)  " << floor(z) << endl;

    return 0;
}