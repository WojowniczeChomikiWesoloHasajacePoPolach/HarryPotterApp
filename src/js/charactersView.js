const characters = document.querySelector('.characters');
const main_characters = document.querySelector('.main_characters');
const species = main_characters.querySelector('#species');
const role = main_characters.querySelector('#role');
const species_list = main_characters.querySelector('.species_list');
const role_list = main_characters.querySelector('.role_list');
const humans = species_list.querySelector('#human');
const ghosts = species_list.querySelector('#ghost');
const creatures = species_list.querySelector('#creature');
const studentsList = role_list.querySelector('#students');
const teachersList = role_list.querySelector('#teachers')
const scroll = main_characters.querySelector('.scroll');
const p = main_characters.querySelector('#p');
const next = main_characters.querySelector(".next");
const prev = main_characters.querySelector(".prev");
const backFromChar = main_characters.querySelector(".back_from_char");
const backFromList = main_characters.querySelector(".back_from_list");
const backFromCategory = main_characters.querySelector(".back_from_category");
const removeEverything = document.querySelector('.landing_page');
const char_title = main_characters.querySelector(".char_title");

let actualPage = 0;
let pageNumbers = 1;
let tempArrayForCharacters = [];

function charactersView(){
    main_characters.style.display="block";
    back_page.style.display = 'inline-block';
    herb_menu.style.display = "flex";
    teach_spells.style.width='50%'
    back.push("characters");
    showMainCharacterPage();
};
function resetMainCharacterPage() {
    species.style.display = "none";
    role.style.display = "none";
};
function showMainCharacterPage() {
    species.style.display = "block";
    role.style.display = "block";
}
function resetSecondCharacterPage() {
    resetMainCharacterPage();
    species_list.style.display = "none";
    role_list.style.display = "none";
}
function showSpecies() {
    species_list.style.display = "flex";
    backFromCategory.style.display = "block";
};
function showRole() {
    role_list.style.display = "flex";
    backFromCategory.style.display = "block";
}
function showPageButtons(pageNumbers) {
    if(actualPage < (pageNumbers-1)){
    next.style.display ="block";
    }
    else {
        next.style.display = "none"
    }
    if(actualPage>0){
    prev.style.display ="block";
    }
    else {prev.style.display = "none"}
}
async function showElementsList(actualPage, array) {
    let pagedElements = await pageElements(array);
    let ul = document.createElement('ul');
    ul.setAttribute("class", "elements_list");
    scroll.insertBefore(ul, species);
    for (let i =0; i <pagedElements[actualPage].length; i++) {
        let li = document.createElement("li");
        li.classList.add("listed_element");
        li.setAttribute("id", `${pagedElements[actualPage][i]._id}`)
        li.setAttribute("onclick", "showCharacter(this.getAttribute('id'))")
        ul.appendChild(li);
        li.innerHTML = `${pagedElements[actualPage][i].name}`;
    }
    return array
}
function clickNextButton(array) {
    actualPage +=1;
    showElementsList(actualPage, array);
    showPageButtons(pageNumbers);
}
function clickPrevButton(array) {
    actualPage -=1;
    showElementsList(actualPage, array);
    showPageButtons(pageNumbers);
}
function countPages(array) {
    pageNumbers = Math.ceil(array.length/6);
    return pageNumbers
}
async function pageElements(array) {
    countPages(array);
    let pagedElements = [];

    for (let i=1; i<=pageNumbers; i++) {
        let y=(6*i)-5;
        let x=y-1;
        let temp = [];
        for (let j=0; j<6; j++) {
            if ( x < array.length) {
            temp[j] = array[x];
            x++;
            }
            else {break}
        }  
        pagedElements.push([...temp]);
     }
     return pagedElements
}

characters.addEventListener('click', () => {
    resetLandingPage();
    charactersView();
    actualPage = 0;

});

species.addEventListener('click', () => {
    resetMainCharacterPage();
    showSpecies();
});
role.addEventListener('click', async () => {
    resetMainCharacterPage();
    showRole();

});
humans.addEventListener('click',async  () => {
    resetSecondCharacterPage()
    let humans = await getHumans();
    tempArrayForCharacters = humans;
    showElementsList(actualPage, humans);
    pageNumbers = countPages(humans);
    showPageButtons(pageNumbers);
    char_title.innerHTML = "Humans";
    backFromList.style.display = "block";
    backFromCategory.style.display = "none";
    return humans
    });
ghosts.addEventListener('click', async () => {
    resetSecondCharacterPage()
    let ghosts = await getGhosts();
    tempArrayForCharacters = ghosts;
    showElementsList(actualPage, ghosts);
    pageNumbers = countPages(ghosts);
    showPageButtons(pageNumbers);
    char_title.innerHTML = "Ghosts";
    backFromList.style.display = "block";
    backFromCategory.style.display = "none";
    return ghosts
});
creatures.addEventListener('click', async () => {
    resetSecondCharacterPage()
    let creatures = await getCreatures();
    tempArrayForCharacters = creatures;
    showElementsList(actualPage, creatures);
    pageNumbers = countPages(creatures);
    showPageButtons(pageNumbers);
    char_title.innerHTML = "Creatures";
    backFromList.style.display = "block";
    backFromCategory.style.display = "none";
    return creatures
});
studentsList.addEventListener('click', async () => {
    resetSecondCharacterPage()
    let students = await getStudents();
    tempArrayForCharacters = students;
    showElementsList(actualPage, students);
    pageNumbers = countPages(students);
    showPageButtons(pageNumbers);
    char_title.innerHTML = "Students";
    backFromList.style.display = "block";
    backFromCategory.style.display = "none";
    return students
});
teachersList.addEventListener('click', async () => {
    resetSecondCharacterPage()
    let teachers = await getTeachers();
    tempArrayForCharacters = teachers;
    showElementsList(actualPage, teachers);
    pageNumbers = countPages(teachers);
    showPageButtons(pageNumbers);
    char_title.innerHTML = "Teachers";
    backFromList.style.display = "block";
    backFromCategory.style.display = "none";
    return teachers
});
async function showCharacter(id) {
    next.style.display = "none";
    prev.style.display = "none";
    backFromList.style.display = "none";
    backFromChar.style.display = "inline";
    let elementsList = document.querySelector(".elements_list");
    elementsList.parentNode.removeChild(elementsList);
    let character = await getCharacter(`${id}`);
    let ul = document.createElement('ul');
    ul.setAttribute("class", "character_params");
    scroll.appendChild(ul);
    let name = document.createElement('li');
    name.classList.add("name");
    ul.appendChild(name);
    let house = document.createElement('li');
    house.classList.add("house");
    ul.appendChild(house);
    let role = document.createElement('li');
    role.classList.add("role");
    ul.appendChild(role);
    let bloodStatus = document.createElement('li');
    bloodStatus.classList.add("blood_status");
    ul.appendChild(bloodStatus);
    let species = document.createElement('li');
    species.classList.add("species");
    ul.appendChild(species);
    name.innerHTML = `Name: ${character.name}`;
    house.innerHTML = `House: ${character.house}`;
    role.innerHTML = `Role: ${character.role}`;
    bloodStatus.innerHTML = `Blood Status: ${character.bloodStatus}`;
    species.innerHTML = `Species: ${character.species}`;
}
backFromChar.addEventListener('click', () => {
    let characterParams = document.querySelector(".character_params");
    characterParams.parentNode.removeChild(characterParams);
    backFromChar.style.display="none";
    showElementsList(actualPage, tempArrayForCharacters);
    pageNumbers = countPages(tempArrayForCharacters);
    showPageButtons(pageNumbers);
    backFromList.style.display = "block";
});
backFromList.addEventListener('click', () => {
    let elementsList = document.querySelector(".elements_list");
    elementsList.parentNode.removeChild(elementsList);
    next.style.display = "none";
    prev.style.display = "none";
    if(char_title.innerHTML == "Students" || char_title.innerHTML == "Teachers") {
        showRole();
    }
    else {showSpecies()};
    backFromList.style.display="none";
    char_title.innerHTML = "";
    actualPage = 0;
});
backFromCategory.addEventListener('click', () => {
    species_list.style.display = "none";
    role_list.style.display = "none";
    backFromCategory.style.display = "none";
    showMainCharacterPage();

});
next.addEventListener('click', () => {
    let elementsList = document.querySelector(".elements_list");
    elementsList.parentNode.removeChild(elementsList);
    clickNextButton(tempArrayForCharacters);

});
prev.addEventListener('click', () => {
    let elementsList = document.querySelector(".elements_list");
    elementsList.parentNode.removeChild(elementsList);
    clickPrevButton(tempArrayForCharacters);
});
removeEverything.addEventListener('click', () => {
    resetSecondCharacterPage()
    let characterParams = document.querySelector(".character_params");
    if (characterParams != null){
    characterParams.parentNode.removeChild(characterParams);
    }
    backFromChar.style.display = "none";
    let elementsList = document.querySelector(".elements_list");
    if (elementsList != null) {
    elementsList.parentNode.removeChild(elementsList);
    }
    next.style.display = "none";
    prev.style.display = "none";
    char_title.innerHTML = "";
})


