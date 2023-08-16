const toogleBtn = document.querySelector('.h_toogleBtn');
const menu =document.querySelector('.h_menu');
const link =document.querySelector('.h_link');

toogleBtn.addEventListener('click', () => {
    menu.classList.toogle('active');
    link.classList.toggle('active');
});
