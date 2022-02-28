import React from 'react';
import styles from "./DisplayUser.module.css"
const DisplayUser = ({name,email,password}) => {
    return(
        <>
        <div className={styles.user}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
        </div>
        </>
    )
}

export {DisplayUser}