# Build a simple calculator

# Get input from the user
num1 = float(input("Enter the first number: "))
operator = input("Enter the operator [+,-,*,/]: ").strip()
num2 = float(input("Enter the second number: "))

# Check if the operator is valid
operator_list = ['+', '-', '*', '/']

if operator not in operator_list:
    print("Invalid operator. You should choose between [+,-,*,/]")
else:
    # Perform calculation based on the operator
    if operator == '+':
        result = num1 + num2
    elif operator == '-':
        result = num1 - num2
    elif operator == '*':
        result = num1 * num2
    else:
        if num2 == 0:
            print("You can't divide by 0")
            # Exit the program if division by zero is attempted
            exit()
        else:
            result = num1 / num2

    # Print the formatted result
    print("Result: {:.2f}".format(result))
