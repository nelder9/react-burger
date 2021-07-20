import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { CLOSE_MODAL } from '../../services/actions/index';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

export default function Modal({ title }) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.isModalOpen);
    const onClose = () => {
        dispatch({
          type: CLOSE_MODAL
        });
      };

    const keyDownHandler = (e) => {
        if (e.key === 'Escape') onClose()
    }

    React.useEffect(() => {
        document.addEventListener('keydown', keyDownHandler)

        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    })
    const content = useSelector(state => state.modal); 
    if (!open) return null;

    

    return ReactDom.createPortal(
        <>
            <div className={styles.modal_container}>
                {title && <header className={styles.modal_header}><p className="text text_type_main-large">{title}</p><CloseIcon type="primary" onClick={onClose} /></header>}
                {content === 'card' ? <IngredientDetails /> : <OrderDetails />}
            </div>
            <ModalOverlay onClose={onClose} />
        </>
        ,
        document.getElementById('modal'))
}

Modal.propTypes = {
    title: PropTypes.string.isRequired
}
