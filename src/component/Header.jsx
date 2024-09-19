import { NavLink  } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <h1>William Zovistoski</h1>
            <nav>
                <ul className="nav-bar">
                    <li><NavLink to="/" activeClassName="active">About Me</NavLink></li>
                    <li><NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink></li>
                    <li><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/Resume" activeClassName="active">Resume</NavLink></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;