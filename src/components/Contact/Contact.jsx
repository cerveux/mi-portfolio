import { useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import Modal from "../Modal/Modal";
import { BoolHook } from "../../hooks/BoolHook"

function Contact({ idioma, color }) {

    const [isOpenMail, openModalMail] = BoolHook(false);
    const [isOpenError, openModalError] = BoolHook(false);


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cerveux', 'template_cerveux', e.target, '3QYdxORYCSZdMVVqX')
            .then((result) => {
                console.log(result.text);
                openModalMail();
            }, (error) => {
                console.log(error.text);
                openModalError();
            });

        setMailito({
            name: "",
            email: "",
            subject: "",
            message: ""
        })


    };

    const underline = `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 0, 0, 0), ${color.texto}, rgba(0, 0, 0, 0)),linear-gradient(to left, rgba(0, 0, 0, 0), ${color.titulo}, rgba(0, 0, 0, 0))`;


    const [mailito, setMailito] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });;

    function updateMessage(event) {
        const { name, value } = event.target;
        setMailito({
            ...mailito,
            [name]: value
        })

    }
    return (
        <section className="contacto" id="contact" style={{ backgroundColor: color.primario }}>
            <div className="container text-center contacto-container">



                <div className="row justify-content-center justify-content-sm-center justify-content-lg-evenly prueba-row">
                    <div className="col-10 col-sm-10 col-md-6 col-lg-5 inter contato-texto">
                        <h2 className="titulo-contacto" style={{ color: color.titulo }}>{idioma ? "Get In Touch" : " Ponte En Contacto"}</h2>
                        <h5 className="contacto-parrafo" style={{ color: color.texto }}>{idioma ? "You have an interesting project or idea you need help with?" : "¿Tienes un proyecto o idea interesante y necesitas ayuda?"}</h5>
                        <h5 className="contacto-parrafo" style={{ color: color.texto }}>{idioma ? "My inbox is always open, so send a message I’ll appreciate even a simple hello." : "Mi correo siempre está disponible, así que envía un mensaje que hasta un saludo es bienvenido."}</h5>
                        
                    </div>

                    <div className="col-11 col-sm-10 col-md-6 col-lg-5">






                        <form onSubmit={sendEmail} autoComplete="off" className="inter" >

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control  input-styles"
                                    name="name" id="floatingName"
                                    placeholder="Name"
                                    style={{ color: color.texto, background: underline }}
                                    onChange={updateMessage}
                                    value={mailito.name}
                                    required
                                />
                                <label htmlFor="floatingName" style={{ color: color.titulo }}>{idioma ? "Name" : "Nombre"}</label>
                            </div>

                            <div className="form-floating mb-3 pruebaemail ">
                                <input type="email"
                                    className="form-control  input-styles"
                                    name="email" id="floatingEmail"
                                    placeholder="name@example.com"
                                    style={{ background: underline, color: color.texto }}
                                    onChange={updateMessage}
                                    value={mailito.email}
                                    required />
                                <label htmlFor="floatingEmail" style={{ color: color.titulo }}>{idioma ? "Email address" : "Email"}</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text"
                                    className="form-control input-styles"
                                    name="subject" id="floatingSubject"
                                    placeholder="Subject"
                                    style={{ color: color.texto, background: underline }}
                                    onChange={updateMessage}
                                    value={mailito.subject} />
                                <label htmlFor="floatingSubject" style={{ color: color.titulo }}>{idioma ? "Subject" : "Asunto"}</label>
                            </div>

                            <div className="form-floating mb-3">

                                <textarea
                                    className="form-control input-styles"
                                    id="floatingMessage"
                                    rows="3"
                                    placeholder="Message"
                                    name="message"
                                    style={{ height: '150px', resize: "none", background: underline, color: color.texto }}
                                    onChange={updateMessage}
                                    value={mailito.message}
                                />
                                <label htmlFor="floatingMessage" style={{ color: color.titulo }}>{idioma ? "Message" : "Mensaje"}</label>
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-lg botton-submit"  style={{ height: "60px", color: color.titulo, borderColor: color.secundario }} >{idioma ? "Contact Me" : "Contactarme"}</button>
                            </div>
                        </form>



                    </div>

                </div>
            </div>



            <Modal isOpen={isOpenMail} closeModal={openModalMail} >
                <div className="card text-center inter" style={{ width: " 18rem", backgroundColor: color.secundario }} >
                    <div className="card-body ">
                        <h5 className="card-title">
                            <div className="wrapper">
                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                            </div>
                        </h5>
                        <h6 className="card-subtitle mb-3" style={{ color: color.titulo }}  >{idioma ? "Thanks for reaching out!!!" : "¡¡¡Gracias por contactarse!!!"}</h6>
                        <p className="card-text" style={{ color: color.texto }}>{idioma ? "I`ll get in touch with you immediately" : "Me estaré comunicando a la brevedad."}</p>
                        <div className="d-grid gap-2">
                            <button className="btn" onClick={() => openModalMail()} style={{ color: color.titulo, borderColor: color.primario }}>{idioma ? "Close" : "Cerrar"}</button>
                        </div>

                    </div>
                </div>
            </Modal>

            <Modal isOpen={isOpenError} closeModal={openModalError}  >
                <div className="card text-center inter" style={{ width: " 18rem", backgroundColor: color.secundario }} >
                    <div className="card-body ">
                        <h5 className="card-title">
                            <div className="wrapper">                                
                                <div className="wrapper-wrong">
                                    <img className="cog" src={require("../../assets/cog.png")} alt="" />
                                </div>
                            </div>
                        </h5>
                        <h6 className="card-subtitle mb-3" style={{ color: color.titulo }}  >{idioma ? "We are having troubles" : "Estamos teniendo problemas"}</h6>
                        <p className="card-text" style={{ color: color.texto }}>{idioma ? "Please try again later" : "Por favor intente más tarde"}</p>
                        <div className="d-grid gap-2">
                            <button className="btn" onClick={() => openModalError()} style={{ color: color.titulo, borderColor: color.primario }}>{idioma ? "Close" : "Cerrar"}</button>
                        </div>

                    </div>
                </div>
            </Modal>
        </section>
    );
}

export default Contact;