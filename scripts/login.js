import { getInputValueById } from "./utilities.js";

document.getElementById("login_button").addEventListener("click", function (e) {
  e.preventDefault(); // to stop form default behaviour
  const pin = getInputValueById("pin_number");
  if (pin === 1234) {
    window.location.href = "./home.html";
  } else {
    alert("Provide correct information");
  }
});
