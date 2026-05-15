// app/mropt/page.tsx
"use client";

import Image from "next/image";

export default function SolucoesMroPage() {
  return (
    <>
      {/* =====================================================
          HERO – VÍDEO (sem texto, o texto já está no próprio vídeo)
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
          BLOCO PRINCIPAL – SOLUÇÕES EM MATERIAIS
      ====================================================== */}
      <main className="bg-white">
        {/* Faixa com gradiente azul e cards */}
        <section className="bg-gradient-to-b from-sky-50 via-sky-100/60 to-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <header className="text-center mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
                Soluções em Materiais
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-600">
                A maior seleção para as suas necessidades industriais e
                operacionais.
              </p>
            </header>

            {/* ====== LINHA 1 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Materiais elétricos */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/mateletric.png"
                    alt="Materiais elétricos"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Materiais Elétricos
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Variedade na venda de materiais e equipamentos elétricos, como
                  lâmpadas, luminárias, tomadas, interruptores, filtros de linha
                  e cabos.
                </p>
              </div>

              {/* À prova de explosão */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/matexplo.png"
                    alt="Materiais à prova de explosão"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Materiais à Prova de Explosão
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Soluções em segurança: câmaras de vigilância, DVR, sistemas de
                  alarme, centrais de alarme, sensores, telefones com
                  identificador de chamadas e controlos de acesso.
                </p>
              </div>

              {/* Automação industrial */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/automacaoind.png"
                    alt="Automação industrial"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Automação Industrial
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Peças e componentes para automação industrial, como guias
                  lineares, servomotores, redutores, conectores elétricos,
                  controladores remotos e placas de controlo.
                </p>
              </div>

              {/* Facilities */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/solucfacilit.png"
                    alt="Soluções facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Soluções Facilities
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Eletrónicos: praticidade para o seu dia a dia. Encontre TVs,
                  computadores, portáteis, tablets e muito mais para responder
                  às suas necessidades com tecnologia e eficiência.
                </p>
              </div>
            </div>

            {/* ====== LINHA 2 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Tubos & conexões */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/tuboseconect.png"
                    alt="Tubos e conexões"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Tubos &amp; Conexões
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Tubos em aço carbono, com ou sem costura, e tubos em aço inox.
                  Encontre conexões soldáveis, conexões roscáveis e conectores
                  hidráulicos.
                </p>
              </div>

              {/* Ferramentas */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/ferramentas.png"
                    alt="Ferramentas"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Ferramentas
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Oferecemos uma ampla linha de produtos, como berbequins,
                  aparafusadoras, serras, lixadoras, chaves, martelos, alicates,
                  parafusos e brocas.
                </p>
              </div>

              {/* Fixadores */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/fixadores.png"
                    alt="Fixadores"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Fixadores
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Peças de reposição genuínas são fornecidas como parte das
                  nossas muitas soluções prontas a utilizar.
                </p>
              </div>

              {/* EPI / EPC */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/epi.png"
                    alt="EPI e EPC"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  EPI / EPC
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Utilizados para proteger o trabalhador contra riscos que
                  ameaçam a sua segurança, por exemplo: luvas, máscaras e EPC,
                  placas de sinalização e fitas antiderrapantes.
                </p>
              </div>
            </div>

            {/* ====== LINHA 3 ====== */}
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
                  Temos os materiais essenciais para as suas remodelações e
                  pinturas, como tintas de parede, tinta spray, corantes,
                  selador, fixador, massa corrida e pincéis.
                </p>
              </div>

              {/* Refrigeração */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/regrigeracao.png"
                    alt="Refrigeração"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Refrigeração
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Aqui encontra botijas, hélices, turbinas, termóstatos,
                  condensadores, válvulas, dampers e resistências com os
                  melhores preços do mercado.
                </p>
              </div>

              {/* Válvulas e flanges */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/flanges.png"
                    alt="Válvulas e flanges"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Válvulas e Flanges
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Válvulas em projetos de tubagem garantem o controlo eficiente
                  do escoamento de fluidos, e flanges em sistemas de tubagem
                  industrial ligam componentes.
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
                  Oferecemos produtos e equipamentos de alta qualidade para
                  responder às suas necessidades industriais e tecnológicas com
                  eficiência e fiabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOGOS DE CLIENTES / PARCEIROS
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
            BLOCO FINAL – INFORMAÇÕES DE CONTACTO (CLICÁVEL)
        ====================================================== */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
                ENGSAFETY Soluções e Engenharia
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
                Informações de Contacto
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Estamos sempre prontos para ajudar. Fale com a nossa equipa
                comercial e encontre a melhor solução em materiais e
                equipamentos para o seu projeto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-sm text-slate-700">
              {/* Email → /contatopt */}
              <a
                href="/contatopt"
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

              {/* Telefones → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Tenho+interesse+em+solu%C3%A7%C3%B5es+MRO.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ☎
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Telefone</h3>
                <p>(21) 98656-0236 (24 horas)</p>
                <p>(21) 99530-3032</p>
                <p>(21) 3491-5335</p>
              </a>

              {/* Endereço → /contatopt */}
              <a
                href="/contatopt"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    📍
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Base ENGSAFETY</h3>
                <p>Rio de Janeiro | Duque de Caxias</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}