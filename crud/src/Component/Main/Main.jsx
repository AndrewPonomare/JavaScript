import React from 'react';
import style from'./Main.module.css';
import Profile from "./Profile/Profile";


const Main = () => {
    return (
        <main className={style.main}>
            <Profile />
        </main>
    )
}

export default Main