const ADD_FRIENDS = "ADD_FRIENDS";
const REMOVE_FRIENDS = "ADD_FRIENDS";

const initialState = {
    friends: []
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        case REMOVE_FRIENDS:
            return {
                ...state,
                friends: [...state.filter(f => f.id !== action.id)]
            }

        default:
            return state;
    }

}

export const addFriends = (payload) => ({type: ADD_FRIENDS, payload});
export const removeFriends = (id) => ({type: REMOVE_FRIENDS, id});


export default friendsReducer;