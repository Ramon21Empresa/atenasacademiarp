import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Facebook, MessageCircle, Send, CheckCircle2, MapPin, Upload, Paperclip, X } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    subject: 'Sugestão',
    otherSubject: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const units = [
    { name: 'Independencia', whatsapp: '(16) 3628-3440' },
    { name: 'Caramuru', whatsapp: '(16) 3441-1233' },
    { name: 'Novo Mundo', whatsapp: '(16) 3618-4070' },
    { name: 'Vila Tibério', whatsapp: '(16) 99139-2034' },
    { name: 'Campos Elíseos', whatsapp: '(16) 3442-0368' },
  ];

  const subjects = [
    'Sugestão',
    'Reclamação',
    'Trabalhe Conosco',
    'Parceria',
    'Dúvida Geral',
    'Outros'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', city: '', subject: 'Sugestão', otherSubject: '', message: '' });
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-darkCard/30">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6"
          >
            Entre em Contato <span className="text-brand-green italic">Conosco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Dúvidas, sugestões ou propostas de trabalho? Estamos prontos para ouvir você.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-darkCard/40 p-8 md:p-12 rounded-[2.5rem] border border-white/5"
            >
              <h2 className="text-2xl mb-8">Envie uma <span className="text-brand-green">Mensagem</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">E-mail</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Cidade onde mora</label>
                  <input 
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Sua cidade"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Selecione o Assunto / Tema</label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subj) => (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => setFormData({...formData, subject: subj})}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                          formData.subject === subj 
                            ? 'bg-brand-green border-brand-green text-white shadow-lg shadow-brand-green/20' 
                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>

                  {formData.subject === 'Outros' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 space-y-2"
                    >
                      <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Especifique o Assunto</label>
                      <input 
                        required
                        type="text"
                        value={formData.otherSubject}
                        onChange={(e) => setFormData({...formData, otherSubject: e.target.value})}
                        placeholder="Qual o motivo do contato?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
                      />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Sua Mensagem</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Anexar Arquivo (Currículo, Portfólio, etc.)</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand-green transition-all group"
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {selectedFile ? (
                      <div className="flex items-center gap-3 text-brand-green">
                        <Paperclip size={20} />
                        <span className="text-sm font-medium">{selectedFile.name}</span>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="p-1 hover:bg-white/10 rounded-full text-slate-400"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload size={24} className="text-slate-500 group-hover:text-brand-green transition-colors" />
                        <span className="text-sm text-slate-400">Clique para selecionar ou arraste um arquivo</span>
                        <span className="text-[10px] text-slate-600 uppercase tracking-tighter">PDF, DOCX, JPG (Máx. 5MB)</span>
                      </>
                    )}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ${
                    formStatus === 'success' 
                      ? 'bg-brand-green text-white' 
                      : 'bg-brand-blue text-white hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>ENVIAR MENSAGEM <Send size={16} /></>
                  )}
                  {formStatus === 'sending' && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formStatus === 'success' && (
                    <>MENSAGEM ENVIADA! <CheckCircle2 size={16} /></>
                  )}
                </button>
              </form>
            </motion.div>

            {/* CONTACT INFO */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl mb-8">Nossos <span className="text-brand-blue">Canais</span></h2>
                
                <div className="grid sm:grid-cols-1 gap-8">
                  <div className="bg-darkCard/20 p-6 rounded-3xl border border-white/5 flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand-green" size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">E-mail Geral</h4>
                      <a href="mailto:atendimento@academiaatenas.com.br" className="text-brand-blue text-sm hover:underline break-all">
                        atendimento@academiaatenas.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a href="https://instagram.com/atenasacademia" target="_blank" rel="noopener noreferrer" className="flex-1 bg-darkCard/20 p-6 rounded-3xl border border-white/5 flex items-center gap-4 hover:border-brand-green/30 transition-all group">
                    <Instagram className="text-slate-400 group-hover:text-brand-green transition-colors" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Instagram</p>
                      <p className="text-sm font-bold">@atenasacademia</p>
                    </div>
                  </a>
                  <a href="https://facebook.com/atenasacademia.oficial" target="_blank" rel="noopener noreferrer" className="flex-1 bg-darkCard/20 p-6 rounded-3xl border border-white/5 flex items-center gap-4 hover:border-brand-green/30 transition-all group">
                    <Facebook className="text-slate-400 group-hover:text-brand-green transition-colors" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Facebook</p>
                      <p className="text-sm font-bold">@atenasacademia</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-green/5 p-8 rounded-[2.5rem] border border-brand-green/10"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="text-brand-green" size={24} /> WhatsApp por Unidade
                </h3>
                <div className="grid gap-4">
                  {units.map((unit) => (
                    <a 
                      key={unit.name}
                      href={`https://wa.me/55${unit.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-darkCard/40 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-brand-green" />
                        <span className="text-sm font-bold">{unit.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-brand-green transition-colors">{unit.whatsapp}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
