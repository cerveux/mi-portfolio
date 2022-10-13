import "./footer.css"

function Footer({color, idioma}) {



    var year = new Date().getFullYear();

    
    return (
        <section className="footer" style={{backgroundColor: color.primario}}>

            <footer className="align-self-center ">


                <div className="container social-container align-content-center" style={{borderBottom: `1px solid ${color.secundario}`}}>

                    <ul className="nav justify-content-center icon-container" id="lista">
                        <li className="nav-item mx-3 social-icon" id="git" style={{border: `1px solid ${color.texto}`}}>
                            <span>
                                <a target="_blank" rel="noreferrer" href="https://github.com/cerveux" className="icon-link" style={{color: color.texto}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </span>
                        </li>

                        <li className="nav-item mx-3 social-icon" id="linkedin" style={{border: `1px solid ${color.texto}`}}>
                            <span>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/diego-guzm%C3%A1n-cerveux/" style={{color: color.texto}} className="icon-link" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg>
                                </a>
                            </span>
                        </li>

                        <li className="nav-item mx-3 social-icon" id="hrank" style={{border: `1px solid ${color.texto}`}}>
                            <span>
                                <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/diegomartinguzm1" className="icon-link" style={{color: color.texto}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor" ><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" /></svg>
                                </a>
                            </span>
                        </li>

                        <li className="nav-item mx-3 social-icon" id="mail" style={{border: `1px solid ${color.texto}`}}>
                            <span>
                                <a target="_blank" rel="noreferrer" href="mailto:cerveux@hotmail.com? mail:" className="icon-link" style={{color: color.texto}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                </a>
                            </span>
                        </li>
                    </ul>

                </div>

                <div className="container trademark">
                    <p className="text-center" style={{color: color.texto}}>{idioma? "© Designed & built by Cerveux" : "© Creada y diseñada por Cerveux"} {year}</p>
                </div>



            </footer>

        </section>
    );
}

export default Footer;