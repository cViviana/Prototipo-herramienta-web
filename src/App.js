import './App.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Recomendations from './pages/Recommendations';
import ApplicationExamples from './pages/ApplicationExamples';
import GeneralRecommedations from './pages/GeneralRecommendations';
import DescriptionGeneral from './pages/DescriptionGeneral';
import SpecificRecomendations from './pages/SpecificRecommendations';
import SpecificEvaluation from './pages/SpecificEvaluation';
import { adaptabilityRecommendations } from './utils/adaptability';
import { accessibilityRecommendations } from './utils/accessibility';
import { positiveStimulationRecommendations } from './utils/positiveStimulation';
import { levelStructureRecommendations } from './utils/levelStructure';
import { ecologicalMechanismRecommendations } from './utils/ecologicalMechanism';
import SpecificDescription from './pages/SpecificDescription';
import { DescriptionsAdaptability } from './utils/DescriptionsAdaptability';
import { DescriptionsPositiveStimulation } from './utils/DescriptionsPositiveStimulation';
import { DescriptionsAccesibility } from './utils/DescriptionsAccesibility';
import { DescriptionsEcologicalMechanism } from './utils/DescriptionsEcologicalMechanism';
import { DescriptionsLevelStructure } from './utils/DescriptionsLevelStructure';
import SpecificExamples from './pages/SpecificExamples';
import { ExamplesAdaptability } from './utils/ExamplesAdaptability';
import { ExamplesAccesibility } from './utils/ExamplesAccesibility';
import { ExamplesPositiveStimulation } from './utils/ExamplesPositiveStimulation';
import { ExamplesLevelStructure } from './utils/ExamplesLevelStructure';
import { ExamplesEcologicalMechanism } from './utils/ExamplesEcologicalMechanism';

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/recomendaciones" Component={Recomendations} />
          <Route path="/recomendaciones/generales" Component={GeneralRecommedations} />
          <Route path="/recomendaciones/generales/descripcion" Component={DescriptionGeneral} />
          <Route path="/recomendaciones/especificas" Component={SpecificRecomendations} />         
          <Route path="/recomendaciones/especificas/adaptabilidad" element={<SpecificEvaluation
              specific="Adaptabilidad"
              text="Se presentan las recomendaciones prácticas que buscan fomentar la adaptabilidad en los videojuegos serios, permitiendo una facilidad de adaptación y uso, independientemente de sus habilidades o condiciones particulares."
              description="Si cumple se registra un valor de 1.43 puntos, de lo contrario 0 puntos."
              recommendations={adaptabilityRecommendations}
            />} 
          />
          <Route path="/recomendaciones/especificas/accesibilidad" element={<SpecificEvaluation
              specific="Accesibilidad"
              text="Se presentan recomendaciones que buscan promover la accesibilidad en los videojuegos serios, permitiendo que los usuarios disfruten de una experiencia enriquecedora y efectiva que permita disminuir las dificultades experimentadas por el paciente."
              description="Si cumple se registra un valor de 3.33 puntos, de lo contrario 0 puntos."
              recommendations={accessibilityRecommendations}
            />} 
          />
          <Route path="/recomendaciones/especificas/estimulacion_positiva" element={<SpecificEvaluation
              specific="Estimulación positiva"
              text="Se presentan recomendaciones que abordan la estimulación positiva en el diseño de estos videojuegos serios, esto con el propósito de maximizar su impacto y beneficios."
              description="Si cumple se registra un valor de 3.33 puntos, de lo contrario 0 puntos."
              recommendations={positiveStimulationRecommendations}
            />} 
          />
          <Route path="/recomendaciones/especificas/estructura_de_niveles" element={<SpecificEvaluation
              specific="Estructura de niveles"
              text="Se presentan recomendaciones claves para estructurar los niveles, considerando elementos como: el enfoque, la complejidad, el detalle y el desafío."
              description="Si cumple se registra un valor de 2.50 puntos, de lo contrario 0 puntos."
              recommendations={levelStructureRecommendations}
            />} 
          />
          <Route path="/recomendaciones/especificas/mecanismo_ecologico" element={<SpecificEvaluation
              specific="Mecanismo ecológico"
              text="Se presentan recomendaciones importantes que consisten en incorporar actividades relacionadas con situaciones comunes de la vida cotidiana de los pacientes, presentando simulaciones de escenarios habituales, culturales y sociales."
              description="Si cumple se registra un valor de 2.50 puntos, de lo contrario 0 puntos."
              recommendations={ecologicalMechanismRecommendations}
            />} 
          />
          <Route path="/recomendaciones/especificas/adaptabilidad/descripcion" element={<SpecificDescription
            title="Adaptabilidad"
            descriptions={DescriptionsAdaptability}
            />} 
          />
          <Route path="/recomendaciones/especificas/accesibilidad/descripcion" element={<SpecificDescription
            title="Accesibilidad"
            descriptions={DescriptionsAccesibility}
            />} 
          />
          <Route path="/recomendaciones/especificas/estimulacion_positiva/descripcion" element={<SpecificDescription
            title="Estimulación positiva"
            descriptions={DescriptionsPositiveStimulation}
            />} 
          />
          <Route path="/recomendaciones/especificas/estructura_de_niveles/descripcion" element={<SpecificDescription
            title="Estructura de niveles"
            descriptions={DescriptionsLevelStructure}
            />} 
          />
          <Route path="/recomendaciones/especificas/mecanismo_ecologico/descripcion" element={<SpecificDescription
            title="Mecanismo ecológico"
            descriptions={DescriptionsEcologicalMechanism}
            />} 
          />
          <Route path="/ejemplos_de_aplicacion" Component={ApplicationExamples} />
          <Route path="/ejemplos_de_aplicacion/adaptabilidad" element={<SpecificExamples
            title="Adaptabilidad"
            examples={ExamplesAdaptability}
            />} 
          />
          <Route path="/ejemplos_de_aplicacion/accesibilidad" element={<SpecificExamples
            title="Accesibilidad"
            examples={ExamplesAccesibility}
            />}           
          />
          <Route path="/ejemplos_de_aplicacion/estimulacion_positiva" element={<SpecificExamples
            title="Estimulación positiva"
            examples={ExamplesPositiveStimulation}
            />}           
          />
          <Route path="/ejemplos_de_aplicacion/estructura_de_niveles" element={<SpecificExamples
            title="Estructura de niveles"
            examples={ExamplesLevelStructure}
            />}           
          />
          <Route path="/ejemplos_de_aplicacion/mecanismo_ecologico" element={<SpecificExamples
            title="Mecanismo ecológico"
            examples={ExamplesEcologicalMechanism}
            />}           
          />
        </Routes>
    </Router>
  );
};

export default App;
