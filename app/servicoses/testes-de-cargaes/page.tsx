// app/servicoses/testes-de-cargaes/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestesDeCargaPage() {
  return (
    <>
      {/* =====================================
          HERO – IMAGEN PRINCIPAL + HOVER CTA
      ====================================== */}
      <section className="w-full">
        <div className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] group overflow-hidden">
          {/* IMAGEN DE FONDO */}
          <Image
            src="/img/servicos/teste-carga/herocarga1.png"
            alt="Prueba de carga con bolsas de agua"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY SUAVE */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/55" />

          {/* CONTENIDO QUE APARECE EN HOVER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {/* TÍTULO / SUBTÍTULO */}
            <h1
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-semibold text-white mb-3
                transition-all duration-300
                group-hover:scale-[1.02]
              "
            >
              Pruebas de carga
            </h1>

            <p
              className="
                text-xs md:text-sm lg:text-base
                text-slate-100 max-w-2xl mb-6
                transition-opacity duration-300
                group-hover:opacity-100
              "
            >
              Garantizamos seguridad y confiabilidad en las operaciones de
              elevación e izaje, con pruebas de carga ejecutadas conforme a
              normas internacionales.
            </p>

            {/* BOTÓN WHATSAPP */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+solicitar+un+presupuesto+para+pruebas+de+carga+de+ENGSAFETY.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                text-sm md:text-base font-semibold
                bg-sky-600 text-white
                shadow-md
                opacity-0 group-hover:opacity-100
                translate-y-3 group-hover:translate-y-0
                transition-all duration-300
                hover:bg-sky-700
              "
            >
              Solicitar un presupuesto
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOQUE PRINCIPAL CON FONDO BLUR + COLLAGE
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/servicos/teste-carga/fundoblur.png')",
        }}
      >
        {/* overlay claro */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLLAGE DE IMÁGENES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas1.png"
                alt="Prueba de carga con bolsas de agua"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas2.png"
                alt="Operación de prueba de carga"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas3.png"
                alt="Equipo en operación de prueba de carga"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas4.png"
                alt="Bolsas de prueba de carga en operación"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluciones e Ingeniería
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Equipos para pruebas de carga.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              La prueba de carga es esencial para garantizar la seguridad de la
              operación, confirmando el peso máximo que el equipo soporta y
              evitando accidentes, daños estructurales y paradas no planificadas.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Trabajamos con bolsas de agua, pesos sólidos, mediciones
              instrumentadas y emisión de informes y certificados conforme a los
              requisitos de sociedades clasificadoras, banderas y ROs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+solicitar+un+presupuesto+para+pruebas+de+carga+de+ENGSAFETY.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-sky-600 text-sky-700 text-sm md:text-base font-semibold hover:bg-sky-50 transition-colors"
              >
                Solicitar un presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          NUESTROS SERVICIOS – GRID SUPERIOR
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">
            Nuestros servicios
          </h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Pruebas de carga en equipos.
          </p>
        </div>

        {/* PRIMERA LÍNEA – 4 CARDS */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Búricas de helipontos */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/buricasheliporto.png"
                alt="Prueba de carga en puntos de helipuerto"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Puntos de Helipuertos
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Pruebas de carga en puntos de helipuertos con equipos de alta
              precisión, garantizando la capacidad de soporte y la seguridad de
              las operaciones aéreas.
            </p>
          </div>

          {/* Spreader Bars */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/spreaderbars.png"
                alt="Prueba de carga en spreader bars"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Spreader Bars
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Ensayos de carga en spreader bars y accesorios de izaje,
              asegurando integridad y confiabilidad en operaciones de elevación.
            </p>
          </div>

          {/* Grúas, cabrestantes y grados */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/guindasteguinchos.png"
                alt="Prueba de carga en grúas y cabrestantes"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Grúas, Cabrestantes y Equipos de Izaje
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Pruebas de carga en grúas, cabrestantes y sistemas de elevación en
              plataformas, buques y unidades onshore.
            </p>
          </div>

          {/* Prueba de carga baleeira */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testecargabaleeira.png"
                alt="Prueba de carga en bote salvavidas"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Prueba de Carga en Bote Salvavidas
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Pruebas de carga en botes salvavidas, verificando puntos de
              fijación, pescantes y sistemas de lanzamiento, conforme a las
              exigencias de las autoridades marítimas.
            </p>
          </div>
        </div>

        {/* =====================================
            NUESTROS SERVICIOS – GRID INFERIOR
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Prueba de carga en olhais */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargaemolhais1.png"
                alt="Prueba de carga en orejetas"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Prueba de Carga en Orejetas
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Pruebas de carga en orejetas, puntos de anclaje y dispositivos de
              fijación, con emisión de informes y certificados.
            </p>
          </div>

          {/* Bollard Pull Test */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/bollardpull.png"
                alt="Bollard pull test"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Bollard Pull Test
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Prueba de fuerza de tiro en embarcaciones, evaluando la capacidad
              máxima de tracción para operaciones offshore y portuarias.
            </p>
          </div>

          {/* Pruebas de carga en SKID */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testedecargaskid.png"
                alt="Pruebas de carga en SKID"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Pruebas de Carga en SKID
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Pruebas estructurales en SKIDs y módulos, asegurando resistencia,
              integridad y adecuación a las condiciones de operación.
            </p>
          </div>

          {/* Prueba de carga puente grúa */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testeponterolante1.png"
                alt="Prueba de carga en puente grúa"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Prueba de Carga en Puente Grúa
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Prueba de carga y verificación de dispositivos en puentes grúa,
              garantizando capacidad nominal y seguridad operativa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}