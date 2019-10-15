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
    editable: boolean,
    sets: {
        reps: number,
        weight: number
    }[],
    addSet: (trainingId: number, exerciseNumber: number) => actionInterface,
    removeSet: (trainingId: number, exerciseNumber: number, setNumber: number) => actionInterface,
    setReps: (trainingId: number, exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface
    setExerciseName: (trainingId: number, exerciseNumber: number, value: string) => actionInterface,
    removeExercise: (trainingId: number, exerciseNumber: number) => actionInterface
}

const Exercise = ({id, number, name, editable, sets, addSet, removeSet, setReps, setExerciseName, removeExercise}: Props): React.ReactElement => {
    const setsList = sets.map((value, index) => <span key={index} className={cx({set: true})}>{editable ? <EditableSpan
        trainingId={id}
        exerciseNumber={number}
        setNumber={index}
        isReps={true}
        value={value.reps.toString()}
        setValue={setReps}
    /> : <span>{value.reps}</span>}reps - {editable ? <EditableSpan
        trainingId={id}
        exerciseNumber={number}
        setNumber={index}
        isReps={false}
        value={value.weight.toString()}
        setValue={setReps}
    /> : <span>{value.weight}</span>}kg {editable ? <button className={cx({removeButton: true})}
        onClick={() => removeSet(id, number, index)}>-</button> : null}</span>);

    return (
        <div className={cx({Exercise: true})}>
            <h4 className={cx({title: true})}>number - {number} name - {editable ? <EditableSpan
                trainingId={id}
                exerciseNumber={number}
                value={name}
                setValue={setExerciseName}
            /> : <span>{name}</span>}</h4>
            <p className={cx({sets: true})}><b>sets:</b> {setsList}
                {editable ? <button className={cx({addButton: true})} onClick={() => addSet(id, number)}>+</button> : null}
            </p>
            {editable ? <button className={cx({removeButton: true})} onClick={() => removeExercise(id, number)}>Remove exercise</button> : null}
        </div>
    )
};

export default Exercise;