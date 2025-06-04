document.addEventListener("DOMContentLoaded", () => {

    // Toggle Theme Switch
    const toggleThemeButton = document.getElementById("toggleThemeButton");

    function isDarkThemeActive() {
        return document.body.classList.contains("dark-mode");
    }

    function switchTheme() {
        const isDarkTheme = isDarkThemeActive();

        const headerLogo = document.getElementById("header-logo");
        const toggleThemeLogo = document.getElementById("toggle-theme-logo");

        if (window.location.href.includes("/about") || window.location.href.includes("/contact") || window.location.href.includes("/projects")) {
            headerLogo.src = isDarkTheme
                ? "../assets/photos/logo-light.png"
                : "../assets/photos/logo-dark.png";

            toggleThemeLogo.src = isDarkTheme
                ? "../assets/photos/light-mode.png"
                : "../assets/photos/dark-mode.png";
        } else {
            headerLogo.src = isDarkTheme
                ? "assets/photos/logo-light.png"
                : "assets/photos/logo-dark.png";

            toggleThemeLogo.src = isDarkTheme
                ? "assets/photos/light-mode.png"
                : "assets/photos/dark-mode.png";
        }

        const header1 = document.querySelectorAll("h1");
        const header2 = document.querySelectorAll("h2");
        const header3 = document.querySelectorAll("h3");
        const paragraphs = document.querySelectorAll("p");
        const aTag = document.querySelectorAll("a");
        const lists = document.querySelectorAll("li");

        const style = document.createElement('style');

        const projectCard = document.querySelectorAll(".project-card");
        const cardHover = document.querySelectorAll(".card-hover");
        const cardText = document.querySelectorAll(".card-text");

        if (isDarkTheme) {
            aTag.forEach(link => {
                link.classList.remove('light-mode');
                link.classList.add('dark-mode');
            });

            paragraphs.forEach(link => {
                link.classList.remove('light-mode');
                link.classList.add('dark-mode');
            });

            projectCard.forEach(link => {
                link.classList.remove('card-dark');
                link.classList.add('card-light');
            });

            cardHover.forEach(link => {
                link.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
            });

            cardText.forEach(link => {
                link.classList.remove('card-description-color-light');
                link.classList.add('card-description-color-dark');
            });

            style.innerHTML = `
                .timeline-circle::before {
                    background-color: #313638 !important;
                    border: 3px solid #E8E9EB;
                }
            `;
        } else {
            aTag.forEach(link => {
                link.classList.add('light-mode');
                link.classList.remove('dark-mode');
            });

            paragraphs.forEach(link => {
                link.classList.add('light-mode');
                link.classList.remove('dark-mode');
            });

            projectCard.forEach(link => {
                link.classList.add('card-dark');
                link.classList.remove('card-light');
            });

            cardHover.forEach(link => {
                link.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            });

            cardText.forEach(link => {
                link.classList.add('card-description-color-light');
                link.classList.remove('card-description-color-dark');
            });

            style.innerHTML = `
                .timeline-circle::before {
                    background-color: #E8E9EB !important;
                    border: 3px solid #313638;
                }
            `;
        }
        document.head.appendChild(style);

        const activeNavbarElement = document.querySelector(".active");
        activeNavbarElement.style.borderBottom = isDarkTheme ? "#E8E9EB 4px solid" : "#313638 4px solid";

        // const backgroundRectangle = document.querySelector(".background-rectangle");
        // backgroundRectangle.style.backgroundColor = isDarkTheme ? "#4C5153" : "#E0DFD5";

        const timeline = document.querySelector(".timeline");

        if (timeline) {
            timeline.style.borderLeft = isDarkTheme ? "2px solid #E8E9EB" : "2px solid #313638";
        }
    }

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        switchTheme();
    });


    // Entry for each word
    const paragraphs = document.querySelectorAll(".introduction-description p");

    let totalDelay = 0;

    if (paragraphs) {
        paragraphs.forEach((p, paraIndex) => {
            const text = p.textContent.trim();
            const words = text.split(" ");
            p.innerHTML = "";

            words.forEach((word, wordIndex) => {
                const span = document.createElement("span");
                span.textContent = word;
                span.classList.add("word");

                const delay = totalDelay + wordIndex * 0.03;
                span.style.animationDelay = `${delay}s`;

                p.appendChild(span);
                p.appendChild(document.createTextNode(" "));
            });

            totalDelay += words.length * 0.03 + 0.3;
        });
    }


    // Right Arrow Bouncing
    const arrow = document.getElementById("arrow");

    if (arrow) {
        setInterval(() => {
            arrow.classList.remove("bounce");
            void arrow.offsetWidth;
            arrow.classList.add("bounce");
        }, 2500);
    }


    // Ensure dark theme is selected on page load
    switchTheme();
});