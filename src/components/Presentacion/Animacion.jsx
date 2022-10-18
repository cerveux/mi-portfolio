import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Animacion = ({fondo, particulas}) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  console.log(fondo);

  return (
    <Particles
      id="tsparticles"
      className="particulas"
      CanvasClassName="example"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: fondo,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            attract: { distance: 200, duration: 0.4, factor: 5 },
          },
        },
        fullScreen: { 
          enable: false,
          zIndex: 0 },
        particles: {
          color: {
            value: particulas,
          },
          links: {
            color: particulas,
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          /* collisions: {
            enable: true,
          }, */
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            directions: "none",
            enable: true,
            outModes: {                              
            none: "none",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            anim: { enable: false, opacityMin: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              height: 100,
              replaceColor: true,
              src: "images/github.svg",
              width: 100
            },
            polygon: { nbSides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        detectRetina: true,
      }}
    />
  );
};

export default Animacion