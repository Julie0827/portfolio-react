import { Link, NavLink } from "react-router-dom";
import { useDropdownToggle } from '../scripts/main';

function Header() {
    const { isDropdownOpen, toggleDropdown } = useDropdownToggle();

    return (
        <header>
            <nav className="main-nav">
                <Link className="logo" to="/">
                <img src="/assets/images/logo.png" alt="Logo" />
                </Link>

                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                About Me
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Projects
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Resume
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Contact
                </NavLink>

                <input type="text" className="search-box" placeholder="Search..." />
                <img
                    className="dropdown-nav-btn"
                    src={isDropdownOpen ? '/assets/images/x.svg' : '/assets/images/hamburger.svg'}
                    alt={isDropdownOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={toggleDropdown}
                />
            </nav>
            <div className="setting">
                <audio controls loop>
                <source src="assets/audio/background_audio.mp3" type="audio/mpeg" />
                Sorry, your browser doesn't support this audio.
                </audio>
                <button className="play-pause-btn" title="Play Music">
                <img className="music-background" src="assets/images/music-background.svg" alt="Stars forming a circular pattern" />
                <img className="play-pause-icon" src="assets/images/play.svg" alt="Play Icon" />
                </button>

                <div className="toggle-container" title="Switch to Dark Mode">
                <div className="inner-container">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle sun-moon"></div>
                </div>
                </div>
            </div>
            <aside className="search-sidebar">
                <div className="search-results-container"></div>
                <div className="search-not-found hidden">
                    <p>No results found</p>
                    <img src="/assets/images/search-not-found.png" alt="3D illustration of a bored girl sitting cross-legged with a laptop on her lap" />
                </div>
            </aside>
            <nav className={`dropdown-nav ${isDropdownOpen ? '' : 'hide'}`}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "dropdown-nav-link active" : "dropdown-nav-link")}>
                Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "dropdown-nav-link active" : "dropdown-nav-link")}>
                About Me
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "dropdown-nav-link active" : "dropdown-nav-link")}>
                Projects
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? "dropdown-nav-link active" : "dropdown-nav-link")}>
                Resume
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "dropdown-nav-link active" : "dropdown-nav-link")}>
                Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
