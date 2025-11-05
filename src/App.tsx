import { BookOpen, FileText, Award, GraduationCap, CheckCircle, Menu, X, Star, Users, TrendingUp, Smartphone } from 'lucide-react';
import { useState } from 'react';
import SelectionPage from './SelectionPage';
import PackPage from './PackPage';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSelectionPage, setShowSelectionPage] = useState(false);
  const [showPackPage, setShowPackPage] = useState(false);
  const [selectedBac, setSelectedBac] = useState('');
  const [selectedOptional, setSelectedOptional] = useState('');
  const { t, language } = useLanguage();

  const handleSelectPack = (bac: string, optional: string) => {
    setSelectedBac(bac);
    setSelectedOptional(optional);
    setShowSelectionPage(false);
    setShowPackPage(true);
  };

  const features = [
    {
      icon: BookOpen,
      title: t('features.courses'),
      description: t('features.coursesDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: t('features.exercises'),
      description: t('features.exercisesDesc'),
      color: 'bg-yellow-500'
    },
    {
      icon: Award,
      title: t('features.extracts'),
      description: t('features.extractsDesc'),
      color: 'bg-blue-600'
    },
    {
      icon: GraduationCap,
      title: t('features.extracurricular'),
      description: t('features.extracurricularDesc'),
      color: 'bg-yellow-600'
    },
    {
      icon: CheckCircle,
      title: t('features.corrections'),
      description: t('features.correctionsDesc'),
      color: 'bg-blue-700'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: t('benefits.verified')
    },
    {
      icon: Star,
      text: t('benefits.adapted')
    },
    {
      icon: TrendingUp,
      text: t('benefits.updates')
    },
    {
      icon: Smartphone,
      text: t('benefits.mobile')
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  if (showPackPage) {
    return (
      <PackPage
        selectedBac={selectedBac}
        selectedOptional={selectedOptional}
        onBack={() => {
          setShowPackPage(false);
          setShowSelectionPage(true);
        }}
      />
    );
  }

  if (showSelectionPage) {
    return (
      <SelectionPage
        onBack={() => setShowSelectionPage(false)}
        onSelectPack={handleSelectPack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">Bac Pack 2026</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('contenu')} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('nav.content')}
              </button>
              <button onClick={() => scrollToSection('avantages')} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('nav.benefits')}
              </button>
              <button onClick={() => scrollToSection('temoignages')} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('nav.testimonials')}
              </button>
              <LanguageSelector />
              <button
                onClick={() => scrollToSection('cta')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('nav.start')}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button onClick={() => scrollToSection('contenu')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50">
                {t('nav.content')}
              </button>
              <button onClick={() => scrollToSection('avantages')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50">
                {t('nav.benefits')}
              </button>
              <button onClick={() => scrollToSection('temoignages')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50">
                {t('nav.testimonials')}
              </button>
              <div className="px-4 py-2">
                <LanguageSelector />
              </div>
              <button
                onClick={() => scrollToSection('cta')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                {t('nav.start')}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('hero.subtitle')}
              </p>
              <button
                onClick={() => scrollToSection('cta')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
              >
                <span>{t('hero.cta')}</span>
                <Award className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">+2000</div>
                  <div className="text-sm text-gray-600">{t('hero.students')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">98%</div>
                  <div className="text-sm text-gray-600">{t('hero.satisfaction')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-yellow-400 rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform">
                <img
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Graduated student"
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t('hero.success')}</div>
                    <div className="text-sm text-gray-600">{t('hero.successSub')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="contenu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-4"
              >
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <div className="flex items-center justify-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                "{t('testimonials.amira')}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.amiraName')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.amiraTitle')}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                "{t('testimonials.mohamed')}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.mohamedName')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.mohamedTitle')}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                "{t('testimonials.salma')}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.salmaName')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.salmaTitle')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="inline-flex items-center space-x-3 bg-blue-50 px-8 py-4 rounded-full">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">{t('testimonials.studentsCount')}</span>
              <span className="text-gray-600">{t('testimonials.trust')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowSelectionPage(true)}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>{t('cta.download')}</span>
              <Award className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowSelectionPage(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              {t('cta.start')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default App;
