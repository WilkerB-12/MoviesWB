import { Link } from 'react-router-dom';
import logo from '../pngwingcom.png';

function Header() {

    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-sm bg-dark text-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <img src={logo} alt="..." height="60" />
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link" to="/Favorites">Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Escriba palabra clave..." aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header