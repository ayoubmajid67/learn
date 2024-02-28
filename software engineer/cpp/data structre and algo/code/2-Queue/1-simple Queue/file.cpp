#include <iostream>
using namespace std;

#define size 5
template <typename T>

class Queue
{

private:
    T arr[size];
    int front;
    int rear;

public:
    Queue()
    {

        fill(arr, arr + size, 0);
        front = rear = -1;
    }

    bool isEmpty()
    {
        if (rear == -1 && front == -1)
            return true;
        else
            return false;
    }

    bool isFull()
    {
        if (rear == size - 1)
            return true;
        else
            return false;
    }

    void Enqueue(T value)
    {

        if (isFull())
            cout << "the Queue overflow" << endl;

        else if (isEmpty())
        {
            front = rear = 0;
            arr[rear] = value;
        }
        else
        {
            rear++;
            arr[rear] = value;
        }
    }
    T Dequeue()
    {

        if (isEmpty())
            cout << "The Queue underflow" << endl;

        else if (rear == front)
        {
            T x = arr[front]; // or arr[rear]
            front = rear = -1;
            return x;
        }

        else
        {
            T x = arr[front];
            front++;
            return x;
        }
    }
    int count()
    {

        if (isEmpty())
            cout << "the Queue underflow" << endl;

        else if (isFull())
            return size;
        else
        {
            int computer = 0;
            for (int i = front; i <= rear; i++)
                computer++;
            cout << computer << endl;
            return computer;
        }
    }
    void display()
    {
        if (isEmpty())
            cout << "the Queue underflow" << endl;
        else
        {
            for (int i = front; i <= rear; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }
    void Clear()
    {
        system("cls");
    }
};

int main()
{

    Queue<string> ob1;

    ob1.Enqueue("ayoub");
    ob1.Enqueue("youness");
    ob1.Enqueue("adam");
    ob1.Enqueue("radnan");
    ob1.Enqueue("mo7sin");
    ob1.display();
    string previousTop = ob1.Dequeue();
    cout << "the previous top  is : " << previousTop << endl;
    ob1.display();
    int Nbr = ob1.count();
    cout << "the number of items in the queue :  " << Nbr << endl;
    ob1.Enqueue("adoma");

    return 0;
}

/*

*/
