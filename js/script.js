//Call stack, 'this' keyword, bind method

//'document' is a reference to the Window object

/* 4 WAYS TO BIND/CHANGE VALUE OF 'THIS'
1.new

2. call or Apply is the easiest way to bind `this`
.call(),
OR
 .apply(): first arg is ref to this, 2nd arg is an array

3. implicit way to bind: via create object + add function call to it as a property(value to the key)

4. global, new keyword: window
*/

/*
function nameMe(fname,lname) {
  //console.log(this.name); window.name doesn't exist, console shows blank
  console.log(this.name, fname, lname);

}

const myUser = {
  name: "Connie Lai",
  password: 'piglet',
  lastLoggedIn: new Date()
};

const xUser = {
  name: 'Xavier',
  password: '123'
}
nameMe.call(myUser, "connie", "lai", xUser.name, xUser.password); CALL or APPLY won't work on arrow function

*/


function nameProd() {
  //console.log(this.name); window.name doesn't exist, console shows blank
  console.log(this.price, this.product);

}

const dataValues = {
  productName: "rubber duckie",
  price: 12.99,
  description: "great for bath time"
//  method: nameProd
};

dataValues.method(); //calls method key's function



const div= document.querySelector('divs') {

  div.addEventListener(
    'mouseover',
    (e)=> {
      console.log(this);
    }
  )
}
