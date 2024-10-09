import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from "./pages/HomePage.js"
import ProjectDetail from "./pages/ProjectDetail"

import './styles/App.css';


function App() {
  return (
      <Router>
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:postName" element={<ProjectDetail />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
