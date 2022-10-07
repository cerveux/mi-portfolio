import style from "./about.css"

function About({idioma, color}) {
    return (
        <section className='aboutMe' style={{ backgroundColor: color.secundario }} id="about">
            <div className="about-container container">
                <h2 className="about-title" style={{ color: color.titulo }}>
                    {idioma ? ("Hi, i´m Diego") : ("Hola, yo soy Diego")}
                    </h2>
                <div className="about-parrafo">
                    <p style={{ color: color.texto }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac odio vel libero placerat convallis. Praesent in magna consequat, luctus est sed, blandit enim. In non congue leo, sit amet tincidunt ligula. Praesent nulla massa, ultrices sit amet volutpat a, ultricies vel felis. Nam dictum mattis lorem, vel interdum lorem gravida eu. Etiam imperdiet enim orci, at suscipit dui sagittis ut. Nullam elementum gravida neque, et malesuada mi sagittis vitae. Fusce sit amet sem arcu. Donec consequat euismod elit sed pulvinar. </p>
                    <p style={{ color: color.texto }}>Donec sit amet mi vitae elit egestas pulvinar. Quisque congue pretium nisl, ac viverra tellus gravida lacinia. Phasellus a consequat risus, et blandit felis. Maecenas venenatis pretium ante, nec molestie leo sodales non. Morbi et convallis velit. Suspendisse volutpat scelerisque arcu. Praesent vitae commodo ante. Donec nulla sapien, placerat id lorem in, luctus congue erat. Phasellus neque sem, feugiat a eros in, lobortis molestie sapien. Donec ac facilisis arcu. Nullam vitae elit pulvinar massa pellentesque hendrerit. Quisque et purus facilisis, ultricies mauris nec, consectetur mi. Phasellus tellus leo, tristique at porttitor nec, posuere a lectus. Pellentesque pulvinar ullamcorper sapien, scelerisque fermentum erat aliquet eu. Aenean finibus vestibulum eros quis feugiat. </p>
                    <p style={{ color: color.texto }}>Duis fermentum ligula a blandit pulvinar. Ut congue risus vulputate diam vehicula, sit amet rutrum urna fringilla. Nullam viverra mollis ornare. Nunc rhoncus ultrices scelerisque. Phasellus rutrum pellentesque sem id lobortis. Donec tempor varius pulvinar. Vivamus tempor est consectetur tincidunt pretium. Etiam hendrerit suscipit enim eget aliquam. Cras sed malesuada lectus. Vestibulum ullamcorper nulla vitae velit porttitor convallis non eu sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel vestibulum arcu. </p>

                </div>

            </div>


        </section>
    );
}

export default About;