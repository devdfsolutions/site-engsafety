// app/sobre/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselSlides = [
  {
    img: "/img/sobre/fotosobre3.jpg",
    title: "Mulheres Liderando com Excelência",
    text: "Profissionais que atuam com competência e determinação em um setor desafiador, essenciais para o sucesso das operações offshore da ENGSAFETY.",
  },
  {
    img: "/img/sobre/fotosobre5.jpg",
    title: "Trabalho em Equipe",
    text: "Cada membro da equipe contribui para o sucesso de cada operação, dentro e fora do campo.",
  },
  {
    img: "/img/sobre/fotosobre6.jpg",
    title: "Soluções Sustentáveis",
    text: "Compromisso com práticas que minimizam o impacto ambiental, promovendo um futuro mais sustentável.",
  },
  {
    img: "/img/sobre/fotosobre4.jpg",
    title: "Excelência em Operações",
    text: "Operações conduzidas com foco em segurança, eficiência e resultados consistentes para nossos clientes.",
  },
];

// 🔧 CONFIGURAÇÃO GLOBAL DOS ÍCONES DESSE BLOCO
const ICON_SIZE = 60; // tamanho do ícone (px)
const ICON_OPACITY = 100; // opacidade

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
          src="/img/sobre/fotosobre2.jpg"
          alt="Operação offshore da ENGSAFETY"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.08em]">
            SOBRE NÓS
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-100">
            Eficiência é o nosso campo. Segurança, inovação e resultados
            consistentes em cada operação.
          </p>
        </div>
      </section>

      {/* INTRO / NOSSOS COMPROMISSOS */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-700 uppercase mb-3">
          ENGSAFETY Soluções e Engenharia
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Nossos compromissos.
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed max-w-3xl">
          <p>
            Com uma equipe altamente qualificada e um compromisso inabalável com
            a segurança, inovação e sustentabilidade, a ENGSAFETY entrega
            soluções completas em engenharia, manutenção, inspeções e testes de
            carga para operações offshore e onshore em todo o território
            nacional.
          </p>
          <p>
            Atuamos de forma integrada em projetos críticos, garantindo
            disponibilidade operacional, conformidade com normas e resultados
            que superam as expectativas de nossos clientes.
          </p>
        </div>
      </section>

      {/* CARDS – INOVAÇÃO / PERSONALIZAÇÃO / SUSTENTABILIDADE */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 pb-12 md:pb-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Inovação Tecnológica Offshore",
            desc: "Integramos tecnologias atuais às operações offshore, garantindo eficiência, rastreabilidade e segurança em todos os projetos.",
            icon: "⚙️",
          },
          {
            title: "Soluções Personalizadas",
            desc: "Desenvolvemos soluções sob medida, adaptadas às necessidades específicas de cada unidade, navio ou planta industrial.",
            icon: "📌",
          },
          {
            title: "Operações Sustentáveis e Seguras",
            desc: "Nossos processos priorizam segurança das pessoas, preservação ambiental e conformidade com normas nacionais e internacionais.",
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

      

      {/* O QUE É IMPORTANTE PARA NÓS */}
      <section className="relative w-full overflow-hidden">
        {/* VÍDEO DE FUNDO */}
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

        {/* Logo no canto direito */}
        <div className="absolute right-5 bottom-60 w-24 md:w-40 opacity-70">
          <Image
            src="/img/eng/logos/logo-eng2branco.png"
            alt="Logo ENGSAFETY"
            width={160}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Conteúdo */}
        <div className="bottom-2 relative max-w-6xl mx-auto px-4 lg:px-0 py-14 md:py-20 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            O que é importante para nós?
          </h2>
          <p className="text-base md:text-lg text-emerald-300 mb-8">
            Juntos, construindo um futuro seguro.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Redução de Custos",
                desc: "Buscamos constantemente otimizar processos e adotar soluções inovadoras, reduzindo custos sem comprometer a qualidade.",
                icon: "/img/sobre/icons/dinheiro.png",
              },
              {
                title: "Compromisso com o Futuro",
                desc: "Garantimos segurança em nossas operações, preservando o meio ambiente e respeitando as comunidades onde atuamos.",
                icon: "/img/sobre/icons/mundo.png",
              },
              {
                title: "Valorização das Pessoas",
                desc: "Nossa equipe é nosso maior ativo. Investimos em desenvolvimento contínuo e em um ambiente que valoriza mérito e inovação.",
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

      {/* GALERIA RÁPIDA – continua, mas fica bem colada no bloco acima */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-4 md:py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre3.jpg"
              alt="Operação 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre4.jpg"
              alt="Operação 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre6.jpg"
              alt="Operação 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
