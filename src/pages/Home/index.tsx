import { useState, useEffect } from "react";
import { getFeatured, getAvaliados, getRecentes } from "../../services/CursosRequest";
import ModulosCard from "../../components/ModulosCard";
import { Section, Modulos } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import InlineMenu from "../../components/InlineMenu";
import { ButtonVerMais } from "../../components/styled-components/Buttons";
import Parceiros from "../../components/Parceiros";
import Footer from "../../components/Footer";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home = () => {
  const { selected } = useSelector((state: RootState) => state.modulosSession);

  const [cursosPopulares, setCursosPopulares] = useState([]);
  const [cursosRecentes, setCursosRecentes] = useState([]);
  const [cursosMaisAvaliados, setcursosMaisAvaliados] = useState([]);

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

  return (
    <Section>
      <Modulos>
        <Title>Módulos Educacionais</Title>
        <InlineMenu />

        {selected === "populares" &&
          cursosPopulares.map((curso) => <ModulosCard key={curso} curso={curso} />)}
        {selected === "recentes" &&
          cursosRecentes.map((curso) => <ModulosCard key={curso} curso={curso} />)}
        {selected === "avaliados" &&
          cursosMaisAvaliados.map((curso) => <ModulosCard key={curso} curso={curso} />)}

        <ButtonVerMais>Ver mais</ButtonVerMais>
      </Modulos>

      <Parceiros />

      <Footer/>
    </Section>
  );
};

export default Home;
