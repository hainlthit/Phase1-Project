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

        const newComment = document.getElementById('comment-display')
        newComment.innerText = event.target.userInput.value
        

        //commentArea.append(newComment)


        let villagerObj  = {
            // ["file-name"]: dog05,
            // name: Baxter,
            // personality: Happy,
            // ["birthday-string"]: February 1,
            // birthday: 2/2,
            // species: Dog,
            // gender: Male,
            // icon_uri: https://acnhapi.com/v1/icons/villagers/43,
            // image_uri: https://acnhapi.com/v1/images/villagers/43,
            // likes: 5,
            comments: newComment
        }

        updateComment(villagerObj);

        event.preventDefault();

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

// function fetchData() {
//     fetch("http://localhost:3000/villagers")
//     .then(resp => resp.json())
//     .then(data => data.forEach(renderVillager))
// }

function updateComment(villagerObj) {
    fetch(`http://localhost:3000/villagers/${id}`,
    {
    method: "PATCH",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(villagerObj)
    })
    .then(res => res.json())
    .then(villager => console.log(villager))
}