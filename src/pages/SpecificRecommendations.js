import React from 'react';
import { Link } from 'react-router-dom';
import imgAdaptability from '../resources/buttons/Adaptability.png';
import imgAccessibility from '../resources/buttons/Accessibility.png';
import imgPositiveStimulation from '../resources/buttons/PositiveStimulation.png';
import imgLevelStructure from '../resources/buttons/LevelStructure.png';
import imgEcologicalMechanism from '../resources/buttons/EcologicalMechanism.png';


const SpecificRecomendations = () =>{
    return(
        <main>
            <p className='title'>Recomendaciones específicas</p>
            <p>Se sugieren las recomendaciones específicas, los cuales podrían representar un valor adicional al momento de diseñar y/o desarrollar videojuegos serios enfocados al diagnóstico temprano de la enfermedad de Alzheimer.</p>
            <div className='order'>
                <Link to="/recomendaciones/especificas/adaptabilidad">
                    <button className='button-specific-recommendations'>
                        <img src={imgAdaptability} alt="Adaptabilidad" />
                        <span>Adaptabilidad</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/accesibilidad">
                    <button className='button-specific-recommendations'>
                        <img src={imgAccessibility} alt="Accesibilidad" />
                        <span>Accesibilidad</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/estimulacion_positiva">
                    <button className='button-specific-recommendations'>
                        <img src={imgPositiveStimulation} alt="Estimulacion positiva" />
                        <span>Estimulacion positiva</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/estructura_de_niveles">
                    <button className='button-specific-recommendations'>
                        <img src={imgLevelStructure} alt="Estructura de niveles" />
                        <span>Estructura de niveles</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/mecanismo_ecologico">
                    <button className='button-specific-recommendations'>
                        <img src={imgEcologicalMechanism} alt="Mecanismo ecológico" />
                        <span>Mecanismo ecológico</span>
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default SpecificRecomendations;