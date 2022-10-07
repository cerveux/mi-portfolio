import './App.css';
import Presentacion from '../src/components/Presentacion/Presentacion';
import NavBar from '../src/components/NavBar/Navigation';
import About from '../src/components/About/About';
import Skills from '../src/components/Skills/Skills';
import Proyects from '../src/components/Proyects/Proyects';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import {useLanguage} from '../src/hooks/uselanguage'
import { useColor } from '../src/hooks/usecolor'


function App() {

  const [activeLanguage, switchLanguage] = useLanguage();
  const [activeColor, switchColor] = useColor();


  return (
    <div className="App">
      <Presentacion idioma={activeLanguage} cambiarIdioma={switchLanguage} color={activeColor} cambiarColor={switchColor} />
      <NavBar idioma={activeLanguage} color={activeColor} />
      <About idioma={activeLanguage} color={activeColor} />
      <Skills idioma={activeLanguage} color={activeColor}/>
      <Proyects idioma={activeLanguage} color={activeColor} />
      <Contact idioma={activeLanguage} color={activeColor} />      
      <Footer idioma={activeLanguage} color={activeColor} />
    </div>
  );
}

export default App;
