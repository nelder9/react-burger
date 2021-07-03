import React from 'react';
import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Ingredients.module.css';

import IngredientDetails from '../ingredient-details/ingredientDetails';

export default function Ingredients({ ingr }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <li className={styles.item} id={ingr._id}
                onClick={() => setIsOpen(true)}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text={ingr.name}
                    price={ingr.price}
                    thumbnail={ingr.image_mobile}
                />
            </li>
            <IngredientDetails open={isOpen} onClose={() => setIsOpen(false)} ingr={ingr} />
        </>
    );
}

Ingredients.propTypes = {
    ingr: PropTypes.object.isRequired
}
