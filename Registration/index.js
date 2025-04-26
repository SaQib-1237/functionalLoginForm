
function handleSubmit(event) {

    // Erase The Form Default Behavior
    event.preventDefault();
    // Form Reference
    let form = event.target;
    let userName = form.username.value
    let userEmail = form.useremail.value
    let userPassword = form.password.value
    
    if (localStorage.getItem('userEmail') === userEmail) {
      checkUser();
      document.querySelector('#registerd-pera').innerText = 'If You have Registerd Then';
      document.querySelector('#registerd-btn').innerText = 'login';
      return;
    }
  
  localStorage.setItem('userEmail', userEmail);
  localStorage.setItem('userPassword', userPassword);
  localStorage.setItem('userName', userName);

  document.querySelector('form').reset();

  alert('User Register Successfully');

}

function checkUser() {
  alert('User Already Exist');
}