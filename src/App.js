import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage.js";
import ProjectDetail from "./pages/ProjectDetail";

import './styles/css/index.css';


function App() {
    return (
      <Router>
        <div>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:postId" element={<ProjectDetail />} />
            </Routes>
        </div>
      </Router>
    );
}

export default App;
