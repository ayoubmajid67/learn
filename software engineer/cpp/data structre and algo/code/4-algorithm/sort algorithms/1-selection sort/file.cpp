#include <iostream>
#include<algorithm>
using namespace std;

#define size 7

void selectionSort(int arr[])
{

    int min = 0;
 
    for (int i = 0; i < size - 1; i++)
    {
        min = i;
        for (int j = i + 1; j < size; j++){
            if (arr[min] < arr[j])
                min = j;

        }
          
        if (i != min)
            swap(arr[i], arr[min]);
    }
}
void display(int arr[])
{
    cout << endl;
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main()
{

    int arr[size]{10, 14, 2, 20, 45, 2, 9};
    cout << "befor sorting in  descending order : " << endl;
    display(arr);
    cout << "after sorting in  descending order : " << endl;
    selectionSort(arr);
    display(arr);
}