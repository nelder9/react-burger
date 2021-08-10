import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


import styles from './ingredientDetails.module.css';

export default function IngredientDetails({ingredient}) {
  const { modalItem } = useSelector(state => state.burger);

  console.log(ingredient, 678)
 

  if (modalItem) {
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
    return (<>
    <h1>ПРИВЕТ</h1>
  </>)
  }
 
  
}


IngredientDetails.propTypes = {
  ingr: PropTypes.object
};
