/*menu hamburger */
const menuBtn = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.list-element');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}
/*add active link class*/
document.addEventListener('click', function() {
    if (!event.target.classList.contains('link')) return;
    event.target.classList.add('current');

    var links = document.querySelectorAll('.link');
    for (var i = 0; i < links.length; i++) {
        if (links[i] === event.target) continue;
        links[i].classList.remove('current');
    }
}, false);