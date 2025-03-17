'use client';

import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center gap-2 text-white hover:text-game-text transition-colors"
    >
      <span className="text-xl">{language === 'en' ? '🇬🇧' : '🇪🇸'}</span>
      <span className="text-sm">{language === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitch; 