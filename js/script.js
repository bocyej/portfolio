document.addEventListener("DOMContentLoaded", () => {

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
});
