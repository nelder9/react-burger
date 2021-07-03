import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Supplies from '../SSupplies/SSupplies'
import styles from './burgerIngredients.module.css';

export default function BurgerIngredients({ items }) {
    const [current, setCurrent] = React.useState('bun')

    const buns = items.data.filter((item) => item.type === 'bun')
    const mains = items.data.filter((item) => item.type === 'main')
    const sauces = items.data.filter((item) => item.type === 'sauce')

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div style={{ display: 'flex' }} id={'tab'}>
                <Tab value="buns" active={current === 'buns'} onClick={setTab.bind(null, 'buns')}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={setTab.bind(null, 'sauces')}>
                    Соусы
                </Tab>
                <Tab value="mains" active={current === 'mains'} onClick={setTab.bind(null, 'mains')}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.main}>
                <p className={"text text_type_main-medium full-width mt-10"} id={'buns'}>
                    Булки
                </p>
                {buns.map((it) => <Supplies ingr={it} key={it._id} />)}
                <p className={"text text_type_main-medium full-width mt-10"} id={'sauces'}>
                    Соусы
                </p>
                {sauces.map((it) => <Supplies ingr={it} key={it._id} />)}
                <p className={"text text_type_main-medium full-width mt-10"} id={'mains'}>
                    Начинка
                </p>
                {mains.map((it) => <Supplies ingr={it} key={it._id} />)}
            </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    items: PropTypes.object.isRequired
}
