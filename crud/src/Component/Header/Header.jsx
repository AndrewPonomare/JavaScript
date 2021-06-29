import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartBar, faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import avatar from '../../image/avatar.png'

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.user}><img src={avatar}/>User</div>
                <div className={style.profile}>
                    <div className={style.item}>
                        <NavLink to='/profile' >Profile <FontAwesomeIcon icon={faUser} /></NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/dashboard' >Dashboard <FontAwesomeIcon icon={faChartBar} /></NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/users' >Users <FontAwesomeIcon icon={faUsers} /></NavLink>
                    </div>
                    <div className={style.log}>
                        <NavLink to='/login' >Log out</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header