import Matriculados from "../../assets/icons/matriculados.svg";
import Horas from "../../assets/icons/horas.svg";

import {
  CursosCard,
  CardFigure,
  CardInfo,
  CardInfoItem,
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

      <Subtitle>{titulo}</Subtitle>
      <TextVariant>{parceiros}</TextVariant>

      <CardInfo>
        <CardInfoItem>
          <img src={Matriculados} />
          <p>{matriculados}</p>
        </CardInfoItem>

        <CardInfoItem>
          <img src={Horas} />
          <p>{duracao}</p>
        </CardInfoItem>
      </CardInfo>

      <StyledRating value={avaliacao} readOnly />

      <ButtonModulo>Ver Módulo</ButtonModulo>
    </CursosCard>
  );
};

export default ModulosCard;
