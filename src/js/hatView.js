const hat = document.querySelector(".sorting_hat");
const mainButtons = document.querySelector(".main_button");
const backPage = document.querySelector(".back_page");
const landingPage = document.querySelector(".landing_page");
const Hsl = document.querySelector(".h_sl");
const Hgr = document.querySelector(".h_gr");
const Hra = document.querySelector(".h_ra");
const Hhu = document.querySelector(".h_hu");
// Buttony poszczególnych domów

const SlytherinClick = herbs.children[0];
const GryffindorClick = herbs.children[1];
const HufflepuffClick = herbs.children[2];
const RavenclawClick = herbs.children[3];


let back = ['main'];

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


Hsl.addEventListener('click',() => {
    //animationDomOut();
    setTimeout( () => {resetLandingPage()}, 000);
    setTimeout( () => {SlytherinView()}, 000);
    //setTimeout( () => {animationDomIn()}, 3000);
});
Hgr.addEventListener('click',() => {
    //animationDomOut();
    setTimeout( () => {resetLandingPage()}, 000);
    setTimeout( () => {GryffindorView()}, 000);
    //setTimeout( () => {animationDomIn()}, 3000);
});
Hhu.addEventListener('click',() => {
   // animationDomOut();
    setTimeout( () => {resetLandingPage()}, 000);
    setTimeout( () => {HufflepuffView()}, 000);
    //setTimeout( () => {animationDomIn()}, 3000);
});
Hra.addEventListener('click',() => {
    //animationDomOut();
    setTimeout( () => {resetLandingPage()}, 000);
    setTimeout( () => {RavenclawView()}, 000);
    //setTimeout( () => {animationDomIn()}, 3000);
});
// Alternatywa dla przycisków od studentów, armii, ,ministerstwa i zakonu i studentów
students.lastElementChild.addEventListener('click',() =>{
    resetLandingPage();
    if (back[back.length - 1] == 'Gryffindor'){ return GryffindorStudentsView()};
    if (back[back.length - 1] == 'Slytherin'){ return SlytherinStudentsView()};
    if (back[back.length - 1] == 'Hufflepuff'){ return HufflepuffStudentsView()};
    if (back[back.length - 1] == 'Ravenclaw'){ return RavenclawStudentsView()};
});
blockButtons.children[0].addEventListener('click',() =>{
    resetLandingPage();
    MinistryView();
    MinistryMembers(back[back.length - 2]);
});

blockButtons.children[1].addEventListener('click',() =>{
    resetLandingPage();
    OrderView();
    OrderMembers(back[back.length - 2]);
});

blockButtons.children[2].addEventListener('click',() =>{
    resetLandingPage();
    ArmyView();
    ArmyMembers(back[back.length - 2]);
});

async function randomView(){
    const rand = Math.floor(Math.random() * 4 + 1) ;
    
    if (rand == 1) { return await RavenclawView()};
    if (rand == 2) { return await HufflepuffView()};
    if (rand == 3) { return await SlytherinView()};
    if (rand == 4) { return await GryffindorView()};
}

hat.addEventListener('click',() => {
    //revAnimationHat();
    setTimeout( () => {resetLandingPage()}, 000);
    setTimeout( () => {randomView()}, 000);
   // setTimeout( () => {animationHat()}, 3000);
});


async function resetMainPage(){

    const shiftCss = 
    spells.style.display ="none"
    teach.style.display="none"
    characters.style.display = "none"
    header.style.display = 'none'
    herbs.style.display = 'none'
    herb_menu.style.display = 'none'
    main_house.style.display = 'none'
    main_teachers.style.display = 'none'
    main_spells.style.display = 'none'
    back_page.style.display = 'none'
    miArOr.style.display = 'none'
    studentView.style.display='none'
    main_characters.style.display = "none"
    char_title.innerHTML = "";
};


async function LandingPage(){
    back.push('main');
    const shiftCss = 
    teach_spells.style.width='30%'
    characters.style.display = "block";
    spells.style.display ="block"
    teach.style.display="block"
    header.style.display = "block"
    herbs.style.display = "block"
    mainButtons.style.display = 'flex'
    main_button.style.order = '-1'
    main_button.style.display = "block"
    
};


landingPage.addEventListener('click',() => {
    resetMainPage();
    LandingPage();
});



//Back Button
async function backingBack(){
    const i = back.length - 2;
    if (back[i] == 'Ravenclaw') { return AnRav()};
    if (back[i] == 'Hufflepuff') { return resetLandingPage(), await HufflepuffView();};
    if (back[i] == 'Slytherin') { return resetLandingPage(), await SlytherinView();};
    if (back[i] == 'Gryffindor') { return resetLandingPage(), await GryffindorView();};
    if (back[i] == 'main') { return resetMainPage(), await LandingPage()};
    if (back[i] == 'spells') { return resetLandingPage(), spellsView()};
    if (back[i] == 'teachers') { return resetLandingPage(), teachersView()};
    if (back[i] == 'StGr') { return resetLandingPage(), GryffindorStudentsView()};
    if (back[i] == 'StSl') { return resetLandingPage(), SlytherinStudentsView()};
    if (back[i] == 'StHu') { return resetLandingPage(), HufflepuffStudentsView()};
    if (back[i] == 'StRa') { return resetLandingPage(), RavenclawStudentsView()};
    if (back[i] == removeChar(back[i]) + 'Ar') { return resetLandingPage(), ArmyView(), ArmyMembers(removeChar(back[i]));}
    if (back[i] == removeChar(back[i]) + 'Or') { return resetLandingPage(), OrderView(), OrderMembers(removeChar(back[i]));}
    if (back[i] == removeChar(back[i]) + 'Mi') { return resetLandingPage(), MinistryView(), MinistryMembers(removeChar(back[i]));}
    if (back[i] == 'characters') {return resetLandingPage (), charactersView()};
    
    
    function removeChar(str) {
        return str.slice(0, -2);
    }
}


function AnRav(){
        //animationDomRevIn();
        setTimeout( () => {resetLandingPage()}, 000);
        setTimeout( () => {RavenclawView()}, 000);
        //setTimeout( () => {animationDomRevOut()}, 3000);
}

backPage.addEventListener('click',() => {
    backingBack()
    back.pop()
    back.pop()
});


// Przzejścia
function animationDomOut() {
    main_house.style.animation = 'domOut 3s';
};

function animationDomIn() {
    main_house.style.animation = 'domIn 3s';
};

function animationDomRevOut() {
    main_house.style.animation = 'domRevOut 3s';
};

function animationDomRevIn() {
    main_house.style.animation = 'domRevIn 3s';
};

const allll = document.querySelectorAll('div');

function animationHat() {
    for(let i = 0; i< allll.length; i++){
        allll[i].style.animation = 'anHat 3s';
    }
};

function revAnimationHat() {
    for(let i = 0; i< allll.length; i++){
        allll[i].style.animation = 'revHat 3s';
    }
};

