import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Home from './assets/Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './assets/Pages/AboutPage';
import Project from './assets/Pages/project';
import SkillPage from './assets/Pages/SkillPage';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
