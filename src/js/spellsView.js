const main_spells = document.querySelector('.main_spells');
const btn_spells = document.querySelector('.btn_spells');
const spells_types = document.querySelector('.spells_types_list');
const spells_list = document.querySelector('.spells_list');
const spells_titles = document.querySelector('.spells_list_title');
const btn_all = document.querySelector('#all');
const btn_charm = document.querySelector('#charm');
const btn_curse = document.querySelector('#curse');
const btn_ench = document.querySelector('#enchantment');
const btn_hex = document.querySelector('#hex');
const btn_jinx = document.querySelector('#jinx');
const btn_spell = document.querySelector('#spell');

//Wygląd głównej strony zaklęć (korzystając z teachers.js) 
spells.addEventListener('click', resetLandingPage);
spells.addEventListener('click', spellsView);
btn_spells.addEventListener('click', displaySpellsList);
btn_spells.addEventListener('click', spellsListAll);


function spellsView(){
    main_spells.style.display='block';
    back_page.style.display = 'inline-block';
    herb_menu.style.display = 'block';
    teach_spells.style.width='50%';
};

function displaySpellsList() {
    btn_spells.style.display = 'none';
    spells_types.style.display = '';
    spells_list.style.display = '';
    spells_titles.style.display = '';
}

//Wyświetlanie listy zaklęć z wykorzystaniem funkcji z HPAPI.js
async function spellsListAll() {
    let listSpells=await getSpells();
    
    //Tworzy listę zaklęć w HTML
    for (i=0; i<listSpells.length; i++) {
        let spells_list_item = document.createElement('div');
        spells_list_item.className = 'spells_list_item';
        spells_list_item.style.display = 'grid';
        let spell_text = document.createElement('p');
        spell_text.appendChild(document.createTextNode(listSpells[i].spell));
        let spell_type = document.createElement('p');
        spell_type.appendChild(document.createTextNode(listSpells[i].type));
        let spell_effect = document.createElement('p');
        spell_effect.appendChild(document.createTextNode(listSpells[i].effect));
        spells_list_item.setAttribute('id', listSpells[i]._id);
        spells_list_item.appendChild(spell_text);
        spells_list_item.appendChild(spell_type);
        spells_list_item.appendChild(spell_effect);
        let all_spells_list = document.querySelector('.spells_list');
        all_spells_list.appendChild(spells_list_item);
    }
}

//Wybór grupy czarów do wyświetlenia
btn_all.addEventListener('click', spellsListAllSelected);
btn_charm.addEventListener('click', spellsListCharm);
btn_curse.addEventListener('click', spellsListCurse);
btn_ench.addEventListener('click', spellsListEnch);
btn_hex.addEventListener('click', spellsListHex);
btn_jinx.addEventListener('click', spellsListJinx);
btn_spell.addEventListener('click', spellsListSpell);

async function spellsListAllSelected() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        document.getElementById(listSpells[i]._id).style.display = 'grid';
    }
}

async function spellsListCharm() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Charm') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}

async function spellsListCurse() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Curse') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}

async function spellsListEnch() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Enchantment') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}

async function spellsListHex() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Hex') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}

async function spellsListJinx() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Jinx') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}

async function spellsListSpell() {
    let listSpells=await getSpells();
    for (i=0; i<listSpells.length; i++) {
        if (listSpells[i].type === 'Spell') {
            document.getElementById(listSpells[i]._id).style.display = 'grid';
        } else {
            document.getElementById(listSpells[i]._id).style.display = 'none';
        }
    }
}