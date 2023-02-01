
import { ParceirosCardPainel } from "../styled-components/Cards";
import { Title2 } from "../styled-components/Texts";


const ParceirosCard = (parceiro:any) =>{


    return(
        <ParceirosCardPainel>
            <figure>
             <img src={parceiro.parceiro.capa} alt={parceiro.parceiro.titulo} />
            </figure>
            <hr/>
            <Title2>{parceiro.parceiro.titulo}</Title2>
        </ParceirosCardPainel>
    )

}

export default ParceirosCard