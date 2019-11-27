<<<<<<< Updated upstream
=======
const main_house = document.querySelector(".main_house");
const houseName = main_house.querySelector("h3");
const houseFounder = main_house.querySelector(".founder > span");
const houseGhost = main_house.querySelector(".house_ghost > span");
const headOfHouse = main_house.querySelector(".head_house > span");
const houseButtons = main_house.querySelector(".house_buttons");
const students = houseButtons.querySelector(".students");
const blockButtons = houseButtons.querySelector(".block_buttons");
const divs = blockButtons.querySelectorAll("div");
//przekopiowane z API, na razie tylko roboczo
async function getResponse(URL) {
    let response;
    await fetch(URL)
    .then (res => res.json())
    .then (res => response = res);
    return response
  }
async function getHouse(houseId) {
    let URL = "https://www.potterapi.com/v1/houses/";
    let key = "?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    URL = encodeURI(URL+houseId+key);
    let house = await getResponse(URL);
    return house[0]
  }
function resetLandingPage(){
    const shiftCss = 
    spells.style.display ="none"
    teach.style.display="none"
    header.style.display = 'none'
    herbs.style.display = 'none'
    main_button.style.display = 'none'
    main_teachers.style.display = 'none'
    main_spells.style.display = 'none'
};
async function SlytherinView(){
    main_house.style.display = "block"
    back_page.style.display = 'inline-block'
    herb_menu.style.display = "block"
    herb_menu.children[0].style.display = "none"
    teach_spells.style.width='50%'
    houseName.innerHTML = "Slytherin";
    const herbImg = document.createElement('img');
    herbImg.setAttribute('src', 'images/Slytherin_Crest.png');
    herbImg.classList.add("house_herb");
    main_house.insertBefore(herbImg, houseName);
    students.classList.add("slytherin");
    for (let i =0; i < divs.length; i++){
        divs[i].classList.add("slytherin");
    }
    const house = await getHouse("5a05dc8cd45bd0a11bd5e071");
    houseFounder.innerHTML = house.founder;
    headOfHouse.innerHTML = house.headOfHouse;
    houseGhost.innerHTML = house.houseGhost;
    back.push('sl')

};
async function GryffindorView(){
    main_house.style.display = "block"
    back_page.style.display = 'inline-block'
    herb_menu.style.display = "block"
    herb_menu.children[1].style.display = "none"
    teach_spells.style.width='50%'
    houseName.innerHTML = "Gryffindor";
    const herbImg = document.createElement('img');
    herbImg.setAttribute('src', 'images/Gryffindor_ClearBG2.png');
    herbImg.classList.add("house_herb");
    main_house.insertBefore(herbImg, houseName);
    students.classList.add("gryffindor");
    for (let i =0; i < divs.length; i++){
        divs[i].classList.add("gryffindor");
    }
    const house = await getHouse("5a05e2b252f721a3cf2ea33f");
    houseFounder.innerHTML = house.founder;
    headOfHouse.innerHTML = house.headOfHouse;
    houseGhost.innerHTML = house.houseGhost; 
    back.push('gr')
};
async function HufflepuffView(){
    main_house.style.display = "block"
    back_page.style.display = 'inline-block'
    herb_menu.style.display = "block"
    herb_menu.children[0].style.display = "none"
    teach_spells.style.width='50%'
    houseName.innerHTML = "Hufflepuff";
    const herbImg = document.createElement('img');
    herbImg.setAttribute('src', 'images/hufflepuff.png');
    herbImg.classList.add("house_herb");
    main_house.insertBefore(herbImg, houseName);
    students.classList.add("hufflepuff");
    for (let i =0; i < divs.length; i++){
        divs[i].classList.add("hufflepuff");
    }
    const house = await getHouse("5a05dc58d45bd0a11bd5e070");
    houseFounder.innerHTML = house.founder;
    headOfHouse.innerHTML = house.headOfHouse;
    houseGhost.innerHTML = house.houseGhost; 
    back.push('hu')
};
async function RavenclawView(){
    main_house.style.display = "block"
    back_page.style.display = 'inline-block'
    herb_menu.style.display = "block"
    herb_menu.children[0].style.display = "none"
    teach_spells.style.width='50%'
    houseName.innerHTML = "Ravenclaw";
    const herbImg = document.createElement('img');
    herbImg.setAttribute('src', 'images/RavenclawCrest.png');
    herbImg.classList.add("house_herb");
    main_house.insertBefore(herbImg, houseName);
    students.classList.add("ravenclaw");
    for (let i =0; i < divs.length; i++){
        divs[i].classList.add("ravenclaw");
    }
    const house = await getHouse("5a05da69d45bd0a11bd5e06f");
    houseFounder.innerHTML = house.founder;
    headOfHouse.innerHTML = house.headOfHouse;
    houseGhost.innerHTML = house.houseGhost;  
    back.push('ra') 
};
const SlytherinClick = herbs.children[0];
const GryffindorClick = herbs.children[1];
const HufflepuffClick = herbs.children[2];
const RavenclawClick = herbs.children[3];

SlytherinClick.addEventListener('click',() => {
    resetLandingPage();
    SlytherinView();
});
GryffindorClick.addEventListener('click',() => {
    resetLandingPage();
    GryffindorView();
});
HufflepuffClick.addEventListener('click',() => {
    resetLandingPage();
    HufflepuffView();
});
RavenclawClick.addEventListener('click',() => {
    resetLandingPage();
    RavenclawView();
});




>>>>>>> Stashed changes
