// app/mroes/page.tsx
"use client";

import Image from "next/image";

export default function SolucoesMroPage() {
  return (
    <>
      {/* =====================================================
          HERO – VIDEO (sin texto, el texto ya está en el propio video)
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-black">
        <video
          className="w-full h-[260px] md:h-[420px] lg:h-[650px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/clipheromro.mp4" type="video/mp4" />
        </video>
      </section>

      {/* =====================================================
          BLOQUE PRINCIPAL – SOLUCIONES EN MATERIALES
      ====================================================== */}
      <main className="bg-white">
        {/* Franja con gradiente azul y cards */}
        <section className="bg-gradient-to-b from-sky-50 via-sky-100/60 to-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <header className="text-center mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
                Soluciones en Materiales
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-600">
                La mayor selección para sus necesidades industriales y
                operativas.
              </p>
            </header>

            {/* ====== LÍNEA 1 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Materiales eléctricos */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/mateletric.png"
                    alt="Materiales eléctricos"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Materiales Eléctricos
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Variedad en la venta de materiales y equipos eléctricos, como
                  lámparas, luminarias, tomas de corriente, interruptores,
                  filtros de línea y cables.
                </p>
              </div>

              {/* A prueba de explosión */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/matexplo.png"
                    alt="Materiales a prueba de explosión"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Materiales a Prueba de Explosión
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Soluciones en seguridad: cámaras de vigilancia, DVR, sistemas
                  de alarma, centrales de alarma, sensores, teléfonos con
                  identificador de llamadas y controles de acceso.
                </p>
              </div>

              {/* Automatización industrial */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/automacaoind.png"
                    alt="Automatización industrial"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Automatización Industrial
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Piezas y componentes para automatización industrial, como
                  guías lineales, servomotores, reductores, conectores
                  eléctricos, controladores remotos y placas de control.
                </p>
              </div>

              {/* Facilities */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/solucfacilit.png"
                    alt="Soluciones facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Soluciones Facilities
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Electrónicos: practicidad para su día a día. Encuentre TVs,
                  computadoras, notebooks, tablets y mucho más para atender sus
                  necesidades con tecnología y eficiencia.
                </p>
              </div>
            </div>

            {/* ====== LÍNEA 2 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Tubos & conexiones */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/tuboseconect.png"
                    alt="Tubos y conexiones"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Tubos &amp; Conexiones
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Tubos en acero carbono, con o sin costura, y tubos en acero
                  inoxidable. Encuentre conexiones soldables, conexiones
                  roscadas y conectores hidráulicos.
                </p>
              </div>

              {/* Herramientas */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/ferramentas.png"
                    alt="Herramientas"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Herramientas
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Ofrecemos una amplia línea de productos, como taladros,
                  atornilladores, sierras, lijadoras, llaves, martillos,
                  alicates, tornillos y brocas.
                </p>
              </div>

              {/* Fijadores */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/fixadores.png"
                    alt="Fijadores"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Fijadores
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Piezas de repuesto genuinas son suministradas como parte de
                  nuestras muchas soluciones listas para usar.
                </p>
              </div>

              {/* EPI / EPC */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/epi.png"
                    alt="EPI y EPC"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  EPI / EPC
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Utilizados para proteger al trabajador contra riesgos que
                  amenazan su seguridad, por ejemplo: guantes, mascarillas y
                  EPC, placas de señalización y cintas antideslizantes.
                </p>
              </div>
            </div>

            {/* ====== LÍNEA 3 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8">
              {/* Pintura */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/pintura.png"
                    alt="Pintura"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Pintura
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Contamos con los materiales esenciales para sus reformas y
                  pinturas, como pinturas de pared, pintura en spray, colorantes,
                  sellador, fijador, masilla y pinceles.
                </p>
              </div>

              {/* Refrigeración */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/regrigeracao.png"
                    alt="Refrigeración"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Refrigeración
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Aquí encontrará cilindros, hélices, turbinas, termostatos,
                  capacitores, válvulas, dampers y resistencias con los mejores
                  precios del mercado.
                </p>
              </div>

              {/* Válvulas y bridas */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/flanges.png"
                    alt="Válvulas y bridas"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Válvulas y Bridas
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Las válvulas en proyectos de tuberías garantizan el control
                  eficiente del flujo de fluidos, y las bridas en sistemas de
                  tuberías industriales conectan componentes.
                </p>
              </div>

              {/* MECANAVI */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/mecanavi.png"
                    alt="MECANAVI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  MECANAVI
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Ofrecemos productos y equipos de alta calidad para atender sus
                  necesidades industriales y tecnológicas con eficiencia y
                  confiabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOGOS DE CLIENTES / SOCIOS
        ====================================================== */}
        <section className="py-12 md:py-15 border-y border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/petrologo.png"
                    alt="Petrobras"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Petrobras
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/oceanlogo.png"
                    alt="Oceaneering"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Oceaneering
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/seatriumlogo.png"
                    alt="Seatrium"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Seatrium
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-16">
                  <Image
                    src="/img/solucoes-em-mro/foresealogo.png"
                    alt="Foresea"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Foresea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BLOQUE FINAL – INFORMACIÓN DE CONTACTO (CLICABLE)
        ====================================================== */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
                ENGSAFETY Soluciones e Ingeniería
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
                Información de Contacto
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Estamos siempre preparados para ayudar. Hable con nuestro equipo
                comercial y encuentre la mejor solución en materiales y equipos
                para su proyecto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-sm text-slate-700">
              {/* Email → /contatoes */}
              <a
                href="/contatoes"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ✉
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">
                  Email Comercial
                </h3>
                <p>comercial@engsafety.ind.br</p>
              </a>

              {/* Teléfonos → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hola! Tengo interés en soluciones MRO."
                target="_blank"
                rel="noreferrer"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ☎
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Teléfono</h3>
                <p>(21) 98656-0236 (24 horas)</p>
                <p>(21) 99530-3032</p>
                <p>(21) 3491-5335</p>
              </a>

              {/* Dirección → /contatoes */}
              <a
                href="/contatoes"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    📍
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Base ENGSAFETY</h3>
                <p>Río de Janeiro | Brazil</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}