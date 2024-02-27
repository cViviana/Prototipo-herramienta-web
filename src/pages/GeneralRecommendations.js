import { Link } from 'react-router-dom';
import EvaluationRecommendations from '../components/EvaluationRecommendations';
import { generalRecommendations } from '../utils/generalRecommendations';

const GeneralRecommedations = () =>{
    return (
        <div className="mainEvaluation">
            <p className="title">Recomendaciones generales</p>
            <p>Es fundamental considerar una serie de recomendaciones generales que aumenten la probabilidad de aportar valor a la eficacia, validez clínica y entretenimiento del paciente.</p>
            <EvaluationRecommendations
                description="Si cumple se registra un valor de 1.67 puntos, de lo contrario 0 puntos."
                recommendationsData={generalRecommendations}
            />
            <div className='buttons-recommendations'>
        <Link to="/recomendaciones/generales/descripcion">
          <button >Descripción de las recomendaciones generales</button>
        </Link>
      </div>
        </div>

    );
};
    
export default GeneralRecommedations;