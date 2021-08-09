import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import styles from './homePage.module.css';

export default function HomePage() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            </div>
        </DndProvider>
    );
}
