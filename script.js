document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { speed: 1 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});
