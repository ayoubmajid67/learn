#include<iostream>
#include<cctype>
using namespace std; 

int main(){

 string questions[]={"1. what year was c++ created",
                      "2.who invented c++",
                     " 3- what is the predecessor of c++ ",
                      "4. is the Earth flat ?"}; 

string options[][4]={{"A.1969","B.1975","C.1985","D.1989"},{"A.guido can rossum ","B.ayoub majid","C.zimose lrode"},{"A.c","B.c+","C.c--","D.b++"}
,{"A.yes","B.no"}};

char answerKey[]={'C','B','A','B'}; 
char guess;
int score=0; 
cout<<"\n------------Quiz Game :---------------- \n\n"; 
for(int i=0;i<4;i++){

cout<<questions[i]<<endl<<endl; 


for(int j=0 ;j<3;j++){

cout<<options[i][j]<<"   "; 
}
cout<<endl; 
cout<<"--------------------------------"<<endl; 
cout<<"entre the answer : ";
cin>>guess;

if(toupper(guess)==answerKey[i]) {
   
     cout<<"-------correct "<<endl; 
    score++;
    }
else{
    cout<<"---------wrong"<<endl; 
}


cout<<endl; 
cout<<"press entre to continue "<<endl; 
fflush(stdin); 
cin.get(); 
system("cls"); 



}

cout<<"the score is : "<<score; 

}


