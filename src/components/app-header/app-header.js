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

                    <NavLink
                        to={'/'}
                        className={`${styles.navigation} text text_type_main-default ml-2 text_color_inactive`}
                        activeClassName={isConstructor ? styles.active : null}
                    >
                        <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                        <p>Конструктор</p>
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexGrow: 2, justifyContent: 'center' }}>

                    <NavLink
                        to={'/profile/orders'}
                        className={`${styles.navigation} text text_type_main-default ml-2 text_color_inactive`}
                        activeClassName={isOrders ? styles.active : null}>
                        <ListIcon type={isOrders ? 'primary' : 'secondary'} />
                        <p>Лента заказов</p>
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexGrow: 3 }}>
                    <NavLink to={'/'}>
                        <Logo />
                    </NavLink>
                </div>
                <div style={{ display: 'flex' }}>

                    <NavLink
                        to={'/profile'}
                        className={`${styles.navigation} text text_type_main-default ml-2 text_color_inactive`}
                        activeClassName={isProfile ? styles.active : null}
                    >
                        <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                        <p>Личный кабинет</p>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
