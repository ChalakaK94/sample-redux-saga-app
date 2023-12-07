import {useEffect, useState} from "react";
import axios from "axios";

export const Users = () => {
    const [inputValue, setInputValue] = useState("");
    const [users, setUsers] = useState([]);

    const addUser = ()=>{
        const newUser = {
            id: +Date.now(),
            name: inputValue
        }

        setUsers([...users, newUser]);
        setInputValue('')
    }

    useEffect(() => {
        axios.get('http://localhost:3004/users').then(response=>{
            setUsers(response.data)
        })
    }, []);
    return (
        <>
            <div >Total Users: {users.length}</div>
            <div style={{marginTop:'10px'}}>
                <input type="text" value={inputValue}
                       onChange={(e)=> setInputValue(e.target.value)}/>

                <button onClick={addUser}>Add User</button>
            </div>
            <div style={{marginTop:'10px'}}>
                {users.map((user,index)=>(
                    <li key={index}>{user.name}</li>
                ))}
            </div>
        </>
    )
}