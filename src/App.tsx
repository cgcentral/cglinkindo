import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
  Heart,
  Share2,
  Briefcase,
  Network,
  ShieldCheck,
  BarChart3,
  Building2,
  ShoppingCart,
  Zap,
  MonitorPlay,
  Plane,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Quote,
  Linkedin,
  Instagram,
  MoreVertical,
  X,
  ChevronDown
} from "lucide-react";
import { 
  ServiceFundamentalPage, 
  ServiceDigitalPage, 
  ServicePartnershipsPage, 
  ServiceFinancePage, 
  ServiceHCPage 
} from "./ServicePages";
import { CareersPage, BlogPage } from "./AdditionalPages";
import { VisionMissionPage, PilarBisnisPage, FundingPortfolioPage } from "./AboutPages";

export type PageType = 'home' | 'about' | 'contact' | 'service-fundamental' | 'service-digital' | 'service-partnerships' | 'service-finance' | 'service-hc' | 'careers' | 'blog' | 'about-vision' | 'about-pillars' | 'about-funding';

const servicesData = [
  {
    id: 'fundamental',
    title: 'Strategy & Operations',
    desc: 'Membangun fondasi bisnis yang kuat, dari legalitas, struktur organisasi, hingga model bisnis yang scalable untuk memastikan pertumbuhan jangka panjang.'
  },
  {
    id: 'digital',
    title: 'Digital & Marketing',
    desc: 'Strategi pemasaran digital berbasis data untuk mempercepat pertumbuhan, akuisisi pelanggan, dan dominasi pasar di era digital.'
  },
  {
    id: 'partnerships',
    title: 'Innovation & Development',
    desc: 'Memperluas jaringan, membangun kemitraan strategis, dan membuka peluang pasar baru untuk akselerasi ekspansi bisnis Anda.'
  },
  {
    id: 'finance',
    title: 'Finance & Tax',
    desc: 'Pengelolaan keuangan perusahaan yang komprehensif, strategi pendanaan, dan optimalisasi arus kas untuk kesehatan finansial.'
  },
  {
    id: 'hc',
    title: 'Human Capital',
    desc: 'Pengembangan talenta, struktur kompensasi, dan manajemen SDM strategis untuk menciptakan tim yang produktif dan berkinerja tinggi.'
  }
];

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: PageType, setCurrentPage: (p: PageType) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('fundamental');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[88px] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}
      onMouseLeave={() => {
        setIsServicesMenuOpen(false);
        setIsAboutMenuOpen(false);
      }}
    >
      <div className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transition-all duration-1000 ${scrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
      
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
      >
        <div className={`w-11 h-11 rounded-xl overflow-hidden border transition-all duration-500 flex items-center justify-center ${scrolled ? 'border-neutral-100 bg-white shadow-sm' : 'border-neutral-200 bg-white shadow-sm'} group-hover:scale-105`}>
          <img 
            src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
            alt="CGLINK Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className={`font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-500 ${scrolled ? 'text-neutral-900' : 'text-neutral-900'} group-hover:text-indigo-600`}>CGLINK</span>
      </div>
      
      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center h-full gap-8 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-neutral-500' : 'text-neutral-500'}`}>
        <div className="h-full flex items-center relative">
          <button 
            onMouseEnter={() => {
              setIsAboutMenuOpen(true);
              setIsServicesMenuOpen(false);
            }}
            className={`flex items-center gap-1 transition-colors h-full ${scrolled ? 'hover:text-indigo-600' : 'hover:text-indigo-600'} ${isAboutMenuOpen || (currentPage.startsWith('about-')) ? 'text-indigo-600' : ''}`}
          >
            About Us <ChevronDown className={`w-3 h-3 transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isAboutMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`absolute top-full left-0 w-64 border shadow-2xl rounded-b-3xl overflow-hidden ${scrolled ? 'bg-white border-neutral-100' : 'bg-white border-neutral-100'}`}
                onMouseLeave={() => setIsAboutMenuOpen(false)}
              >
                <div className="flex flex-col py-3">
                  <button
                    onClick={() => { setCurrentPage('about-vision'); window.scrollTo(0, 0); setIsAboutMenuOpen(false); }}
                    className={`text-left px-8 py-4 transition-colors border-b ${scrolled ? 'hover:bg-neutral-50 text-neutral-500 hover:text-indigo-600 border-neutral-50' : 'hover:bg-neutral-50 text-neutral-500 hover:text-indigo-600 border-neutral-50'}`}
                  >
                    Visi dan Misi
                  </button>
                  <button
                    onClick={() => { setCurrentPage('about-pillars'); window.scrollTo(0, 0); setIsAboutMenuOpen(false); }}
                    className={`text-left px-8 py-4 transition-colors ${scrolled ? 'hover:bg-neutral-50 text-neutral-500 hover:text-indigo-600' : 'hover:bg-neutral-50 text-neutral-500 hover:text-indigo-600'}`}
                  >
                    Pilar Bisnis
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="h-full flex items-center relative">
          <button 
            onMouseEnter={() => {
              setIsServicesMenuOpen(true);
              setIsAboutMenuOpen(false);
            }}
            className={`flex items-center gap-1 transition-colors h-full ${scrolled ? 'hover:text-indigo-600' : 'hover:text-indigo-600'} ${isServicesMenuOpen || (currentPage.startsWith('service-')) ? 'text-indigo-600' : ''}`}
          >
            Capabilities <ChevronDown className={`w-3 h-3 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <button 
          onClick={() => { setCurrentPage('about-funding'); window.scrollTo(0, 0); }}
          className={`${currentPage === 'about-funding' ? 'text-indigo-600' : ''} ${scrolled ? 'hover:text-indigo-600' : 'hover:text-indigo-600'} transition-colors h-full flex items-center`}
        >
          Portfolio
        </button>

        <button 
          onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }}
          className={`${currentPage === 'careers' ? 'text-indigo-600' : ''} ${scrolled ? 'hover:text-indigo-600' : 'hover:text-indigo-600'} transition-colors h-full flex items-center`}
        >
          Careers
        </button>
      </div>

      <button 
        onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
        className={`hidden md:block px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${scrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-neutral-900 text-white hover:bg-black/80'}`}
      >
        Work with us
      </button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isServicesMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className={`absolute top-full left-0 w-full border-b shadow-2xl cursor-default pb-12 ${scrolled ? 'bg-white border-neutral-100' : 'bg-white border-neutral-100'}`}
            onMouseEnter={() => setIsServicesMenuOpen(true)}
            onMouseLeave={() => setIsServicesMenuOpen(false)}
          >
            <div className="container mx-auto px-6 md:px-12 pt-16 flex gap-20">
              <div className="w-4/12">
                <div className="mb-10">
                  <h3 className={`text-4xl font-display font-black uppercase tracking-tighter mb-4 ${scrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>CAPABILITIES</h3>
                  <p className={`font-medium max-w-xs ${scrolled ? 'text-neutral-500' : 'text-neutral-500'}`}>Solusi strategis untuk transformasi bisnis Anda di era digital.</p>
                </div>
                <div className={`flex flex-col gap-1 border-l-2 ${scrolled ? 'border-neutral-100' : 'border-neutral-100'}`}>
                  {servicesData.map(s => (
                    <button
                      key={s.id}
                      onMouseEnter={() => setActiveService(s.id)}
                      onClick={() => { 
                        setCurrentPage(('service-' + s.id) as PageType); 
                        window.scrollTo(0, 0);
                        setIsServicesMenuOpen(false);
                      }}
                      className={`text-left px-8 py-4 transition-all text-[11px] font-black uppercase tracking-widest ${activeService === s.id ? 'text-indigo-600 border-l-2 border-indigo-600 -ml-[2px]' : (scrolled ? 'text-neutral-400 hover:text-indigo-600' : 'text-neutral-400 hover:text-indigo-600')}`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-8/12 flex items-center">
                <div className={`p-12 rounded-[3.5rem] border w-full relative overflow-hidden group ${scrolled ? 'bg-neutral-50 border-neutral-100' : 'bg-neutral-50 border-neutral-100'}`}>
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -mr-32 -mt-32`}></div>
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className={`text-3xl font-display font-black mb-6 uppercase tracking-tighter ${scrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>
                      {servicesData.find(s => s.id === activeService)?.title}
                    </h4>
                    <p className={`text-xl leading-relaxed font-medium mb-10 max-w-2xl ${scrolled ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {servicesData.find(s => s.id === activeService)?.desc}
                    </p>
                    <button 
                      onClick={() => { 
                        setCurrentPage(('service-' + activeService) as PageType); 
                        window.scrollTo(0, 0);
                        setIsServicesMenuOpen(false);
                      }}
                      className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 ${scrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-neutral-900 text-white hover:bg-black/80'}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Toggle */}
      <button 
        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-white' : 'text-neutral-900'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-0 right-0 border-b p-8 flex flex-col gap-8 md:hidden shadow-2xl max-h-[85vh] overflow-y-auto rounded-b-[2.5rem] ${scrolled ? 'bg-black border-white/5' : 'bg-white border-neutral-100'}`}
          >
             <div className="flex flex-col gap-4">
              <span className={`text-[10px] font-black uppercase tracking-widest ${scrolled ? 'text-neutral-500' : 'text-neutral-400'}`}>Main Menu</span>
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
                  className={`text-left text-3xl font-display font-black uppercase tracking-tighter ${scrolled ? 'text-white' : 'text-neutral-900'}`}
                >
                  Home
                </button>
                <div className="space-y-4">
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${scrolled ? 'text-neutral-500' : 'text-neutral-400'}`}>About</div>
                  <button onClick={() => { setCurrentPage('about-vision'); setIsMobileMenuOpen(false); }} className={`block text-xl font-bold ${scrolled ? 'text-neutral-300' : 'text-neutral-900'}`}>Visi & Misi</button>
                  <button onClick={() => { setCurrentPage('about-pillars'); setIsMobileMenuOpen(false); }} className={`block text-xl font-bold ${scrolled ? 'text-neutral-300' : 'text-neutral-900'}`}>Pilar Bisnis</button>
                </div>
                <button onClick={() => { setCurrentPage('about-funding'); setIsMobileMenuOpen(false); }} className={`text-left text-2xl font-display font-black uppercase tracking-tighter ${scrolled ? 'text-white' : 'text-neutral-900'}`}>Portfolio</button>
                <button onClick={() => { setCurrentPage('careers'); setIsMobileMenuOpen(false); }} className={`text-left text-2xl font-display font-black uppercase tracking-tighter ${scrolled ? 'text-white' : 'text-neutral-900'}`}>Careers</button>
                <button onClick={() => { setCurrentPage('blog'); setIsMobileMenuOpen(false); }} className={`text-left text-2xl font-display font-black uppercase tracking-tighter ${scrolled ? 'text-white' : 'text-neutral-900'}`}>Blog</button>
              </div>
            </div>
            <button 
              onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl ${scrolled ? 'bg-white text-black' : 'bg-neutral-900 text-white'}`}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BusinessStats = () => {
  const stats = [
    { label: "Business Pillars", value: "05", icon: <Building2 className="w-4 h-4" /> },
    { label: "Portfolio Sectors", value: "04", icon: <ShoppingCart className="w-4 h-4" /> },
    { label: "Active Network", value: "500", icon: <Users className="w-4 h-4" /> },
    { label: "Excellence rate", value: "100%", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section className="py-20 relative z-10 bg-white border-y border-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="px-8 py-12 md:py-16 text-center group"
            >
              <div className="text-6xl md:text-8xl font-display font-black text-neutral-900 tracking-tighter mb-4 group-hover:text-indigo-600 transition-colors duration-500">{s.value}</div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-indigo-600">{s.icon}</span>
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestInsights = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const insights = [
    {
      title: "Supporting the Expansion of Indonesia's SMEs with Long-Term Strategies",
      date: "May 10, 2024",
      category: "Strategy",
      image: "https://cglinkindonesia.com/wp-content/uploads/2026/03/Desain-tanpa-judul-2.png"
    },
    {
      title: "Investing in Innovation: Boosting the Success of Local SMEs",
      date: "May 08, 2024",
      category: "Innovation",
      image: "https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg"
    }
  ];

  return (
    <section className="py-32 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 text-neutral-900">LATEST INSIGHTS</h2>
            <p className="text-xl text-neutral-500 font-medium">Analisis mendalam mengenai ekosistem bisnis, investasi, dan strategi pertumbuhan UMKM di Indonesia.</p>
          </div>
          <button 
            onClick={() => { setCurrentPage('blog'); window.scrollTo(0, 0); }}
            className="group flex items-center gap-3 text-neutral-900 font-bold bg-neutral-100 px-6 py-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Read All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => { setCurrentPage('blog'); window.scrollTo(0, 0); }}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-neutral-100">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-900 border border-neutral-100">
                    {insight.category}
                  </span>
                </div>
              </div>
              <div className="text-neutral-400 text-xs mb-3 font-bold tracking-widest uppercase">CGLINK News — {insight.date}</div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 group-hover:text-black transition-colors leading-[1.1] tracking-tight">
                {insight.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestorRelations = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  return (
    <section className="py-24 relative z-10 bg-white text-black overflow-hidden group">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-[120px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-none">
              INVESTOR <br />
              RELATIONSHIP
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-lg">
              Kami membuka peluang bagi mitra strategis dan investor untuk berkolaborasi dalam ekosistem bisnis yang legal, logis, dan halal. Mari bersama-sama mengakselerasi pertumbuhan ekonomi melalui investasi yang berintegritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => { setCurrentPage('about-funding'); window.scrollTo(0, 0); }}
                className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                Explore Portfolio <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
                className="px-8 py-4 border border-black/10 rounded-full font-bold hover:bg-black/5 transition-all"
              >
                Inquiry Partnership
              </button>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://cglinkindonesia.com/wp-content/uploads/2026/03/Desain-tanpa-judul-2.png" 
                alt="Investor Relationship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 glass-panel bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-xl hidden md:block">
              <div className="text-3xl font-display font-bold text-black mb-1 leading-none tracking-tighter">SYIRKAH MODEL</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold font-mono">Islamic Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};const SectorMarquee = () => {
  const sectors = ["FINANCE", "LOGISTICS", "RETAIL", "TECH", "MANUFACTURING", "HOSPITALITY", "REAL ESTATE", "ENERGY"];
  return (
    <div className="py-12 bg-neutral-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-neutral-500/10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...sectors, ...sectors].map((s, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-7xl font-display font-black text-white/20 mx-12 tracking-tighter uppercase inline-block italic"
          >
            {s} •
          </span>
        ))}
      </div>
    </div>
  );
};

const BentoGridServices = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const items = [
    {
      id: 'fundamental',
      title: 'Strategy & Ops',
      span: 'md:col-span-2 md:row-span-2',
      bg: 'bg-neutral-900 text-white',
      desc: 'Membangun fondasi bisnis yang kuat dan scalable untuk pertumbuhan jangka panjang.',
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      id: 'digital',
      title: 'Digital Growth',
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-neutral-200 text-neutral-900',
      desc: 'Akselerasi pangsa pasar melalui ekosistem digital.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 'finance',
      title: 'Finance & Tax',
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-neutral-50 text-neutral-900',
      desc: 'Optimalisasi arus kas dan manajemen risiko.',
      icon: <BarChart3 className="w-8 h-8 text-neutral-900" />
    },
    {
      id: 'partnerships',
      title: 'Strategic Innovation',
      span: 'md:col-span-2 md:row-span-1',
      bg: 'bg-neutral-50 text-neutral-900',
      desc: 'Membuka peluang pasar baru melalui kemitraan strategis global.',
      icon: <Zap className="w-8 h-8 text-neutral-900" />
    }
  ];

  return (
    <section id="services-bento" className="py-32 bg-white relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 mb-8 uppercase leading-[0.85]">
            CORE <br />CAPABILITIES
          </h2>
          <p className="text-xl text-neutral-500 font-medium max-w-xl leading-relaxed">
            Kami mengintegrasikan keahlian lintas sektor untuk memberikan dampak nyata bagi setiap mitra bisnis kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => { setCurrentPage(('service-' + item.id) as PageType); window.scrollTo(0, 0); }}
              className={`${item.span} ${item.bg} p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-8">{item.icon}</div>
                  <h3 className="text-3xl font-display font-black uppercase tracking-tighter leading-none mb-4">{item.title}</h3>
                  <p className="opacity-70 font-medium text-lg leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-12 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest group-hover:gap-6 transition-all">
                  View Detail <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="bg-grid opacity-60" />
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Partnership for sustainable growth
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter leading-[0.85] mb-12 text-neutral-900 uppercase">
              BEYOND <br />
              <span className="text-indigo-600">BUSINESS</span> <br />
              VISION.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-xl leading-relaxed text-center md:text-left">
              Membangun masa depan bisnis melalui kolaborasi strategis yang berlandaskan prinsip legal, logis, dan halal.
            </p>
            <div className="w-px h-24 bg-neutral-100 hidden md:block" />
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => document.getElementById('services-bento')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-neutral-200/20"
              >
                Our Capabilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards Mockup for Hero */}
        <div className="mt-32 relative h-[400px] hidden lg:block">
           <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute left-0 top-0 w-80 p-8 rounded-[2.5rem] bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/50 rotate-[-4deg] z-20"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-display font-black text-neutral-900 mb-2 tracking-tighter">150%</div>
            <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Growth Potential</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 w-96 p-10 rounded-[3rem] bg-indigo-600 shadow-2xl shadow-indigo-200/20 z-10"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="text-white font-display font-black text-2xl tracking-tighter uppercase">CGLINK</div>
              <Globe className="w-6 h-6 text-indigo-200 animate-spin-slow" />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/20 rounded-full" />
              <div className="h-2 w-3/4 bg-white/20 rounded-full" />
              <div className="h-2 w-1/2 bg-white/20 rounded-full" />
            </div>
            <div className="mt-12 text-sm text-indigo-200 uppercase tracking-widest font-black">Strategic Partnership</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute right-0 top-20 w-80 p-8 rounded-[2.5rem] bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/50 rotate-[6deg] z-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white" />
                ))}
              </div>
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Experts Network</span>
            </div>
            <div className="text-xl font-bold text-neutral-900 leading-tight">Expert Advisory at your fingertips.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Grow",
      desc: "Meningkatkan kapabilitas melalui pengetahuan, sikap, dan mentalitas berlandaskan kepercayaan dan profesionalisme."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Share",
      desc: "Berbagi cerita, pengalaman, dan solusi dengan klien, mitra dan masyarakat secara adil, transparan, dan bertanggung jawab."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Contribute",
      desc: "Menciptakan dampak positif bagi klien, ekonomi, dan masyarakat melalui kegiatan yang berkelanjutan."
    }
  ];

  return (
    <section className="py-32 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-neutral-50 p-12 rounded-[2.5rem] hover:bg-neutral-100 transition-colors duration-500 group border border-neutral-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 text-neutral-900 group-hover:bg-black group-hover:text-white transition-all duration-500">
                {v.icon}
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-neutral-900 tracking-tight">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-lg">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section id="about" className="py-32 relative z-10 bg-neutral-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-black tracking-widest uppercase mb-6">Philosophy</div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-10 leading-none text-neutral-900">VISI</h2>
            <p className="text-2xl md:text-3xl text-neutral-600 leading-tight font-medium">
              "Menjadi mitra kolaborasi bisnis yang berlandaskan prinsip legal, logis, dan halal melalui produk, jasa, serta pengembangan bisnis profesional untuk menciptakan pertumbuhan dan manfaat berkelanjutan bagi seluruh pihak."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-xl shadow-neutral-200/50 border border-neutral-100"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-neutral-900">MISI</h2>
            <ul className="space-y-8">
              {[
                "Menyelenggarakan produk dan jasa bisnis yang legal, logis, dan halal.",
                "Menjadi mitra kolaborasi bisnis yang profesional dan saling menguntungkan.",
                "Memberikan layanan konsultasi dan solusi bisnis yang bernilai tambah.",
                "Mengembangkan bisnis dan peluang usaha baru secara profesional dan berkelanjutan.",
                "Menciptakan pertumbuhan dan manfaat yang berkelanjutan bagi seluruh pihak."
              ].map((m, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="mt-1 w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0 text-neutral-900 font-display font-bold">
                    0{i + 1}
                  </div>
                  <p className="text-lg text-neutral-500 leading-relaxed font-medium">{m}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC<{ setCurrentPage: (page: PageType) => void }> = ({ setCurrentPage }) => {
  const services = [
    {
      id: 'about-funding',
      title: "Funding Partnership",
      desc: "Pendanaan syariah berbasis syirkah, transparan dan berkeadilan, untuk mendukung pertumbuhan usaha."
    },
    {
      id: 'about-pillars',
      title: "Business Consulting",
      desc: "Konsultan bisnis yang membantu perusahaan menata pondasi usaha, mengelola keuangan & SDM, serta mengembangkan strategi digital untuk pertumbuhan berkelanjutan."
    },
    {
      id: 'about-funding',
      title: "Funding Acquisition",
      desc: "Pendanaan syariah untuk mengembangkan usaha baru maupun masuk ke bisnis yang sudah berjalan, dengan strategi ekspansi yang terukur."
    }
  ];

  return (
    <section id="services" className="py-32 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 text-neutral-900">LAYANAN UTAMA</h2>
          <p className="text-xl text-neutral-500 font-medium">Solusi komprehensif untuk pertumbuhan bisnis Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 p-10 rounded-[2.5rem] flex flex-col h-full hover:shadow-2xl transition-all duration-500 group border border-neutral-100"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-neutral-900 group-hover:text-black transition-colors">{s.title}</h3>
              <p className="text-neutral-500 leading-relaxed mb-10 flex-grow font-medium">{s.desc}</p>
              <button 
                onClick={() => { setCurrentPage(s.id as PageType); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 text-neutral-900 font-black tracking-tighter uppercase text-sm group-hover:text-black transition-colors mt-auto"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Founder Experienced & Visionary",
      desc: "Multi-sector experience (B2B, B2C, retail, energi, media, umroh)."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Extensive Network",
      desc: "Strong business & professional connections."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Syariah Partnership",
      desc: "Backed by Trust Solusi Syariah & Bisaro."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Systematic & Data-Driven",
      desc: "Research-based, structured business approach."
    }
  ];

  const lines = [
    { icon: <Building2 className="w-8 h-8" />, name: "B2B" },
    { icon: <Users className="w-8 h-8" />, name: "B2C" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "Retail & Wholesale" },
    { icon: <Zap className="w-8 h-8" />, name: "Energi" },
    { icon: <MonitorPlay className="w-8 h-8" />, name: "Media" },
    { icon: <Plane className="w-8 h-8" />, name: "Umroh" },
    { icon: <Share2 className="w-8 h-8" />, name: "Affiliate Program" },
  ];

  return (
    <section id="business-lines" className="py-32 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-16 text-neutral-900">WHY US?</h2>
            <div className="space-y-12">
              {reasons.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0 text-neutral-900 group-hover:bg-black group-hover:text-white transition-all duration-500 border border-neutral-100">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-neutral-900">{r.title}</h3>
                    <p className="text-neutral-500 leading-relaxed text-lg">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 p-12 rounded-[3.5rem] border border-neutral-100">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-neutral-900">Our Business Lines</h2>
            <p className="text-neutral-500 leading-relaxed mb-12 text-lg font-medium">
              CGLINK mengelola beragam lini usaha untuk menjawab kebutuhan pasar yang dinamis. Mulai dari B2B dan B2C, hingga retail, wholesale, serta sektor energi.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-neutral-100"
                >
                  <div className="text-neutral-400 group-hover:text-black transition-colors">
                    {l.icon}
                  </div>
                  <span className="font-bold text-sm text-neutral-900">{l.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pak Maulana",
      role: "Owner",
      company: "Karpetmasjidqu",
      text: "Semenjak dibantu tim CGLINK, alur bisnis jadi jauh lebih rapi. Dulu lumayan keteteran ngurus operasional sama keuangan barengan, sekarang udah ada sistem yang jelas. Bener-bener ngebantu banget buat scale up.",
      avatar: "https://picsum.photos/seed/maulana/100/100",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2"
    },
    {
      name: "Pak Adrian",
      role: "Owner",
      company: "Adrian Laptop",
      text: "Awalnya ragu pakai konsultan, tapi ternyata impact-nya kerasa banget di sales dan manajemen tim. Strategi digitalnya juga pas banget sama target market kita. Recommended banget lah pokoknya.",
      avatar: "https://picsum.photos/seed/adrian/100/100",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      name: "Bu Ica",
      role: "Owner",
      company: "Aimee",
      text: "Seneng banget bisa kolaborasi sama CGLINK. Pendekatannya asik, nggak kaku, tapi solusinya daging semua. Terutama soal perapihan pajak dan finance, sekarang jadi lebih tenang jalanin bisnis.",
      avatar: "https://picsum.photos/seed/ica/100/100",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      name: "Pak Ikra",
      role: "Owner",
      company: "Bisnis Property",
      text: "Di bisnis properti kan perputarannya lumayan kompleks ya. Tim CGLINK bantu banget buat bikin fundamental yang kuat. Analisa pasarnya tajam dan solusinya bener-bener praktis buat diterapin di lapangan.",
      avatar: "https://picsum.photos/seed/ikra/100/100",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative z-10 bg-neutral-50/50 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 text-neutral-900">WHAT PEOPLE SAY</h2>
            <div className="w-24 h-1 bg-black mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(200px,auto)]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white p-10 rounded-[2.5rem] flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden border border-neutral-100 ${t.colSpan} ${t.rowSpan}`}
            >
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-neutral-100 mb-8 group-hover:text-neutral-400 transition-colors" />
                <p className="text-xl text-neutral-600 leading-relaxed mb-10 font-medium">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10 mt-auto pt-8 border-t border-neutral-50">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover border border-neutral-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-neutral-900 text-sm tracking-tight">{t.name}</h4>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <span className="text-neutral-400 font-bold uppercase tracking-wider">{t.role}</span>
                    <span className="text-neutral-300 font-medium">@{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessCheckup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "87567d39-6aa5-4b31-b166-724fa2de1149");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-10 text-neutral-900 leading-none uppercase">
                BUSINESS <br/>
                <span className="text-indigo-600">CHECK-UP</span>
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
                Ambil langkah pertama untuk mengoptimalkan bisnis Anda. Isi form evaluasi singkat ini untuk mendapatkan insight awal mengenai potensi dan area perbaikan di perusahaan Anda.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6 text-indigo-600" />, text: "Identifikasi hambatan pertumbuhan" },
                  { icon: <BarChart3 className="w-6 h-6 text-indigo-600" />, text: "Dapatkan insight yang actionable" },
                  { icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, text: "Perkuat fundamental bisnis" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 text-neutral-600 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0 border border-neutral-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xl font-bold tracking-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl border border-neutral-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nama Lengkap</label>
                  <input type="text" name="name" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Perusahaan</label>
                  <input type="text" name="company" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="PT Inovasi" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email</label>
                <input type="email" name="email" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="businesspartner@cglinkindonesia.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Pesan Bisnis</label>
                <textarea name="message" required rows={4} className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Ceritakan singkat kebutuhan Anda..."></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Pesan terkirim! Kami akan segera menghubungi Anda melalui email/nomor tertera.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 text-xs flex items-start gap-3">
                  <X className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp.</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  'Kirim Pesan'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 relative z-10 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm">
                <img 
                  src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
                  alt="CGLINK Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-neutral-900">CGLINK</span>
            </div>
            <p className="text-neutral-500 max-w-md text-lg leading-relaxed mb-10 font-medium">
              Mitra strategis terdepan dalam membangun bisnis yang profesional, berdaya saing, dan berkelanjutan.
            </p>
            <div className="flex gap-4">
              <a href="https://id.linkedin.com/company/catur-gunandi-link-indonesia?trk=ppro_cprof" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/cglink_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-widest mb-10 text-neutral-900">HEAD OFFICE</h4>
            <div className="space-y-4 text-neutral-500 font-medium leading-relaxed">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-neutral-900" />
                <p>Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br/>Pondok Pinang, Jakarta Selatan 12310</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-widest mb-10 text-neutral-900">CONTACT</h4>
            <div className="space-y-6 text-neutral-500 font-medium">
              <a href="tel:02112345678" className="flex gap-4 hover:text-black transition-colors items-center">
                <Phone className="w-5 h-5 shrink-0 text-neutral-900" />
                (021) 1234 5678
              </a>
              <a href="mailto:businesspartner@cglinkindonesia.com" className="flex gap-4 hover:text-black transition-colors items-center">
                <Mail className="w-5 h-5 shrink-0 text-neutral-900" />
                businesspartner@cglinkindonesia.com
              </a>
              <a href="https://cglinkindonesia.com" className="flex gap-4 hover:text-black transition-colors items-center">
                <Globe className="w-5 h-5 shrink-0 text-neutral-900" />
                cglinkindonesia.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} CGLINK INDONESIA. BEYOND BUSINESS.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AboutUs: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-white text-neutral-900"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <div className="bg-neutral-50 p-8 md:p-12 rounded-[3rem] border border-neutral-100 shadow-xl shadow-neutral-200/50">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4 text-neutral-900 uppercase tracking-tighter">CGLINK Indonesia</h1>
          <h2 className="text-xl md:text-2xl text-neutral-500 font-bold mb-12 uppercase tracking-widest">Membangun Masa Depan Bisnis Anda Bersama CGLINK Indonesia</h2>

          <div className="space-y-12 text-neutral-500 leading-relaxed font-medium">
            <section>
              <p className="text-lg">
                Di era transformasi ekonomi yang bergerak cepat, kehadiran mitra strategis bukan lagi sekadar pilihan, melainkan keharusan. CGLINK Indonesia hadir sebagai katalisator pertumbuhan bagi bisnis Anda.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Siapa Kami?</h3>
              <p>
                Didirikan pada tahun 2025 dan berbasis di jantung bisnis Jakarta Selatan, CGLINK Indonesia adalah firma konsultasi bisnis yang lahir dari semangat kolaborasi dan inovasi. Kami memahami bahwa setiap bisnis memiliki tantangan unik; itulah mengapa kami tidak hanya memberikan saran, tetapi memberikan solusi yang terukur and berkelanjutan.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Keahlian Utama Kami</h3>
              <p className="mb-8">Kami menggabungkan data, pengalaman industri, dan kreativitas untuk memberikan layanan komprehensif di berbagai pilar utama:</p>
              <ul className="space-y-6">
                {[
                  { title: "Strategi Bisnis", desc: "Merumuskan roadmap yang adaptif untuk memastikan bisnis Anda tetap relevan dan kompetitif." },
                  { title: "Manajemen Keuangan (Finance)", desc: "Optimalisasi struktur modal, manajemen risiko, dan perencanaan keuangan yang presisi." },
                  { title: "Digital Marketing", desc: "Membangun kehadiran merek yang kuat melalui strategi pemasaran berbasis data untuk hasil konversi maksimal." },
                  { title: "Business Development", desc: "Mengidentifikasi peluang pasar baru dan mempercepat penetrasi produk/layanan Anda." },
                  { title: "Kemitraan Strategis (Partnerships)", desc: "Menghubungkan titik-titik potensi dengan membangun jejaring yang saling menguntungkan." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-neutral-900 shrink-0" />
                    <div><strong className="text-neutral-900">{item.title}:</strong> {item.desc}</div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Mengapa Memilih CGLINK?</h3>
              <p className="mb-10">
                Kami percaya pada Profesionalitas Tanpa Kompromi. Tim kami terdiri dari para ahli yang berdedikasi tinggi untuk membantu klien menavigasi kompleksitas dunia usaha. Dengan filosofi kerja yang transparan dan berorientasi pada hasil, kami memastikan setiap langkah yang kita ambil bersama membawa Anda lebih dekat ke puncak kesuksesan.
              </p>
              <blockquote className="border-l-8 border-black pl-8 py-4 my-10 bg-white rounded-r-2xl italic text-lg text-neutral-900 font-bold">
                "Menjadi mitra kolaborasi bisnis yang berlandaskan prinsip legal, logis, dan halal melalui produk, jasa, serta pengembangan bisnis profesional untuk menciptakan pertumbuhan dan manfaat berkelanjutan bagi seluruh pihak."
              </blockquote>
              <p className="text-xl text-neutral-900 font-black mt-12 text-center italic">
                Siap untuk membawa bisnis Anda ke level selanjutnya? Mari berdiskusi bagaimana CGLINK Indonesia dapat membantu menyempurnakan strategi Anda hari ini.
              </p>
            </section>

            {/* CTA Buttons */}
            <div className="mt-16 pt-12 border-t border-neutral-100">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:businesspartner@cglinkindonesia.com"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a 
                  href="https://wa.me/62895428355681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-neutral-200 text-neutral-900 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    // Menggunakan Web3Forms API untuk mengirim email langsung
    formData.append("access_key", "87567d39-6aa5-4b31-b166-724fa2de1149");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-white text-neutral-900"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info & Value Proposition */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter">
              Langkah Pertama Menuju <span className="text-neutral-400">Transformasi Bisnis</span> Anda Dimunlai di Sini.
            </h1>
            <p className="text-lg text-neutral-500 mb-12 leading-relaxed font-medium">
              Punya visi besar yang ingin diwujudkan? Atau tantangan bisnis yang butuh solusi segera? Jangan biarkan pertanyaan Anda tidak terjawab. Tim ahli CGLINK Indonesia siap mendengarkan, menganalisis, dan berkolaborasi dengan Anda untuk menciptakan strategi yang berdampak nyata.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Mari Berdiskusi</h3>
                <p className="text-neutral-500 mb-6 font-medium">Kami percaya bahwa setiap solusi hebat dimulai dari percakapan yang berkualitas. Pilih cara yang paling nyaman bagi Anda untuk terhubung dengan kami:</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Kantor Pusat</h4>
                      <p className="text-neutral-500 font-medium leading-relaxed">Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br/>Pondok Pinang, Kebayoran Lama<br/>Jakarta Selatan 12310</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Konsultasi Cepat</h4>
                      <a href="https://wa.me/62895428355681" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors font-medium underline underline-offset-4">Whatsapp: +62 895-4283-55681</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Korespondensi Email</h4>
                      <a href="mailto:businesspartner@cglinkindonesia.com" className="text-neutral-500 hover:text-black transition-colors font-medium underline underline-offset-4">businesspartner@cglinkindonesia.com</a>
                      <p className="text-sm text-neutral-400 mt-1 font-bold">Kami berkomitmen membalas pesan Anda dalam waktu &lt; 24 jam kerja.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Ikuti Perjalanan Kami</h3>
                <div className="flex gap-4">
                  <a href="https://id.linkedin.com/company/catur-gunandi-link-indonesia?trk=ppro_cprof" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:shadow-lg transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/cglink_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:shadow-lg transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Form & Why Us */}
          <div className="text-left">
            <div className="bg-neutral-50 p-8 md:p-10 rounded-[3rem] shadow-xl border border-neutral-100 mb-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2 uppercase tracking-tight">Kirim Pesan Langsung</h3>
              <p className="text-neutral-500 mb-8 font-medium">Siap untuk memulai? Isi formulir singkat di bawah ini, dan konsultan spesialis kami akan menghubungi Anda untuk menjadwalkan sesi diagnosis bisnis gratis.</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nama Lengkap</label>
                    <input type="text" name="name" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Perusahaan</label>
                    <input type="text" name="company" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="PT Inovasi Maju" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email</label>
                  <input type="email" name="email" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Pesan / Tantangan Bisnis</label>
                  <textarea name="message" required rows={4} className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none shadow-sm" placeholder="Ceritakan singkat tentang kebutuhan Anda..."></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 text-sm">
                    Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>
              </form>
            </div>

            <div className="bg-neutral-900 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-transparent"></div>
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10 uppercase tracking-tight">Mengapa Menghubungi Kami Sekarang?</h3>
              <p className="text-neutral-400 text-sm mb-6 relative z-10 font-medium">Di dunia bisnis, waktu adalah mata uang yang paling berharga. Menunda solusi berarti menunda pertumbuhan. Dengan menghubungi CGLINK Indonesia, Anda mendapatkan:</p>
              
              <ul className="space-y-4 mb-6 relative z-10">
                {[
                  { title: "Sesi Diagnosis Awal", desc: "Pemetaan masalah secara objektif." },
                  { title: "Kerahasiaan Data (NDA)", desc: "Informasi bisnis Anda aman bersama kami." },
                  { title: "Rencana Aksi Kustom", desc: "Bukan solusi template, tapi strategi yang dirancang khusus untuk Anda." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-neutral-400 shrink-0" />
                    <div><strong className="text-white">{item.title}:</strong> <span className="text-neutral-300">{item.desc}</span></div>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-white pl-6 py-2 italic text-white font-bold text-base relative z-10">
                "Pintu kami selalu terbuka untuk para inovator, pemimpin, dan pengusaha yang tidak puas dengan status quo."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        if (scrollPercentage >= 70) {
          widget.classList.add('show-widget');
        } else {
          widget.classList.remove('show-widget');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.main 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Hero setCurrentPage={setCurrentPage} />
            <SectorMarquee />
            <BusinessStats />
            <BentoGridServices setCurrentPage={setCurrentPage} />
            <VisionMission />
            <InvestorRelations setCurrentPage={setCurrentPage} />
            <LatestInsights setCurrentPage={setCurrentPage} />
            <WhyUs />
            <Testimonials />
            <BusinessCheckup />
          </motion.main>
        )}
        {currentPage === 'about' && (
          <AboutUs key="about" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'about-vision' && (
          <VisionMissionPage key="about-vision" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'about-pillars' && (
          <PilarBisnisPage key="about-pillars" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'about-funding' && (
          <FundingPortfolioPage key="about-funding" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'service-fundamental' && (
          <ServiceFundamentalPage key="service-fundamental" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'service-digital' && (
          <ServiceDigitalPage key="service-digital" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'service-partnerships' && (
          <ServicePartnershipsPage key="service-partnerships" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'service-finance' && (
          <ServiceFinancePage key="service-finance" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'service-hc' && (
          <ServiceHCPage key="service-hc" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'careers' && (
          <CareersPage key="careers" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'blog' && (
          <BlogPage key="blog" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'contact' && (
          <ContactPage key="contact" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}
