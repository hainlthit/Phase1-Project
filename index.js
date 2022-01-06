fetchData()

function fetchData() {
    fetch("http://localhost:3000/villagers")
    .then(resp => resp.json())
    .then(data => data.forEach(renderVillager))
}

function renderVillager(villager) {
    const villagerMenu = document.getElementById('villager-menu')
    const villagerImage = document.createElement('img')
    villagerImage.src = villager.icon_uri
    

    const villagerName = document.createElement('div')
    villagerName.innerHTML = villager.name
    villagerName.classList.add("reveal")

    villagerMenu.appendChild(villagerImage)
    //villagerMenu.appendChild(villagerName)
    // consider mouse-over event to show names

    villagerImage.addEventListener('click', (event) => {     
   
        
        const detVillImg = document.querySelector('.villager-image')
        detVillImg.src = villager.image_uri
        
        const detVillName = document.querySelector('.name')
        detVillName.innerText = villager.name

        const detVillGender = document.querySelector('.gender')
        detVillGender.innerText = `Sex: ${villager.gender}`

        const detVillSpecies = document.querySelector('.species')
        detVillSpecies.innerText = `Species: ${villager.species}`

        const detVillPersonality = document.querySelector('.personality')
        detVillPersonality.innerText = `Personality: ${villager.personality}`

        const detVillBirthday = document.querySelector('.birthday')
        detVillBirthday.innerText = `Birthday: ${villager.birthday}`

        const detVillLikes = document.querySelector('.likes')
        detVillLikes.innerText = villager.likes

        const detVillComments = document.getElementById('comment-display')
        detVillComments.innerText = villager.comments


        })

    }


const likeBtn = document.querySelector('.likeBtn')
likeBtn.innerText = " Like  ❤️ "
document.getElementById("villager-detail").appendChild(likeBtn)
likeBtn.addEventListener("click", (event) => {
    const oldLikes = document.querySelector('.likes')

    const newLikes = +oldLikes.innerText + 1
    oldLikes.innerText = newLikes
})

const dislikeBtn = document.querySelector('.dislikeBtn')
dislikeBtn.innerText = "Dislike ✘"
document.getElementById("villager-detail").appendChild(dislikeBtn)
dislikeBtn.addEventListener("click", (event) => {
    const oldLikes = document.querySelector('.likes')

    const newLikes = +oldLikes.innerText - 1
    oldLikes.innerText = newLikes
})


handleForm();

function handleForm() {
    // grab the form from the DOM
    const newVillagerComment = document.getElementById('new-villager')
    // add an addEventListener to the form
    newVillagerComment.addEventListener('submit', (event) => {
        event.preventDefault()


        const newName = event.target['userName'].value
        const newPersonality = event.target['userPersonality'].value
        const newBday = event.target['userBday'].value
        const newSpecies = event.target['userSpecies'].value
        const newGender = event.target['userGender'].value
        const newIcon = event.target['userIcon'].value
        const newImage = event.target['userImage'].value
        const newLikes = event.target['userLikes'].value
        const newComment = event.target['userInput'].value

        const newVillager = {
            name: newName,
            personality: newPersonality,
            birthday: newBday,
            species: newSpecies,
            gender: newGender,
            icon_uri: newIcon,
            image_uri: newImage,
            likes: newLikes,
            comments: newComment
        }
        
        renderVillager(newVillager) 
        event.target.reset()


    })
}