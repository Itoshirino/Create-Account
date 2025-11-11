

const welcomeText = document.getElementById("welcomeText");

if (userName) {
  welcomeText.textContent = `Welcome! You have successfully logged in.`;
  welcomeText.style.cssText = `
    font-size: 36px;
    color: seagreen;
    font-weight: bold;
  `;
} else {
  welcomeText.textContent = `Welcome! You have successfully logged in.`;
  welcomeText.style.color = "seagreen";
}

