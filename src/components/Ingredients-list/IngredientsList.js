import React from 'react';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredientsList.module.css';
import PropTypes from 'prop-types';

function IngredientsList({ ingr }) {
    return (
        <li className={styles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingr.name}
                price={ingr.price}
                thumbnail={ingr.image_mobile}
            />
        </li>
    );
}

IngredientsList.propTypes = {
    ingr: PropTypes.object
};

export default IngredientsList;