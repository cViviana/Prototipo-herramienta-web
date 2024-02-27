import imgEA from "../resources/Alzheimer's Disease.PNG";

const Home = () =>{
    return (
        <main >
            <p className="home">Este aplicativo fue creado con fines educativos para dar a conocer el resultado de una ardua investigación con el objetivo de apoyar al diseño y/o desarrollo de videojuegos serios para el diagnostico temprano de la enfermedad de Alzheimer dado a la importancia de los adultos mayores en nuestras vidas.</p>
            <img src={imgEA} alt="Alzheimer's Disease" />
        </main>
    );
};
  
export default Home;