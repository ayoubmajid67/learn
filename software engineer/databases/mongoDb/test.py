import json 
filename='./school.students.json'
try : 
    with open(filename,'r') as file :
        jsonData=json.load(file)
        print(jsonData)
except FileNotFoundError :
    print(f'File {filename} not found ')
except json.JSONDecodeError as e :
    print(f'Error decoding Json in file {filename} : {e}')


    