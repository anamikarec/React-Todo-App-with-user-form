import React,{useState} from 'react';
import { DisplayUser } from './DisplayUser';
import {v4 as uuid} from "uuid";

const initState = {
    name : "",
    email : "",
    password : ""
}
const FormData = () => {
    const [data,setData] = useState(initState);
    const [allUser,setAllUser] = useState([]);
    const {name, email, password} = data;
    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }
    // console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...data, id : uuid()
        }
        setAllUser([...allUser,payload]);
    }

    console.log(allUser);
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" value={name} onChange = {handleChange} placeholder="name"/>
            <input type="text" name="email" value={email} onChange={handleChange} placeholder="email"/>
            <input type="text" name="password" value={password} onChange={handleChange} placeholder="password"/>
            <input type="submit" value = "Submit Data" />
        </form>

       <div>
           {
               allUser.map((item)=>{
                   return <DisplayUser key = {item.id} {...item}/>
               })
           }
       </div>
        </>
    )
}

export {FormData}