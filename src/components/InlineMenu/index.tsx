import { NavbarInlineInicio, NavbarInlineActionInicio } from "../styled-components/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { setModuloSession } from "../../redux/ModulosSession/slice";

import { RootState } from "../../redux/store";

const InlineMenu = () => {

    const { selected } = useSelector((state: RootState) => state.modulosSession);
    const dispatch = useDispatch();

    const handleModuloSession = (event: React.MouseEvent<HTMLDivElement>, modulo :string) => {
        dispatch(setModuloSession(modulo));
    }

    return(

        <NavbarInlineInicio>
            <NavbarInlineActionInicio className={`${selected == 'populares' ? 'selected' : ''}`} onClick={(e) => {handleModuloSession(e, "populares")}}>Mais populares</NavbarInlineActionInicio>
            <NavbarInlineActionInicio className={`${selected == 'avaliados' ? 'selected' : ''}`} onClick={(e) => {handleModuloSession(e, "avaliados")}}>Mais bem avaliados</NavbarInlineActionInicio>
            <NavbarInlineActionInicio className={`${selected == 'recentes' ? 'selected' : ''}`} onClick={(e) => {handleModuloSession(e, "recentes")}}>Mais recentes</NavbarInlineActionInicio>
        </NavbarInlineInicio>

    )

}


export default InlineMenu;