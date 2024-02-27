import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <header>
          <h1>Conjunto de recomendaciones</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/recomendaciones">Recomendaciones</Link>
            <Link to="/ejemplos_de_aplicacion">Ejemplos de aplicación</Link>
          </nav>
        </header>
    );
};

export default Header;