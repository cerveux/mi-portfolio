import styles from "./proyects.css"

function Proyects({ idioma, color }) {
    return (


        <section className="proyectos" id="proyects" style={{ backgroundColor: color.secundario }}>
            <div className="proyects-container container">
                <div className="container">
                    <h1>{idioma ? "MY OWN PROYECTS" : "PROYECTOS PROPIOS"}</h1>
                </div>
                <div className="container">
                    <h1>{idioma ? "UDEMY - LERNING PROYECTS" : "UDEMY - PROYECTOS DE APRENDIZAJE"}</h1>
                </div>
                <div className="container">
                    <h1>{idioma ? "ORACLE ONE - LERNING PROYECTS" : "ORACLE ONE - PROYECTOS DE APRENDIZAJE"}</h1>
                </div>
            </div>
        </section>

    );
}

export default Proyects;

