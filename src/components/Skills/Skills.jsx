import "./skills.css";

function Skills({ idioma, color }) {
    return (
        <section className="habilidades" id="skills" style={{ backgroundColor: color.primario }}>
            <div className="skills-container container">
                <h1 className="prueba" style={{ color: color.titulo }}>{idioma ? "Skills" : "Habilidades"}</h1>
                {/* <canvas id="canvas" style={{backgroundColor: "red"}} ></canvas>    */}


                <div className="container tag-logo">

                    <div id="stage">
                        <div id="rotate-1">
                            <div id="ring-1" className="ring">
                                <div className="poster"><img alt="HTML"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></div>
                                <div className="poster"><img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></div>
                                <div className="poster"><img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" /></div>
                                <div className="poster"><img alt="Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></div>
                                <div className="poster"><img alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></div>
                            </div>
                        </div>

                        <div id="rotate-2">
                            <div id="ring-2" className="ring">
                                <div className="poster"><img alt="Postman" width="100px" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"  /></div>
                                <div className="poster"><img alt="Mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></div>
                                <div className="poster"><img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></div>
                                <div className="poster"><img alt="Github"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></div>
                                <div className="poster"><img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></div>
                            </div>   
                        </div>

                        <div id="rotate-3">
                            <div id="ring-3" className="ring">
                                <div className="poster"><img alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></div>
                                <div className="poster"><img alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" /></div>
                                <div className="poster"><img alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" /></div>
                                <div className="poster"><img alt="Trello" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" /></div>
                                <div className="poster"><img alt="Photoshop" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" /></div>
                            </div>  
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Skills;