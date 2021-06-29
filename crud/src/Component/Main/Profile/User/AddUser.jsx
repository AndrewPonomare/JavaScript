import React, {useState} from 'react'
import style from './AddUser.module.css'
import {faCheck, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddUser = props => {
    const initialFormState = {id: null, name: '', gender: '', birthdate: '', city: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.currentTarget
        setUser({...user, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name || !user.gender || !user.birthdate || !user.city) return
        props.addUser(user)
        setUser(initialFormState)
    }

    return (
        <form className={style.item} onSubmit={handleSubmit}>
            <div>Name</div>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <div>Gender</div>
            <input
                type="text"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
            />
            <div>Birthdate</div>
            <input
                type="text"
                name="birthdate"
                value={user.birthdate}
                onChange={handleInputChange}
            />
            <div>City</div>
            <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleInputChange}
            />
            <div>
                <button className={style.create}><FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </form>
    )
}
export default AddUser