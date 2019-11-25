//Wygląd głównej strony zaklęć (korzystając z teachers.js) 
const main_spells = document.querySelector('.main_spells');
const btn_spells = document.querySelector('.btn_spells');

spells.addEventListener('click', resetLandingPage);
spells.addEventListener('click', spellsView);

function spellsView(){
    main_spells.style.display='block';
    back_page.style.display = 'inline-block';
    herb_menu.style.display = 'block';
    teach_spells.style.width='50%';
};
