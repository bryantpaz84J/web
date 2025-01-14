document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
  
    menuButton.addEventListener('click', () => {
      // Alternar la visibilidad del menú
      if (menuDropdown.style.display === 'block') {
        menuDropdown.style.display = 'none';
      } else {
        menuDropdown.style.display = 'block';
      }
    });
  
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
      if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.style.display = 'none';
      }
    });
  });
  