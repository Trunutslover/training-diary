import {actionInterface, actionTypes, TrainingsInterface} from "../types";

const initialState: TrainingsInterface[] = [
    {
        id: 1,
        timestamp: 1572630920138
    },
    {
        id: 2,
        timestamp: 1572640920138
    }
];

const trainingsReducer = (state = initialState, action: actionInterface): TrainingsInterface[] => {
    switch (action.type) {
        default:
            return state;
    }
};

export default trainingsReducer;