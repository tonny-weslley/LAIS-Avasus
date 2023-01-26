import LogoAvasus from "../../assets/logos/avasus.svg";
import {
  NavbarDiv,
  NavbarLogo,
  NavbarNav,
  NavbarSearch,
} from "../styled-components/Navbar";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <NavbarDiv>
      <NavbarLogo>
        <img src={LogoAvasus} alt="Avasus Logo" />
      </NavbarLogo>

      <NavbarNav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Parceiros</a>
          </li>
          <li>
            <a href="#">Transparência</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </NavbarNav>

      <NavbarSearch>
        <BsSearch />
        <input type="text" placeholder="Buscar por um assunto..." />
      </NavbarSearch>

      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="register">Registrar</button>
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
