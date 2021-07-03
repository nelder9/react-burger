import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burgerConstructor.module.css';
import Ingredients from '../ingredients/ingredients';
import OrderDetails from '../order-details/orderDetails';

const img = 'https://code.s3.yandex.net/react/code/bun-02.png'

export default function BurgerConstructor({ items }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const allIngr = items.data.filter((item) => item.type !== 'bun')
    return (
        <>
            <div className={styles.main}>
                <div className={styles.blockElem}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={img}
                    />
                </div>
                <ul className={styles.scrollBlock}>
                    {allIngr.map(el => <Ingredients ingr={el} key={el._id} items={items} />)}
                </ul>
                <div className={styles.blockElem}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={img}
                    />
                </div>
                <div className={styles.order}>
                    <div className={styles.price}>
                        <p className="text text_type_digits-medium mr-2">129</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large" onClick={() => setIsOpen(true)}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            <OrderDetails open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

BurgerConstructor.propTypes = {
    items: PropTypes.object.isRequired
 }