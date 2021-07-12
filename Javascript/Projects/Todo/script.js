let todoText = document.querySelector('#todoText');
let addBtn = document.querySelector('#addBtn');
let pendingWorks = document.querySelector('#pendingWorks');
let doneWorks = document.querySelector('#doneWorks');
let todos = [];

const createTodo = () => {
    let todo = {};
    todo.id = Date.now();
    todo.text = todoText.value

    todos.push(todo)
    todoText.value = ""

    pushTodoToHTML(todo);
}

const doneTodo = (divElm, todo) => {
    divElm.remove()
    pushTodoToDoneBox(todo);
}

const pushTodoToDoneBox = (todo) => {

    let div = document.createElement('div');
    let p = document.createElement('p');
    let span = document.createElement('span');

    div.className = 'todo clearfix rounded border shadow p-3 mt-3';

    p.className = "float-start";
    p.innerHTML = todo.text;

    span.className ='badge bg-danger float-end';
    span.innerHTML = 'Completed';

    div.appendChild(p);
    div.appendChild(span);

    doneWorks.appendChild(div);

}

const pushTodoToHTML = (todo) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let button = document.createElement('button');

    div.className = 'todo clearfix rounded border shadow p-3 mt-3';

    p.className = "float-start";
    p.innerHTML = todo.text;

    button.className ='btn btn-sm btn-primary float-end';
    button.innerHTML = 'Complete';

    button.addEventListener('click', () => doneTodo(div, todo) )

    div.appendChild(p);
    div.appendChild(button);

    pendingWorks.appendChild(div);

}

addBtn.addEventListener('click', createTodo);

