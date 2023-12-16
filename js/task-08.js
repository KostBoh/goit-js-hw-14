const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Будь ласка, заповніть всі поля форми.");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);
    this.reset();
  }
});
