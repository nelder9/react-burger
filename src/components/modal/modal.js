import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

export default function Modal({ children, onClose, title, open }) {
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
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}
