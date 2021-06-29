import React, { useState, useEffect } from 'react'
import style from "./AddUser.module.css";
import {faBackspace, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)
    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name || !user.gender || !user.birthdate || !user.city) return

        props.updateUser(user.id, user)
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
            <button className={style.edit}><FontAwesomeIcon icon={faCheck} /></button>
            <button className={style.edit} onClick={() => props.setEditing(false)}>
                <FontAwesomeIcon icon={faBackspace} />
            </button>
            </div>
        </form>
    )
}

export default EditUserForm