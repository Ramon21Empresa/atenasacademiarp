import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, MessageCircle, Facebook, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className, footer }: { className?: string, footer?: boolean }) => (
  <div className={`flex items-center ${footer ? 'justify-center' : ''}`}>
    <svg 
      viewBox="0 0 450 160" 
      className={className || (footer ? "h-12 sm:h-20 w-auto" : "h-10 sm:h-14 w-auto")} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Text "atenas" */}
      <text 
        x="0" 
        y="110" 
        fill="#00AEEF" 
        style={{ 
          font: 'italic 900 110px sans-serif',
          letterSpacing: '-6px'
        }}
      >
        atenas
      </text>
      {/* Text "academia" */}
      <text 
        x="440" 
        y="150" 
        fill="#004A99" 
        textAnchor="end"
        style={{ 
          font: 'italic 700 45px sans-serif',
          letterSpacing: '1px'
        }}
      >
        academia
      </text>
    </svg>
  </div>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Unidades', path: '/#unidades', isAnchor: true },
    { name: 'Planos', path: '/#planos', isAnchor: true },
    { name: 'Personal', path: '/personal', isAnchor: false },
    { name: 'Feedbacks', path: '/feedbacks', isAnchor: false },
    { name: 'Serviços', path: '/#servicos', isAnchor: true },
    { name: 'Contato', path: '/#contato', isAnchor: true },
  ];

  const handleNavClick = (link: any) => {
    setIsMenuOpen(false);
    if (link.isAnchor) {
      if (location.pathname === '/') {
        const element = document.getElementById(link.path.replace('/#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.path.replace('/#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(link.path);
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-brand-green selection:text-white">
      {/* HEADER */}
      <header className="fixed w-full z-50 bg-darkCard/70 backdrop-blur-md border-b border-white/10">
        <div className="bg-brand-blue/10 border-b border-white/5 py-1 hidden sm:block">
          <div className="container mx-auto px-4 sm:px-6 flex justify-end items-center gap-4">
            <a href="tel:1636283440" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-brand-green transition-colors flex items-center gap-1">
              <Phone size={10} /> (16) 3628-3440
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="shrink-0"
          >
            <Logo className="h-10 sm:h-12 w-auto" />
          </Link>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-medium uppercase text-[10px] xl:text-xs tracking-widest">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`hover:text-brand-green transition-colors uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-green' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={() => {
                if (location.pathname.startsWith('/unidade/')) {
                  navigate('/');
                } else {
                  handleNavClick({ path: '/#unidades', isAnchor: true });
                }
              }}
              className="bg-brand-green text-white px-4 sm:px-6 py-2 rounded-full font-bold text-[10px] sm:text-xs hover:scale-105 transition-transform uppercase tracking-wider whitespace-nowrap"
            >
              {location.pathname.startsWith('/unidade/') ? 'VOLTAR' : 'MATRICULE-SE'}
            </button>
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-darkBg border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-sm uppercase tracking-[0.2em] hover:text-brand-green text-left font-bold"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-white/5">
                  <a href="tel:1636283440" className="text-xs uppercase tracking-widest text-slate-400 hover:text-brand-green transition-colors flex items-center gap-2">
                    <Phone size={14} /> (16) 3628-3440
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center bg-darkBg">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mb-8 inline-block"
          >
            <Logo className="h-12 sm:h-16 w-auto" footer />
          </Link>
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">
            © 2026 Academia Atenas. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/atenasacademia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com/atenasacademia.oficial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://wa.me/551636283440" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
