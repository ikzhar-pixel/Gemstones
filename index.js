const navbar = document.querySelector(".navbar");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        toggleBtn.classList.replace("bx-menu", "bx-x");
    } else {
        toggleBtn.classList.replace("bx-x", "bx-menu");
    }
});