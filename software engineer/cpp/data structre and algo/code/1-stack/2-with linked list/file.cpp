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

class stack
{
private:

    node *top;


public:
 //constructor : 
    stack()
    {
        top = nullptr;
    }

    // methods :

    bool isEmpty(); // it's return 1 if the stack is not empty On à 

    void push(int value); // push(add) new element to the stack :
    void pop();           // delete the top element in the stack :
    int peek();           // return to the top element in the stack :
    int count();          // count the number of nodes(items) int the stack

    bool checkExist(int value); // check if a value is exist into the stack :

    void display(); //  list the all elements of the stack:
};

int main()
{

    stack ob1; 
     ob1.push(45); 
     ob1.push(6);      ob1.push(6);      ob1.push(77);      ob1.push(54);      ob1.push(14); 

     ob1.pop();  
     cout<<"the top element in the stack is "<<ob1.peek()<<endl;
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

bool stack::isEmpty()
{
    return top == nullptr ? 1 : 0;
}

void stack::push(int value)
{

    node *new_node= new node(value);

    // the stack is empty :
    if (isEmpty())
    {

        top = new_node;
    }

    else
    {

        new_node->next = top;
        top =new_node;
    }
}

void stack::pop()
{

    // if the stack is empty:
    if (isEmpty())
    {

        cout << "you can't drop anything because the stack is empty : " << endl;
    }

    else
    {

        node *tmp = top;
        top = top->next;
        delete (tmp);
    }
}

int stack::peek()
{
    // if the stack is empty:
    if (isEmpty())
    {

        cout << "you can't drop anything because the stack is empty : " << endl;
    }

    else
    {
        return top->value;
    }
}

int stack::count()
{
    // if the stack is empty:
    if (isEmpty())
    {
        return 0;
    }

    else
    {

        node *explore = top;
        int NbrItems = 0;

        while (explore != nullptr)
        {
            NbrItems++;
            explore = explore->next;
        }

        return NbrItems;
    }
}

bool stack::checkExist(int value)
{

    if (isEmpty()) return 0;

    else
    {

        node *explore = top;

        while (explore != nullptr)
        {
            if (explore->value == value)     return 1;
            
            explore = explore->next;
        }
        return 0;
    }
}

void stack::display()
{

    if (isEmpty())
    {
        cout << "the stack is empty :" << endl;
   

    }

    else
    {

        node *explore = top;

        cout <<"---------" <<endl;
        while (explore != nullptr)
        {     
            cout <<" "<< explore->value <<endl;
            explore = explore->next;
        }
            cout <<"---------" <<endl;
    }
}
