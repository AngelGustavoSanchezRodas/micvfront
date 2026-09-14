'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const LanguageSwitcher = ({ currentLang }: { currentLang: 'es' | 'en' }) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang: 'es' | 'en') => {
    let newPath = pathname;
    if (pathname.startsWith(`/${currentLang}`)) {
      newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    } else {
      newPath = `/${lang}`;
    }
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 border border-zinc-800 rounded bg-zinc-900/50 p-1">
      <button
        onClick={() => switchLanguage('es')}
        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${currentLang === 'es' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'}`}
      >
        ES
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${currentLang === 'en' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'}`}
      >
        EN
      </button>
    </div>
  );
};
