import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './appHeader.module.css';

function AppHeader() {
  return (
        <header className={ styles.header }>
            <div className={ styles.item }>
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default ml-2">
                Конструктор
                </p>
            </div>

            <div className={ styles.item }>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default ml-2">
                Лента заказов
                </p>
            </div>
            <div className={ styles.item }>
                <Logo />
            </div>
            <div className={ styles.item }>
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default ml-2">
                Личный кабинет
                </p>
            </div>
        </header>   
  );
}

export default AppHeader;