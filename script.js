function random(min, max) {
    return Math.random() * (max - min) + min;
}
(function() {
    emailjs.init('z02IUa0U3uCyraPVI'); // Replace 'YOUR_USER_ID' with your actual user ID
})();
const translations = {
    en: {
        "page-title": "Lara turns 2!",
        title: "Lara turns 2!",
        welcome: "Welcome to the birthday party!",
        date: "July 20 at 3 PM.",
        address: "Centralvägen 15 at the back!",
        "name-placeholder": "Name",
        yes: "Yes! We are coming!",
        no: "No, we cannot make it!",
        send: "Send"
    },
    es: {
        "page-title": "¡Lara cumple 2!!!",
        title: "¡Lara cumple 2!",
        welcome: "¡Bienvenidos a la fiesta de cumpleaños!",
        date: "20 de julio a las 3 PM.",
        address: "Centralvägen 15 en la parte trasera!",
        "name-placeholder": "Nombre",
        yes: "¡Sí! ¡Vamos a venir!",
        no: "No, no podemos asistir.",
        send: "Enviar"
    },
    sv: {
        "page-title": "Lara fyller 2!!!",
        title: "Lara fyller 2!",
        welcome: "Välkomna på födelsedagsfest!",
        date: "Den 20 juli kl 15.",
        address: "Centralvägen 15 på baksidan!",
        "name-placeholder": "Namn",
        yes: "Ja! Vi kommer!",
        no: "Nej, vi kan tyvärr inte!",
        send: "Skicka"
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        } else {
            console.error(`Translation key '${key}' not found for language '${language}'`);
        }
    });

    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        } else {
            console.error(`Translation key '${key}' not found for language '${language}'`);
        }
    });
}

// Function to animate the images bouncing like balls
function animateImages() {
    const images = document.querySelectorAll('.floating-image');
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    images.forEach(image => {
        let x = random(0, containerWidth - image.clientWidth);
        let y = random(0, containerHeight - image.clientHeight);

        let vx = random(-1, 1); // Random velocity in x direction
        let vy = random(-1, 1); // Random velocity in y direction

        setInterval(function() {
            x += vx;
            y += vy;

            if (x <= 0 || x >= containerWidth - image.clientWidth) {
                vx = -vx; // Reverse velocity if hitting left or right edge
            }
            if (y <= 0 || y >= containerHeight - image.clientHeight) {
                vy = -vy; // Reverse velocity if hitting top or bottom edge
            }

            image.style.left = x + 'px';
            image.style.top = y + 'px';
        }, 20); // Adjust the interval (milliseconds) as needed
    });
}
function sendRSVP() {
    const name = document.getElementById('name').value;
    const response = document.querySelector('input[name="response"]:checked');

    if (name && response) {
        // Send email using EmailJS
        emailjs.send('service_ddilikc', 'template_jbbvtpi', {
            from_name: name,
            message: response.value
        }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('RSVP sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send RSVP.');
        });
    } else {
        alert('Please fill in all fields.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('sv');
});
// Call animateImages function when the window has loaded
window.onload = function() {
    animateImages();
};
