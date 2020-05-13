const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function randomHexString(n=6) {
    return "#"+[...Array(n).keys()].map(ho=>"ABCDEF0123456789"[Math.floor(16*Math.random())]).join("")
}

document.addEventListener("DOMContentLoaded",
    function() {
        const images = document.getElementById('dog-image-container')
        const breeds = document.getElementById('dog-breeds')
        const ops = document.getElementById('breed-dropdown')

        ops.addEventListener('change',
            function() {
                for (const breed of breeds.querySelectorAll('li')) {
                    breed.style.display = (((breed.id[0] === ops.value) || ops.value === 'all') ? "block" : "none") 
                }
            }
        )

        for (let i = 97; i < 97 + 26; i++) {
            const op = document.createElement('option')
            op.value = String.fromCharCode(i)
            op.innerText = String.fromCharCode(i)
            ops.appendChild(op)
        }

        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(
            img => {
                const imgTag = document.createElement('img')
                imgTag.src = img
                images.appendChild(imgTag)
            }
        ))

        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => Object.keys(json.message).forEach(
            breed => {
                const breedLi = document.createElement('li')
                breedLi.innerHTML = breed
                breedLi.id = breed
                breedLi.colorOn = false
                breedLi.style.display = 'block'
                breeds.appendChild(breedLi)
            }
        ))
    }
)

document.addEventListener('click',
    (e) => {
        if (e.target.tagName === 'LI') {
            const elm = document.getElementById(e.target.id)
            elm.colorOn = !elm.colorOn
            if (elm.colorOn) {
                elm.style.color = randomHexString()
                console.log(`${elm.id} now has color ${elm.style.color}`)
            }
            else {
                elm.style.color = null
                console.log(`${elm.id} is now Back in Black`)
            }
        }
    }
)
