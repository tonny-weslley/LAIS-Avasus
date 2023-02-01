import { useParams } from "react-router";
import { Title3, AlternativeSubtitle } from "../../components/styled-components/Texts";
import { Section, CursoTituloSection, HeaderCurso } from "../../components/styled-components/Sections"; 
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
                <HeaderCurso>
                    <Title3>{curso.titulo}</Title3>
                    <AlternativeSubtitle> {curso.parceiros} </AlternativeSubtitle>
                </HeaderCurso>
            </CursoTituloSection>
        </Section>
    );

}

export default Curso;