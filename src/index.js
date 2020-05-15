document.addEventListener("DOMContentLoaded", function() {
  console.log("Loaded");
  getImages();
  getBreeds();
})

// ---- dog images ----

function getImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    //  * test *
    // .then(data => console.log(data));
    .then(data => {
      // iterate through each item and call addImage
      // data.message.forEach(image => addImage(image))

      images = Object.values(data.message);
      images.forEach(function (image) {
        const img = document.createElement("img");
        document.querySelector("#dog-image-container").appendChild(img).src = image;
      });
    });
}  

// ---- dog breeds ----

function getBreeds() { 
  const breedUrl = "https://dog.ceo/api/breeds/list/all" 
  fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    // Object.keys returns array of keys
    breeds = Object.keys(data.message);
    breeds.forEach(function (breed) {
      const li = document.createElement("li");
      document.querySelector("#dog-breeds").appendChild(li).innerHTML = breed;
      li.addEventListener("click", function() {
        li.style.color = "red"
      });
    });
  });
}

