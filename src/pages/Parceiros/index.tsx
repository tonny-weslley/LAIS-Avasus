import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/Breadcrumbs";
import {
  Section,
  ParceirosSection,
} from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ParceirosCard from "../../components/ParceirosCard";

import { getSome } from "../../services/ParceirosRequest";

const Parceiros = () => {
  const initialState = [
    {
      id: 0,
      titulo: "",
    },
  ];

  const { page, limit } = useSelector(
    (state: RootState) => state.parceirosPagination
  );

  const [parceiros, setParceiros] = useState(initialState);

  useEffect(() => {
    getSome(limit, page).then((response) => {
      setParceiros(response.data);
    });
  }, []);

  return (
    <Section>
      <BreadCrumbs />

      <Title>Nossos Parceiros</Title>

      <ParceirosSection>
        {parceiros.map((parceiro) => (
          <ParceirosCard key={parceiro.id} parceiro={parceiro} />
        ))}
      </ParceirosSection>
    </Section>
  );
};

export default Parceiros;
