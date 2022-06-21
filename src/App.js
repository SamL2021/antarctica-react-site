// import logo from "./penguin-logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Ship from "./components/pages/Ship";
import Journey from "./components/pages/Journey";
import Book from "./components/pages/Book";
import Video from "./components/pages/Video";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/the-journey" element={<Journey />} />
                    <Route path="/the-ship" element={<Ship />} />
                    <Route path="/book-now" element={<Book />} />
                    <Route path="/video" element={<Video />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
