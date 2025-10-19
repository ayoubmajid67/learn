#include <iostream>
using namespace std;

void sort_asc(int arr[], int size)
{

    bool x = false;

    do
    {
        x = false;
        for (int i = 0; i < size - 1; i++)
        {

            if (arr[i] > arr[i + 1])
            {

                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                x = true;
            }
        }

    } while (x);
}

void display(int arr[], int size){

    for(int i=0; i<size;i++){
     cout<<arr[i]<<" "; 

    }
}

int main()
{

    int arr[] = {3232, 5323, 677, 24, 86, 14, 98, 2, 60};
    int size=sizeof(arr)/sizeof(int); 
    cout<<"befor sorting in ascending order : "<<endl; 
    display(arr,size); 
    sort_asc(arr,size); 
    cout<<"\nafter sorting in ascending order "<<endl; 
    display(arr,size);
return 0 ; 
}