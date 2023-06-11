window.onload = function () {
    let nav = document.getElementById('nav-wrapper');
    let hamburger = document.getElementById('js-hamburger');

    hamburger.addEventListener('click',function () {
        nav.classList.toggle('open');
    });
}