import { GraduationCap, CheckCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';

interface SelectionPageProps {
  onBack: () => void;
  onSelectPack: (bac: string, optional: string) => void;
}

function SelectionPage({ onBack, onSelectPack }: SelectionPageProps) {
  const [selectedBac, setSelectedBac] = useState<string>('');
  const [selectedOptional, setSelectedOptional] = useState<string>('');
  const { t, language } = useLanguage();

  const bacTypes = [
    { key: 'bac.math', value: 'BAC MATHEMATIQUE' },
    { key: 'bac.sciences', value: 'BAC SCIENCES EXPERIMENTALES' },
    { key: 'bac.letters', value: 'BAC LETTRES' },
    { key: 'bac.info', value: 'BAC INFORMATIQUE' },
    { key: 'bac.tech', value: 'BAC TECHNIQUE' },
    { key: 'bac.econ', value: 'BAC ECONOMIE ET GESTION' }
  ];

  const optionalCourses = [
    { key: 'optional.spanish', value: 'ESPAGNOL' },
    { key: 'optional.italian', value: 'ITALIEN' },
    { key: 'optional.german', value: 'ALLEMAND' }
  ];

  const handleSubmit = () => {
    if (selectedBac && selectedOptional) {
      onSelectPack(selectedBac, selectedOptional);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">Bac Pack 2026</span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('nav.back')}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-yellow-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('selection.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('selection.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                {t('selection.bacTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {bacTypes.map((bac) => (
                  <button
                    key={bac.value}
                    onClick={() => setSelectedBac(bac.value)}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 text-left ${
                      selectedBac === bac.value
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 bg-white'
                    }`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{t(bac.key)}</span>
                      {selectedBac === bac.value && (
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                {t('selection.optionalTitle')}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {optionalCourses.map((course) => (
                  <button
                    key={course.value}
                    onClick={() => setSelectedOptional(course.value)}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 text-center ${
                      selectedOptional === course.value
                        ? 'border-yellow-600 bg-yellow-50 shadow-lg'
                        : 'border-gray-200 hover:border-yellow-300 bg-white'
                    }`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span className="font-semibold text-gray-900">{t(course.key)}</span>
                      {selectedOptional === course.value && (
                        <CheckCircle className="w-6 h-6 text-yellow-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <button
                onClick={handleSubmit}
                disabled={!selectedBac || !selectedOptional}
                className={`px-12 py-4 rounded-full text-lg font-semibold transition-all transform shadow-xl inline-flex items-center space-x-2 ${
                  selectedBac && selectedOptional
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>{t('selection.submit')}</span>
                <CheckCircle className="w-5 h-5" />
              </button>
              {(!selectedBac || !selectedOptional) && (
                <p className="text-gray-500 mt-4 text-sm">
                  {t('selection.warning')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <span className="text-xl font-bold">Bac Pack 2026</span>
              </div>
              <p className="text-gray-400">
                {t('footer.tagline')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
              <p className="text-gray-400">{t('footer.email')}</p>
              <p className="text-gray-400">{t('footer.phone')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.follow')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SelectionPage;
