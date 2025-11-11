const elForm = document.querySelector(".form");
const elName = document.querySelector(".name");
const elPassword = document.querySelector(".password");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = elName.value.trim();
  const pass = elPassword.value.trim();

  if (/\d/.test(name)) {
    alert("Sorry, error! Please enter letters only.");
    elName.value = ""; 
  } 
  else {
    window.location.href = "second.html";
  }
});
