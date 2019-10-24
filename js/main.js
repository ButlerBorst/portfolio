//select DOM Items
const menuButton = document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item')

//set initial state of the menu 
let showMenu = false; 

menuButton.addEventListener('click', toggleMenu)

//something that'll be good to memorize for dom manipulation

function toggleMenu() {
    if(!showMenu) {
        menuButton.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        //set menu state
        showMenu = true
    }else {
        menuButton.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))

        //set menu state
        showMenu = false

    }
}

//update image size responsive 