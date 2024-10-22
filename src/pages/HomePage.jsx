import "bootstrap/dist/css/bootstrap.min.css"

import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blog from "./Blog";
import Footer from "../components/Footer";

import '../styles/App.css';

function HomePage() {
  return (
      <div className="content">
        <Header />
        <AboutMe />
        <Projects
            prefix="projects" 
            subtitle="KNOW MY WORK"
            title="A little preview of what I've done"
            categories="3"
        />
        <Blog
            prefix="blog"
            subtitle="LEARN WITH ME"
            title="Read some of my blog posts"
            categories="6"
        />
        <Footer />
      </div>
  );
}

export default HomePage;
