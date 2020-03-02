var listElement = document.querySelector("ul");
var inputElement = document.querySelector(".input");
var buttonElement = document.querySelector(".btn-add");

var todos = JSON.parse(localStorage.getItem('list_todos') || [])

var todos = [
    'Fazer café',
    'Estudar javascript',
    'Acessar rocketseat'
];

renderTodos = () => {
    listElement.innerHTML = "";

    for (todo of todos) {
        var itemElement = document.createElement('li');
        console.log(itemElement);
        var text = document.createTextNode( todo);

        var linkelement = document.createElement('a');
        linkelement.setAttribute("href", "#");
        var linktext = document.createTextNode("excluir");

        linkelement.appendChild(linktext);

        var pos = todos.indexOf(todo);
        console.log(pos)

        linkelement.setAttribute("onclick","deletTodo("+ pos +")")

        console.log(text);
        listElement.appendChild(itemElement);
        console.log(listElement);
        itemElement.appendChild(text);
        itemElement.appendChild(linkelement)
    }
}
renderTodos()

addTodo = () => {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";

    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo;


deletTodo = (pos) => {
    todos.splice(pos, 1);
    
    renderTodos();
    saveToStorage()
}

saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos) );
}