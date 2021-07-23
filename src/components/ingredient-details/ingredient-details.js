import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './ingredientDetails.module.css';

export default function IngredientDetails() {
  const { modalItem } = useSelector(state => state.burger);

  return (
    <>
      <img className={styles.img} src={modalItem.image_large} alt={modalItem.name}></img>
      <p className="text text_type_main-medium mt-4 mb-8">{modalItem.name}</p>
      <div className={styles.modalEnergy}>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive"> {modalItem.calories}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {modalItem.proteins}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {modalItem.fat}</p>
        </div>
        <div className={styles.modalEnergyItem}>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive"> {modalItem.carbohydrates}</p>
        </div>
      </div>
    </>
  )
}


IngredientDetails.propTypes = {
  ingr: PropTypes.object
};
