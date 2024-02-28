#include <iostream>
#include <cstdlib>
using namespace std;


void countSort(int inputArr[], int size)
{

    int countArr[10];

    fill(countArr, countArr + 10, 0);

    // count array :
    for (int i = 0; i < size; i++)
    {

        ++countArr[inputArr[i]];
    }

    // cumulative count array :
    for (int i = 1; i < 10; i++)
    {
        countArr[i] += countArr[i - 1];
    }

    // ouput array :
    int arrOutput[7];

    for (int i = 0; i < size; i++)
    {

        arrOutput[--countArr[inputArr[i]]] = inputArr[i];
    }
   
    // copy to input :

    for (int i = 0; i < size; i++)
    {
        inputArr[i] = arrOutput[i];
    }
}

void display(int arr[], const int size)
{
    cout << endl;
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{

    int arr[7] = {1, 4, 1, 2, 7, 5, 2};

    cout << "befor sorting : ";
    display(arr, 7);

    cout << endl;
    cout << "after sorting in ascending order : ";
    countSort(arr, 7);
    display(arr, 7);
    cout << endl;

    return 0;
}