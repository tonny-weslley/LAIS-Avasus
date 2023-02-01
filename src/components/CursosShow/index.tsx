import { CursosSection } from "../styled-components/Sections"
import CursoCard from "../CursoCard"

const CursosShow = (cursos:any) => {

    return (
        <CursosSection>
            {cursos.cursos.map((curso:any) => (
                <CursoCard key={curso} curso={curso} />
            ))}
        </CursosSection>
       
    )

}

export default CursosShow;