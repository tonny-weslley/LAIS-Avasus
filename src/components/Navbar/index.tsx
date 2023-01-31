import LogoAvasus from "../../assets/logos/avasus.svg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavbarDiv,
  NavbarLogo,
  NavbarNav,
  NavbarSearch,
  NavbarAuthButtons,
  ResponsiveNavbar,
} from "../styled-components/Navbar";
import { Button, ButtonVariant } from "../styled-components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../redux/Drawer/slice";
import { setPage } from "../../redux/Navbar/slice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.navbar);
  const navigate = useNavigate();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const handleSetPage = (event: any, page: string, redirect:string) => {
    event.preventDefault();
    dispatch(setPage(page));
    navigate(redirect);
  };

  return (
    <NavbarDiv>
      <NavbarLogo>
        <img src={LogoAvasus} alt="Avasus Logo" />
      </NavbarLogo>

      <NavbarNav>
        <ul>
          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "/", "/");
              }}
              className={`${page == "/" ? "nav-select" : "nav-text"}`}
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "sobre-nos", "/sobre-nos");
              }}
              className={`${page == "sobre-nos" ? "nav-select" : "nav-text"}`}
            >
              Sobre Nós
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "cursos", "/cursos/modulos");
              }}
              className={`${page == "cursos" ? "nav-select" : "nav-text"}`}
            >
              Cursos
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "parceiros", "/parceiros");
              }}
              className={`${page == "parceiros" ? "nav-select" : "nav-text"}`}
            >
              Parceiros
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "transparencia", "/transparencia");
              }}
              className={`${
                page == "transparencia" ? "nav-select" : "nav-text"
              }`}
            >
              Transparência
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                handleSetPage(e, "contato", "/contato");
              }}
              className={`${page == "contato" ? "nav-select" : "nav-text"}`}
            >
              Contato
            </a>
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
