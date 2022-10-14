import "./about.css"

function About({idioma, color}) {
    return (
        <section className='aboutMe' style={{ backgroundColor: color.secundario }} id="about">
            <div className="about-container container">
                <h2 className="about-title" style={{ color: color.titulo }}>
                    {idioma ? ("Hi, I´m Diego") : ("Hola, yo soy Diego")}
                    </h2>
                <div className="about-parrafo">
                    <p style={{ color: color.texto }}>{idioma ? " A Front-End Developer from Cordoba, Argentina. I´m a tech and code enthusiast whose hobbies are learning new things, working out and martial arts." 
                    : "Un desarrollador Front-End de Córdoba, Argentina. Soy entusiasta de la tecnología, la programación y mis hobbies son aprender cosas nuevas, el ejercicio y las artes marciales."}</p>
                    <p style={{ color: color.texto }}>{idioma ? " I started coding as a hobby in the early 2000s making small pc “board” games in Java to play with friends, never as a job though. " 
                    : " Empecé a programar allá por el año 2003 haciendo juegos de “mesa” en pc con Java para jugar con amigos aunque nunca lo pensé como un posible trabajo."}</p>
                    <p style={{ color: color.texto }}>{idioma ? " In 2021 after a talk with an ex-classmate in Systems Engineering, I decided to change careers and be a full-time Web Developer. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me." 
                    : " En el 2021 después de una charla con un ex compañero de ingeniería en sistemas, decidí cambiar de carrera y volver a la programación ya no como hobby sino como un trabajo de tiempo completo. Escucho propuestas laborales donde pueda contribuir mientras aprendo. Si tenés una oferta que concuerde con mis conocimientos no dudes en contactarme. "}</p>

                </div>

            </div>


        </section>
    );
}

export default About;