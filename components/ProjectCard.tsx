import React from 'react';
import { ProjectData } from '@/types/cv';
import { ApiContractViewer } from './ApiContractViewer';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 transition-all hover:border-zinc-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            {project.environment}
          </span>
          <h2 className="text-xl font-bold font-mono text-zinc-100">{project.name}</h2>
          <span className="text-xs text-zinc-400 font-mono">Role: {project.role}</span>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 px-2.5 py-1.5 rounded bg-emerald-500/5 transition-colors self-start md:self-auto"
          >
            <span>Live System Endpoint</span>
            <span>&rarr;</span>
          </a>
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm text-zinc-300 leading-relaxed font-sans">{project.summary}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
          Architectural Implementations & Resilience:
        </h3>
        <ul className="space-y-1.5 text-xs font-sans text-zinc-300 list-disc list-inside">
          {project.architectureHighlights.map((hl, i) => (
            <li key={i} className="leading-normal">
              {hl}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.apiSample && <ApiContractViewer contract={project.apiSample} />}
    </article>
  );
};