import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import serviciosImage from "@/assets/servicios-laptop-final.webp";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Servicios de Automatización e IA | Wawa"
        description="Automatización de procesos, chatbots con IA y diseño web estratégico. Soluciones operativas para escalar tu negocio sin perder el control."
        canonical="https://somoswawa.com/servicios"
      />
      <Header />

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Servicios de Automatización e Inteligencia Artificial</h1>

      {/* Hero Image Banner */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-8">
        <div className="w-full max-w-[94%] mx-auto">
          <div className="w-full overflow-hidden rounded-2xl animate-fade-up opacity-0 aspect-[16/9] md:aspect-[21/9] relative group" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <img
              src={serviciosImage}
              alt="Servicios de Automatización de procesos e IA corporativa en Wawa"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
            />
            {/* Capa de tono cálido muy sutil (25%) para dar unidad sin volver amarilla la mesa blanca */}
            <div className="absolute inset-0 bg-[#E8DCC4] mix-blend-multiply opacity-25 pointer-events-none transition-opacity duration-1000 group-hover:opacity-15" />
            <div className="absolute inset-0 bg-[#FFF5E6]/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </section>      {/* Services Accordion */}
      <section className="pb-[var(--space-section-mobile)] md:pb-[var(--space-section-desktop)] pt-2 md:pt-8">
        <div className="w-full max-w-[94%] mx-auto">
          <Accordion type="single" collapsible className="space-y-0 w-full px-4 md:px-0">

            {/* Service 1: AUTOMATIZACIÓN */}
            <AccordionItem value="automatizaciones" className="border-b border-black py-12">
              <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                <div className="flex items-start md:items-center justify-between w-full text-left">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <span className="text-3xl md:text-6xl font-sans font-bold text-black uppercase tracking-tight transition-colors">01.</span>
                      <h2 className="text-3xl md:text-6xl font-sans font-bold uppercase tracking-tight text-black transition-colors">
                        AUTOMATIZACIÓN
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed font-sans font-light text-black  max-w-2xl mt-2">
                      Donde la tecnología trabaja por ti<br />
                      Liberamos horas cada semana para que te enfoques en lo importante
                    </p>
                  </div>
                  <div className="flex shrink-0 ml-4">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={2} />
                    <Minus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={2} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      Automatizamos las tareas repetitivas de tu negocio, ahorrando tiempo, dinero y recursos. Usamos herramientas como n8n para crear flujos de trabajo eficientes y personalizados, adaptados a tus necesidades.
                    </p>
                    <div>
                      <p className="text-base uppercase tracking-widest mb-3 font-semibold text-black">¿QUÉ CAMBIA EN TU DÍA A DÍA?</p>
                      <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                        <li>• Dejas de perder tiempo en tareas que una máquina puede hacer por ti.</li>
                        <li>• Reduces errores humanos.</li>
                        <li>• Recuperas horas cada semana para lo que realmente aporta valor.</li>
                        <li>• Trabajas menos horas sin perder resultados (o trabajas las mismas y creces más).</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-base uppercase tracking-widest mb-3 font-semibold text-black">¿QUÉ AUTOMATIZAR?</p>
                      <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                        <li>• Integración y sincronización entre herramientas (CRM, email, calendarios).</li>
                        <li>• Procesos administrativos repetitivos.</li>
                        <li>• Generación automática de reportes.</li>
                        <li>• Secuencias de email automatizadas (onboarding, follow-ups internos).</li>
                        <li>• Gestión interna de datos y actualización automática de información.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Service 2: IA Y CHATBOTS */}
            <AccordionItem value="ia-chatbots" className="border-b border-black py-12">
              <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                <div className="flex items-start md:items-center justify-between w-full text-left">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <span className="text-3xl md:text-6xl font-sans font-bold text-black uppercase tracking-tight transition-colors">02.</span>
                      <h2 className="text-3xl md:text-6xl font-sans font-bold uppercase tracking-tight text-black transition-colors">
                        IA Y CHATBOTS
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed font-sans font-light text-black  max-w-2xl mt-2">
                      Atención inteligente que nunca duerme<br />
                      Chatbots con IA que conversan, resuelven y liberan tu tiempo
                    </p>
                  </div>
                  <div className="flex shrink-0 ml-4">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={2} />
                    <Minus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={2} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      Creamos chatbots con inteligencia artificial que se integran en tu web, tu app o tus plataformas de mensajería como el correo electrónico o Whatsapp. No son bots rígidos con respuestas prefijadas. Son conversaciones naturales, automatizadas e inteligentes que atienden a tus clientes 24/7. Responden consultas. Ofrecen información. Realizan acciones. Generan contenido. Todo sin que tú tengas que estar disponible.
                    </p>
                    <div>
                      <p className="text-base uppercase tracking-widest mb-3 font-semibold text-black">¿QUÉ CAMBIA CUANDO TIENES UN BOT INTELIGENTE?</p>
                      <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                        <li>• Tus clientes tienen respuestas inmediatas, a cualquier hora mejorando la experiencia de usuario y la accesibilidad de tu servicio sin aumentar tu carga de trabajo.</li>
                        <li>• Reduces drásticamente el tiempo que dedicas a consultas repetitivas.</li>
                        <li>• Tu negocio está disponible 24/7 sin que tú tengas que estarlo.</li>
                        <li>• Te diferencias de la competencia.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-base uppercase tracking-widest mb-3 font-semibold text-black">¿QUÉ PUEDEN HACER?</p>
                      <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                        <li>• Responder preguntas frecuentes de forma natural y contextual.</li>
                        <li>• Captar y calificar leads automáticamente.</li>
                        <li>• Hacer seguimiento inteligente de esos leads.</li>
                        <li>• Agendar citas mediante conversación.</li>
                        <li>• Ofrecer recomendaciones personalizadas.</li>
                        <li>• Gestionar consultas de soporte técnico básico.</li>
                        <li>• Enviar información sobre productos o servicios en el momento adecuado.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Service 3: DISEÑO WEB Y DESARROLLO VIBE CODING */}
            <AccordionItem value="web" className="border-b border-black py-12">
              <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                <div className="flex items-start md:items-center justify-between w-full text-left">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <span className="text-3xl md:text-6xl font-sans font-bold text-black uppercase tracking-tight transition-colors">03.</span>
                      <h2 className="text-3xl md:text-6xl font-sans font-bold uppercase tracking-tight text-black transition-colors">
                        DISEÑO WEB Y DESARROLLO VIBE CODING
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed font-sans font-light text-black  max-w-2xl mt-2">
                      Webs funcionales creadas con IA<br />
                      Diseño personalizado con desarrollo inteligente
                    </p>
                  </div>
                  <div className="flex shrink-0 ml-4">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={2} />
                    <Minus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={2} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      Diseñamos experiencias digitales con estrategia que transmitan quién eres, qué haces y por qué eres la opción correcta.
                    </p>
                    <p className="text-base leading-relaxed font-sans font-light  text-black">
                      Una web con intención. Que conecte desde el primer clic. Que trabaje por ti, incluso cuando tú no estás. Creamos tu web usando vibe coding: desarrollo conversacional con IA que acelera el proceso sin sacrificar personalización ni calidad. Tú nos cuentas tu proyecto, nosotros lo convertimos en una presencia digital que funciona, comunica y vende.
                    </p>

                    <div>
                      <p className="text-base uppercase tracking-widest mb-4 font-semibold text-black">Nuestro proceso:</p>
                      <Accordion type="single" collapsible className="w-full space-y-0 border-t border-black">
                        <AccordionItem value="estrategia-web" className="border-b border-black py-4">
                          <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                            <div className="flex items-center justify-between w-full text-left">
                              <h4 className="text-base leading-relaxed font-sans font-medium">01. Estrategia web</h4>
                              <div className="flex shrink-0 ml-4">
                                <Plus className="w-5 h-5 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1} />
                                <Minus className="w-5 h-5 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-6">
                            <p className="text-base leading-relaxed font-sans font-light text-black  bg-muted/30 p-3 border-l-2 border-primary">
                              Antes de hacer ningún diseño, necesitamos entender tu proyecto. ¿Para qué necesitas la web? ¿Qué quieres que haga por ti? ¿Qué necesita tu cliente para quedarse? Analizamos tu contenido, definimos objetivos claros y diseñamos la arquitectura de información que mejor se adapte. Si lo necesitas, creamos el mapa web (estructura de secciones) y wireframes (esquemas visuales de cada página que muestran el funcionamiento interno). Todo pensado para que tengas claridad desde el principio.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="diseno" className="border-b border-black py-4">
                          <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                            <div className="flex items-center justify-between w-full text-left">
                              <h4 className="text-base leading-relaxed font-sans font-medium">02. Diseño</h4>
                              <div className="flex shrink-0 ml-4">
                                <Plus className="w-5 h-5 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1} />
                                <Minus className="w-5 h-5 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-6">
                            <p className="text-base leading-relaxed font-sans font-light text-black  bg-muted/30 p-3 border-l-2 border-primary">
                              Con la estrategia definida, diseñamos tu web. Creamos un prototipo 100% adaptado a tu contenido, con una propuesta estética alineada con tu identidad visual. Diseño limpio, funcional, que comunica.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="desarrollo" className="border-b border-black py-4">
                          <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                            <div className="flex items-center justify-between w-full text-left">
                              <h4 className="text-base leading-relaxed font-sans font-medium">03. Desarrollo vibe coding</h4>
                              <div className="flex shrink-0 ml-4">
                                <Plus className="w-5 h-5 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1} />
                                <Minus className="w-5 h-5 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-6">
                            <p className="text-base leading-relaxed font-sans font-light text-black  bg-muted/30 p-3 border-l-2 border-primary">
                              Con el diseño aprobado, pasamos a la parte técnica. Aquí entra el vibe coding: usamos IA para acelerar el desarrollo sin perder personalización. Integramos todo lo que tu web necesite: formularios, enlaces a redes sociales, automatizaciones, conexiones con tus herramientas.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="entrega" className="border-b border-black py-4">
                          <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                            <div className="flex items-center justify-between w-full text-left">
                              <h4 className="text-base leading-relaxed font-sans font-medium">04. Entrega</h4>
                              <div className="flex shrink-0 ml-4">
                                <Plus className="w-5 h-5 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1} />
                                <Minus className="w-5 h-5 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-6">
                            <p className="text-base leading-relaxed font-sans font-light text-black ">
                              Una vez lista, tu web pasa a entorno real.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="que-incluye" className="border-b border-black py-4">
                          <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                            <div className="flex items-center justify-between w-full text-left">
                              <h4 className="text-base leading-relaxed font-sans font-medium">Qué incluye</h4>
                              <div className="flex shrink-0 ml-4">
                                <Plus className="w-5 h-5 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={1} />
                                <Minus className="w-5 h-5 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={1} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-6">
                            <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                              <li>• Estrategia y arquitectura de información.</li>
                              <li>• Diseño visual personalizado.</li>
                              <li>• Desarrollo con vibe coding.</li>
                              <li>• Responsive (diseño adaptado a móvil, tablet, desktop).</li>
                              <li>• Optimización SEO on-page.</li>
                              <li>• Formación para que gestiones tu contenido.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Service 4: GESTIÓN OPERATIVA */}
            <AccordionItem value="apoyo-operativo" className="border-none py-12">
              <AccordionTrigger className="hover:no-underline hover:opacity-100 py-4 group">
                <div className="flex items-start md:items-center justify-between w-full text-left">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <span className="text-3xl md:text-6xl font-sans font-bold text-black uppercase tracking-tight transition-colors">04.</span>
                      <h2 className="text-3xl md:text-6xl font-sans font-bold uppercase tracking-tight text-black transition-colors">
                        GESTIÓN OPERATIVA
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed font-sans font-light text-black  max-w-2xl mt-2">
                      Tu equipo cuando lo necesitas<br />
                      Coordinación y ejecución de la operativa diaria
                    </p>
                  </div>
                  <div className="flex shrink-0 ml-4">
                    <Plus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 group-data-[state=open]:hidden" strokeWidth={2} />
                    <Minus className="w-8 h-8 md:w-12 md:h-12 text-black transition-all duration-300 hidden group-data-[state=open]:block" strokeWidth={2} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      Nos ocupamos de la organización, coordinación y ejecución de tareas clave para que la operativa diaria de tu negocio avance sin fricción.
                    </p>
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      No trabajamos desde la acumulación de tareas, sino desde la comprensión del conjunto.
                    </p>
                    <p className="text-base leading-relaxed font-sans font-light text-black ">
                      Entendemos tu negocio a fondo y actuamos como parte de tu equipo, con responsabilidad y visión práctica.
                    </p>
                    <div>
                      <p className="text-base uppercase tracking-widest mb-3 font-semibold text-black">En qué intervenimos:</p>
                      <ul className="text-base leading-relaxed font-sans font-light text-black space-y-3">
                        <li>• Coordinación y seguimiento de procesos diarios.</li>
                        <li>• Organización de lanzamientos y eventos.</li>
                        <li>• Gestión operativa en fases de crecimiento.</li>
                        <li>• Coordinación de comunicaciones.</li>
                        <li>• Otros procesos que requieran continuidad y orden.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* Lo que conecta todos nuestros servicios */}
      <section className="pb-[var(--space-section-mobile)] pt-16 md:pb-[var(--space-section-desktop)] md:pt-24 bg-subtle">
        <div className="w-full max-w-[94%] mx-auto">
          <div className="max-w-4xl flex flex-col items-start pr-4 md:pr-0">
            <h2 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] text-foreground/90 mb-10 md:mb-16 animate-fade-up opacity-0 text-left text-balance" style={{ animationFillMode: "forwards" }}>
              Lo que conecta todos nuestros servicios
            </h2>
            <div className="space-y-6 md:space-y-8 flex flex-col items-start text-left w-full">
              <p className="text-base leading-relaxed font-sans font-light tracking-wide text-foreground">
                En WAWA todo responde a un mismo principio: El crecimiento sostenible requiere arquitectura.
              </p>
              <p className="text-base leading-relaxed font-sans font-light tracking-wide text-foreground">
                No implementamos tecnología de forma aislada. Diseñamos sistemas donde automatización, datos e inteligencia artificial trabajan como una estructura integrada.
              </p>
              <p className="text-base leading-relaxed font-sans font-light tracking-wide text-foreground">
                Conectamos procesos clave, estructuramos el ciclo comercial y operativo, y desplegamos sistemas preparados para absorber más volumen sin multiplicar complejidad.
              </p>
              <p className="text-base leading-relaxed font-sans font-medium tracking-wide text-foreground mt-8 border-l border-foreground/30 pl-4 w-full">
                No añadimos herramientas. Rediseñamos el sistema que sostiene tu crecimiento.
              </p>
              <div className="pt-12 md:pt-16 text-left w-full">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 md:gap-4 group text-foreground text-xl md:text-2xl font-sans font-medium tracking-tight hover:opacity-80 transition-opacity py-2"
                >
                  <span className="border-b border-foreground/40 group-hover:border-foreground transition-colors pb-1">
                    ¿Hablamos de tu proyecto?
                  </span>
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
