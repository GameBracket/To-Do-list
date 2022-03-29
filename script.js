let addToDobutton = document.getElementById('addToDo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addToDobutton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('todos')
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        todoContainer.removeChild(paragraph);
    })
})
