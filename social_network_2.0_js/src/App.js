import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    )
}


const Header = () => {
    return (
        <div className = 'mainStyle'>
            <h3>React</h3>
        </div>
    )
}

const Technologies = () => {
    return (
        <ul className = 'mainStyle'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
    )
}

const Footer = () => {
    return (
        <p className = 'mainStyle'>Footer</p>
    )
}

export default App;
