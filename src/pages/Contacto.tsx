import Layout from "@/components/Layout";
import contactoImage from "@/assets/contacto-minimalist.webp";
import { SEO } from "@/components/SEO";

const Contacto = () => {
  return (
    <Layout>
      <SEO
        title="Contacto | Wawa - Estudio de Automatización e IA"
        description="Parar para avanzar. Contáctanos para diseñar sistemas que te devuelvan tiempo y claridad."
        canonical="https://somoswawa.com/contacto"
      />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center overflow-hidden min-h-[90vh]">
        <div className="container h-full">
          <div className="grid md:grid-cols-12 gap-8 items-start h-full pt-4 md:pt-16">
            <div className="md:col-span-12 lg:col-span-5 pt-4 md:pt-0 flex flex-col justify-between h-auto md:h-[60vh] pb-8 md:pb-0">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[0.9] animate-fade-up">
                  Todo empieza<br />con una<br />conversación.
                </h1>
                <p className="text-2xl md:text-4xl font-serif mt-6 md:mt-10 animate-fade-up animation-delay-100 text-muted-foreground font-medium">
                  ¡Hablemos!
                </p>
              </div>

              <div className="space-y-6 animate-fade-up animation-delay-200 mt-12 md:mt-auto pt-8">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-none pr-4 md:pr-8">
                  Si necesitas recuperar tiempo y foco para hacer crecer tu negocio, contacta con nosotros en el correo {' '}
                  <a href="mailto:hola@somoswawa.com" className="text-foreground font-light underline underline-offset-4 hover:opacity-70 transition-opacity">
                    hola@somoswawa.com
                  </a>{' '}
                  <span className="inline-block md:inline font-light">o a través de Instagram:</span>{' '}
                  <a href="https://instagram.com/wawa.studio.ia" target="_blank" rel="noopener noreferrer" className="text-foreground font-light underline underline-offset-4 hover:opacity-70 transition-opacity">
                    @wawa.studio.ia
                  </a>
                </p>

                <p className="text-base md:text-lg leading-relaxed font-bold text-foreground">
                  Estudio de automatizaciones, IA y gestión operativa.
                </p>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 lg:ml-auto relative w-full h-[40vh] md:h-[65vh] flex items-stretch justify-end mt-12 lg:mt-0">
              <style>{`
                @keyframes expandWidth {
                  0% { width: 0; }
                  100% { width: 100%; }
                }
                @keyframes revealImage {
                  0% { opacity: 0; transform: scale(1.05); }
                  100% { opacity: 1; transform: scale(1); }
                }
              `}</style>
              <div
                className="bg-black w-full h-full overflow-hidden flex items-center justify-center rounded-sm relative"
                style={{
                  animation: 'expandWidth 2s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                }}
              >
                <div
                  className="w-full h-full relative opacity-0"
                  style={{ animation: 'revealImage 2.5s ease-out 0.8s forwards' }}
                >
                  <img
                    src={contactoImage}
                    alt="Estudio de diseño operativo y automatizaciones Wawa"
                    className="w-full h-full object-cover grayscale"
                  />
                  {/* Capas cálidas para igualar el tono de los cubos de la Home */}
                  <div className="absolute inset-0 bg-[#E8DCC4] mix-blend-multiply opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-[#FFF5E6]/10 mix-blend-overlay pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
