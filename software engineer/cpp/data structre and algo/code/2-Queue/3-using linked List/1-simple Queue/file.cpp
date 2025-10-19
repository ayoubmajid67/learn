// call the iostream library :
#include <iostream>

// ignore the using of std::
 
using namespace std;

// node  class:  
class node
{

public:
    int value;
    node *next;

    // methods : node 
    node()
    {
        value = 0;
        next = nullptr;
    }
      //   
    node(int value)
    {
        this->value = value;
        next = nullptr;
    }
};

class   SimpleQueue
{
private:

    node *front;
    node *rear; 


public:
 //constructor : 
    SimpleQueue()
    {
        front = nullptr;
        rear=nullptr; 
    }

    // methods :

    bool isEmpty(); // it's return 1 if the stack is not empty On à 

    void queue(int value); // push(add) new element to the stack :
     int  dequeue();           // delete the top element in the stack :
    int count();          // count the number of nodes(items) int the stack

    bool checkExist(int value); // check if a value is exist into the stack :

    void display(); //  list the all elements of the stack:
};


int main()
{

     SimpleQueue ob1; 
     ob1.queue(45); 
     ob1.queue(6);  ob1.queue(6);    ob1.queue(77);      ob1.queue(54);      ob1.queue(14); 

  
     cout<<"the top element in the stack is "<<ob1.dequeue() <<endl;
      ob1.display();  
       cout<<"entre a value : "; 
       int value; 
       cin>>value; 
       cin.clear(); 
       fflush(stdin); 
      if(ob1.checkExist(value)) cout<<"found value \n"; 
      else cout<<"unfounded value "<<endl; 

    return 0;
}


bool SimpleQueue::isEmpty(){


      return (front== nullptr && rear==nullptr) ? 1 : 0;

}

void SimpleQueue::queue(int value ){

  node *new_node= new node(value);

    // the stack is empty :
    if (isEmpty()){
        front=rear=new_node; 
    }
    else{

     rear->next=new_node; 
     rear=new_node; 
    }

}

  int  SimpleQueue::dequeue(){

    if (isEmpty())
    {

        cout << "you can't drop anything because the Queue is empty : " << endl;
        return 0; 
    }
  
  else if(front==rear){
      int temp=rear->value; 
      front=nullptr;
       rear=nullptr; 
       return temp; 
   
  }

else{
 int temp=front->value; 
 front=front->next; 
 return temp; 
}
  }   

int SimpleQueue::count()
{
    // if the stack is empty:
    if (isEmpty())
    {
        return 0;
    }

    else
    {

        node *explore = front;
        int NbrItems = 0;

        while (explore != nullptr)
        {
            NbrItems++;
            explore = explore->next;
        }

        return NbrItems;
    }
}

  bool  SimpleQueue::checkExist(int value){


    if (isEmpty()) return 0;

    else
    {

        node *explore = front;

        while (explore != nullptr)
        {
            if (explore->value == value)     return 1;
            
            explore = explore->next;
        }
        return 0;
    }

  }

void SimpleQueue::display()
{

    if (isEmpty())
    {
        cout << "the stack is empty :" << endl;
   

    }

    else
    {

        node *explore =front;

        cout <<"----------------------" <<endl;
        while (explore != nullptr)
        {     
            cout <<" "<< explore->value ;
            explore = explore->next;
        }
       cout <<"\n----------------------" <<endl;
    }
}



