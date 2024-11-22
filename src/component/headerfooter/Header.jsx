import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand">Prothes Barai</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" aria-current="page">About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myskills" className="nav-link" aria-current="page">My Skills</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Projects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/webprojects">Web Projects</Link></li>
                                    <li><Link className="dropdown-item" to="/animationprojects">Animation Projects</Link></li>
                                    <li><Link className="dropdown-item" to="/toolsprojects">Tools Projects</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" aria-current="page">Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
