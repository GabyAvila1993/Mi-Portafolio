const hamburguesa = document.querySelector('.hamburguesa');
const menuDerecho = document.querySelector('.menu-derecho');

hamburguesa.addEventListener('click', () => {
    menuDerecho.classList.toggle('mostrar');
});