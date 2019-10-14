import React from 'react';
import classes from './Exercise.module.scss';
import cn from 'classnames/bind';
import {actionInterface} from "../../types";

const cx = cn.bind(classes);

interface Props {
    id: number,
    number: number,
    name: string,
    sets: {
        reps: number,
        weight: number
    }[],
    addSet: (trainingId: number, exerciseNumber: number) => actionInterface,
    removeSet: (trainingId: number, exerciseNumber: number, setNumber: number) => actionInterface
}

const Exercise = ({id, number, name, sets, addSet, removeSet}: Props): React.ReactElement => {
    const setsList = sets.map((value, index) => <span key={index} className={cx({set: true})}>{value.reps}reps - {value.weight}kg <button onClick={() => removeSet(id, number, index)}>-</button></span>);

    return (
        <div>
            <h4>number - {number} name - {name}</h4>
            <div><b>sets:</b> {setsList} <button onClick={() => addSet(id, number)}>+</button></div>
        </div>
    )
};

export default Exercise;