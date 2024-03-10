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
            [2] You can't start with Num or Special Character 
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
        -end not include 
        -if end not specified  it will take until the end 
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

# lists : --[]
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

#remove an element from thee list using value : 
l.remove(elment)

#remove an element from the list using index  (and return his value) : 
l.pop(index) # default the last index 


#count the number of frequency of an element :
l.count(value) 
    
# get a copy from the list : 
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

# stop 25 