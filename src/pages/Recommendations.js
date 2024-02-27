import { Link } from 'react-router-dom';
import DownloadFiles from '../components/DownloadFiles';


const Recomendations = () =>{

    return(
        <main>
            {/* <h1>Conjunto de recomendaciones </h1> */}
            <p>Al proponer un conjunto de recomendaciones, es posible identificar algunas oportunidades de mejora en la creación de videojuegos serios dirigidos a los pacientes con Alzheimer</p>
            <div className='buttons-recommendations'>
                 <Link to="/recomendaciones/generales">
                    <button >Recomendaciones generales</button>
                </Link>
                <Link to="/recomendaciones/especificas">
                    <button >Recomendaciones específicas</button>
                </Link>
                
            </div>
          
            <p>Se ha diseñado un instrumento de evaluación, en el cual se puntúan cada una de las recomendaciones y 
            con base en esa puntuación se obtiene el nivel de cumplimento de las recomendaciones propuestas en el desarrollo 
            que se este realizando.<br/>
            Lo encuentras disponible para descargar en PDF y Excel </p>
            <div>
                <DownloadFiles />
            </div>
            
            
        </main>
    );
};

export default Recomendations;