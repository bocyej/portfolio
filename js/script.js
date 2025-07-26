document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("load", () => {
        document.body.classList.add("theme-transition");
    });


    // Toggle Theme Switch
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    const toggleThemeButtonModal = document.getElementById("toggleThemeButtonModal");

    function isLightThemeActive() {
        return document.body.classList.contains("light-mode");
    }

    function isDarkThemeActive() {
        return document.body.classList.contains("dark-mode");
    }

    function switchTheme() {
        const isLightTheme = isLightThemeActive();
        const isDarkTheme = isDarkThemeActive();

        const headerLogo = document.getElementById("header-logo");
        const toggleThemeLogo = document.getElementById("toggle-theme-logo");

        headerLogo.src = isLightTheme
            ? "assets/photos/logo-dark.png"
            : "assets/photos/logo-light.png";

        toggleThemeLogo.src = isLightTheme
            ? "assets/photos/dark-mode.png"
            : "assets/photos/light-mode.png";

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
        const toolsAndLanguages = document.querySelectorAll(".tools-or-languages");

        if (isLightTheme) {
            aTag.forEach(link => {
                link.classList.add('dark-text');
                link.classList.remove('light-text');
            });

            paragraphs.forEach(link => {
                link.classList.add('dark-text');
                link.classList.remove('light-text');
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

            toolsAndLanguages.forEach(link => {
                link.style.border = "#E8E9EB 1px solid"
            });
        } else if (isDarkTheme) {
            aTag.forEach(link => {
                link.classList.remove('dark-text');
                link.classList.add('light-text');
            });

            paragraphs.forEach(link => {
                link.classList.remove('dark-text');
                link.classList.add('light-text');
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

            toolsAndLanguages.forEach(link => {
                link.style.border = "#313638 1px solid"
            });
        }
        document.head.appendChild(style);
    }

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        switchTheme();
    });

    toggleThemeButtonModal.addEventListener("click", () => {
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

// Display Mobile Top Nav Modal
function showMobileNavModal() {
    document.getElementById("mobile-nav-modal").style.display = "flex";
    document.body.classList.add("modal-open");
}

// Hide Mobile Top Nav Modal
function hideMobileNavModal() {
    document.getElementById("mobile-nav-modal").style.display = "none";
    document.body.classList.remove("modal-open");
}