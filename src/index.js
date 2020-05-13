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
  listDogs(allDogBreeds);

  function listDogs(dogs){
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    dogs.forEach(brd => {
      let dog = document.createElement('li');
      dog.id = brd;
      dog.innerText = brd;
      ul.appendChild(dog);
      dog.addEventListener('click', changeColor);
    })
  }

  function filterDogs(e){
    debugger;
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
  const opt = document.getElementById('breed-dropdown');
  opt.addEventListener('change', filterDogs);
}



function changeColor(e){
  // debugger;
  const li = document.getElementById(e.target.id);
  li.style.color = 'red'
}


document.addEventListener('DOMContentLoaded', function() {
  fetchData()
})