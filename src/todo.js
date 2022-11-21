link ="http://localhost:8080/todos"

//fetching all the todos

const fetchAllTodos = (todo) => {
    const todoData = JSON.stringify(todo);
    fetch(link, {
        method: "GET",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => { 
            data.forEach((todo) => {
                addTodoElement(todo)
            })
        })
        .catch((error) => { console.log(error) })
        
}
fetchAllTodos();//invoking the fetchAllTodos funtion


//create a todo
const createTodo = (todo) => {
    const todoData=JSON.stringify(todo)
    fetch(link, {
        method: "POST",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((data) => {
            
            addTodoElement(data)
         
        }).catch((error)=>{console.log(error)})
 }



const todoInput = document.getElementById('todo');
const saveBtn = document.getElementById('save');
const tableBody = document.getElementById('tableBody');

// creat a function 'addTodoElement' so that we can reuse the tableRow and todoTd
const addTodoElement = (todo) => {
    
         const{activity} =  todo
        const tableRow = document.createElement("tr");
    
        const todoTd = document.createElement("td");
        todoTd.innerHTML = activity;
        tableRow.appendChild(todoTd)
    
        tableBody.appendChild(tableRow);
          
    }

//pick values to given element
// const getElementValue = (element) => {
//     return element.value;
// }

const getElementValue = (element) => {
    return element.value
} 

// on button click
    saveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // picks the value of the first name
        const todoValue = getElementValue(todoInput);
        if (todoValue === "") {
            alert("please enter a task to do")
        } else {
            const todo={activity:todoValue}
            createTodo(todo)// invokes the createTodo function
            // addTodoElement(todo)
        }
    
})
