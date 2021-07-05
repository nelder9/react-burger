import React from 'react';
import PropTypes from 'prop-types';

import styles from './modalOverlay.module.css'

export default function ModalOverlay({ onClose }) {
    return <div className={styles.overlay} onClick={onClose}></div>
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}
