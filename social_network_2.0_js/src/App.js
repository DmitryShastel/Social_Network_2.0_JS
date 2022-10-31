import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>

            <Footer/>
        </div>
    )
}

export default App;
