#include <iostream>
#include <algorithm>

// ignore the using of std::
using namespace std;

// define the size of the array :
#define size 7

void BubbleSort(int arr[])
{
    int flag;
    for (int i = 0; i < size; i++)
    {
        flag = 0;
        for (int j = 0; j < size - i - 1; j++)
        {

            if (arr[j] < arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                flag = 1;
            }
        }

        if (!flag)
            return;
    }
}

void display(int arr[])
{
    cout << endl;
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}
// main function :
int main()
{

    int arr[size]{10, 14, 2, 20, 45, 2, 9};
    cout << "befor sorting in  descending order : " << endl;
    display(arr);
    cout << "after sorting in  descending order : " << endl;
    BubbleSort(arr);
    display(arr);
}