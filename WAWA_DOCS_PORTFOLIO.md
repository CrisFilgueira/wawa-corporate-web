# Documentación Corporativa y Técnica: WAWA Web 3.0

> Documento estratégico y técnico de arquitectura del proyecto web corporativo para WAWA (Estudio de Automatización, IA y Gestión Operativa). Creado para uso en portfolio y presentación profesional.

---

## 1. Executive Summary (Enfoque Estratégico)

### Objetivo del proyecto
Desarrollo y diseño UX/UI de la plataforma corporativa WAWA Web 3.0. El propósito es establecer un posicionamiento digital claro que refleje la misión fundamental del estudio: ayudar a negocios digitales a escalar devolviéndoles tiempo, claridad y enfoque a través del diseño estructurado de procesos operativos, Inteligencia Artificial y automatizaciones.

### Problema que resolvía
En el mercado digital actual, los negocios tienden a crecer más rápido de lo que su infraestructura puede soportar. Este incremento en volumen se traduce frecuentemente en un aumento exponencial de la complejidad corporativa, sobrecarga de trabajo manual operativo y pérdida de agilidad. La plataforma web necesitaba comunicar que la solución no es trabajar más horas, sino construir una mejor estructura.

### Posicionamiento definido
WAWA no se posiciona como una "agencia de automatización" tradicional enfocada en tareas aisladas, sino como un **"estudio de arquitectura de crecimiento"**. El discurso corporativo huye de las exageraciones de marketing, adoptando un tono sobrio, estructurado y consultivo que transmite profesionalidad bajo el paradigma del *"Calm Tech"* (tecnología sin ruido).

### Arquitectura de servicios
La oferta se estructuró semánticamente en cuatro bloques interconectados:
1. **Automatización:** Automatización de tareas repetitivas y creación de flujos de trabajo eficientes, ahorrando tiempo y conectando herramientas.
2. **IA y Chatbots:** Agentes inteligentes con conversaciones naturales que atienden 24/7 sin estar sujeto a respuestas rígidas.
3. **Diseño Web (Vibe Coding):** Experiencias corporativas desarrolladas de forma colaborativa con IA.
4. **Gestión Operativa:** Coordinación delegada como extensión técnica del equipo cliente.

### Resultado esperado
Una *Single Page Application* (SPA) rápida, ligera y accesible, optimizada técnicamente y pensada para la conversión consultiva, actuando como portfolio, punto de cualificación de prospectos y manifiesto corporativo.

---

## 2. Informe Técnico del Proyecto

### Stack tecnológico utilizado
*   **Core:** React 18 / TypeScript / Node.js.
*   **Tooling:** Vite (empaquetado y HMR).
*   **Routing & SEO:** React Router DOM (navegación SPA sin recarga), React Helmet Async.
*   **Estilos:** Tailwind CSS 3.4 interactuando con variables semánticas nativas CSS3.
*   **UI Components:** Shadcn UI (Radix Primitives) para accesibilidad (WAI-ARIA).

### Estructura general del código
El proyecto se fundamenta en un modelo modular limpio centrado en `/src`:
*   `assets`: Componentes multimedia optimizados (`.webp`, `.mp4`).
*   `components`: Elementos y bloques globales compartidos (Header, Footer, SEO, Layouts).
*   `hooks`: Lógica reutilizable abstracta (`useScrollAnimation.tsx`).
*   `pages`: Vistas o rutas renderizadas (Index, Servicios, SobreWawa, Contacto).
*   `ui`: Componentes primarios atómicos instalados vía Shadcn (accordion, dialogs, etc.).

### Organización de componentes
Se ha empleado una filosofía de _Atomic Design_ simplificada. El header cuenta con un _Scroll Listener_ optimizado (`requestAnimationFrame`) que evalúa la posición absoluta para aplicar opacidades progresivas; el componente `SEO` centraliza la inyección dinámica de meta-etiquetas.

### Gestión de estilos
Tailwind se extendió para encapsular animaciones complejas y _mix-blend-modes_. Se emplea un sistema semántico de variables CSS en `index.css` (ej. `--space-section-mobile`, `--subtle`, `--background`) que independiza la métrica del espacio del marcado estructural. Se definió un esquema tipográfico fluido (DM Sans, Space Grotesk, Funnel Sans). Todo diseñado sin depender de librerías sobrecargadas.

### Integraciones implementadas
Flujo directo de derivación pasiva hacia plataformas de correo (mailto) y plataformas sociales (Instagram), enmarcadas en la jerarquía estratégica para evitar las típicas fricciones de formularios no calificados en el primer punto de contacto.

### SEO técnico aplicado
*   **Estructura Semántica de Headers (H1-H6):** Respeto estricto a las jerarquías HTML5. En ciertas vistas se ha implementado la inyección de H1 invisibles (`sr-only`) para cumplir con requisitos de accesibilidad sin romper el rigor minimalista del espacio visual.
*   **Rich Snippets & JSON-LD:** El componente `<Helmet>` inyecta dinámicamente el _schema.org/Organization_ en todas las rutas, logrando que el rastreo entienda al ente corporativo.
*   **Meta Graph:** Inyección sistemática de etiquetas tipo _Open Graph_ e Imágenes SEO para RRSS y motores de búsqueda.

### Consideraciones de seguridad
Preparación _DevSecOps_ para el entorno de producción (ej. Vercel), implementando en un manifiesto `vercel.json` políticas contundentes: bloqueo frente al secuestro de clics (_Click-jacking X-Frame-Options: DENY_), _Strict-Transport-Security_ (HSTS) e integraciones XSS seguras de mitigación nativa a través del Virtual DOM de React.

### Performance y optimización
*   **Multimedia:** Migración al estándar de nueva generación `.webp` y uso de CSS _mix-blend modes_ limitando variaciones costosas de imagen. Refactor de las fotografías pesadas (escala de grises sumada a colores sutiles calculados en GPU).
*   **JavaScript Thread Execution:** Los *event listeners* complejos encargados de la visibilidad y cálculos del scroll se programaron como pasivos (`{ passive: true }`), eliminando procesos de asfixia o "re-renders" drásticos durante el scrollado en móviles.

---

## 3. Documento de Decisiones de Diseño y Arquitectura

### Razonamiento detrás del enfoque visual
El pilar visual se bautiza bajo la premisa del **"Calm Tech"** (tecnología calmada). Se seleccionó expresamente una paleta análoga en colores lino y hueso translúcido (`#F6F4EE` o `--subtle`) que rehúye sistemáticamente del ruido. El uso calculado de imágenes en escala de grises sobrepuestas con matices coloridos beige (`mix-blend-multiply`) otorga elegancia premium, consolidando visualmente un ecosistema sofisticado.

### Elección de tono técnico y estructural
La principal regla de desarrollo fue evitar sobredimensionar la interfaz con recursos genéricos (ej. no se emplea Framer Motion pesado, sino puro CSS o manipulaciones ligeras). La robustez analítica requiere una presentación pragmática y seria; por lo tanto, la navegación es minimalista y transaccional.

### Jerarquía de servicios
Para respetar la línea consultiva, en arquitectura de información la «Automatización» y la «IA» toman un rol protagónico, mostrando su grado de complejidad y valor comercial por encima del "Diseño web" o la "Gestión operativa". Se exponen no como un menú de productos inconexos, sino como fases estructuradas de un mismo principio matriz de adaptación empresarial.

### Decisiones descartadas
*   **Se descartaron complejas librerías de animación JS:** Por miedo a ralentizar los LCP y FCP de Google, las transiciones de revelado (`reveal-horizontal`, `fade-up`) pasaron netamente a delegarse a CSS keyframes integrados con TailwindCSS.
*   **Se descartó Glassmorphism complejo repetitivo:** En favor de un enfoque de componentes "card-solid" discretos; evocado en el fichero de estilos con bordes del 5% de opacidad y sombras reducidas, promoviendo claridad visual frente al exceso decorativo.

### Integración conceptual: IA, Automatizaciones y Operativa
En palabras del propio proyecto: *"No añadimos herramientas, rediseñamos el sistema que sostiene el crecimiento"*. La toma de decisión de este copy representó la columna vertebral para agrupar servicios aparentemente disjuntos bajo un relato sistémico, donde el *Vibe Coding* o el *Desarrollo con IA* no son simplemente palabras de moda, sino metodologías para implementar escalabilidad real.
