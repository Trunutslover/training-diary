import React from 'react';
import {actionInterface, ExerciseInterface} from "../../types";

interface Props {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface
}

const Training = ({id, isDone, exercises, toggleIsDoneAC}: Props):React.ReactElement => {
    return (
        <section>
            <p>
                Training number {id}
            </p>
            <p>
                Training is done: {isDone ? `yes` : `no`}
            </p>
            <p>
                Exercises: {exercises.map(value => <span key={value.number}>number - {value.number} name - {value.name} sets - {value.sets.map((value, index) => <span key={index}>{value} </span>)}</span>)}
            </p>
            {isDone ? <button onClick={() => toggleIsDoneAC(id)}>Training is not done</button> : <button onClick={() => toggleIsDoneAC(id)}>Training is done</button>}
        </section>
    )
};

export default Training;