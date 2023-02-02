import BreadCrumbs from "../../components/Breadcrumbs";
import { Section, ModulosSection } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import DadosGerais from "../../components/DadosGerais";
import {getAll} from "../../services/TransparenciaRequest";
import { useEffect, useState } from "react";
import Piechart from "../../components/Piechart";



const Transparencia = () => {

    const initialState = {
        dados_gerais: {
            usuarios_registrados: 0,
            incricoes_realizadas: 0,
            cursos_ativos: 0,
            direito_certificacao: 0,
            investimento_medio_curso: 0,
            investimento_medio_aluno: 0
        }
    };


    const [dados, setDados] = useState<any>(initialState);

   
    useEffect(() => {
        getAll().then((response) => {
            setDados(response.data);
        });
    }, []);

    return(

        <Section>
        <ModulosSection>
        
        <BreadCrumbs />

        <Title> Transparência </Title>

        <DadosGerais dados={dados.dados_gerais}/>

        <Piechart/>

      </ModulosSection>
    
    </Section>
    );
};

export default Transparencia;