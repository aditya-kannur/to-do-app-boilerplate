var input = document.getElementById("input")
var addButton = document.getElementById("button")
var toDoList = document.getElementById("todolist")

var toDoArray = []

addButton.addEventListener("click", () => {
    toDoArray.push(input.value)
    console.log(toDoArray)
    input.value = null
    showToDo()
})

function showToDo (){
    toDoList.innerHTML = null
    toDoArray.forEach((element, index) => {
        let list = document.createElement("li")
        list.innerText = element


        let editButton = document.createElement("button")
        editButton.innerText = "edit"
        editButton.addEventListener("click", ()=>{
            editList(index)
        })


        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete"
        deleteButton.addEventListener("click", ()=> {
            deleteList(index)
        })
        list.append(editButton, deleteButton)
        toDoList.append(list)
    })
}

function editList(index){
    let updatedValue = prompt("New value")
    toDoArray.splice(index, 1, updatedValue)
    showToDo()
}
function deleteList(index){
    toDoArray.splice(index, 1)
    showToDo()
}
