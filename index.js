document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Scroll with offset to account for fixed navbar height
                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight,  // Scroll position with navbar height offset
                    behavior: "smooth"
                });
            }
        });
    });
});

