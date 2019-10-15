import React from 'react';
import classes from './Header.module.scss';
import cn from 'classnames/bind';
import {NavLink} from "react-router-dom";

const cx = cn.bind(classes);

const Header = (): React.ReactElement => {
    return (
        <header className={cx({Header: true})}>
            <nav className={cx({menu: true})}>
                <NavLink to={`/`} className={cx({link: true})} activeClassName={cx({linkActive: true})}>Home</NavLink>
                <NavLink to={`/trainings`} className={cx({link: true})} activeClassName={cx({linkActive: true})}>Trainings</NavLink>
            </nav>
        </header>
    )
};

export default Header;