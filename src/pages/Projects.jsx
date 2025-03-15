import '../styles/projects.css';

function Projects() {
    return (
        <main id="projects-container">
            <h1>Projects</h1>
            <div id="load-buttons">
                <button id="load-local" className="btn">Load Local</button>
                <button id="load-remote" className="btn">Load Remote</button>
            </div>
            <div id="loading-message" className="hidden">
                <p>Loading... Please wait...</p>
                <img src="/assets/images/loading.gif" alt="Loading Animation" />
            </div>
            <nav id="project-nav"></nav>
            <div id="projects"></div>
        </main>
    );
}
  
export default Projects;
