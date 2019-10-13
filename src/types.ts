export enum actionTypes {
    TOGGLE_IS_DONE = 'TOGGLE_IS_DONE'
}

export interface actionInterface {
    type: actionTypes,
    payload?: any
}

export interface ExerciseInterface {
    number: number,
    name: string,
    sets: number[]
}

export interface TrainingInterface {
    id: number,
    isDone: boolean,
    exercises: ExerciseInterface[]
}