import Matriculados from "../../assets/icons/matriculados.svg";
import Horas from "../../assets/icons/horas.svg";

import {
  CursosCard,
  CardFigure,
  CardInfo,
  CardStatusItem,
  CardStatus,
} from "../styled-components/Cards";
import { Subtitle, TextVariant } from "../styled-components/Texts";
import { ButtonModulo } from "../styled-components/Buttons";

import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const ModulosCard = (curso: any) => {
  const { capa, titulo, matriculados, parceiros, duracao, avaliacao } =
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

      <StyledRating value={avaliacao} precision={0.2} readOnly />

      <ButtonModulo>Ver Módulo</ButtonModulo>
    </CursosCard>
  );
};

export default ModulosCard;
