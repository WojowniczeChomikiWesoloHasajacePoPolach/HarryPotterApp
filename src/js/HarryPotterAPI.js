
//funkcja wysyłająca zapytanie do API
async function getResponse(URL) {
    let response;
    await fetch(URL)
    .then (res => res.json())
    .then (res => response = res);
    return response
  }
  //funkcja losowania domu przez Sorting Hat
  async function sortingHat() {
    let URL = "https://www.potterapi.com/v1/sortingHat";
    const houseName = await getResponse(URL);
    return houseName
  }
  // funkcja zwracająca tablicę postaci
  async function getCharacters() {
    let URL = "https://www.potterapi.com/v1/characters?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const characters = await getResponse(URL);
    return characters
  }
  //dane o jednej postaci, musimy przesłać do funkcji ID danej osoby
  async function getCharacter(characterId) {
      let URL = "https://www.potterapi.com/v1/characters/";
      let key = "?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
      URL = encodeURI(URL+characterId+key);
      let character = await getResponse(URL)
  
      return character[0]
  }
  //funkcja zwracająca tablicę zaklęć
  async function getSpells() {
    let URL = "https://www.potterapi.com/v1/spells?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const spells = await getResponse(URL);
    return spells
  }
  
  async function getSpell(spellId) {
    let URL = "https://www.potterapi.com/v1/spells/";
    let key = "?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    URL = encodeURI(URL+spellId+key);
    let spell = await getResponse(URL)
  
      return spell[0]
  }
  // funkcja zwracająca tablicę zawierającą nauczycieli
  async function getTeachers() {
    const characters = await getCharacters();
    const teachers = [];
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
    return console.log(teachers)
  }
  //fukcja zwracająca tablicę studentów
  async function getStudents() {
    const characters = await getCharacters();
    const students = [];
    for (let i=0; i < characters.length; i++) {
      if (characters[i].role === undefined) {
        continue
      }
      else if (characters[i].role === "Student" || characters[i].role === "student") {
        students.push(characters[i]) 
      }
      else {
        continue
      }
    }
    return students
  }
  //funkcja zwracająca domy
  async function getHouses() {
    let URL = "https://www.potterapi.com/v1/houses?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const houses = await getResponse(URL);
    return houses
  }
  //funkcja zwracająca dany dom, jako argument trzeba podać id domu
  async function getHouse(houseId) {
    let URL = "https://www.potterapi.com/v1/houses/";
    let key = "?key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    URL = encodeURI(URL+houseId+key);
    let house = await getResponse(URL);
    return house[0]
  }
  //Członkowie Gryffindor
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
  //Członkowie Slytherin
  async function getSlytherinMembers() {
    let URL = "https://www.potterapi.com/v1/characters?house=Slytherin&key=$2a$10$HHO4w0IzBGVFiVzfmvOV6.KVRaloeOOGZAyhOrTHO8vyLGjge1gAG";
    const slytherinMembers = await getResponse(URL);
    return slytherinMembers
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
      case "Hafflepuff":
        houseMembers = await getHafflepuffMembers();
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
      case "Hafflepuff":
        houseMembers = await getHafflepuffMembers();
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
      case "Hafflepuff":
        houseMembers = await getHafflepuffMembers();
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
  //funkcja zwracająca tablicę wszystkich członków DumbledoresArmy
  async function allDumbledoresArmyMembers() {
    let dumbledoresArmyMembers = [];
    let characters = await getCharacters();
    for (let i=0; i < characters.length; i++) {
      if (characters[i].dumbledoresArmy === undefined) {
        continue
      }
      else if (characters[i].dumbledoresArmy === true) {
        dumbledoresArmyMembers.push(characters[i]) 
      }
      else {
        continue
      }
    }
    return dumbledoresArmyMembers
  }
  //funkcja zwracająca tablicę wszystkich członków zakonu feniksa
  async function allOrderOFThePhoenixMembers() {
    let orderOfThePhoenixMembers = [];
    let characters = await getCharacters();
    for (let i=0; i < characters.length; i++) {
      if (characters[i].orderOfThePhoenix === undefined) {
        continue
      }
      else if (characters[i].orderOfThePhoenix === true) {
        orderOfThePhoenixMembers.push(characters[i]) 
      }
      else {
        continue
      }
    }
    return orderOfThePhoenixMembers
  }
  //funkcja zwracająca tablicę wszystkich członków ministerstwa magii
  async function allMinistryOfMagicMembers() {
    let MinistryOfMagicMembers = [];
    let characters = await getCharacters();
    for (let i=0; i < characters.length; i++) {
      if (characters[i].ministryOfMagic === undefined) {
        continue
      }
      else if (characters[i].ministryOfMagic === true) {
        ministryOfMagicMembers.push(characters[i]) 
      }
      else {
        continue
      }
    }
    return ministryOfMagicMembers
  }
  
  
  
  
    
  
  
  
  
  
    
  