const skills = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Prisma"];

export default function TechStack() {
  return (
    <section className="py-10 border-y border-slate-800/50">
      <p className="text-center text-slate-500 uppercase tracking-[0.2em] text-sm mb-8 font-bold">Tecnologias que domino</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
        {skills.map(s => (
          <span key={s} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-cyan-400 transition-colors cursor-default">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}