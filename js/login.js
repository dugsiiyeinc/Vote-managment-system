
const formTitle = document.querySelector("#form-title");
const formBtn = document.querySelector("#form-btn");
const signClick = document.querySelector("#sign-click");
const formDescription = document.querySelector("#form-description");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

let signIn = true;

document.body.addEventListener("click", (e) => {
  if (e.target.id !== "sign-click") return;
  signIn = !signIn;

  if (!signIn) {
    formTitle.textContent = "Sign up";
    formBtn.textContent = "Sign up";
    username.style.display = "block";
    confirmPassword.style.display = "block";
    formDescription.innerHTML = `already have an account? <a href="#" id="sign-click">Sign in</a>`;
  } else {
    formTitle.textContent = "Sign in";
    formBtn.textContent = "Sign in";
    username.style.display = "none";
    confirmPassword.style.display = "none";
    email.value = "";
    password.value = "";
    formDescription.innerHTML = `I don't have an account? <a href="#" id="sign-click">Sign up</a>`;
  }
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const checkingUser = JSON.parse(localStorage.getItem("users")) || [];
  
  if (signIn) {
    // Sign-in Logic
    const findUser = checkingUser.find(
      (usr) => usr.email === email.value && usr.password === password.value
    );

    if (email.value && password.value) {
      if (findUser) {
        localStorage.setItem("currentUser", JSON.stringify(findUser));
        window.location.href = 'home.html';
      } else {
        alert(`The user with email "${email.value}" does not exist`);
        email.value = '';
        password.value = '';
      }
    } else {
      alert("Please fill in the email and password fields.");
    }
  } else {
    // Sign-up Logic
    if (!username.value || !email.value || !password.value || !confirmPassword.value) {
      alert("It's mandatory to fill in all fields.");
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert("Password mismatch");
      return;
    }

    const findUser = checkingUser.find((usr) => usr.email === email.value);

    if (findUser) {
      alert(`User with email "${email.value}" already exists.`);
      return;
    }

    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    checkingUser.push(newUser);
    localStorage.setItem("users", JSON.stringify(checkingUser));
    alert("Registration successful! Redirecting to login page...");
    window.location.href = "../html/login.html";
  }
});
