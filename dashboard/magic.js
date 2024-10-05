// toggle class active
const navmenu = document.querySelector('.nav-menu');

// saat di klik si hamburger
document.querySelector('#hamburger-menu').onclick = () => {
    navmenu.classList.toggle('active');
};
//klik diluar side bar buat ngilangin nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navmenu.contains(e.target)){
        navmenu.classList.remove('active');
    }
});