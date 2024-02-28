#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r)
{

    int i = l;
    int index = l;
    int j = m + 1;

    int temp[100];
    while (i <= m && j <= r)
    {

        if (arr[i] >= arr[j])
        {
            temp[index] = arr[j];
            j++;
            index++;
        }
        else
        {
            temp[index] = arr[i];
            i++;
            index++;
        }
    }
    while (i <= m || j <= r)
    {
        if (i <= m)
        {
            temp[index] = arr[i];
            index++;
            i++;
        }
        if (j <= r)
        {
            temp[index] = arr[j];
            index++;
            j++;
        }
        /* code */
    }

    for (int p = l; p <= r; p++)
    {
        arr[p] = temp[p];
    }
}
void mergeSort(int arr[], int l, int r)
{
    // base case :
    if (l == r)
    {
        return;
    }

    else
    {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr,l,m,r); 
    }
}

void display(int arr[],const int size ){ 
 
 cout<<endl; 
 for(int i=0 ; i<size; i++){ 
   cout<<arr[i]<<" "; 

 }
cout<<endl; 
}
int main()
{

int arr[]={9,7,3,6,2};

cout<<"befor sorting : "; 
display(arr,5); 
mergeSort(arr,0,4);
cout<<endl; 

cout<<"sorting in ascending order : "; 
display(arr,5); 
cout<<endl; 


    return 0;
}