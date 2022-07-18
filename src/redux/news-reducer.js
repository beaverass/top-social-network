const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';

let initialState = {

    news: [
        {id: 1, newsName: 'Baiden pokakal'},
        {id: 2, newsName: 'Sport'},
        {id: 3, newsName: 'IT'}
    ],
    newNewsText: 'new'

}

const newsReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_NEWS: {

            let newNews = {
                id: 4,
                newsName: state.newNewsText
            }
            return {
                ...state,
                news: [...state.news, newNews],
                newNewsText: ''
            };

        }
        case UPDATE_NEW_NEWS_TEXT: {

            return {
                ...state,
                newNewsText: action.newText
            };

        }

        default:
            return state;
    }


}

export const addNewsActionCreator = () => ({type: ADD_NEWS});

export const updateNewNewsTextActionCreator = (text) => ({type: UPDATE_NEW_NEWS_TEXT, newText: text});

export default newsReducer;