import React from 'react';
import styles from './TodoList.module.css'
const TodoList = ({handleDelete,id,title,status}) => {

    if(title === "hidden") return null;
    // console.log(id);
    return(
        <div className = {styles.todoItem}>
            <p>{title} - {status}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export {TodoList};