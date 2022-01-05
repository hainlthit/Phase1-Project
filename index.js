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

    const villagerName = document.createElement('h1')
    villagerName.innerHTML = villager.name

    villagerMenu.appendChild(villagerImage)
    //villagerMenu.appendChild(villagerName)
    // consider mouse-over event to show names

    villagerImage.addEventListener('click', (event) => {        
        const detVillImg = document.querySelector('.villager-image')
        detVillImg.src = villager.image_uri
        
        const detVillName = document.querySelector('.name')
        detVillName.innerText = villager.name

        const detVillGender = document.querySelector('.gender')
        detVillGender.innerText = villager.gender

        const detVillSpecies = document.querySelector('.species')
        detVillSpecies.innerText = villager.species

        const detVillPersonality = document.querySelector('.personality')
        detVillPersonality.innerText = villager.personality

        const detVillBirthday = document.querySelector('.birthday')
        detVillBirthday.innerText = villager.birthday

        const detVillLikes = document.querySelector('.likes')
        detVillLikes.innerText = villager.likes

        const detVillComments = document.getElementById('comment-display')
        detVillComments.innerText = villager.comments
        })

    }


const likeBtn = document.querySelector('.likeBtn')
likeBtn.innerText = "Like ❤️"
document.getElementById("villager-detail").appendChild(likeBtn)
likeBtn.addEventListener("click", (event) => {
    const oldLikes = document.querySelector('.likes')

    const newLikes = +oldLikes.innerText + 1
    oldLikes.innerText = newLikes
})

const dislikeBtn = document.querySelector('.dislikeBtn')
dislikeBtn.innerText = "Dislike ❤️"
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
        event.preventDefault();

        const newComment = event.target.userInput.value
        const commentArea = document.getElementById('userCommentArea')

        commentArea.append(newComment)


        // const userComment = {

        //     comment: newComment
        // }



    //     fetch("http://localhost:3000/villagers", {
    //         headers: { "Content-Type": "application/json" },
    //         method: "POST",
    //         body: JSON.stringify(userComment)
    //     })
    //         .then(r => r.json())
    //         .then(newEntity => renderRamenImg(newEntity))
    //         .catch(error => console.error(error))


    //     event.target.reset()
    // })
    })
}