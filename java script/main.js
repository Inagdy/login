var login = document.querySelector("#login");
var loginmail = document.querySelector("#loginEmail");
var loginpassword = document.querySelector("#loginpassword");
var display = document.querySelector("#display");
var loginpage = document.querySelector("#loginpage");

var view = JSON.parse(localStorage.getItem("user"));

login.addEventListener("click", function () {
  for (let i = 0; i < view.length; i++) {
    var email = loginmail.value;
    var pass = loginpassword.value;

    if (email == view[i].email && pass == view[i].password) {
      display.classList.add("visually-hidden");
      loginpage.classList.remove("visually-hidden");
      document.querySelector("#mainText").innerHTML = `welcome ${view[i].name}`;
    }
  }
});
function reverse() {
  display.classList.remove("visually-hidden");
  loginpage.classList.add("visually-hidden");
  clean();
}

function clean() {
  loginmail.value = "";
  loginpassword.value = "";
  loginmail.classList.remove("is-valid");
  loginpassword.classList.remove("is-valid");
}

function include() {
  for (let i = 0; i < view.length; i++) {
    console.log(view);
    if (loginmail.value == view[i].email) {
      loginmail.classList.add("is-valid");
    }
    if (loginpassword.value == view[i].password) {
      loginpassword.classList.add("is-valid");
    }
  }
}
