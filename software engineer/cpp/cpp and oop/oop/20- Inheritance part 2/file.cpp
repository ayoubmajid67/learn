#include <iostream>
using namespace std;

// three things inherited  automaticaly :
/*
 constructor && destructor => default is empty constructor
operator=() member
friends

*/

class mother
{
public:
    mother()
    {

        cout << "mother :empty constructor\n";
    }

    mother(int a)
    {
        cout << "mother:parametrize constructor:" << a << endl;
    }
};

class daughter : public mother
{

public:
    daughter()
    {
        cout << "daughter:empty contractor\n";
    }

    daughter(int a)
    {
        cout << "daughter:parametrize constructor:" << a << endl;
    }
};

class son : public mother
{

public:
    // default empty constructor from parent :
    son() : mother()
    {
        cout << "son:empty contractor\n";
    }

    // this means call the parent parametrized constructor :
    son(int a) : mother(a)
    {
        cout << "son:parametrize constructor:" << a << endl;
    }
};

// multiple inheritance  :

class name
{
    string name;

protected:
    void setName(string name)
    {
        this->name = name;
    }

    void printName()
    {
        cout << "the name is :" << name << endl;
    }
};

class id
{
    int id;

protected:
    void setId(int i)
    {
        id = i;
    }

    void printID()
    {

        cout << "the id is :" << id << endl;
    }
};

class student : public name, public id
{

public:
    student(int id, string name)
    {

        this->setId(id);
        this->setName(name);
    }

    void print()
    {

        this->printID();
        this->printName();
    }
};
int main()
{

    son ob2(5);

    // multi class :
    student st1(1, "ayoub");

    st1.print();

    return 0;
}