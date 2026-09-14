'use client';

import React, { useState } from 'react';
import { ApiContract } from '@/types/cv';

interface ApiContractViewerProps {
  contract: ApiContract;
}

export const ApiContractViewer: React.FC<ApiContractViewerProps> = ({ contract }) => {
  const [activeTab, setActiveTab] = useState<'contract' | 'security'>('contract');

  return (
    <div className="mt-4 border border-zinc-800 rounded bg-zinc-900/80 overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between bg-zinc-950 px-3 py-2 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-bold">
            {contract.method}
          </span>
          <span className="text-zinc-200">{contract.endpoint}</span>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('contract')}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === 'contract'
                ? 'bg-zinc-800 text-zinc-100 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Payloads
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('security')}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === 'security'
                ? 'bg-zinc-800 text-amber-300 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Defensive Architecture
          </button>
        </div>
      </div>

      <div className="p-3">
        {activeTab === 'contract' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {contract.requestPayload && (
              <div>
                <span className="text-zinc-500 block mb-1 uppercase tracking-wider text-[10px]">
                  Input Request (JSON)
                </span>
                <pre className="bg-zinc-950 p-2 rounded border border-zinc-800 text-emerald-400 overflow-x-auto text-[11px] leading-relaxed">
                  {JSON.stringify(contract.requestPayload, null, 2)}
                </pre>
              </div>
            )}
            <div>
              <span className="text-zinc-500 block mb-1 uppercase tracking-wider text-[10px]">
                Server Response (200 OK)
              </span>
              <pre className="bg-zinc-950 p-2 rounded border border-zinc-800 text-cyan-400 overflow-x-auto text-[11px] leading-relaxed">
                {JSON.stringify(contract.responsePayload, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-zinc-500 block mb-1 uppercase tracking-wider text-[10px]">
              Fail-Safe & Memory Guard Rules
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-zinc-300">
              {contract.defensiveMechanisms.map((mech, idx) => (
                <li key={idx} className="text-zinc-300">
                  <span className="text-amber-400 font-semibold">{mech.split(' ')[0]}</span>{' '}
                  {mech.substring(mech.indexOf(' ') + 1)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};