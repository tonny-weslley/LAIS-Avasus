import { Section, PaginationInline } from "../../components/styled-components/Sections";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ModulosSection, PaginationSection } from "../../components/styled-components/Sections";
import { TextVariant, Title } from "../../components/styled-components/Texts";
import { getByCategory } from "../../services/CursosRequest";
import { useEffect, useState } from "react";
import InlineModuloMenu from "../../components/InlineModuloMenu";
import CursosShow from "../../components/CursosShow";
import InlineModuloCategoria from "../../components/InlineModuloCategoria";
import {NavigationButton} from "../../components/styled-components/Buttons";
import { setPage } from "../../redux/ModulosCategoria/slice";

import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Pagination } from "@mui/material";


const Modulos = () => {
    const categorias = ['Especialização', 'Módulo de extensão', 'Síflis e outras ist', 'Covid 19', 'Preceptoria', 'Doenças raras', 'WebPalestras', 'Acessibilidade', 'Sistema prisional', 'OPAS'];
    const categoria = useSelector((state: RootState) => state.modulosCategoria.selected);
    const [cursos, setCursos] = useState([]);
    const [qPage, setQPage] = useState(1);
    const page = useSelector((state: RootState) => state.modulosCategoria.page);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        getByCategory(categoria, 6, page).then((response) => {
            setCursos(response.data);
            setLoading(false);
            setQPage(Math.ceil(response.headers['x-total-count'] / 6));
        });
    }, [categoria, page]);


    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setPage(page));
    };

    const handleNextPage = (event: any) => {
        dispatch(setPage(page + 1));
    };
    const handlePreviousPage = (event: any) => {
        dispatch(setPage(page - 1));
    };

  return (
    <Section>
      <ModulosSection>
        <Breadcrumbs />

        <Title>Módulos Educacionais</Title>

        <InlineModuloMenu menu={categorias} />
        <InlineModuloCategoria menu={categorias}/>

        <CursosShow cursos={cursos}/>

        <PaginationSection>
          <Pagination page={page} onChange={handleChange}  count={qPage} shape="rounded"/>
        </PaginationSection>

        <PaginationInline>
          <NavigationButton onClick={(e)=>{handlePreviousPage(e)}} disabled={page == 1} >Voltar</NavigationButton>
          <TextVariant>{page}</TextVariant>
          <NavigationButton onClick={(e)=>{handleNextPage(e)}} disabled={page == qPage} >Proximo</NavigationButton>
        </PaginationInline>

      </ModulosSection>
    </Section>
  );
};

export default Modulos;
