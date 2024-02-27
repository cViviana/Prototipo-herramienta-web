import { Link , useLocation} from 'react-router-dom';
import EvaluationRecommendations from '../components/EvaluationRecommendations';
import BackButton from '../components/BackButton';


const SpecificEvaluation = ({specific, text, description, recommendations}) =>{
    
    const location = useLocation();
    const linkDescription = location.pathname+"/descripcion";
    return (
        <div className="mainEvaluation">
            <div className="top">
                <BackButton url="/recomendaciones/especificas"/>
                <p className="title">Recomendaciones específicas</p>
            </div>   
            <p><strong>{specific}</strong></p>
            <p>{text}</p>
            <EvaluationRecommendations
                description={description}
                recommendationsData={recommendations}
            />
            <div className='buttons-recommendations'>
                <Link to={linkDescription}>
                    <button >Descripción de las recomendaciones específicas - {specific}</button>
                </Link>
            </div>
        </div>

    );
};
    
export default SpecificEvaluation;