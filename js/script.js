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
/*
const button = document.querySelector('.btn-success');

button.addEventListener(
  'click',//event you are listening for
  (e)=> {
    //ev or event
    //second arguement = always a callback function
      //console.log(e);
      console.log(e.target);
  }
);

//nodeRef.classList.add = 'class-name'; adds class to element

*/

function checkRed(element) {

  if(elememt.classList.contains('red')) {
    element.classList.remove('red');
  }
  else {
    //add the 'red' class
  };

}



const img = document.querySelector('img');

function changeImg(){
img.setAttribute('src', 'url')
}


img.addEventListener(
  'click',
  (e) => {
    changeImg();
  }
)
