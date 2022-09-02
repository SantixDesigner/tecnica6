let ulNav = document.getElementById('ul-nav');
let bars = document.getElementById('bars');

bars.addEventListener('click',e => {
    ulNav.classList.toggle('ul-nav-show');
})

let ul_li_nav = document.getElementById('ul-li-nav');
let ul_li_nav_ul = document.getElementById('ul-li-nav-ul');
ul_li_nav.addEventListener('click', e =>{
    ul_li_nav_ul.classList.toggle('ul-li-nav-ul-show');
})