import { useParams } from "react-router";
import { Title2, AlternativeSubtitle } from "../../components/styled-components/Texts";
import { Section, CursoTituloSection } from "../../components/styled-components/Sections"; 
import { get } from "../../services/CursosRequest";
import { useEffect, useState } from "react";

const Curso = () => {

    const initial = {
        titulo: '',
        descricao: '',
        duracao: '',
        matriculados: '',
        parceiros: '',
        resumo: '',
        avaliacao: '',
        capa: '',
        modulos: []
    }

    const { id } = useParams()
    const [ curso, setCurso ] = useState(initial)

    useEffect(() => {
        get(id).then((response) => {
            setCurso(response.data)
        })
    }, [id])


    return (

        <Section>
            <CursoTituloSection src={curso.capa}>
            <Title2>{curso.titulo}</Title2>
            <AlternativeSubtitle> {curso.parceiros} </AlternativeSubtitle>
            </CursoTituloSection>
        </Section>
    );

}

export default Curso;