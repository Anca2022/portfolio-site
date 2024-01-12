let openMenuBtn = document.getElementById('open-menu');
let closeMenuBtn = document.getElementById('close-menu');
let nav = document.getElementById('nav');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu); 
document.addEventListener('keydown', closeMenu);

function openMenu() {
    nav.classList.add('display-nav');
}
function closeMenu(e){
    if(e.pointerType === 'touch' || e.key === 'Escape'){
        nav.classList.remove('display-nav');
    }
}
