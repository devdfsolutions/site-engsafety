// app/locacaoes/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Mode = "locacao" | "venda";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Tengo+inter%C3%A9s+en+conocer+m%C3%A1s+sobre+la+alquiler+o+venta+de+equipos+de+ENGSAFETY.&type=phone_number&app_absent=0";

export default function LocacaoPage() {
  const [mode, setMode] = useState<Mode>("locacao");

  return (
    <>
      {/* =====================================
          HERO – IMAGEN CON HOVER (DESKTOP)
         ===================================== */}
      <section className="relative w-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px]">
        {/* Imagen de fondo */}
        <Image
          src="/img/locacao/heroloc.png"
          alt="Alquiler de equipos ENGSAFETY"
          fill
          priority
          className="object-cover"
        />

        {/* Capa de interacción */}
        <div className="absolute inset-0 group">
          {/* Overlay: siempre visible en mobile, solo en hover en desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          {/* Contenido central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                text-center text-white px-4
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
                ALQUILER DE EQUIPOS
              </h1>
              <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
                Soluciones completas para pruebas, ensayos y operaciones
                marítimas e industriales.
              </p>

              <div className="mt-6">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                >
                  Contáctenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOQUE PRINCIPAL
         ===================================== */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-20 space-y-16">
        {/* Título principal */}
        <section className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
            Alquiler para Pruebas
          </h2>
          <p className="text-slate-500 text-sm md:text-base">ENGSAFETY</p>
        </section>

        {/* =====================================
            GRID DE PRODUCTOS PRINCIPALES
           ===================================== */}
        <section className="grid md:grid-cols-4 gap-8">
          {/* 1 - Bolsas de agua */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc1.png"
                alt="Bolsas de agua"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Bolsas de Agua
            </h3>
            <p className="text-slate-500 text-xs mt-1">Water Bags</p>
          </div>

          {/* 2 - Celdas de carga */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc2.png"
                alt="Celdas de carga"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Celdas de Carga
            </h3>
            <p className="text-slate-500 text-xs mt-1">Load Cells</p>
          </div>

          {/* 3 - Kits para prueba en botes salvavidas */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc3.png"
                alt="Kits para prueba en botes salvavidas"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Kits Para Prueba En Botes Salvavidas
            </h3>
            <p className="text-slate-500 text-xs mt-1">Lifeboats Test Kits</p>
          </div>

          {/* 4 - Dispositivo de tracción */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc4.png"
                alt="Dispositivo de tracción"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Dispositivo de Tracción
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              Traction devices for Padeyes, Tie Down Points, Beams and Hook
              Release.
            </p>
          </div>
        </section>

        {/* =====================================
            BLOQUE BOTE + TOGGLE ALQUILER / VENTA
           ===================================== */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Imagen grande CON HOVER IGUAL AL HERO */}
          <div className="relative w-full min-h-[260px] md:min-h-[320px] rounded-xl overflow-hidden group">
            <Image
              src="/img/locacao/loc5.png"
              alt="Bote de rescate ENGSAFETY"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

            {/* Contenido */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  text-center text-white px-4
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                  ALQUILER DE BOTES DE RESCATE
                </h3>

                <p className="mt-2 text-xs md:text-sm text-white/90 max-w-xs mx-auto">
                  Seguridad, agilidad y confiabilidad para operaciones
                  marítimas.
                </p>

                <div className="mt-5">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                  >
                    Contáctenos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Texto con toggle */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6">
            {/* Toggle Alquiler / Venta */}
            <div className="flex items-center justify-end gap-3 text-xs font-medium mb-4">
              <button
                type="button"
                onClick={() => setMode("locacao")}
                className={
                  mode === "locacao"
                    ? "text-sky-600"
                    : "text-slate-500 hover:text-slate-700"
                }
              >
                Alquiler
              </button>

              <button
                type="button"
                onClick={() =>
                  setMode((prev) => (prev === "locacao" ? "venda" : "locacao"))
                }
                aria-label="Alternar entre alquiler y venta"
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  mode === "venda" ? "bg-sky-500" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
                    mode === "venda" ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => setMode("venda")}
                className={
                  mode === "venda"
                    ? "text-sky-600"
                    : "text-slate-500 hover:text-slate-700"
                }
              >
                Venta
              </button>
            </div>

            {/* Contenido que cambia según el modo */}
            {mode === "locacao" ? (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  La seguridad en operaciones marítimas es una prioridad, y el
                  alquiler de botes de rescate de ENGSAFETY garantiza eficiencia
                  y confiabilidad para su empresa.
                </p>
                <p>
                  Con flexibilidad de alquiler y plazos ajustados a sus
                  necesidades, nuestro equipo está preparado para ayudar en la
                  elección de la mejor solución para su demanda.
                </p>
                <p>
                  Garantice la protección y seguridad de su tripulación con los
                  botes de rescate de ENGSAFETY.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  Cuando se trata de seguridad en el mar, ENGSAFETY ofrece
                  soluciones de excelencia con la{" "}
                  <strong>venta de botes de rescate</strong> de alta calidad.
                </p>
                <p>
                  Además, ofrecemos consultoría técnica para ayudar a su empresa
                  a elegir el modelo ideal, de acuerdo con sus necesidades
                  operativas.
                </p>
                <p>
                  Invierta en la seguridad de su equipo con los botes de rescate
                  de ENGSAFETY. Contáctenos para conocer nuestros modelos y
                  obtener una solución a medida para sus operaciones.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}