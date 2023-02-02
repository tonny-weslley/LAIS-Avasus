import {
  TransparenciaCard,
  TransparenciaCardHeader,
  DadosGeraisCardItems,
  DadosGeraisCardItem,
  DadosGeraisCardItemHeader,
  DadosGeraisCardItemBody,
} from "../styled-components/Cards";
import { Title, Text3, TitleAlternative2 } from "../styled-components/Texts";
import Matriculados from "../../assets/icons/matriculados.svg";
import Inscricoes from "../../assets/icons/inscricoes.svg";
import Cursos from "../../assets/icons/cursos.svg";
import Certificado from "../../assets/icons/certificado.svg";
import InvestimentoCurso from "../../assets/icons/investimento-total.svg";
import InvestimentoAluno from "../../assets/icons/investimento-aluno.svg";

const DadosGerais = (dados: any) => {
  return (
    <TransparenciaCard>
      <TransparenciaCardHeader>
        <Title>Dados Gerais</Title>
      </TransparenciaCardHeader>
      <DadosGeraisCardItems>
        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={Matriculados} alt="Marriculados" />
            <Text3> Total de usuários registrados </Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>
              {dados.dados.usuarios_registrados.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>

        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={Inscricoes} alt="Inscrições" />
            <Text3> Inscriçoes realizadas </Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>

              {dados.dados.incricoes_realizadas.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>

        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={Cursos} alt="Cursos" />
            <Text3> Cursos ativos </Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>

              {dados.dados.cursos_ativos.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>

        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={Certificado} alt="Certificado" />
            <Text3> Direito a certificação</Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>

              {dados.dados.direito_certificacao}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>

        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={InvestimentoCurso} alt="Investimento Total" />
            <Text3> Investimento médio por curso</Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>

              {dados.dados.investimento_medio_curso}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>

        <DadosGeraisCardItem>
          <DadosGeraisCardItemHeader>
            <img src={InvestimentoAluno} alt="Investimento Total" />
            <Text3> Investimento médio por aluno</Text3>
          </DadosGeraisCardItemHeader>
          <DadosGeraisCardItemBody>
            <TitleAlternative2>
              {dados.dados.investimento_medio_aluno}
            </TitleAlternative2>
          </DadosGeraisCardItemBody>
        </DadosGeraisCardItem>
      </DadosGeraisCardItems>
    </TransparenciaCard>
  );
};

export default DadosGerais;
