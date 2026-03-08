import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sobreWawaImage from "@/assets/sobre-wawa-calm.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const SobreWawa = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre Wawa | Estudio de Automatización e IA"
        description="Conoce Wawa, un estudio nacido de la pausa. Armonía, claridad y acompañamiento operativo para negocios que buscan crecer con calma."
        canonical="https://somoswawa.com/sobre-wawa"
      />
      <Header />

      {/* Hero Image Banner */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="w-full max-w-[94%] mx-auto border-b border-border/40 pb-12 md:pb-20">
          <div className="w-full overflow-hidden rounded-2xl animate-fade-up opacity-0 aspect-[16/9] md:aspect-[21/9] relative group" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <img
              src={sobreWawaImage}
              alt="Arquitectura de Sistemas WAWA"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Capa de tono gris cálido más neutral para evitar saturación amarilla */}
            <div className="absolute inset-0 z-10 bg-[#A6A29C] mix-blend-multiply opacity-50 pointer-events-none transition-opacity duration-1000 group-hover:opacity-30" />
            <div className="absolute inset-0 z-20 bg-[#D4D2CD]/20 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Por qué nace Wawa */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-5">
              <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight animate-fade-up">
                Por qué nace Wawa
              </h1>
            </div>
            <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground  animate-fade-up animation-delay-200 text-balance">
              <p>
                WAWA nace de una observación clara:<br />Muchos negocios digitales crecen más rápido de lo que su estructura puede sostener. Aumentan ventas, equipo y herramientas, pero sin un sistema diseñado para absorber ese crecimiento. El resultado no es expansión. Es complejidad.
              </p>
              <p>
                Creemos que el crecimiento sostenible no depende de trabajar más, sino de diseñar mejor. Por eso WAWA no es una agencia de automatización. Es un estudio de arquitectura de crecimiento. Diseñamos los sistemas que permiten escalar sin multiplicar fricción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El significado de Wa */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-5">
              <h2 className="text-5xl md:text-8xl font-display font-medium animate-fade-up opacity-0 tracking-tight" style={{ animationFillMode: 'forwards' }}>
                Significado de Wa
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground ">
              <p>
                En la cultura japonesa, wa es un concepto fundamental que se traduce comúnmente como armonía. Sin embargo, su significado va más allá.
              </p>
              <p>
                Wa representa la búsqueda del equilibrio en las relaciones humanas, en la convivencia social y en la forma de actuar. Se basa en la idea de evitar el conflicto, priorizar la cooperación, el respeto mutuo y la cohesión del grupo por encima del interés individual.
              </p>
              <p>
                En la tradición japonesa, wa también implica orden, calma y coherencia: hacer las cosas de manera que encajen naturalmente, sin imponer, sin forzar, sin generar fricción innecesaria. Está presente tanto en la organización social como en la manera de trabajar, comunicarse y tomar decisiones.
              </p>
              <p>
                Más que un estado fijo, wa es una práctica constante. Requiere observación, atención al contexto y sensibilidad hacia los demás. Mantener wa significa actuar con conciencia del impacto que las propias acciones tienen en el entorno.
              </p>
              <p>
                Por ello, wa no es solo un valor cultural, sino un principio que guía comportamientos: escuchar antes de actuar, buscar soluciones equilibradas y preservar la armonía incluso en situaciones complejas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra forma de trabajar */}
      <section className="py-24 md:py-32 bg-subtle">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-sans mb-8 md:mb-0 animate-fade-up opacity-0 text-balance" style={{ animationFillMode: 'forwards' }}>
                Nuestra forma de trabajar juntos
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7 space-y-12">
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground  mb-16">
                <p>
                  Wawa no es una agencia con procesos rígidos. Es un estudio que se adapta a ti.
                </p>
                <p>
                  Te escuchamos para entender tu negocio a fondo. No solo queremos saber lo que necesitas, si no por qué lo necesitas.
                </p>
                <p>
                  Diseñamos soluciones adaptadas a tus necesidades reales y te acompañamos en cada paso, porque para nosotros cada proyecto es único.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-sans font-normal mb-12 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
                NUESTRO PROCESO
              </h3>

              <Accordion type="single" collapsible className="w-full space-y-0 border-t border-black">
                {/* 01. ESCUCHA */}
                <AccordionItem value="escucha" className="border-b border-black py-4">
                  <AccordionTrigger className="hover:no-underline py-4 group">
                    <div className="flex items-center justify-between w-full text-left">
                      <h4 className="text-base md:text-lg leading-relaxed font-sans font-medium uppercase tracking-wide">01. ESCUCHA</h4>
                      <div className="flex shrink-0 ml-4">
                        <Plus className="w-6 h-6 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1.5} />
                        <Minus className="w-6 h-6 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1.5} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground ">
                      <p>
                        El primer paso es entenderte.
                      </p>
                      <p>
                        En una llamada inicial (sin compromiso) conocemos tu proyecto, tus procesos actuales y tus necesidades reales.
                      </p>
                      <p>
                        No vendemos soluciones genéricas. Necesitamos saber qué te quita tiempo, qué te estresa y qué quieres conseguir.
                      </p>
                      <p>
                        Esta conversación nos da una imagen clara de cómo podemos ayudarte.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 02. ESTRATEGIA */}
                <AccordionItem value="estrategia" className="border-b border-black py-4">
                  <AccordionTrigger className="hover:no-underline py-4 group">
                    <div className="flex items-center justify-between w-full text-left">
                      <h4 className="text-base md:text-lg leading-relaxed font-sans font-medium uppercase tracking-wide">02. ESTRATEGIA</h4>
                      <div className="flex shrink-0 ml-4">
                        <Plus className="w-6 h-6 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1.5} />
                        <Minus className="w-6 h-6 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1.5} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground ">
                      <p>
                        Con toda la información, diseñamos una propuesta personalizada con objetivos claros que incluye:
                      </p>
                      <p>
                        → Qué vamos a hacer exactamente<br />
                        → Qué herramientas utilizaremos<br />
                        → Cuánto tiempo llevará<br />
                        → La inversión necesaria
                      </p>
                      <p>
                        Todo explicado con claridad. Sin letra pequeña. Sin sorpresas.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 03. IMPLEMENTACIÓN */}
                <AccordionItem value="implementacion" className="border-b border-black py-4">
                  <AccordionTrigger className="hover:no-underline py-4 group">
                    <div className="flex items-center justify-between w-full text-left">
                      <h4 className="text-base md:text-lg leading-relaxed font-sans font-medium uppercase tracking-wide">03. IMPLEMENTACIÓN</h4>
                      <div className="flex shrink-0 ml-4">
                        <Plus className="w-6 h-6 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1.5} />
                        <Minus className="w-6 h-6 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1.5} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground ">
                      <p>
                        Una vez aprobada la propuesta, nos ponemos a trabajar.
                      </p>
                      <p>
                        Te pediremos acceso a las plataformas necesarias y comenzamos la implementación.
                      </p>
                      <p>
                        Durante el proceso te mantenemos informado. Y cuando esté listo, te enseñamos cómo funciona todo antes de ponerlo en marcha.
                      </p>
                      <p>
                        Hacemos pruebas finales juntos para asegurarnos de que todo funciona como debe.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 04. ACOMPAÑAMIENTO */}
                <AccordionItem value="acompanamiento" className="border-b border-black py-4">
                  <AccordionTrigger className="hover:no-underline py-4 group">
                    <div className="flex items-center justify-between w-full text-left">
                      <h4 className="text-base md:text-lg leading-relaxed font-sans font-medium uppercase tracking-wide">04. ACOMPAÑAMIENTO</h4>
                      <div className="flex shrink-0 ml-4">
                        <Plus className="w-6 h-6 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1.5} />
                        <Minus className="w-6 h-6 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1.5} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground ">
                      <p>
                        No desaparecemos después de entregar.
                      </p>
                      <p>
                        Estamos disponibles para resolver dudas, hacer ajustes o seguir optimizando lo que hemos creado.
                      </p>
                      <p>
                        Ofrecemos planes de continuidad para mantenimiento y nuevos desarrollos.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section >

      {/* En qué creemos */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-sans mb-8 md:mb-0 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
                En qué creemos
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7 space-y-8 pt-1 md:pt-2">
              <div>
                <h3 className="text-xl md:text-2xl font-sans mb-4">SINCRONIZACIÓN</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Equilibrio entre tecnología y humanidad. Que tus herramientas hablen el mismo idioma para que tu operativa fluya sin fricción.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-sans mb-4">ARQUITECTURA DE DATOS</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Información accesible, no dispersa. Estructuramos tus datos para que tomes decisiones basadas en hechos, no en intuiciones.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-sans mb-4">ACOMPAÑAMIENTO</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  No trabajamos desde fuera. Nos integramos en tu estructura para comprender cómo funciona y qué necesita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Somos Wawa */}
      < section className="pt-6 md:pt-8 pb-24 md:pb-32 text-center" >
        <div className="container">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-logo font-normal tracking-tight animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            somos wawa<sup className="text-2xl md:text-3xl align-super font-semibold">®</sup>
          </h2>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default SobreWawa;
