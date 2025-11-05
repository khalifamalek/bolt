import { useLanguage } from './LanguageContext';
import { Languages } from 'lucide-react';

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-5 h-5 text-gray-700" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'ar')}
        className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-gray-700 hover:border-blue-600 focus:outline-none focus:border-blue-600 cursor-pointer"
      >
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
