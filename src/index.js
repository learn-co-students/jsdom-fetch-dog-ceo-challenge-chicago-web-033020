console.log('%c HI', 'color: firebrick')

const select = document.getElementById('breed-dropdown')
let imageContainer = document.getElementById('dog-image-container')
let breedList = document.getElementById("dog-breeds")

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


//FETCH FUNCTIONS

fetch(imgUrl)
    .then(res => res.json())
    .then(data => generateImages(data.message))

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => generateBreeds(data.message))

    //data appears to be object where each key is a breed and each value is a sort of subtype of the breed. Many values are empty arrays, few have subtypes.








//HELPER FUNCTIONS

function changeColor(element){
    element.style.color = 'purple'
}





function filterList(){
    let letter = select.value
    breedList.querySelectorAll('li').forEach(element => {
        if (element.innerText[0]===letter){
        element.style.display = 'block' } else {
            element.style.display = 'none'
        } 
    })
}


function generateImages(array){
    let html = '<ul>'
    array.forEach(element => html +=`<li><img src=${element}></li>`)
    html +='</ul>'
    imageContainer.innerHTML = html
    return
}

function generateBreeds(object){
    let html = ''
    Object.keys(object).forEach(element => html += `<li>${element}</li>`)
    //the instructions only say to fetch the breeds, so it seems only they keys are relevant for this exercise.
    breedList.innerHTML = html
    document.getElementById("dog-breeds").querySelectorAll('li').forEach(element => element.addEventListener('click', ()=>
    changeColor(element)))
    select.addEventListener('change', filterList)
}



//EVENT LISTENERS
// select.addEventListener('change', filterList)

// document.getElementById("dog-breeds").querySelectorAll('li').forEach(element => element.addEventListener('click', ()=>
//     changeColor(element)))
//the above works but only when it's placed inside the generateBreeds function or copy/pasted directly into the inspection console. I don't know why that is.




//README---------------------------------------------------------------------------------------------------------------------
//## Challenge 1

// This repository includes an `index.html` file that loads an `index.js` file.

// ```js
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// ```

// Add JavaScript so that:

// - on page load
// - fetch the images using the url above ---done
// - parse the response as `JSON`----done
// - add image elements to the DOM **for each** image in the array--done

// ---

// ## Challenge 2

// ```js
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// ```

// After the first challenge is completed, add JavaScript so that:

// - on page load, fetch all the dog breeds using the url above ---- done
// - add the breeds to the page in an `<ul>` (take a look at the included `index.html`) ---- done

// ---

// ## Challenge 3

// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
// font color of a particular `<li>` changes _on click_. This can be a color of
// your choosing. --------done
// When the user clicks any of the dog breed list items, the color the text should
// change.------done

// ---

// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// dropdown. 

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet

//------Done. Initially entire list is populated but filters once selection has been made. 
//as this is all the lab asks for, I call it complete.