import LogoAvasus from "../../assets/logos/avasus.svg";
import { BsSearch } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import {
  NavbarDiv,
  NavbarLogo,
  NavbarNav,
  NavbarSearch,
  NavbarAuthButtons,
  ResponsiveNavbar
} from "../styled-components/Navbar";
import { Button, ButtonVariant } from "../styled-components/Buttons";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../redux/Drawer/slice"




const Navbar = () => {
  const dispatch = useDispatch()


  const handleToggleDrawer = () => {
    dispatch(toggleDrawer())
  }

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

      <NavbarAuthButtons>
        <Button>Cadastrar</Button>
        <ButtonVariant>Entrar</ButtonVariant>
      </NavbarAuthButtons>

      <ResponsiveNavbar>
        <ButtonVariant onClick={handleToggleDrawer}>
          <AiOutlineMenu />
        </ButtonVariant>
      </ResponsiveNavbar>

    </NavbarDiv>

    

  );
};

export default Navbar;
