console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchData() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderData(json));

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
  console.log(allDog);
  const ul = document.getElementById('dog-breeds')

  // build an allDogBreeds array by taking the main breed in key and add
  // the subbreed in front
  const allDogs = allDog.message
  const allDogBreeds = [];
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

  // this function is called to build the item list
  // it clears out the list first anf build a new one based on the list passed
  // each item in list is given an id for event trigger (change color)
  function listDogs(dogs){
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    dogs.forEach(brd => {
      let dog = document.createElement('li');
      dog.id = brd;
      dog.innerText = brd;
      ul.appendChild(dog);
      // this capture the event when the item line is clicked
      dog.addEventListener('click', changeColor);
    })
  }

  // this function is triiger when a selection is made in the dropdown.
  // it filter out the breed based on selcted value
  // e.target[e.target.selectedIndex].value contains the selected value
  // a blank option was added to html to allow display of all breeds
  function filterDogs(e){
    e.preventDefault;
    let filterList = allDogBreeds;
    const filterbreed = e.target[e.target.selectedIndex].value
    if (filterbreed !== " "){
       filterList = allDogBreeds.filter(breed => { 
      return breed.charAt(0) === filterbreed
    })  
    }
    listDogs(filterList);
  }

  // this is to capture the event of someone changing the dropdown selection
  const opt = document.getElementById('breed-dropdown');
  opt.addEventListener('change', filterDogs);
}

// this change the color of the line item clicked
// e.target.id contains the id of the li clicked
function changeColor(e){
  const li = document.getElementById(e.target.id);
  li.style.color = 'red'
}


document.addEventListener('DOMContentLoaded', function() {
  fetchData()
})