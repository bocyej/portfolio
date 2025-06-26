document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("content");

    const normalizeUrl = (url) => new URL(url, window.location.origin).pathname;

    function setActiveLink(url) {
        document.querySelectorAll(".nav-link").forEach(link => {
            const linkPath = normalizeUrl(link.getAttribute("href"));
            if (linkPath === normalizeUrl(url)) {
                link.classList.add("active");
                link.classList.remove("underline");
            } else {
                link.classList.remove("active");
                link.classList.add("underline");
            }
        });
    }

    function loadPage(url, addToHistory = true) {
        const targetPath = normalizeUrl(url);
        // Prevent same page reload
        if (normalizeUrl(location.pathname) === targetPath) return;
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch ${url}`);
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const newContent = doc.querySelector("main")?.innerHTML;
                if (newContent) {
                    mainContent.innerHTML = newContent;
                    if (addToHistory) {
                        history.pushState({ url }, "", url);
                    }
                    window.scrollTo(0, 0);

                    setActiveLink(url);
                    bindDynamicEvents();
                } else {
                    throw new Error("Main content not found in new page.");
                }
            })
            .catch(err => {
                mainContent.innerHTML = `<p>Error loading page: ${err.message}</p>`;
            });
    }

    function bindDynamicEvents() {
        // Rebind nav links
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const url = link.getAttribute("href");
                loadPage(url);
            });
        });

        // Toggle Theme
        const themeToggleBtn = document.getElementById("toggleThemeButton");
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener("click", toggleTheme);
        }
    }

    function toggleTheme() {
        const body = document.body;
        const isDarkTheme = body.classList.contains("dark-mode");

        if (isDarkTheme) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        updateThemeLogo();
    }

    function updateThemeLogo() {
        const headerLogo = document.getElementById("header-logo");
        const toggleThemeLogo = document.getElementById("toggle-theme-logo");
        const isDarkTheme = document.body.classList.contains("dark-mode");

        if (headerLogo) {
            headerLogo.src = isDarkTheme
                ? "/assets/photos/logo-light.png"
                : "/assets/photos/logo-dark.png";
        }

        if (toggleThemeLogo) {
            toggleThemeLogo.src = isDarkTheme
                ? "/assets/photos/light-mode.png"
                : "/assets/photos/dark-mode.png";
        }
    }


    function applyStoredTheme() {
        const storedTheme = localStorage.getItem("theme");
        const body = document.body;

        if (storedTheme === "dark") {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }

        updateThemeLogo();
    }

    window.addEventListener("popstate", e => {
        if (e.state?.url) {
            loadPage(e.state.url, false);
        }
    });

    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark");
    }

    applyStoredTheme();
    bindDynamicEvents();
    setActiveLink(location.pathname);
});
