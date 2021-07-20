import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { DELETE_ITEM } from '../../services/actions/index';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients.module.css';


export default function Ingredients({ ingr, findCard, moveCard }) {

    const id = ingr.uid;

    const originalIndex = findCard(id).index;

    const dispatch = useDispatch();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    }), [id, originalIndex, moveCard]);


    const [, drop] = useDrop(() => ({
        accept: 'card',
        canDrop: () => false,
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id);
                moveCard(draggedId, overIndex);
            }
        },
    }), [findCard, moveCard]);


    const onDelete = () => {
        dispatch({
            type: DELETE_ITEM,
            uid: ingr.uid,
            idItem: ingr._id
        });
    };

    const opacity = isDragging ? 0 : 1;

    return (
        <li className={styles.item} style={{ opacity }} id={ingr._id} ref={(node) => drag(drop(node))}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingr.name}
                price={ingr.price}
                thumbnail={ingr.image_mobile}
                handleClose={onDelete}
            />
        </li>
    );
}

Ingredients.propTypes = {
    ingr: PropTypes.object.isRequired,
    moveCard: PropTypes.func.isRequired,
    findCard: PropTypes.func.isRequired
}
