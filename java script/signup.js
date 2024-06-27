"use strick";
var signUp = document.querySelector("#signUp");
var nam = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

if (JSON.parse(localStorage.getItem("user") != null)) {
  var users = JSON.parse(localStorage.getItem("user"));
} else {
  var users = [];
}

signUp.addEventListener("click", function () {
  var user = {
    name: nam.value,
    email: email.value,
    password: password.value,
  };
  users.push(user);

  localStorage.setItem("user", JSON.stringify(users));
  var view = JSON.parse(localStorage.getItem("user"));

  clean();
});

function clean() {
  nam.value = "";
  email.value = "";
  password.value = "";
  email.classList.remove("is-invalid");
}
function include() {
  for (let i = 0; i < users.length; i++) {
    console.log(users);
    if (email.value == users[i].email) {
      email.classList.add("is-invalid");
      signUp.classList.add("disabled");
    }
    if (email.value !== users[i].email) {
      email.classList.remove("is-invalid");
      signUp.classList.remove("disabled");
    }
  }
}
