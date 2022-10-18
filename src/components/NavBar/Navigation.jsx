import "./navigation.css"


function NavBar({idioma, color}) {

  const borde =  `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, ${color.texto}, ${color.titulo})`;
  return (
    <section className="navigation-bar" style={{ backgroundColor: color.secundario }}>

      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand link-animation" href="#presentation" style={{color: color.titulo, background: borde}}>Diego Guzmán</a>
          <button className="navbar-toggler collapsed d-flex d-sm-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link link-animation" style={{color: color.texto, background: borde}} href="#about">{idioma? "ABOUT": "SOBRE MI"}</a>
              <a className="nav-link link-animation" style={{color: color.texto, background: borde}} href="#skills">{idioma? "SKILLS": "HABILIDADES"}</a>
              <a className="nav-link link-animation" style={{color: color.texto, background: borde}} href="#projects">{idioma? "PROYECTS": "PROYECTOS"}</a>
              <a className="nav-link link-animation" style={{color: color.texto, background: borde}} href="#contact">{idioma? "CONTACT": "CONTACTO"}</a>

            </div>
          </div>
        </div>
      </nav>

    </section>
  );
}

export default NavBar;