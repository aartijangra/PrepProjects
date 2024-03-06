const todolist = [];
renderToDolist();
function renderToDolist(){
    let todolistHTML = '';
    for(let i=0; i<todolist.length; i++){
        const todoobject = todolist[i];
        //const name = todoobject.name;
        const {name , dueDate} = todoobject;
        //const dueDate = todoobject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick= "
                todolist.splice(${i},1);
                renderToDolist();
            " class= "deletebtn">Delete</button> 
        `;
        todolistHTML += html;
    } 
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
function addtodo(){
    const inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value;
    const dateEle = document.querySelector('.js-duedate');
    const dueDate = dateEle.value;
    todolist.push({name: name,
        dueDate: dueDate});

    //after adding the value to the array turn back the input to blank
    inputEle.value='';
    renderToDolist();
}