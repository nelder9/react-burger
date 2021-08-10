import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useHistory } from "react-router-dom";
import styles from './appHeader.module.css';

export default function AppHeader() {
    const { location } = useHistory();
    const { pathname } = location;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div style={{ display: 'flex' }}>
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default ml-2">
                        Конструктор
                    </p>
                </div>
                <div style={{ display: 'flex', flexGrow: 2, justifyContent: 'center' }}>
                    <ListIcon type="secondary" />
                    <NavLink
                        to={'/profile/orders'}
                        className="text text_type_main-default ml-2 text_color_inactive"
                        activeClassName={pathname === '/profile/orders' ? styles.active : null}>
                        Лента заказов
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexGrow: 3 }}>
                    <NavLink to={{ pathname: '/' }}>
                        <Logo />
                    </NavLink>
                </div>
                <div style={{ display: 'flex' }}>
                    <ProfileIcon type="secondary" />
                    <NavLink
                        to={'/profile'}
                        className="text text_type_main-default ml-2 text_color_inactive"
                        activeClassName={pathname === '/profile' ? styles.active : null}
                    >
                        Личный кабинет
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
