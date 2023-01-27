import Matriculados from '../../assets/icons/matriculados.svg';
import Horas from '../../assets/icons/horas.svg'; 

import {CursosCard, CardFigure} from '../styled-components/Cards'; 
import {Subtitle, TextVariant} from '../styled-components/Texts';
import { Button } from '../styled-components/Buttons';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';




const ModulosCard = (curso:any) => {
    const { capa, titulo, matriculados, parceiros, duracao,  avaliacao} = curso.curso;

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#F6303F',
        },
    })

    return (
        <CursosCard>

            <CardFigure>
                <img src={capa} />
            </CardFigure>

            <Subtitle>{titulo}</Subtitle>
            <TextVariant>{parceiros}</TextVariant>

            <div className="card-info">
                <div className="card-info-item">
                    <img src={Matriculados} />
                    <p>{matriculados}</p>
                </div>
            </div>

            <div className="card-info">
                <div className="card-info-item">
                    <img src={Horas} />
                    <p>{duracao}</p>
                </div>
            </div>

            <StyledRating 
            value={avaliacao}
            readOnly
            />

            <Button>Ver Módulo</Button>



        </CursosCard>
        
    );
};

export default ModulosCard;