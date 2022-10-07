import { useState } from 'react'
import style from "./presentacion.css"


/* import imagenpr from "my-portfolio\src\assets\finalentrega.png" */

function Presentacion({ idioma, cambiarIdioma, color, cambiarColor }) {

    const [estadoColor, setEstadoColor] = useState(true)

    const switchVisibility = () => { estadoColor ? setEstadoColor(!estadoColor) : setEstadoColor(!estadoColor) };




    return (
        <section className='presentacion' id='presentation' style={{ backgroundColor: color.primario }}>
            <div className='presentacion-container'>

                <div className="container opciones-container">
                    <div className="color-container">
                        <div className='color-button' onClick={() => switchVisibility()} />
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

                        </div>

                    </div>



                </div>



                <div className="container titulo-presentacion">
                    <p style={{ color: color.titulo }}>Diego Guzmán</p>
                    <h1 style={{ color: color.texto }}>
                        {(idioma) ? ("Self-taught Front End Developer") : ("Desarrollador Web Front-End Autodidacta")}
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;