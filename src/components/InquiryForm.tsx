import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, officialCourses } from '../data/officialContent';

export default function InquiryForm() {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'standard',
    timing: 'flexible',
    duration: '1week',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="inquire" className="py-24 md:py-32 bg-travertine-100 relative overflow-hidden scroll-mt-20">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
                {t('form.sub')}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
                {t('form.title')} <br />
                <span className="italic">{language === 'IT' ? 'ad Ascoli Piceno' : 'in Ascoli Piceno'}</span>.
              </h2>
              <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
                {t('form.desc')}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-travertine-300/60">
              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <MapPin className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">{contactInfo.schoolName}</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1">
                    {contactInfo.addressLine1} <br />
                    {contactInfo.cityLine}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Mail className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Email</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1 hover:text-terracotta-600 transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Phone className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">
                    {language === 'IT' ? 'Telefono e WhatsApp' : 'Phone and WhatsApp'}
                  </h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1">
                    {contactInfo.phone} - WhatsApp {contactInfo.whatsapp}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Clock className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">
                    {language === 'IT' ? 'Orari segreteria' : 'Office Hours'}
                  </h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1">
                    {language === 'IT' ? contactInfo.hoursIT : contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-travertine-50 border border-travertine-300 p-8 md:p-12 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal">
                      {language === 'IT' ? 'Richiesta corso' : 'Course Inquiry'}
                    </h3>
                    <p className="text-xs text-charcoal-800 font-light">
                      {language === 'IT'
                        ? 'Questo modulo prepara il messaggio. Puoi includere viaggio individuale, esigenze LGBTQ+, accessibilita o dettagli di arrivo.'
                        : 'This form prepares your message. You can include solo travel, LGBTQ+ considerations, accessibility needs, or arrival details.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        {language === 'IT' ? 'Nome e cognome' : 'Your Full Name'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'IT' ? 'Esempio: Anna Rossi' : 'Example: Anna Rossi'}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        {language === 'IT' ? 'Email' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anna@example.com"
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="program" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        {language === 'IT' ? 'Formato del corso' : 'Course Format'}
                      </label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        {officialCourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {language === 'IT' ? course.italianName : course.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="timing" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        {language === 'IT' ? 'Periodo preferito' : 'Preferred Timing'}
                      </label>
                      <select
                        id="timing"
                        value={formData.timing}
                        onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        <option value="flexible">{language === 'IT' ? 'Date flessibili' : 'Flexible dates'}</option>
                        <option value="spring">{language === 'IT' ? 'Primavera' : 'Spring'}</option>
                        <option value="summer">{language === 'IT' ? 'Estate' : 'Summer'}</option>
                        <option value="autumn">{language === 'IT' ? 'Autunno' : 'Autumn'}</option>
                        <option value="winter">{language === 'IT' ? 'Inverno' : 'Winter'}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="duration" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        {language === 'IT' ? 'Durata' : 'Duration'}
                      </label>
                      <select
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        <option value="1week">{language === 'IT' ? '1 settimana' : '1 week'}</option>
                        <option value="2weeks">{language === 'IT' ? '2 settimane' : '2 weeks'}</option>
                        <option value="3weeks">{language === 'IT' ? '3 settimane' : '3 weeks'}</option>
                        <option value="4weeks">{language === 'IT' ? '4 settimane' : '4 weeks'}</option>
                        <option value="custom">{language === 'IT' ? 'Durata su misura' : 'Custom duration'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                      {language === 'IT' ? 'Obiettivi, livello e alloggio' : 'Goals, Level, and Accommodation'}
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t('form.field_interest_placeholder')}
                      className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal-950 hover:bg-olive-800 text-travertine-50 py-4 text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-500 flex items-center justify-center gap-2.5 rounded-none shadow-md mt-4 cursor-pointer"
                  >
                    {t('form.submit')}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <CheckCircle className="w-14 h-14 text-olive-800 stroke-[1.25]" />
                  <div className="space-y-3">
                    <span className="font-serif italic text-base text-terracotta-600 block">
                      Grazie, {formData.name}.
                    </span>
                    <h3 className="font-serif text-3xl text-charcoal-950 font-light">
                      {language === 'IT' ? 'Richiesta annotata' : 'Inquiry Noted'}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-800 font-light max-w-md leading-relaxed">
                      {language === 'IT' ? 'Contatta la scuola a ' : 'Please contact the school at '}
                      <span className="font-medium text-charcoal-950">{contactInfo.email}</span>
                      {language === 'IT' ? ' oppure WhatsApp ' : ' or WhatsApp '}
                      <span className="font-medium text-charcoal-950">{contactInfo.whatsapp}</span>
                      {language === 'IT' ? ' per confermare la prenotazione.' : ' for booking confirmation.'}
                    </p>
                  </div>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs tracking-widest font-semibold uppercase text-terracotta-600 hover:text-terracotta-700 underline underline-offset-4 decoration-1 mt-6"
                  >
                    {language === 'IT' ? 'Modifica richiesta' : 'Modify inquiry'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
