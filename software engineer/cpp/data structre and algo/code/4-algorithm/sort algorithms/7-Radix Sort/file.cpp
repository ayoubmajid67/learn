#include <iostream>

using namespace std;


void display(int arr[], const int size); 
void countSort(int inputArr[], int size,  int div)
{


    int countArr[10];

    fill(countArr, countArr + 10, 0);

    // count array :
    for (int i = 0; i < size; i++)
    {

        ++countArr[(inputArr[i]/div)%10];
    }
   
    // cumulative count array :
    for (int i = 1; i < 10; i++)
    {
        countArr[i] += countArr[i - 1];
    }
   

    // ouput array :
    int arrOutput[7];
   

    for (int i = size-1; i >=0; i--)
    {
         
        arrOutput[--countArr[ (inputArr[i]/div) %10 ] ] = inputArr[i];
  
    }
    
    // copy to input :

    for (int i = 0; i < size; i++)
    {
        inputArr[i] = arrOutput[i];
    }
}



void RadixSort(int arr[], const int size)
{
int max=arr[0]; 

for(int i =1 ; i<size;i++){
     if(arr[i]>max)  max=arr[i]; 
}

for(int div=1; (max/div)>0 ; div*=10){
    countSort(arr,size,div); 

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

    int arr[7] = {10, 66, 1, 2, 7, 550, 2};

    cout << "befor sorting : ";
    display(arr, 7);

    cout << endl;
    cout << "after sorting in ascending order : ";
    RadixSort(arr, 7);
    display(arr, 7);
    cout << endl;

    return 0;
}