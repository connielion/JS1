/*
let blueDivs = document.getElementsByClassName('blue'); //getElements = array type
//console.log(blueDivs[0]);//html collection, type array

//DOM collection
let h1 =document.getElementByTagName('h1');

//DOM nodes

let para = document.getElementsByID('para');
console.log(para);

let queryBlues = document.querySelector('h1'); //gives single element

console.log(queryBlues);


let queryBlus = document.querySelectorAll('div'); //gives an array
console.log(queryBlus);




function queryBodyID(element, methods) {
  let elementToQ = document.method('element');
  console.log(elementToQ);  //just bodyQ would give array, need index to give element
}
let ep = prompt('Give me an element');

queryBodyID(el, method);
*/

const button = document.querySelector('.btn-success');

button.addEventListener(
  'click',//event you are listening for
  (e)=> {
    //ev or event
    //second arguement = always a callback function
      //console.log(e);
      alert("Hi!");
  }
);


const div = document.querySelector('div');

div.addEventListener(
  'mouseenter',
  (e) => {

    //div.className= 'blue';
    div.backgroundColor = 'red';

  }
);

const h1 = document.querySelector('h1');

h1.addEventListener(
  'mouseup',
  (e)=> {
    h1.style.color="blue";
  }

)
