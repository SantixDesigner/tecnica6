let ulNav = document.getElementById('ul-nav');
let bars = document.getElementById('bars');

bars.addEventListener('click',e => {
    ulNav.classList.toggle('ul-nav-show');
})