import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'th', label: 'ไทย' },
];

export default function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const pathMatch = location.pathname.match(/^\/(en|zh|th)(.*)/);
  const currentLang = pathMatch ? pathMatch[1] : 'en';

  const switchLang = (newLang: string) => {
    if (newLang === currentLang) return;
    const pathAfterLang = pathMatch ? pathMatch[2] || '/' : location.pathname;
    navigate(`/${newLang}${pathAfterLang === '/' ? '' : pathAfterLang}`);
  };

  return (
    <div className="flex items-center gap-1 bg-surface rounded-full p-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLang(l.code)}
          className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-300 cursor-pointer ${
            currentLang === l.code
              ? 'bg-accent text-accent-fg shadow-sm'
              : 'text-text-muted hover:text-text'
          }`}
          aria-label={t(`lang.${l.code}`)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
