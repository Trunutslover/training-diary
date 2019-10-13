import {actionInterface, TrainingInterface, actionTypes} from "../types";

const initialState: TrainingInterface[] = [
    {
        id: 1,
        isDone: false,
        exercises: [
            {
                number: 1,
                name: `squats`,
                sets: [10, 12, 12, 10, 8]
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

        default:
            return state;
    }
};

export default trainingsReducer;

export const toggleIsDoneAC = (id: number): actionInterface => ({type: actionTypes.TOGGLE_IS_DONE, payload: id});