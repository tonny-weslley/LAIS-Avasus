import { Section } from "../../components/styled-components/Sections";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ModulosSection } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import { getByCategory } from "../../services/CursosRequest";
import { useEffect, useState } from "react";

const Modulos = () => {
    const categorias = ['Especialização', 'Módulo de extensão', 'Síflis e outras ist', 'Covid 19', 'Preceptoria', 'Doenças raras', 'WebPalestras', 'Acessibilidade', 'Sistema prisional', 'OPAS'];
    const [categoria, setCategoria] = useState(categorias[0]);
    const [cursos, setCursos] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getByCategory(categoria, 6).then((response) => {
            setCursos(response.data);
            setLoading(false);
        });
    }, [categoria]);

    const handlePagination = (page: number) => {
        setPagination({ ...pagination, page });
    };

    const handleLimit = (limit: number) => {
        setPagination({ ...pagination, limit });
    };

    const handleCategory = (category: string) => {
        setCategoria(category);
    };


  return (
    <Section>
      <ModulosSection>
        <Breadcrumbs />

        <Title>Módulos Educacionais</Title>




      </ModulosSection>
    </Section>
  );
};

export default Modulos;
