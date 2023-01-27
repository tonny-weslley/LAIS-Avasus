import { useState, useEffect } from "react";
import { getFeatured } from "../../services/CursosRequest";
import ModulosCard from "../../components/ModulosCard";
import { Section, Modulos } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import InlineMenu from "../../components/InlineMenu";
const Home = () => {
  const [cursosPopulares, setCursosPopulares] = useState([]);

  useEffect(() => {
    getFeatured(3).then((response) => {
      setCursosPopulares(response.data);
    });
  }, []);

  return (
    <Section>
      <Modulos>
        <Title>Módulos Educacionais</Title>
        <InlineMenu />
        {cursosPopulares.map((curso) => (
            <ModulosCard curso={curso} />
        ))}
      </Modulos>
    </Section>
  );
};

export default Home;
