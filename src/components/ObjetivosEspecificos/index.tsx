import { useState } from "react";

const ObjetivosEspecificos = (objetivos:any) => {
    
    const [objetivosEspecificos, setObjetivosEspecificos] = useState(objetivos.objetivos.split("-"))
    
    

    return (
        <div>

            {objetivosEspecificos.map((objetivo:any) => {
                return (
                    <div>
                        <li>{objetivo}</li>
                    </div>
                )
            })
            }

        </div>
    );
};
export default ObjetivosEspecificos;