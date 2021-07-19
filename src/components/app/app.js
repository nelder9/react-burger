import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

export default function App() {
  const [data, setData] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setData(data)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    };
    getData();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.block}>
            <BurgerIngredients />
          </div>
          <div className={styles.block}>
            <BurgerConstructor />
          </div>
        </main>
      </div>
      </DndProvider>
  );
}
