const inputValidation = document.querySelector("#validation-input");
inputValidation.addEventListener("blur", () => {
  const dataLength = parseInt(inputValidation.getAttribute("data-length"));
  const inputLength = inputValidation.value.length;

  if (inputLength === dataLength) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
});
