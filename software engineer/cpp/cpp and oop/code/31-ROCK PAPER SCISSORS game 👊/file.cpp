#include <iostream>
#include <cctype>
#include <ctime>
using namespace std;

int win_player = 0, win_computer = 0;

char getUserChoice();
char getComputerChoice();
void showChoice(char choice, string turn);
void chooseWinner(char player, char computer);

int main()
{
    int exit_choice = 0;
    char player;
    char computer;
    do
    {
        cout << "\n[ROCK] -[PAPER] - [SCISSORS] :   GAME ! " << endl;

        cout << "\n-------- won --------\n\n ";
        cout << " player  |  computer\n";
        cout << "\t " << win_player << " " << win_computer << endl
             << endl;

        cout << "press entre to continue : ";
        fflush(stdin);
        cin.get();
        player = getUserChoice();
        system("cls");
        srand(time(NULL));
        computer = getComputerChoice();
        cout << "\n-----------\n";
        showChoice(player, "player");
        showChoice(computer, "computer");

        chooseWinner(player, computer);

        cout << "\n---------------------\n";
        cout << "to exit entre {1}  \nto keep entre a {value} \n:";
        cin >> exit_choice;
        if (cin.fail())
        {
            cout << "invalid choice : \n";
            cin.clear();
            fflush(stdin);
            exit_choice = 1;
        }

        system("cls");
        cout << "hi";

    } while (exit_choice != 1);

    return 0;
}

char getUserChoice()
{
    char player;

    system("cls");
    cout << "\n-----------\n";
    cout << "r for ROCK: \n";
    cout << "p for PAPER\n";
    cout << "s for SCISSORS\n";

    cout << "entre your choice :";
    cin >> player;
    player = tolower(player);

    if (player != 'r' && player != 'p' && player != 's')
    {
        cout << "invalid choose\n";
        exit(1);
    }

    else
    {
        return player;
    }
}
char getComputerChoice()
{

    int choose = rand() % 3 + 1;

    switch (choose)
    {
    case 1:
        return 'r';
        break;

    case 2:
        return 'p';
        break;

    case 3:
        return 's';
        break;
    default:
        cout << "there  is an error in computer choose : \n ";
        exit(2);
        break;
    }
}
void showChoice(char choice, string turn)
{
    if (choice == 'r')
        cout << "\nthe choice of " << turn << " is [ROCK]" << endl;
    else if (choice == 'p')
        cout << "\nthe choice of " << turn << " is [PAPER]" << endl;
    else
        cout << "\nthe choice of " << turn << " is [SCISSORS]" << endl;
}

void chooseWinner(char player, char computer)
{
    if (player == computer)
        cout << "\n---------Draw There is no winner---------\n";

    else if ((player == 'p' && computer == 'r') ||
             (player == 'r' && computer == 's') ||
             (player == 's' && computer == 'p'))
    {
        win_player++;
        cout << "\n---------the player win--------- \n";
    }

    else
    {
        win_computer++;
        cout << "\n---------the computer win:--------- \n";
    }
}
