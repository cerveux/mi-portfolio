import "./presentacion.css"
import { BoolHook } from "../../hooks/BoolHook"
import Animacion from "./Animacion";


/* import imagenpr from "my-portfolio\src\assets\finalentrega.png" */

function Presentacion({ idioma, cambiarIdioma, color, cambiarColor }) {

    const [estadoColor, setEstadoColor] = BoolHook(true);






    return (
        <section className='presentacion' id='presentation' /* style={{ backgroundColor: color.primario }} */>

            <Animacion fondo={color.primario} particulas={color.secundario}/>
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

                       {/*  <div className='muestras' onClick={() => cambiarColor({
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
                            primario: "#F9F7F7",
                            secundario: "#DBE2EF",
                            titulo: "#3F72AF",
                            texto: "#112D4E"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#F9F7F7" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DBE2EF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#3F72AF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#112D4E" }}></div>
                            <p>Light</p>

                        </div>




                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#937DC2",
                            secundario: "#C689C6",
                            titulo: "#FFABE1",
                            texto: "#FFE6F7"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#937DC2" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#C689C6" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#FFABE1" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#FFE6F7" }}></div>
                            <p>Violet</p>

                        </div>


                        
                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#FEFFDE",
                            secundario: "#DDFFBC",
                            titulo: "#91C788",
                            texto: "#52734D"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#FEFFDE" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DDFFBC" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#91C788" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#52734D" }}></div>
                            <p>Grass</p>

                        </div> */}


                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#F9F7F7",
                            secundario: "#DBE2EF",
                            titulo: "#3F72AF",
                            texto: "#112D4E"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#F9F7F7" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DBE2EF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#3F72AF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#112D4E" }}></div>
                            <p>Light</p>

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
                            primario: "#D8D9CF",
                            secundario: "#EDEDED",
                            titulo: "#FF8787",
                            texto: "#E26868"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#D8D9CF" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#EDEDED" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#FF8787" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#E26868" }}></div>
                            <p>Violet</p>

                        </div>


                        
                        <div className='muestras' onClick={() => cambiarColor({
                            primario: "#F0ECE3",
                            secundario: "#DFD3C3",
                            titulo: "#C7B198",
                            texto: "#596E79"
                        })}>
                            <div className='muestra-color' style={{ backgroundColor: "#F0ECE3" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#DFD3C3" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#C7B198" }}></div>
                            <div className='muestra-color' style={{ backgroundColor: "#596E79" }}></div>
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