function random(min, max) {
    return Math.random() * (max - min) + min;
}
(function() {
    emailjs.init('z02IUa0U3uCyraPVI'); // Replace 'YOUR_USER_ID' with your actual user ID
})();
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

// Call animateImages function when the window has loaded
window.onload = function() {
    animateImages();
};