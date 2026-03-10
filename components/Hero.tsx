import { Github, Linkedin, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 pt-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm mb-4">
        <Terminal size={16} />
        <span>Disponível para Projetos Full Stack</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
        J. Cavalcante <span className="text-cyan-500">.</span>
      </h1>
      
      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
        Estudante de ADS & Desenvolvedor Full Stack. Especializado em transformar ideias em 
        aplicações robustas com <span className="text-white font-medium">React, Node.js e TypeScript</span>.
      </p>

      <div className="flex gap-4 pt-4">
        <a href="https://github.com/jcavalcante88" target="_blank" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/jerry-camargo" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
          <Linkedin size={24} />
        </a>
        <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-900/20">
          Baixar Currículo
        </button>
      </div>
    </section>
  );
}