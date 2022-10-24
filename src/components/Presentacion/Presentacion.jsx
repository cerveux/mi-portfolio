import "./presentacion.css"
import { BoolHook } from "../../hooks/BoolHook"
import Animacion from "./Animacion";


/* import imagenpr from "my-portfolio\src\assets\finalentrega.png" */

function Presentacion({ idioma, cambiarIdioma, color, cambiarColor }) {

    const [estadoColor, setEstadoColor] = BoolHook(true);






    return (
        <section className='presentacion' id='presentation' /* style={{ backgroundColor: color.primario }} */>

            <Animacion fondo={color.primario} particulas={color.secundario} />
            <div className='presentacion-container'>


                <div className="container opciones-container">
                    <div className="color-container">
                        <div className='color-button' onClick={() => setEstadoColor()} />
                    </div>

                    <div className="idioma-container">
                        <label className="switchBtn">
                            <input type="checkbox" onChange={() => cambiarIdioma()} />
                            <div className="slide round"></div>
                        </label>
                    </div>
                </div>


                <div className="color-options container">
                    <div className="card-colors" style={{ visibility: estadoColor && "hidden" }}>

                         <div className='muestras' onClick={() => cambiarColor({
                            primario: "#06283D",
                            secundario: "#256D85",
                            titulo: "#47B5FF",
                            texto: "#DFF6FF"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#06283D" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#256D85" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#47B5FF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DFF6FF" }}></div>
                            <p>Default</p>

                        </div>



                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#F0F5F9",
                            secundario: "#C9D6DF",
                            titulo: "#52616B",
                            texto: "#1E2022"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#F0F5F9" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#C9D6DF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#52616B" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#1E2022" }}></div>
                            <p>Light</p>

                        </div>




                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#000000",
                            secundario: "#52057B",
                            titulo: "#892CDC",
                            texto: "#BC6FF1"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#000000" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#52057B" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#892CDC" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#BC6FF1" }}></div>
                            <p>Violet</p>

                        </div>


                        
                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#2F5D62",
                            secundario: "#5E8B7E",
                            titulo: "#A7C4BC",
                            texto: "#DFEEEA"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#2F5D62" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#5E8B7E" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#A7C4BC" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DFEEEA" }}></div>
                            <p>Grass</p>

                        </div>


                        

                    </div>



                </div>



                <div className="container titulo-presentacion">
                    <p style={{ color: color.titulo }}>Diego Guzmán</p>
                    <h1 style={{ color: color.texto }}>
                        {(idioma) ? ("Self-taught Front End Developer") : ("Desarrollador Front End Autodidacta")}
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;