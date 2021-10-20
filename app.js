// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

//Caching the dom elements

const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInfo = document.querySelector('.todo-info');

// 1. Caching the user Elements
// 2. After caching the submit button

// ----->0. Capturing the user input
// ----->1. Creating the todo div
// ----->2. Creating the li element
// ----->3. Creating the buttond
// ----->4. Insert all the elements into the div
// ----->5. Insert hte div elements into the todo list
// ----->6. Clear the user input

// 3. Add event Listener to the check and trash button
// Event Listener
//todoBtn event
todoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    //Caching the user Input
    const userInput = todoInput.value;
    if (userInput) {
    //Creating the todo div
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    //Creating the li element
    const li = document.createElement('li');
    li.innerText = userInput;
    li.className = 'todo-item';
    todoDiv.appendChild(li);
    //Creating the edit buttons
    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    todoDiv.appendChild(editBtn);
    //Creating the Check buttons
    const checkBtn = document.createElement('button');
    checkBtn.className = 'check';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);
    //Creating the trash buttons
    const trashBtn = document.createElement('button');
    trashBtn.className = 'trash';
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    //Appending the div into the todoList
    todoList.appendChild(todoDiv);
    //Clearing the user input
    todoInput.value = '';
    checkToDoList();
    } else {
        alert("You cann't insert an empty task");
    }
});

todoList.addEventListener('click', function(e) {
    const clickedEl = e.target;
    if (clickedEl.className == 'check') {
        const todoDiv = clickedEl.parentElement;
        todoDiv.classList.add( 'completed');
       //todoDiv.removeChild(clickedEl);
       clickedEl.remove();
    } else if (clickedEl.className == 'trash') {
        const todoDiv = clickedEl.parentElement;
        todoDiv.classList.add('drop-effect'); 
        todoDiv.addEventListener('transitionend', function() {
        todoDiv.remove();
        checkToDoList();
        });
    }
    else if  (clickedEl.className == 'edit') {
        const todoDiv = clickedEl.parentElement;
        //console.dir(todoDiv);
        const firstChild = todoDiv.children[0];
        //console.log(firstChild);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'todo-item';
        input.value = firstChild.innerText;
        todoDiv.insertBefore(input, firstChild);
        firstChild.remove();
        clickedEl.innerHTML = '<i class="far fa-save"></i>';
        clickedEl.className = 'save';
    }
    else if  (clickedEl.className == 'save') {
        const todoDiv = clickedEl.parentElement;
        const firstChild = todoDiv.children[0];
        const li = document.createElement('li');
        li.innerText = firstChild.value;
        li.className = 'todo-item';
        todoDiv.insertBefore(li, firstChild);
        firstChild.remove();
        clickedEl.innerHTML = '<i class="fas fa-edit"></i>';
        clickedEl.className = 'edit';
    }
});

//Display a tag after completing all tasks
function checkToDoList() {
    if (todoList.children.length == 0) {
        todoInfo.style.display = 'block';
    } else {
        todoInfo.style.display = 'none';
    }
}
