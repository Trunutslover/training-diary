//This reducer work with one Training displayed on '/trainings/trainingId' address

import {actionInterface, actionTypes, TrainingInterface} from "../types";

const initialState: TrainingInterface = {
    id: 1,
    isDone: false,
    exercises: [
        {
            number: 1,
            name: `squats`,
            sets: [
                {reps: 8, weight: 40},
                {reps: 10, weight: 50}
            ]
        }
    ]
};

const trainingReducer = (state: TrainingInterface = initialState, action: actionInterface): TrainingInterface => {
    switch (action.type) {
        case actionTypes.TOGGLE_IS_DONE: {
            return {
                ...state,
                isDone: !state.isDone
            }
        }

        case actionTypes.ADD_SET: {
            return {
                ...state,
                exercises: state.exercises.map(value => {
                    if (action.payload.exerciseNumber === value.number) {
                        return {
                            ...value,
                            sets: [
                                ...value.sets,
                                {reps: 0, weight: 0}
                            ]
                        }
                    } else {
                        return value;
                    }
                })
            }
        }

        case actionTypes.REMOVE_SET: {
            return {
                ...state,
                exercises: state.exercises.map(value => {
                    if (action.payload.exerciseNumber === value.number) {
                        return {
                            ...value,
                            sets: value.sets.filter((value, index) => index !== action.payload.setNumber)
                        }
                    } else {
                        return value;
                    }
                })
            }
        }

        case actionTypes.SET_REPS: {
            return {
                ...state,
                exercises: state.exercises.map(value1 => {
                    if (action.payload.exerciseNumber === value1.number) {
                        return {
                            ...value1,
                            sets: value1.sets.map(((value2, index) => {
                                if (action.payload.setNumber === index) {
                                    return action.payload.isReps ? {
                                        reps: parseInt(action.payload.value),
                                        weight: value2.weight
                                    } : {reps: value2.reps, weight: parseInt(action.payload.value)}
                                } else {
                                    return value2;
                                }
                            }))
                        }
                    } else {
                        return value1;
                    }
                })
            }
        }

        case actionTypes.SET_EXERCISE_NAME: {
            return {
                ...state,
                exercises: state.exercises.map(value => {
                    if (action.payload.exerciseNumber === value.number) {
                        return {
                            ...value,
                            name: action.payload.value
                        }
                    } else {
                        return value;
                    }
                })
            }
        }

        case actionTypes.ADD_EXERCISE: {
            return {
                ...state,
                exercises: [
                    ...state.exercises,
                    {
                        number: state.exercises.length + 1,
                        name: ``,
                        sets: []
                    }
                ]

            }
        }

        case actionTypes.REMOVE_EXERCISE: {
            return {
                ...state,
                exercises: state.exercises.filter(value1 => value1.number !== action.payload.exerciseNumber).map(((value1, index) => ({...value1, number: index + 1})))
            }
        }

        default:
            return state;
    }
};

export default trainingReducer;

export const toggleIsDoneAC = (): actionInterface => ({type: actionTypes.TOGGLE_IS_DONE});
export const addSetAC = (exerciseNumber: number): actionInterface => ({
    type: actionTypes.ADD_SET,
    payload: {exerciseNumber}
});
export const removeSetAC = (exerciseNumber: number, setNumber: number) => ({
    type: actionTypes.REMOVE_SET,
    payload: {exerciseNumber, setNumber}
});
export const setRepsAC = (exerciseNumber: number, value: string, setNumber?: number, isReps?: boolean) => ({
    type: actionTypes.SET_REPS,
    payload: {exerciseNumber, setNumber, isReps, value}
});
export const setExerciseNameAC = (exerciseNumber: number, value: string) => ({
    type: actionTypes.SET_EXERCISE_NAME,
    payload: {exerciseNumber, value}
});
export const addExerciseAC = () => ({type: actionTypes.ADD_EXERCISE});
export const removeExerciseAC = (exerciseNumber: number) => ({type: actionTypes.REMOVE_EXERCISE, payload: {exerciseNumber}});