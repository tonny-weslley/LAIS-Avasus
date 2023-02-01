import { CursoCardPainel } from "../styled-components/Cards";

const CursoCard = (curso:any) => {

    const { capa, titulo, matriculados, parceiros, duracao, avaliacao } =
    curso.curso;

    return (
        <CursoCardPainel>
            <h1>{titulo}</h1>
        </CursoCardPainel>
    );
};

export default CursoCard;