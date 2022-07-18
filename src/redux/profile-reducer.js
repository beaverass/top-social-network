import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_TEXT = 'SET_STATUS_TEXT';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'haaaaa', likesCount: 50}
    ],
    newPostText: "it-kamasutra.com",
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_STATUS_TEXT :
            return {
                ...state,
                status: action.newStatus
            }

        case ADD_POST:

            let newPost = {
                id: 5,
                message: action.message,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:

            return{
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:

            return{
                ...state,
                profile: action.profile
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state;
    }


}

export const addPostActionCreator = (message) => ( { type: ADD_POST, message } );

export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );

export const setStatus = (newStatus) => ( { type: SET_STATUS_TEXT, newStatus } );

export const updateNewPostTextActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );

export const deletePost = (postId) => ( { type: DELETE_POST, postId } );



export const getUserStatus = (userId) => {
    return (dispatch) => {

        profileAPI.getStatus(userId)
            .then(response => {

                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (status) => (dispatch) => {


    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })

}

export const getUserProfile = (userId) => {

    return (dispatch) => {

        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });

    }

}


export default profileReducer;