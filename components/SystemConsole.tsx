'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CandidateProfile } from '@/types/cv';

interface SystemConsoleProps {
  profile: CandidateProfile;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const SystemConsole: React.FC<SystemConsoleProps> = ({ profile }) => {
  const [input, setInput] = useState('');
  const lang = profile.lang || 'es';
  
  const initialLog = {
    id: 'init-1',
    command: 'sysinfo --summary',
    output: (
      <span className="text-zinc-300">
        {lang === 'en' ? 'Initialized profile for ' : 'Perfil inicializado para '}
        <strong className="text-emerald-400">{profile.name}</strong>. 
        {lang === 'en' ? ' Type ' : ' Escribe '}
        <code className="bg-zinc-800 text-amber-300 px-1 py-0.5 rounded">help</code>
        {lang === 'en' ? ' to list available diagnostic commands.' : ' para listar comandos de diagnóstico.'}
      </span>
    )
  };

  const [logs, setLogs] = useState<CommandLog[]>([initialLog]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let responseOutput: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        responseOutput = (
          <div className="space-y-1 text-zinc-300">
            <div>{lang === 'en' ? 'Available diagnostic calls:' : 'Llamadas de diagnóstico disponibles:'}</div>
            <div><span className="text-amber-400 font-bold">status</span> - {lang === 'en' ? 'Check candidate operational telemetry' : 'Revisar telemetría operativa del candidato'}</div>
            <div><span className="text-amber-400 font-bold">cat skills</span> - {lang === 'en' ? 'Output backend, database, and infrastructure matrix' : 'Ver matriz de backend, base de datos e infraestructura'}</div>
            <div><span className="text-amber-400 font-bold">netstat -r</span> - {lang === 'en' ? 'Display networking & structured cabling protocols' : 'Mostrar protocolos de red y cableado estructurado'}</div>
            <div><span className="text-amber-400 font-bold">curl /projects</span> - {lang === 'en' ? 'Review core backend architectural projects' : 'Revisar proyectos centrales de arquitectura backend'}</div>
            <div><span className="text-amber-400 font-bold">whoami</span> - {lang === 'en' ? 'Display candidate contact information' : 'Mostrar información de contacto del candidato'}</div>
            <div><span className="text-amber-400 font-bold">clear</span> - {lang === 'en' ? 'Clear terminal session' : 'Limpiar sesión de terminal'}</div>
          </div>
        );
        break;

      case 'status':
        responseOutput = (
          <div className="text-zinc-300 font-mono text-xs space-y-0.5">
            <div>[OK] {lang === 'en' ? 'Java Runtime: Java 21 / JVM Optimized' : 'Entorno Java: Java 21 / JVM Optimizado'}</div>
            <div>[OK] {lang === 'en' ? 'Primary Framework: Spring Boot 3 (Data JPA, Security)' : 'Framework Principal: Spring Boot 3 (Data JPA, Security)'}</div>
            <div>[OK] {lang === 'en' ? 'Storage Engine: PostgreSQL / ACID Compliant' : 'Motor de Almacenamiento: PostgreSQL / Cumple ACID'}</div>
            <div>[OK] {lang === 'en' ? 'Network Protocols: TCP/IP Stack Certified (T568A/B)' : 'Protocolos de Red: Certificado TCP/IP Stack (T568A/B)'}</div>
            <div className="text-emerald-400">[READY] {lang === 'en' ? 'Candidate ready for deployment in Backend/IT roles.' : 'Candidato listo para despliegue en roles de Backend/TI.'}</div>
          </div>
        );
        break;

      case 'cat skills':
        responseOutput = (
          <div className="space-y-2 text-zinc-300">
            {profile.backendSkills.map((bs, i) => (
              <div key={i}>
                <span className="text-cyan-400 font-bold">[{bs.category}]:</span>{' '}
                <span>{bs.items.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'netstat -r':
        responseOutput = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <div><strong className="text-emerald-400">Layer 3/4:</strong> {profile.networkSkills.protocols.join(' | ')}</div>
            <div><strong className="text-emerald-400">Physical / Cabling:</strong> {profile.networkSkills.standards.join(' | ')}</div>
            <div><strong className="text-emerald-400">Surveillance:</strong> {profile.networkSkills.cctvSecurity.join(' | ')}</div>
          </div>
        );
        break;

      case 'curl /projects':
        responseOutput = (
          <div className="space-y-2">
            {profile.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-zinc-700 pl-2">
                <div className="text-zinc-100 font-bold">{p.name}</div>
                <div className="text-zinc-400 text-xs">{p.summary}</div>
                <div className="text-amber-300 text-xs mt-0.5">Stack: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'whoami':
        responseOutput = (
          <div className="text-zinc-300 text-xs space-y-1">
            <div>User: {profile.contact.terminalHandle}</div>
            <div>Email: {profile.contact.email}</div>
            <div>Phone: {profile.contact.phone}</div>
            <div>Location: {profile.location}</div>
          </div>
        );
        break;

      case 'clear':
        setLogs([initialLog]);
        setInput('');
        return;

      default:
        responseOutput = (
          <span className="text-rose-400">
            {lang === 'en' ? 'command not found: ' : 'comando no encontrado: '} {cleanCmd}. 
            {lang === 'en' ? ' Type ' : ' Escribe '} <code className="text-amber-300">help</code> 
            {lang === 'en' ? ' for allowed diagnostics.' : ' para diagnósticos permitidos.'}
          </span>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: input,
        output: responseOutput
      }
    ]);
    setInput('');
  };

  return (
    <section className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl font-mono text-sm my-6">
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs text-zinc-400 ml-2 font-mono">
            {profile.contact.terminalHandle} — /bin/bash ({lang === 'en' ? 'Interactive Shell' : 'Shell Interactiva'})
          </span>
        </div>
        <span className="text-xs text-zinc-500 hidden sm:inline">TTY-01</span>
      </div>

      <div ref={scrollContainerRef} className="p-4 max-h-80 overflow-y-auto space-y-3 bg-black/50 scroll-smooth">
        {logs.map((log) => (
          <div key={log.id} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-zinc-100">{log.command}</span>
            </div>
            <div className="pl-4 text-zinc-300 text-xs md:text-sm">{log.output}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="flex border-t border-zinc-800 bg-zinc-900/60 p-2">
        <label htmlFor="cli-input" className="text-emerald-400 px-2 py-1 font-bold">
          $
        </label>
        <input
          id="cli-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={lang === 'en' ? "Type 'help', 'cat skills', 'status' or 'curl /projects'..." : "Escribe 'help', 'cat skills', 'status' o 'curl /projects'..."}
          className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none font-mono text-xs md:text-sm"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </section>
  );
};