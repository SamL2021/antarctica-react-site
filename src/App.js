import logo from "./penguin-logo.png";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Antarctica React Site Coming Soon</p>
                <Footer></Footer>
            </header>
        </div>
    );
}

export default App;
