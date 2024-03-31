# print something : --[]
print("text")

#comments : --[]
    #  one line comment --[
        #text
 
    # multi line strings --[
    '''
        your 
        text 

    '''
# check the data  type --[]
    # syntax --[ 
        type(value)
    # example --[
        print(type(10))  # int
        print(type(10.0))  # float
        print(type('hello'))  # str => string
        print(type([1, 2, 3, 4, 5]))  # list
        print(type((1, 2, 3, 4, 5)))  # tuple => Tuple
        print(type({"one": 1, "Two": 2, "Three": 3}))  # dict => Dictionary
        print(type(2 == 2))  # bool => boolean
#variables --[]
    #syntax --[
        varName=value
    #name convention and rules 
        '''
            [1] can start with (a-z A-Z) or underscore 
            [2] You can't start with Num or Special Character (except _ )
            [3] Can include (0-9) or underscore 
            [4] cannot include special characters 
            [5] case sensitive
        '''
    #example :
        firstName='kati'
        lastName='loran'
        age=20
        mark=97 
        print(firstName); 
        print(lastName); 
        print(mark);     
# info :--[]
    '''
        -source code : original code you write it in computer 
        -translation : converting source code into machine language 
        -compilation : Translate code before run time 
        -run-time    : period that app take to executing commands 
        -interpreted : code translated on the fly during execution 
    '''

# get all reserved words --[]
    help('keywords'); 
#assign multiple value in one line --[]
    #syntax : 
        var1,var2,var3=v1,v2,var3
    #example : 
        a,b,c=1,2,3

#escape sequences characters  --[]
    '''
        -b => back space 
        \n => new line  
        \ => escape new line + escape special characters 
        \t => Horizontal Tab 
        \xhh => character Hex Value 
    '''
    #examples :
        print("Hello\bworld") # it will remove o 
        print("the name \nthe last name") # add new line after the name 
        #escape new line character 
        print("my name\
        ayoub\n\
        my last name majid\n")

        #escape special characters : 
        print('the name is \'ayoub\' ')
        # get value of character from hex : 4f hex code of O
         print('\x4f') # O

# concatenation : --[]
    #syntax :
        print(str1 + str2 )
    # examples : 
        msg = "I love"
        lang = "python"

        print(msg + " " + lang)
        a = "A" \
            "B" \
            "C"
        b = "A" \
            "B" \
            "C"
        print(a + "\n" + b)

        # Error : you can't concatenate string with numbers only string with string
        print("Hello" + 1)

#Strings Indexing & Slicing : --[]
'''
    [1] All Data in Python is Object
    [2] Object Contain Elements
    [3] Every Element Has Its Own Index
    [4] Python Use Zero Based Indexing ( Index Start From Zero )
    [5] Use Square Brackets To Access Element
    [6] Enable Accessing Parts Of Strings, Tuples or Lists
'''
    # indexing (Access single item) --[
    '''
        if you pass a negative value you will get vaLues 
        from the end to start  
    '''
    print(str[targetIndex])
#slicing (access multiple sequence items) --[
   '''
        - end not include 
        - if end not specified  it will take until the end 
        - if start not specified it will start from the 0 
   '''
    str[startIndex:endIndex:steps] 

# strings methods : ---[]
#get length of a string : 
len(str)

#get strip string 
a = a.strip([targetCharacter]) 
#get strip left string 
a=a.rstrip() 
#get strip right string 
a=a.lstrip()

#capitalize() : upper the first character of ech word 
str.capitalize()

#title() : capitalize + upper words that start with a number 
str.title()

#xFill() : set a size of string then fill the empty spaces by 0
str.zfill() 
#example  : --[
    a = "1"
    b = "10"
    c = "11"
    d = "101"
    print(a.zfill(3))  # 001
    print(b.zfill(3))  # 010
    print(c.zfill(3))  # 011
    print(d.zfill(3))  # 101

# lower() : get lower case  
str.lower()

# upper() : get upper case  
str.lower()
#split([separator],[maxSplit]) : get  split string to list 
str.split(seperator,maxSplit)
# rsplit() : start split from right to left 

#center(nbrCharacters,fillCharacter) : add character around string 
a.center(len(a) + nbrCharactersToADD,fillCharacter)

#ljust(nbrCharacters,fillCharacter) : add character in the left of the string 
a.ljust(len(a) + nbrCharactersToADD,fillCharacter)

#rjust(nbrCharacters,fillCharacter) : add character in the right of the string 
a.rjust(len(a) + nbrCharactersToADD,fillCharacter)

#count(word,[startIndex],[endIndex]) : get number of frequency of a word : 
a.count()

#swapcase() : convert case of each character 
str.swapcase()

#startswith(word,[startIndex],[endIndex]) : check if a string start with word
str.startswith()
#endswith(word,[startIndex],[endIndex]) : check if a string ends with word
str.endswith()

#index(word,[startIndex],[endIndex]) : 
"""
    get the  word position  in the string
    if it not found it will throw an error  
"""
str.index(word)

#find(word,[startIndex],[endIndex]) : 
"""
    get the  word position  in the string
    if it not found it will return -1   
"""
str.find(word)

# splitlines() : split string base on lines  to a list 
str.splitlines()

#example : 
a="""First Line 
second Line 
Third Line 
Fourth Line 
"""
print(a.splitlines())
# result : ['First Line ', 'second Line ', 'Third Line ', 'Fourth Line ']

# check if string isDigit 
str.isdigit()
# check if string is alpha [a-z]
str.isalpha()
# check if string is alpha or number 
str.isalnum 
#check if string is a space 
str.isspace()
#check if string is a title format 
str.istitle()
#check if string is lower case : 
str.islower()
#check if string is upper : 
str.isupper() 

#example  : 
    one='I Love Python 2D'
    two='I Love Python 2d'

    print(one.istitle()) #true 
    print(two.istitle()) # false 

    three=" "
    four=""
    print(three.isspace())
    print(four.isspace())
    five="i love python"
    sex="I Love Python"
    print(five.islower()) # true 
    print(sex.islower())  # false 

#replace() : replace  a world in a string : 
str.replace(targetWord,replaceValue,[nbrReplacement])

#example : 
    user_input = input("Enter a number: ")

    # Remove the decimal point before checking if the remaining
    # characters are digits
    if user_input.replace('.', '').isdigit():
        print("You entered a number.")
    else:
        print("You did not enter a number.")

#join() join string  iterator to  a string with a separator :
    seprarato.join(stringIterator)

    #example : 
        myList=["nice","meeting","internship","deployment"] 
        print((' || ').join(myList))
        #nice || meeting || internship || deployment

#string formatting : 
#old way : 
    print("text %placeholder1 %placeholder2 %placeholderN " % (v1,v2,vn))

    #placeholder :
    """
        %f : float 
        %d : integer
        %s : string 
        %b : boolean 
    """ 
    """
        %.nbrf  : specify number  of flatting digit  
        %.nbrs  : specify number  of characters 
    """
    # example : 
        name="ayoub"
        lastName="majid"
        age=21
        mark=96.356 

        print('my name is %s and my last name \
        is %.4s and I\'m %d finally my mark is %.2f ' % (name,lastName,age,mark))
    # my name is ayoub and my last name is maji and I'm 21 finally my mark is 96.36 

# new way :
   print("text {[:placeholder1]} {[:placeholder2]} {[:placeholderN]}".format(v1,v2,vn))
    #example : 
        name = "ayoub"
        lastName = "majid"
        age = 21
        mark = 96.356
        print('my name is {} and my last name \
        is {} and I\'m {} finally my mark is {} '.format(name, lastName, age, mark))
    #placeholder :
        """
            %f : float 
            %d : integer
            %s : string 
            %b : boolean 
        """ 
#example : 
    name = "ayoub"
    lastName = "majid"
    age = 21
    mark = 96.356

    print('my name is {:2s} and my last name \
    is {} and I\'m {} finally my mark is {} '.format(name, lastName, age, mark))

#new way 2 : 
    print(f'text {varName1} text {varnameN}')

    #example : 
        name = "ayoub"
        lastname = "majid"
        print(f'the name : {name} \n the lastName : {lastname}')

#numbers :  --[]
    #complex : 
        complexNumber=5+6j 
        print(complexNumber.imag)
        print(complexNumber.real)
"""
    # [1] You can convert from Int to Float or Complex 
    # [2] You can convert from Float to Int or Complex 
    # [3] You cannot convert from Complex to Int or Float 
"""
    #example : 
    print(complex(100))    #(100+0j)
    print(complex(100.12)) # (100.12+0j)
    print(int(100.1))      #100
    print(float(100))      #100.0
# Arithmetic operators: --[]
"""
    [+]  Addition
    [-]  Subtraction
    [*]  Multiplication
    [/]  Division
    [%]  Modulus
    [**] Exponent
    [//] Floor Division`
"""

# f s : --[]
"""
    [1] List Items Are Enclosed in Square Brackets
    [2] List Are Ordered, To Use Index To Access Item
    [3] List Are Mutable => Add, Delete, Edit
    [4] List Items Is Not Unique
    [5] List Can Have Different Data Types
    [6] List Are passed by reference 
"""
# declare new list 
    l=[item1,item2,itemN] 

# access an index : 
    l[index]

# modify value of an item :
    l[index]=newValue 

#get  the index of an element  using value :
l.index(index) 


#examples : 
    print(myAwesomeList)  # Whole List
    print(myAwesomeList[1])  # "Two"
    print(myAwesomeList[-1])  # True
    print(myAwesomeList[-3])  # 1

    print(myAwesomeList[1:4])  # ['Two', 'One', 1]
    print(myAwesomeList[:4])  # ['One', 'Two', 'One', 1]
    print(myAwesomeList[1:])  # ['Two', 'One', 1, 100.5, True]

    print(myAwesomeList[::1])  # ['One', 'Two', 'One', 1, 100.5, True]
    print(myAwesomeList[::2])  # ['One', 'One', 100.5]

    print(myAwesomeList)
    # myAwesomeList[1] = 2
    # myAwesomeList[-1] = False
    myAwesomeList[0:3] = ["A"]
    print(myAwesomeList)

# add new element in the end : 
l.append(value)

# add new list in the end :
l.extend(newList)

#remove an element from the list using value : 
l.remove(elment)

#remove an element from the list using index  (and return his value) : 
l.pop(index) # default the last index 


#count the number of frequency of an element :
l.count(value) 
    
# get a copy from the list :  (shallow copy | not deep copy)
copy=l.copy() # to pass just values  (shallow copy)

#sort a list :
    #in ascending order  : 
    l.sort()
    # in descending order : 
    l.sort(reverse=True)

# reverse a list : 
l.reverse()

# remove all items from the list : 
l.clear() 

#insert an element at a specific position 
l.insert(index,element) 
    #examples : 
        l = [1, 2, 3, 4, 2, 100]
        l.insert(len(l),'nice') #[1, 2, 3, 4, 2, 100, 'nice']
        l.insert(0,'nice') # ['nice', 1, 2, 3, 4, 2, 100]
        l.insert(-1,'nice') # [ 1, 2, 3, 4, 2,'nice' ,100]

# Tuples : --[]
"""
    [1] Tuple Items Are Enclosed in Parentheses
    [2] You Can Remove The Parentheses If You Want
    [3] Tuple Are Ordered, To Use Index To Access Item
    [4] Tuple Are Immutable => You Can't Add or Delete or update
    [5] Tuple Items Is Not Unique
    [6] Tuple Can Have Different Data Types
    [7] Operators Used in Strings and Lists Available In Tuples
"""
# declare a tuple :
    tup= (v1,v2,vN) 
    #or
    tup=v1,v2,vN 
    # in the case when you have one element : 
    tup=v1,
# concat tuples 
c= tup1 + tup2
    #example : 
    a = (1,)
    b = (2,)
    c = a + ("a",) + b # (1, 'a', 2)
#tuples , list , string Repeat (*)
    myString = "Osama"
    myList = [1, 2]
    myTuple = ("A", "B") 
    print( (myString + " ")  * 6)# Osama Osama Osama Osama Osama Osama
    print(myList * 6) # [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    print(myTuple * 6) # ('A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B')

#count the number of frequency of an element :
    tup.count(value) 

#get  the index of an element  using value :
    l.index(index)

# Tuple Destruct
    a = ("A", "B", 4, "C")
    x, y, _, z = a
    print(x)
    print(y)
    print(z)

# set  : --[]
"""
    [1] set items are enclosed in curly braces 
    [2] set items are not ordered and not indexed 
    [3] set indexing and slicing can't be done 
    [4] set has only immutable data types (numbers,strings , tuples)
        List and dict are not
    [5] set items is unique
"""

#declare new set 
    s={v1,v2,vN}
 
# clear a set 
    s.clear(); 

# group two set 
    result=s.union(newSet,...)
# or 
    result=s| newSet

#add new value 
s.add(value)

#get   a shallow copy  : 
    copy=s.copy() 

#remove an element from the set : 
    s.remove(value)  # it will give an error if the element not found : 

#remove an element without trowing an exception in the case when value not found 
    s.discard(value)

#remove a random element then return its value :
    s.pop() 

#update a set with another set with removing multiplicate and add new values :
    s.update(updateSet)  

#get difference element between two sets  :
   # it will return just difference  elements in  the first set  : 
    diffSet=s.difference(otherSet) # diffSet=s - otherSet 

#update the first set to be contain the difference between it and the second set : 
    s.difference_update(otherSet) 

#intersection : get sharing element between two sets : 
    interSet=s.intersection(otherSet) # s & otherSet 

#update first set to be contain sharing elements between it and the second set 
     s.intersection_update(otherSet)

#symmetric difference : get element not exist in the two set in the same time 
     s.symmetric_difference(otherSet) # i^j 

# the same to #symmetric difference  but the result will be reflected to 
  #the first set
    s.symmetric_difference_update(otherSet)
 
 #example : 
    e = {1, 2, 3, 4, "X"}
    f = {"osama", "X", 2}

    print(len(e))
    e.intersection_update(e)  # {'osama', 1, 3, 4}
    print(e.symmetric_difference(f))  # {'osama', 1, 3, 4}
    print(e ^ f)

# check if all element in a subSet is exist in a a set  [T , F]
    s.issuperset(subSet)

#check if all element in a set is exist in a a subSet [T , F]
    s.issubset(subset)

#check if two set doesn't contains any sharing element :
    s.isdisjoint(otherSet)

# dictionary :  --[]
"""
    [1] Dict items are enclosed in curly braces 
    [2] Dict items are contains key :value 
    [3] Dict key need to be immutable =>(Number, string , Tuple) List not Allowed
    [4] Dict Value can have any data Types 
    [5] Dict key need to be unique 
    [6] Dict is ordered You access its element with key
    [7] Pass by Reference 
"""
#example : 
    dict = {
        "name": "ayoub",
        "age": 20,
        "salary": 3999.22,
        (1, 2, 3, 4): "test"
    }
# access item : 
    dict[key]
    #or 
    dict.get(key)

# get all k;eys : 
    dict.keys()

#get all values : 
    dict.values(); 

#nested dict example : 
    languages = {
        "one": {
            "name": "html",
            "progress": "89"
        },
        "two": {
            "name": "css",
            "progress": "93"
        },
        "three": {
            "name": "js",
            "progress": "94"
        }
    }
    print(languages["one"]["name"]) # html

# get dict length : 
len(dict)

#nested dictionary  example 2 :
    lang1= {
            "name": "html",
            "progress": "89"
        }
    lang2={
            "name": "js",
            "progress": "94"
        }
    lang3={
            "name": "js",
            "progress": "94"
        }
    languages = {
        "one" :lang1,
        "two": lang2,
        "three": lang3
    }

    print(languages["one"]["name"]) 

# clear a dict : 
    dict.clear() 

# add new member : 
    dict["newKey"]=value
    #or :
    dict.update({"key":"value"})

# take a copy from a dict  (Shallow copy) 
    copy=dict.copy()

# set a value of a key if exist it will assign to it the default value if not 
# the key will preserve its value 
    dict.setdefault(key,[defaultValue=None])

#remove the last added item (with getting its value)
    dict.popitem() 

#get all items in a dict :
    dict.items() 

# create a new dict Using an iterable Variable ;
dict.fromkeys(iterableVar,value) # defaultValue=None
 
#example : 
    l=[1,2,3,4,5]
    #{1: 'nice', 2: 'nice', 3: 'nice', 4: 'nice', 5: 'nice'}
    print(dict.fromkeys(l,"nice"))

# Boolean 
"""
    [1] In Programming You Need to Known Your If Your Code Output is True Or False
    [2] Boolean Values Are The Two Constant Objects False + True.
"""

#cases : 
    print("truly Values : ")
    print(bool(1+ 3j))   # complex 
    print(bool("nice"))  # string 
    print(bool(True))    # bool 
    print(bool(1))       # int 
    print(bool(100.12))  # float
    print(bool({1,2,3})) # dictionary 
    print(bool([1,2,3])) # list 
    print(bool((1,2,4))) # tuple 

    print("\nFalsy values :")
    print(bool(False))
    print(bool("")) #empty string 
    print(bool([])) # empty  dictionary 
    print(bool({})) # empty  list 
    print(bool(())) # empty  tuple 
    print(bool(0))
    print(bool(None))

#comparison operators : 
"""
    Equality (==): 
    Inequality (!=): 
    Strict Equality (is): Checks if two objects are the same object in memory.
    Strict Inequality (is not): Checks if two objects are not 
           the same object in memory.
    Greater Than (>): 
    Greater Than or Equal To (>=): 
    Less Than (<):
    Less Than or Equal To (<=): 
"""
#example : 
    print(10 == 10)  # True
    print(10 != 5)   # True
    print(10 is 10)  # True (Identity comparison)
    print(10 is not 5)  # True

#logical operators :
"""
    and : The and operator returns True if both operands are True
    or  : The or operator returns True if at least one of the operands is True
    not : The not operator negates the boolean value of its operand
""" 

#example : 
    # Combining logical operators
    x = 5
    y = 10
    z = 15

    result = (x < y) and (y < z)  # True, because both conditions are True
    result = (x > y) or (y < z)   # True, because at least one condition is True
    result = not (x > y)          # True, because the condition (x > y) is False

# -- Assignment Operators :
"""
     a=b  (a==b)
    a+=b  (a=a+b)
    a-=b  (a=a-b)
    a*=b  (a=a*b)
    a/=b  (a=a/b)
   a**=b  (a=a**b)
    a%=b  (a=a%b)
   a//=b  (a=a//b)
"""

#type conversion : 

#convert from number to string : 
    str(num)
#tuple :
    c = "nice" # String 
    d = [1, 2, 3, 4, 5] # List 
    e = {"a", "b", "c"} # Set 
    f = { #Dictionary 
        "A": 1,
        "B": 2,
        "c": 3,
    }
    print(tuple(c)) # ('n', 'i', 'c', 'e')
    print(tuple(d)) # (1, 2, 3, 4, 5)
    print(tuple(e)) # ('c', 'a', 'b')
    print(tuple(f)) # ('A', 'B', 'c')
    print(tuple(500)) # TypeError: 'int' object is not iterable

#list : 
    c = "nice" #string 
    d = (1, 2, 3, 4, 5) # Tuple  
    e = {"a", "b", "c"} #Set 
    f = {#Dictionary 
        "A": 1,
        "B": 2,
        "c": 3,
    }
    print(list(c)) # ['n', 'i', 'c', 'e']
    print(list(d)) # [1, 2, 3, 4, 5]
    print(list(e)) # ['c', 'a', 'b']
    print(list(f)) # ['A', 'B', 'c']
    print(list(500)) # TypeError: 'int' object is not iterable

# Set : 
    c = "nice" # String 
    d = (1, 2, 3, 4, 5) # Tuple 
    e = ["a", "b", "c"] #list 
    f = { # Dictionary 
        "A": 1,
        "B": 2,
        "c": 3,
    }
    print(set(c)) # {'i', 'e', 'c', 'n'}
    print(set(d)) # {1, 2, 3, 4, 5}  Follows the order 
    print(set(e)) # {'b', 'c', 'a'}
    print(set(f)) # {'c', 'A', 'B'}
    print(set(500)) # TypeError: 'int' object is not iterable set

#dictionary :
    c = "nice" # String 
    d = (('1',2), ('2',2), ('3',3)) # Tuple 
    e = [["a","1"], ["b",2], ["c",3]] #list 
    f = { {"A":1},{"B":2},{"c":3}}  # set 

    # print(dict(c)) # #error : 
    print(dict(d)) # {'1': 2, '2': 2, '3': 3}
    print(dict(e)) # {'a': '1', 'b': 2, 'c': 3}
    print(dict(f)) # TypeError: unhashable type: 'dict'
    print(dict(500)) # TypeError: 'int' object is not iterable set

# User Input :
    varName=input("Msg :")

#example 1 : 
    fName=input("enter the first name : ")
    lastName=input("enter the last name : ")
    print(f'the first name  : {fName.strip()}')
    print(f'the lastname is : {lastName.strip()}')

#example 2 : 
    fName = input("enter the first name : ").strip().capitalize()
    lastName = input("enter the last name : ").strip().capitalize()
    print(f'the first name  : {fName.strip()}')
    print(f'the lastname is : {lastName.strip()}')

#example 3 : 
    fName = input("enter the first name : ").strip().capitalize()
    mName=input("enter the middle name : ").strip().capitalize()
    lastName = input("enter the last name : ").strip().capitalize()
    print(f"hello '{fName} {mName:.1s}  {lastName}' Happy To See You.")

#example 4 : 
    email=input("enter your email : ").strip().capitalize();  #ayoubmajid@gmail.com
    print("the name        : ", email[:email.index('@')]) # Ayoubmajid
    print("the subdomain   : ",email[email.index("@")+1 :email.index('.')]) #gmail
    print("top level domain  : ",email[email.index('.'):]) #.com

# age details Practical Example :
    age = int(input('what\'s your age : '))
    months = age*12
    weeks = months * 4
    days = age*365
    hours = days * 24
    minutes = hours * 60
    seconds = minutes * 60
    print("You Lived For : ")
    print(f'{months} Months')
    print(f'{weeks:,} Weeks')
    print(f'{days:,} Days')
    print(f'{minutes:,} Minutes')
    print(f'{seconds:,} Seconds') 

# Control Flow - If, Elif, Else
#simple if statement  :
    if condition : 
        #code
    
#full if statement syntax :
    if  condition : 
        #code
    elif condition :
        #condition  
    else :
        #code

#example : simple calculator# Build a simple calculator
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

# membership operators :
"""
    in 
    not in 
"""

#example : 
    name = "ayoub"

    print('s' in name)  # False
    print('y' in name)  # True
    print('t' in name)  # False

    # List :
    friends = ["ayoub", "amine", "kamal"]

    print("ayoub" in friends)  # True
    print("youb" in friends)  # False
    print("amine" not in friends)  # False
    print("nice" not in friends)  # True

    # using in and not in with condition :
    countriesOne = ["Morocco", "KSA", "Kuwait", "Bahrain"]
    countriesOneDiscount = 80

    countriesTwo = ["Egypt", "Italy", "Irak"]
    countriesTwoDiscount = 70

    userCountry = "Morocco"
    if userCountry in countriesOne:
        print("the discount is : ", countriesOneDiscount)
    elif userCountry in countriesTwo:
        print("the discount is : ", countriesTwoDiscount)
    else:
        print("no Available Discount For Your country ")

# practical membership control :
    adminsList = ['Ayoub', 'Osama', "Amine"]

    name = input('Enter Your Name : ').strip().capitalize()

    if name in adminsList:
        print("You're Admin :")
        option = input(
            "Enter Your Option Update/Delete Your Name : ").strip().capitalize()
        if option == 'Update' or option == 'U':
            newName = input("Enter Your new Name : ").strip().capitalize()
            if newName in adminsList:
                print("The Entered a Name that is Already Exist in the database :")
            else:
                adminsList[adminsList.index(name)] = newName

                print(f"Your name updated successfully To {newName}")
        elif option == 'Delete' or option == 'D':
            adminsList.remove(name)
            print("Your Name remove with success : ")
        else:
            print("Invalid Option You should Choice either Delete Or Update ")
    else:
        print("You're not an Admin ")
        addAdminStatus = input(
            "Do You Want To add yourself y/n : ").strip().capitalize()
        if addAdminStatus == 'Yes' or addAdminStatus == 'Y':
            adminsList.append(name)
            print("Your Name added with Success : ")
        else:
            print("Good Bye : ")

#loops : -------------[]
# while loop :
while condition :
    #code

#example : print number from 0 to 10
    a = 0
    while a < 10:
        a += 1
        print(a)

#example List an Array:      
ls=['ayoub',"amine","ak",'tt']
a=0
while a < len(ls) :
    print(f" [{str(a+1).zfill(2)}] = {ls[a]}")
    a+=1

#example Bookmark Manager: 
        myFavoriteWebs=[]
    maxWebs=5
    while maxWebs > 0 : 
        web=input("Enter the websiteName without https:// : ")
        myFavoriteWebs.append(f'https://{web.strip().lower()}')
        maxWebs-=1
        print(f"Website added , {maxWebs} Places left")

    print("Favorite List :")
    myFavoriteWebs.sort()
    print(myFavoriteWebs); 

#example password Guess : 
    tries = 4
    mainPassword = "osama@123"
    while tries > 0:
        inputPassword = input("Write Your Password: ").strip().lower()
        if inputPassword == mainPassword:
            print("Correct Password :")
            break
        tries -= 1
        print(f"Wrong Password {'last' if tries == 0 else tries} chance Left ")

    else:
        print("Your Account Locked : ")

# For Loop :         
"""
    # -----------------
    # -- Loop => For --
    # -----------------
    # for item in iterable_object :
    #   Do Something With Item
    # -----------------------------
    # item Is A Vairable You Create and Call Whenever You Want
    # item refer to the current position and will run and visit 
      all items to the end
    # iterable_object => Sequence [ list, tuples, set, dict, string
      of charcaters, etc ... ]
"""    
#syntax : --
    # iterator an iterator 
        for iteration in iterator  :
            # code 

    #Loop range 
        # the end not included :  
        for i range(startIndex, endIndex) :
            # code 

    #examples : 
    myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

    print("The first method : ")
    for number in myNumbers:
        print(number)


    print("The second method : ")
    for i in range(0, len(myNumbers)):
        print(f"arr[{i}]= {myNumbers[i]} ")


    myName="ayoub"

    for character in  myName : 
        print(f"{character} ",end="") 

        mySkills={ 
    "html":"90%",
    "css":"80%",
    "js":"94%",
    "python":"90%",
    "html":"90%",
    }
    print(mySkills['js'])

    for skill in mySkills : 
        print(skill,end=" ")
        print(mySkills[skill])
    #nested Loop :
    peoples = {
    "Ayoub": {
        "html": "70%",
        "css": "90%",
        "js": "92%",
    },
    "Amine": {
        "html": "70%",
        "css": "90%",
        "js": "92%",
    },
    "Kamal": {
        "html": "70%",
        "css": "90%",
        "js": "92%",
    },
    }
    for person in peoples :
        print("the person is : ",person)
        for skill in peoples[person] :
            print(f"{skill} => {peoples[person][skill]}")
        print("\n")


# break : break a Loop 
    numbers=[1,2,3,4,5,6]
    for number in numbers :
        if number== 3 : 
            continue
        print(number)     # 1 2  
# continue : jump to next iteration 
    numbers=[1,2,3,4,5,6]
    for number in numbers :
        if number== 3 : 
            continue
        print(number)     # 1 2 4 5 6 

# pass : replace empty blocks 
    for number in numbers :
    pass 
      
    if 0==0 :
        pass

# new way to print key value (dict): 
    skills = {
        "html": "90%",
        "css": "95%",
        "js": "92%",
    }

    print(skills)

    for key, value in skills.items():
        print(f"Key : {key} => value : {value}")

#advance example : 
    skills = {
        "html": {
            'Main': "93%",
            "pagJs": "90%"
        },
        "css": {
            'Sass': "90%",
            'tailwind': "99%",
        }
    }

    for key, value in skills.items():
        print(f'{key} Progress Is : ')
        for childKey, childValue in value.items():
            print(f'  {childKey} => {childValue}')

# functions : 
"""
    # [1] A Function is A Reusable Block Of Code Do A Task
    # [2] A Function Run When You Call It
    # [3] A Function Accept Element To Deal With Called [Parameters]
    # [4] A Function Can Do The Task Without Returning Data
    # [5] A Function Can Return Data After Job is Finished
    # [6] A Function Create To Prevent DRY
    # [7] A Function Accept Elements When You Call It Called [Arguments]
    # [8] There's A Built-In Functions and User Defined Functions
    # [9] A Function Is For All Team and All Apps
    # ----------------------------------------
"""
def functionName(parameters) :
    # code
    [ return value]

# call a function : 
functionName(parametersValue)

#example 1 : 
    def functionName() :
        return 'Hello Python From Inside Function'

    dataFromFunction=functionName()
    print(dataFromFunction) # Hello Python From Inside Function

# example 2 : 
    def sayHello(name) :
        print(f"Hello {name}")

    sayHello("amine")
    sayHello("Ahmed")
    sayHello("Kamal")

# Function Packing, Unpacking Arguments *Args
# example 1 : 
    def say_hello(*peoples):  # n1, n2, n3, n4

    for name in peoples:

        print(f"Hello {name}")

    say_hello("Osama", "Ahmed", "Sayed", "Mahmoud")
# example 2 : 
    def show_details(name, *skills):

    print(f"Hello {name} Your Skills Is: ")

    for skill in skills:

        print(skill)

    show_details("Osama", "Html", "CSS", "JS")
    show_details("Ahmed", "Html", "CSS", "JS", "Python", "PHP", "MySQL")

# Default function parameters : 
#example : 
    def say_hello(name="Unknown", age="Unknown", country="Unknown"):

    print(f"Hello {name} Your Age is {age} and Your Country Is {country}")

    say_hello("Osama", 36, "Egypt")
    say_hello("Mahmoud", 28, "KSA")
    say_hello("Sameh", 38)
    say_hello("Ramy")
    say_hello()
# -- Function Packing, Unpacking Arguments **KWArgs --
# get values as a Dictionary 
#example 1 : 
    def printValues(**args):
        print(args)
    printValues(first="nice",second="good")

#example 2 : 
    mySkills = {
    'Html': "80%",
    'Css': "70%",
    'Js': "50%",
    'Python': "80%",
    "Go": "40%"
    }

    def show_skills(**skills):
    for skill, value in skills.items():

        print(f"{skill} => {value}")

    show_skills(**mySkills)