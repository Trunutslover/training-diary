import {actionInterface, actionTypes, TrainingInterface, TrainingsInterface} from "../types";
import {delTraining, getTrainings, postTraining} from "../api/api";

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

export const postTrainingTC = (training: TrainingInterface) => async (dispatch: any) => {
    const response = await postTraining(training);
    if(response.code === 0) {
        dispatch(getTrainingsTC());
    }
};

export const delTrainingTC = (id: number) => async (dispatch: any) => {
    const response = await delTraining(id);
    if(response.code === 0) {
        dispatch(getTrainingsTC());
    }
};