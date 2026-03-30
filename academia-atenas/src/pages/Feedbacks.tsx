import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Star, Dumbbell, Sparkles, Flame, Apple, Heart } from 'lucide-react';

export default function Feedbacks() {
  const navigate = useNavigate();
  
  const handleStartTransformation = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('unidades');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const feedbacks = [
    { name: 'João Silva', time: 'Há 1 ano na Academia', text: '"Consegui ganhar 12kg de massa muscular em 8 meses com o programa personalizado do Carlos. Nunca imaginei que seria possível! A disciplina e os resultados falam por si."', goal: 'Ganho de Massa', icon: <Dumbbell size={16} />, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Maria Oliveira', time: 'Há 6 meses na Academia', text: '"As aulas de yoga com a Marina mudaram minha vida! Melhorei minha postura, flexibilidade e, principalmente, minha paz de espírito. Recomendo para todos!"', goal: 'Bem-estar e Flexibilidade', icon: <Sparkles size={16} />, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
    { name: 'Pedro Costa', time: 'Há 3 meses na Academia', text: '"Os treinos HIIT do Ricardo são intensos, mas os resultados são incríveis! Perdi 8kg e minha resistência aumentou muito. A Academia Atenas é o melhor investimento que já fiz."', goal: 'Emagrecimento e Condicionamento', icon: <Flame size={16} />, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ana Santos', time: 'Há 9 meses na Academia', text: '"A Juliana revolucionou minha relação com comida e exercício. Perdi 15kg de forma saudável e sustentável. Hoje tenho mais energia e me sinto muito melhor comigo mesma!"', goal: 'Emagrecimento Inteligente', icon: <Apple size={16} />, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' },
    { name: 'Carlos Mendes', time: 'Há 4 meses na Academia', text: '"Infraestrutura impecável, profissionais qualificados e ambiente acolhedor. A Academia Atenas superou todas as minhas expectativas. Já indiquei 5 amigos!"', goal: 'Saúde Geral', icon: <Heart size={16} />, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Beatriz Lima', time: 'Há 7 meses na Academia', text: '"Voltei a treinar depois de 10 anos parada. O atendimento humanizado da Academia fez toda a diferença. Agora estou mais forte, saudável e feliz do que nunca!"', goal: 'Retomada de Treinos', icon: <Star size={16} />, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30 blur-sm"
            alt="Gym Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-darkBg/50 to-darkBg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
              Histórias de <span className="text-brand-green italic">Transformação</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Ouça os depoimentos de nossos clientes que alcançaram seus objetivos com dedicação e nosso suporte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO FEEDBACKS */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-20 md:mb-24">
          {feedbacks.map((fb, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-darkCard/40 p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-brand-green/30 transition-all group"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative shrink-0">
                  <img src={fb.img} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 object-cover border-2 border-brand-green/20" alt={fb.name} />
                  <div className="absolute -bottom-1 -right-1 bg-brand-green text-white rounded-full p-1">
                    <Star size={10} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-brand-green transition-colors">{fb.name}</h3>
                  <p className="text-brand-green/70 text-[10px] font-mono uppercase tracking-widest">{fb.time}</p>
                </div>
              </div>
              <div className="flex mb-4 sm:mb-6 text-brand-green">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="mr-1" />)}
              </div>
              <p className="text-slate-300 mb-6 sm:mb-8 italic leading-relaxed text-base sm:text-lg font-light">
                {fb.text}
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                <span className="text-brand-green">{fb.icon}</span> Objetivo: {fb.goal}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
          {[
            { value: '+13mil', label: 'Clientes Satisfeitos' },
            { value: '98%', label: 'Taxa de Satisfação' },
            { value: '+35', label: 'Anos de Excelência' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`text-center p-8 sm:p-10 bg-darkCard/20 rounded-3xl border border-white/5 ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
            >
              <div className="text-5xl sm:text-6xl font-bold text-brand-green mb-2 tracking-tighter">{stat.value}</div>
              <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-brand-green/5 p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border border-brand-green/10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-tighter">Você pode ser nossa próxima história de sucesso!</h2>
          <button 
            onClick={handleStartTransformation}
            className="w-full sm:w-auto bg-brand-green text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-widest text-xs"
          >
            Começar Agora a Sua Transformação
          </button>
        </div>
      </section>
    </div>
  );
}
