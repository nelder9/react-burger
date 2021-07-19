import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import styles from './burgerConstructor.module.css';
import Ingredients from '../ingredients/ingredients';

import { useDrop } from 'react-dnd';

import { OPEN_MODAL, ADD_ITEM, SORT_ITEM } from '../../services/actions/index';

const img = 'https://code.s3.yandex.net/react/code/bun-02.png'

export default function BurgerConstructor() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.constructorItems);
    

    const onOpen = () => {
        dispatch({
            type: OPEN_MODAL,
            item: null,
            modal: 'order'
        });
    };

    const moveItem = (item) => {
        console.log(item, 8)
        dispatch({
            type: ADD_ITEM,
            ...item
        });
    }
    
    const [, drop] = useDrop({
        accept: "card1",
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
        drop(item) {
            moveItem(item)

        },
    });

    const sortItem = (item) => {
        console.log(item, 45)
        dispatch({
            type: SORT_ITEM,
            item
        });
    }

    

    const [, dropTarget] = useDrop({
        accept: "card",
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
        drop(item) {
           // moveItem(item)

        },
    });

    const allIngr = items.filter((item) => item.type !== 'bun')

    const findCard = useCallback((id) => {
        const card = allIngr.filter((c) => `${c._id}` === id)[0];

        return {
            card,
            index: allIngr.indexOf(card),
        };
    }, [allIngr]);

    const moveCard = useCallback((id, atIndex) => {
        const { card, index } = findCard(id);

        sortItem(update(allIngr, {
            $splice: [
                [index, 1],
                [atIndex, 0, card],
            ],
        }));

    }, [findCard, allIngr]);

    return (
        <>
            <div className={styles.main}>
                <div ref={drop} >
                    <div className={styles.blockElem}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={img}
                        />
                    </div>
                    <ul className={styles.scrollBlock} ref={dropTarget}>
                        {allIngr.map(el => <Ingredients ingr={el} key={el._id} items={items} findCard={findCard} moveCard={moveCard} uniqId={nanoid()}/>)}
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
                </div>
                <div className={styles.order}>
                    <div className={styles.price}>
                        <p className="text text_type_digits-medium mr-2">129</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large" onClick={onOpen}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    );
}

BurgerConstructor.propTypes = {
    items: PropTypes.object.isRequired
}
