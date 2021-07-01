import React from 'react'
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './orderDetails.module.css';
import ModalOverlay from '../modalOverlay/modalOverlay';
import img from '../../images/done.svg';


export default function OrderDetails({ open, onClose }) {
    const keyDownHandler = (e) => {
        if (e.key === 'Escape') onClose()
    }

    React.useEffect(() => {
        document.addEventListener('keydown', keyDownHandler)

        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    })

    if (!open) return null;

    return (
        <>
            <div className={styles.modal_order}>
                <div className={styles.close} onClick={onClose}><CloseIcon type="primary" /></div>
                <p className="text text_type_digits-large mt-30 mb-8">034536</p>
                <p className="text text_type_main-medium mb-15">
                    Идентификатор заказа
                </p>
                <img className={styles.img} src={img} alt={'иконка'}/>
                <p className="text text_type_main-default mt-15">
                    Ваш заказ начали готовить
                </p>
                <p className="text text_type_main-default">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
            <ModalOverlay onClose={onClose} />
        </>
    )
}

OrderDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}