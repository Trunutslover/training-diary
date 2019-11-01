import React from 'react';
import classes from './Exercise.module.scss';
import cn from 'classnames/bind';
import {actionInterface} from "../../types";
import EditableSpan from "../common/EditableSpan/EditableSpan";

const cx = cn.bind(classes);

interface Props {
    number: number,
    name: string,
    editable: boolean,
    sets: {
        reps: number,
        weight: number
    }[],
    addSet: (exerciseNumber: number) => actionInterface,
    removeSet: (exerciseNumber: number, setNumber: number) => actionInterface,
    setReps: (exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface
    setExerciseName: (exerciseNumber: number, value: string) => actionInterface,
    removeExercise: (exerciseNumber: number) => actionInterface
}

const Exercise = ({number, name, editable, sets, addSet, removeSet, setReps, setExerciseName, removeExercise}: Props): React.ReactElement => {
    const setsList = sets.map((value, index) => <span key={index} className={cx({set: true})}>{editable ? <EditableSpan
        exerciseNumber={number}
        setNumber={index}
        isReps={true}
        value={value.reps.toString()}
        setValue={setReps}
    /> : <span>{value.reps}</span>}reps - {editable ? <EditableSpan
        exerciseNumber={number}
        setNumber={index}
        isReps={false}
        value={value.weight.toString()}
        setValue={setReps}
    /> : <span>{value.weight}</span>}kg {editable ? <button className={cx({removeButton: true})}
        onClick={() => removeSet(number, index)}>-</button> : null}</span>);

    return (
        <div className={cx({Exercise: true})}>
            <h4 className={cx({title: true})}>Number - {number}, name - {editable ? <EditableSpan
                exerciseNumber={number}
                value={name}
                setValue={setExerciseName}
            /> : <span>{name}</span>}</h4>
            <p className={cx({sets: true})}><b className={cx({setsTitle: true})}>Sets:</b>{setsList}
                {editable ? <button className={cx({addButton: true})} onClick={() => addSet(number)}>+</button> : null}
            </p>
            {editable ? <button className={cx({removeButton: true})} onClick={() => removeExercise(number)}>Remove exercise</button> : null}
        </div>
    )
};

export default Exercise;