document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Register successful (Front-end demo)");
  window.location.href = "login.html";
});
