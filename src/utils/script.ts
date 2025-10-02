window.addEventListener("load", () => {
  document.body.classList.add("theme-transition");
});

// Toggle Theme Switch
const toggleThemeButton = document.getElementById(
  "toggleThemeButton"
) as HTMLElement | null;
const toggleThemeButtonModal = document.getElementById(
  "toggleThemeButtonModal"
) as HTMLElement | null;

function isLightThemeActive() {
  return document.body.classList.contains("light-mode");
}

function isDarkThemeActive() {
  return document.body.classList.contains("dark-mode");
}

export function switchTheme(): void {
  const isLightTheme = isLightThemeActive();
  const isDarkTheme = isDarkThemeActive();

  const headerLogo = document.getElementById(
    "header-logo"
  ) as HTMLImageElement | null;
  const toggleThemeLogo = document.getElementById(
    "toggle-theme-logo"
  ) as HTMLImageElement | null;

  if (headerLogo && toggleThemeLogo) {
    headerLogo.src = isLightTheme
      ? "src/assets/photos/logo-dark.png"
      : "src/assets/photos/logo-light.png";

    toggleThemeLogo.src = isLightTheme
      ? "src/assets/photos/dark-mode.png"
      : "src/assets/photos/light-mode.png";
  }

  const header1: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll("h1");
  const header2: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll("h2");
  const header3: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll("h3");
  const paragraphs: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll("p");
  const aTag: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");
  const lists: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");

  const style = document.createElement("style");

  const projectCard: NodeListOf<HTMLElement> =
    document.querySelectorAll(".project-card");
  const cardHover: NodeListOf<HTMLElement> =
    document.querySelectorAll(".card-hover");
  const cardText: NodeListOf<HTMLElement> =
    document.querySelectorAll(".card-text");
  const toolsAndLanguages: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".tools-or-languages"
  );
  const iconPath: NodeListOf<HTMLElement> =
    document.querySelectorAll(".icon-path");

  if (isLightTheme) {
    aTag.forEach((link) => {
      link.classList.add("dark-text");
      link.classList.remove("light-text");
    });

    paragraphs.forEach((link) => {
      link.classList.add("dark-text");
      link.classList.remove("light-text");
    });

    projectCard.forEach((link) => {
      link.classList.add("card-dark");
      link.classList.remove("card-light");
    });

    cardHover.forEach((link) => {
      link.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    });

    cardText.forEach((link) => {
      link.classList.add("card-description-color-light");
      link.classList.remove("card-description-color-dark");
    });

    toolsAndLanguages.forEach((link) => {
      link.style.border = "#E8E9EB 1px solid";
    });

    iconPath.forEach((link) => {
      link.style.fill = "#E8E9EB";
    });

    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else if (isDarkTheme) {
    aTag.forEach((link) => {
      link.classList.remove("dark-text");
      link.classList.add("light-text");
    });

    paragraphs.forEach((link) => {
      link.classList.remove("dark-text");
      link.classList.add("light-text");
    });

    projectCard.forEach((link) => {
      link.classList.remove("card-dark");
      link.classList.add("card-light");
    });

    cardHover.forEach((link) => {
      link.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    });

    cardText.forEach((link) => {
      link.classList.remove("card-description-color-light");
      link.classList.add("card-description-color-dark");
    });

    toolsAndLanguages.forEach((link) => {
      link.style.border = "#313638 1px solid";
    });

    iconPath.forEach((link) => {
      link.style.fill = "#313638";
    });

    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
  document.head.appendChild(style);
}

// Entry for each word
const paragraphs: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
  ".introduction-description p"
);

let totalDelay = 0;

if (paragraphs) {
  paragraphs.forEach((p) => {
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
const arrow = document.getElementById("arrow") as HTMLElement | null;

if (arrow) {
  setInterval(() => {
    arrow.classList.remove("bounce");
    void arrow.offsetWidth;
    arrow.classList.add("bounce");
  }, 2500);
}

// Ensure dark theme is selected on page load
switchTheme();

// Display Mobile Top Nav Modal
function showMobileNavModal(): void {
  const modal = document.getElementById(
    "mobile-nav-modal"
  ) as HTMLElement | null;

  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
}

// Hide Mobile Top Nav Modal
function hideMobileNavModal(): void {
  const modal = document.getElementById(
    "mobile-nav-modal"
  ) as HTMLElement | null;

  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}
