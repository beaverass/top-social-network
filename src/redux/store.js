import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:  [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'haaaaa', likesCount: 50}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
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

        },
        newsPage: {
            news: [
                {id: 1, newsName: 'Baiden pokakal'},
                {id: 2, newsName: 'Sport'},
                {id: 3, newsName: 'IT'}
            ]
        },
        musicPage: {
            tracks: [
                {id: 1, trackName: '5 minutes ago'},
                {id: 2, trackName: 'baby mama'},
                {id: 3, trackName: 'In the end'}
            ]
        },
        sidebar: {}
    },

    _callSubscriber(){
        console.log('State changed');
    },

    getState() {
      return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;



