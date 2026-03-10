import { Mail, MessageSquare, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pb-20 text-center space-y-8">
      <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 inline-block pb-2">
        Vamos Conversar?
      </h2>
      <p className="text-slate-400 max-w-md mx-auto text-lg">
        Estou disponível para novos projetos freelance e colaborações. 
        Se você tem uma ideia, eu tenho o código.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
        {/* Email - Adicionado 'mailto:' antes do e-mail */}
        <a href="mailto:jcamargo88ccd@hotmail.com" 
           className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-1">
          <Mail size={20} /> Me envie um e-mail
        </a>

        {/* WhatsApp - Agora usando o MessageSquare que estava dando erro */}
        <a href="https://wa.me/5511998817076" // <-- Coloque seu número aqui (com DDD)
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-bold rounded-2xl hover:bg-[#25D366]/20 transition-all transform hover:-translate-y-1">
          <MessageSquare size={20} /> WhatsApp
        </a>

        {/* LinkedIn - Adicionado 'https://' */}
        <a href="https://www.linkedin.com/in/jerry-camargo" 
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white border border-slate-700 font-bold rounded-2xl hover:bg-slate-700 transition-all transform hover:-translate-y-1">
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>

      <div className="pt-10 text-slate-500 text-sm font-mono">
        © 2026 J. Cavalcante - Desenvolvido com Next.js & Tailwind
      </div>
    </section>
  );
}