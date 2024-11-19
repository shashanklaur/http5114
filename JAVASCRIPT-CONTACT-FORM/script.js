var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(e);

  var errors = 0;

  var lettersSpaces = new RegExp("^[A-Za-zs]*$");
  var emailSpaces = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  var name = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  if (!name.value) {
    nameError.innerHTML = "Please provide your name";
    errors++;
  } else if (!lettersSpaces.test(name.value)) {
    nameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    nameError.innerHTML = "";
  }
  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  if (!email.value) {
    emailError.innerHTML = "Please provide your email";
    errors++;
  } else if (!emailSpaces.test(email.value)) {
    emailError.innerHTML = "Please provide a valid email";
    errors++;
  } else {
    emailError.innerHTML = "";
  }
  if (errors == 0) {
    var message = document.getElementById("message");
    message.innerHTML = "Thank you!";
    name.value = "";
  }

  e.preventDefault();
});