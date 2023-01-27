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

export const NavDrawer = () => {
  const drawer = useSelector((state: RootState) => state.drawer);
  const dispatch = useDispatch();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <Drawer anchor="right" open={drawer.isOpen} onClose={handleToggleDrawer}>
      <NavbarDrawer>
        <ButtonExit onClick={handleToggleDrawer}>X</ButtonExit>

        <nav>
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
        </nav>

        <div>
          <ButtonDrawer>Entrar</ButtonDrawer>
          <ButtonDrawerVariant>Cadastrar</ButtonDrawerVariant>
        </div>
      </NavbarDrawer>
    </Drawer>
  );
};

export default NavDrawer;
