// app/inicioes/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const clientLogos = [
    { src: "/img/clientes/perenco.png", alt: "Perenco" },
    { src: "/img/clientes/petrobras.png", alt: "Petrobras" },
    { src: "/img/clientes/equinor.png", alt: "Equinor" },
    { src: "/img/clientes/oceanpact.png", alt: "OceanPact" },
    { src: "/img/clientes/trident.png", alt: "Trident Energy" },
  ];

  const galleryPhotos = [1, 2, 3, 4, 5, 6];

  const services = [
    {
      slug: "testes-de-cargaes",
      title: "Pruebas de carga",
      description:
        "Ejecución de pruebas de carga estáticas y dinámicas con emisión de certificados conforme a normas internacionales y requisitos de sociedades clasificadoras.",
      image: "/img/servicos/testes-carga.jpg",
    },
    {
      slug: "lsa-salvatagemes",
      title: "LSA / Salvamento",
      description:
        "Mantenimiento e inspección de embarcaciones de salvamento, cabrestantes, pescantes, davits y equipos de supervivencia, garantizando disponibilidad y seguridad en emergencias.",
      image: "/img/servicos/lsa-salvatagem1.jpg",
    },
    {
      slug: "inspecoes-engenhariaes",
      title: "Inspecciones e ingeniería",
      description:
        "Inspecciones técnicas, ingeniería aplicada y soporte a la integridad de activos offshore y onshore, con informes y documentación completa.",
      image: "/img/servicos/inspecoes-engenharia.jpg",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[70vh] overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero-delta.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/10 to-slate-950/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-16 md:py-24 space-y-3">
          <p className="text-[25px] font-semibold tracking-[0.1em] text-sky-400 uppercase">
            Operamos en todo Brasil
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Pruebas de Carga e Ingeniería
            <span className="block text-[#ffffff]">
              con excelencia y seguridad.
            </span>
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            ENGSAFETY ofrece soluciones completas en pruebas de carga,
            inspecciones, mantenimiento, salvamento e ingeniería aplicada,
            atendiendo proyectos offshore y onshore con enfoque en seguridad,
            cumplimiento y disponibilidad operativa.
          </p>

          {/* BOTONES HERO */}
          <div className="flex flex-wrap gap-4">
            {/* Botón WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Encontr%C3%A9+su+empresa+en+Google+y+me+gustar%C3%ADa+conocer+mejor+sus+servicios.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/80 bg-white
                px-7 py-3 text-[13px] font-semibold text-[#1c2743]
                shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-[2px]
              "
            >
              Hablar con un especialista
            </a>

            {/* Botón secundario */}
            <Link
              href="/servicoses"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/10 bg-white/30
                px-7 py-3 text-[13px] font-semibold !text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white hover:!text-[#1c2743] hover:shadow-lg
              "
            >
              Conozca nuestros servicios
            </Link>
          </div>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            ENGSAFETY • Excelencia en Soluciones Offshore y Onshore.
          </p>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="w-full py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="group w-50 h-40 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* SOSTENIBILIDAD */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-10 md:pr-8 max-w-xl">
              <p className="text-[25px] font-medium tracking-[0.1em] text-sky-700 uppercase">
                Sostenibilidad y eficiencia.
              </p>

              <h2 className="text-[35px] font-semibold leading-tight text-slate-900">
                Cada proyecto es tratado con
                <br className="hidden md:block" />
                dedicación y seguridad.
              </h2>

              <p className="text-[20px] leading-relaxed text-slate-600">
                Trabajamos junto a nuestros clientes, desde la planificación
                hasta la ejecución, buscando decisiones técnicas alineadas con
                normas, sociedades clasificadoras y requisitos de cada operación,
                siempre con enfoque en seguridad, eficiencia y resultados.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {galleryPhotos.map((n) => (
                <div
                  key={n}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={`/img/eng/inicial/foto${n}.png`}
                    alt={`Operación EngSafety ${n}`}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICACIONES */}
        <section className="space-y-6">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Somos una empresa certificada.
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Nuestra actuación está respaldada por certificaciones y
            reconocimientos que refuerzan el compromiso con la calidad, el
            cumplimiento y la seguridad en todas las etapas de los servicios
            prestados.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {" "}
            {/* ISO */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-iso-9001.png"
                  alt="ISO 9001:2015"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">ISO 9001:2015</h3>
                <p className="text-xs text-slate-500">
                  Sistema de Gestión de Calidad.
                </p>
              </div>
            </div>
            {/* DPC */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-dpc.png"
                  alt="DPC"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">
                  Dirección de Puertos y Costas
                </h3>
                <p className="text-xs text-slate-500">Marina de Brasil.</p>
              </div>
            </div>
            {/* CRALOG */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-cralog.png"
                  alt="CRALOG"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">CRALOG</h3>
                <p className="text-xs text-slate-500">
                  Certificación en Salvamento.
                </p>
              </div>
            </div>
            {/* DNV */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-dnv.png"
                  alt="DNV"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">DNV</h3>
                <p className="text-xs text-slate-500">
                  Approved Service Supplier.
                </p>
              </div>
            </div>
            {/* BV */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-bv.png"
                  alt="BV"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold">BV</h3>

                <p className="text-xs text-slate-500">
                  Bureau Veritas Certification.
                </p>
              </div>
            </div>
            {/* ABS */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-abs.png"
                  alt="ABS"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold">ABS</h3>

                <p className="text-xs text-slate-500">
                  American Bureau of Shipping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BANDERAS */}
        <section className="space-y-6 pt-10">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Banderas atendidas
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Operamos en conformidad con embarcaciones vinculadas a las
            principales banderas marítimas internacionales.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Bahamas */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20">
                <Image
                  src="/img/flag-bahamas.png"
                  alt="Bahamas"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <h3 className="text-sm font-semibold">Bahamas</h3>
            </div>

            {/* Panamá */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20">
                <Image
                  src="/img/flag-panama.png"
                  alt="Panamá"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <h3 className="text-sm font-semibold">Panamá</h3>
            </div>

            {/* Liberia */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20">
                <Image
                  src="/img/flag-liberia.png"
                  alt="Liberia"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <h3 className="text-sm font-semibold">Liberia</h3>
            </div>
          </div>
        </section>

        {/* PRINCIPALES SERVICIOS */}
        <section className="space-y-4">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Principales servicios
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Nuestras soluciones están estructuradas para atender las demandas de
            buques, plataformas, astilleros y unidades industriales onshore, con
            equipos especializados y enfoque en seguridad y cumplimiento.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                aria-label={`Ver detalles de ${service.title}`}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1c2743]/60 min-h-[300px] md:min-h-[400px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
                </div>

                <div className="relative z-10 flex h-full items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="px-4 text-[22px] font-semibold uppercase tracking-[0.16em] text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/95" />
                  <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center space-y-3">
                    <h3 className="text-[20px] font-semibold text-[#1c2743]">
                      {service.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-relaxed text-slate-700">
                      {service.description}
                    </p>
                    <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                      Más información
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA FINAL – ESTILO NÚMEROS / MAPA */}
        <section className="relative w-full py-16">
          {/* Mapa de fondo con baja opacidad */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
            <Image
              src="/img/mapa.png"
              alt="Mapa mundial"
              width={900}
              height={900}
              className="object-contain"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 text-center space-y-6">
            <p className="uppercase text-[13px] tracking-[0.25em] text-sky-600">
              Experiencia nacional y confianza global
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2743]">
              Junto a nuestros clientes, transformamos desafíos
              <br className="hidden md:block" />
              en soluciones innovadoras.
            </h2>

            <p className="text-sm text-slate-500">
              Juntos, construyendo un futuro seguro.
            </p>

            {/* NÚMEROS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">3.5K+</h3>
                <p className="text-sm text-slate-600">Proyectos completados</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">100%</h3>
                <p className="text-sm text-slate-600">Compromiso</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">500+</h3>
                <p className="text-sm text-slate-600">Clientes satisfechos</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">10+</h3>
                <p className="text-sm text-slate-600">Años de experiencia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}