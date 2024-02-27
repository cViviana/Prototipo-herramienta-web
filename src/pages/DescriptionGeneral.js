import BackButton from "../components/BackButton";
import Description from "../components/Description";
import { DescriptionGeneralRecommendations } from "../utils/DescriptionGeneralRecommendations";

const DescriptionGeneral = () =>{
    return (
        <div className="descriptions">
            <div className="top">
                <BackButton url="/recomendaciones/generales"/>
                <p className="title">Descripción de recomendaciones generales</p>
            </div>            
            <div className="order">
                {DescriptionGeneralRecommendations.map((item) => (
                    <Description key={item.id} url={item.url} title={item.title} text={item.text} />
                ))}
            </div>                       
        </div>
    );
};
  
export default DescriptionGeneral;