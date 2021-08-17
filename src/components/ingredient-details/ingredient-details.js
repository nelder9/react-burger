import React from 'react'
import PropTypes from 'prop-types';

import styles from './ingredientDetails.module.css';

export default function IngredientDetails({ingredient}) {
  if (ingredient) {
    return (
      <>
        <img className={styles.img} src={ingredient.image_large} alt={ingredient.name}></img>
        <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
        <div className={styles.modalEnergy}>
          <div className={styles.modalEnergyItem}>
            <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive"> {ingredient.calories}</p>
          </div>
          <div className={styles.modalEnergyItem}>
            <p className="text text_type_main-small text_color_inactive">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive"> {ingredient.proteins}</p>
          </div>
          <div className={styles.modalEnergyItem}>
            <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive"> {ingredient.fat}</p>
          </div>
          <div className={styles.modalEnergyItem}>
            <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive"> {ingredient.carbohydrates}</p>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
 
  
}


IngredientDetails.propTypes = {
  ingr: PropTypes.object
};
