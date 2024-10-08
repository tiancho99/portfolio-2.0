import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header.js";
import AboutMe from "./pages/AboutMe.js";
import Projects from "./pages/Projects.js";
import Blog from "./pages/Blog.js";
import Footer from "./components/Footer.js";

import './styles/App.css';


function App() {
  return (
      <div className="content">
        <Header />
        <AboutMe />
        <Projects prefix="projects" subtitle="KNOW MY WORK" title="A little preview of what I've done" categories="3"/>
        <Blog prefix="blog" subtitle="LEARN WITH ME" title="Read some of my blog posts" categories="6"/>
        <Footer />
      </div>
  );
}

export default App;
