import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function InquiryForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'humanist',
    timing: 'autumn2026',
    duration: '2weeks',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="inquire" className="py-24 md:py-32 bg-travertine-100 relative overflow-hidden scroll-mt-20">
      {/* Absolute background accent decor */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Inquiry Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
                The Selection Process
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
                Begin your <br />
                <span className="italic">Italian chapter</span>.
              </h2>
              <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
                We believe in the alignment of students, teachers, and environment. We do not support automated cart checkouts. Instead, every application begins with a brief, friendly conversation to understand your learning goals and style preferences.
              </p>
            </div>

            {/* Address & Contact Items */}
            <div className="space-y-6 pt-6 border-t border-travertine-300/60">
              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <MapPin className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Accademia Italiana</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1">
                    Palazzo Sgariglia, Piazza Ventidio Basso 12 <br />
                    63100 Ascoli Piceno, Marche, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Mail className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Concierge Desk</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1 hover:text-terracotta-600 transition-colors">
                    concierge@accademia-ascoli.it
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Phone className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Italian Liaison</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-1">
                    +39 0736 250 821
                  </p>
                </div>
              </div>
            </div>

            {/* Note on Inclusivity */}
            <div className="bg-olive-50 p-6 border-l-4 border-olive-800/80 space-y-2">
              <h5 className="text-[10px] tracking-widest uppercase font-bold text-olive-800">
                A Welcoming Sanctuary
              </h5>
              <p className="text-[11px] text-olive-900 font-light leading-relaxed">
                Our academy is a proud LGBTQ+ friendly space and celebrates diversity in all backgrounds. We cultivate an inclusive, safe, and warm environment for all global travellers.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Success Frame */}
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
                      Sojourn Inquiry
                    </h3>
                    <p className="text-xs text-charcoal-800 font-light">
                      Please declare your parameters below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="E.g., Clara Thorne"
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="E.g., clara@domain.com"
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Program Selection */}
                    <div className="space-y-2">
                      <label htmlFor="program" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Bespoke Path
                      </label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        <option value="humanist">L’Umanista (The Humanist)</option>
                        <option value="convivio">Il Convivio (The Banquet)</option>
                        <option value="artisan">L’Artigiano (The Artisan)</option>
                        <option value="custom">Custom Sabbatical</option>
                      </select>
                    </div>

                    {/* Preferred Timing */}
                    <div className="space-y-2">
                      <label htmlFor="timing" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Preferred Season
                      </label>
                      <select
                        id="timing"
                        value={formData.timing}
                        onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        <option value="autumn2026">Autumn 2026 (Sept - Nov)</option>
                        <option value="winter2026">Winter 2026 (Dec - Feb)</option>
                        <option value="spring2027">Spring 2027 (March - May)</option>
                        <option value="summer2027">Summer 2027 (June - Aug)</option>
                      </select>
                    </div>

                    {/* Preferred Duration */}
                    <div className="space-y-2">
                      <label htmlFor="duration" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Stay Duration
                      </label>
                      <select
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none appearance-none"
                      >
                        <option value="1week">1 Week Immersive</option>
                        <option value="2weeks">2 Weeks Classic</option>
                        <option value="4weeks">4 Weeks Deep Dive</option>
                        <option value="sabbatical">Custom Sabbatical (5+ weeks)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Story */}
                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                      Share your goals & aesthetic vision
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="E.g., I am a landscape architect seeking to learn Italian to research Marche’s historical gardens..."
                      className="w-full bg-travertine-100 border border-travertine-300/60 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-charcoal-950 hover:bg-olive-800 text-travertine-50 py-4 text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-500 flex items-center justify-center gap-2.5 rounded-none shadow-md mt-4 cursor-pointer"
                  >
                    Request Consultation
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
                      Grazie di cuore, {formData.name}.
                    </span>
                    <h3 className="font-serif text-3xl text-charcoal-950 font-light">
                      Inquiry Received
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-800 font-light max-w-md leading-relaxed">
                      Our boutique concierge has reserved your temporary entry. We will review your vision statement and contact you via <span className="font-medium text-charcoal-950">{formData.email}</span> within 24 hours to schedule a matching video call.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs tracking-widest font-semibold uppercase text-terracotta-600 hover:text-terracotta-700 underline underline-offset-4 decoration-1 mt-6"
                  >
                    Modify parameters
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
