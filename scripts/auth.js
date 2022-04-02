// Register
const registerForm = document.querySelector('#register');
registerForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = registerForm['email-reg'].value;
    const pw = registerForm['pw-reg'].value;
    console.log(email, pw);

    auth.createUserWithEmailAndPassword(email, pw).then(cred => {
        console.log(cred);
        registerForm.reset();
    });
});

// Login
const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email-login'].value;
  const pw = loginForm['pw-login'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, pw).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    loginForm.reset();
  });

});