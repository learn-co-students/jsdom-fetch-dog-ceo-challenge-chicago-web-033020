console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogBreedsList = document.querySelector('#dog-breeds');
const eachBreed = document.getElementsByClassName('each-breed');


document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
  fetchDogBreeds();
  filterBreeds();
  // breedChangeColorListener()



})

function fetchDogImages(){
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      const dogImages = json.message
      dogImages.forEach(imageUrl => loadDogImages(imageUrl));

    })
} 

function loadDogImages(imageUrl) {
  const dogImageContainer = document.querySelector('#dog-image-container');
  dogImageContainer.innerHTML += `<p><img src="${imageUrl}" alt="dog image"></p>`
}

let breeds = [];

function fetchDogBreeds(){
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      breeds = Object.keys(json.message);
      insertBreeds(breeds);
    })
}

function insertBreeds(breeds){
  dogBreedsList.innerHTML = '';
  breeds.forEach(breed => {
    dogBreedsList.innerHTML += `<li class="each-breed">${breed}</li>`
  });
  
  // breedChangeColorListener();
  dogBreedsList.addEventListener('click', changeBreedLiColor);
}

// function breedChangeColorListener() {
//   document.querySelectorAll('.each-breed').forEach(breed => {
//     breed.addEventListener('click', (event) => {
//         event.target.style.color = 'red';
//     })
//   })
// }

function changeBreedLiColor(event) {
  if (event.target.className === 'each-breed') {
    event.target.style.color = 'red';
  }
}

function filterBreeds() {
  const breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', (event) => {
    selectBreedsStartingWith(event.target.value);
    console.log(event.target.value)
  });
}

function selectBreedsStartingWith(letter) {
  const selectedBreeds = breeds.filter((breed) => 
    breed[0] == letter
  );

  insertBreeds(selectedBreeds);

  // )
  // if (event.target.value === breed[0]) {
  //   insertBreed(breed)
  // }
}

  // breedDropdown.addEventListener('select', event => {
  //   if (breed[0] === event.target.value) {
  //     dogBreedsList.innerHTML += `<li class="each-breed">${breed}</li>`
  //   }
  // })