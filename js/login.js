const formTitle = document.querySelector("#form-title");
const formBtn = document.querySelector("#form-btn");
const signClick = document.querySelector("#sign-click");
const formDescription = document.querySelector("#form-description");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const loginForm = document.querySelector("#login-form");
const list = document.querySelector('.list')
const sigin=document.querySelector(".Sign")


let signIn = true;
document.body.addEventListener("click", (e) => {
  if (e.target.id != "sign-click") return;
  signIn = !signIn;

  if (!signIn) {
    formTitle.textContent = "Sign up";
    formBtn.textContent = "sign up";
    username.style.display = "block";
    confirmPassword.style.display = "block";
    formDescription.innerHTML = `
     already have account ? <a href="#" id="sign-click">Sign in</a>
    `;
  } else {
    formTitle.textContent = "Sign in";
    formBtn.textContent = "sign in";
    username.style.display = "none";
    confirmPassword.style.display = "none";
    email.value = "";
    password.value = "";
    formDescription.innerHTML = `
     i don't have account ? <a href="#" id="sign-click">Sign up</a>
    `;
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    username: signIn ? undefined : username.value,
    email: email.value,
    password: password.value,
  };

  if (signIn) {
    const checkingUser = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = checkingUser.find(
      (usr) => usr.email === email.value && usr.password === password.value
    );

    if (email.value && password.value !== "") {
      if (findUser) {
        localStorage.setItem("currentUser", JSON.stringify(findUser));
       window.location.href='home.html'
       list.style.display='block'
       sigin.textContent ='log out'

      }else{
        alert(`this user " ${email.value} " does not exist`)
      }
    }else{
      alert('please fill the form')
    }

    
  } 
  
  
  
  else {
    if (username.value === "") {
      alert("its must to fill the form");
      return;
    } else if (email.value === "") {
      alert("its must to fill the form");
      return;
    } else if (email.value === "") {
      alert("its must to fill the form");
      return;
    }
    const checkingUser = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = checkingUser.find((usr) => usr.email === email.value);

    if (findUser) {
      alert(`user ${email.value} already exit`);
      return;
    }
    checkingUser.push(user);

    localStorage.setItem("users", JSON.stringify(checkingUser));
    if (confirmPassword.value !== password.value) {
      alert("Password mismatch");
      return;
    }
    // window.location.href = "../html/login.html";
  }
});
