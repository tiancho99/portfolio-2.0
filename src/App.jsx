import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";

import './styles/App.css'

function App() {
    return (
      <Router>
        <div>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:postId" element={<ProjectDetail />} />
                <Route path="/blogpost/:postId" element={<ProjectDetail />} />
            </Routes>
        </div>
      </Router>
    );
}

export default App;
