export enum actionTypes {
    TOGGLE_IS_DONE = 'TOGGLE_IS_DONE',
    ADD_SET = 'ADD_SET',
    REMOVE_SET = 'REMOVE_SET',
    SET_REPS = 'SET_REPS',
    SET_EXERCISE_NAME = 'SET_EXERCISE_NAME',
    ADD_EXERCISE = 'ADD_EXERCISE',
    REMOVE_EXERCISE = 'REMOVE_EXERCISE',
    SET_AUTH = 'SET_AUTH',
    REMOVE_AUTH = 'REMOVE_AUTH'
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

export interface TrainingsInterface {
    id: number
}

export interface ProfileInterface {
    name: string,
    avatar: string | undefined,
    age: number,
    sex: boolean
}