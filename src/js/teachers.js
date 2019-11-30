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
const btn_teachers = document.querySelector('.btn_teachers');
const main_logo = document.querySelector('.landing_page');
const teachers_list = document.querySelector('.teacher_list');
const wizard = document.querySelector('img.wizard');
const wizard_words = document.querySelector('.wizard_words')
const witek = document.querySelector('.witek');
const teachers = [];
const listOfTeachers = [];

async function getResponse(URL) {
    let response;
    await fetch(URL)
    .then (res => res.json())
    .then (res => response = res);
    return response
  }

//function resetLandingPage(){
//const shiftCss = 
//spells.style.display ="none"
//teach.style.display="none"
//header.style.display = 'none'
//herbs.style.display = 'none'
//main_house.style.display = 'none'
//main_button.style.display = 'none'
//main_spells.style.display = 'none'
//};

async function resetLandingPage(){
  const houseHerb = document.querySelectorAll(".house_herb");
  const miArOrImg = document.querySelectorAll(".ministry_army_order_view img:nth-of-type(2)");
  const miArOrh4 =  document.querySelectorAll(".ministry_army_order_view h4");
  const miArOrLi =  document.querySelectorAll(".ministry_army_order_view li");
  const studentLi =  document.querySelectorAll(".scroll_container li");
  const shiftCss = 
  spells.style.display ="none"
  teach.style.display="none"
  header.style.display = 'none'
  herbs.style.display = 'none'
  main_house.style.display = 'none'
  main_button.style.display = 'none'
  main_teachers.style.display = 'none'
  main_spells.style.display = 'none'
  miArOr.style.display = 'none'
  studentView.style.display='none'
  for (let i = 0; i < houseHerb.length; i++){
      houseHerb[i].remove()
  };
  for (let i = 0; i < miArOrImg.length; i++){
      miArOrImg[i].remove()
  };
  for (let i = 0; i < miArOrh4.length; i++){
      miArOrh4[i].remove()
  };
  for (let i = 0; i < miArOrLi.length; i++){
    miArOrLi[i].remove()
  };
  for (let i = 0; i < studentLi.length; i++){
    studentLi[i].remove()
  };
  for (let i = 0; i < herb_menu.children.length; i++){
      herb_menu.children[i].style.display = 'block'
  };
};

function teachersView(){
back.push('teachers')
main_teachers.style.display="block"
back_page.style.display = 'inline-block'
herb_menu.style.display = "flex"
teach_spells.style.width='50%'

};

function showAllProfesorsUsingApi(){
    async function getTeachers() {
        const characters = await getCharacters();
        for (let i=0; i < characters.length; i++) {
          if (characters[i].role === undefined) {
            continue
          }
          else {
          let a = characters[i].role;
          if (a.indexOf("Professor,") > -1) {
            teachers.push(characters[i]) 
          }
          else {
            continue
          }
          }
        }
        return getNameOfteachers(teachers);

        }
        function getNameOfteachers(x){
            for( i =0; i < x.length; i++){
              function styleListOfTeachers (){
             const li = document.createElement('li')
             btn_teachers.style.display="none";
             teachers_list.appendChild(li);
             teachers_list.style.display="grid";
             li.innerHTML =`${x[i].name} ${x[i].role}`
             wizard.style.display="block";
            }
            styleListOfTeachers();
          }
      }
      getTeachers();
    }
    function letWizardSpeak(){
      wizard_words.style.display="block";
      witek.style.display="block";
    }
    function beQuiet(){
      wizard_words.style.display="none";
      witek.style.display ="none";
    }
    function checkedIfLoad(){

    }

teach.addEventListener('click', resetLandingPage);
teach.addEventListener('click', teachersView);
btn_teachers.addEventListener('click', showAllProfesorsUsingApi);
main_logo.addEventListener('click', checkedIfLoad);
wizard.addEventListener('mouseenter', letWizardSpeak);
wizard.addEventListener('mouseout', beQuiet);