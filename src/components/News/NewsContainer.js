import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../../redux/news-reducer";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator())
        },

        updateNewNewsText: (text) => {
            dispatch(updateNewNewsTextActionCreator(text))
        }
    }
}


const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;