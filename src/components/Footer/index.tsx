import Lais from "../../assets/logos/lais.svg";
import Ufrn from "../../assets/logos/ufrn.svg";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { TileAlternative } from "../styled-components/Texts";
import {
  FooterSection,
  FooterImage,
  RealizacaoSection,
  FooterInfo,
  RealizacaoSectionItem,
  FooterCopy,
  LaisBrand,
  FooterNav,
  FooterSocial,
  SocialIcons,
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
        <LaisBrand>
          <img src={Lais} alt="" />
          <p>Laboratório de Inovação Tecnológica em Saúde.</p>
        </LaisBrand>
        <FooterNav>
          <TileAlternative>Links Úteis</TileAlternative>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Módulos</a>
            </li>
            <li>
              <a href="#">Parceiros</a>
            </li>
            <li>
              <a href="#">Transparència</a>
            </li>
          </ul>
        </FooterNav>
        <FooterSocial>
          <TileAlternative>Redes Sociais</TileAlternative>
          <SocialIcons>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </SocialIcons>
        </FooterSocial>
      </FooterInfo>

      <FooterCopy>
        <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
      </FooterCopy>
    </FooterSection>
  );
};

export default Footer;
