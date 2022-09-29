import './App.css';
import React from "react";


function App() {
    return (
        <div className='app-wrapper'>

            <header className='header'>
                <img src='https://st3.depositphotos.com/1764439/17897/i/600/depositphotos_178973448-stock-photo-yin-yang-tree-logo.jpg'/>
            </header>


            <nav className='navbar'>
                <div>
                    <a href=''>Profile</a>
                </div>
                <div>
                    <a href=''>Message</a>
                </div>
                <div>
                    <a href=''>News</a>
                </div>
                <div>
                    <a href=''>Music</a>
                </div>
                <div>
                    <a href=''>Settings</a>
                </div>

            </nav>

            <div className='content'>
                <img src='https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-st-lucia-caribbean.jpg'/>
                <div className='postsContent'>
                    <div>Ava + description</div>
                    <div>My posts</div>
                    <div>New post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>

            </div>

            <div className='footer'>

            </div>


        </div>
    )
}

export default App;
