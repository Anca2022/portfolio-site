let openMenuBtn = document.getElementById('open-menu');
let closeMenuBtn = document.getElementById('close-menu');
let nav = document.getElementById('nav');
let header = document.getElementsByTagName('header')[0]; 

window.addEventListener('scroll', ()=> {
    if(window.scrollY < 100) { 
        if(header.classList.contains('shadow')) {
            header.classList.remove('shadow');
        };
    } 
    else { 
        header.classList.add('shadow'); };
})

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

function closeMenu2(){
    nav.classList.remove('display-nav');
}