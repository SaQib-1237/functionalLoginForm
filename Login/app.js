

function loggedUser(event){

  event.preventDefault();
  let form = event.target;

  let userEmail = form.email.value;
  let userPassword = form.password.value;
  
  
  if (localStorage.getItem('userEmail') === userEmail && localStorage.getItem('userPassword') === userPassword ) {      
      window.location.href = "../Home Page/home.html"; 
      return ;
  } else {
    alert('Invalid Password/Email');
  }

 
  document.querySelector('form').reset();


}

