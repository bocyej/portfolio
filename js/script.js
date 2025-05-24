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
        const header1 = document.querySelectorAll("h1");
        const header2 = document.querySelectorAll("h2");
        const header3 = document.querySelectorAll("h3");
        const paragraphs = document.querySelectorAll("p");
        const aTag = document.querySelectorAll("a");
        const lists = document.querySelectorAll("li");

        headerLogo.src = isDarkTheme
            ? "../assets/photos/logo-light.png"
            : "../assets/photos/logo-dark.png";

        toggleThemeLogo.src = isDarkTheme
            ? "../assets/photos/light-mode.png"
            : "../assets/photos/dark-mode.png";

        aTag.forEach(link => {
            link.classList.toggle('dark-mode');
            link.classList.toggle('light-mode');
        });

        paragraphs.forEach(link => {
            link.classList.toggle('dark-mode');
            link.classList.toggle('light-mode');
        });

        lists.forEach(link => {
            link.classList.toggle('dark-mode');
            link.classList.toggle('light-mode');
        });

        const path = document.querySelectorAll(".icon-path");
        path.forEach(path => {
            path.setAttribute("fill", isDarkTheme ? "#E8E9EB" : "#313638");
        });
    }

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        switchTheme();
    });


    // Entry for each word
    const paragraphs = document.querySelectorAll(".introduction-description p");

    let totalDelay = 0;

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


    // Right Arrow Bouncing
    const arrow = document.getElementById("arrow");

    setInterval(() => {
        arrow.classList.remove("bounce");
        void arrow.offsetWidth;
        arrow.classList.add("bounce");
    }, 2500);


    // Ensure dark theme is selected on page load
    switchTheme();
});
