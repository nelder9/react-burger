import React from 'react';
import AppHeader from './components/appHeader/AppHeader';

import BurgerConstructor from './components/burgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/burgerIngredients/BurgerIngredients';

import styles from './app.module.css';

function App() {
  return (
    <div className={ styles.container }>
      <AppHeader />
      <main className={ styles.main }>
        <div className={ styles.block }>
          <BurgerConstructor />
        </div>
        <div className={ styles.block }>
          <BurgerIngredients />
        </div>
      </main>
    </div>
  );
}

export default App;
