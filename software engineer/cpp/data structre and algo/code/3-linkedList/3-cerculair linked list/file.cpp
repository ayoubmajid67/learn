#include <iostream>
#include <iomanip>
#include <string>

using namespace std;
// create a template  :
template <typename T>

// create the node class

class node
{

public:
  T data;
  node *next;

  // the methods :

  // the constructor  to  initialize value :

  node()
  {
    data = 0;
    next = nullptr;
  }

  node(T data)
  {
    this->data = data;
    next = nullptr;
  }

  // show function :

  void show()
  {

    cout << "the  data : " << data << endl;
  }
  // update function :

  void update(T data)
  {
    this->data = data;
  }

  // deconstructor :
};

// the simple linked list class :

class linkedList
{
private:
  node<int> *head = nullptr;

public:
  bool isEmpty();
  void insertLeft(int data);
  void insertRight(int data);
  void insertPos(int pos, int val);
  void display();
  void deleteLast();
  void deleteFirst();
  void updateVal(int val, int newValue);
};

main()
{

  linkedList ob1;

  ob1.insertLeft(10);
  ob1.insertLeft(20);
  ob1.insertLeft(50);
  ob1.display();
  ob1.insertRight(0);
  ob1.insertPos(2,100);  
  ob1.display(); 
  ob1.deleteFirst(); 
  ob1.deleteLast();
  ob1.display(); 
  ob1.updateVal(10,999);
  ob1.display(); 
}


bool linkedList::isEmpty()
{
  return head == nullptr ? true : false;
}

void linkedList::insertLeft(int data)
{

  // create new node

  node<int> *new_node = new node<int>(data);
  if (isEmpty()){
    head = new_node;
    new_node->next=head; 

      }
  else
  {

    node<int> *last = head;
    while (last->next !=head)
      last = last->next;

    last->next = new_node;
    new_node->next=head; 
    
  }
}

void linkedList::insertRight(int data)
{
  node<int> *new_node = new node<int>(data);

  if (isEmpty())
    head = new_node;

  else
  {
    node<int> *last=head; 

while (last->next !=head)    last = last->next;

   
    new_node->next = head;
    last->next=head = new_node;
    
  }
}

void linkedList::insertPos(int pos, int val)
{
  if (isEmpty())
    cout << "the linked list is empty : " << endl;

  else if (pos < 0)
    cout << "invalid position " << endl;

  else if (pos == 0)
    this->insertRight(val);
  else
  {
    node<int> *new_node = new node<int>(val);

    node<int> *explore = head;
    int compter = 1;
    while (explore->next != NULL)
    {

      if (compter == pos)
      {
        new_node->next = explore->next;
        explore->next = new_node;

        break;
      }
      compter++;
      explore = explore->next;
    }
  }
}
void linkedList::display()
{

  if (isEmpty())
    cout << "the linked list is empty : " << endl;

  else
  {
    node<int> *explore = head;

    do 
    {
      cout << explore->data << " " << endl;
      explore = explore->next;
    } while (explore != head);
 cout<<"\n"; 
  }
  
}

void linkedList::deleteLast()
{
  if (isEmpty())
    cout << "the linked list is empty :" << endl;
  else if (head->next ==head)
  {
    delete (head);
    head = nullptr;
  }
  else
  {
    node<int> *explore = head;
    while (explore->next->next != head)
      explore = explore->next;

    free(explore->next);
    explore->next = head;
  }
}
void linkedList::deleteFirst()
{
  if (isEmpty())
    cout << "the linked list is empty : " << endl;

  else if (head->next == head)
  {
    delete (head);
    head = nullptr;
  }
  else
  {
    node<int> *last=head; 
while (last->next !=head)    last = last->next;
    node<int> *temp = head;
    head = head->next;
    delete (temp);
    last->next=head; 
  }
}
void linkedList::updateVal(int val, int newValue)
{

  if (isEmpty())
    cout << "the linked list overflow :" << endl;

  else
  {
    node<int> *explore = head;

   do  
    {
      if (explore->data == val)
      {
        explore->data = newValue;
        cout << "updated with successfully :" << endl
             << endl;

        return;
      }
      explore = explore->next;
    }while (explore != head);
    cout << "not found" << endl;
  }
}