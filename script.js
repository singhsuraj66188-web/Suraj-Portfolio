/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement = document.getElementById("typingText");

const roles = [
    "Python Developer",
    "Cybersecurity Enthusiast",
    "AI / ML Learner",
    "Automation Builder",
    "CSE Student"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) {
        return;
    }

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =====================================================
   SIMPLE SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .achievement, .stat, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =====================================================
   REVEAL STYLE
===================================================== */

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .skill-card.visible,
    .project-card.visible,
    .certificate-card.visible,
    .achievement.visible,
    .stat.visible,
    .timeline-item.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .nav a.active {
        color: #00e5a0;
    }
`;

document.head.appendChild(revealStyle);


/* =====================================================
   RESUME CHECK
===================================================== */

document.querySelectorAll(
    'a[href="resume (8).pdf"]'
).forEach(link => {

    link.addEventListener("click", event => {

        console.log(
            "Opening resume: resume (8).pdf"
        );

    });

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cSuraj.Dev",
    "color:#00e5a0;font-size:20px;font-weight:bold;"
);

console.log(
    "Portfolio loaded successfully."
);