import Drawer from "@mui/material/Drawer";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../../redux/Drawer/slice";
import { NavbarDrawer } from "../styled-components/Navbar";
import {
  ButtonExit,
  ButtonDrawer,
  ButtonDrawerVariant,
} from "../styled-components/Buttons";
import { setPage } from "../../redux/Navbar/slice";
import { useNavigate } from "react-router-dom";
import { CenterSection } from "../styled-components/Sections";


const NavDrawer = () => {
  const drawer = useSelector((state: RootState) => state.drawer);
  const { page } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const handleSetPage = (event: any, page: string, redirect: string) => {
    event.preventDefault();
    dispatch(setPage(page));
    handleToggleDrawer();
    navigate(redirect);
  };

  return (
    <Drawer anchor="right" open={drawer.isOpen} onClose={handleToggleDrawer}>
      <NavbarDrawer>
        <ButtonExit onClick={handleToggleDrawer}>X</ButtonExit>

        <nav>
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
        </nav>

        <CenterSection>
          <ButtonDrawer>Entrar</ButtonDrawer>
          <ButtonDrawerVariant>Cadastrar</ButtonDrawerVariant>
        </CenterSection>
      </NavbarDrawer>
    </Drawer>
  );
};

export default NavDrawer;
