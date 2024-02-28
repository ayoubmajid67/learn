#include <iostream>
using namespace std;

typedef struct Tigma
{
    Tigma *previous;
    int key;
    int data;
    Tigma *next;
} *node;
node l = nullptr;
node r = nullptr;

node create(int data, int key = -1)
{

    node new_node = new Tigma;
    new_node->data = data;
    new_node->key = key;
    new_node->previous = nullptr;
    new_node->next = nullptr;
    return new_node;
}

node getPostion(int pos)
{

    node explore = l;

    while (explore != nullptr)
    {
        if (explore->key == pos)
            return explore;
        explore = explore->next;
    }

    return nullptr;
}

node updateKey(node start)
{
    node explore = start;
    while (explore != nullptr)
    {
        explore->key+=1;
        explore = explore->next;
    }
}

void insert(int data)
{

    node new_node = create(data);

    if (l == nullptr && r == nullptr)
    {
        l = r = new_node;
        new_node->key = 0;
    }

    else
    {

        if (l->data >= new_node->data)
        {

            new_node->key = (l->key-1);
            new_node->next = l;
            l->previous = new_node;
            l = new_node;
          
        }

        else if (r->data <= new_node->data)
        {

            new_node->previous = r;
            new_node->next = NULL;
            r->next = new_node;
            new_node->key = (r->key+1);
            r = new_node;
        }

        else
        {
            node Tl = l, Tr = r;

            int Kl = l->key;
            int Kr = r->key;

            while (true)
            {

                int midV = (l->key + r->key) / 2;
                // n
                node mid = getPostion(midV);

                if (mid->data > new_node->data)
                    Tr = mid->previous;
                else
                    Tl = mid->next;

                if (Tr == Tl)
                {

                    if (Tr->data > new_node->data)
                    {

                        new_node->key = (Tr->key+1);
                        new_node->next = Tr->next;
                        new_node->previous = Tr;

                        Tr->next->previous = new_node;
                        Tr->next = new_node;
                        // n
                        updateKey(new_node->next);
                    }

                    else
                    {

                        new_node->next = Tr;
                        new_node->previous = Tr->previous;
                        new_node->key = (Tr->previous->key+1);

                        Tr->previous->next = new_node;
                        Tr->previous = new_node;
                        // n
                        updateKey(new_node->next);
                    }
                }
            }
        }
    }
}



void display(){ 
    node  explore=l; 

    while(explore!=nullptr){
        cout<< "data " <<explore->data<<endl<<" key : "<<explore->key<<endl; 
        cout<<"\n-------------\n";
        explore=explore->next; 
    }
    }

int main(){


insert(1);
insert(2);
insert(3); 
insert(4); 
insert(0); 
display(); 



return 0; 
}