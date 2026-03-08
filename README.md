# Wawa Web 3.0 | Desarrollo Web & Diseño UX/UI

**Wawa** es un estudio de arquitectura operativa e Inteligencia Artificial para negocios digitales. Este repositorio contiene el código fuente de su web corporativa, un proyecto integral desarrollado de principio a fin abarcando desde la concepción del diseño visual hasta la programación frontend y el despliegue final.

## 👩‍💻 Sobre la Autora: Diseño UX/UI y Desarrollo Web

Este proyecto web ha sido concebido, diseñado y programado desde una perspectiva multidisciplinar, uniendo de forma inseparable el mundo del **Diseño de Experiencia de Usuario e Interfaces (UX/UI)** con la **Programación y Desarrollo Web**:

*   **Diseño UX/UI:** Toma de decisiones de negocio y arquitectura de la información, prototipado visual, diseño de interacción fluido, metodologías de diseño atómico y conceptualización gráfica bajo el paradigma *calm-tech* (minimalismo cálido sin ruido visual).
*   **Desarrollo Web Frontend:** Traducción de la interfaz de alta fidelidad a código de producción eficiente, aplicando buenas prácticas de ingeniería de software para obtener un producto escalable, accesible y seguro.

## 🚀 Lenguajes de Programación y Stack Tecnológico

La construcción de esta aplicación web moderna (SPA - Single Page Application) se cimienta sobre los siguientes lenguajes de código y motores de renderizado:

### Lenguajes Core Aplicados
*   **TypeScript (TS):** Supersuperset de JavaScript utilizado como lenguaje principal de programación de todo el proyecto. Aporta un tipado estático estricto que previene errores en tiempo de escritura y blinda la lógica en el ciclo de vida de React.
*   **JavaScript (ES6+):** Implementación de scripts de control y lógica pura del navegador orientada al rendimiento o la limpieza del DOM (manejo nativo de *event listeners* complejos mediante `requestAnimationFrame` y animaciones pasivas).
*   **JSX / TSX (HTML5 renderizado):** Sintaxis extendida para definir la estructura y la semántica web. Uso constante de la correcta jerarquía de etiquetas de HTML5 para garantizar accesibilidad (WAI-ARIA) y sólidas bases de posicionamiento SEO orgánico en buscadores.
*   **CSS3:** Uso avanzado de hojas de estilo globales con Custom Properties nativas para definir todo el motor semántico de distancias espaciales y variables de tema y color global del proyecto.

### Frameworks y Librerías de Ecosistema
*   **React 18:** Librería frontend base utilizada para crear una arquitectura apoyada puramente en componentes interactivos, modulares y reusables.
*   **Vite:** Herramienta de construcción (Build Tool / Bundler) para empaquetado ultra-rapidísimo y orquestado local con HMR.
*   **TailwindCSS 3.4:** Framework CSS "Utility-First" implementado para todo el estilo microscópico de interfaz web, reduciendo del tamaño final del código ensamblado y estandarizando clases repetitivas como tipografías (Inter, DM Sans, Funnel).
*   **Shadcn UI (Radix):** Integración de componentes *primitives headless* que se importan al código fuente. Utilizado para menús avanzados y Acordeones funcionales en escritorio/móvil con extrema accesibilidad 100% controlada en teclado en lugar de librerías CSS que engordan el DOM.
*   **React Router Dom:** Enrutamiento lado cliente para navegación fluida y sin saltos ni recargas de pantalla completa entre pestañas ("Sobre Wawa", "Servicios").
*   **React Helmet Async:** Manejo de la inyección de etiquetas metadatos (`<title>`, `<meta>`, *OG Graph SEO*) dentro del fragmento invisible (`<head>`) de forma dinámica.

## ✨ Desafíos Técnicos Resueltos (Highlights)

1.  **Ingeniería Visual ("Calm Tech"):** Manipulación superpuesta de texturas de color complejas mediante filtros matemáticos (`mix-blend-multiply`), y escalas fluidas en el puntero del usuario para evocar la calma analógica mediante CSS.
2.  **Optimización Estricta Node.js (Core SEO Vitals):** Eliminación de recursos de renderizado-bloqueantes, migración integral de las fotos hero al estándar súper-ligero de nueva generación `.webp`.
3.  **Auditoría y Performance del JS Main Thread:** Refactorización a bajo nivel de algoritmos de escucha pesados (como el ocultamiento progresivo del Navbar) delegándolos pasivamente (`{ passive: true }`) al motor del refresco de pantalla del navegador, eliminando la asfixia del procesador en dispositivos móviles por "re-renders" en React.
4.  **DevSecOps & Seguridad Vercel Ready:** Creación manual del archivo `vercel.json` configurando la emisión de cabeceras en el servidor host Vercel con denegación proactiva de rastreo pasivo, protección anti Click-jacking (`X-Frame-Options: DENY`) y mitigación XSS estricta nativa.

## 💻 Instalación y Despliegue Local

```bash
# Se requiere un sistema con NodeJS 18+

# 1. Instalar la paquetería
npm install

# 2. Levantar el entorno local asíncrono en localhost
npm run dev

# 3. Compilar a una carpeta build de producción estática minificada
npm run build
```

---
*Proyecto desarrollado utilizando Antigravity AI como herramienta de asistencia en desarrollo.*
