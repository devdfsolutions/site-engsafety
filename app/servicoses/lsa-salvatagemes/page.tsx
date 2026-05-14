// app/servicoses/lsa-salvatagemes/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LsaSalvatagemPage() {
  return (
    <>
      {/* =====================================
          HERO – IMAGEN PRINCIPAL CON HOVER + BOTÓN
      ====================================== */}
      <section className="w-full overflow-hidden">
        <div
          className="
            group relative w-full h-[360px] md:h-[460px] lg:h-[520px]
            overflow-hidden cursor-pointer
          "
        >
          {/* IMAGEN */}
          <Image
            src="/img/servicos/lsa/herolsa.png"
            alt="Aparatos Salvavidas LSA"
            fill
            priority
            className="
              object-cover
              transition-all duration-700 ease-out
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0 bg-black/10
              transition-all duration-700
              group-hover:bg-black/50
            "
          />

          {/* TEXTO + BOTÓN (aparece solamente en hover) */}
          <div
            className="
              absolute inset-0 flex flex-col items-center justify-center 
              opacity-0 group-hover:opacity-100 
              transition-all duration-700 text-center px-4
            "
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
              LSA | Inspecciones IMO
            </h2>

            <p className="text-white text-sm md:text-base mb-6 max-w-xl">
              Estamos comprometidos con la seguridad de la vida en el mar.
            </p>

            {/* BOTÓN WHATSAPP */}
            <Link
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+los+servicios+LSA+y+salvamento+de+ENGSAFETY.&type=phone_number&app_absent=0"
              target="_blank"
              className="
                px-8 py-3 rounded-full 
                bg-sky-600 text-white font-semibold
                shadow-lg hover:bg-sky-700
                transition-colors
              "
            >
              Mensaje
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOQUE PRINCIPAL CON BG + COLLAGE
          (usa painelbarco, barcoguincho1, barcoguincho22, barcomar, colete)
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/servicos/lsa/painelbarco.png')" }}
      >
        {/* overlay claro */}
        <div className="absolute inset-0 bg-white/83 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLLAGE DE IMÁGENES */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/lsa/barcoguincho1.png"
              alt="Cabrestante de bote salvavidas"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcoguincho22.png"
              alt="Operación con cabrestante"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcomar3.png"
              alt="Bote en operación en el mar"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/colete.png"
              alt="Dispositivos de seguridad"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluciones e Ingeniería
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Aparatos Salvavidas (LSA).
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Realizamos inspecciones integrales, mantenimientos de rutina y
              reparaciones estructurales en botes salvavidas, cabrestantes,
              pescantes, acumuladores y demás equipos LSA, garantizando
              conformidad con normas internacionales y requisitos de banderas y
              ROs.
            </p>

            <div>
              <Link
                href="/contatoes"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          NUESTROS SERVICIOS – GRID SUPERIOR
          (usa barcochao, Design-sem-nome-22, colete, painelbarco)
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">
            Nuestros servicios
          </h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            LSA para buques de carga
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Inspección anual */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho1.png"
                alt="Inspección anual de botes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspección Anual
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Realizada bajo aprobaciones de Banderas, ROs y Fabricantes,
              garantizando la plena condición de los equipos de salvamento.
            </p>
          </div>

          {/* Inspecciones quinquenales */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho3.png"
                alt="Inspecciones quinquenales"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspecciones Quinquenales
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensayos, pruebas y revisiones completas en botes, cabrestantes y
              pescantes, conforme a los requisitos de sociedades clasificadoras.
            </p>
          </div>

          {/* Dispositivos de Seguridad */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/colete.png"
                alt="Dispositivos de seguridad"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Dispositivos de Seguridad
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Suministro y mantenimiento de aros salvavidas, chalecos,
              cinturones, dispositivos térmicos y otros elementos esenciales
              para la seguridad de la tripulación.
            </p>
          </div>

          {/* Reparaciones en la estructura */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho22.png"
                alt="Reparaciones estructurales"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Reparaciones en la Estructura
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Refuerzos estructurales, ajustes en casco, cierre de fisuras,
              sustitución de componentes y revitalización completa de los botes.
            </p>
          </div>
        </div>

        {/* =====================================
            NUESTROS SERVICIOS – GRID INFERIOR
            (usa encaixe, encaixe2, encaixe3, Design-sem-nome-23)
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Revitalización */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/painelbarco11.png"
                alt="Revitalización de botes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Revitalización de Botes Salvavidas
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Pintura, reparaciones en gelcoat, sustitución de ventanas,
              asientos, herrajes y elementos de acabado, dejando el equipo en
              estándar de nuevo.
            </p>
          </div>

          {/* Motores */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/encaixe.png"
                alt="Mantenimiento de motores"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Mantenimiento Preventivo de Motores
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Revisiones completas, cambio de componentes y pruebas
              operacionales en motores de botes y sistemas auxiliares.
            </p>
          </div>

          {/* Pescantes */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/truco11.png"
                alt="Mantenimiento de pescantes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Mantenimiento Preventivo de Pescantes
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspección de estructuras, pasadores, rodillos y sistemas de
              accionamiento, garantizando operación segura en situaciones de
              emergencia.
            </p>
          </div>

          {/* Cabrestantes */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/solda1.png"
                alt="Mantenimiento de cabrestantes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Mantenimiento Preventivo de Cabrestantes
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Revisiones, lubricación, ajustes y cambio de componentes de los
              cabrestantes de lanzamiento y recuperación de botes salvavidas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}