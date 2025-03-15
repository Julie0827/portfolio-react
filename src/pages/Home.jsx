import '../styles/home.css';

function Home() {
    return (
        <main id="main-page-container">
            <hgroup>
                <h1>Hi, I'm <span id="my-name">Julie</span>! Glad to Have You Here.</h1>
                <p>
                I'm a fourth-year Computer Science student at UC San Diego, and this website is my portfolio. Here, you can learn more about me on the About Me page, explore my work on the Projects page, view and download my resume on the Resume page, and find my contact details on the Contact page. I hope you find this website helpful in getting to know me better. Thanks again for visiting!
                </p>
            </hgroup>
            <div id="main-page-image-container">
                <picture id="main-img">
                <source srcSet="/assets/images/homepage-intro-large.png" media="(min-width: 1000px)" />
                <img src="/assets/images/homepage-intro-medium.png" alt="3D illustration of a girl using a laptop on a fluffy cloud" />
                </picture>
                <img className="sub-img top-left" src="/assets/images/heart.png" alt="3D illustration of a red heart" />
                <img className="sub-img top-right" src="/assets/images/books.png" alt="3D illustration of three books" />
                <img className="sub-img bottom-left" src="/assets/images/ice-cream.png" alt="3D illustration of an ice cream cone with three scoops" />
                <img className="sub-img bottom-right" src="/assets/images/gamepad.png" alt="3D illustration of a yellow game controller" />
            </div>
        </main>
    );
}

export default Home;

