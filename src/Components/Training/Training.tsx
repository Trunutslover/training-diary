import React from 'react';
import {actionInterface, ExerciseInterface} from "../../types";
import Exercise from "../Exercise/Exercise";
import classes from './Training.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(classes);

interface Props {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface,
    addSetAC: (trainingId: number, exerciseNumber: number) => actionInterface,
    removeSetAC: (trainingId: number, exerciseNumber: number, setNumber: number) => actionInterface,
    setRepsAC: (trainingId: number, exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface
    setExerciseNameAC: (trainingId: number, exerciseNumber: number, value: string) => actionInterface
}

const Training = ({id, isDone, exercises, toggleIsDoneAC, addSetAC, removeSetAC, setRepsAC, setExerciseNameAC}: Props): React.ReactElement => {
    const exercisesList = exercises.map(value => <Exercise
        key={value.number}
        id={id}
        number={value.number}
        name={value.name}
        editable={!isDone}
        sets={value.sets}
        addSet={addSetAC}
        removeSet={removeSetAC}
        setReps={setRepsAC}
        setExerciseName={setExerciseNameAC}
    />);

    return (
        <section className={cx({Training: true, done: isDone})}>
            <h3>Training number {id}</h3>
            <h3>Training is done: {isDone ? `yes` : `no`}</h3>
            <h3>Exercises:</h3>
            {exercisesList}
            {isDone ? <button onClick={() => toggleIsDoneAC(id)}>Training is not done</button> :
                <button onClick={() => toggleIsDoneAC(id)}>Training is done</button>}
        </section>
    )
};

export default Training;