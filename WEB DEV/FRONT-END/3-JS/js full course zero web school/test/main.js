let a = 10;
let arr = [1, 2, 3, 4, 5]; // Fix the array declaration

function saySomething() {
	return "nice to meet you";
}
let k = 10;
export { a, arr, saySomething };

export default {
	hi() {
		console.log("hello world");
	},
	by() {
		console.log("good by");
	},
	v: 5,
	function() {
		console.log("anonymous function ");
	},
};
