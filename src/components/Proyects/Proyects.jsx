import "./proyects.css"
import proyectos from "../../assets/proyectos";
import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Proyects({ idioma, color }) {

    const proRef = useRef();
    const tl = useRef();


    

    

    

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.fromTo(".propio", {x: -400, opacity: 0},  {x:0, opacity: 1, stagger:0.2,
                scrollTrigger:{trigger: ".own-projects", start:"top 90%", end:"bottom 90% ", scrub:3}})

        }, proRef)
        return () => ctx.revert();
        
    }, []);

    useLayoutEffect(()=>{
        let ctx2 = gsap.context(()=>{
            gsap.fromTo(".usock", {x: 400, opacity: 0},  {x:0, opacity: 1, stagger:0.2,
                scrollTrigger:{trigger: ".udemy-projects", start:"top 90%", end:"bottom 90% ", scrub:3}} )
            gsap.fromTo(".udemy-card", {x: 400, opacity: 0},  {x:0, opacity: 1, stagger:0.2,
                scrollTrigger:{trigger: ".udemy-projects", start:"top 90%", end:"bottom 90% ", scrub:3}})

        }, proRef)
        return () => ctx2.revert();
        
    }, []);

    useLayoutEffect(()=>{
        let ctx2 = gsap.context(()=>{
            gsap.fromTo(".osock", {x: -200, opacity: 0},  {x:0, opacity: 1, stagger:0.2,
                scrollTrigger:{trigger: ".ONE-projects", start:"20px 90%", end:"bottom 90% ", scrub:3}} )
            
            gsap.fromTo(".ONE-card", {x: -400, opacity: 0},  {x:0, opacity: 1, stagger:0.2,
                scrollTrigger:{trigger: ".ONE-projects", start:"top 90%", end:"bottom 90% ", scrub:3}})

        }, proRef)
        return () => ctx2.revert();
        
    }, []);






    return (


        <section className="proyectos" id="projects" style={{ backgroundColor: color.secundario }} ref={proRef} >
            <div className="projects-container container">



                
                <div className="container">
                    <h1 className=" inter" style={{ color: color.titulo }}>{idioma ? "My Projects" : "Mis Proyectos"}</h1>
                    <div className="own-projects">
                    {proyectos.propios.map((proyecto, index) => {
                                return (
                                    <div className="project-card propio" style={{ backgroundImage: `url(${proyecto.imagen})` }} key={index}>
                                        <div className="blur-card">
                                            <div className="container proyect-anchors">
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.link} >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16" style={{backgroundColor: color.secundario, color: color.texto}}>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg></a>
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.repositorio}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{backgroundColor: color.texto, color: color.secundario}}>
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </a>
                                            </div>
                                           
                                            
                                            <p className="proyect-description  inter" style={{color: color.primario}}>{proyecto.titulo}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>


                <div className="container learning-container">
                    <h1 className=" inter" style={{ color: color.titulo }}>{idioma ? "Learning Projects" : "Proyectos De Aprendizaje"}</h1>
                    <div className="container institution-container">
                        <div className="image-container usock"><img className="udemy-imagen" src={require("../../assets/udemy.png")} alt="" /></div>
                        <div className="learning-projects udemy-projects">
                        {proyectos.udemy.map((proyecto, index) => {
                                return (
                                    <div className="project-card udemy-card" style={{ backgroundImage: `url(${proyecto.imagen})` }} key={index}>
                                        <div className="blur-card">
                                            <div className="container proyect-anchors">
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.link}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16" style={{backgroundColor: color.secundario, color: color.texto}}>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg></a>
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.repositorio}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{backgroundColor: color.texto, color: color.secundario}}>
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </a>
                                            </div>
                                           
                                            
                                            <p className="proyect-description  inter" style={{color: color.primario}} >{proyecto.titulo}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container institution-container">
                        <div className="image-container osock"><img className="oracle-imagen" src={require("../../assets/oracle.png")} alt="" /></div>
                        <div className="learning-projects ONE-projects">


                            {proyectos.oracle.map((proyecto, index) => {
                                return (
                                    <div className="project-card ONE-card" style={{ backgroundImage: `url(${proyecto.imagen})` }} key={index}>
                                        <div className="blur-card">
                                            <div className="container proyect-anchors">
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.link} >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16" style={{backgroundColor: color.secundario, color: color.texto}}>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg></a>
                                            <a className="proyect-link" rel="noreferrer" target="_blank" href={proyecto.repositorio}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{backgroundColor: color.texto, color: color.secundario}}>
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </a>
                                            </div>
                                           
                                            
                                            <p className="proyect-description  inter" style={{color: color.primario}}>{proyecto.titulo}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Proyects;

