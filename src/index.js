const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const main = () => {
    getImages()
    getBreeds()
}

const dogImg = (img) => {
    let imgContainer = document.getElementById('dog-image-container')

    let dogImg = document.createElement('img')
    dogImg.src = img

    imgContainer.appendChild(dogImg)
}

const getImages = () => {
    fetch(imgUrl)
        .then(response => {
            return response.json()
        })
        .then(dogImgs => {
            const dogImgsArray = dogImgs['message']
            
            for (const img of dogImgsArray) {
                dogImg(img)
            }
        })
}

const dogBreed = (breed) => {
    let breedsList = document.getElementById('dog-breeds')

    let breedListItem = document.createElement('li')
    breedListItem.innerText = breed

    breedsList.appendChild(breedListItem)
}

const breedColor = () => {
    let breedListItems = document.getElementsByTagName('li')

    for (const breedListItem of breedListItems) {
        breedListItem.addEventListener('click', (event) => {
            breedListItem.style.color = 'red'
        })
    }
}

const filterBreedList = () => {
    let select = document.getElementById('breed-dropdown')
    let breedListItems = document.querySelectorAll('li')
    
    select.addEventListener('change', (event) => {
        let selectValue = select.value
        
        breedListItems.forEach(breed => {
            if (breed.innerText[0] === selectValue) {
                breed.style.display = 'block'
            } else {
                breed.style.display = 'none'
            }
        })
    })
}

const getBreeds = () => {
    fetch(breedUrl)
        .then(response => {
            return response.json()
        })
        .then(dogBreeds => {
            const dogBreedsArray = dogBreeds['message']

            for (const breed in dogBreedsArray) {
                dogBreed(breed)
            }
            breedColor()
            filterBreedList()          
        })
}

main()