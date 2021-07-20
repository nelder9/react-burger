import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

export default function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
      </div>
      </DndProvider>
  );
}
