import style from "./skills.css";

function Skills({idioma, color}) {

    const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'Angualr', 'VueJS', 'React',
        'Python', 'Go', 'Chrome',
        'Edge', 'Firefox', 'Safari',
  ];
/* 
  var tagCloud = TagCloud('.content', myTags);
 */

    return ( 
        <section className="habilidades" id="skills" style={{backgroundColor: color.primario}}>
            <div className="skills-container container">
                <h1 style={{color: color.titulo}}>{idioma? "Skills" : "Habilidades"}</h1>
                asd
                <div className="content"></div>
                
            </div>
        </section>
     );
}

export default Skills;