const toggleBtn = document.querySelector('.h_toggleBtn');
const menu =document.querySelector('.h_menu');
const link =document.querySelector('.h_link');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});
