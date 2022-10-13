const url = 'https://breakingbadapi.com/api/characters'

let infoChar = document.querySelector('#infosChar')

// creating asynchronous function for API information

async function getInfo() {
  const response = await fetch(url)
  const data = await response.json();
 
  data.map((info) => {

    // creating all elements containers

    let div = document.createElement("div")
    let divImg = document.createElement("div")
    let divInfos = document.createElement("div")
    let name = document.createElement("p")
    let imgs = document.createElement("img")
    let nickname = document.createElement("p")
    let occupation = document.createElement("p")
    let birthday = document.createElement("p")
    let status = document.createElement("p")
         
    // adjusting date format to dd/mm/yyyy

    let fixBirthday = info.birthday   

    if (fixBirthday == "Unknown") {
      fixBirthday = "Unknown"
    } else {
      let day = fixBirthday.substr(3,2)
      let month = fixBirthday.substr(0,2)
      let year = fixBirthday.substr(6,5)
      fixBirthday = `${day}/${month}/${year}`
    }

    // catching information from API and putting in variables

    let fixStatus = info.status
    
    imgs.src = info.img
    name.innerText = `Name: ${info.name}`
    nickname.innerText = `Nickname: ${info.nickname}`
    occupation.innerText = `Occupation: ${info.occupation}`
    birthday.innerText = `Birthday: ${fixBirthday}`

    // creating an "span" element to ajust the status color

    let container = document.createElement("span")

    status.innerText = "Status: "
     
     if (fixStatus == "Alive") {
      status.appendChild(container).classList.add("alive")
     } else if (fixStatus == "Unknown") {
      status.appendChild(container)
     } else {
      status.appendChild(container).classList.add("dead")
     }
     
     container.innerText = fixStatus

    // inputing information in containers

    divImg.appendChild(imgs).classList.add("image-character")
    divInfos.appendChild(name)
    divInfos.appendChild(nickname)
    divInfos.appendChild(occupation)
    divInfos.appendChild(birthday)
    divInfos.appendChild(status)
    
    // inputing containers in to main container

    div.appendChild(divImg).classList.add("img-div")
    div.appendChild(divInfos).classList.add("char-div")
    infoChar.appendChild(div).classList.add("info-div")

  })
}
getInfo()
