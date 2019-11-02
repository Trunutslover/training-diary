import React, {useState} from 'react';
import {actionInterface, ExerciseInterface} from "../../types";
import Exercise from "../Exercise/Exercise";
import classes from './Training.module.scss';
import cn from 'classnames/bind';
import EditableDateTime from "../common/EditableDateTime/EditableDateTime";

const cx = cn.bind(classes);

interface Props {
    id: number,
    timestamp: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface,
    addSetAC: (exerciseNumber: number) => actionInterface,
    removeSetAC: (exerciseNumber: number, setNumber: number) => actionInterface,
    setRepsAC: (exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => actionInterface,
    setExerciseNameAC: (exerciseNumber: number, value: string) => actionInterface,
    addExerciseAC: () => actionInterface,
    removeExerciseAC: (exerciseNumber: number) => actionInterface,
    setTimestampAC: (timestamp: number) => actionInterface
}

const Training = ({id, timestamp, isDone, exercises, toggleIsDoneAC, addSetAC, removeSetAC, setRepsAC, setExerciseNameAC, addExerciseAC, removeExerciseAC, setTimestampAC}: Props): React.ReactElement => {
    const exercisesList = exercises.map(value => <Exercise
        key={value.number}
        number={value.number}
        name={value.name}
        editable={!isDone}
        sets={value.sets}
        addSet={addSetAC}
        removeSet={removeSetAC}
        setReps={setRepsAC}
        setExerciseName={setExerciseNameAC}
        removeExercise={removeExerciseAC}
    />);

    const date = new Date(timestamp);

    return (
        <section className={cx({Training: true, done: isDone})}>
            <h3 className={cx({title: true})}>Training number {id}</h3>
            <h3 className={cx({title: true})}>{isDone
                ? `Training date ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                : <span>Enter date <EditableDateTime timestamp={timestamp} type={`day`} setupFunction={setTimestampAC}/>/<EditableDateTime timestamp={timestamp} type={`month`} setupFunction={setTimestampAC}/>/<EditableDateTime timestamp={timestamp} type={`fullYear`} setupFunction={setTimestampAC}/></span>}</h3>
            <h3 className={cx({title: true})}>{isDone
                ? `Training time ${date.getHours()}:${date.getMinutes()}`
                : <span>Enter time <EditableDateTime type={`hours`} timestamp={timestamp} setupFunction={setTimestampAC}/>:<EditableDateTime type={`minutes`} timestamp={timestamp} setupFunction={setTimestampAC}/></span>}</h3>
            <h3 className={cx({title: true})}>Training is done: {isDone ? `yes` : `no`}</h3>
            <h3 className={cx({title: true})}>Exercises:</h3>
            {exercisesList}
            {isDone ? null : <div><button className={cx({buttonDone: true})} onClick={() => addExerciseAC()}>Add exercise</button></div>}
            {isDone ? <button className={cx({buttonDone: true})} onClick={() => toggleIsDoneAC(id)}>Training is not done</button> :
                <button className={cx({button: true})} onClick={() => toggleIsDoneAC(id)}>Training is done</button>}
            <button className={cx({button: true})}>Save changes</button>
        </section>
    )
};

export default Training;