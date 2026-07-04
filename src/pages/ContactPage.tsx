import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Liaison Concierge
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Schedule a private <br />
            <span className="italic text-olive-800">study consultation.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Every stay begins with a private conversation about your goals, preferred pace, housing needs, and ideal time in Ascoli.
          </p>
        </div>
      </section>

      {/* Main Form and Location Details Column */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Block (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
                Direct Contact
              </span>
              <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
                Reach our administration inside Palazzo Sgariglia.
              </h2>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                We welcome thoughtful learners, professionals, and travel advisors looking to arrange tailored Italian study in Ascoli Piceno.
              </p>
            </div>

            {/* Practical list info */}
            <div className="space-y-6 pt-6 border-t border-travertine-200">
              <div className="flex gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <MapPin className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal-950">The Palazzo Office</h4>
                  <p className="text-xs text-charcoal-850 font-light leading-relaxed mt-1">
                    Palazzo Sgariglia, Piazza Ventidio Basso 12 <br />
                    63100 Ascoli Piceno, Marche, Italy
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Mail className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal-950">General Inquiries</h4>
                  <p className="text-xs text-charcoal-850 font-light leading-relaxed mt-1 hover:text-terracotta-600 transition-colors">
                    concierge@accademia-ascoli.it
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Phone className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal-950">Administrative Office</h4>
                  <p className="text-xs text-charcoal-850 font-light leading-relaxed mt-1">
                    +39 0736 250 821
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-travertine-200 p-2.5 border border-travertine-300/40 shrink-0">
                  <Clock className="w-4 h-4 text-olive-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal-950">Office Hours</h4>
                  <p className="text-xs text-charcoal-850 font-light leading-relaxed mt-1">
                    Monday - Friday: 09:00 - 17:00 (CET)
                  </p>
                </div>
              </div>
            </div>

            {/* Note block */}
            <div className="bg-olive-50 p-6 border-l-4 border-olive-800/80 space-y-2">
              <h5 className="text-[10px] tracking-widest uppercase font-bold text-olive-800">
                A Safe & Inclusive Haven
              </h5>
              <p className="text-[11px] text-olive-900 font-light leading-relaxed">
                We celebrate diversity. All background profiles, solo travelers, and members of the LGBTQ+ community will find a warm, helpful, and collaborative family awaiting them inside Ascoli Piceno.
              </p>
            </div>
          </div>

          {/* Right Block (7 columns) Form Card */}
          <div className="lg:col-span-7 bg-travertine-100 border border-travertine-200 p-8 md:p-12 shadow-xl relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSendMessage}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal">
                      Liaison Correspondence
                    </h3>
                    <p className="text-xs text-charcoal-850 font-light">
                      Please enter your contact details below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Clara Thorne"
                        className="w-full bg-travertine-50 border border-travertine-300 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
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
                        placeholder="clara@domain.com"
                        className="w-full bg-travertine-50 border border-travertine-300 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (415) 555-0192"
                      className="w-full bg-travertine-50 border border-travertine-300 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, learning pace, and ideal stay duration..."
                      className="w-full bg-travertine-50 border border-travertine-300 px-4 py-3 text-xs md:text-sm text-charcoal-950 focus:outline-none focus:border-olive-800 transition-colors rounded-none placeholder-charcoal-800/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal-950 hover:bg-olive-800 text-travertine-50 py-4 text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-500 flex items-center justify-center gap-2 rounded-none cursor-pointer"
                  >
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <CheckCircle className="w-14 h-14 text-olive-800 stroke-[1.25]" />
                  <div className="space-y-3">
                    <span className="font-serif italic text-base text-terracotta-600 block">
                      Grazie Mille, {formData.name}.
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal-950 font-light">
                      Correspondence Sent
                    </h3>
                    <p className="text-xs text-charcoal-850 font-light max-w-sm leading-relaxed">
                      Our liaison has reserved your correspondence. We will reply to <span className="font-semibold text-charcoal-950">{formData.email}</span> within 24 hours to coordinate your custom call.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold tracking-widest uppercase text-terracotta-600 hover:text-terracotta-700 underline underline-offset-4 decoration-1 mt-6"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
