import { NavbarInline } from "../styled-components/Navbar";

const InlineMenu = () => {

    return(

        <NavbarInline>
            <ul>
                <li>
                    <a href="#">Mais populares</a>
                </li>
                <li>
                    <a href="#">Mais bem avaliados</a>
                </li>
                <li>
                    <a href="#">Mais recentes</a>
                </li>
            </ul>  
        </NavbarInline>

    )

}

export default InlineMenu;