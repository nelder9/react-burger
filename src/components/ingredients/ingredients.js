import React from 'react';
import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients.module.css';


export default function Ingredients({ ingr, onOpen }) {

    return (
            <li className={styles.item} id={ingr._id}
                onClick={() => onOpen(ingr)}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text={ingr.name}
                    price={ingr.price}
                    thumbnail={ingr.image_mobile}
                />
            </li>
    );
}

Ingredients.propTypes = {
    ingr: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired
}
