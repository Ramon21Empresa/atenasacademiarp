import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Trophy, Target, Heart, Award, Waves, Smartphone, RefreshCw } from 'lucide-react';

export default function History() {
  const timeline = [
    {
      year: 'Anos 90',
      title: 'A Fundação',
      description: 'A marca Atenas começou a ganhar força no final da década de 90. A unidade da Vila Tibério é uma das pedras angulares da rede, consolidando o modelo de academia de bairro focada em musculação tradicional.',
      icon: <Calendar className="text-brand-green" size={24} />
    },
    {
      year: '2005 - 2012',
      title: 'Expansão Regional',
      description: 'Ciclo de expansão com a abertura das unidades Campos Elíseos e Jardim Sumaré (Av. Caramuru), estabelecendo a marca em regiões estratégicas de Ribeirão Preto.',
      icon: <Award className="text-brand-light-blue" size={24} />
    },
    {
      year: '2014 - 2016',
      title: 'Unidades Completas',
      description: 'Grande salto em infraestrutura com foco em atividades aquáticas. Inauguração da unidade Jardim Independência e consolidação da unidade Jardim Novo Mundo (2015).',
      icon: <Waves className="text-brand-blue" size={24} />
    },
    {
      year: '2018 - 2019',
      title: 'Modernização e Tecnologia',
      description: 'Atualização para equipamentos OriGym e digitalização total com o sistema EVO e aplicativo próprio, abandonando as fichas de papel.',
      icon: <Smartphone className="text-brand-green" size={24} />
    },
    {
      year: '2021 - 2023',
      title: 'Adaptação e Novos Formatos',
      description: 'Pós-pandemia com foco em climatização, "boom" de aulas coletivas (Zumba, Ballet Fitness) e consolidação como referência para usuários Wellhub (Gympass).',
      icon: <RefreshCw className="text-brand-light-blue" size={24} />
    },
    {
      year: '2024 - Hoje',
      title: 'Experiência do Cliente',
      description: 'Reforma visual das fachadas e recepções para uma identidade moderna e unificada, mantendo a administração centralizada e o padrão de excelência.',
      icon: <Target className="text-brand-blue" size={24} />
    }
  ];

  return (
    <div className="bg-darkBg overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30"
            alt="History Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/80 to-transparent w-full md:w-3/4 lg:w-2/3 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-brand-green"></span>
              <span className="text-brand-green font-black uppercase tracking-[0.3em] text-xs sm:text-sm">Tradição e Evolução</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              NOSSA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-light-blue italic">HISTÓRIA</span>
            </h1>
            <p className="text-slate-400 max-w-xl text-lg sm:text-xl font-medium">
              Mais de três décadas transformando vidas através do esporte e da saúde em Ribeirão Preto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER & MANAGEMENT SECTION */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-20 sm:mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square max-w-md mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" 
                  alt="Gestão Academia Atenas" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 sm:p-10 rounded-3xl hidden lg:block shadow-xl shadow-brand-green/20">
                <p className="text-white font-black text-4xl sm:text-5xl italic leading-none">35+</p>
                <p className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-black mt-2">Anos de Tradição</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-5xl font-black mb-6 sm:mb-8 tracking-tighter">NOSSA <span className="text-brand-light-blue">GESTÃO</span></h2>
              <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base">
                A Academia Atenas é gerida por uma administração centralizada que preza pela padronização e excelência em todas as suas unidades.
              </p>
              
              <p className="text-slate-400 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
                Nossa estrutura organizacional é focada em manter o modelo de academia "de bairro" com infraestrutura de grandes redes, garantindo que cada aluno receba atenção personalizada e suporte técnico de qualidade.
              </p>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-brand-blue/10 p-2 sm:p-3 rounded-xl">
                    <Users className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase tracking-wider text-[10px] sm:text-xs">Comunidade</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Vidas transformadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-brand-green/10 p-2 sm:p-3 rounded-xl">
                    <Heart className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase tracking-wider text-[10px] sm:text-xs">Paixão</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Amor pelo movimento</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TEAM SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-darkCard p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/5"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 tracking-tighter">EQUIPE <span className="text-brand-green">TÉCNICA</span></h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                A rede Atenas é conhecida por manter um quadro de colaboradores que se tornam figuras conhecidas nos bairros onde atuam.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              <div className="space-y-4 sm:space-y-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-black transition-all">
                  <Trophy size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-white font-black uppercase tracking-tight text-lg sm:text-xl">Coordenadores</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Profissionais de Educação Física com longa trajetória na rede, responsáveis por montar os cronogramas de aulas coletivas e supervisionar os instrutores.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <Target size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-white font-black uppercase tracking-tight text-lg sm:text-xl">Instrutores</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  O perfil da academia foca em profissionais que fazem o acompanhamento em sala, diferenciando-se do modelo self-service das academias low-cost.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-light-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-light-blue group-hover:text-black transition-all">
                  <Heart size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-white font-black uppercase tracking-tight text-lg sm:text-xl">Apoio</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Recepcionistas e consultores de vendas que possuem autonomia para negociar planos e convênios locais como o Wellhub.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-24 bg-darkCard/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase">NOSSA <span className="text-brand-green">JORNADA</span></h2>
            <p className="text-slate-500 uppercase tracking-[0.2em] text-xs font-bold">Evoluindo com você desde os anos 90</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
            
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-brand-green font-black text-3xl mb-4">{item.year}</span>
                      <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                      <p className={`text-slate-500 text-base font-medium leading-relaxed max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-darkCard border border-white/10 shadow-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-darkCard p-8 rounded-3xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl mb-4">Missão</h3>
              <p className="text-slate-400 text-sm">
                Proporcionar saúde e qualidade de vida através da atividade física orientada, em um ambiente motivador e familiar.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-darkCard p-8 rounded-3xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl mb-4">Visão</h3>
              <p className="text-slate-400 text-sm">
                Ser a rede de academias mais admirada de Ribeirão Preto pela excelência técnica e pelo impacto positivo na vida das pessoas.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-darkCard p-8 rounded-3xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-brand-light-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-brand-light-blue" size={32} />
              </div>
              <h3 className="text-xl mb-4">Valores</h3>
              <p className="text-slate-400 text-sm">
                Ética, compromisso com o resultado, inovação constante, respeito à individualidade e paixão pelo movimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
