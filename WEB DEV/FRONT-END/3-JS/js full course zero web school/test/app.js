console.log("\nNamed export : ");
import * as all from "./main.js";
console.log(all.a);
console.log(all.arr);
console.log(all.saySomething());

console.log("\ndefault export : ");
all.default.hi();
all.default.by();
console.log("the value : ", all.default.v);
all.default.function();
