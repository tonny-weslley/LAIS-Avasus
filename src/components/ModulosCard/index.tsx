import Matriculados from "../../assets/icons/matriculados.svg";
import Horas from "../../assets/icons/horas.svg";

import {
  CursosCard,
  CardFigure,
  CardInfo,
  CardStatusItem,
  CardStatus,
  CardRating
} from "../styled-components/Cards";
import { Subtitle, TextVariant } from "../styled-components/Texts";
import { ButtonModulo } from "../styled-components/Buttons";

import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router";

const ModulosCard = (curso: any) => {
  
  const navigate = useNavigate();

  const { id, capa, titulo, matriculados, parceiros, duracao, avaliacao } =
    curso.curso;

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#F6303F",
    },
  });

  return (

    <CursosCard>
      <CardFigure>
        <img src={capa} />
      </CardFigure>

      <CardInfo>
        <Subtitle>{titulo}</Subtitle>
        <TextVariant>{parceiros}</TextVariant>
      </CardInfo>

      <CardStatus>
        <CardStatusItem>
          <img src={Matriculados} />
          <p>{matriculados}</p>
        </CardStatusItem>

        <CardStatusItem>
          <img src={Horas} />
          <p>{duracao}</p>
        </CardStatusItem>
      </CardStatus>

      <CardRating>
        <StyledRating value={avaliacao} precision={0.1} readOnly />
        <p>{avaliacao.substring(0, avaliacao.length - 1)}</p>
      </CardRating>

      <ButtonModulo onClick={(e)=>{navigate(`/cursos/modulos/${id}`)}} >Ver Módulo</ButtonModulo>
    </CursosCard>
  );
};

export default ModulosCard;
