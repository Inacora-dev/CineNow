import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/logo.png" alt="Logo CineNow" className="navbar-logo" />
            </div>
            <ul className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </ul>
        </nav>
    );
}

export default NavBar