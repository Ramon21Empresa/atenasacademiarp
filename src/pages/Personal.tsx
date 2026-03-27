import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';

export default function Personal() {
  const trainers = [
    {
      name: 'Carlos Silva',
      specialty: 'Musculação & Força',
      desc: 'Com 10 anos de experiência, Carlos é especialista em ganho de massa muscular e desenvolvimento de força. Certificado em Personal Training e Nutrição Esportiva.',
      benefits: [
        'Programas de hipertrofia personalizados',
        'Técnicas avançadas de treinamento',
        'Consultoria nutricional integrada',
        'Acompanhamento mensal com testes',
      ],
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Marina Costa',
      specialty: 'Yoga & Pilates',
      desc: 'Especialista em flexibilidade e bem-estar, Marina tem 8 anos de experiência. Certificada em Yoga, Pilates e desenvolvimento postural.',
      benefits: [
        'Aulas personalizadas de yoga',
        'Pilates para reabilitação e força',
        'Correção postural avançada',
        'Meditação e respiração guiada',
      ],
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ricardo Santos',
      specialty: 'Funcional & HIIT',
      desc: 'Especializado em treinamento funcional e HIIT, Ricardo tem 7 anos de carreira. Certificado em Performance Atlética e Treinamento em Circuito.',
      benefits: [
        'Treinos funcionais de alta intensidade',
        'Programas HIIT de curta duração',
        'Condicionamento cardiovascular',
        'Aulas em grupo dinâmicas',
      ],
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Juliana Ferreira',
      specialty: 'Nutrição & Emagrecimento',
      desc: 'Nutricionista e personal trainer com 6 anos de experiência. Especializada em emagrecimento inteligente e saúde metabólica.',
      benefits: [
        'Planos nutricionais personalizados',
        'Treinos para emagrecimento efetivo',
        'Análise de composição corporal',
        'Educação alimentar contínua',
      ],
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Beatriz Lima',
      specialty: 'Reabilitação & Postura',
      desc: 'Fisioterapeuta e personal trainer com foco em recuperação de lesões e melhora da mobilidade articular.',
      benefits: [
        'Treinos de reabilitação motora',
        'Exercícios de mobilidade',
        'Prevenção de dores crônicas',
        'Acompanhamento terapêutico',
      ],
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'André Luiz',
      specialty: 'Cross Training',
      desc: 'Especialista em treinos de alta intensidade e levantamento de peso olímpico.',
      benefits: [
        'WODs personalizados',
        'Técnica de LPO',
        'Condicionamento extremo',
        'Preparação para competições',
      ],
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Fernanda Rocha',
      specialty: 'Dança & Ritmos',
      desc: 'Transforme seu corpo se divertindo com aulas de ritmos e coreografias dinâmicas.',
      benefits: [
        'Queima calórica elevada',
        'Coordenação motora',
        'Alívio do estresse',
        'Expressão corporal',
      ],
      img: 'https://images.unsplash.com/photo-1518611012118-2969c636022d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Gustavo Henrique',
      specialty: 'Artes Marciais',
      desc: 'Faixa preta dedicado ao ensino de técnicas de defesa pessoal e condicionamento de lutador.',
      benefits: [
        'Técnicas de Muay Thai',
        'Defesa pessoal',
        'Agilidade e reflexo',
        'Disciplina mental',
      ],
      img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Patrícia Souza',
      specialty: 'Terceira Idade',
      desc: 'Foco em longevidade, autonomia e qualidade de vida para o público sênior.',
      benefits: [
        'Fortalecimento ósseo',
        'Equilíbrio e prevenção de quedas',
        'Socialização e saúde mental',
        'Exercícios de baixo impacto',
      ],
      img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Lucas Oliveira',
      specialty: 'Bodybuilding',
      desc: 'Especialista em preparação física para estética avançada e competições de fisiculturismo.',
      benefits: [
        'Simetria muscular',
        'Posing e apresentação',
        'Dieta de competição',
        'Suplementação avançada',
      ],
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30 blur-sm"
            alt="Gym Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-darkBg/50 to-darkBg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              Nossos <span className="text-brand-green italic">Personal Trainers</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Profissionais certificados prontos para transformar seu corpo e vida com acompanhamento individualizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO TREINADORES */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-4 sm:mb-6 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden h-64 sm:h-72 relative border border-white/5">
                <img src={trainer.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={trainer.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tighter group-hover:text-brand-green transition-colors">{trainer.name}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed font-light text-xs sm:text-sm line-clamp-3">
                {trainer.desc}
              </p>
              <ul className="space-y-2">
                {trainer.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-300 font-light">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-green/20 rounded-full flex items-center justify-center shrink-0">
                      <Check size={8} className="text-brand-green" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 text-center bg-darkCard/20 p-10 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-tighter">Pronto para sua transformação?</h2>
          <a 
            href="https://wa.me/551636283440" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto bg-brand-blue text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-widest text-xs items-center justify-center gap-3"
          >
            <MessageCircle size={20} /> Entre em Contato com Nossos Trainers
          </a>
        </div>
      </section>
    </div>
  );
}
