import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';

import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <div className={styles.block}>
          <BurgerIngredients />
        </div>
        <div className={styles.block}>
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
