import { lazy, Suspense } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";
const HeroExperience = lazy(() => import('../components/HeroModels/HeroExperience'))

const Hero = () => {
  const Edad = new Date().getFullYear() - 2004 - (new Date().getMonth() < 7 || (new Date().getMonth() === 7 && new Date().getDate() < 3) ? 1 : 0)

  useGSAP(() => {
    gsap.fromTo(
      ".hero- xt h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.webp" alt="" />
      </div>

      {/* Contenedor principal: columna en móvil, fila en desktop */}
      <div className="hero-layout">
        {/* --- IZQUIERDA: Texto y Botón --- */}
        <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5 z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Creando
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          loading="lazy"
                          decoding="async"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>En proyectos Reales</h1>
            </div>

            <p className="text-white-50 md:text-xl md:text-justify relative z-10 pointer-events-none">
              Buenas, Soy José Ramírez, un desarrollador JR Front-End de Luque, Paraguay.
            </p>
            <p className="text-white-50 md:text-xl md:text-justify relative z-10 pointer-events-none">
              Actualmente tengo <strong>{Edad} años</strong> y estoy en el tercer año de
              la carrera de Ingeniería en Informática en la Universidad Americana.
            </p>
          </div>
        </header>

        {/* --- DERECHA: Modelo 3D o Visual --- */}
        <figure className="md:w-1/2 w-full flex justify-center items-center z-10">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;