document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            
            const isDark = document.body.classList.toggle('dark-mode');

            if (isDark) {
                themeBtn.textContent = "Switch to Day Match";
            } else {
                themeBtn.textContent = "Switch to Night Match";
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const emailInput = document.getElementById('user-email').value;

            if (emailInput === "") {
            
                event.preventDefault();
                alert("Please enter an email address before submitting.");
            }
        });
    }
});