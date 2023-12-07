import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions/getUsers";
import {createUsers} from "../redux/actions/createUsers";

export const Users = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");
    const users  = useSelector((state)=>state.users.data);

    const addUser = ()=>{
        dispatch(createUsers(inputValue))
        setInputValue('')
    }

    useEffect(() => {
       dispatch(getUsers())
    }, [dispatch]);
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