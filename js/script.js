function scrollToTop() {
    window.scrollTo({
        top: 0,
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