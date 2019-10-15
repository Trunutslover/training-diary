import React from 'react';
import classes from './Exercise.module.scss';
import cn from 'classnames/bind';
import {actionInterface} from "../../types";
import EditableSpan from "../common/EditableSpan/EditableSpan";
import {setExerciseNameAC} from "../../redux/trainingsReducer";

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
    setExerciseName: (trainingId: number, exerciseNumber: number, value: string) => actionInterface
}

const Exercise = ({id, number, name, editable, sets, addSet, removeSet, setReps, setExerciseName}: Props): React.ReactElement => {
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
    /> : <span>{value.weight}</span>}kg {editable ? <button
        onClick={() => removeSet(id, number, index)}>-</button> : null}</span>);

    return (
        <div>
            <h4>number - {number} name - {editable ? <EditableSpan
                trainingId={id}
                exerciseNumber={number}
                value={name}
                setValue={setExerciseName}
            /> : <span>{name}</span>}</h4>
            <div><b>sets:</b> {setsList}
                {editable ? <button onClick={() => addSet(id, number)}>+</button> : null}
            </div>
        </div>
    )
};

export default Exercise;