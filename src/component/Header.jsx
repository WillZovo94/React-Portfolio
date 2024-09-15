import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <h1>William Zovistoski</h1>
            <nav>
                <ul className="nav-bar">
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;