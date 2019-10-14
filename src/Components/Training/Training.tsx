import React from 'react';
import {actionInterface, ExerciseInterface} from "../../types";
import Exercise from "../Exercise/Exercise";

interface Props {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface
}

const Training = ({id, isDone, exercises, toggleIsDoneAC}: Props):React.ReactElement => {
    const exercisesList = exercises.map(value => <Exercise number={value.number} name={value.name} sets={value.sets}/>);

    return (
        <section>
            <p>
                Training number {id}
            </p>
            <p>
                Training is done: {isDone ? `yes` : `no`}
            </p>
            <p>
                Exercises: {exercisesList}
            </p>
            {isDone ? <button onClick={() => toggleIsDoneAC(id)}>Training is not done</button> : <button onClick={() => toggleIsDoneAC(id)}>Training is done</button>}
        </section>
    )
};

export default Training;