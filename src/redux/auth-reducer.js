import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    loginErrorMessage: '',
    captchaUrl: null
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }


}



export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl })
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


export const login = (email, password, rememberMe, captcha) => {

    return (dispatch) => {

        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(authMe());

                }else{
                    if(response.data.resultCode === 10){
                        dispatch(getCaptcha())
                    }
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

export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaURL = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaURL));


}

export default authReducer;