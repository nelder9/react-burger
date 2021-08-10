import React, { useCallback } from 'react';
import update from 'immutability-helper';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerConstructor.module.css';
import Ingredients from '../ingredients/ingredients';
import { useDrop } from 'react-dnd';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { OPEN_MODAL, ADD_ITEM, SORT_ITEM, INCREASE_COUNTER, GET_ORDER } from '../../services/actions/index';

const URL = "https://norma.nomoreparties.space/api/orders";

export default function BurgerConstructor() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { constructorItems } = useSelector(state => state.burger);
    const { modal } = useSelector(state => state.burger);
    const mainBun = constructorItems.find((item) => item.type === "bun");

    const constructorItemsNotBun = constructorItems.filter(el => el.type !== 'bun');
    const ingredientIDs = constructorItems.map((item) => item._id);
    let startPrice = 0;
    if (mainBun) startPrice = mainBun.price;
    const price = constructorItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, startPrice)

    const { isAuthorized } = useSelector((store) => store.auth);

    const onOpen = async () => {
        if (!isAuthorized) {
            history.push("/login");
          }
        try {
            if (!mainBun) {
                return null;
            }
            const body = JSON.stringify({
                ingredients: ingredientIDs,
            });
            const res = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            });
            if (!res.ok) {
                throw new Error("ERROR");
            }
            const response = await res.json();
            dispatch({
                type: OPEN_MODAL,
                item: null,
                modal: 'order',
                response: response.order
            });

            dispatch({
                type: GET_ORDER,
                response: response.order
            });
        } catch (e) {
            console.error(e, 'ошибка');
        }
    };

    const moveItem = (item) => {
        dispatch({
            type: ADD_ITEM,
            ...item
        });
        dispatch({
            type: INCREASE_COUNTER,
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


    const [, dropTarget] = useDrop({
        accept: "card",
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
        drop() {

        },
    });


    const findCard = useCallback((id) => {
        const card = constructorItems.filter((c) => `${c.uid}` === id.toString())[0];
        return {
            card,
            index: constructorItems.indexOf(card),
        };
    }, [constructorItems]);

    const moveCard = useCallback((id, atIndex) => {
        const { card, index } = findCard(id);

        const sortItem = (item) => {
            dispatch({
                type: SORT_ITEM,
                item
            });
        }

        sortItem(update(constructorItems, {
            $splice: [
                [index, 1],
                [atIndex, 0, card],
            ],
        }));

    }, [dispatch, findCard, constructorItems]);

    return (
        <div className={styles.block}>
            <div className={styles.main}>
                <div ref={drop} >
                    <div className={styles.blockElem}>
                        {mainBun ? <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${mainBun.name} (вверх)`}
                            price={mainBun.price}
                            thumbnail={mainBun.image_mobile}
                        /> : ''}
                    </div>
                    <ul className={styles.scrollBlock} ref={dropTarget}>
                        {constructorItemsNotBun.map(el => <Ingredients ingr={el} key={el.uid} items={constructorItems} findCard={findCard} moveCard={moveCard} />)}
                    </ul>
                    <div className={styles.blockElem}>
                        {mainBun ? <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${mainBun.name} (низ)`}
                            price={mainBun.price}
                            thumbnail={mainBun.image_mobile}
                        /> : ''}
                    </div>
                </div>
                <div className={styles.order}>
                    <div className={styles.price}>
                        <p className="text text_type_digits-medium mr-2">{price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large" onClick={onOpen}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {modal === 'order' ? <Modal ><OrderDetails /></Modal> : ''}
        </div>
    );
}

