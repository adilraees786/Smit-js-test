
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDtxx3Fv7GiaEe1sZKMFEtf9ejY-YU4eps",
    authDomain: "first-project-dae17.firebaseapp.com",
    projectId: "first-project-dae17",
    storageBucket: "first-project-dae17.appspot.com",
    messagingSenderId: "1011078811359",
    appId: "1:1011078811359:web:833d03fc2520bf8c8d236a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   console.log('====>', app);
  

  const auth = getAuth(app);
//   console.log('====>', auth);


let signup_user=document.getElementById('signup_user')

let signin_user=document.getElementById('signin_user')
 
//sigup
let signup_btn=document.getElementById('signup_btn')

signup_btn.addEventListener('click',function(){
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log("Creat account");

    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("====>",errorMessage);
    
  });
})

//Sign In

let login_btn=document.getElementById('login_btn')

login_btn.addEventListener('click',function(){


  let signn_email=document.getElementById('signn_email').value

    let sign_password=document.getElementById('sign_password').value

    signInWithEmailAndPassword(auth, signn_email, sign_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log('=== log in');
    

    window.location.href = 'dashboard.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})



onAuthStateChanged(auth, (user) => {
  if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      console.log('==User is logged in');
      signup_user.style.display = 'block'
    signin_user.style.display = 'none'
  

      // ...
  } else {
      // User is signed out
      console.log('===No user Logged in');
      
 signup_user.style.display = 'none'
    signin_user.style.display = 'block'
      // ...
  }
});