import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerConstructor.module.css';

import { data } from '../../utils/data'

console.log(data)

function BurgerConstructor() {
    const [current, setCurrent] = React.useState('one')
  return (
      <>
        <p className="text text_type_main-large">
        Соберите бургер
        </p>
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
            </Tab>
        </div>
        
        <div className={styles.main}>
            <p className={"text text_type_main-medium full-width"}>
            Булки
            </p>
            {data.map((it) => {
                if (it.type === 'bun') {
                    return (
                        <div className={styles.item} key={it._id}>
                            <Counter count={1} size="default" />
                            <img src={it.image} alt={it.name} />
                            <p className="text text_type_digits-default m-1"><CurrencyIcon type="primary" /> {it.price}</p>
                            <p className="text text_type_main-default mb-5">
                            {it.name}
                            </p>
                        </div>        
                    )
                }    
            })}
            <p className={"text text_type_main-medium full-width"}>
            Соусы
            </p>
            {data.map((it) => {
                if (it.type === 'sauce') {
                    return (
                        <div className={styles.item} key={it._id}>
                            <Counter count={1} size="default" />
                            <img src={it.image} alt={it.name} />
                            <p className="text text_type_digits-default m-1"><CurrencyIcon type="primary" /> {it.price}</p>
                            <p className="text text_type_main-default mb-5">
                            {it.name}
                            </p>
                        </div>        
                    )
                }    
            })}
            <p className={"text text_type_main-medium full-width"}>
            Начинка
            </p>
            {data.map((it) => {
                if (it.type === 'main') {
                    return (
                        <div className={styles.item} key={it._id}>
                            <Counter count={1} size="default" />
                            <img src={it.image} alt={it.name} />
                            <p className="text text_type_digits-default m-1"><CurrencyIcon type="primary" /> {it.price}</p>
                            <p className="text text_type_main-default mb-5">
                            {it.name}
                            </p>
                        </div>        
                    )
                }    
            })}
        </div>
      </>   
  );
}

export default BurgerConstructor;