export enum actionTypes {
    TOGGLE_IS_DONE = 'TOGGLE_IS_DONE',
    ADD_SET = 'ADD_SET'
}

export interface actionInterface {
    type: actionTypes,
    payload?: any
}

export interface ExerciseInterface {
    number: number,
    name: string,
    sets: {
        reps: number,
        weight: number
    }[]
}

export interface TrainingInterface {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[]
}