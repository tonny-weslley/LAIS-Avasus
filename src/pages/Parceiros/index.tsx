import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/Breadcrumbs";
import { Section } from "../../components/styled-components/Sections";
import { Title } from "../../components/styled-components/Texts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


import {getSome} from '../../services/ParceirosRequest'

const Parceiros = () => {

    const {page, limit} = useSelector((state: RootState) => state.parceirosPagination)

    const [parceiros, setParceiros] = useState([])


    useEffect(() => {
        getSome(limit, page).then((response) => {
            setParceiros(response.data)
        })
    }, [])


  return (
    <Section>
        <BreadCrumbs />

        <Title>Nossos Parceiros</Title>



    </Section>
  );
};

export default Parceiros;
