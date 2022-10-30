import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Dialogs />
            <Profile/>
            <Footer/>
        </div>
    )
}

export default App;
