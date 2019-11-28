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
    resetLandingPage();
    SlytherinView();
});
Hgr.addEventListener('click',() => {
    resetLandingPage();
    GryffindorView();
});
Hhu.addEventListener('click',() => {
    resetLandingPage();
    HufflepuffView();
});
Hra.addEventListener('click',() => {
    resetLandingPage();
    RavenclawView();
});



async function randomView(){
    const rand = Math.floor(Math.random() * 4 + 1) ;
    
    if (rand == 1) { return await RavenclawView()};
    if (rand == 2) { return await HufflepuffView()};
    if (rand == 3) { return await SlytherinView()};
    if (rand == 4) { return await GryffindorView()};
    
}
hat.addEventListener('click',() => {
    resetLandingPage();
    randomView()
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
    if (back[i] == 'ra') { return resetLandingPage(), await RavenclawView();};
    if (back[i] == 'hu') { return resetLandingPage(), await HufflepuffView();};
    if (back[i] == 'sl') { return resetLandingPage(), await SlytherinView();};
    if (back[i] == 'gr') { return resetLandingPage(), await GryffindorView();};
    if (back[i] == 'main') { return resetMainPage(), await LandingPage()};
    if (back[i] == 'spells') { return resetLandingPage(), spellsView()};
    if (back[i] == 'teachers') { return resetLandingPage(), teachersView()};

   
}


backPage.addEventListener('click',() => {
    backingBack()
    back.pop()
    back.pop()
});