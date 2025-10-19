// call library :
#include <iostream>
#include <math.h>

// ignore  the using of std::
using namespace std;

main()
{
    // two variable of input :

    int a, b;

    cout << "entre  side a  and side b  (in the same line ):  ";
    cin >> a >> b;

    double hyp = (double)sqrt(pow(a, 2) + pow(b, 2));
    cout << "the  hypotenuse  =" << hyp << endl;
}