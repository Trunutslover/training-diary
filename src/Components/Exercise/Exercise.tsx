import React from 'react';
import classes from './Exercise.module.scss';
import cn from 'classnames/bind';
import {actionInterface} from "../../types";
import EditableSpan from "../common/EditableSpan/EditableSpan";

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
    removeSet: (trainingId: number, exerciseNumber: number, setNumber: number) => actionInterface,
    setReps: (trainingId: number, exerciseNumber: number, setNumber: number, isReps: boolean, value: string) => actionInterface
}

const Exercise = ({id, number, name, sets, addSet, removeSet, setReps}: Props): React.ReactElement => {
    const setsList = sets.map((value, index) => <span key={index} className={cx({set: true})}><EditableSpan
        trainingId={id}
        exerciseNumber={number}
        setNumber={index}
        isReps={true}
        value={value.reps.toString()}
        setValue={setReps}
    />reps - <EditableSpan
        trainingId={id}
        exerciseNumber={number}
        setNumber={index}
        isReps={false}
        value={value.weight.toString()}
        setValue={setReps}
    />kg <button
        onClick={() => removeSet(id, number, index)}>-</button></span>);

    return (
        <div>
            <h4>number - {number} name - {name}</h4>
            <div><b>sets:</b> {setsList}
                <button onClick={() => addSet(id, number)}>+</button>
            </div>
        </div>
    )
};

export default Exercise;