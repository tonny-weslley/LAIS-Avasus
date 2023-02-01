import Matriculados from "../../assets/icons/matriculados.svg";
import Horas from "../../assets/icons/horas.svg";
import Data from "../../assets/icons/data.svg";
import {
  InlineDiv,
  Modulos,
  InlineDivItem,
} from "../styled-components/Sections";

import { TextMargin } from "../styled-components/Texts";

import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const InlineModuloInfo = (curso: any) => {
  const { duracao, matriculados, criado_em, avaliacao, numero_avaliacoes } =
    curso.curso;
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#F6303F",
    },
  });

  return (
      <InlineDiv>
        <InlineDivItem>
          <img src={Horas} />
          <TextMargin>{duracao}oras</TextMargin>
        </InlineDivItem>
        <InlineDivItem>
          <img src={Data} alt="" />
          <TextMargin>{criado_em}</TextMargin>
        </InlineDivItem>
        <InlineDivItem>
          <img src={Matriculados} alt="" />
          <TextMargin>{matriculados} alunos matriculados</TextMargin>
        </InlineDivItem>
        <InlineDivItem>
          <StyledRating value={avaliacao} precision={0.1} readOnly />
          <TextMargin>{avaliacao.substring(0, avaliacao.length - 1)}</TextMargin>
          <TextMargin>({numero_avaliacoes} avaliações)</TextMargin>
        </InlineDivItem>
      </InlineDiv>

  );
};

export default InlineModuloInfo;
