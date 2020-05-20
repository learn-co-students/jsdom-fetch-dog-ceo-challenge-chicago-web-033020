document.addEventListener('DOMContentLoaded', function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogImageContainer = document.getElementById('dog-image-container')

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(data => console.log(data.message))

})