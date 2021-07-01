import React from 'react';
import AppHeader from '../appHeader/appHeader';

import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';

import styles from './app.module.css';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
  const [state, setState] = React.useState({
    isLoading: true,
    hasError: false,
    data: []
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setState({ ...state, data, isLoading: false })
      } catch (e) {
        setState({ ...state, hasError: true, isLoading: false });
      }
    };
    getData();
  }, []);

  const { data, isLoading } = state;

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.block}>
            {!isLoading && <BurgerIngredients items={data} />}
          </div>
          <div className={styles.block}>
            {!isLoading && <BurgerConstructor items={data} />}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
