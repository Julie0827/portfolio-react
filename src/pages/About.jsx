import '../styles/about.css';

function About() {
    return (
        <main id="about-me-container">
            <h1>About Me</h1>

            <div id="profile-container">
                <picture id="profile">
                    <source srcSet="/assets/images/profile-large.jpg" media="(min-width: 1000px)" />
                    <source srcSet="/assets/images/profile-medium.jpg" media="(min-width: 600px)" />
                    <img src="/assets/images/profile-small.jpg" alt="Profile Photo" />
                </picture>

                <hgroup id="bio">
                    <h2>Biography</h2>
                    <p>Hi, I'm Julie! I'm a fourth-year Computer Science student at UC San Diego. I love learning new things, especially when it comes to tech. Some of my favorite classes so far have been <strong>Operating Systems</strong> and <strong>Computer Networks</strong>, and lately, I've been diving deeper into OS in my free time.</p>
                    <p>Outside of school, I love reading sci-fi books, and <cite>Ready Player One</cite> is one of my all-time favorites. I also love animals—I have a puppy, and she means <em>the world</em> to me!</p>
                    <p>I really enjoy studying on campus with my friends, and we always end up at <strong>Franklin Antonio Hall</strong>, our favorite spot.</p>
                    <p>As for my career path, I'm still figuring things out, but for now, I'm just enjoying learning, coding, and spending time with the people I love.</p>
                </hgroup>
            </div>
            
            <hgroup id="skill">
                <h2>Skills</h2>
                <p>I'm comfortable working with <span className="cpp programming"><strong>C++</strong></span>, <span className="java programming"><strong>Java</strong></span>, <span className="python programming"><strong>Python</strong></span>, and <span className="c programming"><strong>C</strong></span>, and I also have experience with <span className="programming"><strong>HTML</strong></span>, <span className="programming"><strong>CSS</strong></span>, and <span className="programming"><strong>JavaScript</strong></span>, though I'm still improving my web development skills. I've worked with <strong>Pandas</strong>, <strong>NumPy</strong>, and <strong>Scikit-Learn</strong>, along with <strong>YOLOv8</strong> and <strong>PyTorch</strong> for machine learning tasks. I've also learned <strong>Docker</strong> for containerization and have experience working in <strong>Linux</strong> and <strong>macOS</strong> environments. In addition, I have some experience with <strong>x86 Assembly</strong> and an understanding of <strong>operating systems concepts</strong> like process management and memory allocation.</p>
            </hgroup>

            <hgroup id="experience">
                <h2>Experience</h2>
                <p>As a <strong>Research Assistant</strong> for the <strong>Avocado Computer Vision Project</strong> at <strong>UC San Diego</strong> (Aug 2024 – Present), I have contributed to improving avocado tree detectionin images using YOLOv8 for precision agriculture applications. My work involves preparing datasets in a YOLO-compatible format, ensuring proper data cleaning and directory structuring. Additionally, I have trained and evaluated YOLOv8 models with different configurations to optimize recall and precision.</p>
            </hgroup>

            <hgroup id="preference">
                <h2>Job Preferences</h2>
                <p>I haven't decided on a specific career path yet, but I see every opportunity as a chance to learn and grow. I'm particularly interested in <strong>systems-related roles</strong>, such as <strong>operating systems</strong> and <strong>computer networks</strong>, but I'm also open to working in <strong>backend or frontend development</strong>. I currently live in <strong>San Diego</strong>, so I'd prefer opportunities in the area, but I'm also open to <strong>remote positions</strong>.</p>
            </hgroup>
        </main>
    );
}
  
export default About;
