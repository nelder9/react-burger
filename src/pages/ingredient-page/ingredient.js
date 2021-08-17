import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredient.module.css";

export default function Ingredient() {
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const { items } = useSelector((store) => store.burger);

  useEffect(() => {
    const foundIngredient = items.find(
      (item) => item._id === ingredientId
    );

    setIngredient(foundIngredient);
  }, [items, ingredientId]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <IngredientDetails ingredient={ingredient} />
      </div>
    </div>
  );
};
