import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import home2 from "@/assets/home-structure-v5.webp";
import home1 from "@/assets/wawa_silla_optimized.webp";
import heroVideo from "@/assets/hero-bg-new.mp4";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Componente para la animación de palabras clave al hacer scroll
const AnimatedKeyWords = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      className="container max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-32 md:pb-16 flex flex-col justify-center"
      aria-label="Tiempo, Claridad y Enfoque"
    >
      {/* TIEMPO */}
      <div ref={ref} className="w-full flex justify-start md:justify-center md:-ml-[25%] overflow-hidden z-10 relative">
        <span
          aria-hidden="true"
          className={`text-[5rem] sm:text-7xl md:text-8xl lg:text-9xl leading-none font-display font-medium uppercase tracking-tight transition-all transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          style={{
            transitionDuration: '3000ms',
            transitionDelay: '0ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          Tiempo
        </span>
      </div>

      {/* CLARIDAD */}
      <div className="w-full flex justify-center overflow-hidden z-20 relative pt-2 md:pt-4">
        <span
          aria-hidden="true"
          className={`text-[5rem] sm:text-7xl md:text-8xl lg:text-9xl leading-none font-display font-medium uppercase tracking-tight transition-all transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          style={{
            transitionDuration: '3000ms',
            transitionDelay: '1000ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          Claridad
        </span>
      </div>

      {/* ENFOQUE */}
      <div className="w-full flex justify-end md:justify-center md:ml-[25%] overflow-hidden z-30 relative pt-2 md:pt-4">
        <span
          aria-hidden="true"
          className={`text-[5rem] sm:text-7xl md:text-8xl lg:text-9xl leading-none font-display font-medium uppercase tracking-tight transition-all transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          style={{
            transitionDuration: '3000ms',
            transitionDelay: '2000ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          Enfoque
        </span>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black/10">
      <SEO
        title="Wawa | Estudio de Automatización, IA y Gestión Operativa"
        description="Recupera tiempo, claridad y enfoque con automatizaciones e inteligencia artificial. Wawa es un estudio de diseño operativo para autónomos y pymes."
        canonical="https://somoswawa.com/"
      />

      <Header />

      {/* Main SEO Heading integrated in UI */}
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-30 container h-full flex flex-col justify-between pt-[140px] pb-[100px] md:pt-[180px] md:pb-[140px] px-6 md:px-12 text-white">
          {/* Main Hero Content */}
          <div className="w-full flex flex-col justify-start space-y-6 md:space-y-8 animate-fade-up">
            <h1 className="text-sm md:text-base tracking-[0.25em] opacity-80 font-sans font-medium uppercase text-white mb-2">
              Estudio de Automatizaciones, IA & Gestión Operativa
            </h1>
            <h2 className="text-[52px] sm:text-[60px] md:text-[70px] lg:text-[76px] xl:text-[84px] font-display font-medium tracking-tight leading-[0.85] text-white uppercase max-w-3xl -ml-1">
              Escala tu<br className="hidden md:block" /> negocio sin<br className="hidden md:block" /> aumentar la<br className="hidden md:block" /> complejidad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 w-full">
            <div className="hidden md:block md:col-span-8"></div>
            {/* Bottom/Footer content of Hero */}
            <div className="md:col-span-4 flex flex-col justify-end space-y-4 animate-fade-up animation-delay-200 lg:pl-10">
              <div className="w-6 md:w-8 h-[1px] bg-white mb-1" />
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-sans font-medium text-white">
                Somos Wawa
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed font-sans font-light text-white">
                En Wawa diseñamos e implementamos sistemas de automatización e IA que absorben el crecimiento de tu negocio: ventas, operaciones y soporte, para que puedas escalar sin depender de tareas manuales ni añadir fricción operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)] bg-subtle">
        <div className="container px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="w-full text-left">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-12 text-balance">
                Escalar sin sistema multiplica complejidad
              </h2>
              <div className="space-y-6 md:space-y-8 text-foreground/80 max-w-5xl flex flex-col items-start px-4 md:px-0">
                <p className="text-base leading-relaxed font-sans font-light tracking-wide text-left w-full">El crecimiento no solo implica vender más. Implica que cada nuevo cliente, proceso o herramienta encaje dentro de una estructura diseñada para soportarlo.</p>
                <p className="text-base leading-relaxed font-sans font-light tracking-wide text-left pt-2 w-full">Cuando el volumen aumenta sin arquitectura, la operación se vuelve más pesada, más manual y menos predecible.</p>
                <p className="text-base leading-relaxed font-sans font-light tracking-wide text-left pb-4 w-full">El objetivo no es evitar el caos. Es diseñar un sistema que permita crecer sin generarlo.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
              <ul className="space-y-8 text-base leading-relaxed font-sans font-light text-foreground/80 list-none p-0">
                <li className="flex items-start gap-4">
                  <span className="text-base font-bold mt-1.5 opacity-40 uppercase tracking-widest">01</span>
                  <span className="leading-relaxed"><strong className="font-semibold text-foreground text-base">Gestión de leads estructurada:</strong> <span className="text-sm md:text-base font-light text-foreground/80">Cada oportunidad sigue un flujo definido, sin pérdidas ni cuellos de botella manuales.</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-base font-bold mt-1.5 opacity-40 uppercase tracking-widest">02</span>
                  <span className="leading-relaxed"><strong className="font-semibold text-foreground text-base">Procesos preparados para escalar:</strong> <span className="text-sm md:text-base font-light text-foreground/80">Las tareas operativas no crecen al mismo ritmo que las ventas.</span></span>
                </li>
              </ul>
              <ul className="space-y-8 text-base leading-relaxed font-sans font-light text-foreground/80 list-none p-0">
                <li className="flex items-start gap-4">
                  <span className="text-base font-bold mt-1.5 opacity-40 uppercase tracking-widest">03</span>
                  <span className="leading-relaxed"><strong className="font-semibold text-foreground text-base">Facturación y onboarding integrados:</strong> <span className="text-sm md:text-base font-light text-foreground/80">La entrada de nuevos clientes activa automáticamente la operación.</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-base font-bold mt-1.5 opacity-40 uppercase tracking-widest">04</span>
                  <span className="leading-relaxed"><strong className="font-semibold text-foreground text-base">Información unificada:</strong> <span className="text-sm md:text-base font-light text-foreground/80">Los datos fluyen entre áreas sin fricción ni duplicidades.</span></span>
                </li>
              </ul>
            </div>

            <div className="mt-16 text-lg md:text-xl font-sans font-medium leading-relaxed text-foreground/90 text-left py-2 border-l-2 border-foreground/30 pl-6">
              <p>Escalar con estructura no es añadir más esfuerzo. Es diseñar mejor el sistema.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transición: Tiempo, Claridad y Enfoque */}
      <section className="w-full bg-background overflow-hidden relative z-10">
        <AnimatedKeyWords />
      </section>

      {/* Solución */}
      <section className="w-full pt-16 md:pt-24 pb-[var(--space-section-mobile)] md:pb-[var(--space-section-desktop)]">
        <div className="grid md:grid-cols-2 w-full items-center">
          <div className="flex flex-col justify-center p-6 md:p-24 lg:p-32 order-2 md:order-1">
            <div className="max-w-xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground text-balance">
                Rediseñamos la arquitectura de tu crecimiento
              </h2>

              <ul className="space-y-6 text-base leading-relaxed font-sans text-foreground/80 border-l px-6 border-black/10 text-balance list-none py-2 pb-8">
                <li className="space-y-1">
                  <strong className="text-foreground font-medium block">Automatizamos el ciclo comercial y operativo.</strong>
                  <span className="text-base leading-relaxed font-light opacity-80 block pt-1">Integramos cada paso del cliente, desde la captación y atención al lead hasta el cierre.</span>
                </li>
                <li className="space-y-1 mt-6">
                  <strong className="text-foreground font-medium block">Implementamos sistemas autónomos.</strong>
                  <span className="text-base leading-relaxed font-light opacity-80 block pt-1">La tecnología ejecuta el volumen; tú supervisas la estrategia.</span>
                </li>
              </ul>

              <p className="text-base leading-relaxed font-sans font-light tracking-wide text-foreground/90 text-balance mt-4">
                <strong className="font-medium">Resultado:</strong> un negocio digital preparado para aumentar volumen sin que la complejidad interna crezca al mismo ritmo.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center min-h-[50vh] p-8 md:p-12 bg-subtle/30">
            <div className="w-full max-w-sm aspect-[3/4] relative overflow-hidden shadow-sm group">
              <img
                src={home2}
                alt="Sistemas de Arquitectura Operativa y Automatización"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Capa matizada: suave (40%) para no apagar, con tono beige oscuro (#9E917F) para mantener contraste */}
              <div className="absolute inset-0 bg-[#9E917F] mix-blend-multiply opacity-40 pointer-events-none transition-opacity duration-1000 group-hover:opacity-20" />
              <div className="absolute inset-0 bg-[#FFF5E6]/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-black text-white">
        <div className="grid md:grid-cols-2 md:min-h-screen">
          <div className="hidden md:flex sticky top-0 h-screen bg-black">
            <div className="w-full h-full overflow-hidden relative">
              <img
                src={home1}
                alt="Consultoría de IA y automatización en Wawa"
                className="w-full h-full object-cover grayscale brightness-75"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="block md:hidden w-full aspect-[4/5] overflow-hidden relative">
            <img
              src={home1}
              alt="Consultoría de IA y automatización en Wawa"
              className="w-full h-full object-cover grayscale brightness-75"
              style={{ objectPosition: 'center 75%' }}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start md:min-h-screen p-6 pt-12 pb-24 md:px-12 md:py-16 lg:px-16 lg:py-20 bg-black text-white relative">
            <div className="w-full max-w-xl flex flex-col h-full mx-auto md:mx-0">
              <div className="mb-12 md:mb-16">
                <h2 className="text-lg uppercase tracking-[0.2em] font-sans font-light text-white mb-4">Servicios</h2>
                <div className="w-full h-[1px] bg-white/40" />
              </div>

              <Accordion type="single" collapsible className="w-full flex flex-col space-y-8 md:space-y-10">
                {[
                  {
                    id: "automatizacion",
                    title: "AUTOMATIZACIÓN DE PROCESOS",
                    desc: "Automatizamos las tareas repetitivas de tu negocio para que ahorres tiempo, dinero y recursos. Creamos flujos eficientes adaptados a tus necesidades para que puedas dedicarte a escalar y hacer crecer tu proyecto.",
                  },
                  {
                    id: "ia",
                    title: "IA Y CHATBOTS",
                    desc: "Desplegamos agentes de inteligencia artificial y automatismos que se integran en tu web y canales de comunicación. Un sistema que filtra, cualifica y atiende 24/7, permitiéndote escalar tu capacidad de soporte y ventas sin fricción.",
                  },
                  {
                    id: "diseno",
                    title: "DISEÑO WEB Y DESARROLLO VIBE CODING",
                    desc: (
                      <>
                        Diseñamos experiencias digitales con estrategia que transmiten quién eres, qué haces y por qué eres la opción correcta.
                        <br /><br />
                        El diseño lo hacemos 100% personalizado: escuchamos, entendemos tu proyecto y creamos algo único que refleja quién eres.
                        <br /><br />
                        El desarrollo lo aceleramos con vibe coding que construye el código mientras nosotros nos enfocamos en lo importante: la estrategia, el diseño y que tu web cumpla tu objetivo.
                      </>
                    ),
                  },
                  {
                    id: "apoyo",
                    title: "GESTIÓN OPERATIVA",
                    desc: (
                      <>
                        Nos encargamos de la gestión operativa de tu negocio: desde los procesos del día a día hasta lanzamientos, eventos o picos de trabajo.
                        <br /><br />
                        Entendemos tu negocio a fondo y actuamos como parte de tu equipo.
                      </>
                    ),
                  }
                ].map((service) => (
                  <AccordionItem key={service.id} value={service.id} className="border-none">
                    <AccordionTrigger className="text-left py-0 hover:no-underline hover:opacity-100 group transition-all">
                      <div className="flex items-start justify-between w-full">
                        <span className="text-4xl md:text-5xl font-sans font-semibold text-white/90 uppercase tracking-normal leading-[1.1] group-hover:font-bold group-hover:text-white transition-all duration-300 pr-4">
                          {service.title}
                        </span>
                        <div className="flex shrink-0 mt-1">
                          <Plus className="w-8 h-8 md:w-12 md:h-12 text-white transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={2.5} />
                          <Minus className="w-8 h-8 md:w-12 md:h-12 text-white transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={2.5} />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 text-base leading-relaxed font-sans font-extralight tracking-wide text-balance pt-6 pb-2 max-w-3xl">
                      <div className="mb-8 font-extralight text-white/80 [&_*]:font-extralight" style={{ fontWeight: 200, WebkitFontSmoothing: "auto" }}>{service.desc}</div>
                      <Link
                        to="/servicios"
                        className="inline-flex items-center text-xs md:text-sm uppercase tracking-[0.15em] font-normal text-white/90 border-b border-white/40 pb-0.5 hover:border-white hover:text-white transition-all mt-4"
                        style={{ fontWeight: 400, letterSpacing: '0.15em', WebkitFontSmoothing: "auto" }}
                      >
                        Descubrir más
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
