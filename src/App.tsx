import React, { useEffect, useState, createContext, useContext } from "react";
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
  ChevronDown,
  Languages,
  ArrowUp
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

export type Language = 'ID' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'ID',
  setLang: () => {},
});

const translations = {
  ID: {
    nav: {
      capabilities: "Business Units",
      about: "Tentang Kami",
      investor: "Investor Relations",
      contact: "Kontak",
      legal: "Legal • Logis • Halal"
    },
    hero: {
      tag: "Melampaui Pertumbuhan Bisnis",
      desc: "Membangun masa depan bisnis melalui kolaborasi strategis yang berlandaskan prinsip Legal, Logis, & Halal.",
      cta1: "Eksplor Unit",
      cta2: "Tentang CGLINK"
    },
    strategicNav: {
      about: "Tentang CGLINK",
      aboutDesc: "Mengenal lebih dekat visi, misi, dan filosofi kami dalam membangun ekosistem bisnis yang legal, logis, dan halal.",
      units: "Business Unit",
      unitsDesc: "Menjelajahi unit bisnis strategis kami yang terintegrasi untuk memberikan solusi operasional, finansial, dan digital.",
      investor: "Investor Relation",
      investorDesc: "Informasi dan peluang kolaborasi strategis bagi mitra yang ingin bertumbuh bersama dalam ekosistem CGLINK.",
      learnMore: "Selengkapnya"
    },
    stats: {
      pillars: "Pilar Bisnis",
      sectors: "Sektor Portofolio",
      network: "Jaringan Aktif",
      excellence: "Tingkat Keunggulan"
    }
  },
  EN: {
    nav: {
      capabilities: "Business Units",
      about: "About Us",
      investor: "Investor Relations",
      contact: "Contact",
      legal: "Legal • Logical • Halal"
    },
    hero: {
      tag: "Beyond Business Growth",
      desc: "Building the future of business through strategic collaboration based on Legal, Logical, & Halal principles.",
      cta1: "Explore Units",
      cta2: "About CGLINK"
    },
    strategicNav: {
      about: "About CGLINK",
      aboutDesc: "Get to know our vision, mission, and philosophy in building a business ecosystem that is legal, logical, and halal.",
      units: "Business Unit",
      unitsDesc: "Explore our integrated strategic business units providing operational, financial, and digital solutions.",
      investor: "Investor Relation",
      investorDesc: "Information and strategic collaboration opportunities for partners who want to grow together with us.",
      learnMore: "Learn More"
    },
    stats: {
      pillars: "Business Pillars",
      sectors: "Portfolio Sectors",
      network: "Active Network",
      excellence: "Excellence Rate"
    }
  }
};

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
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'ID' ? 'EN' : 'ID');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 transition-all duration-700 ${scrolled ? 'h-20 bg-white shadow-sm border-b border-neutral-100' : 'h-28 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
        >
          <div className="w-12 h-12 rounded-2xl overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
            <img 
              src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
              alt="CGLINK Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-black text-2xl tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-neutral-900' : (currentPage === 'home' ? 'text-white' : 'text-neutral-900')}`}>
              CGLINK
            </span>
            <span className={`text-[8px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${scrolled ? 'text-neutral-400' : (currentPage === 'home' ? 'text-white/40' : 'text-neutral-400')}`}>
              Beyond Business
            </span>
          </div>
        </div>
        
        <div className={`hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] h-full transition-colors duration-500 ${scrolled ? 'text-neutral-500' : (currentPage === 'home' ? 'text-white/40' : 'text-neutral-500')}`}>
          <div 
            className={`relative h-full flex items-center gap-2 cursor-pointer transition-colors group ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
            onMouseEnter={() => setActiveDropdown('capabilities')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t.capabilities} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'capabilities' ? 'rotate-180' : ''}`} />
            <AnimatePresence>
              {activeDropdown === 'capabilities' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-neutral-100 p-6 overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    {servicesData.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => { setCurrentPage(('service-' + s.id) as PageType); window.scrollTo(0, 0); }}
                        className="text-left text-neutral-500 hover:text-black transition-colors"
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className={`relative h-full flex items-center gap-2 cursor-pointer transition-colors group ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t.about} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-neutral-100 p-6 overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    <button onClick={() => setCurrentPage('about')} className="text-left text-neutral-500 hover:text-black transition-colors">Who We Are</button>
                    <button onClick={() => setCurrentPage('about-vision')} className="text-left text-neutral-500 hover:text-black transition-colors">Vision & Mission</button>
                    <button onClick={() => setCurrentPage('about-pillars')} className="text-left text-neutral-500 hover:text-black transition-colors">Business Pillars</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => setCurrentPage('about-funding')} className={`transition-colors ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}>{t.investor}</button>
          
          {/* Language Switcher & Contact Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${scrolled ? 'border-neutral-200 text-neutral-500 hover:border-black hover:text-black' : (currentPage === 'home' ? 'border-white/20 text-white/60 hover:border-white hover:text-white' : 'border-neutral-200 text-neutral-500 hover:border-black hover:text-black')}`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-[10px] font-black">{lang}</span>
            </button>

            <button 
              onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
              className={`px-10 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-xl active:scale-95 text-[10px] font-black uppercase tracking-widest ${scrolled ? 'bg-neutral-900 text-white hover:bg-black shadow-neutral-200' : (currentPage === 'home' ? 'bg-white text-black hover:bg-neutral-200 shadow-white/5' : 'bg-neutral-900 text-white hover:bg-black shadow-neutral-200')}`}
            >
              {t.contact}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLang}
            className={`p-2.5 rounded-xl border transition-colors ${scrolled ? 'bg-neutral-50 border-neutral-100 text-neutral-900' : (currentPage === 'home' ? 'bg-white/10 border-white/20 text-white backdrop-blur-md' : 'bg-neutral-50 border-neutral-100 text-neutral-900')}`}
          >
            <span className="text-[10px] font-black">{lang}</span>
          </button>
          <button 
            className={`p-3 rounded-2xl border transition-colors ${scrolled ? 'bg-neutral-50 border-neutral-100 text-neutral-900' : (currentPage === 'home' ? 'bg-white/10 border-white/20 text-white backdrop-blur-md' : 'bg-neutral-50 border-neutral-100 text-neutral-900')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <MoreVertical />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-10 flex flex-col pt-32 gap-12"
          >
            <button className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shadow-sm" onClick={() => setIsMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
            <div className="flex flex-col gap-10 text-3xl font-display font-black uppercase tracking-tighter text-neutral-900">
              <div className="space-y-4">
                <div className="text-[10px] font-black text-neutral-400 tracking-[0.3em]">{t.capabilities}</div>
                {servicesData.map(s => (
                  <button key={s.id} onClick={() => { setCurrentPage(('service-' + s.id) as PageType); setIsMobileMenuOpen(false); }} className="block">{s.title}</button>
                ))}
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-neutral-400 tracking-[0.3em]">Corporate</div>
                <button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }}>{t.about}</button>
                <button onClick={() => { setCurrentPage('about-funding'); setIsMobileMenuOpen(false); }}>{t.investor}</button>
              </div>
              <button 
                onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}
                className="mt-4 px-10 py-5 bg-neutral-900 text-white rounded-3xl text-xl font-black uppercase tracking-widest text-center"
              >
                {t.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BusinessStats = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].stats;
  const stats = [
    { label: t.pillars, value: "05" },
    { label: t.sectors, value: "04" },
    { label: t.network, value: "500+" },
    { label: t.excellence, value: "100%" }
  ];

  return (
    <section className="py-24 bg-white border-y border-neutral-100">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">{s.label}</div>
              <div className="text-6xl md:text-7xl font-display font-bold text-neutral-900 tracking-tighter">{s.value}</div>
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
    <section className="py-40 bg-white">
      <div className="w-full px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6">Expertise & Thinking</div>
            <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-neutral-900 uppercase leading-[0.85]">
              Latest <br />
              Insights
            </h2>
          </div>
          <button 
            onClick={() => setCurrentPage('blog')}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] pb-2 border-b border-neutral-200 hover:border-black transition-all"
          >
            Read All Perspectives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setCurrentPage('blog')}
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-10 rounded-[2rem] bg-neutral-100">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-xl rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-neutral-900 border border-white/20 shadow-xl">
                    {insight.category}
                  </span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-6 border-l-2 border-neutral-200 pl-4">{insight.date}</div>
              <h3 className="text-3xl lg:text-4xl font-display font-medium text-neutral-900 leading-[1.1] tracking-tighter group-hover:text-black transition-all">
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
    <section className="py-32 relative z-10 bg-neutral-50 text-black overflow-hidden group">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-[120px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
      <div className="w-full px-6 md:px-16 relative z-10">
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
    <div className="w-full py-16 bg-white overflow-hidden relative border-b border-neutral-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...sectors, ...sectors].map((s, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-display font-bold text-neutral-200 mx-16 tracking-tighter uppercase inline-block italic"
          >
            {s} •
          </span>
        ))}
      </div>
    </div>
  );
};

const BusinessUnits = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const units = [
    {
      number: "01",
      title: "Strategy & Operations",
      desc: "Membangun fondasi bisnis yang kuat, dari legalitas, struktur organisasi, hingga model bisnis yang scalable.",
      id: 'fundamental'
    },
    {
      number: "02",
      title: "Digital & Marketing",
      desc: "Akselerasi pangsa pasar melalui ekosistem digital dan transformasi teknologi pemasaran berbasis data.",
      id: 'digital'
    },
    {
      number: "03",
      title: "Finance & Advisory",
      desc: "Optimalisasi arus kas, manajamen risiko, perpajakan, dan perencanaan strategis keuangan.",
      id: 'finance'
    }
  ];

  return (
    <section id="services-bento" className="py-24 bg-white border-b border-neutral-100">
      <div className="w-full px-6 md:px-16 container mx-auto">
        <div className="mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6">Our Core Ecosystem</div>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 uppercase leading-none">
            Strategic <br /> Units
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-neutral-100">
          {units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => { setCurrentPage(('service-' + unit.id) as PageType); window.scrollTo(0, 0); }}
              className="group p-12 lg:p-16 border-b md:border-b-0 md:border-r border-neutral-100 cursor-pointer hover:bg-neutral-50 transition-all relative overflow-hidden h-full flex flex-col"
            >
              <div className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em] mb-20 group-hover:text-black transition-colors">{unit.number}</div>
              <h3 className="text-3xl font-display font-medium text-neutral-900 mb-8 uppercase tracking-tighter leading-tight group-hover:translate-x-4 transition-transform duration-500">{unit.title}</h3>
              <p className="text-neutral-500 font-medium leading-relaxed mb-12 flex-grow max-w-xs">{unit.desc}</p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-black opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const StrategicNav = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].strategicNav;
  
  const sections = [
    {
      title: t.about,
      desc: t.aboutDesc,
      link: "about",
      id: "strategic-about"
    },
    {
      title: t.units,
      desc: t.unitsDesc,
      link: "home",
      scrollTo: "services-bento",
      id: "strategic-units"
    },
    {
      title: t.investor,
      desc: t.investorDesc,
      link: "about-funding",
      id: "strategic-investor"
    }
  ];

  return (
    <section className="py-32 bg-neutral-50 border-b border-neutral-100 relative overflow-hidden">
      {/* Background Moving Globe Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border border-black rounded-full flex items-center justify-center"
        >
          <div className="absolute inset-0 border border-black rounded-full rotate-45" />
          <div className="absolute inset-0 border border-black rounded-full -rotate-45" />
          <Globe className="w-64 h-64 text-black" />
        </motion.div>
      </div>

      <div className="w-full px-6 md:px-16 container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-16">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              id={sec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                if (sec.scrollTo) {
                  const el = document.getElementById(sec.scrollTo);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCurrentPage(sec.link as PageType);
                  window.scrollTo(0, 0);
                }
              }}
            >
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 mb-6 group-hover:text-black transition-colors">0{i + 1}</div>
              <h3 className="text-3xl font-display font-black text-neutral-900 mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{sec.title}</h3>
              <p className="text-neutral-500 font-medium leading-relaxed mb-8 max-w-xs">{sec.desc}</p>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
                {t.learnMore} <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].hero;
  
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-20 overflow-hidden bg-black text-white">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black" />
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      
      {/* Globe Animation Container like dinastiwahab.com */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="relative w-[150vh] h-[150vh] max-w-[1200px] max-h-[1200px] flex items-center justify-center"
        >
          {/* Main Globe Sphere with light effect */}
          <div className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_150px_rgba(255,255,255,0.05)]" />
          
          {/* Latitudinal Lines */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`lat-${i}`}
              className="absolute w-full h-[1px] bg-white/5" 
              style={{ top: `${(i + 1) * 14.28}%` }}
            />
          ))}
          
          {/* Longitudinal Lines */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`long-${i}`}
              className="absolute h-full w-[1px] bg-white/5" 
              style={{ left: `${(i + 1) * 14.28}%` }}
            />
          ))}
          
          {/* Pulsating Points for futuristic connectivity look */}
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-white/60 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[40%] left-[15%] w-1 h-1 bg-white/30 rounded-full blur-[1px]" />
          <div className="absolute top-[15%] left-[70%] w-2 h-2 bg-blue-500/20 rounded-full blur-[4px] animate-pulse" />
        </motion.div>
      </div>

      <div className="w-full px-6 md:px-16 container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-12"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t.tag}
            </motion.div>
            
            <h1 className="text-7xl md:text-[8rem] lg:text-[11.5rem] font-display font-black tracking-tighter leading-[0.8] text-white uppercase mb-16">
              Beyond <br />
              <span className="font-serif italic font-light text-neutral-400 ml-[0.1em]">Business</span> <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white"
              >
                Vision.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl leading-tight mb-20"
            >
              {t.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <button 
                onClick={() => document.getElementById('strategic-units')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                {t.cta1}
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
                className="px-12 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/5 transition-all"
              >
                {t.cta2}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-neutral-600"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
      </motion.div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Grow",
      desc: "Meningkatkan kapabilitas melalui pengetahuan, sikap, dan mentalitas berlandaskan kepercayaan and profesionalisme."
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
      <div className="w-full px-6 md:px-16">
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
    <section id="about" className="py-32 relative z-10 bg-neutral-50">
      <div className="w-full px-6 md:px-16">
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
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-20">
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
      <div className="w-full px-6 md:px-16">
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
    <section id="testimonials" className="py-32 relative z-10 bg-neutral-100 border-t border-neutral-200">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-20">
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
      <div className="w-full px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-10 text-neutral-900 leading-none uppercase">
                BUSINESS <br/>
                <span className="text-neutral-900">CHECK-UP</span>
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
                Ambil langkah pertama untuk mengoptimalkan bisnis Anda. Isi form evaluasi singkat ini untuk mendapatkan insight awal mengenai potensi dan area perbaikan di perusahaan Anda.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6 text-neutral-900" />, text: "Identifikasi hambatan pertumbuhan" },
                  { icon: <BarChart3 className="w-6 h-6 text-neutral-900" />, text: "Dapatkan insight yang actionable" },
                  { icon: <ShieldCheck className="w-6 h-6 text-neutral-900" />, text: "Perkuat fundamental bisnis" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 text-neutral-600 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0 border border-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
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

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].nav;
  return (
    <footer className="py-32 bg-black text-white selection:bg-white selection:text-black">
      <div className="w-full px-6 md:px-16 container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black overflow-hidden">
                <img 
                  src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
                  alt="CGLINK Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter uppercase">CGLINK</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-10 uppercase leading-[0.9]">Let's build the <br /><span className="italic text-neutral-400">Future of Business</span> <br />Together.</h2>
            <div className="text-neutral-400 font-medium max-w-sm mb-12 leading-relaxed text-lg">
              Mitra strategis terdepan dalam membangun bisnis yang profesional, berdaya saing, dan berkelanjutan.
            </div>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/cglink_/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://id.linkedin.com/company/catur-gunandi-link-indonesia?trk=ppro_cprof" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Navigation</div>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.3em]">
              <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-neutral-400 transition-colors text-left uppercase">{t.capabilities}</button></li>
              <li><button className="hover:text-neutral-400 transition-colors text-left uppercase">{t.investor}</button></li>
              <li><button className="hover:text-neutral-400 transition-colors text-left uppercase">{t.about}</button></li>
              <li><button className="hover:text-neutral-400 transition-colors text-left uppercase">{t.contact}</button></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Office Base</div>
            <div className="text-neutral-400 text-sm leading-relaxed font-medium">
              Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br />
              Pondok Pinang, Kebayoran Lama<br />
              Jakarta Selatan 12310<br />
              Indonesia
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500">© {new Date().getFullYear()} CGLINK INDO. BEYOND BUSINESS.</div>
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500">{t.legal}</div>
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
      <div className="w-full px-6 md:px-16">
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
      <div className="w-full px-6 md:px-16">
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

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            <a 
              href="https://wa.me/62895428355681" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="px-4 py-2 bg-white shadow-xl rounded-xl text-[10px] font-black uppercase tracking-widest border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
              <div className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95">
                <MessageCircle className="w-6 h-6" />
              </div>
            </a>
            <a 
              href="mailto:businesspartner@cglinkindonesia.com"
              className="flex items-center gap-3 group"
            >
              <span className="px-4 py-2 bg-white shadow-xl rounded-xl text-[10px] font-black uppercase tracking-widest border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
              <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95">
                <Mail className="w-6 h-6" />
              </div>
            </a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <span className="px-4 py-2 bg-white shadow-xl rounded-xl text-[10px] font-black uppercase tracking-widest border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity">Top</span>
              <div className="w-14 h-14 bg-white text-neutral-900 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 border border-neutral-100">
                <ArrowUp className="w-6 h-6" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-10 ${isOpen ? 'bg-black text-white' : 'bg-white text-black border border-neutral-100'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : (
          <div className="relative">
            <MoreVertical className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [lang, setLang] = useState<Language>('ID');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-[100dvh] flex flex-col bg-white text-neutral-900 selection:bg-neutral-200 font-sans">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.main 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <Hero setCurrentPage={setCurrentPage} />
              <SectorMarquee />
              <BusinessStats />
              <CoreValues />
              <VisionMission />
              <BusinessUnits setCurrentPage={setCurrentPage} />
              <InvestorRelations setCurrentPage={setCurrentPage} />
              <WhyUs />
              <Testimonials />
              <LatestInsights setCurrentPage={setCurrentPage} />
              <BusinessCheckup />
            </motion.main>
          )}
          {currentPage === 'about' && (
            <div className="flex-1 opacity-0 animate-in fade-in duration-500 fill-mode-forwards">
              <AboutUs key="about" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
            </div>
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
        
        <FloatingActions />
        <Footer lang={lang} />
      </div>
    </LanguageContext.Provider>
  );
}
