
/* var myName = "Connie";
//myName = new String(myName);

console.log(myName.toUpperCase());


 Must convert to Object to use .toUpperCase();

JS type coersion

var myName = 23;
var myName = new Number(myName);  CONVERT PRIMITIVE TO OBJECT
myName = new String(myName); //JS is case-sensitive, String = object, string = primitive;

console.log(typeof(myName));

lowercase "string" = primitive, not object;

convert to obj;

NOTES:
3 ways to check if it's Primitive or Object:

Method: typeof()

new Object-Name()

Uppercase in console


*/



//Undefined?
// where were you expecting the value come from? define the variable!
//where is it actually defined?


/* let VARIABLES ARE NOT HOISTED

console.log(myName, "one");
{
  let myName = "Connie";
  console.log(myName, "Two");
};

console.log(myName, "Three");
*/


/* CONST VARIABLE */


// BLOCKS --->SCOOOOOPES; GLOBAL/LOCAL VARIABLES!
const myName = "C";

console.log(myName, "one");
{
 myName = "Connie";
  console.log(myName, "Two");
};

console.log(myName, "Three");
