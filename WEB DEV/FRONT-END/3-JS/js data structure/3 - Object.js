const arr = [1, 2, 11, 3, "nice"];
// add element in the end :
arr.push(3);
// add an element in the first :
arr.unshift(0);
// remove the last element :
arr.pop();
// remove the first element :
arr.shift();
// list an array :
console.log("list array : ");
for (const item of arr) {
	console.log(item);
}

// get the sum of array :
let sumArr = arr.reduce((previous, current) => previous + current);

console.log("\nsum of array : ", sumArr);

// get a new array  where newArr=arr*10;
let newArr = arr.map((element) => element * 10);
console.log("\narray * 10 ", newArr);

// get new array contains just elements > 10  ;
let arrGrater10 = arr.filter((element) => element > 10);
console.log("\nelement > 10 ", arrGrater10);

// get an array contains just element from 1 to 4 :
console.log(arr.slice(1, 4));

// replace an element in the array :
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Remove elements starting from index 2 (Apple)
let removedItems = fruits.splice(2);
// fruits is now ["Banana", "Orange"]

console.log(removedItems); // Output: ["Apple", "Mango"]

// Add elements starting from index 2 (Apple)
fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits is now ["Banana", "Orange", "Lemon", "Kiwi"]

console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi"]

// Using `slice()`:
var originalArray = ["Banana", "Orange", "Apple", "Mango"];

// Create a copy of the original array
var copyArray = originalArray.slice();

// Now you can use splice() on the copyArray without modifying the originalArray
copyArray.splice(2, 1); // Removes "Apple" from copyArray

console.log(originalArray); // Original array remains unchanged
console.log(copyArray); // Copy array with "Apple" removed

// Using the spread operator `[...]`:

var originalArray = ["Banana", "Orange", "Apple", "Mango"];

// Create a copy of the original array
var copyArray = [...originalArray];

// Now you can use splice() on the copyArray without modifying the originalArray
copyArray.splice(2, 1); // Removes "Apple" from copyArray

console.log(originalArray); // Original array remains unchanged
console.log(copyArray); // Copy array with "Apple" removed
