import "./proyects.css"

function Proyects({ idioma, color }) {
    return (


        <section className="proyectos" id="projects" style={{ backgroundColor: color.secundario }}>
            <div className="projects-container container">
                <div className="container">
                    <h1 className=" inter" style={{color: color.titulo}}>{idioma ? "My Projects" : "Mis Proyectos"}</h1>
                    <div className="own-projects"></div>
                </div>


                <div className="container learning-container">
                    <h1 className=" inter" style={{color: color.titulo}}>{idioma ? "Learning Projects" : "Proyectos De Aprendizaje"}</h1>
                    <div className="container udemy-container">
                        <div className="image-container"><img className="udemy-imagen" src={require("../../assets/udemy.png")} alt="" /></div>
                        <div className="udemy-projects"></div>
                    </div>
                    <div className="container oracle-container">
                        <div className="image-container"><img className="oracle-imagen" src={require("../../assets/oracle.png")} alt="" /></div>
                        <div className="oracle-projects"></div>
                    </div>
                </div>
                
            </div>
        </section>

    );
}

export default Proyects;

