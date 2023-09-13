/* eslint-disable no-console */
// ==> no error because we need console.logs()

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const mail = document.querySelector("#mail");
const message = document.querySelector("#message");
const resetFocus = document.querySelector("header a.redirection");
const closingCross = document.querySelector(".closingCross")
const modal = document.getElementById("contact_modal");
const form = document.querySelector(".contactForm")

const txtRegex = /^[a-zA-Z]{2,}/;
const mailRegex =
  /^([a-zA-Z0-9._S-]{2,})+[@]+([a-zA-Z0-9._S-]{2,})+([.]{1})+([a-zA-Z]{2,10})/;
const msgRegex = /^[a-zA-Z]{10,}/;

function inputTest(input, regex) {
  const dataError = input.closest(".formData");
  if (regex.test(input.value)) {
    dataError.setAttribute("data-errorVisible", "false");
    return true;
  }
  dataError.setAttribute("data-errorVisible", "true");
  return false;
}

first.addEventListener("change", () => {
  inputTest(first, txtRegex);
});
last.addEventListener("change", () => {
  inputTest(last, txtRegex);
});
mail.addEventListener("change", () => {
  inputTest(mail, mailRegex);
});
message.addEventListener("change", () => {
  inputTest(message, msgRegex);
});

// eslint-disable-next-line no-unused-vars
function displayModal() {
  modal.style.display = "block";
  first.focus();
}

function closeModal() {
  modal.style.display = "none";
  resetFocus.focus();
}

// eslint-disable-next-line no-unused-vars
function validate(event) {
  event.preventDefault();
  if (
    inputTest(first, txtRegex) &&
    inputTest(last, txtRegex) &&
    inputTest(mail, mailRegex) &&
    inputTest(message, msgRegex)
  ) {
    console.log(first.value);
    console.log(last.value);
    console.log(mail.value);
    console.log(message.value);
    closeModal();
  }
}

form.addEventListener("submit", (event) => validate(event));
closingCross.addEventListener("click", closeModal);
window.addEventListener("keydown", (event) => {
  // close contactModal
  if (event.code === "Escape") {
    closeModal();
  }
});
