import '../styles/contact.css';

function Contact() {
    return (
        <main id="contact-container">
            <hgroup>
                <h1>My Contact</h1>
                <p>Feel free to reach out!</p>
            </hgroup>
            <address>
                <my-contact data-contact="github">
                    <a href="https://github.com/Julie0827" target="_blank">
                        <img src="/assets/images/github.png" alt="3D illustration of GitHub logo" />
                    </a>
                    <p>Visit my <a href="https://github.com/Julie0827" target="_blank">GitHub</a></p>
                </my-contact>
                <my-contact data-contact="linkedin" target="_blank">
                    <a href="https://www.linkedin.com/in/julie-hong-065579298/">
                        <img src="/assets/images/linkedin.png" alt="3D illustration of LinkedIn logo" />
                    </a>
                    <p>Connect with me on <a href="https://www.linkedin.com/in/julie-hong-065579298/" target="_blank">LinkedIn</a></p>
                </my-contact>
                <my-contact data-contact="email">
                    <a href="mailto:joh046@ucsd.edu" target="_blank">
                        <img src="/assets/images/email.png" alt="3D illustration of email icon" />
                    </a>
                    <p>Email me at <a href="mailto:joh046@ucsd.edu" target="_blank">my UCSD email</a></p>
                </my-contact>
            </address>

            <form id="contact-form" action="https://formspree.io/f/mwpvbryr" method="POST">
                <fieldset className="form-field">
                    <label htmlFor="name">Name<span className="required-indicator">*</span></label>
                    <input type="text" id="name" name="name" required minLength="2" maxLength="50" placeholder="Enter your name" />
                </fieldset>
                
                <fieldset className="form-field">
                    <label htmlFor="email">Email<span className="required-indicator">*</span></label>
                    <input type="email" id="email" name="email" required maxLength="100" placeholder="Enter your email" />
                </fieldset>

                <fieldset className="form-field">
                    <label htmlFor="comments">Comments<span className="required-indicator">*</span></label>
                    <textarea id="comments" name="comments" rows="5" required minLength="10" maxLength="300" placeholder="Your message here..."></textarea>
                </fieldset>

                <button type="submit" className="btn">Send Message</button>
            </form>
        </main>
    );
}
  
export default Contact;
