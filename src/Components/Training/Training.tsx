import React from 'react';
import {actionInterface, ExerciseInterface} from "../../types";
import Exercise from "../Exercise/Exercise";
import {addSetAC} from "../../redux/trainingsReducer";

interface Props {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[],
    toggleIsDoneAC: (id: number) => actionInterface,
    addSetAC: (trainingId: number, exerciseNumber: number) => actionInterface
}

const Training = ({id, isDone, exercises, toggleIsDoneAC, addSetAC}: Props): React.ReactElement => {
    const exercisesList = exercises.map(value => <Exercise key={value.number} id={id} number={value.number}
                                                           name={value.name} sets={value.sets} addSet={addSetAC}/>);

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