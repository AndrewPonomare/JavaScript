import React from 'react'
import style from './User.module.css'

const User = props => {
    const handleDeleteUser = id => {
        props.deleteUser(id)
    }

    return (
        <div>
            Profiles:
            <div className={style.user}>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <div key={user.id} className={style.item}>
                            <div>{user.name}</div>
                            <div>{user.gender}</div>
                            <div>{user.birthdate}</div>
                            <div>{user.city}</div>
                            <div>
                                <button className={style.edit} onClick={() => {props.editRow(user)}}>
                                    Edit
                                </button>
                                <button className={style.delete} onClick={() => handleDeleteUser(user.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No users</div>
                )}
            </div>
        </div>
    )
}

export default User