
// print in the console :
console.log("text"); 

//variables; 
var variablesName;
let variablesName;

//concat with string :

console.log("text" +number);
//force concat :
console.log(+"text" +number); 
// string to number :
 parseInt(str);
parseFloat(str);
 

// variable with string 
console.log("text",variablesName);
// another way :
console.log(`text ${variablesName}`); 
// or 
console.log(" text"+variablesName+"text"); 

//new line :
console.log("text\n"); 
// get element by id :
let x=document.getElementById('idName'); 

// inner text  in the element selected : 
x.innerHTML=`text..`; 

// data type :

string 
int 
float 
boolean 

// know the  datatype :
console.log(typeof  value); 

// string :____________________


// print a part of a string :
var str="ayoub"
str.substring(begin,end); 

// the length of a string : 
str.length
//  convert to upper case :
str.toUpperCase();

//convert to  lower case : 
str.toLowerCase(); 
// replace a  part of a string 
str.replace("strWannaBeReplaced","newStr"); 

// return the  a character from string : 
str.charAt(index); 

str[index]; 

// repeat a string : 
str.repeat(Nbr) // nbr  the number of repetition  

// get input value :
var  t=input.value; 


// get an  element styles : 
elementStyle=getComputedStyle(element); // you can use to get styling attribute 




// add event ; 
element.onEvent=function(){
    //code
}


// or 
element.addEventListener("event",function(){
//code

}); 

// get input color : 
input.addEventListener('input',function(){
console.log(input.value); 
}); 
//example : 

//  numbers :__________________ 

// check if a number NaN or not :  
isNaN(number);  

//math library :_______________  

//max number : 
Math.max(numbers);

// min number : 
Math.min(numbers)
// ... 

//  boolean :__________________
let bool=false;  

 // logical  question : 
// == , > , < , >= , <= , !=

// check if true  :
boolean(value); 

// and : && 
// or : ||
// not : ! 

// comment :_________________________________ 

// multiple  line : 
/*
 text .. 
*/

// one line : 
//  text 

//casting :____________________________________

//datatype to number :
Number(value); 

//datatype to string:
string(value); 
value.toString();

// datatype to boolean : 
boolean(value);  // return false value !=(NaN,null, undefined,0)

// if statement : ________________________________
if(condition){
//code
}
else if(condition){
//code
}
else{
//code
}


//switch case : ______________________________________

switch(variablesName){

    case condition:
        //code 
    break; 
    
    case condition:
        //code 
    break; 

//  .....
//  ......
//  ......

    default : 
    // code 

    break; 

}

//  if else to switch : 

switch(true){

 case condition: 
break; 
case condition:
    break; 

    default: 
    break; 

}


//array :________________________________
 

// array is an object :  

// not empty array
var ArrayName=[val1,val2,/*...*/]; 

// empty array 
var ArrayName=[];

// send the entire  array : 
let x=ArrayName;

// send specific value :
let x=ArrayName[index];  


// the length of array : 
ArrayName.length; 

//add new element : 
ArrayName.push(value); 

// delete the last element in the array : 
ArrayName.pop(); 

//copy array to  a variable :
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
//or : 
 originalArray = [1, 2, 3, 4, 5];
copiedArray = Array.from(originalArray);
//or : 
 originalArray = [1, 2, 3, 4, 5];
 copiedArray = originalArray.slice();


//slice function  return a copy of original  array  : 
array.slice(start, end);

 originalArray = [1, 2, 3, 4, 5];

// Copy the entire array
 copiedArray = originalArray.slice();
// Result: copiedArray is [1, 2, 3, 4, 5]

// Copy a portion of the array (index 1 to 3, exclusive)
 subArray = originalArray.slice(1, 3);
// Result: subArray is [2, 3]

// Copy the last two elements of the array
 lastTwoElements = originalArray.slice(-2);
// Result: lastTwoElements is [4, 5]

// copy all except  two last elements in the array : 
const extractedArray = originalArray.slice(0, -2);
// Result: extractedArray is [1, 2, 3]




// delete  in a specific position : 
ArrayName.splice(
StartIndex,
Nbr/*number of element you wanna remove*/,
value/* replace value (it will be replace by the Start index)*/
);

// add am element in a specific position 
ArrayName.splice(
    StartIndex,
    0, 
    value/* replace value (it will be replace by the Start index)*/

// I can add the numbers of items that want 
    );

// array class :  prototype
Array.functionName(arguments); 

// check if is an array : 

Array.isArray(ArrayName);  // return true or false  

// check if a value exist or not : 
ArrayName.includes(value); 


//return the position of an element : 
ArrayName.indexOf(value); // return -1 of not exist :  


// shift   delete the first :
ArrayName.shift();

// unshift    add in the begin: 
ArrayName.unshift(value);  

// reverse the array : 
ArrayName.reverse(); 


// loops : ______________________

// for loop :_______________

for(let i=begin; logicalStatement; step){

    // code 
}

// for in return index 
for(var element in elements ){
    //code
    }
    
    // for of  return one element in the elements ;: 
    
    for(var element of elements){
        //code
    }

// while loop : ________________
while(logicalStatement){
    //code
}


// do while loop : 
do{ 
    // code
}while(logicalStatement); 

// break; 

/*
loop{

    break; 
}
*/

// continue; 

/*
loop{

    continue; 
}
*/


// 2D array : 
arr=[["value",/*...*/],["value",/*...*/], /*...*/]


//nested loops : 

for(let i=begin ; condition; step ){
    for(let j=begin ; condition; step ){  
  // code 
}
} 

// functions :_______________________________________

function functionName(arguments){
    //code: 


    //choice  :  
    return Value; 

    // return a lot of value :  
    return [value1,value2 /*.....*/]; 
}
 // arguments  name : 

 // parameter in the definition of function :
 // argument in the call of the function : 

 // we can add a default value to an argument 



 const obj = {
    name: "John",
    sayHelloArrow: () => {
      console.log("Hello, " + this.name); // `this` is lexically scoped (undefined in this case)
    },
    sayHelloNormal: function() {
      console.log("Hello, " + this.name); // `this` is dynamically scoped (refers to obj)
    },
  };
  
  obj.sayHelloArrow(); // Output: Hello, undefined
  obj.sayHelloNormal(); // Output: Hello, John
  



 //anonymous functions : 


// you can let a variable point at a function 

// then  we can call the function using the variable 

// example : 

function FunctionName(){
    //code 
}

var VariableName=FunctionName;

//  we can call the  functionName by using the VariableName  
VariableName(); 

// I can give directly  the declaration  of a function to a Variable : 
// example : 
var VariableName=function(){
    //code
}


// anonymous functions method :___________________

// return the name of the function : 
variablesName.name 

// return the number of parameters  in a function : 
VariableName.length 

// call a function by using a another function : ____________

let VariableName=functionName;  
// or 
function functionName(){
    // code 
}

function CallFunctionName(functionNameCall){
    functionNameCall(); 
}

// call the call function : 
                // or functionName
CallFunctionName(variablesName); 

// or 
CallFunctionName(functionName);

//  or anonymous function :  (without any name )
CallFunctionName(function(){

    //code 
}); 


// we named the call function "the hight order function " 

// example of use it :  set time out function 

// this function   pause the execution of  the code 
// until we get a specific time  (arrow function ) : 
setTimeout(() => {

    console.log("hello world"); 
    
}, timeout); // time with ms 


// repeat line  for each x second : 
setInterval(() => {
    
}, interval);

//clear interval : 
clearInterval(intervalName); 

// for each 
array.forEach((currentValue, index, array) => {
    // Code to be executed for each element
  });
  

  //example : 
  const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
  console.log(`Element at index ${index}: ${fruit}`);
});




// arrow function : 

let variablesName=(argument)=>{

// code 
}


// IIFE (Immediately Invoked Function Expression
(function () {
    // Code inside the IIFE goes here
  })();
  
  (function (param1, param2) {
    // Code inside the IIFE can use the parameters
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
  })(value1, value2); // Pass values for param1 and param2 here
  


//scope : ___________________________________________
// the interval when variables defined :  between {}


//1-  we have  2 type  of variables : 
// local variable 
// general variable 

// 2- we have two type of scope 
// block scope 
// function scope 


// var  =>  general   : 
 var x; 

// function => local  : (function scope)
function functionName(){}

// let => local  : 
let x; 

// const => local : 
const p=3.14; 

//the default  declaration of variables  is  var 



// map _____________: 

// this function help us to produce another array 
// with specific  value : 
let newArray=oldArray.map((element)=>{

return // logic that you want : (element *10)
})

// map function implementation : 
let mapTest=function(callBack){

    const newArray=[]; 
    this.forEach(element => {
        
    newArray.push(callBack(element))
    });
    return newArray; 
    }
    Array.prototype.mapTest = mapTest;

    // or 
    
Array.prototype.mapFunction=function(callback){

    var  newArray=[]; 
    for(element of this){
     
    newArray.push(callback(element)); 
    
    
    }
    
    return newArray; 
    }
    
    const  arr1=[1,2,3,4,6,7,8]; 
    
    const arr2=arr1.mapFunction(function(element){
     return element*10; 
    }); 


    // add a function to Array type : 
    Array.prototype.functionName= function(){
        //code 
    };


    // filter function 

    // this function help us to copy  oldArray  to new array
// with  specif  condition  :
Array.prototype.filterFunction = function (callback) {
    let newArray = [];
    this.forEach(function (element) {
      if (callback(element)) newArray.push(element);
    });
  
    return newArray;
  };
  
   let  arr3=[1,3,4,5,6,7,8]; 
  let  newArray1=arr1.filterFunction(function(element){
  
  return element>5 ? true :false;  
  
  });


// reduce function 

// this function explore element by element 
// and you can do whatEver you want in the 
// end the function will return a Number : 

//example : 
 var arr=[1,3,4,5,6,8];
var total=arr.reduce(function(preValue,currentValue){


return preValue+currentValue; 
}); 


// map reduce filter function : 
{
// map function :
arr = [1, 2, 3, 4, 5, 7, 4];

newArray = (Array.prototype.mapTest = function (handel, array) {
  let newArray = [];

  array.forEach((element) => {
    newArray.push(handel(element));
  });

  return newArray;
})(function (element) {
  return element * 10;
}, arr);

console.log("\n the using of the map function : ");
console.log(newArray);

// filter function :

newArray = (Array.prototype.filterTest = (handel, array) => {
  let newArray = [];
  array.forEach((element) => {
    if (handel(element)) newArray.push(element);
  });

  return newArray;
})(function (element) {
  return element > 5;
}, arr);

console.log("\nthe using of the filter function : ");
console.log(newArray);

newArray = (Array.prototype.reduceTest = (handel, array) => {
  let newArray = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = handel(total, array[i]);

    console.log("prev ", array[i]);
    console.log("current ", array[i + 1], "\n\n");
  }
  return total;
})(function (preValue, currentValue) {
  return preValue + currentValue;
}, arr);

console.log("\nthe reduce function : ");

console.log(newArray);

newArray = arr.reduce(function (pre, current) {
  return pre + current;
});

console.log("the reduce function \n ");
console.log(newArray);


}


// receives many arguments :
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result); // Output: 15
  

// objects  in js : _________________
let objectName={
key:value,
key:value, 
functionName:function(){
    //code
}
// .... 

}

// access to object :
objectName.key 
 
//example  
let student = {
    FirstName: "ayoub",
    lastName: "majid",
    printObject: function() {
      console.log("the name ", this.FirstName);
      console.log("the lastName ",this.lastName);
    }
  };
  
  student.printObject();
  
  //arrayOfObject : 
  let student1= {
    FirstName: "ayoub",
    lastName: "majid",
  };
  
  let arr = [
    {
      FirstName: "ayoub",
      lastName: "majid",
    },
  
    {
      FirstName: "youness",
      lastName: "majid",
    },
  
    {
      FirstName: "adam",
      lastName: "majid",
    },
    student1,
  ];



  // Prevent form submission and page refresh
  event.preventDefault(); 


//nested objects : ___________________________________
/*
 In JavaScript, nested objects refer to objects that are properties 
 of other objects, forming a hierarchical data structure.
 This means that an object can contain other objects as values for its 
 properties. 
 These nested objects can themselves have properties and values,
creating a tree-like structure.

Here's an example of a simple nested object in JavaScript:

javascript
Copy code
*/
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};

//You can access properties of nested objects 
//using dot notation or bracket notation:
console.log(person.name);                    // Output: "John"
console.log(person.address.city);           // Output: "New York"
console.log(person["address"]["zipCode"]);  // Output: "10001"


// Destructuring Assignment_____________________________________:
```
Destructuring assignment is a feature introduced in ES6 (ECMAScript 2015) that allows 
you to extract values from arrays or properties from objects into distinct variables. 
It provides a concise and convenient way to unpack values from complex data structures 
like arrays and objects.

## Array Destructuring:

In array destructuring, you can extract elements from an array and assign them to variables
 in a single line. The syntax uses square brackets [] on the left side of the assignment.
```

// Array with values
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, , fourth] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(fourth);  // Output: 4



//In object destructuring, you can extract specific properties
//from an object and assign them to variables.
// The syntax uses curly braces `{}` on the left side of the assignment.

// Object with properties
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};




// Destructuring assignment
const { firstName, age } = person1;

console.log(firstName);  // Output: "John"
console.log(age);        // Output: 30



//You can also provide default values for variables in case the property
// or array element does not exist:

const Numbers = [1, 2];
const [a, b, c = 3] = Numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3 (default value)


//You can also rename variables during destructuring using a colon `:`:

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName: fName, lastName: lName } = person2;

console.log(fName); // Output: "John"
console.log(lName); // Output: "Doe"



//create an object : 

//✨1- Object Literal:
const personOb= {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};


//✨2- Constructor Function:
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

const johnob = new Person("John", "Doe");

//✨3- Object.create():
const personPrototype = {
  sayHello: function() {
    console.log(`Hello, my name is ${this.firstName}`);
  },
};

const john = Object.create(personPrototype);
john.firstName = "John";
john.sayHello(); // Outputs: Hello, my name is John

//✨4- Class Syntax 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const john = new Person("John", "Doe");

// ✨ Factory Functions:
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

const john = createPerson("John", "Doe");



//create a copy from an object  :
//1 - 
const originalObject = { foo: "bar", age: 30 };
const copyObject = Object.assign({}, originalObject);
//2 - 
 originalObject = { foo: "bar", age: 30 };
 copyObject = { ...originalObject };






// dom ________________

// document object model : 

// when use the id  you just you're abele to change the Properties of the 
// first element in html : 

// example : 

//html code :
` 
<h1 id="title">hello world</h1>
<h1 id="title">hello world</h1>
<h1 id="title">hello world</h1>
`
// javaScript code : 

let  element=document.getElementById('title'); 
console.log(element); 
console.log(element); 
element.style.color="red"; 

// in this code above  you will just change the color of the first h1
 



/// get by class 
let  element=document.getElementsByClassName("className"); 
 // element represent a range of element from html :
 
// to access to one element you need to specified by index of array element : 
element[index].attribute //... 



// example of using className to change the color of  html elements 
// each 1000 ms :
var elements= document.getElementsByClassName("title");
console.log(element);

let index = 0;
setInterval(() => {
  element[index].style.color = "red";

  (function () {
    setTimeout(() => {
      element[index++].style.color = "black";
      if (index == 3) index = 0;
    }, 1000);
  })();

 
}, 1500);


// get element by tag name : 
var elements = document.getElementsByTagName("TagName");


// get by id or class or tag: 
var element = document.querySelector("[TagName] or [#idName] or [.className]");

// inner text of an element : 
element.innerHTML="innerHtmlWanted";

// get content of element 
console.log(element.innerHTML); 

// get input value : 
var input=document.querySelector("input"); 
console.log(input.value); 


//  set attribute  : 
element.setAttribute("attributeName","value"); 
// example : 
let h1=document.querySelector("h2"); 
let input=document.querySelector("input"); 

let content=h1.innerHTML="hello world"; 
input.setAttribute("value",content); 



// get  value of an attribute :
element.getAttribute("attributeName");  


 // remove attribute : 
 element.removeAttribute("attributeName");



// style : 
element.style.styleName="value"; 
//example : 
element.style.color="red"; 
//example 2: 
element.style.backgroundColor="black"; 


// event _________________________: 

element.onEvent=function(){
  //code
}
//or
element.onEvent=()=>{
  //code
}
//or
element.addEventListener("event",()=>{
//code
}); 
//or
element.addEventListener("event",function(){
//code
})
//or
//html code :
/*
<tagName onEvent="functionName() or JavaScriptCode" >

*/
//js code : 
 function functionName(){
  // code 
}


// create element _________________

// create tag : 
let newElement=document.createElement('tagName'); 

// create text: 
var textContent=document.createTextNode("TextWanted"); 

// add child to an html element : 
element.appendChild(textContent); 

// add text to new child :
element.textContent="textWanted"; 


// remove child : 
element.removeChild(liElement); 

// know the parent of an element : 
element.parentNode; 

// remove an element itself : 
element.parentNode.removeChild(element); 


// add an element before an element 
parentElement.insertBefore(newElement,referenceElement); 
// ref : the element you wanna insert before : 

// insert in a position : 
refElement.insertAdjacentElement("position", newElement);
// position ___________: 
"beforebegin" //Inserts immediately before the target element.
"afterbegin"//Inserts as the first child of the target element.
"afterend" //Inserts  immediately after the target element.
"beforeend"//Inserts  as the last child of the target element.

//example :
//example : 
let liElement=document.createElement("li");
let textContent=document.createTextNode("ayoub"); 

let parent=document.querySelector("ul")
 
console.log(textContent); 
liElement.appendChild(textContent); 

parent.appendChild(liElement); 

// Cloning Elements:

//You can create copies of existing elements using the cloneNode() method.
const clonedDiv = existingElement.cloneNode(true); // true to clone child elements, false for just the element itself




//fragment : 
```
A Document Fragment in JavaScript is a lightweight, in-memory container for holding and
 manipulating DOM elements before they are added to the actual DOM (Document Object Model).
  Document fragments are often used to optimize the performance of web pages when you need to create,
   modify, or append multiple DOM elements.

Here are some key points about Document Fragments:

1- Efficient DOM Manipulation: When you repeatedly create and append DOM elements to
 the actual web page, it can trigger reflows and repaints, which can be slow and impact performance.
  Document fragments provide a way to make all your changes off the live DOM, reducing these costly 
  operations.

2- In-Memory Container: A Document Fragment is like a lightweight, in-memory document that you can 
use as a temporary container for DOM elements. It doesn't exist in the live DOM and is not rendered 
on the web page.

3- Performance Benefits: Because Document Fragments aren't part of the live DOM, changes made within 
them don't trigger reflows or repaints until you append the fragment to the live DOM. This can
 significantly improve performance when dealing with a large number of DOM manipulations.
```
//example : 
// Create a new Document Fragment
const fragment = document.createDocumentFragment();

// Create and append multiple DOM elements to the fragment
for (let i = 0; i < 100; i++) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Paragraph " + i;
  fragment.appendChild(newParagraph);
}

// Append the entire fragment to the live DOM in one operation
document.getElementById("container").appendChild(fragment);



// add class : 
element.classList.add("className"); 

//replace a  class : 
element.classList.replace("oldName","newName")

// remove a class : 
element.classList.remove("className");

// toggle : 
/*
The classList property of an HTML element allows you to add, remove, or toggle CSS classes on that 
element. To toggle a class using the classList property, you can use the toggle() method. This 
method adds the class if it's not present, and removes it if it's already present. Here's how to 
use it:
*/
//example : 
// Get references to the button and div elements
const myButton = document.getElementById("myButton");
const myDiv = document.getElementById("myDiv");

// Add a click event listener to the button
myButton.addEventListener("click", function() {
  // Toggle a CSS class on the div element
  myDiv.classList.toggle("highlighted");
});

```
css
.highlighted {
  background-color: yellow;
  color: black;
}
```

/// condition toggle : 
element.classList.toggle("className",condition);



//line-height  to to control the horizontal  position of  a child element 
// such as <div style="parentBtn"><span class="googleIcon">add</span></div>


// confirm msg
confirm("text");  
// set  default value  
tasks =getLocalStorage ?? []
// the default value is getLocalStorage  [] (if the getLocalStorage is not null)






















