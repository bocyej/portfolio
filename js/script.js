function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

function redirectProjectsArea() {
    const button = document.querySelector('.show-more-button');
    const targetDiv = document.querySelector('#projects-area');

    if (button.textContent === 'SHOW LESS') {
        window.location.href = '#projects-area';
    } else {
        window.location.href = '#' + targetDiv.id;
    }
}

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}