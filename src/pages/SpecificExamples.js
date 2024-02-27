import BackButton from "../components/BackButton";
import Description from "../components/Description";

const SpecificExamples = ({title,examples}) =>{
    
    const back = '/ejemplos_de_aplicacion';

    return (
        <div className="descriptions">
            <div className="top">
                <BackButton url={back}/>
                <p className="title">Ejemplos de {title}</p>
            </div>            
            <div className="order">
                {examples.map((item) => (
                    <Description key={item.id} url={item.url} title={item.title} text={item.text} />
                ))}
            </div>                       
        </div>
    );
};
    
export default SpecificExamples;