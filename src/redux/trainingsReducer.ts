import {actionInterface, actionTypes, TrainingsInterface} from "../types";

const initialState: TrainingsInterface[] = [
    {
        id: 1
    },
    {
        id: 2
    }
];

const trainingsReducer = (state = initialState, action: actionInterface): TrainingsInterface[] => {
    switch (action.type) {
        default:
            return state;
    }
};

export default trainingsReducer;