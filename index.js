const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navbar.classList.toggle('active');

    if (toggleBtn.classList.contains('bx-menu')) {
        toggleBtn.classList.remove('bx-menu');
        toggleBtn.classList.add('bx-x');
    } else {
        toggleBtn.classList.remove('bx-x');
        toggleBtn.classList.add('bx-menu');
    }
});

document.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') && !navbar.contains(e.target)) {
        navbar.classList.remove('active');

        toggleBtn.classList.remove('bx-x');
        toggleBtn.classList.add('bx-menu');
    }
});
