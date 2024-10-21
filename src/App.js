import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage.js";
import ProjectDetail from "./pages/ProjectDetail";



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
