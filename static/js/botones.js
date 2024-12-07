const languageBtn = document.querySelector('.language-btn');
const themeBtn = document.querySelector('.theme-btn');
const textElements = document.querySelectorAll('[data-text]');

let isSpanish = true; // Estado inicial del idioma

// Alternar idioma
languageBtn.addEventListener('click', () => {
    textElements.forEach((el) => {
        el.textContent = isSpanish ? el.dataset.en : el.dataset.es;
    });
    isSpanish = !isSpanish;
    languageBtn.textContent = isSpanish ? 'Español' : 'English';
});

// Alternar tema oscuro/claro
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});