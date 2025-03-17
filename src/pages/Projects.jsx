import '../styles/projects.css';

function Projects() {
    return (
        <main id="projects-container">
            <h1>Projects</h1>
            <nav id="project-nav">
                <a href="#project1">Gen Z Work Journal</a>
                <a href="#project2">PnutOS</a>
                <a href="#project3">Avovision</a>
                <a href="#project4">To Do List</a>
                <a href="#project5">2048 AI</a>
                <a href="#project6">Gomoku AI</a>
            </nav>
            <div id="projects">
                <section id="project1" class="project">
                    <h2>Gen Z Work Journal</h2>
                    <a class="repo-btn" href="https://github.com/cse110-sp24-group19/final-project" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project1L.png" media="(min-width: 1000px)" />
                        <img src="../assets/images/project1M.png" alt="Gen Z Work Journal Main Page" />
                    </picture>
                    <p>The Gen Z Work Journal is a web application designed to help users manage tasks, set goals, and stay motivated through an interactive reward system. As users complete tasks and log their progress, they earn points that allow their character to evolve from an egg into a fully developed creature, such as a Monkey or a Dragon. The app features a Calendar & Journal section where users can log daily reflections and search past entries. The Goal Setting feature allows users to create and track daily, weekly, and long-term goals, marking them as complete or editing them as needed. The Rewards System keeps users engaged by awarding points that contribute to their character's evolution, providing a fun incentive to stay productive. Additionally, the Creative Play section includes a whiteboard feature using p5.js, allowing users to draw and take notes.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
                <section id="project2" class="project">
                    <h2>PnutOS</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/temporary" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project2L.png" media="(min-width: 1000px)" />
                        <img src="../assets/images/project2M.png" alt="PnutOS Welcome Screen" />
                    </picture>
                    <p>PnutOS is a lightweight, text-based operating system built for simplicity and efficiency. It runs in text mode, featuring a custom bootloader, a keyboard-driven command-line interface, and basic memory management. PnutOS supports basic file operations, allowing users to read and write small files in memory. It comes with a command-line shell that lets users run simple system commands, check memory usage, display system info, and navigate a basic file structure. Keyboard input is fully supported, including special keys like Backspace and Arrow Keys for smoother text navigation. For memory management, PnutOS includes a simple heap allocation system, making it possible to dynamically manage memory as needed. It also has basic process management, allowing multiple tasks to run cooperatively. Though still in development, PnutOS lays the foundation for future features like inter-process communication (IPC), basic networking over serial ports, and an expanded file system.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
                <section id="project3" class="project">
                    <h2>Avovision</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/temporary" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project3L.jpg" media="(min-width: 1000px)" />
                        <img src="../assets/images/project3M.jpg" alt="Avocado Tree Predictions Bounding Boxes" />
                    </picture>
                    <p>The AvoVision project applies machine learning and computer vision techniques to detect avocado trees in images, with the goal of automating precision agriculture tasks. By using YOLOv8, the project improves efficiency in agricultural monitoring by identifying trees and analyzing traits such as branching patterns and canopy size. The data was formatted for YOLOv8 training, testing different configurations, including various image resolutions. The best results came from high-quality images at a resolution of 1280, leading to improved recall performance. After training, the final model was deployed in Label Studio, where it successfully automated avocado tree detection. These results provide a strong foundation for future improvements, including node detection and trait analysis. The project also aims to extend its methods to other crops like citrus trees, contributing to the development of AI-driven tools in precision agriculture.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
                <section id="project4" class="project">
                    <h2>To Do List</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/temporary" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project4L.png" media="(min-width: 1000px)" />
                        <img src="../assets/images/project4M.png" alt="To Do List Page" />
                    </picture>
                    <p>The To-Do List is a simple task management tool with CRUD functionality (Create, Read, Update, Delete). Users can add tasks, edit them, mark them as completed, and delete them as needed. The page updates dynamically without requiring a refresh, making task management smooth and efficient. Tasks are saved persistently, so they remain even after reloading the page. The design includes clear visual indicators for pending tasks, helping users stay organized. The page is also responsive, working well on both desktop and mobile devices. In the future, features like drag-and-drop reordering, due date reminders, and backend integration could be added to enhance its functionality.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
                <section id="project5" class="project">
                    <h2>2048 AI</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/temporary" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project5L.png" media="(min-width: 1000px)" />
                        <img src="../assets/images/project5M.png" alt="Screenshot of the 2048 game reaching the 2048 tile" />
                    </picture>
                    <p>This project was part of my coursework and focused on developing an AI for the 2048 game using the expectimax algorithm. The base game engine was provided as part of the assignment, and my task was to implement an AI that could make optimal moves by constructing and evaluating a depth-3 game tree. In this implementation, the AI acts as the max player, making strategic moves to maximize the game score, while the computer acts as the chance player, randomly placing tiles on the board. The AI evaluates possible game states by simulating sequences of moves and selecting the best one based on expected outcomes. I could extend the AI by increasing the search depth or improving the evaluation function to achieve higher scores and reach the 2048 tile more frequently.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
                <section id="project6" class="project">
                    <h2>Gomoku AI</h2>
                    <a class="repo-btn" href="https://github.com/Julie0827/temporary" target="_blank">GitHub Repository</a>
                    <picture>
                        <source srcSet="../assets/images/project6L.png" media="(min-width: 1000px)" />
                        <img src="../assets/images/project6M.png" alt="Screenshot of the final results of a Gomoku match" />
                    </picture>
                    <p>As part of my coursework, I worked on implementing an AI for Gomoku using Monte Carlo Tree Search (MCTS). Gomoku is a strategy game played on a grid where two players take turns placing black and white pieces, aiming to connect five pieces in a row horizontally, vertically, or diagonally. The goal of this project was to develop an AI capable of making strong decisions using the MCTS algorithm, a method commonly used in game AI for decision-making under uncertainty. My task was to implement MCTS in Python within an existing game engine. The AI simulates thousands of possible game scenarios and selects moves based on statistical evaluations, balancing exploration and exploitation.</p>
                    <a href="#top" class="top-btn">Go to Top</a>
                </section>
            </div>
        </main>
    );
}
  
export default Projects;
