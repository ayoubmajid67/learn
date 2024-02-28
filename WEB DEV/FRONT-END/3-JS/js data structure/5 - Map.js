// Create a new Map
let myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set(true, 'True');

// Get values from the Map
console.log(myMap.get('name')); // Output: John
console.log(myMap.get(1));      // Output: One
console.log(myMap.get(true));   // Output: True

// Iterate over key-value pairs using forEach
myMap.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});
// Output:
// name : John
// 1 : One
// true : True

// Get the number of key-value pairs
console.log(myMap.size); // Output: 3

// Check if a key exists
console.log(myMap.has('name')); // Output: true

// Delete a key-value pair
myMap.delete(1);
console.log(myMap.size); // Output: 2



// real using 
/*

One real-world scenario where Maps are commonly used is in web development, particularly when dealing
 with data manipulation and management within applications. Here's an example of how Maps can be used in a web application:

Let's consider a scenario where you're building a web application for managing user accounts.
 Each user has a unique user ID, and you need to store various information about each user, such as their 
 name, email, and age.
*/

// Create a Map to store user data
let userData = new Map();

// Add user data to the Map
userData.set(1001, { name: 'Alice', email: 'alice@example.com', age: 30 });
userData.set(1002, { name: 'Bob', email: 'bob@example.com', age: 25 });
userData.set(1003, { name: 'Charlie', email: 'charlie@example.com', age: 35 });

// Get user data by user ID
let user = userData.get(1002);
console.log(user);
// Output: { name: 'Bob', email: 'bob@example.com', age: 25 }

// Update user data
userData.set(1002, { name: 'Bob Smith', email: 'bob@example.com', age: 26 });

// Check if a user exists
console.log(userData.has(1003)); // Output: true

// Delete a user
userData.delete(1003);
console.log(userData.size); // Output: 2
