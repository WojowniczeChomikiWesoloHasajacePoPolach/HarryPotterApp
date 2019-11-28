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
};
async function getSlytherinMembers() {
    let URL = "https://www.potterapi.com/v1/characters?house=Slytherin&key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const slytherinMembers = await getResponse(URL);
    return slytherinMembers
  }
//   Członkowie Gryffindoru
  async function getGryffindorMembers() {
    let URL = "https://www.potterapi.com/v1/characters?house=Gryffindor&key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const gryffindorMembers = await getResponse(URL);
    return gryffindorMembers
  }
  //Członkowie Ravenclaw
  async function getRavenclawMembers() {
    let URL = "https://www.potterapi.com/v1/characters?house=Ravenclaw&key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const ravenclawMembers = await getResponse(URL);
    return ravenclawMembers
  }
    //Członkowie Hafflepuff
  async function getHufflepuffMembers() {
    let URL = "https://www.potterapi.com/v1/characters?house=Hufflepuff&key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const hafflepuffMembers = await getResponse(URL);
    return hafflepuffMembers
  }
   //Funkcja zwracająca tablicę członków Dumbledore Army z danego domu, jako argument nazwa domu
   async function getHouseDumbledoresArmyMembers(houseName) {
    let houseMembers = [];
    switch(houseName) {
      case "Gryffindor":
        houseMembers = await getGryffindorMembers();
        break;
      case "Slytherin":
        houseMembers = await getSlytherinMembers();
        break;
      case "Ravenclaw":
        houseMembers = await getRavenclawMembers();
        break;
      case "Hufflepuff":
        houseMembers = await getHufflepuffMembers();
        break;
    }
   
    houseDumbledoresArmyMembers = [];
    for (i = 0; i < houseMembers.length; i++) {
      if (houseMembers[i].dumbledoresArmy === undefined) {
        continue
      }
      else if (houseMembers[i].dumbledoresArmy === true) {
        houseDumbledoresArmyMembers.push(houseMembers[i]);
      }
      else {
        continue
      }
    }
      return houseDumbledoresArmyMembers
  }
  //funkcja zwracająca tablicę członków zakonu feniksa z danego domu, jako argument, nazwa domu
  async function getHouseOrderOfThePhoenixMembers(houseName) {
    let houseMembers = [];
    switch(houseName) {
      case "Gryffindor":
        houseMembers = await getGryffindorMembers();
        break;
      case "Slytherin":
        houseMembers = await getSlytherinMembers();
        break;
      case "Ravenclaw":
        houseMembers = await getRavenclawMembers();
        break;
      case "Hufflepuff":
        houseMembers = await getHufflepuffMembers();
        break;
    }
   
    houseOrderOfThePhoenixMembers = [];
    for (i = 0; i < houseMembers.length; i++) {
      if (houseMembers[i].orderOfThePhoenix === undefined) {
        continue
      }
      else if (houseMembers[i].orderOfThePhoenix === true) {
        houseOrderOfThePhoenixMembers.push(houseMembers[i]);
      }
      else {
        continue
      }
    }
      return houseOrderOfThePhoenixMembers
  }
  //funkcja zwracająca tablicę członków ministerstwa magii z danego domu, jako argument, nazwa domu
  async function getMinistryOfMagicMembers(houseName) {
    let houseMembers = [];
    switch(houseName) {
      case "Gryffindor":
        houseMembers = await getGryffindorMembers();
        break;
      case "Slytherin":
        houseMembers = await getSlytherinMembers();
        break;
      case "Ravenclaw":
        houseMembers = await getRavenclawMembers();
        break;
      case "Hufflepuff":
        houseMembers = await getHufflepuffMembers();
        break;
    }
   
    houseMinistryOfMagicMembers = [];
    for (i = 0; i < houseMembers.length; i++) {
      if (houseMembers[i].ministryOfMagic === undefined) {
        continue
      }
      else if (houseMembers[i].ministryOfMagic === true) {
        houseMinistryOfMagicMembers.push(houseMembers[i]);
      }
      else {
        continue
      }
    }
      return houseMinistryOfMagicMembers
  }


// Widoki domów

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
};

// Buttony poszczególnych domów

const SlytherinClick = herbs.children[0];
const GryffindorClick = herbs.children[1];
const HufflepuffClick = herbs.children[2];
const RavenclawClick = herbs.children[3];

SlytherinClick.addEventListener('click',() => {
    resetLandingPage();
    SlytherinView();
    students.lastElementChild.addEventListener('click',() =>{
        resetLandingPage();
        SlytherinStudentsView();
    });
    blockButtons.children[0].addEventListener('click',() =>{
        resetLandingPage();
        MinistryView();
        MinistryMembers("Slytherin");
    });
    blockButtons.children[1].addEventListener('click',() =>{
        resetLandingPage();
        OrderView();
        OrderMembers("Slytherin");
    });
    blockButtons.children[2].addEventListener('click',() =>{
        resetLandingPage();
        ArmyView();
        ArmyMembers("Slytherin");
    });
});

GryffindorClick.addEventListener('click',() => {
    resetLandingPage();
    GryffindorView();
    students.lastElementChild.addEventListener('click',() =>{
        resetLandingPage();
        GryffindorStudentsView();
    });
    blockButtons.children[0].addEventListener('click',() =>{
        resetLandingPage();
        MinistryView();
        MinistryMembers("Gryffindor");
    });
    blockButtons.children[1].addEventListener('click',() =>{
        resetLandingPage();
        OrderView();
        OrderMembers("Gryffindor");
    });
    blockButtons.children[2].addEventListener('click',() =>{
        resetLandingPage();
        ArmyView();
        ArmyMembers("Gryffindor");
    });
});

HufflepuffClick.addEventListener('click',() => {
    resetLandingPage();
    HufflepuffView();
    students.lastElementChild.addEventListener('click',() =>{
        resetLandingPage();
        HufflepuffStudentsView();
    });
    blockButtons.children[0].addEventListener('click',() =>{
        resetLandingPage();
        MinistryView();
        MinistryMembers("Hufflepuff");
    });
    blockButtons.children[1].addEventListener('click',() =>{
        resetLandingPage();
        OrderView();
        OrderMembers("Hufflepuff");
    });
    blockButtons.children[2].addEventListener('click',() =>{
        resetLandingPage();
        ArmyView();
        ArmyMembers("Hufflepuff");
    });
});

RavenclawClick.addEventListener('click',() => {
    resetLandingPage();
    RavenclawView();
    students.lastElementChild.addEventListener('click',() =>{
        resetLandingPage();
        RavenclawStudentsView();
    });
    blockButtons.children[0].addEventListener('click',() =>{
        resetLandingPage();
        MinistryView();
        MinistryMembers("Ravenclaw");
    });
    blockButtons.children[1].addEventListener('click',() =>{
        resetLandingPage();
        OrderView();
        OrderMembers("Ravenclaw");
    });
    blockButtons.children[2].addEventListener('click',() =>{
        resetLandingPage();
        ArmyView();
        ArmyMembers("Ravenclaw");
    });
});

// Students view
const studentView = document.querySelector('.studentsView');
const pureBloodList = document.querySelector('.pureBlood');
const halfBloodList = document.querySelector('.halfBlood');

// Funkcje zwracające widok studentów danego domu

async function SlytherinStudentsView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    studentView.style.display='block'
    const members = await getSlytherinMembers();
    console.log(members);
    for(let i = 0; i<members.length;i++){
        const listEl = document.createElement('li');
        if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "pure-blood"){
            listEl.innerText = `${members[i].name}`;
            pureBloodList.appendChild(listEl);
        }else if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "half-blood"){
            listEl.innerText = `${members[i].name}`;
            halfBloodList.appendChild(listEl);
        }
    }
}

async function GryffindorStudentsView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    studentView.style.display='block'
    const members = await getGryffindorMembers();
    for(let i = 0; i<members.length;i++){
        const listEl = document.createElement('li');
        if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "pure-blood"){
            listEl.innerText = `${members[i].name}`;
            pureBloodList.appendChild(listEl);
        }else if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "half-blood"){
            listEl.innerText = `${members[i].name}`;
            halfBloodList.appendChild(listEl);
        }
    }
}

async function HufflepuffStudentsView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    studentView.style.display='block'
    const members = await getHufflepuffMembers();
    for(let i = 0; i<members.length;i++){
        const listEl = document.createElement('li');
        if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "pure-blood"){
            listEl.innerText = `${members[i].name}`;
            pureBloodList.appendChild(listEl);
        }else if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "half-blood"){
            listEl.innerText = `${members[i].name}`;
            halfBloodList.appendChild(listEl);
        }
    }
}

async function RavenclawStudentsView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    studentView.style.display='block'
    const members = await getRavenclawMembers();
    for(let i = 0; i<members.length;i++){
        const listEl = document.createElement('li');
        if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "pure-blood"){
            listEl.innerText = `${members[i].name}`;
            pureBloodList.appendChild(listEl);
        }else if((members[i].role == "student" || members[i].role == "Student") && members[i].bloodStatus == "half-blood"){
            listEl.innerText = `${members[i].name}`;
            halfBloodList.appendChild(listEl);
        }
    }
}
// Widoki Ministerstwa Magii, Zakonu Feniksa i Armii Dumbeldore'a

const miArOr = document.querySelector(".ministry_army_order_view");
const nazwaZakladki = document.querySelector('.ministry_army_order_view h3');
const membersList = document.getElementById('members');


async function MinistryView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    miArOr.style.display = 'block';
    const ministryImg = document.createElement('img');
    ministryImg.setAttribute('src', 'images/snowy-owl-clipart-harry-potter-10.png');
    miArOr.appendChild(ministryImg);
    nazwaZakladki.innerHTML = 'Ministry of magic';
    const bookTitle = document.createElement('h4');
    bookTitle.innerText = 'List of Ministry of Magic'
    miArOr.appendChild(bookTitle);
}

async function OrderView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    miArOr.style.display = 'block';
    const orderImg = document.createElement('img');
    orderImg.setAttribute('src', 'images/Fenix_2.png');
    miArOr.appendChild(orderImg);
    nazwaZakladki.innerHTML = 'Order Of The Phoenix';
    const bookTitle = document.createElement('h4');
    bookTitle.innerText = 'Order Of The Phoenix list'
    miArOr.appendChild(bookTitle);

}

async function ArmyView(){
    main_house.style.display = "none"
    teach_spells.style.width='35%'
    miArOr.style.display = 'block';
    const armyImg = document.createElement('img');
    armyImg.setAttribute('src', 'images/Water_Magic_Wand.png');
    miArOr.appendChild(armyImg);
    nazwaZakladki.innerHTML = "Dumbeldore's Army";
    const bookTitle = document.createElement('h4');
    bookTitle.innerText = "List of Dumbeldore's Army";
    miArOr.appendChild(bookTitle);

}

// Funckje zwracające  członków danego ugrupowania z podziałem na domy

async function MinistryMembers(houseName){
    const ministryMembers = await getMinistryOfMagicMembers(houseName); 
    console.log(ministryMembers)       ;
    for(let i = 0; i<ministryMembers.length; i++){
        let listEl = document.createElement('li');
            listEl.innerText = `${ministryMembers[i].name}`;
      membersList.appendChild(listEl);
    }
}
async function OrderMembers(houseName){
    const orderMembers = await getHouseOrderOfThePhoenixMembers(houseName);
    console.log(orderMembers);
    for(let i = 0; i<orderMembers.length; i++){
        let listEl = document.createElement('li');
        listEl.innerText = `${orderMembers[i].name}`;
        membersList.appendChild(listEl);
    }
}
async function ArmyMembers(houseName){
    const armyMembers= await  getHouseDumbledoresArmyMembers(houseName);
        console.log(armyMembers);
        for(let i = 0; i<armyMembers.length; i++){
        let listEl = document.createElement('li');
        listEl.innerText = `${armyMembers[i].name}`;
        membersList.appendChild(listEl);
    }
}