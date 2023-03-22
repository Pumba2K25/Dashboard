const nightModeToggle = document.getElementById("night-mode-toggle");
const body = document.body;

nightModeToggle.addEventListener("click", () => {
  body.classList.toggle("night-mode");
});
