console.log("hello")

fetchData()

function fetchData() {
    fetch("http://localhost:3000/ant00")
    .then(resp => resp.json())
    .then(data => renderVillager(data))
}

function renderVillager(villager) {
    const villagerMenu = document.getElementById('villager-menu')
    const villagerImage = document.createElement('img')
    villagerImage.src = villager.icon_uri

    const villagerName = document.createElement('h1')
    villagerName.innerHTML = villager.name

    villagerMenu.appendChild(villagerImage)
    villagerMenu.appendChild(villagerName)
    // consider mouse-over event to show names

    villagerImage.addEventListener('click', (event) => {
        
        const detVillImg = document.querySelector('.villager-image')
        detVillImg.src = villager.image_uri
    })
    
}