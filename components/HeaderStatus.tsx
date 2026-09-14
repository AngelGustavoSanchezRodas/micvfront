import React from 'react';
import { CandidateProfile } from '@/types/cv';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderStatusProps {
  profile: CandidateProfile;
}

export const HeaderStatus: React.FC<HeaderStatusProps> = ({ profile }) => {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 tracking-wider font-semibold">
              NODE_ENV: PRODUCTION // HOST: GUATEMALA
            </span>
            <LanguageSwitcher currentLang={profile.lang || 'es'} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-zinc-100 mt-1">
            {profile.name}
          </h1>
          <p className="text-sm font-mono text-zinc-400">
            {profile.title} <span className="text-zinc-600">|</span> {profile.location}
          </p>
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
  );
};