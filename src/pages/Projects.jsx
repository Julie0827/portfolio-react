import '../styles/projects.css';

function Projects() {
    return (
        <main id="projects-container">
            <h1>Projects</h1>
            <nav id="project-nav">
                <a href="#project1">Project 1</a>
                <a href="#project2">Project 2</a>
                <a href="#project3">Project 3</a>
            </nav>
            <div id="projects">
                <section id="project1" class="project">
                    <h2>Project 1 Title</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/cse134-hw3" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/thumbnail-large.png" media="(min-width: 1200px)" />
                        <source srcSet="../assets/images/thumbnail-medium.png" media="(min-width: 768px)" />
                        <img src="../assets/images/thumbnail-small.png" alt="Project Thumbnail" />
                    </picture>
                    <p>This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>

                <section id="project2" class="project">
                    <h2>Project 2 Title</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/cse134-hw3" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="assets/images/thumbnail-large.png" media="(min-width: 1200px)" />
                        <source srcSet="assets/images/thumbnail-medium.png" media="(min-width: 768px)" />
                        <img src="assets/images/thumbnail-small.png" alt="Project Thumbnail" />
                    </picture>
                    <p>This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>

                <section id="project3" class="project">
                    <h2>Project 3 Title</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/cse134-hw3" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/thumbnail-large.png" media="(min-width: 1200px)" />
                        <source srcSet="../assets/images/thumbnail-medium.png" media="(min-width: 768px)" />
                        <img src="../assets/images/thumbnail-small.png" alt="Project Thumbnail" />
                    </picture>
                    <p>This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
            </div>
        </main>
    );
}
  
export default Projects;
