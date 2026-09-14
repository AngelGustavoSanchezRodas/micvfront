import React from 'react';

interface ContactConsoleProps {
  email: string;
  phone: string;
  lang?: 'es' | 'en';
}

export const ContactConsole: React.FC<ContactConsoleProps> = ({ email, phone, lang = 'es' }) => {
  return (
    <section className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5">
      <h2 className="text-lg font-mono font-bold text-zinc-100 flex items-center gap-2 mb-4">
        <span className="text-emerald-400">{'//'}</span> {lang === 'en' ? 'COMMUNICATION PROTOCOLS' : 'PROTOCOLOS DE COMUNICACIÓN'}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-zinc-500 mb-1">SECURE_CHANNEL (EMAIL)</div>
            <a href={`mailto:${email}`} className="text-sm font-mono text-cyan-400 hover:underline">
              {email}
            </a>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
        
        <div className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-zinc-500 mb-1">VOICE_LINK (PHONE)</div>
            <a href={`tel:${phone}`} className="text-sm font-mono text-cyan-400 hover:underline">
              {phone}
            </a>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
