const teach = document.querySelector('.teachers');
const header = document.querySelector('header');
const herbs = document.querySelector('.herbs');
const main_button = document.querySelector('.main_button h3');
const back_page = document.querySelector('.back_page');
const main = document.querySelector('main');
const main_teachers = document.querySelector('.main_teachers')
const spells = document.querySelector('.spells');
const herb_menu = document.querySelector('.herb_menu');
const teach_spells = document.querySelector('.teach_spells');

function resetLandingPage(){

const shiftCss = 
spells.style.display ="none"
teach.style.display="none"
main_teachers.style.display="block"
header.style.display = 'none'
herbs.style.display = 'none'
main_button.style.display = 'none'
back_page.style.display = 'inline-block'
herb_menu.style.display = "block";
teach_spells.style.width='50%';
};

teach.addEventListener('click', resetLandingPage);