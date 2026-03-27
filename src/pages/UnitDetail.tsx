import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Clock, CheckCircle2, Phone, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, QrCode, CreditCard, Banknote } from 'lucide-react';

const unitData: Record<string, any> = {
  independencia: {
    name: 'Unidade Independencia',
    address: 'R. Bolívia, 2095 - Ribeirão Preto',
    photos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['Musculação', 'Ginástica', 'Pilates (Valor à parte)', 'Natação (Valor à parte)', 'Lutas (Valor à parte)', 'Estacionamento', 'Wi-Fi', 'Hall de recepção', 'Banheiros e Vestiários'],
    schedule: [
      { day: 'Segunda - Sexta', time: '05:30 - 22:00' },
      { day: 'Sábado e Feriados', time: '09:00 - 13:00' },
      { day: 'Domingo', time: 'Fechado' },
    ],
    plans: [
      { name: 'Plano Mensal', price: 'R$ 165,00', features: ['Musculação e Ginástica', 'Treine na unidade cadastrada'] },
      { name: 'Plano Recorrente', price: 'R$ 129,00', features: ['Musculação e Ginástica', 'Acesso a todas as unidades da rede'] },
    ],
    contact: '(16) 3628-3440',
  },
  caramuru: {
    name: 'Unidade Caramuru',
    address: 'Avenida Caramuru, 567 - Jardim Sumaré',
    photos: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521575107034-e3ffa9c07300?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['Musculação', 'Ginástica', 'Estacionamento Grátis', 'Wi-Fi', 'Hall de recepção', 'Banheiros e Vestiários'],
    schedule: [
      { day: 'Segunda - Sexta', time: '05:30 - 23:30' },
      { day: 'Sábado e Feriados', time: '09:00 - 14:00' },
      { day: 'Domingo', time: '09:00 - 13:00' },
    ],
    plans: [
      { name: 'Plano Mensal', price: 'R$ 165,00', features: ['Musculação e Ginástica', 'Treine na unidade cadastrada'] },
      { name: 'Plano Recorrente', price: 'R$ 129,00', features: ['Musculação e Ginástica', 'Acesso a todas as unidades da rede'] },
    ],
    contact: '(16) 3628-3440',
  },
  'novo-mundo': {
    name: 'Unidade Novo Mundo',
    address: 'R. Dr. Morais Lima, 606 - Jardim Anhanguera',
    photos: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['Musculação', 'Ginástica', 'Pilates (Valor à parte)', 'Natação (Valor à parte)', 'Wi-Fi', 'Hall de recepção', 'Banheiros e Vestiários'],
    schedule: [
      { day: 'Segunda - Sexta', time: '05:30 - 22:00' },
      { day: 'Sáb, Dom e Feriados', time: '09:00 - 13:00' },
    ],
    plans: [
      { name: 'Plano Mensal', price: 'R$ 165,00', features: ['Musculação e Ginástica', 'Treine na unidade cadastrada'] },
      { name: 'Plano Recorrente', price: 'R$ 129,00', features: ['Musculação e Ginástica', 'Acesso a todas as unidades da rede'] },
    ],
    contact: '(16) 3628-3440',
  },
  'vila-tiberio': {
    name: 'Unidade Vila Tibério',
    address: 'R. Cel. Luiz da Cunha, 436 - Vila Tibério',
    photos: [
      'https://images.unsplash.com/photo-1485886657642-1f3b7fbf24c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518611012118-2969c636022d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['Musculação', 'Ginástica', 'Estacionamento', 'Wi-Fi', 'Hall de recepção', 'Banheiros e Vestiários'],
    schedule: [
      { day: 'Segunda - Sexta', time: '05:30 - 22:00' },
      { day: 'Sábado e Feriados', time: '09:00 - 13:00' },
      { day: 'Domingo', time: 'Fechado' },
    ],
    plans: [
      { name: 'Plano Mensal', price: 'R$ 165,00', features: ['Musculação e Ginástica', 'Treine na unidade cadastrada'] },
      { name: 'Plano Recorrente', price: 'R$ 129,00', features: ['Musculação e Ginástica', 'Acesso a todas as unidades da rede'] },
    ],
    contact: '(16) 3628-3440',
  },
  'campos-eliseos': {
    name: 'Unidade Campos Elíseos',
    address: 'R. Antônio Milena, 1449 - Campos Elíseos',
    photos: [
      'https://images.unsplash.com/photo-1521575107034-e3ffa9c07300?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590239926044-23678869796e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    ],
    services: ['Musculação', 'Ginástica', 'Wi-Fi', 'Hall de recepção', 'Banheiros e Vestiários'],
    schedule: [
      { day: 'Segunda - Sexta', time: '05:30 - 22:00' },
      { day: 'Sábado e Feriados', time: '09:00 - 13:00' },
      { day: 'Domingo', time: 'Fechado' },
    ],
    plans: [
      { name: 'Plano Mensal', price: 'R$ 165,00', features: ['Musculação e Ginástica', 'Treine na unidade cadastrada'] },
      { name: 'Plano Recorrente', price: 'R$ 129,00', features: ['Musculação e Ginástica', 'Acesso a todas as unidades da rede'] },
    ],
    contact: '(16) 3628-3440',
  },
};

export default function UnitDetail() {
  const { id } = useParams<{ id: string }>();
  const unit = id ? unitData[id] : null;
  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkBg text-white pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unidade não encontrada</h1>
          <Link to="/" className="text-brand-green hover:underline">Voltar para a Home</Link>
        </div>
      </div>
    );
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % unit.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + unit.photos.length) % unit.photos.length);
  };

  return (
    <div className="min-h-screen bg-darkBg text-white pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-8">
        <div className="absolute inset-0 z-0">
          <img 
            src={unit.photos[currentPhoto]} 
            className="w-full h-full object-cover opacity-30 blur-md transition-all duration-1000"
            alt={unit.name}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-darkBg/50 to-darkBg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-green hover:gap-3 transition-all mb-8 font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> VOLTAR PARA A HOME
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              <span className="text-brand-blue">UNIDADE </span>
              <span className="text-brand-green">{unit.name.replace('Unidade ', '')}</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={18} className="text-brand-green shrink-0" />
                <span className="text-xs sm:text-sm uppercase tracking-widest">{unit.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC CAROUSEL SECTION */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group shadow-2xl shadow-brand-blue/10 border border-white/5">
            <motion.div 
              key={currentPhoto}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full h-full"
            >
              <img 
                src={unit.photos[currentPhoto]} 
                alt={unit.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Navigation Arrows */}
            {unit.photos.length > 1 && (
              <>
                <button 
                  onClick={prevPhoto}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all border border-white/10 z-20"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextPhoto}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all border border-white/10 z-20"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Photo Counter */}
                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 font-mono text-[10px] sm:text-xs z-20">
                  <span className="text-brand-green">{currentPhoto + 1}</span> / {unit.photos.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails / Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {unit.photos.map((photo: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentPhoto(idx)}
                className={`relative w-16 h-10 sm:w-24 sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${idx === currentPhoto ? 'border-brand-green scale-110 shadow-lg shadow-brand-green/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <img src={photo} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* ROW 1: MAP & SCHEDULE */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-[2rem] overflow-hidden border border-white/10 h-64 sm:h-80 shadow-2xl shadow-brand-green/5 relative group mb-6">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(unit.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
                title="Localização da Unidade"
                className="transition-all duration-500 group-hover:brightness-100"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-brand-green/20 rounded-[2rem]"></div>
            </div>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(unit.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-brand-green hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] sm:text-xs border border-brand-green/30 px-8 py-4 rounded-full hover:bg-brand-green/10 w-full"
            >
              TRAÇAR ROTA NO MAPA
            </a>
          </motion.div>

          {/* SCHEDULE & SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 bg-darkCard/30 p-8 rounded-[2rem] border border-white/5"
          >
            <div>
              <h3 className="text-brand-green font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-6 flex items-center gap-2">
                <Clock size={16} /> HORÁRIOS
              </h3>
              <div className="space-y-4 w-full">
                {unit.schedule.map((item: any, idx: number) => (
                  <div key={idx} className="flex flex-row items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-slate-400 font-medium text-[10px] sm:text-xs uppercase tracking-widest pr-4">
                      {item.day}
                    </span>
                    <span className={`font-mono text-[11px] sm:text-sm font-bold ${
                      item.time === 'Fechado' 
                        ? 'text-red-400' 
                        : 'text-brand-green'
                    } whitespace-nowrap text-right`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[10px] sm:text-xs text-brand-green/60 italic font-medium leading-relaxed text-center max-w-[320px] mx-auto">
                * Todos os alunos Atenas têm acesso liberado para treinar nas unidades abertas aos domingos.
              </p>
            </div>
            <div>
              <h3 className="text-brand-green font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} /> SERVIÇOS
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {unit.services.map((service: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                    <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: PLANS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 uppercase tracking-tighter text-center">PLANOS DISPONÍVEIS</h2>
          <div className={`grid gap-6 sm:gap-8 ${unit.plans.length === 1 ? 'max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
            {unit.plans.map((plan: any, idx: number) => (
              <div key={idx} className="p-8 sm:p-10 rounded-[2rem] bg-darkCard border border-white/10 hover:border-brand-green/50 transition-all group hover:shadow-2xl hover:shadow-brand-green/5">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-brand-blue group-hover:text-brand-green transition-colors">{plan.name}</h4>
                    <div className="text-3xl sm:text-4xl font-mono font-bold mt-2">{plan.price}<span className="text-xs sm:text-sm text-slate-500 font-sans">/mês</span></div>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-bold">Pagamento</p>
                  {plan.name === 'Plano Mensal' ? (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-300">Aceitamos todas as formas de pagamento:</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1.5 text-brand-green">
                          <QrCode size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">PIX</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-brand-green">
                          <CreditCard size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Cartão</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-brand-green">
                          <Banknote size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Dinheiro</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-slate-500 italic">Crédito, Débito, PIX ou Dinheiro</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-300">Somente Cartão de Crédito:</p>
                      <div className="flex items-center gap-2 text-brand-blue">
                        <CreditCard size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Recorrência Automática</span>
                      </div>
                      <p className="text-[9px] text-slate-500 italic">Fica cadastrado e debita automaticamente todo mês</p>
                    </div>
                  )}
                </div>
                <button className="w-full py-5 bg-brand-green text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs">
                  ASSINAR AGORA
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROW 3: CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-brand-blue/10 p-8 sm:p-12 rounded-[3rem] border border-brand-blue/20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 uppercase tracking-tighter">DÚVIDAS? FALE CONOSCO</h3>
            <p className="text-slate-400 text-sm uppercase tracking-widest">Estamos prontos para te ajudar a começar</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={`https://wa.me/${unit.contact.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all text-sm"
            >
              <MessageCircle size={24} /> WHATSAPP: {unit.contact}
            </a>
            <a 
              href={`tel:${unit.contact.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-3 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:border-brand-green/50 transition-all text-sm"
            >
              <Phone size={24} className="text-brand-green" /> {unit.contact}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
