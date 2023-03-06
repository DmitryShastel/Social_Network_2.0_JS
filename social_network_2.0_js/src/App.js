import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";



function App(props) {
    debugger

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>

                        <Route path='/dialogs/*' element={<Dialogs
                            store={props.store}
                        />}/>

                        <Route path='/news' element={<News
                            news={props.state.news}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;