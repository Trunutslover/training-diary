import React from 'react';
import {actionInterface, ExerciseInterface} from "../../types";
import Exercise from "../Exercise/Exercise";

interface Props {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface,
    addSetAC: (trainingId: number, exerciseNumber: number) => actionInterface,
    removeSetAC: (trainingId: number, exerciseNumber: number, setNumber: number) => actionInterface
}

const Training = ({id, isDone, exercises, toggleIsDoneAC, addSetAC, removeSetAC}: Props): React.ReactElement => {
    const exercisesList = exercises.map(value => <Exercise key={value.number} id={id} number={value.number}
                                                           name={value.name} sets={value.sets} addSet={addSetAC} removeSet={removeSetAC}/>);

    return (
        <section>
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