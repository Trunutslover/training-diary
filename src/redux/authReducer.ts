import {actionInterface, actionTypes} from "../types";

const initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action: actionInterface) => {
    switch (action.type) {
        case actionTypes.SET_AUTH: {
            return {
                ...state,
                isAuth: true
            }
        }

        case actionTypes.REMOVE_AUTH: {
            return {
                ...state,
                isAuth: false
            }
        }

        default: {
            return state;
        }
    }
};

export default authReducer;

export const setAuthAC = (): actionInterface => ({type: actionTypes.SET_AUTH});
export const removeAuthAC = (): actionInterface => ({type: actionTypes.REMOVE_AUTH});