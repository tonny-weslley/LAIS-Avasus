import { NavbarInline, NavbarInilineAction } from "../styled-components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setModuloCategoria, setPage } from "../../redux/ModulosCategoria/slice";
import { RootState } from "../../redux/store";

const InlineModuloMenu = (menu:any) => {
    const dispatch = useDispatch();
    const { selected } = useSelector((state: RootState) => state.modulosCategoria);

    const handleSetModuloCategoria = (event: any, page: string) => {
        event.preventDefault();
        dispatch(setModuloCategoria(page));
        dispatch(setPage(1));
    };

    return (
        <NavbarInline>
            {menu.menu.map((item:any) => (
                <NavbarInilineAction className={`${selected == item ? 'selected-categoria' : ''}`} onClick={(e)=>{ handleSetModuloCategoria(e, item) }} key={item}>{item}</NavbarInilineAction>
            ))}
        </NavbarInline>
    );

};

export default InlineModuloMenu;