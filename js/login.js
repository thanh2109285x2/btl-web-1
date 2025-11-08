document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Login successful (Front-end demo)");
  window.location.href = "main.html";
});
