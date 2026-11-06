import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar px-4 py-3">
            <h3>My Portfolio.</h3>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Header;