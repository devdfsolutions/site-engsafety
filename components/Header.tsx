// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
};

/* ==============================
   Language route mapping
============================== */
const ROUTE_PAIRS: Record<string, string> = {
  // BR <-> EN
  "/": "/home",
  "/home": "/",

  "/sobre": "/about",
  "/about": "/sobre",

  "/contato": "/contact",
  "/contact": "/contato",

  "/locacao": "/rental",
  "/rental": "/locacao",

  "/solucoes-em-mro": "/mroen",
  "/mroen": "/solucoes-em-mro",

  "/servicos": "/services",
  "/services": "/servicos",

  "/servicos/lsa-salvatagem":
    "/services/salvatagemen",

  "/services/salvatagemen":
    "/servicos/lsa-salvatagem",

  "/servicos/testes-de-carga":
    "/services/load-testing",

  "/services/load-testing":
    "/servicos/testes-de-carga",

  "/servicos/inspecoes-engenharia":
    "/services/engenhariaen",

  "/services/engenhariaen":
    "/servicos/inspecoes-engenharia",

  // PT PORTUGAL
  "/iniciopt": "/",
  "/sobrept": "/sobre",
  "/contatopt": "/contato",
  "/locacaopt": "/locacao",
  "/mropt": "/solucoes-em-mro",
  "/servicospt": "/servicos",

  "/servicos/lsa-salvatagempt":
    "/servicos/lsa-salvatagem",

  "/servicos/testes-de-cargapt":
    "/servicos/testes-de-carga",

  "/servicos/inspecoes-engenhariapt":
    "/servicos/inspecoes-engenharia",

  // ESPANHOL
  "/inicioes": "/",
  "/sobrees": "/sobre",
  "/contatoes": "/contato",
  "/locacaoes": "/locacao",
  "/mroes": "/solucoes-em-mro",
  "/servicoses": "/servicos",

  "/servicos/lsa-salvatagemes":
    "/servicos/lsa-salvatagem",

  "/servicos/testes-de-cargaes":
    "/servicos/testes-de-carga",

  "/servicos/inspecoes-engenhariaes":
    "/servicos/inspecoes-engenharia",
};

function getLanguage(pathname: string) {
  // ENGLISH
  if (
    pathname === "/home" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/rental" ||
    pathname === "/mroen" ||
    pathname === "/services" ||
    pathname.startsWith("/services/")
  ) {
    return "en";
  }

  // PORTUGAL
  if (pathname.includes("pt")) {
    return "pt";
  }

  // ESPANHOL
  if (pathname.includes("es")) {
    return "es";
  }

  // BR
  return "br";
}

/* ==============================
   NAV ITEMS BR
============================== */
const navItemsPT: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      {
        label: "LSA / Salvatagem",
        href: "/servicos/lsa-salvatagem",
      },
      {
        label: "Testes de carga",
        href: "/servicos/testes-de-carga",
      },
      {
        label: "Inspeções",
        href: "/servicos/inspecoes-engenharia",
      },
    ],
  },
  { label: "Locação", href: "/locacao" },
  { label: "Soluções em MRO", href: "/solucoes-em-mro" },
  { label: "Contato", href: "/contato" },
  { label: "Sobre nós", href: "/sobre" },
];

/* ==============================
   NAV ITEMS EN
============================== */
const navItemsEN: NavItem[] = [
  { label: "Home", href: "/home" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "LSA / Lifesaving",
        href: "/services/salvatagemen",
      },
      {
        label: "Load testing",
        href: "/services/load-testing",
      },
      {
        label: "Inspections",
        href: "/services/engenhariaen",
      },
    ],
  },
  { label: "Rental", href: "/rental" },
  { label: "MRO Solutions", href: "/mroen" },
  { label: "Contact", href: "/contact" },
  { label: "About us", href: "/about" },
];

/* ==============================
   NAV ITEMS PORTUGAL
============================== */
const navItemsPortugal: NavItem[] = [
  { label: "Início", href: "/iniciopt" },
  {
    label: "Serviços",
    href: "/servicospt",
    children: [
      {
        label: "LSA / Salvamento",
        href: "/servicos/lsa-salvatagempt",
      },
      {
        label: "Testes de carga",
        href: "/servicos/testes-de-cargapt",
      },
      {
        label: "Inspeções",
        href: "/servicos/inspecoes-engenhariapt",
      },
    ],
  },
  { label: "Locação", href: "/locacaopt" },
  { label: "Soluções em MRO", href: "/mropt" },
  { label: "Contato", href: "/contatopt" },
  { label: "Sobre nós", href: "/sobrept" },
];

/* ==============================
   NAV ITEMS ES
============================== */
const navItemsES: NavItem[] = [
  { label: "Inicio", href: "/inicioes" },
  {
    label: "Servicios",
    href: "/servicoses",
    children: [
      {
        label: "LSA / Salvamento",
        href: "/servicos/lsa-salvatagemes",
      },
      {
        label: "Pruebas de carga",
        href: "/servicos/testes-de-cargaes",
      },
      {
        label: "Inspecciones",
        href: "/servicos/inspecoes-engenhariaes",
      },
    ],
  },
  { label: "Alquiler", href: "/locacaoes" },
  { label: "Soluciones MRO", href: "/mroes" },
  { label: "Contacto", href: "/contatoes" },
  { label: "Sobre nosotros", href: "/sobrees" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] =
    useState(false);

  const servicesTimeout =
    useRef<number | null>(null);

  const language = getLanguage(pathname);

  const isEN = language === "en";
  const isPT = language === "pt";
  const isES = language === "es";
  const isBR = language === "br";

  const navItems = isEN
    ? navItemsEN
    : isPT
    ? navItemsPortugal
    : isES
    ? navItemsES
    : navItemsPT;

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname?.startsWith(href + "/");

  const handleServicesEnter = () => {
    if (servicesTimeout.current) {
      window.clearTimeout(
        servicesTimeout.current
      );

      servicesTimeout.current = null;
    }

    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current =
      window.setTimeout(() => {
        setServicesOpen(false);
      }, 150);
  };

  const whatsappLabel = isEN
    ? "Chat on WhatsApp"
    : isES
    ? "Hablar por WhatsApp"
    : "Falar no WhatsApp";

  const whatsappHref = isEN
    ? "https://api.whatsapp.com/send/?phone=5521986560236&text=Hello%21+I+found+your+company+on+Google+and+I%27d+like+to+learn+more+about+your+services.&type=phone_number&app_absent=0"
    : isES
    ? "https://api.whatsapp.com/send/?phone=5521986560236&text=Hola%21+Encontr%C3%A9+su+empresa+en+Google+y+me+gustar%C3%ADa+conocer+mejor+sus+servicios.&type=phone_number&app_absent=0"
    : "https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0";

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-5">
        {/* LOGO */}
        <Link
          href={
            isEN
              ? "/home"
              : isPT
              ? "/iniciopt"
              : isES
              ? "/inicioes"
              : "/"
          }
          className="flex items-center shrink-0"
        >
          <div className="relative w-56 h-16 md:w-72 md:h-20">
            <Image
              src="/img/eng/logos/logo-eng2inv.png"
              alt="EngSafety"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1c2743]">
          {navItems.map((item) => {
            if (
              item.children &&
              item.children.length > 0
            ) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={
                    handleServicesEnter
                  }
                  onMouseLeave={
                    handleServicesLeave
                  }
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 border-b-2 pb-1 transition-colors ${
                      isActive(item.href)
                        ? "border-sky-500 text-sky-600"
                        : "border-transparent text-[#1c2743] hover:text-sky-600"
                    }`}
                  >
                    {item.label}

                    <span className="text-[10px] leading-none">
                      ▼
                    </span>
                  </Link>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-full mt-1 min-w-[220px] rounded-xl border border-slate-200 bg-white shadow-lg py-2 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    {item.children.map(
                      (child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm leading-tight transition-colors ${
                            isActive(
                              child.href
                            )
                              ? "bg-slate-100 text-sky-700"
                              : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive(item.href)
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-[#1c2743] hover:text-sky-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* FLAGS */}
          <div className="flex items-center gap-3">
            {/* BR */}
            <Link
              href="/"
              className={`transition-all hover:scale-110 ${
                isBR
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              title="Português Brasil"
            >
              <Image
                src="/img/flags/br.png"
                alt="Português Brasil"
                width={24}
                height={24}
                className="rounded-full border border-slate-200 shadow-sm"
              />
            </Link>

            {/* EN */}
            <Link
              href="/home"
              className={`transition-all hover:scale-110 ${
                isEN
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              title="English"
            >
              <Image
                src="/img/flags/eu.png"
                alt="English"
                width={24}
                height={24}
                className="rounded-full border border-slate-200 shadow-sm"
              />
            </Link>

            {/* PT */}
            <Link
              href="/iniciopt"
              className={`transition-all hover:scale-110 ${
                isPT
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              title="Português Portugal"
            >
              <Image
                src="/img/flags/pt.png"
                alt="Português Portugal"
                width={24}
                height={24}
                className="rounded-full border border-slate-200 shadow-sm"
              />
            </Link>

            {/* ES */}
            <Link
              href="/inicioes"
              className={`transition-all hover:scale-110 ${
                isES
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              title="Español"
            >
              <Image
                src="/img/flags/es.png"
                alt="Español"
                width={24}
                height={24}
                className="rounded-full border border-slate-200 shadow-sm"
              />
            </Link>
          </div>

          {/* WHATSAPP */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] shadow-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <span className="sr-only">
              {whatsappLabel}
            </span>

            <div className="relative w-9 h-9">
              <Image
                src="/img/whatsapp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-slate-300 text-slate-700"
          onClick={() =>
            setOpen((v) => !v)
          }
        >
          <span className="sr-only">
            {isEN
              ? "Open menu"
              : "Abrir menu"}
          </span>

          <div className="space-y-1">
            <span className="block w-5 h-[2px] bg-slate-800" />
            <span className="block w-5 h-[2px] bg-slate-800" />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {/* FLAGS MOBILE */}
            <div className="flex items-center justify-center gap-4 mb-3">
              {/* BR */}
              <Link
                href="/"
                onClick={() =>
                  setOpen(false)
                }
              >
                <Image
                  src="/img/flags/br.png"
                  alt="BR"
                  width={26}
                  height={26}
                  className="rounded-full border border-slate-200 shadow-sm"
                />
              </Link>

              {/* EN */}
              <Link
                href="/home"
                onClick={() =>
                  setOpen(false)
                }
              >
                <Image
                  src="/img/flags/eu.png"
                  alt="EN"
                  width={26}
                  height={26}
                  className="rounded-full border border-slate-200 shadow-sm"
                />
              </Link>

              {/* PT */}
              <Link
                href="/iniciopt"
                onClick={() =>
                  setOpen(false)
                }
              >
                <Image
                  src="/img/flags/pt.png"
                  alt="PT"
                  width={26}
                  height={26}
                  className="rounded-full border border-slate-200 shadow-sm"
                />
              </Link>

              {/* ES */}
              <Link
                href="/inicioes"
                onClick={() =>
                  setOpen(false)
                }
              >
                <Image
                  src="/img/flags/es.png"
                  alt="ES"
                  width={26}
                  height={26}
                  className="rounded-full border border-slate-200 shadow-sm"
                />
              </Link>
            </div>

            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1"
              >
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-sky-600"
                      : "text-[#1c2743] hover:text-sky-600"
                  }`}
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-3 flex flex-col gap-1">
                    {item.children.map(
                      (child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`text-xs transition-colors ${
                            isActive(
                              child.href
                            )
                              ? "text-sky-600"
                              : "text-slate-600 hover:text-sky-600"
                          }`}
                          onClick={() =>
                            setOpen(false)
                          }
                        >
                          • {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 flex gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#25D366] text-white text-center font-semibold"
                onClick={() =>
                  setOpen(false)
                }
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
