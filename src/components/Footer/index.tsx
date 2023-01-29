import Lais from "../../assets/logos/lais.svg";
import Ufrn from "../../assets/logos/ufrn.svg";

import { TileAlternative } from "../styled-components/Texts";
import {
  FooterSection,
  FooterImage,
  RealizacaoSection,
  FooterInfo,
  RealizacaoSectionItem,
} from "../styled-components/Sections";

const Footer = () => {
  return (
    <FooterSection>
      <RealizacaoSection>
        <TileAlternative>Realização</TileAlternative>
        <RealizacaoSectionItem>

        <FooterImage>
          <img src={Lais} alt="" />
        </FooterImage>
        <FooterImage>
          <img src={Ufrn} alt="" />
        </FooterImage>
        </RealizacaoSectionItem>
      </RealizacaoSection>

      <FooterInfo>

      </FooterInfo>
    </FooterSection>
  );
};

export default Footer;
