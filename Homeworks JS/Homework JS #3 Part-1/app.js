console.log("Hello world");

/*
HOMEWORK Part 1
Write a JavaScript function which accepts a parameter and returns
 its type and prints it in the console. Try to call the
  functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

function parameter(param) {
  console.log(typeof param);
}

parameter({});
parameter(true);
parameter(1);
parameter("Hi");
parameter(undefined);
