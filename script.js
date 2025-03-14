// Animate hero title on load
gsap.from("#hero-title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out"
});

// Animate sections and icons on scroll
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".fade-in").forEach(function(section) {
        gsap.from(section, {
            duration: 1,
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: section,
                start: "top 75%"
            }
        });
    });

    document.querySelectorAll(".animate-icon").forEach(icon => {
        gsap.from(icon, {
            duration: 1,
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: "bounce.out"
        });
    });
});

// Social media icon hover effect
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.3,
            ease: "power2.out"
        });
    });
    icon.addEventListener('mouseout', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});
