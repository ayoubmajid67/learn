#include <iostream>
using namespace std;

void linearSearch(int a[],int size, int element ){
 
 for(int i=0;i<size;i++){
    if(a[i]==element) {
        cout<<"exist value "<<endl; 
        return; 
    }

 }
}

void binarySearch(int arr[], const int size, int value)
{

    // delcare the lift and right :
    int left = 0;
    int right = size - 1;

    // while loop :

    while (left <= right)
    {

        // we have three case :
        int mid = (left + right) / 2;
        if (arr[mid] == value)
        {
            cout << "exist value : " << endl;
            return;
        }
        else if (arr[mid] > value)
            right = mid - 1;
        else
            left = mid + 1;
    }

    // if the loop exit that men the value not found :
    cout << "value not found " << endl;
}

int main()
{
    // LEFT= 0   RIGHT=5   MID=(L+R)/2
    int arr[] = {5, 10, 15, 20, 25, 30};
    const int size = (sizeof(arr) / sizeof(int));
    //  binarySearch(arr,size,26); 

linearSearch(arr,size,6); 



    return 0;
}