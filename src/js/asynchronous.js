// document.addEventListener("DOMContentLoaded", () => {
//     let darkMode = localStorage.getItem("darkmode");
//     const toggleThemeButton = document.getElementById("toggleThemeButton");

//     function applyStoredTheme() {
//         const storedTheme = localStorage.getItem("theme");

//         if (storedTheme === "light") {
//             document.body.classList.add("light-mode");
//             document.body.classList.remove("dark-mode");
//         } else {
//             document.body.classList.add("dark-mode");
//             document.body.classList.remove("light-mode");
//         }
//     }

//     function saveThemePreference() {
//         if (document.body.classList.contains("light-mode")) {
//             localStorage.setItem("theme", "light");
//         } else {
//             localStorage.setItem("theme", "dark");
//         }
//     }

//     applyStoredTheme();

//     // Re-run theme logic after applying class
//     if (typeof switchTheme === "function") {
//         switchTheme();
//     }

//     if (toggleThemeButton) {
//         toggleThemeButton.addEventListener("click", () => {
//             saveThemePreference();
//         });
//     }
// });
