import style from "./skills.css";
import { useEffect } from 'react';
import wordSphere from "../../hooks/wordSphere";

function Skills({ idioma, color }) {

    /* useEffect(() => { */
        /* const canvas = document.getElementById('canvas');
    
        const texts = [
          , "Postman", 'MongoDB', "Git", "Github", 'React', "Heroku", "Figma", "Trello", "Photoshop"
        ];
        
        const counts = [1, 2, 3, 4, 5, 6, 7];
    
        const options = {
          tilt: Math.PI / 9,
          initialVelocityX: 0.09,
          initialVelocityY: 0.09,
          initialRotationX: Math.PI * 0.14,
          initialRotationZ: 0
        };
    
        wordSphere(canvas, texts, counts, options); */
/* 
        const POSTERS_PER_ROW = 5;
const RING_RADIUS = 290;

function setup_posters(row) {
  var posterAngle = 360 / POSTERS_PER_ROW;
  for (var i = 0; i < POSTERS_PER_ROW; i++) {
    var poster = document.createElement('div');
    poster.className = 'poster';
    // compute and assign the transform for this poster
    var transform = 'rotateY(' + (posterAngle * i) + 'deg) translateZ(' + RING_RADIUS + 'px)';
    poster.style.webkitTransform = transform;
    // setup the number to show inside the poster
    var content = poster.appendChild(document.createElement('p'));
    content.textContent = i;
    // add the poster to the row
    row.appendChild(poster);
  }

}

function init() {
  setup_posters(document.getElementById('ring-1'));
  setup_posters(document.getElementById('ring-2'));
  setup_posters(document.getElementById('ring-3'));
}

// call init once the document is fully loaded
window.addEventListener('load', init, false);





      }); */
    
      
    return (
        <section className="habilidades" id="skills" style={{ backgroundColor: color.primario }}>
            <div className="skills-container container">
                <h1 className="prueba" style={{ color: color.titulo }}>{idioma ? "Skills" : "Habilidades"}</h1>
                {/* <canvas id="canvas" style={{backgroundColor: "red"}} ></canvas>    */}


                <div className="container tag-logo">

                    <div id="stage">
                        <div id="rotate-1">
                            <div id="ring-1" className="ring">

                                <div className="poster"  ><img alt="HTML"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></div>
                                <div className="poster"  ><img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></div>
                                <div className="poster"  ><img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" /></div>
                                <div className="poster"  ><img alt="Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></div>
                                <div className="poster"  ><img alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></div>

                                

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
                                <div className="poster"      ><img alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></div>
                                <div className="poster"  ><img alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" /></div>
                                <div className="poster"  ><img alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" /></div>
                                <div className="poster"  ><img alt="Trello" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" /></div>
                                <div className="poster"  ><img alt="Photoshop" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" /></div>
                            </div>  
                        </div>
                    </div>

                </div>













            </div>

        </section>
    );
}

export default Skills;