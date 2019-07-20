const close = document.querySelector('.close');
const signup = document.querySelector('.signup');
const client = document.querySelector('.client');
const employee = document.querySelector('.employee');
const email = document.getElementById('email');
const password = document.getElementById('password');
const email_err = document.getElementById('email_err');
const password_err = document.getElementById('password_err');
const submit = document.getElementById('submit');
const menu_bar = document.querySelector('.menu_bar');
const menu = document.querySelector('.menu');







if(window.innerWidth < 768) {
  menu_bar.addEventListener('click', ()=> {
   if(menu.style.display == 'none') {
     menu.style.display = 'block';
   } else {
     menu.style.display = 'none';
   }
  });
}




close.addEventListener('click', () => {
  signup.style.display = 'none';
}, 2000);


client.addEventListener('click', () => {
  signup.style.display = 'block';
});


employee.addEventListener('click', () => {
  signup.style.display = 'block';
});


submit.addEventListener('click', () => {
  if(email.value == '') {
    email_err.innerHTML = 'Please Provide your email.';
  }
  if(password.value == '') {
    email_err.innerHTML = 'Please Provide your email.';
  }
})

