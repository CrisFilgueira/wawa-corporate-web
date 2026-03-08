import { Link } from "react-router-dom";
import { ArrowUp, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-12">
          <div className="space-y-4">
            <Link to="/">
              <h2 className="text-5xl md:text-7xl font-logo font-extrabold tracking-tight text-white/90">
                wawa<sup className="text-lg align-super font-bold ml-1">®</sup>
              </h2>
            </Link>
            <p className="text-xs uppercase tracking-widest opacity-40 max-w-xs leading-relaxed">
              Estudio de Automatizaciones, IA <br />
              & Gestión Operativa.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-8 pt-2 md:pt-4">
            <div className="text-left md:text-right space-y-3">
              <h3 className="text-xs tracking-widest mb-4 font-sans uppercase opacity-40">Contacto</h3>

              <a href="mailto:hola@somoswawa.com" className="flex items-center md:justify-end gap-3 group">
                <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="text-lg md:text-xl font-sans group-hover:opacity-70 transition-opacity">hola@somoswawa.com</span>
              </a>

              <a href="https://instagram.com/wawa.studio.ia" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 group" aria-label="Síguenos en Instagram">
                <Instagram className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-lg md:text-xl font-sans group-hover:opacity-70 transition-opacity">@wawa.studio.ia</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 mt-8 gap-6">
          <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 wawa. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            aria-label="Volver arriba"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">Volver arriba</span>
            <div className="p-3 bg-white text-black rounded-full transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp className="w-4 h-4" strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
