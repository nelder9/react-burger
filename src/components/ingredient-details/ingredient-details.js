import React from 'react'
import PropTypes from 'prop-types';

import styles from './ingredientDetails.module.css';

export default function IngredientDetails({ ingr }) {
  return (
    <>
      <img className={styles.img} src={ingr.image_large} alt={ingr.name}></img>
      <p className="text text_type_main-medium mt-4 mb-8">{ingr.name}</p>
      <div className={styles.modalEnergy}>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive"> {ingr.calories}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {ingr.proteins}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {ingr.fat}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {ingr.carbohydrates}</p>
        </div>
      </div>
    </>
  )
}


IngredientDetails.propTypes = {
  ingr: PropTypes.object
};