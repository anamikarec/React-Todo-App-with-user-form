import React from "react";
import { useState } from "react";
import {v4 as uuid} from "uuid";
import {TodoList} from "./TodoList"

const Todo = () => {
    const [query,setQuery] = useState("");
    const [todo,setTodo] = useState([]);
    const handleClick = () => {
        const payload = {
            title : query,
            status : "false",
            id : uuid()
        }
        const updatedTodo = [...todo,payload];
        setTodo(updatedTodo);
    }
    console.log(todo);
    const handleDelete = (id) => {
        const updatedTodo = todo.filter(item => item.id !== id)
        setTodo(updatedTodo);
    }
    return (
        <>
        <h1>Todo App with Authorization and hidden feature</h1>
        <input placeholder="Add something" value = {query} onChange = {(e)=>setQuery(e.target.value)} />
        <button onClick = {handleClick}>Add</button>
        <div>{todo.length > 0 && `count is ${todo.length}`}</div>
        {
            todo.map((item) => {
                return <TodoList key = {item.id} handleDelete = {handleDelete} {...item}/>
            })
        }
        </>
    )
}

export {Todo};