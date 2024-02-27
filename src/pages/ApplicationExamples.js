import { Link } from 'react-router-dom';
import imgAdaptability from '../resources/buttons/Adaptability.png';
import imgAccessibility from '../resources/buttons/Accessibility.png';
import imgPositiveStimulation from '../resources/buttons/PositiveStimulation.png';
import imgLevelStructure from '../resources/buttons/LevelStructure.png';
import imgEcologicalMechanism from '../resources/buttons/EcologicalMechanism.png';

const ApplicationExamples = () =>{
    return (
        <main >
            <p className='title'>Ejemplos de aplicación de las recomendaciones</p>
            <p className='text'>Se presentan algunos ejemplos como punto de partida para la aplicación de las recomendaciones en el diseño y/o desarrollo de videojuegos serios orientados al diagnóstico de la EA en la etapa leve. Es importante aclarar que estos ejemplos son una referencia para guiar la implementación de las recomendaciones, sin embargo, su utilización depende de la decisión y criterio de quien esté aplicándolas.</p>
            <div className='order'>
                <Link to="/ejemplos_de_aplicacion/adaptabilidad">
                    <button className='button-specific-recommendations'>
                        <img src={imgAdaptability} alt="Adaptabilidad" />
                        <span>Adaptabilidad</span>
                    </button>
                </Link>
                <Link to="/ejemplos_de_aplicacion/accesibilidad">
                    <button className='button-specific-recommendations'>
                        <img src={imgAccessibility} alt="Accesibilidad" />
                        <span>Accesibilidad</span>
                    </button>
                </Link>
                <Link to="/ejemplos_de_aplicacion/estimulacion_positiva">
                    <button className='button-specific-recommendations'>
                        <img src={imgPositiveStimulation} alt="Estimulacion positiva" />
                        <span>Estimulacion positiva</span>
                    </button>
                </Link>
                <Link to="/ejemplos_de_aplicacion/estructura_de_niveles">
                    <button className='button-specific-recommendations'>
                        <img src={imgLevelStructure} alt="Estructura de niveles" />
                        <span>Estructura de niveles</span>
                    </button>
                </Link>
                <Link to="/ejemplos_de_aplicacion/mecanismo_ecologico">
                    <button className='button-specific-recommendations'>
                        <img src={imgEcologicalMechanism} alt="Mecanismo ecológico" />
                        <span>Mecanismo ecológico</span>
                    </button>
                </Link>
            </div>
        </main>
    );
};
  
export default ApplicationExamples;