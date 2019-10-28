import {actionInterface, ProfileInterface} from "../types";

const initialState: ProfileInterface = {
    name: `Alex Ivanenko`,
    avatar: undefined,
    age: 32,
    sex: true
};

const profileReducer = (state: ProfileInterface = initialState, action: actionInterface): ProfileInterface => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default profileReducer;