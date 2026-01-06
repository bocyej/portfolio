window.addEventListener("load", () => {
  document.body.classList.add("theme-transition");
  document.body.classList.add("dark-mode");
});

// Toggle Theme Switch
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
      ? "../assets/photos/logo-dark.png"
      : "../assets/photos/logo-light.png";

    toggleThemeLogo.src = isLightTheme
      ? "../assets/photos/dark-mode.png"
      : "../assets/photos/light-mode.png";
  }

  const iconPath: NodeListOf<HTMLElement> =
    document.querySelectorAll(".icon-path");

  if (isLightTheme) {
    iconPath.forEach((link) => {
      link.style.fill = "#313638";
    });

    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else if (isDarkTheme) {
    iconPath.forEach((link) => {
      link.style.fill = "#E8E9EB";
    });

    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
}

// Entry for each word
export function introductionAnimation(): void {
  const paragraphs: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll(".introduction-description p");

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
}

// Display Mobile Top Nav Modal
export function showMobileNavModal(): void {
  const modal = document.getElementById(
    "mobile-nav-modal"
  ) as HTMLElement | null;

  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
}

// Hide Mobile Top Nav Modal
export function hideMobileNavModal(): void {
  const modal = document.getElementById(
    "mobile-nav-modal"
  ) as HTMLElement | null;

  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}
