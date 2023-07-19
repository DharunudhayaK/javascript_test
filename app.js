let btnContainer = document.querySelector('#buttonContainer')
let formContainer = document.querySelectorAll('.formLabel')
let emptyDiv = document.querySelector('#empDiv')
let inputTitle = document.getElementById('inputBox')
let contentBox = document.getElementById('contentLabel')
let closePopup = document.getElementById('blurDiv')

document.getElementById('sectionOuter').classList.add('hidden')

let headButton = document.querySelector('.buttonLabel')
headButton.onclick = ((event)=>{
    event.preventDefault()
    document.getElementById('sectionOuter').classList.remove('hidden')
})

let arr = []
btnContainer.onclick = ((event)=>{

    // emptyDiv.style.display = "block"
    // closePopup.style.display = "block"

    event.preventDefault();

    let mainTitleCreate = document.createElement('p')
    mainTitleCreate.setAttribute('class','paraLabel')
    mainTitleCreate.innerHTML = inputTitle.value
    emptyDiv.appendChild(mainTitleCreate)

    let titleCreate = document.createElement('li')
    titleCreate.setAttribute('class','insideList')
    titleCreate.innerHTML = contentBox.value
    emptyDiv.appendChild(titleCreate)
    // console.log(titleCreate.innerHTML)
    
    let editOption = document.createElement('button')
    editOption.innerHTML = "Edit"
    editOption.setAttribute('class','editButton')
    emptyDiv.appendChild(editOption)

    let deleteOption = document.createElement('button')
    deleteOption.innerHTML = "Delete"
    editOption.setAttribute('class','deleteButton')
    emptyDiv.appendChild(deleteOption)

    let updateOption = document.createElement('button')
    updateOption.innerHTML = "Update"
    updateOption.setAttribute('class','updateButton')
    emptyDiv.appendChild(updateOption)

    deleteOption.onclick = (()=>{
        mainTitleCreate.style.display = "none"
        titleCreate.style.display = "none"

        inputTitle.value.style.display = "none"
        contentBox.value.style.display = "none"
    })
    
    
})

closePopup.onclick = (()=>{
    emptyDiv.style.display = "none"
    closePopup.style.display = "none"
})
// console.log(arr)