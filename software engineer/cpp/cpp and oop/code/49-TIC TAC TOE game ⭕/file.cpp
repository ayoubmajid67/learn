#include<iostream>
#include<ctime>
#include<string>
#include<cctype>

using namespace std; 
using namespace std; 


void getBoard(char spaces[] );
void getIntialBoard(); 
void  playerMove(char spaces[], char playerChar); 
int  available(char spaces[] ,int size);
void  computerMove(char spaces[], char computerChar);
bool ChoiceWon(char spaces[],char playerChar , char ComputerChar); 


int main(){
system("cls"); 
char spaces[9]={' ',' ',' ',' ',' ',' ',' ',' ',' '}; 
bool run=true; 
char player='x';
char computer='o'; 
int stat=0; 

int score_pc=0; 
int score_pl=0; 
do{
system("cls"); 
fill(spaces,spaces+9,' ');  


cout<<"entre {1} to continue : "<<endl;
cout<<"entre {0} to exit "<<endl;  
cin>>stat;
cin.clear(); 
fflush(stdin); 

if(stat==0) exit(1); 
else{
 run=true; 
 cout<<"welcome in this  game : \n"; 
 getIntialBoard(); 

 cout<<"press entre to continue : "<<endl; 
 cin.get(); 
}
while(run){

system("cls");  
getBoard(spaces); 
playerMove(spaces,player); 
 
srand(time(NULL)); 
computerMove(spaces,computer); 
run=ChoiceWon(spaces,player,computer); 
}

}while(stat!=0); 
 

return 0;    
}

void getBoard(char spaces[] ){
    cout<<"\n"; 
cout<<"     |     |"<<endl;
cout<<"  "<<spaces[0]<<"  |"<<"  "<<spaces[1]<<"  |"<<"  "<<spaces[2]<<endl;
cout<<"_____|_____|_____"<<endl;

cout<<"     |     |    "<<endl;
cout<<"  "<<spaces[3]<<"  |"<<"  "<<spaces[4]<<"  |"<<"  "<<spaces[5]<<endl;
cout<<"_____|_____|_____"<<endl;

cout<<"     |     |"<<endl;
cout<<"  "<<spaces[6]<<"  |"<<"  "<<spaces[7]<<"  |"<<"  "<<spaces[8]<<endl;
cout<<"     |     |    "<<endl;

   cout<<"\n"; 

}

void  playerMove(char spaces[], char playerChar){

int num; 
int stat=0; 

do{
    if(available(spaces,9)==0)     break;
    stat=0; 
 cout<<"entre a number between (1-9): "; 
 cin>>num; 
 cin.clear(); 
 fflush(stdin); 
  
  
 num--;

if(available(spaces,9)==0)     break;
 
  else  if(spaces[num]==' '){
 spaces[num]=playerChar; 
 break;  

 }

else   stat=1; 

}while(num>8 || num<0||stat);




}

int  available(char spaces[] ,int size){

int count=0; 
for(int i=0; i<size;i++){

if(spaces[i]==' ') count++;

}
return count; 
}


void   computerMove(char spaces[], char computerChar){



 

do{
int x=rand() %8 +1; 
 if(spaces[x]==' '){
          
   spaces[x]=computerChar; 
  break; 
 }

 if(available(spaces,9)==0) break; 

}while (true); 

   
}

bool ChoiceWon(char spaces[],char playerChar , char ComputerChar){


if( 
(spaces[0]==playerChar && spaces[1]==playerChar && spaces[2]==playerChar) 
|| (spaces[0]==playerChar && spaces[4]==playerChar && spaces[8]==playerChar)
|| (spaces[0]==playerChar && spaces[3]==playerChar && spaces[6]==playerChar)  
|| (spaces[2]==playerChar && spaces[5]==playerChar && spaces[8]==playerChar) 
|| (spaces[2]==playerChar && spaces[4]==playerChar && spaces[6]==playerChar)
|| ( spaces[8]==playerChar && spaces[7]==playerChar && spaces[6]==playerChar)
|| (spaces[1]==playerChar && spaces[4]==playerChar && spaces[7]==playerChar) 
|| (spaces[3]==playerChar && spaces[4]==playerChar && spaces[5]==playerChar) ){

       system("cls");
    getBoard(spaces); 
   cout<<"you're the winner : "<<endl; 
 system("pause"); 
   return false; 
}



else if (
   (spaces[0]==ComputerChar && spaces[1]==ComputerChar && spaces[2]==ComputerChar) 
|| (spaces[0]==ComputerChar && spaces[4]==ComputerChar && spaces[8]==ComputerChar) 
|| (spaces[0]==ComputerChar && spaces[3]==ComputerChar && spaces[6]==ComputerChar)  
|| (spaces[2]==ComputerChar && spaces[5]==ComputerChar && spaces[8]==ComputerChar) 
|| (spaces[2]==ComputerChar && spaces[4]==ComputerChar && spaces[6]==ComputerChar) 
|| (spaces[8]==ComputerChar && spaces[7]==ComputerChar && spaces[6]==ComputerChar)
|| (spaces[1]==ComputerChar && spaces[4]==ComputerChar && spaces[7]==ComputerChar) 
|| (spaces[3]==ComputerChar && spaces[4]==ComputerChar && spaces[5]==ComputerChar) ) {

    system("cls");
    getBoard(spaces); 
cout<<"the Computer   won  : "<<endl;
system("pause"); 

return false ;
}



else if(available(spaces,9)==9){
    system("cls");
    getBoard(spaces); 
  cout<<"there is no winner "<<endl;
  system("pause"); 
  return false;    
}

else return true; 



} 
void getIntialBoard(){

   cout<<"\n"; 
cout<<"     |     |"<<endl;
cout<<"  "<<"1"<<"  |"<<"  "<<"2"<<"  |"<<"  "<<"3"<<endl;
cout<<"_____|_____|_____"<<endl;

cout<<"     |     |    "<<endl;
cout<<"  "<<"4"<<"  |"<<"  "<<"5"<<"  |"<<"  "<<"6"<<endl;
cout<<"_____|_____|_____"<<endl;

cout<<"     |     |"<<endl;
cout<<"  "<<"7"<<"  |"<<"  "<<"8"<<"  |"<<"  "<<"9"<<endl;
cout<<"     |     |    "<<endl;

   cout<<"\n"; 

}