// app/sobrees/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselSlides = [
  {
    img: "/img/sobre/fotosobre3.jpg",
    title: "Mujeres Liderando con Excelencia",
    text: "Profesionales que actúan con competencia y determinación en un sector desafiante, esenciales para el éxito de las operaciones offshore de ENGSAFETY.",
  },
  {
    img: "/img/sobre/fotosobre5.jpg",
    title: "Trabajo en Equipo",
    text: "Cada miembro del equipo contribuye al éxito de cada operación, dentro y fuera del campo.",
  },
  {
    img: "/img/sobre/fotosobre6.jpg",
    title: "Soluciones Sostenibles",
    text: "Compromiso con prácticas que minimizan el impacto ambiental, promoviendo un futuro más sostenible.",
  },
  {
    img: "/img/sobre/fotosobre4.jpg",
    title: "Excelencia en Operaciones",
    text: "Operaciones conducidas con enfoque en seguridad, eficiencia y resultados consistentes para nuestros clientes.",
  },
];

// 🔧 CONFIGURACIÓN GLOBAL DE LOS ÍCONOS DE ESTE BLOQUE
const ICON_SIZE = 60; // tamaño del ícono (px)
const ICON_OPACITY = 100; // opacidad

export default function SobrePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // auto slide (10s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  return (
    <main className="w-full flex flex-col bg-slate-50">
      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <Image
          src="/img/sobre/fotosobre2a.jpg"
          alt="Operación offshore de ENGSAFETY"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.08em]">
            SOBRE NOSOTROS
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-100">
            La eficiencia es nuestro campo. Seguridad, innovación y resultados
            consistentes en cada operación.
          </p>
        </div>
      </section>

      {/* INTRO / NUESTROS COMPROMISOS */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-700 uppercase mb-3">
          ENGSAFETY Soluciones e Ingeniería
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Nuestros compromisos.
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed max-w-3xl">
          <p>
            Con un equipo altamente calificado y un compromiso inquebrantable
            con la seguridad, la innovación y la sostenibilidad, ENGSAFETY
            entrega soluciones completas en ingeniería, mantenimiento,
            inspecciones y pruebas de carga para operaciones offshore y onshore
            en todo el territorio nacional.
          </p>
          <p>
            Actuamos de forma integrada en proyectos críticos, garantizando
            disponibilidad operativa, cumplimiento de normas y resultados que
            superan las expectativas de nuestros clientes.
          </p>
        </div>
      </section>

      {/* CARDS – INNOVACIÓN / PERSONALIZACIÓN / SOSTENIBILIDAD */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 pb-12 md:pb-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Innovación Tecnológica Offshore",
            desc: "Integramos tecnologías actuales a las operaciones offshore, garantizando eficiencia, trazabilidad y seguridad en todos los proyectos.",
            icon: "⚙️",
          },
          {
            title: "Soluciones Personalizadas",
            desc: "Desarrollamos soluciones a medida, adaptadas a las necesidades específicas de cada unidad, buque o planta industrial.",
            icon: "📌",
          },
          {
            title: "Operaciones Sostenibles y Seguras",
            desc: "Nuestros procesos priorizan la seguridad de las personas, la preservación ambiental y el cumplimiento de normas nacionales e internacionales.",
            icon: "🌱",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="font-semibold text-lg text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* LO QUE ES IMPORTANTE PARA NOSOTROS */}
      <section className="relative w-full overflow-hidden">
        {/* VIDEO DE FONDO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/img/sobre/sobreonda.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-200/10" />

        {/* Logo en la esquina derecha */}
        <div className="absolute right-5 bottom-60 w-24 md:w-40 opacity-70">
          <Image
            src="/img/eng/logos/logo-eng2branco.png"
            alt="Logo ENGSAFETY"
            width={160}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Contenido */}
        <div className="bottom-2 relative max-w-6xl mx-auto px-4 lg:px-0 py-14 md:py-20 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            ¿Qué es importante para nosotros?
          </h2>
          <p className="text-base md:text-lg text-emerald-300 mb-8">
            Juntos, construyendo un futuro seguro.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reducción de Costos",
                desc: "Buscamos constantemente optimizar procesos y adoptar soluciones innovadoras, reduciendo costos sin comprometer la calidad.",
                icon: "/img/sobre/icons/dinheiro.png",
              },
              {
                title: "Compromiso con el Futuro",
                desc: "Garantizamos seguridad en nuestras operaciones, preservando el medio ambiente y respetando las comunidades donde actuamos.",
                icon: "/img/sobre/icons/mundo.png",
              },
              {
                title: "Valorización de las Personas",
                desc: "Nuestro equipo es nuestro mayor activo. Invertimos en desarrollo continuo y en un ambiente que valora el mérito y la innovación.",
                icon: "/img/sobre/icons/humanos.png",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="object-contain"
                    style={{ opacity: ICON_OPACITY }}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-100/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA RÁPIDA – continúa, pero queda bien pegada al bloque anterior */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-4 md:py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre3.jpg"
              alt="Operación 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre4.jpg"
              alt="Operación 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre6.jpg"
              alt="Operación 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}