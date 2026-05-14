// app/servicoses/inspecoes-engenhariaes/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function InspecaoPage() {
  return (
    <>
      {/* ================================
          HERO – IMAGEN CON HOVER + WHATSAPP
      ================================= */}
      <section className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden group">
        {/* Imagen */}
        <Image
          src="/img/servicos/inspecoes/heroinspec1.png"
          alt="Servicios de Inspección"
          fill
          priority
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Texto + botón */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">INSPECCIÓN</h1>

          <p className="mt-2 text-sm md:text-base">
            Estamos comprometidos con la seguridad de la vida en el mar.
          </p>

          {/* Botón WhatsApp visible solamente en hover */}
          <Link
            href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+los+servicios+de+inspecci%C3%B3n+de+ENGSAFETY.&type=phone_number&app_absent=0"
            className="opacity-0 group-hover:opacity-100 mt-6 px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 transition-all text-white font-semibold shadow-lg"
          >
            Mensaje
          </Link>
        </div>
      </section>

      {/* ==========================================
          BLOQUE PRINCIPAL — COLLAGE DE IMÁGENES + TEXTO
      =========================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/servicos/inspecoes/inspec4.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLLAGE DE IMÁGENES */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/inspecoes/inspec4.png"
              alt="Ensayos de inspección"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />

            <Image
              src="/img/servicos/inspecoes/barcoinspec1.png"
              alt="Inspección naval"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
              style={{ height: "100%" }}
            />

            <Image
              src="/img/servicos/inspecoes/inspec5.png"
              alt="Equipo de inspección"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />

            <Image
              src="/img/servicos/inspecoes/inspec3.png"
              alt="Operaciones offshore"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluciones e Ingeniería
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743] leading-tight">
              Inspección y Certificación.
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Garantizamos que cada equipo cumpla con las normas técnicas y los
              estándares de seguridad, asegurando un desempeño ideal y
              confiabilidad en operaciones onshore y offshore.
            </p>

            <div>
              <Link
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+los+servicios+de+inspecci%C3%B3n+de+ENGSAFETY.&type=phone_number&app_absent=0"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          NUESTROS SERVICIOS — 1ª LÍNEA
      =========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">
            Nuestros servicios
          </h2>

          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Inspección en Equipos:
          </p>
        </div>

        {/* GRID SUPERIOR */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Material de Izaje */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/materialdeicamento.png"
                alt="Material de izaje"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Material de Izaje
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspección en materiales de izaje, incluyendo eslingas, cables de
              acero, ganchos, grilletes y demás accesorios.
            </p>
          </div>

          {/* Grúa */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/guindaste.png"
                alt="Grúa"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">Grúa</h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspecciones en grúas, componentes mecánicos, estructurales y de
              seguridad.
            </p>
          </div>

          {/* Acceso por Cuerda */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/acessoporcordas.png"
                alt="Acceso por cuerda"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Acceso por Cuerda
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspección con acceso por cuerda para áreas de difícil acceso,
              como estructuras en altura y espacios confinados.
            </p>
          </div>

          {/* Tugger Winch */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/tugger.png"
                alt="Tugger Winch"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Tugger Winches
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspecciones en Tugger Winches, verificando la funcionalidad de
              estos cabrestantes auxiliares esenciales para operaciones de
              movimiento e izaje de cargas.
            </p>
          </div>
        </div>

        {/* ==========================================
            NUESTROS SERVICIOS — 2ª LÍNEA
        =========================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* ROV / Subacuático */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/drone.png"
                alt="Inspección ROV"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              ROV Vehículos Operados Remotamente
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Para ambientes subacuáticos de difícil acceso, como inspecciones
              de estructuras sumergidas, plataformas, cascos de embarcaciones y
              tuberías.
            </p>
          </div>

          {/* Torres Eólicas */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/vento.png"
                alt="Torres eólicas"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Torres Eólicas
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspecciones completas en torres eólicas, garantizando la
              integridad estructural y el funcionamiento seguro de todos los
              componentes.
            </p>
          </div>

          {/* Ensayos LP/END */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/ensaiolp.png"
                alt="Ensayos LP y END"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensayos LP y END
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Ensayos no destructivos y líquidos penetrantes aplicados para
              identificar discontinuidades, apoyar diagnósticos técnicos y
              aumentar la confiabilidad de los equipos inspeccionados.
            </p>
          </div>

          {/* Drone / Aéreo */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/inspecdrone.png"
                alt="Inspección con drone"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspección con Drone
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Inspección con drones en estructuras y áreas de difícil acceso,
              como plataformas, torres eólicas, ductos y obras industriales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}