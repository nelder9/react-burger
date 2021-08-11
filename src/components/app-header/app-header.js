import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from './appHeader.module.css';

export default function AppHeader() {

    const isConstructor = !!useRouteMatch({ path: '/', exact: true });
    const isOrders = !!useRouteMatch({ path: '/profile/orders', exact: true });
    const isProfile = !!useRouteMatch({ path: '/profile', exact: true });

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div style={{ display: 'flex' }}>
                    <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                    <NavLink
                        to={'/'}
                        className="text text_type_main-default ml-2 text_color_inactive"
                        activeClassName={isConstructor ? styles.active : null}
                    >
                        Конструктор
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexGrow: 2, justifyContent: 'center' }}>
                    <ListIcon type={isOrders ? 'primary' : 'secondary'} />
                    <NavLink
                        to={'/profile/orders'}
                        className="text text_type_main-default ml-2 text_color_inactive"
                        activeClassName={isOrders ? styles.active : null}>
                        Лента заказов
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexGrow: 3 }}>
                    <NavLink to={'/'}>
                        <Logo />
                    </NavLink>
                </div>
                <div style={{ display: 'flex' }}>
                    <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                    <NavLink
                        to={'/profile'}
                        className="text text_type_main-default ml-2 text_color_inactive"
                        activeClassName={isProfile ? styles.active : null}
                    >
                        Личный кабинет
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
