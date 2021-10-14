import React, { useState, useEffect } from 'react'

function Todo() {
    const [todoValue, setTodoValue] = useState('')
    let todosList = JSON.parse(localStorage.getItem('Todo_simple-todo-list-app'))
    const [list, setList] = useState(todosList?todosList:[])

    const handleAddTodo = () =>  {
        setList([...list, todoValue])
        setTodoValue('')
    }

    const handleDelTodo = (key) => {
        const newList = list.filter((Todoitem, idx) => {
            return idx !== key
        })
        setList(newList)
    }

    useEffect(() => {
        localStorage.setItem('Todo_simple-todo-list-app', JSON.stringify(list))
    }, [list])

    return(
        <div className="todo-div">
            <h1>TODO LIST</h1>
            <input type="text" id="input-todo" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button id="add-todo" onClick={handleAddTodo}>Add</button>
            <ul>
            {list ?list.map((todoItem, key) => {return(
                <li key={key} >{todoItem} <button onClick={() => handleDelTodo(key)}>X</button></li> 
            )}) : null}
            </ul>
        </div>
    )
}

export default Todo