import React from 'react';
import { Link } from 'react-router-dom';

const SpecificRecomendations = () =>{
    return(
        <main>
            <p className='title'>Recomendaciones específicas</p>
            <p>Se sugieren las recomendaciones específicas, los cuales podrían representar un valor adicional al momento de diseñar y/o desarrollar videojuegos serios enfocados al diagnóstico temprano de la enfermedad de Alzheimer.</p>
            <div className='order'>
                <Link to="/recomendaciones/especificas/adaptabilidad">
                    <button className='button-specific-recommendations'>
                        <img src="/Buttons/Adaptability.png" alt="Adaptabilidad" />
                        <span>Adaptabilidad</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/accesibilidad">
                    <button className='button-specific-recommendations'>
                        <img src="/Buttons/Accessibility.png" alt="Accesibilidad" />
                        <span>Accesibilidad</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/estimulacion_positiva">
                    <button className='button-specific-recommendations'>
                        <img src="/Buttons/PositiveStimulation.png" alt="Estimulacion positiva" />
                        <span>Estimulacion positiva</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/estructura_de_niveles">
                    <button className='button-specific-recommendations'>
                        <img src="/Buttons/LevelStructure.png" alt="Estructura de niveles" />
                        <span>Estructura de niveles</span>
                    </button>
                </Link>
                <Link to="/recomendaciones/especificas/mecanismo_ecologico">
                    <button className='button-specific-recommendations'>
                        <img src="/Buttons/EcologicalMechanism.png" alt="Mecanismo ecológico" />
                        <span>Mecanismo ecológico</span>
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default SpecificRecomendations;