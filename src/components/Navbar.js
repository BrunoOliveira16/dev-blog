import '../styles/components/navbar.sass';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="brand">
            &lt; Dev <span>Blog</span> /&gt;
        </NavLink>
        <ul className="links-list">
            <li>
                <NavLink to="/" id="home">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/login" id="login">Entrar</NavLink>
            </li>
            <li>
                <NavLink to="/register" id="register">Cadastrar</NavLink>
            </li>
            <li>
                <NavLink to="/about" id="about">Sobre</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;