// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                formMessage.textContent = 'Thank you for your message. I will get back to you soon!';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('success');
                contactForm.reset();
            } else {
                formMessage.textContent = 'There was an error sending your message. Please try again later.';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('error');
            }
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = 'There was an error sending your message. Please try again later.';
            formMessage.classList.remove('hidden');
            formMessage.classList.add('error');
        }
    });
});
