// import logo from "./penguin-logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Ship from "./components/pages/Ship";
import Journey from "./components/pages/Journey";
import Book from "./components/pages/Book";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/ship" element={<Ship />} />
                    <Route path="/book" element={<Book />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
