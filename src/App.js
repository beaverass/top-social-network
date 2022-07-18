import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Settings from "./components/Settings/Settings";
import MusicContainer from "./components/Music/MusicContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/WithRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import Friends from "./components/Friends/Friends";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (

            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>


                            <Route path='/profile/:userId'
                                   element={<ProfileContainer/>}/>


                            <Route path='/profile'
                                   element={<ProfileContainer/>}/>

                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>

                            <Route path='/news'
                                   element={<NewsContainer/>}/>

                            <Route path='/music'
                                   element={<MusicContainer/>}/>

                            <Route path='/settings'
                                   element={<Settings/>}/>

                            <Route path='/users'
                                   element={<UsersContainer/>}/>

                            <Route path='/login'
                                   element={<LoginPage/>}/>

                            <Route path='/friends'
                                   element={<Friends/>}/>
                        </Routes>
                    </Suspense>

                </div>

            </div>


        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);


const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>

            <AppContainer/>

        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;