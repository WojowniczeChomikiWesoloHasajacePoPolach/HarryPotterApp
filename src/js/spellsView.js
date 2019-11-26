//Wygląd głównej strony zaklęć (korzystając z teachers.js) 
const main_spells = document.querySelector('.main_spells');
const btn_spells = document.querySelector('.btn_spells');
const spells_types = document.querySelector('.spells_types_list')

spells.addEventListener('click', resetLandingPage);
spells.addEventListener('click', spellsView);
btn_spells.addEventListener('click', displaySpellsList)

function spellsView(){
    main_spells.style.display='block';
    back_page.style.display = 'inline-block';
    herb_menu.style.display = 'block';
    teach_spells.style.width='50%';
};

function displaySpellsList() {
    btn_spells.style.display = 'none';
    spells_types.style.display = '';
}