import Lais from "../../assets/logos/lais.svg";
import Ufrn from "../../assets/logos/ufrn.svg";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { TitleAlternative } from "../styled-components/Texts";
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

import { setPage } from "../../redux/Navbar/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Footer = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetPage = (event: any, page: string, redirect:string) => {
    event.preventDefault();
    dispatch(setPage(page));
    navigate(redirect);
  };

  return (
    <FooterSection>
      <RealizacaoSection>
        <TitleAlternative>Realização</TitleAlternative>
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
          <TitleAlternative>Links Úteis</TitleAlternative>
          <ul>
            <li>
              <a onClick={(e)=> {handleSetPage(e, '/', '/')}}>Início</a>
            </li>
            <li>
              <a onClick={(e)=> {handleSetPage(e, 'sobre-nos', '/sobre-nos')}}>Sobre Nós</a>
            </li>
            <li>
              <a onClick={(e)=> { handleSetPage(e, "cursos", "/cursos/modulos")}}>Módulos</a>
            </li>
            <li>
              <a onClick={(e) => {handleSetPage(e, "parceiros", "/parceiros")}}>Parceiros</a>
            </li>
            <li>
              <a onClick={(e) => {handleSetPage(e, "transparencia", "/transparencia")}}>Transparência</a>
            </li>
          </ul>
        </FooterNav>
        <FooterSocial>
          <TitleAlternative>Redes Sociais</TitleAlternative>
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
