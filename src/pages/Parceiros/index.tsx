import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/Breadcrumbs";
import {
  Section,
  ParceirosSection,
  ModulosSection,
PaginationSection,
} from "../../components/styled-components/Sections";
import { TitleStart } from "../../components/styled-components/Texts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ParceirosCard from "../../components/ParceirosCard";

import { getSome } from "../../services/ParceirosRequest";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/ParceirosPagination/slice";

const Parceiros = () => {
  const initialState = [
    {
      id: 0,
      titulo: "",
    },
  ];

  const dispatch = useDispatch();

  const { page, limit } = useSelector(
    (state: RootState) => state.parceirosPagination
  );

  const [parceiros, setParceiros] = useState(initialState);
  const [qPage, setQPage] = useState(1);

  useEffect(() => {
    getSome(limit, page).then((response) => {
      setParceiros(response.data);
      setQPage(Math.ceil(response.headers["x-total-count"] / limit));
    });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  return (
    <Section>
      <ModulosSection>

        <BreadCrumbs />

        <TitleStart>Nossos Parceiros</TitleStart>

        <ParceirosSection>
          {parceiros.map((parceiro) => (
            <ParceirosCard key={parceiro.id} parceiro={parceiro} />
            ))}
        </ParceirosSection>
      </ModulosSection>
      <PaginationSection>
          <Pagination showFirstButton showLastButton page={page} onChange={handleChange}  count={qPage} shape="rounded" />
        </PaginationSection>
    </Section>
  );
};

export default Parceiros;
