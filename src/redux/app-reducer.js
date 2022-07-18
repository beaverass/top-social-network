import {authMe} from "./auth-reducer";
import {requestUsers} from "./users-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state=initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => (dispatch) => {
    dispatch(authMe())
        .then(() => dispatch(initializedSuccess()));

    // Promise.all([promis])
    //     .then(() => dispatch(initializedSuccess()));

}

export default appReducer;