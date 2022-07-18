import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    loginErrorMessage: ''
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload

            }
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                loginErrorMessage: action.message
            }
        default:
            return state;
    }


}



export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const setLoginErrorMessage = (message) => ({ type: SET_LOGIN_ERROR_MESSAGE, message })

export const authMe = () => (dispatch) => {

        return authAPI.me()
            .then(response => {
                let {login, id, email} = response.data.data;
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });

}


export const login = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(authMe());
                } else {
                    let errorMes = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(setLoginErrorMessage(errorMes));
                }
            });
    }
}

export const logout = () => {

    return (dispatch) => {

        authAPI.logout()
            .then(response => {

                if (response.data.resultCode === 0) {

                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}



export default authReducer;