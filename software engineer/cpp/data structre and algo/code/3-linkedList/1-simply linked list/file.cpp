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
  ob1.updateVal(10, 90);

  ob1.display();
}

/*
 void insertLeft(int data);
   void insertRight(int data);
   void insertPos(int pos , int val);
   void deleteLast();
   void deleteFirst();
   void deletePos(int pos);
   void deleteVAl(int pos );
   void updateVal( int val , int newValue);
   void updatePos(int pos, int newValue);
   void display();
*/

bool linkedList::isEmpty()
{
  return head == nullptr ? true : false;
}

void linkedList::insertLeft(int data)
{

  // create new node

  node<int> *new_node = new node<int>(data);
  if (isEmpty())
    head = new_node;
  else
  {

    node<int> *last = head;
    while (last->next != nullptr)
      last = last->next;

    last->next = new_node;
  }
}

void linkedList::insertRight(int data)
{
  node<int> *new_node = new node<int>(data);

  if (isEmpty())
    head = new_node;

  else
  {
    new_node->next = head;
    head = new_node;
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

    while (explore != nullptr)
    {
      cout << explore->data << " " << endl;
      explore = explore->next;
    }
  }
}

void linkedList::deleteLast()
{
  if (isEmpty())
    cout << "the linked list is empty :" << endl;
  else if (head->next == NULL)
  {
    delete (head);
    head = nullptr;
  }
  else
  {
    node<int> *explore = head;
    while (explore->next->next != nullptr)
      explore = explore->next;

    free(explore->next);
    explore->next = nullptr;
  }
}
void linkedList::deleteFirst()
{
  if (isEmpty())
    cout << "the linked list is empty : " << endl;

  else if (head->next == nullptr)
  {
    delete (head);
    head = nullptr;
  }
  else
  {

    node<int> *temp = head;
    head = head->next;
    delete (temp);
  }
}
void linkedList::updateVal(int val, int newValue)
{

  if (isEmpty())
    cout << "the linked list overflow :" << endl;

  else
  {
    node<int> *explore = head;

    while (explore != nullptr)
    {
      if (explore->data == val)
      {
        explore->data = newValue;
        cout << "updated with successfully :" << endl
             << endl;

        return;
      }
      explore = explore->next;
    }
    cout << "not found" << endl;
  }
}