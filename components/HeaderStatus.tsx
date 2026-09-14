'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CandidateProfile } from '@/types/cv';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderStatusProps {
  profile: CandidateProfile;
}

export const HeaderStatus: React.FC<HeaderStatusProps> = ({ profile }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '¡No olvides guardar esta página en tus favoritos (Ctrl+D) para no perder mi CV!';
      return e.returnValue;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <>
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 tracking-wider font-semibold">
                NODE_ENV: PRODUCTION // HOST: GUATEMALA
              </span>
              <LanguageSwitcher currentLang={profile.lang || 'es'} />
              <a 
                href="/cv.pdf" 
                download="CV_Angel_Gustavo_Sanchez_Rodas.pdf"
                className="ml-2 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-mono px-3 py-1 rounded transition-colors flex items-center gap-1"
                title={profile.lang === 'en' ? 'Download CV PDF' : 'Descargar CV PDF'}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {profile.lang === 'en' ? 'Download CV' : 'Descargar CV'}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <button 
                onClick={() => setIsZoomed(true)}
                className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-800 shadow-lg shrink-0 hover:border-emerald-500 transition-colors cursor-zoom-in"
                title={profile.lang === 'en' ? 'View Picture' : 'Ver Foto'}
              >
                <Image 
                  src="/profile.jpg" 
                  alt={profile.name} 
                  fill 
                  className="object-cover"
                  priority 
                />
              </button>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-zinc-100">
                  {profile.name}
                </h1>
                <p className="text-sm font-mono text-zinc-400 mt-1">
                  {profile.title} <span className="text-zinc-600">|</span> {profile.location}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-left bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-md font-mono text-xs">
            <div>
              <div className="text-zinc-500 uppercase tracking-wider text-[10px]">{profile.lang === 'en' ? 'Core Stack' : 'Stack Principal'}</div>
              <div className="text-zinc-200 font-semibold">{profile.systemTelemetry.coreLanguage}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-wider text-[10px]">{profile.lang === 'en' ? 'Runtime' : 'Entorno'}</div>
              <div className="text-zinc-200 font-semibold">{profile.systemTelemetry.primaryRuntime}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-wider text-[10px]">{profile.lang === 'en' ? 'Reliability Target' : 'Disponibilidad'}</div>
              <div className="text-emerald-400 font-semibold">{profile.systemTelemetry.uptimeScore}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-wider text-[10px]">{profile.lang === 'en' ? 'Protocol Focus' : 'Enfoque Protocolo'}</div>
              <div className="text-cyan-400 font-semibold truncate">TCP/IP & REST</div>
            </div>
          </div>
        </div>
      </header>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl">
             <Image 
                src="/profile.jpg" 
                alt={profile.name} 
                fill 
                className="object-cover"
              />
          </div>
        </div>
      )}
    </>
  );
};