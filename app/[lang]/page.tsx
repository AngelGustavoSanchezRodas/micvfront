import React from 'react';
import { getDictionary } from '@/data/dictionaries';
import { HeaderStatus } from '@/components/HeaderStatus';
import { SystemConsole } from '@/components/SystemConsole';
import { ProjectCard } from '@/components/ProjectCard';
import { NetworkInfraMatrix } from '@/components/NetworkInfraMatrix';
import { ContactConsole } from '@/components/ContactConsole';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const data = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-950">
      <div>
        <HeaderStatus profile={data} />

        <main className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-12 space-y-8">
          {/* Executive Systems Summary */}
          <section className="border border-zinc-800 bg-zinc-900/20 rounded-lg p-5">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              {'//'} {data.lang === 'en' ? 'EXECUTIVE SUMMARY & CORE DIRECTIVE' : 'RESUMEN EJECUTIVO & DIRECTIVA PRINCIPAL'}
            </h2>
            <p className="text-sm md:text-base text-zinc-200 leading-relaxed font-sans">
              {data.executiveSummary}
            </p>
          </section>

          {/* Interactive Shell Diagnostics */}
          <SystemConsole profile={data} />

          {/* Projects: Architecture & API Focus */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-mono font-bold text-zinc-100 flex items-center gap-2">
                <span className="text-emerald-400">{'//'}</span> {data.lang === 'en' ? 'PRODUCTION SYSTEMS & ARCHITECTURE' : 'SISTEMAS DE PRODUCCIÓN Y ARQUITECTURA'}
              </h2>
              <span className="text-xs font-mono text-zinc-500">{data.lang === 'en' ? '2 NODES REGISTERED' : '2 NODOS REGISTRADOS'}</span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Infrastructure, Networks and Backend Matrix */}
          <NetworkInfraMatrix
            network={data.networkSkills}
            backend={data.backendSkills}
            lang={data.lang}
          />

          {/* Academic & Background History */}
          <section className="border border-zinc-800 bg-zinc-900/20 rounded-lg p-5 space-y-4">
            <h2 className="text-lg font-mono font-bold text-zinc-100 flex items-center gap-2">
              <span className="text-cyan-400">{'//'}</span> {data.lang === 'en' ? 'ACADEMIC CREDENTIALS & FOUNDATION' : 'CREDENCIALES ACADÉMICAS Y FUNDAMENTOS'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.education.map((edu, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-800 p-4 rounded">
                  <span className="text-xs font-mono text-zinc-500 block">{edu.period}</span>
                  <h3 className="text-base font-mono font-bold text-zinc-100 mt-1">{edu.degree}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-2">{edu.institution}</div>
                  <ul className="space-y-1 text-xs text-zinc-400 list-disc list-inside font-sans">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact / Network Connection */}
          <ContactConsole email={data.contact.email} phone={data.contact.phone} lang={data.lang} />
        </main>
      </div>
    </div>
  );
}