#include <iostream>
#include<iomanip>
#include<string>
#include <limits>
using namespace std;



//  wait until user press entre in the keyboard  ; cin.get(); 

void showBalance(double balance);
double deposit();
double withdraw(double balance);

int main()
{
        int choice = 0;
          double balance = 123;
do{
     if(choice!=0) {
       std::cout << "Press Enter to continue...";
       fflush(stdin); 
    cin.get(); // Wait for the user to press Enter
      }
   system("cls"); 

  

      
    cout << "****************"<<endl;
    cout << "entre your choice : \n";
    cout << "1- show balance : \n";
    cout << "2-deposit Money \n";
    cout << "3-withdraw Money \n";
     cout << "4-exit\n";
     cin>>choice; 
      cin.clear();  //ignore any  flag error  :
      //fflush(stdin); 
      cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // clear any character : 
   system("cls"); 
    switch (choice)
    {
    case 1:
        showBalance(balance);
        break;

    case 2:
        balance += deposit();
        break;
    case 3:
        balance -= withdraw(balance);
        break;
    case 4:
      cout<<"thank you for visiting "; 
        exit(1);
        break;
    default:
        cout << "you should entre a value between (1-4)\n";
        break;
    }
}while(choice!=4); 

return 0 ; 

}

void showBalance(double balance){
    cout<<"Your balance is:  $"<<setprecision(2)<<fixed<<balance<<endl; 


}
double deposit(){
double amount=0; 
cout<<"entre  amount  to be deposited \n "; 
cin>>amount; 
if(amount > 0  ) return amount; 

else {
    cout<<"that's not valid amount you should entre a positive value :  \n"; 
    return 0;  
}


}
double withdraw(double balance){
double amount=0;
cout<<"entre  amount  to be withdrawn \n "; 
cin>>amount; 
if(amount > 0  && amount <balance)  return amount; 

else if(amount>0 && amount >balance) {
    cout<<" insufficient funds : \n "; 
 return 0;
} 
else {
    cout<<"that's not valid amount you should entre a positive value :  \n"; 
    return 0;  
}

}