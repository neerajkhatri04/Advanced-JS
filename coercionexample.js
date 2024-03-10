console.log(1 < 2 < 3); //true : (1<2)--->true(1)---->(1) < 3 ----> true
console.log(3 > 2 > 1); //false : (3>2)-->true(1)--->(1) > 1 ----> false
console.log(3 > 2 > 0); //false : (3>2)-->true(1)--->(1) > 0 ----> true

/*******************Explicite conversion************************/

console.log(Boolean("")); //false
console.log(Boolean("asd")); //true

/*********************************************/

const x = NaN;

console.log(isNaN(x)); //true
console.log(isNaN("neeraj")); //true -----> isNaN do ToNumber("neeraj") conversion
console.log(Number.isNaN("neeraj")); //false --->Dont do coersion

if (typeof x == "number" && x !== x) {
  console.log(true);
} else console.log(false);

/*********************************************/

const num = ["1", "1", "1"];
console.log((num[0] == num[1]) == num[2]); //true

const num2 = ["a", "a", "a"];
console.log((num2[0] == num2[1]) == num2[2]); //false

const num3 = ["9", "9", "1"];
console.log((num3[0] == num3[1]) == num3[2]); //false

console.log(true == "1"); //true
console.log(true == "9"); //false

/**********************Negative zeroes***********************/

const negz = -0;
console.log(-0 === 0); //true

console.log(negz.toString()); //'0'
console.log(Object.is(-0, negz)); //true
console.log(Object.is(-0, 0)); //false

/********************************************/
const n = 1;
console.log(n.toString()); //'1'
console.log((1).toString()); //'1' ----->boxing ---->1 is being converted as object
console.log(typeof 1); //'number'
