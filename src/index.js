console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const allDogBreeds = [];
const ul = document.getElementById('dog-breeds')

function main(){
  fetchData()

  let body = document.querySelector('body')
  // body.addEventListener("click", (event) => handleClick(event))
  body.addEventListener("click", handleClick)
  const opt = document.getElementById('breed-dropdown');
  opt.addEventListener('change', filterDogs);
}

function handleClick(event){
  if (event.target.className === 'dog-list'){
    changeColor(event)
  }
}

function fetchData() {

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(dogImg => renderData(dogImg))

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderAllDog(json));
}

//load images fetch to DOM
function renderData(dogImg){
  console.log(dogImg);
  const div1 = document.getElementById('dog-image-container')
  dogImg.message.forEach(element => {
    let dog = document.createElement('img');
    dog.src = element
    div1.appendChild(dog)
  });
}

function renderAllDog(allDog){
  // build an allDogBreeds array by taking the main breed in key and add
  // the subbreed in front
  const allDogs = allDog.message
 
  for (const dogbreed in allDogs ){
    if (allDogs[dogbreed].length > 0) {
      allDogs[dogbreed].forEach(subbreed => {
        let breed = `${subbreed} ${dogbreed}`;
        allDogBreeds.push(breed)
      }) 
    } else {
        allDogBreeds.push(dogbreed);
    }
  }
  
  // inital list off all breeds
  listDogs(allDogBreeds);
}

// this change the color of the line item clicked
// e.target.id contains the id of the li clicked
function changeColor(e){

  if (e.target.style.color === 'red') {
    e.target.style.color = 'black';
  } else {
    e.target.style.color = 'red';
  }
}

// this function is triiger when a selection is made in the dropdown.
// it filter out the breed based on selcted value
// e.target[e.target.selectedIndex].value contains the selected value
// a blank option was added to html to allow display of all breeds
function filterDogs(e){
  e.preventDefault();
  let filterList = allDogBreeds;
  const filterbreed = e.target[e.target.selectedIndex].value
  if (filterbreed !== "all"){
      filterList = allDogBreeds.filter(breed => { 
    return breed.charAt(0) === filterbreed
  })  
  }
  listDogs(filterList);
}

// this function is called to build the item list
// it clears out the list first anf build a new one based on the list passed
// each item in list is given an id for event trigger (change color)
function listDogs(dogs){
  ul.innerHTML = ""
  dogs.forEach(brd => {
    let dog = `<li class="dog-list">${brd}</li> `
    ul.innerHTML += dog
  })
}
main()