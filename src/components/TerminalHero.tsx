import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Cpu, Zap, LineChart } from 'lucide-react';

const TerminalHero = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // Define the varied operations that represent Wawa's diverse services
    const terminalSequence = [
        '> SISTEMAS SATURADOS IDENTIFICADOS.',
        '> DIAGNÓSTICO: CRECIMIENTO SIN ESTRUCTURA.',
        '> INICIANDO REDISEÑO DE ARQUITECTURA OPERATIVA...',
        '> CONSTRUYENDO SISTEMAS QUE ABSORBEN VOLUMEN SIN FRICCIÓN.',
        '> WAWA: Escalabilidad técnica para negocios digitales.'
    ];

    useEffect(() => {
        if (currentLineIndex >= terminalSequence.length) {
            setIsTyping(false);
            return;
        }

        const currentString = terminalSequence[currentLineIndex];

        if (currentCharIndex < currentString.length) {
            const timeout = setTimeout(() => {
                setCurrentCharIndex((prev) => prev + 1);
            }, Math.random() * 30 + 20); // Random typing speed between 20-50ms
            return () => clearTimeout(timeout);
        } else {
            // Line finished typing
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, currentString]);
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, 400); // Pause before next line
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, terminalSequence]);

    return (
        <div className="w-full h-full bg-subtle rounded-sm flex flex-col overflow-hidden border border-border/40 shadow-sm font-mono text-sm md:text-base relative group">

            {/* Minimalist Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Light Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/50 backdrop-blur-sm border-b border-border/40 z-10">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-black/60" />
                    <span className="text-black/60 text-xs font-medium tracking-wider">WAWA_SERVICES</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-5 md:p-8 flex flex-col gap-3 md:gap-4 overflow-y-auto z-10 text-black/80 justify-center">
                {lines.map((line, i) => (
                    <div key={i} className="flex gap-3 md:gap-4 animate-fade-in-up">
                        <span className="text-black/20 select-none shrink-0 w-6 text-right text-base md:text-xl">{i + 1}</span>
                        <span className={
                            line.includes('WAWA') ? 'text-black font-bold text-lg md:text-2xl tracking-wide' :
                                'text-black/80 font-medium tracking-wide text-base md:text-xl'
                        }>
                            {line}
                        </span>
                    </div>
                ))}

                {/* Current typing line */}
                {currentLineIndex < terminalSequence.length && (
                    <div className="flex gap-3 md:gap-4">
                        <span className="text-black/20 select-none shrink-0 w-6 text-right text-base md:text-xl">{lines.length + 1}</span>
                        <span className={
                            terminalSequence[currentLineIndex].includes('WAWA') ? 'text-black font-bold text-lg md:text-2xl tracking-wide' : 'text-black/80 font-medium tracking-wide text-base md:text-xl'
                        }>
                            {terminalSequence[currentLineIndex].substring(0, currentCharIndex)}
                            <span className="inline-block w-3 h-5 md:h-6 bg-black/80 ml-1 animate-pulse align-middle"></span>
                        </span>
                    </div>
                )}
            </div>

            {/* Decorative Bottom Bar */}
            <div className="px-4 py-2 bg-white/50 backdrop-blur-sm border-t border-border/40 flex items-center justify-between text-xs text-black/40 z-10 w-full overflow-x-auto no-scrollbar gap-4 md:gap-6">
                <div className="flex items-center gap-1.5 shrink-0"><Cpu className="w-3.5 h-3.5" /> <span>AUTOMATIZACIÓN</span></div>
                <div className="flex items-center gap-1.5 shrink-0"><Zap className="w-3.5 h-3.5" /> <span>IA Y CHATBOTS</span></div>
                <div className="flex items-center gap-1.5 shrink-0"><Code2 className="w-3.5 h-3.5" /> <span>DISEÑO WEB + VIBE CODING</span></div>
                <div className="flex items-center gap-1.5 shrink-0"><LineChart className="w-3.5 h-3.5" /> <span>GESTIÓN OPERATIVA</span></div>
            </div>
        </div>
    );
};

export default TerminalHero;
