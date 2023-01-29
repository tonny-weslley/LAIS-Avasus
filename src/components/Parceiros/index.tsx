import { Title, Subtitle, TextVariant2 } from '../styled-components/Texts';
import { ParceirosCard, ParceirosCardItem } from '../styled-components/Cards';
const Parceiros = () => {
    return(

        <div>
            <Title>Parceiros</Title>

            <ParceirosCard>
                <ParceirosCardItem>
                    <Subtitle> Governo do RN </Subtitle>
                    <TextVariant2> Governo do Estado do Rio Grande do Norte. </TextVariant2>
                </ParceirosCardItem>
                <ParceirosCardItem>
                    <Subtitle> SESAP </Subtitle>
                    <TextVariant2> Secretaria de Estado da Saúde Pública do Rio Grande do Norte. </TextVariant2>
                </ParceirosCardItem>
                <ParceirosCardItem>
                    <Subtitle> UFRN </Subtitle>
                    <TextVariant2> Universidade Federal do Rio Grande do Norte. </TextVariant2>
                </ParceirosCardItem>
                <ParceirosCardItem>
                    <Subtitle> HUOL </Subtitle>
                    <TextVariant2> Hospital Universitário Onofre Lopes: Hospotal Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </TextVariant2>
                </ParceirosCardItem>
            </ParceirosCard>

        </div>


    );

}

export default Parceiros;