const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".nav_menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
