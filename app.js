// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event litsener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);

// functions

function addTodo(event) {
    //to stop auto browser reload
    event.preventDefault();
    //checking button functionality
    console.log('Hey! You added a todo');
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creating the todo
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = todoInput.value ;
    todoDiv.appendChild(newTodo);
    //the check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = ' <i class="fa-solid fa-check"></i> ';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //the check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = ' <i class="fa-solid fa-trash"></i> ';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input after adding todo
    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    //delete the todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    //check the todo done
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}