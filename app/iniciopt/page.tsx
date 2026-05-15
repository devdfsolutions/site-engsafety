// app/iniciopt/page.tsx
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
      slug: "testes-de-cargapt",
      title: "Ensaios de carga",
      description:
        "Execução de ensaios de carga estáticos e dinâmicos com emissão de certificados em conformidade com normas internacionais e requisitos de sociedades classificadoras.",
      image: "/img/servicos/testes-carga.jpg",
    },
    {
      slug: "lsa-salvatagempt",
      title: "LSA / Salvamento",
      description:
        "Manutenção e inspeção de embarcações de salvamento, guinchos, turcos, davits e equipamentos de sobrevivência, garantindo disponibilidade e segurança em situações de emergência.",
      image: "/img/servicos/lsa-salvatagem1.jpg",
    },
    {
      slug: "inspecoes-engenhariapt",
      title: "Inspeções e engenharia",
      description:
        "Inspeções técnicas, engenharia aplicada e apoio à integridade de ativos offshore e onshore, com relatórios técnicos e documentação completa.",
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
            Atuamos em todo o território nacional
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Ensaios de Carga e Engenharia
            <span className="block text-[#ffffff]">
              com excelência e segurança.
            </span>
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            A ENGSAFETY disponibiliza soluções completas em ensaios de carga,
            inspeções, manutenção, salvamento e engenharia aplicada, apoiando
            projetos offshore e onshore com foco na segurança, conformidade e
            disponibilidade operacional.
          </p>

          {/* BOTÕES HERO */}
          <div className="flex flex-wrap gap-4">
            {/* Botão WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+vossa+empresa+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0"
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
              Fale com um especialista
            </a>

            {/* Botão secundário */}
            <Link
              href="/servicospt"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/10 bg-white/30
                px-7 py-3 text-[13px] font-semibold !text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white hover:!text-[#1c2743] hover:shadow-lg
              "
            >
              Conheça os nossos serviços
            </Link>
          </div>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            ENGSAFETY • Excelência em Soluções Offshore e Onshore.
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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* SUSTENTABILIDADE */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-10 md:pr-8 max-w-xl">
              <p className="text-[25px] font-medium tracking-[0.1em] text-sky-700 uppercase">
                Sustentabilidade e eficiência.
              </p>

              <h2 className="text-[35px] font-semibold leading-tight text-slate-900">
                Cada projeto é tratado com
                <br className="hidden md:block" />
                dedicação e segurança.
              </h2>

              <p className="text-[20px] leading-relaxed text-slate-600">
                Atuamos lado a lado com os nossos clientes, desde o planeamento
                até à execução, procurando decisões técnicas alinhadas às normas,
                sociedades classificadoras e requisitos de cada operação, sempre
                com foco na segurança, eficiência e resultado.
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
                    alt={`Operação EngSafety ${n}`}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICAÇÕES */}
        <section className="space-y-6">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Somos uma empresa certificada.
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            A nossa atuação é sustentada por certificações e reconhecimentos que
            reforçam o compromisso com a qualidade, a conformidade e a segurança
            em todas as etapas dos serviços prestados.
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
                  Sistema de Gestão da Qualidade.
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
                  Diretoria de Portos e Costas
                </h3>
                <p className="text-xs text-slate-500">Marinha do Brasil.</p>
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
                  Certificação em Salvamento.
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

        {/* BANDEIRAS */}
        <section className="space-y-6 pt-10">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Bandeiras abrangidas
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Atuamos em conformidade com embarcações associadas às principais
            bandeiras marítimas internacionais.
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

            {/* Libéria */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20">
                <Image
                  src="/img/flag-liberia.png"
                  alt="Libéria"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <h3 className="text-sm font-semibold">Libéria</h3>
            </div>
          </div>
        </section>

        {/* PRINCIPAIS SERVIÇOS */}
        <section className="space-y-4">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Principais serviços
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            As nossas soluções são estruturadas para responder às exigências de
            navios, plataformas, estaleiros e unidades industriais onshore, com
            equipas especializadas e foco na segurança e conformidade.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicospt/${service.slug}`}
                aria-label={`Ver detalhes de ${service.title}`}
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
                      Saber mais
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA FINAL – ESTILO NÚMEROS / MAPA */}
        <section className="relative w-full py-16">
          {/* Mapa de fundo com baixa opacidade */}
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
              Experiência nacional e confiança global
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2743]">
              Juntamente com os nossos clientes, transformamos desafios
              <br className="hidden md:block" />
              em soluções inovadoras.
            </h2>

            <p className="text-sm text-slate-500">
              Juntos, a construir um futuro seguro.
            </p>

            {/* NÚMEROS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">3.5K+</h3>
                <p className="text-sm text-slate-600">Projetos concluídos</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">100%</h3>
                <p className="text-sm text-slate-600">Compromisso</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">500+</h3>
                <p className="text-sm text-slate-600">Clientes satisfeitos</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-light text-sky-600">10+</h3>
                <p className="text-sm text-slate-600">Anos de experiência</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}