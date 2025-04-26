
// Calling Onload
displayName();

function logOut() {
  localStorage.clear();
  alert('Your Account Geting Removed From Us');
  window.location.href = '../index.html';
}

function displayName() {
  let userName = document.querySelector('#user-name');
  userName.innerText = localStorage.getItem('userName');
}