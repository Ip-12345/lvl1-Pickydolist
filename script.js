const todoinput = document.getElementById('todoinput');
const addtodobtn = document.getElementById('addtodobtn');
const todolist = document.getElementById('todolist');

addtodobtn.addEventListener('click', addtodo);
todoinput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addtodo();
    }
});

function addtodo() {
    const todotext = todoinput.value.trim();
    if (todotext !== '') {
        const li = document.createElement('li');
        li.textContent = todotext;
        todolist.appendChild(li);
        todoinput.value = '';
    }
}