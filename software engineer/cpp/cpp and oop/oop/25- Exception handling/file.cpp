#include<iostream>
#include<cctype>
using namespace std; 
 // handel with  unexpected  user input: 
int main(){
 int hour; 

// prepare cin to handel with exceptions: 
cin.exceptions(cin.failbit); 


//  it shouldn't there was anything between the try  and the catch 
try {
  cin >> hour;

  // send the exception handling to catch:
  // like exit from try and go to catch
  if (hour < 0) throw string("error");

  cout << "the time is " << hour << ":00\n";
}

// receive the error and handle it:
catch (const string errorName) {
  cout << errorName << " wrong value :" << endl;

  // cerr  is better than cout in exception : =>due to is it's more customized than cout   (just in this case : )

}

 system("pause"); 
system("cls"); 

//example 2 :-----------[-] 
int answer = 0;

try {
  cout << "5 + 7: " << endl;
  cin >> answer;

  if (answer != 12) {

cout<<answer<<endl;     
    throw string("error Msg");  
  
  }
  cout << "awesome,Your answer is correct: " << endl;
}

catch (string ErrorMsg) {
  cout << ErrorMsg << " incorrect answer : the correct one  is 12" << endl;
 
}

system("pause"); 
system("cls"); 
//example 3:------------[-]: 

try{
 int a[]={1,2,4,5,7,7,8,9,9,6,2,2,5}; 
const int size=sizeof(a)/sizeof(a[0]); 

int index; 

 cout<<"entre index : "; 
 cin>>index; 

 if(index<0)   throw string("error , negative index :  "); 

if(index >=size) throw index; 

for(int i=0 ;i<=index;i++) cout<<"the value of index "<<i<<" is : "<<a[i]<<endl; 
 

}
catch(string msgError){
    cout<<"Exception"<<endl; 
 cout<<msgError<<endl; 

}

catch(int index){
    cout<<"Exception"<<endl; 
 cout<<index<<" is out of the range"<<endl; 

}

system("pause"); 
 return 0; 
}