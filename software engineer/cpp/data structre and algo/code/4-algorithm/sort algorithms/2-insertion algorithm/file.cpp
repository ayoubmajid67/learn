#include<iostream> 
using namespace std; 

#define size 7


void  insertionSort(int arr[]){

for(int i=1; i<size;i++){
int key=arr[i];
int j=i-1; 

while(j>=0 && arr[j] < key ){ 
arr[j+1]=arr[j]; 
j=j-1;    
}
arr[j+1]=key; 

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
     insertionSort(arr);
    display(arr);
}