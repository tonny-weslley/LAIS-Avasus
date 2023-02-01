import { Section } from "../../components/styled-components/Sections";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ModulosSection } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import { getByCategory } from "../../services/CursosRequest";
import { useEffect, useState } from "react";
import InlineModuloMenu from "../../components/InlineModuloMenu";
import CursosShow from "../../components/CursosShow";

import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const Modulos = () => {
    const categorias = ['Especialização', 'Módulo de extensão', 'Síflis e outras ist', 'Covid 19', 'Preceptoria', 'Doenças raras', 'WebPalestras', 'Acessibilidade', 'Sistema prisional', 'OPAS'];
    const categoria = useSelector((state: RootState) => state.modulosCategoria.selected);
    const [cursos, setCursos] = useState([]);
    const page = useSelector((state: RootState) => state.modulosCategoria.page);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getByCategory(categoria, 6, 1).then((response) => {
            setCursos(response.data);
            setLoading(false);
        });
    }, [categoria]);


  return (
    <Section>
      <ModulosSection>
        <Breadcrumbs />

        <Title>Módulos Educacionais</Title>

        <InlineModuloMenu menu={categorias} />

        <CursosShow cursos={cursos}/>

      </ModulosSection>
    </Section>
  );
};

export default Modulos;
