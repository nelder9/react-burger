import React from 'react';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerIngredients.module.css';

import { data } from '../../utils/data'

console.log(data)
const img = 'https://code.s3.yandex.net/react/code/bun-02.png'
function BurgerConstructor() {
  return (
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
            <div className={styles.scrollBlock}>
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
            
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>
                <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img}
                />      
                </div>  
            </div>
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
            
            <Button type="primary" size="large">
            Оформить заказ
            </Button>
        </div>
    </div>  
  );
}

export default BurgerConstructor;