import '../styles/components/navbar.sass';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useAuthValue();

  return (
    <nav className="navbar">
        <NavLink to="/" className="brand">
            &lt; Dev <span>Blog</span> /&gt;
        </NavLink>
        <ul className="links-list">
            <li>
                <NavLink to="/" id="home">Inicio</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" id="login">Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" id="register">Cadastrar</NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to="/posts/create" id="create-post">Novo Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" id="dashboard">Dashboard</NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink to="/about" id="about">Sobre</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;