import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Home from './assets/Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './assets/Pages/AboutPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
