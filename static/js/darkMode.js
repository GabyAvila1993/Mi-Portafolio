const darkModeToggle = document.getElementById('dark-mode-toggle');

// Función para alternar entre modo oscuro y claro
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar el texto del botón según el modo actual
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        darkModeToggle.textContent = 'Modo Oscuro';
    }
});