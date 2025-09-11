// Navbar Toggle for Mobile View
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navbar height
                behavior: "smooth"
            });
        }
        
        // Close menu on mobile after clicking a link
        navLinks.classList.remove("show");
    });
});

// Contact Form Submission
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Show alert on form submission
    alert("Thank you! Your message has been sent successfully.");

    // Optional: Reset form after submission
    this.reset();
});
