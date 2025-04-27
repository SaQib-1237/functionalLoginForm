
// function handleSubmit(event) {

//     // Erase The Form Default Behavior
//     event.preventDefault();
//     // Form Reference
//     let form = event.target;
//     let userName = form.username.value
//     let userEmail = form.useremail.value
//     let userPassword = form.password.value
    
//     if (localStorage.getItem('userEmail') === userEmail) {
//       checkUser();
//       document.querySelector('#registerd-pera').innerText = 'If You have Registerd Then';
//       document.querySelector('#registerd-btn').innerText = 'login';
//       return;
//     }
  
//   localStorage.setItem('userEmail', userEmail);
//   localStorage.setItem('userPassword', userPassword);
//   localStorage.setItem('userName', userName);

//   document.querySelector('form').reset();

//   alert('User Register Successfully');

// }

// function checkUser() {
//   alert('User Already Exist');
// }


let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser(event) {
  // remove Default Behavior
  event.preventDefault();
  // Geting Form Reference
  let form = event.target;
  let userName = form.username.value;
  let userEmail = form.useremail.value;
  let  userPassword = form.password.value;

  if (users.some(checkUser => checkUser.email === userEmail)) {
    alert('User Already Exist');
    return;
  }

  users.push({name:userName, email:userEmail, password:userPassword});
  localStorage.setItem('users', JSON.stringify(users));

  document.querySelector('form').reset();

  alert('User Registerd SuccessFully');

}