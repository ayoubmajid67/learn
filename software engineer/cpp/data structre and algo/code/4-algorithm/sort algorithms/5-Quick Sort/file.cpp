#include <iostream>
using namespace std;

int partition(int arr[], int start, int end)
{
    int pivot = arr[end];
    int pivotX = start;

    for (int i = start; i < end; i++)
    {
        if (arr[i] <= pivot)
        {
            swap(arr[i], arr[pivotX]);
            pivotX++;
        }
    }

    swap(arr[pivotX], arr[end]);

    return pivotX;
}

void QuickSort(int arr[], int start, int end)
{

    // base case :
    if (start >= end)
    {
        return;
    }

    else
    {

        int p = partition(arr, start, end);

        QuickSort(arr, start, (p - 1));
        QuickSort(arr, (p + 1), end);
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
    int arr[] = {7, 9, 3, 2, 6};

    cout << "befor sorting : ";
    display(arr, 5);

    cout << endl;
    cout << "after sorting in ascending order : ";
    QuickSort(arr, 0, 4);
    display(arr, 5);
    cout << endl;
}