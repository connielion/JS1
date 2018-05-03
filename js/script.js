console.log(document.forms.login.username.value);

document.forms.login.submit.addEventListener(
  'click',
  e => {
    if(!performPasswordcheck){
        e.preventDefault();//prevent the default action, click
    }

    console.log(e.target.value); //target is document.forms.login.username;
    //logs out the value user inputs
  }
); //keylogger can sitll log the value for password! value type depends on input type

//preventDefault()
