import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Home from './assets/Pages/Home';
import { BrowserRouter as Router , Link } from 'react-router-dom';
import AboutPage from './assets/Pages/AboutPage';
import Project from './assets/Pages/project';
import SkillPage from './assets/Pages/SkillPage';
import Footer from './assets/Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skill" element={<SkillPage/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
