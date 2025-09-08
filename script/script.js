const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if(body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
      } else {
        toggleButton.textContent = 'Switch to Dark Mode';
      }
    });
 const form = document.getElementById('registrationForm');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

  