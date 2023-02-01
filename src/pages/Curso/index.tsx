import { useParams } from "react-router";
import {
  Title,
  Title3,
  Text2,
  AlternativeSubtitle,
  TitleAlternative2,
  AlternativeSubtitle2,
} from "../../components/styled-components/Texts";
import {
  Section,
  CursoTituloSection,
  HeaderCurso,
  Modulos,
  DescricaoDiv,
  ObjetivoDiv,
CreditoDiv,
} from "../../components/styled-components/Sections";
import { get } from "../../services/CursosRequest";
import { useEffect, useState } from "react";
import InlineModuloInfo from "../../components/InlineModuloInfo";

const Curso = () => {
  const initial = {
    titulo: "",
    descricao: "",
    duracao: "",
    matriculados: "",
    parceiros: "",
    resumo: "",
    avaliacao: "",
    capa: "",
    modulos: [],
    criado_em: "",
    numero_avaliacoes: "",
    sobre: "",
    objetivo_geral: "",
    objetivo_especifico: "",
    recursos_educacionais: "",
    creditos: [],
  };

  const { id } = useParams();
  const [curso, setCurso] = useState(initial);
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    get(id).then((response) => {
      setCurso(response.data);
    });
  }, [id]);

  return (
    <Section>
      <CursoTituloSection src={curso.capa}>
        <HeaderCurso>
          <Title3>{curso.titulo}</Title3>
          <AlternativeSubtitle> {curso.parceiros} </AlternativeSubtitle>
        </HeaderCurso>
      </CursoTituloSection>

      <Modulos>
        <Title> {curso.titulo} </Title>

        <InlineModuloInfo curso={curso} />

        <TitleAlternative2>Sobre o Curso</TitleAlternative2>

        <DescricaoDiv> {curso.sobre} </DescricaoDiv>

        
        { curso.objetivo_geral || curso.objetivo_especifico ? <TitleAlternative2>Objetivos</TitleAlternative2> : null }

        <ObjetivoDiv>
          {curso.objetivo_geral && (
            <>
              <AlternativeSubtitle2>Objetivo Geral</AlternativeSubtitle2>
              {curso.objetivo_geral}
            </>
          )}

          {curso.objetivo_especifico && (
            <>
              <AlternativeSubtitle2>Objetivos Especificos</AlternativeSubtitle2>
              {curso.objetivo_especifico}
            </>
          )}
        </ObjetivoDiv>


        {curso.recursos_educacionais && (
          <>
            <TitleAlternative2>Recursos educacionais</TitleAlternative2>
            <DescricaoDiv>{curso.recursos_educacionais}</DescricaoDiv>
          </>
        )}
        

        <TitleAlternative2>Créditos</TitleAlternative2>

        <CreditoDiv>
        {curso.creditos.map((credito: any) => (
            <DescricaoDiv>
                <img src={credito.capa} alt="" />
            </DescricaoDiv>
        ))}
        </CreditoDiv>

      </Modulos>
    </Section>
  );
};

export default Curso;
