import { useLocation} from 'react-router-dom';
import BackButton from "../components/BackButton";
import Description from "../components/Description";


const SpecificDescription = ({title,descriptions}) =>{
    
    const location = useLocation();
    const currentPath = location.pathname;
    const back = currentPath.replace('/descripcion', '');

    return (
        <div className="descriptions">
            <div className="top">
                <BackButton url={back}/>
                <p className="title">Descripción de recomendaciones específicas</p>
            </div>            
            <p className='title2'>{title}</p>
            <div className="order">
                {descriptions.map((item) => (
                    <Description key={item.id} url={item.url} title={item.title} text={item.text} />
                ))}
            </div>                       
        </div>
    );
};
  
export default SpecificDescription;