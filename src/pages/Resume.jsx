import '../styles/resume.css';

function Resume() {
    return (
        <main id="resume-container">
            <hgroup>
                <h1>My Resume</h1>
                <p>Feel free to download my resume if you're interested.</p>
            </hgroup>
            <a  className="btn" href="assets/pdf/resume_Julie.pdf" download="resume_Julie.pdf">Download</a>
        </main>
    );
}

export default Resume;
