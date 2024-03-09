let obj1 = {
  name: "foo",
}; //Default return values
console.log(obj1.toString()); //returns a string '[object Object]' not an array.
console.log(obj1.valueOf()); //return the same object.{name: 'foo'}
console.log(typeof obj1.valueOf()); //'object'
console.log(typeof obj1.toString()); //'string'

let obj2 = {
  name: "foo",
  toString() {
    return 10;
  },
  valueOf() {
    return 10;
  },
};
console.log(obj2.toString()); //10
console.log(obj2.valueOf()); //10
console.log(typeof obj2.valueOf()); //'number'
console.log(typeof obj2.toString()); //'number'

console.log(10 - obj1); //NaN
/*obj1 goes to ToPrimitive(obj1, hint number) which returns toString()--->'[object Object]' which can not be converted into a number hence the result is NaN*/
console.log(obj1 - obj1); //NaN

/**************************************/

console.log(100 - obj2); //90
/*obj2 goes to ToPrimitive(obj1, hint number) which returns valueOf()--->10(if not an object otherwise toString()) which is allready a number hence the result is 100 - 10 === 90*/

let obj3 = {
  name: "foo",
  toString() {
    return 20;
  },
  //valueof() //object
};

console.log(100 - obj3); //80
/*Since valueOf() returns an object the result will be [100 - toString()] = 80 */

/*****************************/

let obj4 = {
  name: "foo",
  toString() {
    return {}; //toString also return an object
  },
  //valueof() //object
};

//console.log(100 - obj4); //ERROR: Cannot convert object to primitive value

/********************************************/

console.log("90"); //'90'  typeof------> 'string'
console.log(+"90"); //90 typeof------>'number'
console.log(+"neeraj"); //NaN typeof------>'number'

/*********************Addition****************************/

//Convert both operand to ToPrimitive() [default hint number] if anyone return a string concatinate both returned operand.
//Else if both returned are numbers-----> Add both returned operands

let obj5 = {
  name: "foo",
  //valueOf ---> obj
  //toString ---> [object Object]
};
//
console.log("100" + obj5); //'100[object Objecct]'
console.log(100 + obj5); //'100[object Objecct]'

let obj6 = {
  name: "foo",
  valueOf() {
    return 2;
  }, //valueOf calls first for object to number coercion
  toString() {
    return 18;
  },
};

console.log(obj6 + obj6); //4
console.log(obj6 + "5555"); //'25555' valueof()--->2 concatenated with string 5555

/**************************************/

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(typeof k); //undefined

/**************************************/

var x = 20;

function foo() {
  console.log(x); //undefined
  var x = 10;
}
foo();

var x = 20;

function foo() {
  console.log(x); //undefined
  var x = 10;
}
foo();

function foo1() {
  console.log(typeof x); //undefined
  //let x = 10; //error accessesing before initialization
}
foo1();

const arr = [1, 2];
const str = "Neeraj";
const str2 = new String("Neeraj");
console.log(typeof arr); //object
console.log(typeof str); //string
console.log(typeof str2); //object
console.log(str == str2); //true
console.log(str === str2); //false

console.log(-0 == +0); //true
console.log(NaN == null); //false
console.log(NaN == undefined); //false
console.log(null == undefined); //true
console.log("NaN" === NaN); //false
console.log({ x: 10 } === { x: 10 }); //false
console.log([1, 2] === [1, 2]); //false

console.log("" + 10); //10
console.log("" + [1, 2, 3]); //'1,2,3'
console.log([1] - 1); //0
console.log([1, 2] - 1); //NaN
