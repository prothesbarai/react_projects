import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
            <div className="top-header py-2 text-light bg-dark">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <a href="mailto:developerprothes16@gmail.com" className="text-light text-decoration-none me-3">
                            <i className="fas fa-envelope"></i> developerprothes16@gmail.com
                        </a>
                        <a href="tel:+8801317818826" className="text-light text-decoration-none">
                            <i className="fa-solid fa-phone"></i> +8801317818826
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/prothesbarai" target="_blank" className="text-light me-3"><i className="fab fa-github"></i></a>
                        <a href="https://wa.me/01317818826" target="_blank" className="text-light me-3"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://m.me/prothesbarai2.0" target="_blank" className="text-light me-3"><i className="fa-brands fa-facebook-messenger"></i></a>
                        <a href="https://t.me/prothesbarai" target="_blank" className="text-light me-3"><i className="fab fa-telegram"></i></a>
                    </div>
                </div>
            </div>

            <hr className="m-0 p-0"/>

            <nav className="navbar navbar-expand-lg navbar-dark position-sticky top-0 bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Prothes Barai</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/myskills">My Skill</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="">
                                    My Projects
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item text-dark" to="/softwareprojects" style={{ transition: "background-color 0.3s" }}>Software Projects</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to="/webprojects" style={{ transition: "background-color 0.3s" }}>Web Projects</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to="/animationprojects" style={{ transition: "background-color 0.3s" }}>Animation Projects</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-dark" to="/toolsprojects" style={{ transition: "background-color 0.3s" }}>Tools Projects</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/myblog">My Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
