import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './appHeader.module.css';

export default function AppHeader() {
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
                    <p className="text text_type_main-default ml-2 text_color_inactive">
                        Лента заказов
                    </p>
                </div>
                <div style={{ display: 'flex', flexGrow: 3 }}>
                    <Logo />
                </div>
                <div style={{ display: 'flex' }}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default ml-2 text_color_inactive">
                        Личный кабинет
                    </p>
                </div>
            </div>
        </header>
    );
}
