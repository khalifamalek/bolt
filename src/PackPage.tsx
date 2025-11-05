import { GraduationCap, ArrowLeft, ShoppingCart, Truck } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';

interface PackPageProps {
  selectedBac: string;
  selectedOptional: string;
  onBack: () => void;
}

function PackPage({ selectedBac, selectedOptional, onBack }: PackPageProps) {
  const { t, language } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const packPrice = 49.99;

  const handleConfirmBuy = () => {
    if (fullName && email && phone && address && city && postalCode) {
      alert(`${t('pack.orderConfirmed')}\n${fullName}\n${email}`);
    }
  };

  const packImage = `https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600`;

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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="mb-6">
                  <img
                    src={packImage}
                    alt={t('pack.title')}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('pack.title')}
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl font-bold text-blue-600">
                    {packPrice.toFixed(2)} DT
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                    {t('pack.limited')}
                  </span>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('pack.whatIncluded')}
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span className="text-gray-700">{t('pack.complete')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span className="text-gray-700">{t('pack.exercises')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span className="text-gray-700">{t('pack.exams')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span className="text-gray-700">{t('pack.corrections')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span className="text-gray-700">{t('pack.lifetime')}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('pack.selected')}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('pack.specialty')}:</span> {selectedBac}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('pack.optional')}:</span> {selectedOptional}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-2 text-blue-600" />
                  {t('pack.deliveryInfo')}
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pack.fullName')} *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('pack.fullNamePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pack.email')} *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pack.phone')} *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pack.address')} *
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('pack.addressPlaceholder')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('pack.city')} *
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        placeholder={t('pack.cityPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('pack.postalCode')} *
                      </label>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        placeholder="XXXX"
                      />
                    </div>
                  </div>
                </form>

                <div className="bg-gray-50 p-4 rounded-xl my-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">{t('pack.subtotal')}</span>
                    <span className="font-semibold text-gray-900">{packPrice.toFixed(2)} DT</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-700">{t('pack.shipping')}</span>
                    <span className="font-semibold text-green-600">{t('pack.free')}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold text-gray-900">{t('pack.total')}</span>
                    <span className="font-bold text-blue-600 text-2xl">{packPrice.toFixed(2)} DT</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmBuy}
                  disabled={!fullName || !email || !phone || !address || !city || !postalCode}
                  className={`w-full py-3 rounded-lg text-lg font-semibold transition-all transform flex items-center justify-center space-x-2 ${
                    fullName && email && phone && address && city && postalCode
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{t('pack.confirmBuy')}</span>
                </button>

                {(!fullName || !email || !phone || !address || !city || !postalCode) && (
                  <p className="text-gray-500 text-sm mt-3 text-center">
                    {t('pack.fillAllFields')}
                  </p>
                )}
              </div>
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

export default PackPage;
