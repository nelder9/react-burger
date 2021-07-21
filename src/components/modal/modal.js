import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { CLOSE_MODAL, RESTORE_CONSTRUCTOR } from '../../services/actions/index';

export default function Modal ({ children, title }) {
    const dispatch = useDispatch();
    const { isModalOpen } = useSelector(state => state.burger);
    const { modal } = useSelector(state => state.burger);
    const onClose = () => {
        dispatch({
          type: CLOSE_MODAL
        });
        if (modal === 'order') {
            dispatch({
                type: RESTORE_CONSTRUCTOR
              });
        }
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

    if (!isModalOpen) return null;

    

    return ReactDom.createPortal(
        <>
            <div className={styles.modal_container}>
                {title && <header className={styles.modal_header}><p className="text text_type_main-large">{title}</p><CloseIcon type="primary" onClick={onClose} /></header>}
                {children}
            </div>
            <ModalOverlay onClose={onClose} />
        </>
        ,
        document.getElementById('modal'))
}

Modal.propTypes = {
    title: PropTypes.string
}
