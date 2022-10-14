import "./proyects.css"

function Proyects({ idioma, color }) {
    return (


        <section className="proyectos" id="proyects" style={{ backgroundColor: color.secundario }}>
            <div className="proyects-container container">
                <div className="container">
                    <h1 className=" inter" style={{color: color.titulo}}>{idioma ? "MY OWN PROJECTS" : "PROYECTOS PROPIOS"}</h1>
                    <div className="own-projects"></div>
                </div>
                <div className="container">
                    <h1 className=" inter" style={{color: color.titulo}}>{idioma ? "LERNING PROJECTS" : "PROYECTOS DE APRENDIZAJE"}</h1>
                    <div className="container udemy-container">
                        <div ><img className="udemy-imagen" src={require("../../assets/udemy.png")} alt="" /></div>
                        <div className="udemy-projects"></div>
                    </div>
                    <div className="container oracle-container">
                        <div ><img className="oracle-imagen" src={require("../../assets/oracle.png")} alt="" /></div>
                        <div className="oracle-projects"></div>
                    </div>
                </div>
                
            </div>
        </section>

    );
}

export default Proyects;

