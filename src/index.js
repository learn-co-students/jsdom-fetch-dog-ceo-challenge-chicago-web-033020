const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function main() {
    getDogImgs()
    getDogBreeds()
    filterDogBreed()
}

function getDogImgs() {
    fetch(imgUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        let imageHolder = document.getElementById('dog-image-container');
    
        const imagesArray = object["message"]
    
        for (const image of imagesArray) {
            let dogImage = document.createElement('img')
            dogImage.src = image
            imageHolder.appendChild(dogImage)
        }
    })
}

function getDogBreeds() {
    fetch(breedUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        let breedList = document.getElementById('dog-breeds')

        const breedsObj = object["message"]

        for (const breed in breedsObj) {
            let dogBreed = document.createElement('li')
            changeDogBreedItemColor(dogBreed)
            dogBreed.innerText = breed
            breedList.appendChild(dogBreed)
        }
    })
}

function changeDogBreedItemColor(element) {    
    element.addEventListener('click', function() {
        element.style.color = 'red';
    })
}

function filterDogBreed() {
    let dropdownFilterValue = document.getElementById('breed-dropdown').value
    let breedList = document.getElementById('dog-breeds')
    let breedListItems = document.getElementsByTagName('li')

    for (let i = 0; i < breedListItems.length; i++) {
        if (dropdownFilterValue === 'a' && breedListItems[i].textContent[0] === 'a') { 
            console.log(breedListItems[i])
        } else if (dropdownFilterValue === 'b' && breedListItems[i].textContent[0] === 'b') {
            console.log(breedListItems[i])
        } else if (dropdownFilterValue === 'c' && breedListItems[i].textContent[0] === 'c') {
            console.log(breedListItems[i])
        } else if (dropdownFilterValue === 'd' && breedListItems[i].textContent[0] === 'd') {
            console.log(breedListItems[i])
        }   
    }
}

main()