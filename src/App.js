import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './components/About';
import ExtendedVote from './pages/ExtendedVote';

function App() {
    return (
        <BrowserRouter>
            <div className="App d-flex flex-column justify-content-between">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/vote" element={<ExtendedVote />} />
                </Routes>
                <About />
            </div>
        </BrowserRouter>
    );
}

export default App;
