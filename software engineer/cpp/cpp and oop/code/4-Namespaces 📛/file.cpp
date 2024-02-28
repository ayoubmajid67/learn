// call library :
#include <iostream>

namespace first
{
    int age = 20;
} // namespace first

using namespace std;

int main()
{
    // if wanna to bring a  specfied object : 
using std::cout; 
    int age = 18;

    cout << "my age is  " << first::age;

    return 0;
}
