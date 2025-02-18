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

// Dark Mode Toggle (Enhanced)
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙 Dark Mode";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.bottom = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.padding = "10px 15px";
darkModeToggle.style.backgroundColor = "#333";
darkModeToggle.style.color = "white";
darkModeToggle.style.border = "none";
darkModeToggle.style.cursor = "pointer";
darkModeToggle.style.borderRadius = "5px";
document.body.appendChild(darkModeToggle);

// Apply dark mode styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    body.dark-mode {
        background-color: #222;
        color: white;
    }
    body.dark-mode .navbar {
        background-color: #111;
    }
    body.dark-mode .navbar a {
        color: white;
    }
    body.dark-mode .project-card,
    body.dark-mode .skills,
    body.dark-mode .experience,
    body.dark-mode .education-card {
        background-color: #333;
        color: white;
        border: 1px solid white;
    }
    body.dark-mode .footer {
        background-color: #111;
    }
    body.dark-mode .social-icons a {
        color: white !important;
    }
    body.dark-mode .menu-toggle {
        color: white;
    }
    body.dark-mode h1, 
    body.dark-mode h2, 
    body.dark-mode h3, 
    body.dark-mode p {
        color: white;
    }
    .dark-mode-btn.dark {
        background-color: white;
        color: black;
    }
`;
document.head.appendChild(darkModeStyles);

// Dark Mode Toggle Functionality
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text and style when dark mode is active
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "☀️ Light Mode";
        darkModeToggle.style.backgroundColor = "white";
        darkModeToggle.style.color = "black";
    } else {
        darkModeToggle.innerText = "🌙 Dark Mode";
        darkModeToggle.style.backgroundColor = "#333";
        darkModeToggle.style.color = "white";
    }
});
