/***********var***************/
//var only declare function and global scope no block scope.

var a = 10;
if ((a = 10)) {
  var a = 20;
  console.log(a); //20 ---> reffering to same global var (a)
}
console.log(a); //20

var b = 10;
function foo() {
  var b = 20;
  console.log(b); //20 ---> reffering to function scope var (b)
}
foo();
console.log(b); //10

/*******let************/

let c = 10;
if ((c = 10)) {
  let c = 20;
  console.log(c); //20 ---> new let (c) is created for this block scope
}
console.log(c); //10

function foo2() {
  // console.log(e); //Error cannot access above initialization
  let e = 20;
}
foo2();

function foo3() {
  console.log(e); //undefined ------>accesable above initialization
  var e = 20; //20 ---> new let (c) is created for this block scope
}
foo3();

/***********function scope/auto global************/

var name = "neeraj";
function foo4() {
  content = "content";
  var name = "name";
  console.log(name); //'name'
}
foo4();
console.log(content); //'content'
console.log(name); //'neeraj'

var name1 = "neeraj";
function foo5() {
  content1 = "content";
  var name1 = "name";
  console.log(name1); //'name'
}
//console.log(content1); //ERROR content 1 not defined
foo5();
console.log(name1); //'neeraj'
