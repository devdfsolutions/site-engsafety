// app/servicospt/testes-de-cargapt/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestesDeCargaPage() {
  return (
    <>
      {/* =====================================
          HERO – IMAGEM PRINCIPAL + HOVER CTA
      ====================================== */}
      <section className="w-full">
        <div className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] group overflow-hidden">
          {/* IMAGEM DE FUNDO */}
          <Image
            src="/img/servicos/teste-carga/herocarga1.png"
            alt="Ensaio de carga com bolsas de água"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY SUAVE */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/55" />

          {/* CONTEÚDO QUE APARECE NO HOVER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {/* TÍTULO / SUBTÍTULO FICAM SEMI VISÍVEIS E GANHAM DESTAQUE NO HOVER */}
            <h1
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-semibold text-white mb-3
                transition-all duration-300
                group-hover:scale-[1.02]
              "
            >
              Ensaios de carga
            </h1>

            <p
              className="
                text-xs md:text-sm lg:text-base
                text-slate-100 max-w-2xl mb-6
                transition-opacity duration-300
                group-hover:opacity-100
              "
            >
              Garantimos segurança e fiabilidade nas operações de elevação e
              içamento, com ensaios de carga executados conforme normas
              internacionais.
            </p>

            {/* BOTÃO WHATSAPP – SÓ FICA 100% VISÍVEL NO HOVER */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Tenho+interesse+em+solicitar+um+or%C3%A7amento+para+ensaios+de+carga+da+ENGSAFETY.&type=phone_number&app_absent=0"
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
              Solicitar um orçamento
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOCO PRINCIPAL COM FUNDO BLUR + COLAGEM
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/servicos/teste-carga/fundoblur.png')",
        }}
      >
        {/* overlay clarinho */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLAGEM DE IMAGENS (CARGAS1–4) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas1.png"
                alt="Ensaio de carga com bolsas de água"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas2.png"
                alt="Operação de ensaio de carga"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas3.png"
                alt="Equipa em operação de ensaio de carga"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas4.png"
                alt="Bolsas de ensaio de carga em operação"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluções e Engenharia
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Equipamentos para ensaios de carga.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              O ensaio de carga é essencial para garantir a segurança da
              operação, confirmando o peso máximo suportado pelo equipamento e
              evitando acidentes, danos estruturais e paragens não planeadas.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Atuamos com bolsas de água, pesos sólidos, medições
              instrumentadas e emissão de relatórios e certificados conforme os
              requisitos de sociedades classificadoras, bandeiras e ROs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Tenho+interesse+em+solicitar+um+or%C3%A7amento+para+ensaios+de+carga+da+ENGSAFETY.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-sky-600 text-sky-700 text-sm md:text-base font-semibold hover:bg-sky-50 transition-colors"
              >
                Solicitar um orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          OS NOSSOS SERVIÇOS – GRID SUPERIOR
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">
            Os nossos serviços
          </h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Ensaios de carga em equipamentos.
          </p>
        </div>

        {/* PRIMEIRA LINHA – 4 CARDS */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Búricas de helipontos */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/buricasheliporto.png"
                alt="Ensaio de carga em pontos de helipontos"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Pontos de Helipontos
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios de carga em pontos de helipontos com equipamentos de alta
              precisão, garantindo a capacidade de suporte e a segurança das
              operações aéreas.
            </p>
          </div>

          {/* Spreader Bars */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/spreaderbars.png"
                alt="Ensaio de carga em spreader bars"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Spreader Bars
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios de carga em spreader bars e acessórios de içamento,
              assegurando integridade e fiabilidade em operações de elevação.
            </p>
          </div>

          {/* Guindastes, guinchos e equipamentos de içamento */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/guindasteguinchos.png"
                alt="Ensaio de carga em guindastes e guinchos"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Guindastes, Guinchos e Equipamentos de Içamento
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios de carga em guindastes, guinchos e sistemas de elevação em
              plataformas, navios e unidades onshore.
            </p>
          </div>

          {/* Teste de carga baleeira */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testecargabaleeira.png"
                alt="Ensaio de carga em bote salva-vidas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensaio de Carga em Bote Salva-Vidas
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios de carga em botes salva-vidas, verificando pontos de
              fixação, turcos e sistemas de lançamento, conforme as exigências
              das autoridades marítimas.
            </p>
          </div>
        </div>

        {/* =====================================
            OS NOSSOS SERVIÇOS – GRID INFERIOR
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Teste de carga em olhais */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargaemolhais1.png"
                alt="Ensaio de carga em olhais"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensaio de Carga em Olhais
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios de carga em olhais, pontos de ancoragem e dispositivos de
              fixação, com emissão de relatórios e certificados.
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
              Ensaio de força de tração em embarcações, avaliando a capacidade
              máxima de tração para operações offshore e portuárias.
            </p>
          </div>

          {/* Testes de carga em SKID */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testedecargaskid.png"
                alt="Ensaios de carga em SKID"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensaios de Carga em SKID
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios estruturais em SKIDs e módulos, assegurando resistência,
              integridade e adequação às condições de operação.
            </p>
          </div>

          {/* Teste de carga ponte rolante */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testeponterolante1.png"
                alt="Ensaio de carga em ponte rolante"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensaio de Carga em Ponte Rolante
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaio de carga e verificação de dispositivos em pontes rolantes,
              garantindo capacidade nominal e segurança operacional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}