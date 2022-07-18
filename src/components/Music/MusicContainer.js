import React from "react";
import {connect} from "react-redux";
import Music from "./Music";


const mapStateToProps = (state) => {

    return {
        musicPage: state.musicPage
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);


export default MusicContainer;