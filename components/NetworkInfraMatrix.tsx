import React from 'react';
import { NetworkConfig, BackendSkillCategory } from '@/types/cv';

interface NetworkInfraMatrixProps {
  network: NetworkConfig;
  backend: BackendSkillCategory[];
  lang?: 'es' | 'en';
}

export const NetworkInfraMatrix: React.FC<NetworkInfraMatrixProps> = ({ network, backend, lang = 'es' }) => {
  return (
    <section className="space-y-6">
      <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5">
        <h2 className="text-lg font-mono font-bold text-emerald-400 flex items-center gap-2 mb-4">
          <span>{'//'}</span> {lang === 'en' ? 'NETWORKS, CABLING & CCTV INFRASTRUCTURE' : 'REDES, CABLEADO E INFRAESTRUCTURA CCTV'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-zinc-800 p-3 rounded">
            <h3 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
              {lang === 'en' ? 'Networking & Protocols' : 'Redes y Protocolos'}
            </h3>
            <ul className="space-y-1 text-xs font-mono text-zinc-300">
              {network.protocols.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <span className="text-cyan-500">&gt;</span> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-3 rounded">
            <h3 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
              {lang === 'en' ? 'Physical Layer & Standards' : 'Capa Física y Estándares'}
            </h3>
            <ul className="space-y-1 text-xs font-mono text-zinc-300">
              {network.standards.map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="text-cyan-500">&gt;</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-3 rounded">
            <h3 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
              {lang === 'en' ? 'Security & Surveillance' : 'Seguridad y Videovigilancia'}
            </h3>
            <ul className="space-y-1 text-xs font-mono text-zinc-300">
              {network.cctvSecurity.map((c) => (
                <li key={c} className="flex items-center gap-1.5">
                  <span className="text-cyan-500">&gt;</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5">
        <h2 className="text-lg font-mono font-bold text-cyan-400 flex items-center gap-2 mb-4">
          <span>{'//'}</span> {lang === 'en' ? 'BACKEND ENGINE & SYSTEM ARCHITECTURE' : 'MOTOR BACKEND Y ARQUITECTURA DE SISTEMAS'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {backend.map((cat, idx) => (
            <div key={idx} className="bg-zinc-950 border border-zinc-800 p-3 rounded flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className="text-[11px] font-mono bg-zinc-900 text-zinc-200 px-1.5 py-0.5 rounded border border-zinc-800"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-zinc-500 font-sans border-t border-zinc-900 pt-2">
                {cat.levelDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};