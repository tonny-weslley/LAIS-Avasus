import Matriculados from "../../assets/icons/matriculados.svg";
import Horas from "../../assets/icons/horas.svg";

import {
  CardFigure,
  CursoCardPainel,
  CardStatusItemPainel,
} from "../styled-components/Cards";
import {
  AlternativeSubtitle,
  TextVariant,
  Text,
  LinkText,
} from "../styled-components/Texts";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

const CursoCard = (curso: any) => {

    const navigate = useNavigate();

  const { id, capa, titulo, matriculados, parceiros, duracao, avaliacao, resumo } =
    curso.curso;

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#F6303F",
    },
  });

  return (
    <CursoCardPainel>
      <CardFigure>
        <img src={capa} alt="" />
      </CardFigure>

      <AlternativeSubtitle>{titulo}</AlternativeSubtitle>

      <TextVariant>{parceiros}</TextVariant>

      <CardStatusItemPainel>
        <img src={Matriculados} alt="" />
        <Text>{matriculados}</Text>
        <img src={Horas} alt="" />
        <Text>{duracao}</Text>
        <StyledRating value={avaliacao} precision={0.1} readOnly />
        <p>{avaliacao.substring(0, avaliacao.length - 1)}</p>
      </CardStatusItemPainel>

      <Text>{resumo}</Text>

      <LinkText onClick={(e)=>{navigate(`/cursos/modulos/${id}`)}} >Ver Curso</LinkText>
    </CursoCardPainel>
  );
};

export default CursoCard;
