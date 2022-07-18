const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [

        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Popa'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yep'},

    ],
    dialogs: [

        {id: 1, name: 'Tolik'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Danill'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Vova'},

    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;

            return {
                ...state,
                newMessageText: '',
                messages: [ ...state.messages, {id: 6, message: messageText}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:

            return{
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }


}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;