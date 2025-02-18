document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

   
});
