import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Supplies from '../supplies/supplies'
import styles from './burgerIngredients.module.css';
import Modal from '../modal/modal';
import { getItems } from '../../services/actions/items';
import IngredientDetails from '../ingredient-details/ingredient-details';

export default function BurgerIngredients() {
    const dispatch = useDispatch();
    const { modalItem } = useSelector(state => state.burger);
    const { modal } = useSelector(state => state.burger);
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const { items } = useSelector(state => state.burger);
    const [currentTab, setCurrentTab] = useState('buns');
    const buns = items.filter((item) => item.type === 'bun')
    const mains = items.filter((item) => item.type === 'main')
    const sauces = items.filter((item) => item.type === 'sauce')

    const setTab = (tab) => {
        setCurrentTab(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const scrollContainerRef = useRef(null);
    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    const handleScroll = () => {
        const scrollContainerPosition = scrollContainerRef.current.getBoundingClientRect().top;
        const firstHeaderPosition = bunRef.current.getBoundingClientRect().top;
        const secondHeaderPosition = sauceRef.current.getBoundingClientRect().top;
        const thirdHeaderPosition = mainRef.current.getBoundingClientRect().top;
        const firstDiff = Math.abs(scrollContainerPosition - firstHeaderPosition);
        const secondDiff = Math.abs(scrollContainerPosition - secondHeaderPosition);
        const thirdDiff = Math.abs(scrollContainerPosition - thirdHeaderPosition);

        if (firstDiff < secondDiff) {
            setCurrentTab('buns');
        } else if (secondDiff < thirdDiff) {
            setCurrentTab('sauce');
        } else {
            setCurrentTab('main');
        }
    };

    return (
        <div className={styles.block}>
            <p className="text text_type_main-large mt-10 mb-5">
                ???????????????? ????????????
            </p>
            <div style={{ display: 'flex' }} id={'tab'}>
                <Tab value="buns" active={currentTab === 'buns'} onClick={setTab.bind(null, 'buns')}>
                    ??????????
                </Tab>
                <Tab value="sauces" active={currentTab === 'sauce'} onClick={setTab.bind(null, 'sauces')}>
                    ??????????
                </Tab>
                <Tab value="mains" active={currentTab === 'main'} onClick={setTab.bind(null, 'mains')}>
                    ??????????????
                </Tab>
            </div>
            <div className={styles.main} onScroll={handleScroll} ref={scrollContainerRef}>
                <p className={"text text_type_main-medium full-width mt-10"} id={'buns'} ref={bunRef}>
                    ??????????
                </p>
                {buns.map((it) => <Supplies ingr={it} key={it._id} />)}
                <p className={"text text_type_main-medium full-width mt-10"} id={'sauces'} ref={sauceRef}>
                    ??????????
                </p>
                {sauces.map((it) => <Supplies ingr={it} key={it._id} />)}
                <p className={"text text_type_main-medium full-width mt-10"} id={'mains'} ref={mainRef}>
                    ??????????????
                </p>
                {mains.map((it) => <Supplies ingr={it} key={it._id} />)}
            </div>
            {modal === 'card' ? <Modal title={'???????????? ??????????????????????'}><IngredientDetails ingredient={modalItem}/></Modal> : '' } 
            
        </div>
    );
}
