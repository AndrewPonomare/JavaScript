import React, {useState} from 'react';
import EditUser from "./User/EditUser";
import AddUser from "./User/AddUser";
import User from "./User/User";
import style from './Profile.module.css'


const Profile = () => {
    const usersData = [
        {id: 1, name: 'Tony Stark', gender: 'Male', birthdate: '26.05.1996', city:'Kyiv'},

    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, name: '', gender: '', birthdate: '', city: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {

        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, gender: user.gender, birthdate: user.birthdate, city: user.city})
    }

    return (
        <div className={style.item}>
            <User users={users} editRow={editRow} deleteUser={deleteUser}/>
            {editing ? (
                <EditUser editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
            ) : (
                <AddUser addUser={addUser}/>)}
        </div>
    )
}

export default Profile