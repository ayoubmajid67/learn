// I can work with many css and html and js files in the same time :

// error handling :

// try to do something :
try {
  // code
} catch (argument) {
  // failed try :
  //code
} finally {
  //always executed :
  //code
}

//api ____________________________________________________: 
// create an object from XMLHttpRequest class : 
//  let obj= new className() 
let request=new XMLHttpRequest(); 

//  open function :  top  Prepare a request.: obj.open("type","url"); 
request.open("get","https://jsonplaceholder.typicode.com/posts"); 
// specify  the type of  response : 
 request.responseType="json";  
// send the request : 
request.send(); 

// I need to await the response from the server :  
// so I need to check if the response arrived  I'll get it and  display it on the console:

// run a function when the  stat of request change  
request.onreadystatechange=function(){
console.log("done"); 
document.querySelector("h2").innerHTML+=" change stat<br>"; 
}; 

// run function when the response arrived :
 
request.onload=function(){

// get response and push it to dom (h1)
// for string we use request.responseText : 
// for json we use request.response 
let ArrResponse=this.response
 // the default  type of response is a string : 
  // to convert the you need to use request.responseType="type";
 console.log( typeof this.response);

 // now the response is an array : 
 // we can handel with  easily  and access to data from anywhere : 
 console.log(ArrResponse[0].userId); 

 // print all title in the dom : 
 
 for(post of ArrResponse){
document.querySelector('h1').innerHTML+=`${post.title} <br><br>`; 

 }



}


//example : 
```
html code 
<h1 style="margin-bottom: 60px;" > json placeholder</h1>

<center>
    <div style="padding: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.609); width: 60%;">
        <h2>wait the response ...</h2>
        <progress max="100" value="0">
    </div>
</center>
    <center><pre></pre></center>
```
// js
const progress = document.querySelector("progress");
const WaitTitle = document.querySelector("h2");
const responseDom = document.querySelector("center>pre");

// create a object from XmlHttpRequest  class :
request = new XMLHttpRequest();

// prepare the request :
request.open("get", "https://jsonplaceholder.typicode.com/posts/1");
request.responseType = "json";

// send the request :
request.send();

// check stats :

request.onreadystatechange = function () {
  let computer = 0;
  let EditProgress = setInterval(function () {
    progress.value = ++computer;
    if (computer == 50) clearInterval(EditProgress);
  }, 50);
};
// get  json when the response arrived :
request.onload = function () {
  setTimeout(() => {
    for (let i = 50; i <= 110; i += 20) {
      let computer = 50;
      setTimeout(() => {
        progress.value = i;
      }, 200);
    }

    setTimeout(() => {
      document.body.style.background = "black";
      document.body.style.color = "white";
      WaitTitle.style.color = "red";
      WaitTitle.innerText = "the response arrived";

      let Response = request.response;
      console.log(Response);
      responseDom.innerHTML = `

 userId : ${Response.userId} <br>

 id : ${Response.id} <br>

 title :${Response.title} <br>

`;
    }, 200);

    //userId: 1, id: 1, title
  }, 2500);
};


/*
In JavaScript, you can work with network requests using the `XMLHttpRequest` object or the more modern `fetch` API
. When dealing with network requests, you typically encounter various states in the lifecycle of the request. Here's 
a detailed explanation of the states for both `XMLHttpRequest` and `fetch`:

**Using XMLHttpRequest:**

1. **Uninitialized (State 0):**
   - This is the initial state when the `XMLHttpRequest` object is created but not
    yet initialized.
   - You can set the request method, URL, and other properties in this state.

2. **Opened (State 1):**
   - After calling the `open` method on the `XMLHttpRequest` object, 
   it enters this state.
   - You can set request headers in this state.

3. **Headers Received (State 2):**
   - When the `send` method is called, the request is sent to the server,
    and the `XMLHttpRequest` object enters this state.
   - At this point, you can access response headers using the `getResponseHeader` method.

4. **Loading (State 3):**
   - In this state, the `XMLHttpRequest` object is actively downloading the response
    data from the server.
   - You can monitor the progress of the download using event listeners like `onprogress`.

5. **Done (State 4):**
   - The request is complete, and the `XMLHttpRequest` object enters this state.
   - You can access the response data and check the `status` property to determine 
   the HTTP status code.
   - Handle the response and perform any necessary actions based on the 
   server's response.

Here's an example of how you can use `XMLHttpRequest` to make a network request
 and monitor its state changes:
*/
javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // State 4: Done
    if (xhr.status === 200) { // HTTP status code 200 (OK)
      // Process the response data
      console.log(xhr.responseText);
    } else {
      // Handle errors or non-200 status codes
      console.error('Request failed with status:', xhr.status);
    }
  }
};

xhr.send(); // Initiate the request

/*
**Using the Fetch API:**

The Fetch API provides a more modern and promise-based way to 
work with network requests, making it easier to handle various states. 
However, it doesn't expose explicit state changes like `XMLHttpRequest`.
 Instead, it returns a promise that resolves when the request is complete.

Here's an example of how you can use the Fetch API to make a network request:
*/
//javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json(); // Parse the response data as JSON
  })
  .then((data) => {
    // Process the response data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });


//In the Fetch API example, you handle the request completion and errors through 
//promises, making it a more concise and modern approach to 
//working with network requests in JavaScript.


// class : (OOP)

//1- declaration : 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}


// 2- Constructors:
/*

 Classes have a special method called constructor that is automatically
 called when an object of the class is created. It's used for initializing object 
 properties.
 
 */

// 3-  Creating Instances:
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

//4. Inheritance:

/* 
Classes in JavaScript support inheritance using the extends keyword. 
You can create a subclass that inherits properties and methods from a parent class.
*/
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

//5. Super Keyword:------------------------
/*
In JavaScript classes, the super keyword is used to call methods or constructors of a 
parent class (also known as the superclass) within a subclass. It allows you to access 
and invoke functions or constructors defined in the parent class from the child class.
 Here's how super is commonly used:

*/
  //a= Calling the Parent Constructor::
       class Parent {
         constructor(name) {
           this.name = name;
         }
       }
  
       class Child extends Parent {
         constructor(name, age) {
           super(name); // Call the constructor of the parent class
           this.age = age;
         }
       }
  
       const child = new Child('Alice', 25);
       console.log(child.name); // Accessing property from the parent class
       console.log(child.age);  // Property specific to the child class
  

// b-Calling Parent Methods:

      class Parent {
        sayHello() {
          console.log('Hello from Parent');
        }
      }

      class Child extends Parent {
        sayHello() {
          super.sayHello(); // Call the method of the parent class
          console.log('Hello from Child');
        }
      }

      const child1 = new Child();
      child1.sayHello();
    
  //c-Accessing Parent Properties:
      class Parent {
        constructor(name) {
      this.name = name;
        }
      }
  
      class Child extends Parent {
        constructor(name, hobby) {
          super(name); // Call the constructor of the parent class
          this.hobby = hobby;
        }
  
        getDetails() {
          return `${super.name} enjoys ${this.hobby}`;
        }
      }
  
      const child2 = new Child('Alice', 'painting');
      console.log(child2.getDetails());
      
//6- Static Methods:
class MathUtils {
  static square(x) {
    return x * x;
  }
}

const result = MathUtils.square(5); // Calling a static method

// 7 -Getters and Setters in JavaScript Classes:
/*
Getters and setters are special methods in JavaScript classes that allow you to control
 access to the properties of objects. They are used to get and set the values of object 
 properties while providing an interface for controlling how those values are retrieved 
 and modified.

*/
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }

  set radius(newRadius) {
    if (newRadius >= 0) {
      this._radius = newRadius;
    } else {
      console.error('Radius cannot be negative.');
    }
  }
}


// set response type json in postman 

// headers : =>"Accept:"application.json"

// set headers params: 
request.setRequestHeader('key','value'); 

// set response type : 
request.setRequestHeader("Accept","application/json");
// set request type : 
request.setRequestHeader("Content-Type","application/json");

// send request in  post mode

let bodyParams={
"key1":"value1",
"key2":"value2",
"key3":"value3"

}
// if you send json you will get  stat=500 
request.send(bodyParams); 

// you need to convert it to string : 
 request.send(JSON.stringify(bodyParams));

 // return the status of the response : 
 request.status
 // 404 url error : 
 // 500 > server error : 
 // 200<request.status <300 good response 

// put type : updated all  information :
// patch : updated specific  information : 


// get with filtering : 
request.open("GET","https://jsonplaceholder.typicode.com/posts/?userId=1"); 

//✨ example : ----------------------------------[-]
function getPosts() {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    if (request.status < 200 || request.status > 300) alert("server error");
    else {
      let posts = request.response;

      for (element of posts) {
        document.getElementById(
          "content"
        ).innerHTML += `<h2>${element.title}</h2>`;
      }
    }
  };
}

//getPosts();

function createNewPost() {
  let request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");
  request.responseType = "json";
  let bodyParams = {
    title: "my task",
    body: "go sleep",
    userId: 1,
  };

  // send the request :
  request.send(JSON.stringify(bodyParams));

  request.onload = function () {
    if (request.status < 200 || request.status > 300) alert("server error");
    else {
      let post = this.response;
      console.log(post);
      alert("the post has been created successfully ");
    }
  };
}

//createNewPost();

function updatePost() {
  let request = new XMLHttpRequest();
  request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");
  request.responseType = "json";
  let bodyParams = {
    title: "hello world",
    body: "bar",
    userId: 1,
  };

  // send the request :
  request.send(JSON.stringify(bodyParams));

  request.onload = function () {
    if (request.status < 200 || request.status > 300) alert("server error");
    else {
      let post = this.response;
      console.log(post);
      alert("the post has been updated successfully ");
    }
  };
}
//updatePost();

function deletePost() {
  let request = new XMLHttpRequest();
  request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
  request.setRequestHeader("Accept", "application/json");

  // send the request :
  request.send();

  request.onload = function () {
    if (request.status < 200 || request.status > 300) alert("server error");
    else alert("the post has been deleted successfully ");
  };
}

//deletePost();

function getPostsWithFiltering() {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/posts/?userId=1");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    if (request.status < 200 || request.status > 300) alert("server error");
    else {
      let posts = request.response;

      for (element of posts) {
        document.getElementById(
          "content"
        ).innerHTML += `<h2>${element.title}</h2>`;
      }
    }
  };
}

getPostsWithFiltering();


