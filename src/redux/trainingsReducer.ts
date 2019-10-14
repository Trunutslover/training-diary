import {actionInterface, actionTypes, TrainingInterface} from "../types";

const initialState: TrainingInterface[] = [
    {
        id: 1,
        isDone: false,
        exercises: [
            {
                number: 1,
                name: `squats`,
                sets: [{reps: 8, weight: 35}, {reps: 10, weight: 40}, {reps: 12, weight: 45}, {reps: 8, weight: 55}]
            }
        ]
    }
];

const trainingsReducer = (state = initialState, action: actionInterface): TrainingInterface[] => {
    switch (action.type) {
        case actionTypes.TOGGLE_IS_DONE:
            return state.map((value => {
                    if(action.payload === value.id) {
                        return {
                            ...value,
                            isDone: !value.isDone
                        }
                    } else {
                        return value;
                    }
                }));

            case actionTypes.ADD_SET:
                return state.map(value => {
                    if(action.payload.trainingId === value.id){
                        return {
                            ...value,
                            exercises: value.exercises.map(value => {
                                if(action.payload.exerciseNumber === value.number) {
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
                    } else {
                        return value;
                    }
                });

            case actionTypes.REMOVE_SET:
                return state.map(value => {
                    if(action.payload.trainingId === value.id){
                        return {
                            ...value,
                            exercises: value.exercises.map(value => {
                                if(action.payload.exerciseNumber === value.number) {
                                    return {
                                        ...value,
                                        sets: value.sets.filter((value, index) => index !== action.payload.setNumber)
                                    }
                                } else {
                                    return value;
                                }
                            })
                        }
                    } else {
                        return value;
                    }
                });

            case actionTypes.SET_REPS:
                return state.map(value => {
                    if(action.payload.trainingId === value.id){
                        return {
                            ...value,
                            exercises: value.exercises.map(value => {
                                if(action.payload.exerciseNumber === value.number) {
                                    return {
                                        ...value,
                                        sets: value.sets.map(((value1, index) => {
                                            if(action.payload.setNumber === index) {
                                                return action.payload.isReps ? {reps: parseInt(action.payload.value), weight: value1.weight} : {reps: value1.reps, weight: parseInt(action.payload.value)}
                                            } else {
                                                return value1;
                                            }
                                        }))
                                    }
                                } else {
                                    return value;
                                }
                            })
                        }
                    } else {
                        return value;
                    }
                });

        default:
            return state;
    }
};

export default trainingsReducer;

export const toggleIsDoneAC = (id: number): actionInterface => ({type: actionTypes.TOGGLE_IS_DONE, payload: id});
export const addSetAC = (trainingId: number, exerciseNumber: number): actionInterface => ({type: actionTypes.ADD_SET, payload: {trainingId, exerciseNumber}});
export const removeSetAC = (trainingId: number, exerciseNumber: number, setNumber: number) => ({type: actionTypes.REMOVE_SET, payload: {trainingId, exerciseNumber, setNumber}});
export const setRepsAC = (trainingId: number, exerciseNumber: number, setNumber: number, isReps: boolean, value: string) => ({type: actionTypes.SET_REPS, payload: {trainingId, exerciseNumber, setNumber, isReps, value}});