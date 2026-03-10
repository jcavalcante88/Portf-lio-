import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Gestão SaaS",
    description: "Plataforma completa para controle de estoque e vendas em tempo real.",
    problem: "Empresas perdiam tempo com planilhas manuais.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "https://github.com/jcavalcante88"
  },
  {
    title: "API de Agendamentos",
    description: "Backend robusto com autenticação JWT e validações complexas.",
    problem: "Necessidade de um sistema de reserva seguro e escalável.",
    tech: ["Node.js", "TypeScript", "Docker", "Jest"],
    link: "#",
    github: "https://github.com/jcavalcante88"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <h2 className="text-3xl font-bold text-white border-l-4 border-cyan-500 pl-4">Projetos em Destaque</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((item, i) => (
          <div key={i} className="group bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 mb-4">{item.description}</p>
            
            <div className="bg-[#0f172a] p-4 rounded-lg mb-6 italic text-sm border-l-2 border-purple-500">
              <span className="text-purple-400 font-bold">O Problema:</span> {item.problem}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {item.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-700 rounded text-cyan-300 font-mono">{t}</span>)}
            </div>

            <div className="flex gap-4">
              <a href={item.link} className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300">
                <ExternalLink size={18} /> Demo Online
              </a>
              <a href={item.github} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white">
                <Code2 size={18} /> Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}