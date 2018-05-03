/*
Write a program that converts temperatures. It should:

Employ a function that accepts two arguments: temperature and scale (either celcius or fahrenheit).
Display the temperature in an h3 with minimal styling.
When the user clicks on the h3, run the function to convert the temperature.
Display the converted temperature in the h3.
*/

const h3 = document.querySelector('h3');

let tempInF = parseInt(prompt("Enter temperature in fahrenheit."));

function convertTemp(tempInF) {
  let tempInC = parseInt((tempInF - 32)/1.8);
  return tempInC;
}

convertTemp(tempInF);


h3.addEventListener(
  'click',

  (e) => {
      let converted = e.target.innerHTML = convertTemp();
      convertTemp(tempInF);
  }
);
