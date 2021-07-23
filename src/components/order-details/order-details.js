import React from 'react'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './orderDetails.module.css';
import img from '../../images/done.svg';
import { useDispatch, useSelector } from 'react-redux';

import { CLOSE_MODAL, RESTORE_CONSTRUCTOR } from '../../services/actions/index';

export default function OrderDetails() {
    const dispatch = useDispatch();
    const { orderNumber } = useSelector(state => state.burger)
    const onClose = () => {
        dispatch({
            type: CLOSE_MODAL
        });
        dispatch({
            type: RESTORE_CONSTRUCTOR
        });
    };
    return (
        <>
            <div className={styles.modal_order}>
                <div className={styles.close} onClick={onClose}><CloseIcon type="primary" /></div>
                <p className="text text_type_digits-large mt-30 mb-8">{orderNumber.number}</p>
                <p className="text text_type_main-medium mb-15">
                    Идентификатор заказа
                </p>
                <img className={styles.img} src={img} alt={'иконка'} />
                <p className="text text_type_main-default mt-15">
                    Ваш заказ начали готовить
                </p>
                <p className="text text_type_main-default">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </>
    )
}
