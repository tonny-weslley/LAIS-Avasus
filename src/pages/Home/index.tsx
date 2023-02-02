import { useState, useEffect } from "react";
import { getFeatured, getAvaliados, getRecentes } from "../../services/CursosRequest";
import ModulosCard from "../../components/ModulosCard";
import { Section, Modulos } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import InlineMenu from "../../components/InlineMenu";
import { ButtonVerMais } from "../../components/styled-components/Buttons";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Parceiros from "../../components/Parceiros";
import InlineDropdownMenuInicio from "../../components/InlineDropdownMenuInicio";
import FakeCarousel from "../../components/FakeCarousel";
import { setPage } from "../../redux/Navbar/slice";

const Home = () => {
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.modulosSession);

  const [cursosPopulares, setCursosPopulares] = useState([]);
  const [cursosRecentes, setCursosRecentes] = useState([]);
  const [cursosMaisAvaliados, setcursosMaisAvaliados] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFeatured(3).then((response) => {
      setCursosPopulares(response.data);
    });

    getAvaliados(3).then((response) => {
      setcursosMaisAvaliados(response.data);
    });
  
    getRecentes(3).then((response) => {
      setCursosRecentes(response.data);
    });

  }, []);

  const redirectModulos = () => {
    dispatch(setPage('cursos'));
    navigate("/cursos/modulos");
  };

  return (
    <Section>
        <FakeCarousel/>
      <Modulos>


        <Title>Módulos Educacionais</Title>
        <InlineMenu />

        <InlineDropdownMenuInicio/>

        {selected === "populares" &&
          cursosPopulares.map((curso:any) => <ModulosCard key={curso} curso={curso} />)}
        {selected === "recentes" &&
          cursosRecentes.map((curso) => <ModulosCard key={curso} curso={curso} />)}
        {selected === "avaliados" &&
          cursosMaisAvaliados.map((curso) => <ModulosCard key={curso} curso={curso} />)}

        <ButtonVerMais onClick={redirectModulos} >Ver mais</ButtonVerMais>
      </Modulos>
      <Parceiros />
    </Section>
  );
};

export default Home;
