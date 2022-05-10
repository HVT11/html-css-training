function openMenu() {
    document.getElementById('nav').classList.add('header__nav--active')
    document.getElementById('btn-open-menu').classList.add('header-top__toggle-open--disable')
    document.getElementById('btn-close-menu').classList.add('header-top__toggle-close--active')
}

function closeMenu() {
    document.getElementById('nav').classList.remove('header__nav--active')
    document.getElementById('btn-open-menu').classList.remove('header-top__toggle-open--disable')
    document.getElementById('btn-close-menu').classList.remove('header-top__toggle-close--active')
}
