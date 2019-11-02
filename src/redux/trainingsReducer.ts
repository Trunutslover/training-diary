import {actionInterface, actionTypes, TrainingsInterface} from "../types";
import {getTrainings} from "../api/api";

const initialState: TrainingsInterface[] = [

];

const trainingsReducer = (state = initialState, action: actionInterface): TrainingsInterface[] => {
    switch (action.type) {
        case actionTypes.SET_TRAININGS: {
            return [
                ...action.payload.trainings
            ]
        }

        default:
            return state;
    }
};

export default trainingsReducer;

export const setTrainingsAC = (trainings: TrainingsInterface[]): actionInterface => ({type: actionTypes.SET_TRAININGS, payload: {trainings}});

export const getTrainingsTC = () => async (dispatch: any) => {
    const trainings = await getTrainings();
    dispatch(setTrainingsAC(trainings));
};