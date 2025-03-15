import '../styles/custom404.css';

function Custom404() {
    return (
        <main id="custom-404-page">
            <hgroup>
                <h1>404 - Page Not Found</h1>
                <p>Hmm… this page seems lost.</p>
                <p>You can use the navigation bar or search bar to keep exploring.</p>
            </hgroup>
            <picture>
                <source srcSet="assets/images/custom-404-large.png" media="(min-width: 1000px)" />
                <img src="assets/images/custom-404-medium.png" alt="3D illustration of a girl sitting on large 404 numbers" />
            </picture>
        </main>
    );
}

export default Custom404;
