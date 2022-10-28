
import './App.css';
import Presentacion from '../src/components/Presentacion/Presentacion';
import NavBar from '../src/components/NavBar/Navigation';
import About from '../src/components/About/About';
import Skills from '../src/components/Skills/Skills';
import Proyects from '../src/components/Proyects/Proyects';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import {BoolHook} from './hooks/BoolHook';
import { useColor } from '../src/hooks/usecolor';
import { Analytics } from '@vercel/analytics/react';



function App() {

  const [activeLanguage, switchLanguage] = BoolHook();
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
      <Analytics />

    </div>
  );
}

export default App;
