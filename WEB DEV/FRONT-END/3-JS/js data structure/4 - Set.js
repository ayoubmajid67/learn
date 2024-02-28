// create new set :
const set = new Set([1, 2, 3]);

// add new value :
set.add(5);
// you can add duplicate values :
set.add(5);

// list a set :
for (element of set) {
	console.log(element);
}

// check if value exist :
console.log(set.has(4));

// delete a value of set :
set.delete(3);

// get the length of the set :
console.log("the size of the set  is : ", set.size);

// clear a set :
set.clear();

//list using foreach :
set.forEach((element) => {
	console.log("the value: ", element);
});

// real Example : 

