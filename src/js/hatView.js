const hat = document.querySelector(".sorting_hat");
const mainButtons = document.querySelector(".main_button");
const backPage = document.querySelector(".back_page");
const landingPage = document.querySelector(".landing_page");
const Hsl = document.querySelector(".h_sl");
const Hgr = document.querySelector(".h_gr");
const Hra = document.querySelector(".h_ra");
const Hhu = document.querySelector(".h_hu");

let back = ['main'];


Hsl.addEventListener('click',() => {
    animationDomOut();
    setTimeout( () => {resetLandingPage()}, 3000);
    setTimeout( () => {SlytherinView()}, 3000);
    setTimeout( () => {animationDomIn()}, 3000);
});
Hgr.addEventListener('click',() => {
    animationDomOut();
    setTimeout( () => {resetLandingPage()}, 3000);
    setTimeout( () => {GryffindorView()}, 3000);
    setTimeout( () => {animationDomIn()}, 3000);
});
Hhu.addEventListener('click',() => {
    animationDomOut();
    setTimeout( () => {resetLandingPage()}, 3000);
    setTimeout( () => {HufflepuffView()}, 3000);
    setTimeout( () => {animationDomIn()}, 3000);
});
Hra.addEventListener('click',() => {
    animationDomOut();
    setTimeout( () => {resetLandingPage()}, 3000);
    setTimeout( () => {RavenclawView()}, 3000);
    setTimeout( () => {animationDomIn()}, 3000);
});
// Alternatywa dla przycisków od studentów, armii, ,ministerstwa i zakonu
students.lastElementChild.addEventListener('click',() =>{
    resetLandingPage();
    if (back[back.length - 1] == 'gr'){ return GryffindorStudentsView()};
    if (back[back.length - 1] == 'sl'){ return SlytherinStudentsView()};
    if (back[back.length - 1] == 'hu'){ return HufflepuffStudentsView()};
    if (back[back.length - 1] == 'ra'){ return RavenclawStudentsView()};
});
blockButtons.children[0].addEventListener('click',() =>{
    resetLandingPage();
    MinistryView();
    if (back[back.length - 1] == 'gr'){ return MinistryMembers("Gryffindor")};
    if (back[back.length - 1] == 'sl'){ return MinistryMembers("Slytherin")};
    if (back[back.length - 1] == 'hu'){ return MinistryMembers("Hufflepuff")};
    if (back[back.length - 1] == 'ra'){ return MinistryMembers("Ravenclaw")};
});
blockButtons.children[1].addEventListener('click',() =>{
    resetLandingPage();
    OrderView();
    if (back[back.length - 1] == 'gr'){ return OrderMembers("Gryffindor")};
    if (back[back.length - 1] == 'sl'){ return OrderMembers("Slytherin")};
    if (back[back.length - 1] == 'hu'){ return OrderMembers("Hufflepuff")};
    if (back[back.length - 1] == 'ra'){ return OrderMembers("Ravenclaw")};
});
blockButtons.children[2].addEventListener('click',() =>{
    resetLandingPage();
    ArmyView();
    if (back[back.length - 1] == 'gr'){ return ArmyMembers("Gryffindor")};
    if (back[back.length - 1] == 'sl'){ return ArmyMembers("Slytherin")};
    if (back[back.length - 1] == 'hu'){ return ArmyMembers("Hufflepuff")};
    if (back[back.length - 1] == 'ra'){ return ArmyMembers("Ravenclaw")};
});

async function randomView(){
    const rand = Math.floor(Math.random() * 4 + 1) ;
    
    if (rand == 1) { return await RavenclawView()};
    if (rand == 2) { return await HufflepuffView()};
    if (rand == 3) { return await SlytherinView()};
    if (rand == 4) { return await GryffindorView()};
    
}

hat.addEventListener('click',() => {
    revAnimationHat();
    setTimeout( () => {resetLandingPage()}, 3000);
    setTimeout( () => {randomView()}, 3000);
    setTimeout( () => {animationHat()}, 3000);
});


async function resetMainPage(){

    const shiftCss = 
    spells.style.display ="none"
    teach.style.display="none"
    header.style.display = 'none'
    herbs.style.display = 'none'
    herb_menu.style.display = 'none'
    main_house.style.display = 'none'
    main_teachers.style.display = 'none'
    main_spells.style.display = 'none'
    back_page.style.display = 'none'
    miArOr.style.display = 'none'
    studentView.style.display='none'
    };


async function LandingPage(){
    back.push('main');
    const shiftCss = 
    teach_spells.style.width='30%'
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




async function backingBack(){
    const i = back.length - 2;
    if (back[i] == 'ra') { return zzz()};
    if (back[i] == 'hu') { return resetLandingPage(), await HufflepuffView();};
    if (back[i] == 'sl') { return resetLandingPage(), await SlytherinView();};
    if (back[i] == 'gr') { return resetLandingPage(), await GryffindorView();};
    if (back[i] == 'main') { return resetMainPage(), await LandingPage()};
    if (back[i] == 'spells') { return resetLandingPage(), spellsView()};
    if (back[i] == 'teachers') { return resetLandingPage(), teachersView()};

   
}
function zzz(){
        animationDomRevIn();
        setTimeout( () => {resetLandingPage()}, 3000);
        setTimeout( () => {RavenclawView()}, 3000);
        setTimeout( () => {animationDomRevOut()}, 3000);
}

backPage.addEventListener('click',() => {
    backingBack()
    back.pop()
    back.pop()
});



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

