// app/contatoes/page.tsx
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | ENGSAFETY",
};

export default function ContatoPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%2C+me+gustar%C3%ADa+hablar+con+el+equipo+comercial.&type=phone_number&app_absent=0";

  const mapsUrl =
    "https://www.google.com/maps?q=Rua+Uçá,+363,+Jardim+Guanabara,+Rio+de+Janeiro,+RJ,+21940-480&output=embed";

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          BLOQUE PRINCIPAL – TEXTO + FORMULARIO
      ====================================================== */}
      <section className="bg-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* TEXTO A LA IZQUIERDA */}
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluciones e Ingeniería
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
              Hable con un especialista.
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
              Complete el formulario al lado o hable directamente a través de
              nuestros canales de atención. Nuestro equipo comercial está listo
              para entender su demanda e indicar la mejor solución en pruebas de
              carga, alquileres, LSA y MRO.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-[#1c2743]">E-mail:</span>{" "}
                <Link
                  href="/contatoes"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  comercial@engsafety.ind.br
                </Link>
              </p>

              <p>
                <span className="font-semibold text-[#1c2743]">Teléfono:</span>{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  (21) 98656-0236
                </a>{" "}
                | (21) 99530-3032 | (21) 3491-5335
              </p>

              <p>
                <span className="font-semibold text-[#1c2743]">Dirección:</span>{" "}
                Rua Uçá, 363 – Jardim Guanabara, Río de Janeiro – RJ
              </p>
            </div>
          </div>

          {/* FORMULARIO CLARO EN EL ESTÁNDAR DEL SITIO */}
          <ContactForm />
        </div>
      </section>

      {/* =====================================================
          MAPA + DIRECCIÓN
      ====================================================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Dónde estamos
            </h2>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Rua Uçá, 363 – Jardim Guanabara – CEP 21940-480 – Río de Janeiro –
              RJ.
            </p>
          </div>

          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOQUE FINAL – INFORMACIÓN DE CONTACTO (CLICABLE)
      ====================================================== */}
      <section className="bg-slate-50 py-14 md:py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              ENGSAFETY Soluciones e Ingeniería
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Información de Contacto
            </h2>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Haga clic en uno de los canales a continuación para hablar
              directamente con nuestro equipo comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-sm text-slate-700">
            {/* Email -> va a /contatoes */}
            <Link
              href="/contatoes"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  ✉
                </span>
              </div>

              <h3 className="font-semibold text-[#1c2743]">Email Comercial</h3>

              <p className="text-sky-600 font-medium">
                comercial@engsafety.ind.br
              </p>

              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Haga clic para abrir el formulario
              </p>
            </Link>

            {/* Teléfonos -> WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  ☎
                </span>
              </div>

              <h3 className="font-semibold text-[#1c2743]">Teléfono</h3>

              <p>(21) 98656-0236 (24 horas)</p>
              <p>(21) 99530-3032</p>
              <p>(21) 3491-5335</p>

              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Haga clic para hablar por WhatsApp
              </p>
            </a>

            {/* Dirección -> Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Uçá,+363,+Jardim+Guanabara,+Rio+de+Janeiro,+RJ"
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  📍
                </span>
              </div>

              <h3 className="font-semibold text-[#1c2743]">Base ENGSAFETY</h3>

              <p>Rua Uçá, 363</p>
              <p>Jardim Guanabara</p>
              <p>Río de Janeiro – RJ</p>

              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Haga clic para abrir en el mapa
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}