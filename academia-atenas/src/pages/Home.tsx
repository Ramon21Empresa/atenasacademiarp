import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Dumbbell, PersonStanding, Sparkles, Flame, Apple, Droplets, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, CheckCircle2, QrCode, CreditCard, Banknote, Wifi, Waves } from 'lucide-react';

export default function Home() {
  const phrases = [
    "A consistência é mais importante do que a intensidade no treino.",
    "Hoje foi dia de treino pesado, foco total!",
    "Sem disciplina, não há resultado.",
    "Cada repetição te deixa mais próximo do seu objetivo.",
    "O corpo alcança o que a mente acredita.",
    "Treine cansado, mas nunca desista.",
    "Resultados vêm para quem não desiste no meio do caminho.",
    "Dor de hoje, força de amanhã.",
    "Não é sobre ser melhor que os outros, é sobre ser melhor que ontem.",
    "O único treino ruim é aquele que você não fez."
  ];

  const rotatingWords = ['ATENAS', 'SAÚDE', 'ATENAS', 'FORÇA', 'ATENAS', 'DISCIPLINA', 'ATENAS', 'TRANSFORMAÇÃO', 'ATENAS', 'SUPERAÇÃO', 'ATENAS', 'BEM ESTAR'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(wordInterval);
    };
  }, [phrases.length, rotatingWords.length]);

  const units = [
    { id: 'independencia', name: 'Unidade Independencia', address: 'R. Bolívia, 2095 - Ribeirão Preto', desc: 'Estrutura completa com musculação climatizada, estacionamento, Wi-Fi, hall de recepção e banheiros com vestiários.', img: '/unidades/independencia/indep-frente.jpg' },
    { id: 'caramuru', name: 'Unidade Caramuru', address: 'Avenida Caramuru, 567 - Jardim Sumaré', desc: 'Equipamentos de última geração, estacionamento gratuito, Wi-Fi, hall de recepção e banheiros com vestiários.', img: '/unidades/caramuru/caramuru frente drone.jpg' },
    { id: 'novo-mundo', name: 'Unidade Novo Mundo', address: 'R. Dr. Morais Lima, 606 - Jardim Anhanguera', desc: 'Foco em musculação e ginástica, Wi-Fi, hall de recepção e banheiros com vestiários.', img: '/unidades/novo-mundo/novo-mundo-fora.png' },
    { id: 'vila-tiberio', name: 'Unidade Vila Tibério', address: 'R. Cel. Luiz da Cunha, 436 - Vila Tibério', desc: 'Musculação, ginástica, estacionamento, Wi-Fi, hall de recepção e banheiros com vestiários.', img: '/unidades/vila-tiberio/vilatiberio-frente.jpg' },
    { id: 'campos-eliseos', name: 'Unidade Campos Elíseos', address: 'R. Antônio Milena, 1449 - Campos Elíseos', desc: 'Ambiente premium com musculação, ginástica, Wi-Fi, hall de recepção e banheiros com vestiários.', img: '/unidades/campos-eliseos/campos-eliseos-frente.jpg' },
  ];

  const scrollToUnits = () => {
    document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: <Dumbbell className="text-brand-green" size={40} />, title: 'Musculação', desc: 'Equipamentos modernos com acompanhamento de treinadores especializados em ganho de massa e força.' },
    { icon: <Sparkles className="text-brand-green" size={40} />, title: 'Pilates', desc: 'Aulas de flexibilidade, equilíbrio e fortalecimento do core com instrutores certificados.' },
    { icon: <Flame className="text-brand-green" size={40} />, title: 'Ginástica', desc: 'Aulas dinâmicas e motivadoras para melhorar seu condicionamento físico e queimar calorias.' },
    { icon: <Waves className="text-brand-green" size={40} />, title: 'Natação', desc: 'Piscina climatizada para treinos de natação e atividades aquáticas para todas as idades.' },
    { icon: <Droplets className="text-brand-green" size={40} />, title: 'Banheiros e vestiários', desc: 'Infraestrutura completa com chuveiros e armários para sua comodidade pós-treino.' },
    { icon: <Wifi className="text-brand-green" size={40} />, title: 'Wifi', desc: 'Conectividade gratuita em todas as nossas unidades para você treinar sempre conectado.' },
    { icon: <PersonStanding className="text-brand-green" size={40} />, title: 'Cardio e Aeróbica', desc: 'Área com esteiras, bicicletas e elípticos para melhorar sua resistência cardiovascular.' },
    { icon: <Apple className="text-brand-green" size={40} />, title: 'Hall de recepção', desc: 'Ambiente acolhedor e profissional para receber nossos alunos com todo conforto.' },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://assets-cdn.wellhub.com/images/?su=https%3A%2F%2Fimages.partners.gympass.com%2Fimage%2Fpartners%2F4d96cfe7-bef4-4903-b6e5-75b73a1dc630%2Flg_32e030d7-21db-4913-af71-6b35e2430168_2666242.jpg&h=360" 
            className="w-full h-full object-cover opacity-30"
            alt="Gym Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-darkBg/50 to-darkBg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter relative block select-none w-full"
              style={{
                color: '#ffffff',
                textShadow: `
                  0 1px 0 #ccc, 
                  0 2px 0 #c9c9c9, 
                  0 3px 0 #bbb, 
                  0 4px 0 #b9b9b9, 
                  0 5px 0 #aaa, 
                  0 6px 1px rgba(0,0,0,.1), 
                  0 0 5px rgba(0,0,0,.1), 
                  0 1px 3px rgba(0,0,0,.3), 
                  0 3px 5px rgba(0,0,0,.2), 
                  0 5px 10px rgba(0,0,0,.25), 
                  0 10px 10px rgba(0,0,0,.2), 
                  0 20px 20px rgba(0,0,0,.15)
                `
              }}
            >
              <div className="relative flex justify-center items-center min-h-[1.2em]">
                <AnimatePresence>
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, scale: 0.5, zIndex: 0 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 10 }}
                    exit={{ opacity: 0, scale: 1.5, zIndex: 0, filter: 'blur(10px)' }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                    className="absolute left-0 right-0 mx-auto text-center"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Spacer to maintain layout height/width based on longest word */}
                <span className="invisible pointer-events-none px-4">TRANSFORMAÇÃO</span>
              </div>
            </h1>
            <div className="min-h-[6rem] md:min-h-[7rem] flex items-center justify-center mb-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl"
                >
                  {phrases[currentPhraseIndex].split(' ').map((word, i) => {
                    const cleanWord = word.toLowerCase().replace(/[.,!]/g, '');
                    const isHighlighted = ['consistência', 'disciplina', 'resultado', 'resultados', 'objetivo', 'foco', 'força', 'mente'].includes(cleanWord);
                    return (
                      <span key={i} className={isHighlighted ? "text-brand-green font-bold italic" : ""}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToUnits} className="bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                Explore Nossas Unidades
              </button>
              <button onClick={scrollToPlans} className="border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-black transition-all uppercase tracking-widest text-sm">
                Ver Planos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO PLANOS */}
      <section id="planos" className="py-20 md:py-32 container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            NOSSOS <span className="text-brand-green">PLANOS</span>
          </h2>
          <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Escolha a melhor opção para sua rotina</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PLANO MENSAL */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-darkCard/40 p-8 sm:p-12 rounded-[2.5rem] border border-white/5 hover:border-brand-blue/30 transition-all group"
          >
            <h3 className="text-2xl font-bold mb-2 text-brand-blue">PLANO MENSAL</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-mono font-bold">R$ 165,00</span>
              <span className="text-slate-500 text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Musculação e Ginástica inclusas
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Treino na unidade cadastrada
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Sem taxa de cancelamento
              </li>
            </ul>
            
            <div className="mb-10 p-5 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">Formas de Pagamento</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center gap-2 text-brand-green">
                  <QrCode size={20} />
                  <span className="text-[9px] font-bold uppercase tracking-tighter">PIX</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-brand-green">
                  <CreditCard size={20} />
                  <span className="text-[9px] font-bold uppercase tracking-tighter">Cartão</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-brand-green">
                  <Banknote size={20} />
                  <span className="text-[9px] font-bold uppercase tracking-tighter">Dinheiro</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 italic">Aceitamos Crédito, Débito, PIX ou Dinheiro</p>
            </div>
            <button onClick={scrollToUnits} className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-brand-blue hover:text-black transition-all uppercase tracking-widest text-xs">
              SELECIONAR UNIDADE
            </button>
          </motion.div>

          {/* PLANO RECORRENTE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue/5 p-8 sm:p-12 rounded-[2.5rem] border-2 border-brand-blue relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 bg-brand-blue text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
              MAIS VANTAJOSO
            </div>
            <h3 className="text-2xl font-bold mb-2 text-brand-blue">PLANO RECORRENTE</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-mono font-bold">R$ 129,00</span>
              <span className="text-slate-500 text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Musculação e Ginástica inclusas
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Acesso a TODAS as unidades da rede
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                Débito automático (Recorrente)
              </li>
            </ul>

            <div className="mb-10 p-5 bg-brand-blue/10 rounded-2xl border border-brand-blue/20">
              <p className="text-[10px] uppercase tracking-widest text-brand-blue mb-4 font-bold">Forma de Pagamento</p>
              <div className="flex items-center gap-3 text-white">
                <CreditCard size={24} className="text-brand-blue" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight">Somente Cartão de Crédito</p>
                  <p className="text-[10px] text-slate-400 italic">Cadastro automático e cobrança mensal</p>
                </div>
              </div>
            </div>
            <button onClick={scrollToUnits} className="w-full py-4 bg-brand-blue text-black font-bold rounded-2xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
              SELECIONAR UNIDADE
            </button>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO UNIDADES */}
      <section id="unidades" className="py-20 md:py-32 container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            NOSSAS <span className="text-brand-blue">UNIDADES</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {units.map((unit, index) => (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-darkCard/40 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-green/50 transition-all duration-500"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={unit.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={unit.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-darkCard to-transparent opacity-60"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-brand-green transition-colors">{unit.name}</h3>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(unit.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs text-brand-green font-mono mb-4 flex items-center gap-2 hover:underline hover:text-brand-green/80 transition-all"
                >
                  <MapPin size={14} /> {unit.address}
                </a>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">{unit.desc}</p>
                <Link to={`/unidade/${unit.id}`} className="w-full py-3 sm:py-4 bg-brand-green/10 text-brand-green border border-brand-green/20 font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] sm:text-xs">
                  VER DETALHES <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32 bg-darkCard/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              NOSSOS <span className="text-brand-blue">SERVIÇOS</span>
            </h2>
            <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Infraestrutura completa para sua transformação física</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-10 px-4 -mx-4 no-scrollbar">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] sm:min-w-[350px] snap-center bg-darkCard/60 p-8 sm:p-10 rounded-3xl border border-white/5 text-center hover:bg-darkCard transition-colors group"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4 text-brand-green/30">
            <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <div className="w-4 h-1 bg-current rounded-full"></div>
            <div className="w-4 h-1 bg-current rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SEÇÃO TEMPO DE AULA */}
      <section id="duracao" className="py-20 md:py-32 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              DURAÇÃO DAS <span className="text-brand-green">AULAS</span>
            </h2>
            <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Planeje seu tempo com a gente</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'Pilates', 
                duration: '1 hora', 
                img: 'https://images.unsplash.com/photo-1518611012118-29617b0ccdfe?auto=format&fit=crop&w=600&q=80',
                desc: 'Foco em controle, precisão e respiração.'
              },
              { 
                title: 'Ginástica', 
                duration: '40 min', 
                img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
                desc: 'Energia alta e queima calórica intensa.'
              },
              { 
                title: 'Natação', 
                duration: '50 min - 1 hora', 
                img: 'https://images.unsplash.com/photo-1530549387074-d562cb0e50e9?auto=format&fit=crop&w=600&q=80',
                desc: 'Treino completo de baixo impacto.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group rounded-3xl overflow-hidden aspect-[4/5]"
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-black mb-2 text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 text-brand-green mb-4">
                    <CheckCircle2 size={18} />
                    <span className="font-mono font-bold text-xl">{item.duration}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-20 md:py-32 container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            ENTRE EM <span className="text-brand-green">CONTATO</span>
          </h2>
          <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Estamos sempre prontos para ajudar você!</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center group">
            <a href="tel:1636283440" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <Phone size={28} className="text-brand-green group-hover:text-white" />
              </div>
            </a>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Telefone</h3>
            <a href="tel:1636283440" className="text-brand-blue hover:text-brand-green transition-colors font-mono text-sm sm:text-base">(16) 3628-3440</a>
          </div>

          <div className="text-center group">
            <a href="mailto:atendimento@academiaatenas.com.br" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <Mail size={28} className="text-brand-green group-hover:text-white" />
              </div>
            </a>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
            <a href="mailto:atendimento@academiaatenas.com.br" className="text-brand-blue hover:text-brand-green transition-colors font-mono text-[10px] sm:text-xs break-all">atendimento@academiaatenas.com.br</a>
          </div>

          <div className="text-center group">
            <a href="https://instagram.com/atenasacademia" target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <Instagram size={28} className="text-brand-green group-hover:text-white" />
              </div>
            </a>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Instagram</h3>
            <a href="https://instagram.com/atenasacademia" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-green transition-colors font-mono text-sm sm:text-base">@atenasacademia</a>
          </div>

          <div className="text-center group">
            <a href="https://facebook.com/atenasacademia.oficial" target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <Facebook size={28} className="text-brand-green group-hover:text-white" />
              </div>
            </a>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Facebook</h3>
            <a href="https://facebook.com/atenasacademia.oficial" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-green transition-colors font-mono text-[10px] sm:text-xs break-all">@atenasacademia.oficial</a>
          </div>
        </div>
      </section>
    </div>
  );
}
