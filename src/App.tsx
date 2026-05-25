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
  Clock,
  BookOpen,
  Linkedin,
  Instagram,
  MoreVertical,
  X,
  ChevronDown,
  MessageSquare,
  Bot,
  ArrowUp,
  AlignRight
} from "lucide-react";
import { 
  ServiceFundamentalPage, 
  ServiceDigitalPage, 
  ServicePartnershipsPage, 
  ServiceFinancePage, 
  ServiceHCPage 
} from "./ServicePages";
import { CareersPage, BlogPage, insightsData } from "./AdditionalPages";
import { 
  VisionMissionPage, 
  PilarBisnisPage, 
  FundingPortfolioPage,
  ImpactPage,
  InvestmentThesisPage
} from "./AboutPages";


export type PageType = 'home' | 'about' | 'contact' | 'service-fundamental' | 'service-digital' | 'service-partnerships' | 'service-finance' | 'service-hc' | 'careers' | 'blog' | 'about-vision' | 'about-pillars' | 'about-funding' | 'impact' | 'venture-thesis' | 'venture-portfolio';

const translations = {
  nav: {
    capabilities: "BUSINESS UNITS",
    about: "ABOUT US",
    investor: "BUSINESS OUTLOOK",
    contact: "CONTACT US",
    legal: "LEGAL • LOGICAL • HALAL",
    corporate: "CORPORATE",
    whoWeAre: "WHO WE ARE",
    visionMission: "VISION & MISSION",
    businessPillars: "BUSINESS UNITS",
    impact: "BUSINESS OUTLOOK",
    venture: "CGLINK VENTURE",
    consulting: "CONSULTANT CGLINK",
    career: "CAREER",
    insights: "INSIGHT"
  },
  hero: {
    tag: "One Link, Thousands of Opportunities",
    title1: "One Link,",
    title2: "Thousands of",
    title3: "Opportunities",
    desc: "Building the future of business through strategic collaboration based on Legal, Logical, & Halal principles.",
    cta1: "Explore Units",
    cta2: "About CGLINK"
  },
  strategicNav: {
    about: "About CGLINK",
    aboutDesc: "Get to know our vision, mission, and philosophy in building a legal, logical, and halal business ecosystem.",
    units: "CGLINK Consulting",
    unitsDesc: "Explore our integrated strategic business units providing operational, financial, and digital solutions.",
    investor: "CGLINK Venture",
    investorDesc: "Discover our venture investment philosophy seeking long-term value and high sustainable yields.",
    learnMore: "Learn More"
  },
  stats: {
    pillars: "Business Pillars",
    sectors: "Portfolio Sectors",
    network: "Active Network",
    excellence: "Excellence Rate"
  },
  floating: {
    whatsapp: "WhatsApp Chat"
  }
};

const servicesData = [
  {
    id: 'fundamental',
    title: 'Strategy & Operations',
    desc: 'Building a strong business foundation, from legality and organizational structure to scalable business models to ensure long-term growth.'
  },
  {
    id: 'digital',
    title: 'Digital & Marketing',
    desc: 'Data-driven digital marketing strategies to accelerate growth, customer acquisition, and market dominance in the digital age.'
  },
  {
    id: 'partnerships',
    title: 'Innovation & Development',
    desc: 'Expanding networks, building strategic partnerships, and opening new market opportunities to accelerate your business expansion.'
  },
  {
    id: 'finance',
    title: 'Finance, Accounting, & Tax',
    desc: 'Comprehensive corporate financial management, funding strategies, and cash flow optimization for financial health.'
  },
  {
    id: 'hc',
    title: 'Human Capital',
    desc: 'Talent development, compensation structures, and strategic HR management to create a productive and high-performing team.'
  }
];

const Navbar = ({ 
  currentPage, 
  setCurrentPage, 
  setSelectedArticleId 
}: { 
  currentPage: PageType; 
  setCurrentPage: (p: PageType) => void; 
  setSelectedArticleId?: (id: number | undefined) => void; 
}) => {
  const t = translations.nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-[2000] px-6 md:px-16 transition-all duration-700 pointer-events-none ${scrolled ? 'h-20 bg-white shadow-sm border-b border-neutral-100' : 'h-28 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between pointer-events-auto">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
        >
          <div className={`w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${scrolled || currentPage !== 'home' ? 'bg-neutral-900' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBJLgZzym06yUvjh7cVL7xPXsDLzq3Q8TMw&s" 
              alt="CGLINK Logo" 
              className="w-full h-full object-cover transition-all duration-500"
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
        
        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center gap-5 xl:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] h-full transition-colors duration-500 ${scrolled ? 'text-neutral-500' : (currentPage === 'home' ? 'text-white/70' : 'text-neutral-500')}`}>
          
          <button id="nav-home" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className={`transition-colors font-black ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}>HOME</button>

          <button 
            id="nav-about" 
            onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }} 
            className={`transition-colors font-black ${scrolled ? 'hover:text-black' : (currentPage === 'about' ? 'text-black font-black underline underline-offset-4 decoration-2' : (currentPage === 'home' ? 'text-white/70 hover:text-white' : 'text-neutral-500 hover:text-black'))}`}
          >
            {t.about}
          </button>

          <div 
            className={`relative h-full flex items-center gap-1.5 cursor-pointer transition-colors group ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
            onMouseEnter={() => setActiveDropdown('consulting')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t.consulting} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'consulting' ? 'rotate-180' : ''}`} />
            <AnimatePresence>
              {activeDropdown === 'consulting' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-72"
                >
                  <div className="pt-4">
                    <div className="bg-white shadow-2xl rounded-2xl border border-neutral-100 p-6 overflow-hidden text-neutral-900 overflow-y-auto max-h-[400px]">
                      <div className="flex flex-col gap-3">
                        <button onClick={() => { setCurrentPage('about-vision'); window.scrollTo(0, 1500); setActiveDropdown(null); }} className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all">Why us?</button>
                        {servicesData.map(s => (
                          <button 
                            key={s.id}
                            id={`nav-consulting-${s.id}`}
                            onClick={() => { setCurrentPage(('service-' + s.id) as PageType); window.scrollTo(0, 0); setActiveDropdown(null); }}
                            className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all hover:translate-x-1"
                          >
                            {s.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className={`relative h-full flex items-center gap-1.5 cursor-pointer transition-colors group ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
            onMouseEnter={() => setActiveDropdown('venture')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t.venture} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'venture' ? 'rotate-180' : ''}`} />
            <AnimatePresence>
              {activeDropdown === 'venture' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64"
                >
                  <div className="pt-4">
                    <div className="bg-white shadow-2xl rounded-2xl border border-neutral-100 p-6 overflow-hidden text-neutral-900">
                      <div className="flex flex-col gap-3">
                        <button onClick={() => { setCurrentPage('venture-thesis'); window.scrollTo(0, 0); setActiveDropdown(null); }} className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all hover:translate-x-1">Investment Thesis</button>
                        <button onClick={() => { setCurrentPage('venture-portfolio'); window.scrollTo(0, 0); setActiveDropdown(null); }} className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all hover:translate-x-1">Portfolio</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button id="nav-career" onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }} className={`transition-colors ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}>{t.career}</button>
          
          <div 
            className={`relative h-full flex items-center gap-1.5 cursor-pointer transition-colors group ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
            onMouseEnter={() => setActiveDropdown('insights')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t.insights} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
            <AnimatePresence>
              {activeDropdown === 'insights' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 pt-4"
                >
                  <div className="bg-white shadow-2xl rounded-2xl border border-neutral-100 p-6 overflow-hidden text-neutral-900">
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => { 
                          if (setSelectedArticleId) setSelectedArticleId(undefined);
                          setCurrentPage('blog'); 
                          window.scrollTo(0, 0); 
                          setActiveDropdown(null); 
                        }} 
                        className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all hover:translate-x-1"
                      >
                        All Insights & Blog
                      </button>
                      <button 
                        onClick={() => { 
                          if (setSelectedArticleId) setSelectedArticleId(4);
                          setCurrentPage('blog'); 
                          window.scrollTo(0, 0); 
                          setActiveDropdown(null); 
                        }} 
                        className="text-left text-[9px] px-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-all hover:translate-x-1"
                      >
                        Economic Outlook 2026
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            id="nav-impact" 
            onClick={() => { 
              if (setSelectedArticleId) setSelectedArticleId(4);
              setCurrentPage('blog'); 
              window.scrollTo(0, 0); 
            }} 
            className={`transition-colors ${scrolled ? 'hover:text-black' : (currentPage === 'home' ? 'hover:text-white' : 'hover:text-black')}`}
          >
            {t.impact}
          </button>
          
          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <button 
              id="nav-contact"
              onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
              className={`px-6 py-3 rounded-2xl transition-all hover:scale-105 shadow-xl active:scale-95 text-[10px] font-black uppercase tracking-widest ${scrolled ? 'bg-neutral-900 text-white hover:bg-black shadow-neutral-200' : (currentPage === 'home' ? 'bg-white text-black hover:bg-neutral-200 shadow-white/5' : 'bg-neutral-900 text-white hover:bg-black shadow-neutral-200')}`}
            >
              {t.contact}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden relative z-[2001]">
          <button 
            id="mobile-menu-toggle"
            className={`p-3 rounded-2xl border transition-colors ${scrolled ? 'bg-neutral-50 border-neutral-100 text-neutral-900' : (currentPage === 'home' ? 'bg-white/10 border-white/20 text-white backdrop-blur-md' : 'bg-neutral-50 border-neutral-100 text-neutral-900')}`}
            onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(!isMobileMenuOpen); }}
          >
            {isMobileMenuOpen ? <X /> : <AlignRight />}
          </button>
        </div>
      </div>
    </nav>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 bg-white z-[3000] p-10 flex flex-col pt-32 gap-8 overflow-y-auto"
        >
          <button id="mobile-menu-close" className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shadow-sm" onClick={() => setIsMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
          <div className="flex flex-col gap-6 text-2xl font-display font-black uppercase tracking-tighter text-neutral-900 border-b border-neutral-100 pb-10">
            <button id="mobile-nav-home" onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left uppercase">HOME</button>
            
            <button id="mobile-nav-about" onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left uppercase">{t.about}</button>

            <div className="space-y-4 pt-4 border-t border-neutral-50">
              <div className="text-[10px] font-black text-neutral-400 tracking-[0.3em] uppercase">{t.consulting}</div>
              <button 
                onClick={() => { 
                  setCurrentPage('about-vision'); 
                  setIsMobileMenuOpen(false); 
                  window.scrollTo(0, 0); 
                }} 
                className="block text-left text-xl font-bold uppercase tracking-tight opacity-70"
              >
                Why Us?
              </button>
              {servicesData.map(s => (
                <button key={s.id} id={`mobile-nav-capability-${s.id}`} onClick={() => { setCurrentPage(('service-' + s.id) as PageType); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left text-xl font-bold uppercase tracking-tight opacity-70">{s.title}</button>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-50">
              <div className="text-[10px] font-black text-neutral-400 tracking-[0.3em] uppercase">{t.venture}</div>
              <button onClick={() => { setCurrentPage('venture-thesis'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left text-xl font-bold uppercase tracking-tight opacity-70">Investment Thesis</button>
              <button onClick={() => { setCurrentPage('venture-portfolio'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left text-xl font-bold uppercase tracking-tight opacity-70">Portfolio</button>
            </div>

            <button onClick={() => { setCurrentPage('careers'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block text-left uppercase">{t.career}</button>
            
            <div className="space-y-4 pt-4 border-t border-neutral-50">
              <div className="text-[10px] font-black text-neutral-400 tracking-[0.3em] uppercase">{t.insights}</div>
              <button 
                onClick={() => { 
                  if (setSelectedArticleId) setSelectedArticleId(undefined); 
                  setCurrentPage('blog'); 
                  setIsMobileMenuOpen(false); 
                  window.scrollTo(0, 0); 
                }} 
                className="block text-left text-xl font-bold uppercase tracking-tight opacity-70"
              >
                All Insights & Blog
              </button>
              <button 
                onClick={() => { 
                  if (setSelectedArticleId) setSelectedArticleId(4); 
                  setCurrentPage('blog'); 
                  setIsMobileMenuOpen(false); 
                  window.scrollTo(0, 0); 
                }} 
                className="block text-left text-xl font-bold uppercase tracking-tight opacity-70"
              >
                Economic Outlook 2026
              </button>
            </div>

            <button 
              onClick={() => { 
                if (setSelectedArticleId) setSelectedArticleId(4);
                setCurrentPage('blog'); 
                setIsMobileMenuOpen(false); 
                window.scrollTo(0, 0); 
              }} 
              className="block text-left uppercase"
            >
              {t.impact}
            </button>
            
            <button 
              id="mobile-nav-contact"
              onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
              className="mt-4 px-10 py-5 bg-neutral-900 text-white rounded-3xl text-xl font-black uppercase tracking-widest text-center"
            >
              {t.contact}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

const BusinessStats = () => {
  const t = translations.stats;
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

const ArticleModal = ({ isOpen, onClose, article }: { isOpen: boolean, onClose: () => void, article: any }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Reading Progress Indicator */}
            <motion.div 
              style={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-1 bg-black z-20 origin-left"
            />

            <div className="absolute top-8 right-8 z-20">
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-neutral-900 border border-neutral-100 hover:bg-black hover:text-white transition-all hover:scale-110 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 scroll-smooth">
              <div className="relative w-full aspect-[16/6] min-h-[300px]">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex gap-3 mb-6">
                    <span className="px-5 py-2 bg-black text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
                      {article.category}
                    </span>
                    <span className="px-5 py-2 bg-white border border-neutral-100 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                      {article.readTime}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-neutral-900 leading-[0.95] uppercase max-w-4xl">
                    {article.title}
                  </h1>
                </div>
              </div>

              <div className="px-8 md:px-24 py-16">
                <div className="flex items-center gap-10 mb-16 border-b border-neutral-100 pb-8 overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[10px] font-bold">CG</div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Written by</div>
                      <div className="text-sm font-bold text-neutral-900">Editorial Team</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Clock className="w-5 h-5 text-neutral-400" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Published on</div>
                      <div className="text-sm font-bold text-neutral-900">{article.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <BookOpen className="w-5 h-5 text-neutral-400" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Estimated duration</div>
                      <div className="text-sm font-bold text-neutral-900">{article.readTime}</div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-neutral max-w-none prose-p:text-xl prose-p:leading-relaxed prose-p:text-neutral-500 prose-p:font-medium prose-h2:text-3xl prose-h2:font-display prose-h2:font-black prose-h2:tracking-tight prose-h2:text-neutral-900 prose-h2:mt-16 prose-h2:mb-8 prose-h2:uppercase">
                  {article.content}
                </div>

                <div className="mt-20 pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:shadow-lg transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:shadow-lg transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                  <button 
                    onClick={onClose}
                    className="flex items-center gap-2 text-neutral-900 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                  >
                    Close Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LatestInsights = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const insights = insightsData.slice(0, 3); // Show the top 3 synced articles on the homepage

  return (
    <section className="py-40 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-500 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-neutral-800"></span>
              Expertise & Thinking
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white uppercase leading-[0.85]">
              Latest <br />
              <span className="text-neutral-500">Insights</span>
            </h2>
          </div>
          <button 
            onClick={() => setCurrentPage('blog')}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] pb-3 border-b border-white/10 hover:border-white transition-all text-neutral-400 hover:text-white"
          >
            Read All Perspectives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(insight)}
            >
              <div className="relative aspect-[16/11] overflow-hidden mb-12 rounded-[3rem] bg-neutral-900 border border-white/5">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                <div className="absolute top-10 left-10">
                  <span className="px-6 py-2.5 bg-white text-black rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl">
                    {insight.category}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-3">
                      View Full Insight <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-4">
                {insight.date} <span className="w-1 h-1 rounded-full bg-neutral-800"></span> {insight.readTime}
              </div>
              <h3 className="text-3xl lg:text-5xl font-display font-medium text-neutral-100 leading-[1.05] tracking-tighter group-hover:text-white transition-all">
                {insight.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <ArticleModal 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
        article={selectedArticle} 
      />
    </section>
  );
};

const ImpactHome = ({ 
  setCurrentPage, 
  setSelectedArticleId 
}: { 
  setCurrentPage: (p: PageType) => void;
  setSelectedArticleId?: (id: number | undefined) => void;
}) => {
  return (
    <section className="py-32 relative z-10 bg-neutral-50 text-black overflow-hidden group">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-[120px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
      <div className="w-full px-6 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-neutral-900 text-white rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse">
              <span>★</span> Free Premium Report
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 uppercase leading-tight">
              BUSINESS <br />
              OUTLOOK 2026
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-lg mb-6">
              Ada gap menarik terjadi di Indonesia saat ini. Di satu sisi, indikator makro tumbuh solid hingga 5,16%. Di sisi lain, pengusaha melaporkan tantangan konversi riil dan penurunan daya beli. Unduh laporan premium kami untuk membedah fakta riil ini.
            </p>
            <div className="mb-10 p-6 bg-white border border-neutral-100 rounded-2xl max-w-lg text-left shadow-sm">
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Featured Report</span>
              <h4 className="text-lg font-bold font-display text-neutral-900 mt-1 mb-2">Membaca Ekonomi Indonesia 2026</h4>
              <p className="text-sm text-neutral-500 font-medium">Berdasarkan data resmi BPS, BI, Gaikindo, dan Kantar Worldpanel. Kupas tuntas 9 dimensi paling vital bagi pengusaha.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                id="outlook-download"
                onClick={() => { 
                  if (setSelectedArticleId) setSelectedArticleId(4);
                  setCurrentPage('blog'); 
                  window.scrollTo(0, 0); 
                }}
                className="px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Unduh Laporan Gratis <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                id="outlook-contact"
                onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
                className="px-8 py-4 border border-black/10 hover:bg-black/5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                Konsultasi Strategis
              </button>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => { 
                if (setSelectedArticleId) setSelectedArticleId(4);
                setCurrentPage('blog'); 
                window.scrollTo(0, 0); 
              }}
            >
              <img 
                src="https://cglinkindonesia.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-25-at-15.19.32.jpeg" 
                alt="Economic & Business Outlook 2026 Report cover thumbnail" 
                className="w-full h-full object-fill transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div 
              onClick={() => { 
                if (setSelectedArticleId) setSelectedArticleId(4);
                setCurrentPage('blog'); 
                window.scrollTo(0, 0); 
              }}
              className="absolute -bottom-10 -left-10 glass-panel bg-white/90 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-xl hidden md:block cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-3xl font-display font-bold text-black mb-1 leading-none tracking-tighter">ECONOMIC OUTLOOK 2026</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-black font-mono">Pertumbuhan 5,16% — Menembus Realitas Pasar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectorMarquee = () => {
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
      tagline: "Foundation of Excellence",
      desc: "Building a strong business foundation, from legality and organizational structure to scalable business models to ensure long-term growth.",
      id: 'fundamental',
      bgText: "STRAT"
    },
    {
      number: "02",
      title: "Digital & Marketing",
      tagline: "Ecosystem Growth",
      desc: "Data-driven digital marketing strategies to accelerate growth, customer acquisition, and market dominance in the digital age.",
      id: 'digital',
      bgText: "DIGTL"
    },
    {
      number: "03",
      title: "Innovation & Development",
      tagline: "Growth Partner",
      desc: "Expanding networks, building strategic partnerships, and opening new market opportunities to accelerate your business expansion.",
      id: 'partnerships',
      bgText: "INNOV"
    },
    {
      number: "04",
      title: "Finance, Accounting, & Tax",
      tagline: "Strategic Sustainability",
      desc: "Comprehensive corporate financial management, funding strategies, and cash flow optimization for financial health.",
      id: 'finance',
      bgText: "FINAN"
    },
    {
      number: "05",
      title: "Human Capital",
      tagline: "People Empowerment",
      desc: "Talent development, compensation structures, and strategic HR management to create a productive and high-performing team.",
      id: 'hc',
      bgText: "HUMAN"
    }
  ];

  return (
    <section id="services-bento" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-50 rounded-full blur-[100px] -mr-48 -mt-48 opacity-50" />
      
      <div className="w-full px-6 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 mb-6 flex items-center gap-4">
               <span className="w-20 h-[1px] bg-neutral-200"></span>
               Our Core Ecosystem
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 uppercase leading-[0.85]">
              Strategic <br /> 
              <span className="text-neutral-300">Units</span>.
            </h2>
          </div>
          <p className="text-xl text-neutral-400 font-medium max-w-sm leading-relaxed mb-4">
            We provide integrated solutions that simplify complexity and accelerate your business journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => { setCurrentPage(('service-' + unit.id) as PageType); window.scrollTo(0, 0); }}
              className="group relative h-[600px] bg-neutral-50 rounded-[3rem] p-12 overflow-hidden cursor-pointer flex flex-col justify-between hover:bg-neutral-900 hover:scale-[1.02] transition-all duration-700"
            >
              <div className="absolute top-12 right-12 text-[120px] font-display font-black text-neutral-500/5 group-hover:text-white/5 pointer-events-none tracking-tighter leading-none mt-[-0.2em] transform transition-transform duration-1000 group-hover:scale-110">
                {unit.bgText}
              </div>

              <div className="relative z-10">
                <div className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em] mb-4 group-hover:text-white/40 transition-colors">
                  {unit.number} / 05
                </div>
                <div className="text-[9px] font-black text-neutral-900 group-hover:text-white/60 mb-12 uppercase tracking-widest bg-neutral-100 group-hover:bg-white/10 px-3 py-1 rounded-full w-fit transition-all">
                  {unit.tagline}
                </div>
              </div>

              <div className="relative z-10 mb-8">
                <h3 className="text-4xl font-display font-black text-neutral-900 group-hover:text-white mb-8 uppercase tracking-tighter leading-tight transition-colors duration-500">
                  {unit.title.includes(',') ? (
                    unit.title.split(',').map((part, idx) => (
                      <span key={idx} className="block">
                        {part.trim()}{idx < unit.title.split(',').length - 1 ? ',' : ''}
                      </span>
                    ))
                  ) : unit.title.includes('&') ? (
                    unit.title.split('&').map((part, idx) => (
                      <span key={idx} className="block">
                        {idx > 0 && <span className="text-neutral-300 group-hover:text-white/30 mr-2">&</span>}
                        {part.trim()}
                      </span>
                    ))
                  ) : (
                    unit.title
                  )}
                </h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed max-w-[240px] transition-colors duration-500 mb-10">
                  {unit.desc}
                </p>
                
                <div className="w-14 h-14 rounded-2xl bg-neutral-200 group-hover:bg-white flex items-center justify-center text-neutral-900 transition-all duration-500 group-hover:scale-110 group-hover:rotate-45">
                   <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const StrategicNav = ({ setCurrentPage }: { setCurrentPage: (p: PageType) => void }) => {
  const t = translations.strategicNav;
  
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
      link: "venture-thesis",
      id: "strategic-impact"
    }
  ];

  return (
    <section className="py-32 bg-neutral-50 border-b border-neutral-100 relative">
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
  const t = translations.hero;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-black text-white overflow-hidden">
      {/* Dynamic Background with improved gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-neutral-800/10 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-neutral-800/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Subtle organic light orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[150px]" 
      />
      
      <div className="w-full px-6 md:px-16 container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t.tag}
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-8xl font-display font-black tracking-[-0.04em] leading-[0.85] text-white uppercase mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                {t.title1}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block font-serif italic font-light text-neutral-400"
              >
                {t.title2}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent"
              >
                {t.title3}.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-400 font-medium max-w-xl leading-relaxed mb-16"
            >
              Building the future through strategic excellence based on <span className="text-white italic">Legal, Logical, & Halal</span> principles.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button 
                onClick={() => document.getElementById('strategic-units')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-14 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"
              >
                {t.cta1}
              </button>
              <button 
                onClick={() => { setCurrentPage('about-vision'); window.scrollTo(0, 0); }}
                className="px-14 py-5 border border-white/20 text-white backdrop-blur-md font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/10 transition-all active:scale-95"
              >
                {t.cta2}
              </button>
            </motion.div>
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
      desc: "Increasing capabilities through knowledge, attitude, and mentality based on trust and professionalism."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Share",
      desc: "Sharing stories, experiences, and solutions with clients, partners, and the community fairly, transparently, and responsibly."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Contribute",
      desc: "Creating a positive impact for clients, the economy, and the community through sustainable activities."
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
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-10 leading-none text-neutral-900">VISION</h2>
            <p className="text-2xl md:text-3xl text-neutral-600 leading-tight font-medium">
              "To be a strategic business collaboration partner based on legal, logical, and halal principles through products, services, and professional business development to create sustainable growth and benefits for all parties."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-xl shadow-neutral-200/50 border border-neutral-100"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-neutral-900 uppercase">MISSION</h2>
            <ul className="space-y-8">
              {[
                "Organize legal, logical, and halal business products and services.",
                "Become a professional and mutually beneficial business collaboration partner.",
                "Provide value-added consulting services and business solutions.",
                "Develop new businesses and business opportunities professionally and sustainably.",
                "Create sustainable growth and benefits for all parties."
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
      id: 'fundamental',
      title: "Strategy & Operations",
      desc: "Building a strong business foundation, from legality and organizational structure to scalable business models."
    },
    {
      id: 'digital',
      title: "Digital & Marketing",
      desc: "Accelerating market share through a digital ecosystem and data-driven marketing technology transformation."
    },
    {
      id: 'partnerships',
      title: "Innovation & Development",
      desc: "Expanding networks, building strategic partnerships, and opening new market opportunities to accelerate your business expansion."
    },
    {
      id: 'finance',
      title: "Finance, Accounting, & Tax",
      desc: "Comprehensive corporate financial management, funding strategies, and cash flow optimization for financial health."
    },
    {
      id: 'hc',
      title: "Human Capital",
      desc: "Talent development, compensation structures, and strategic HR management to create a productive and high-performing team."
    }
  ];

  return (
    <section id="services" className="py-32 relative z-10 bg-white">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8 text-neutral-900 uppercase">CORE SERVICES</h2>
          <p className="text-xl text-neutral-500 font-medium">Comprehensive solutions for your business growth.</p>
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
      icon: <Building2 className="w-6 h-6" />,
      title: "Who Are We?",
      desc: "Founded in 2023 and based in South Jakarta, CGLINK Indonesia is a business consulting firm born from collaboration and innovation, providing measurable and sustainable solutions.",
      id: "who-we-are"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Why Choose Us?",
      desc: "We believe in Uncompromising Professionalism. Our team helping clients navigate business complexities with transparent and results-oriented philosophy.",
      id: "why-choose"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Visionary & Experienced",
      desc: "Our leadership brings cross-sector expertise—from energy to digital pilgrimage—enabling multifaceted solutions.",
      id: "visionary"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "High-Caliber Network",
      desc: "Opening doors through a vast ecosystem of strategic partners, investors, and industry veterans.",
      id: "network"
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="w-full px-6 md:px-16 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em] mb-8">Strategic Advantage</div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 uppercase leading-[0.85] mb-12">
              Why <br />
              <span className="text-neutral-300">Partner</span> With <br />
              CGLINK?
            </h2>
            <p className="text-xl text-neutral-500 font-medium max-w-md leading-relaxed mb-16">
              We go beyond business to build legacy. Our unique blend of sharia-compliant values and modern operational excellence creates a formidable competitive edge.
            </p>
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden bg-neutral-100 shadow-2xl relative group border border-neutral-100">
               <img 
                 src="https://cglinkindonesia.com/wp-content/uploads/2026/05/beranda-scaled.jpg" 
                 alt="Professional Atmosphere" 
                 className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group bg-neutral-50 p-12 lg:p-14 rounded-[3.5rem] border border-neutral-100 hover:bg-neutral-900 transition-all duration-700 hover:shadow-2xl hover:shadow-neutral-200 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center text-neutral-900 group-hover:text-white transition-all duration-700 mb-8 shadow-sm">
                  {r.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 group-hover:text-white mb-6 uppercase tracking-tight transition-colors">{r.title}</h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed transition-colors">
                  {r.desc}
                </p>
              </motion.div>
            ))}
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
    <section id="testimonials" className="py-20 relative z-10 bg-neutral-50 border-t border-neutral-150">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-neutral-900 uppercase">WHAT PEOPLE SAY</h2>
            <div className="w-12 h-0.5 bg-black mx-auto rounded-full mt-3" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`bg-white p-6 md:p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group relative overflow-hidden border border-neutral-100 ${t.colSpan}`}
            >
              <div className="relative z-10">
                <Quote className="w-6 h-6 text-neutral-100 mb-4 group-hover:text-neutral-300 transition-colors" />
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-medium">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-neutral-50">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-xl object-cover border border-neutral-100 animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-neutral-900 text-xs tracking-tight">{t.name}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
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
                Take the first step to optimize your business. Fill out this brief evaluation form to get initial insights into your company's potential and areas for improvement.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6 text-neutral-900" />, text: "Identify growth barriers" },
                  { icon: <BarChart3 className="w-6 h-6 text-neutral-900" />, text: "Get actionable insights" },
                  { icon: <ShieldCheck className="w-6 h-6 text-neutral-900" />, text: "Strengthen business fundamentals" }
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
            <form id="checkup-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Company</label>
                  <input type="text" name="company" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="PT Innovation" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email</label>
                <input type="email" name="email" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors" placeholder="businesspartner@cglinkindonesia.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Business Message</label>
                <textarea name="message" required rows={4} className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Briefly describe your needs..."></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Message sent! We will contact you shortly via email or phone.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 text-xs flex items-start gap-3">
                  <X className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Sorry, an error occurred. Please try again or contact via WhatsApp.</p>
                </div>
              )}

              <button 
                id="checkup-submit"
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ 
  setCurrentPage, 
  setSelectedArticleId 
}: { 
  setCurrentPage: (p: PageType) => void; 
  setSelectedArticleId?: (id: number | undefined) => void;
}) => {
  const t = translations.nav;
  return (
    <footer className="py-32 bg-zinc-950 text-white selection:bg-white selection:text-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="w-full px-6 md:px-16 container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBJLgZzym06yUvjh7cVL7xPXsDLzq3Q8TMw&s" 
                  alt="CGLINK Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-white">CGLINK</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-12 uppercase leading-[0.85]">
              Let's build <br />
              <span className="text-neutral-500 italic font-light">The Future</span> <br />
              Together.
            </h2>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/cglink_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://id.linkedin.com/company/catur-gunandi-link-indonesia?trk=ppro_cprof" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500 mb-10">Navigation</div>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
              <li><button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-neutral-400 transition-colors text-left">Home</button></li>
              <li><button onClick={() => { setCurrentPage('about-vision'); window.scrollTo(0, 0); }} className="hover:text-neutral-400 transition-colors text-left">{t.about}</button></li>
              <li><button onClick={() => { if (setSelectedArticleId) setSelectedArticleId(4); setCurrentPage('blog'); window.scrollTo(0, 0); }} className="hover:text-neutral-400 transition-colors text-left">{t.impact}</button></li>
              <li><button onClick={() => { setCurrentPage('venture-thesis'); window.scrollTo(0, 0); }} className="hover:text-neutral-400 transition-colors text-left">Venture</button></li>
              <li><button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="hover:text-neutral-400 transition-colors text-left">{t.contact}</button></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500 mb-10">Office Base</div>
            <div className="text-neutral-400 text-xs leading-relaxed font-bold uppercase tracking-widest mb-6 border-l border-neutral-800 pl-6">
              Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br />
              Pondok Pinang, Kebayoran Lama<br />
              Jakarta Selatan 12310<br />
              Indonesia
            </div>
            <div className="text-white font-bold text-xs">businesspartner@cglinkindonesia.com</div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-600">© {new Date().getFullYear()} CGLINK INDONESIA. BEYOND BUSINESS.</div>
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-600 flex gap-10">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
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
      <div className="w-full px-6 md:px-16">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <div className="bg-neutral-50 p-8 md:p-16 rounded-[4.5rem] border border-neutral-100 shadow-2xl shadow-neutral-150/30">
          
          {/* Hero Segment */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[9px] font-black tracking-[0.3em] uppercase mb-6">About CGLINK</span>
            <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 uppercase tracking-tighter mb-6 leading-none">CGLINK Indonesia</h1>
            <h2 className="text-xl md:text-2xl text-neutral-500 font-bold uppercase tracking-wide leading-tight">Building Your Business Future with CGLINK Indonesia</h2>
          </div>

          <hr className="border-neutral-200/60 my-16" />

          {/* Core Info Split Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
            <div>
              <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase mb-3 block">Perspective</span>
              <h3 className="text-3xl md:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mb-6">Who We Are?</h3>
              <p className="text-neutral-600 font-medium leading-relaxed text-lg text-justify">
                Established in 2023 and based in the business heart of South Jakarta, CGLINK Indonesia is a premier strategic business consulting firm born from a spirit of high collaboration and forward-looking innovation. We understand that every corporate model faces unique variables; that's why we don't just provide standard operational advice, but construct measurable, sustainable solutions.
              </p>
            </div>
            
            <div className="bg-neutral-900 text-white p-10 rounded-[3rem] shadow-xl border border-neutral-800">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-[8px] font-black tracking-widest uppercase mb-4">Core Philosophy</span>
              <h3 className="text-2xl font-display font-bold uppercase mb-4 leading-tight">Professionalism Without Compromise</h3>
              <p className="text-neutral-300 font-semibold leading-relaxed text-base text-justify">
                We believe that sustainable, long-term growth is exclusively unlocked when upholding absolute legal transparency, logical business strategy, and halal compliance ecosystem limits. Our foundational code guarantees that every path we organize for clients is legal, logical, & halal, bringing you closer to peak institutional durability and community benefit.
              </p>
            </div>
          </div>

          {/* Vision & Mission Side-by-Side Area */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-[3rem] bg-white p-10 md:p-14 border border-neutral-100 flex flex-col justify-between shadow-sm">
              <div className="relative z-10">
                <span className="text-7xl md:text-8xl font-display font-black mb-6 opacity-5 absolute -top-8 -left-4 uppercase select-none">Vision</span>
                <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase mb-4 block">Our Statement</span>
                <h2 className="text-4xl font-display font-black mb-8 relative uppercase text-neutral-900 tracking-tighter">Vision</h2>
                <p className="text-xl md:text-2xl font-medium leading-normal text-neutral-700 mb-8 italic">
                  "To be a strategic business collaboration partner based on legal, logical, and halal principles through products, services, and professional business development to create sustainable growth and benefits for all parties."
                </p>
                <div className="h-0.5 w-16 bg-neutral-900 mb-8"></div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-display font-black leading-none tracking-tighter text-neutral-300">
                  ONE LINK,<br />
                  THOUSANDS OF<br />
                  OPPORTUNITIES.
                </h3>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-[3rem] bg-white p-10 md:p-14 border border-neutral-100 shadow-sm text-left">
              <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase mb-4 block">Our Action</span>
              <h2 className="text-4xl font-display font-black mb-8 uppercase text-neutral-900 tracking-tighter">Mission</h2>
              <div className="space-y-6">
                {[
                  "Organize legal, logical, and halal business products and services.",
                  "Become a professional and mutually beneficial business collaboration partner.",
                  "Provide value-added consulting services and business solutions.",
                  "Develop new businesses and business opportunities professionally and sustainably.",
                  "Create sustainable growth and benefits for all parties."
                ].map((misi, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-xs font-bold group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-400">
                      0{idx + 1}
                    </div>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed group-hover:text-neutral-900 transition-colors font-semibold">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VALUES: GRACE Segment */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase mb-2 block">Foundational Anchors</span>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-neutral-900 uppercase">VALUES: GRACE</h2>
              </div>
              <div className="text-right">
                <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Grow • Share • Contribute</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Grow", 
                  icon: <TrendingUp className="w-6 h-6" />, 
                  desc: "Increasing capabilities through knowledge, attitude, and mentality based on trust and professionalism." 
                },
                { 
                  title: "Share", 
                  icon: <Users className="w-6 h-6" />, 
                  desc: "Sharing stories, experiences, and solutions with clients, partners, and the community fairly, transparently, and responsibly." 
                },
                { 
                  title: "Contribute", 
                  icon: <Heart className="w-6 h-6" />, 
                  desc: "Creating a positive impact for clients, the economy, and the community through sustainable activities." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 hover:bg-neutral-900 hover:text-white shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 shadow-sm flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-white/10 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-2xl mb-3 text-neutral-900 group-hover:text-white">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Core Expertise Checklist section */}
          <div className="mb-24">
            <div className="max-w-3xl mx-auto">
              <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase mb-4 block text-center font-mono">Service Map</span>
              <h3 className="text-3xl md:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mb-8 text-center">Our Core Expertise</h3>
              <p className="mb-8 text-neutral-500 font-medium leading-relaxed text-center">We configure industry capabilities and strategies to secure complete scalability in each division:</p>
              <ul className="space-y-6 bg-white p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 shadow-sm">
                {[
                  { title: "Strategy & Operations", desc: "Formulating an adaptive roadmap, SOPs, and organizational structure to ensure scalability." },
                  { title: "Digital & Marketing", desc: "Data-driven growth strategies, digital ecosystems, and performance marketing transformation." },
                  { title: "Innovation & Development", desc: "Expanding networks, strategic partnerships, and uncovering new market opportunities." },
                  { title: "Finance, Accounting, & Tax", desc: "Capital structure optimization, precision financial planning, and robust risk management." },
                  { title: "Human Capital", desc: "Talent acquisition, corporate culture transformation, and high-performance team building." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                    <div className="text-sm md:text-base text-neutral-600 leading-normal font-medium">
                      <strong className="text-neutral-900 font-bold">{item.title}:</strong> {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-neutral-200/60 my-20" />

          {/* SEGMENT 1 — Who We Choose */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (Main Headline) */}
              <div className="lg:col-span-5 lg:sticky lg:top-36">
                <span className="text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase mb-3 block font-mono">SEGMENT 01 — WHO WE CHOOSE</span>
                <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 uppercase tracking-tighter mb-4 leading-tight">We Don't Work With Everyone.</h2>
                <p className="text-neutral-500 font-bold text-lg leading-relaxed">And that's precisely why our results stay consistent.</p>
              </div>

              {/* Right Column (Criteria Stack) */}
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    num: "01",
                    label: "VALUES",
                    title: "Aligned Values",
                    desc: "Halal, ethical, and transparent business. We believe growth without values isn't growth — it's just numbers without barakah."
                  },
                  {
                    num: "02",
                    label: "MINDSET",
                    title: "Built to Grow, Not to Rush",
                    desc: "Ready to invest the time and energy real transformation demands. We don't promise overnight results — and we don't work with anyone looking for them."
                  },
                  {
                    num: "03",
                    label: "POSTURE",
                    title: "Openness to Change",
                    desc: "Willing to be challenged. Willing to self-reflect. Willing to adopt a growth mindset. Real growth requires the honesty to admit what isn't yet optimal."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 hover:border-neutral-200 shadow-sm transition-all duration-300">
                    <div className="flex justify-between items-center mb-4 border-b border-neutral-50 pb-4">
                      <span className="text-[10px] font-black text-neutral-400 font-mono tracking-widest">{item.label}</span>
                      <span className="text-lg font-display font-black text-neutral-900 font-mono">{item.num}</span>
                    </div>
                    <h4 className="font-display font-black text-xl text-neutral-900 mb-2 uppercase">{item.title}</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEGMENT 2 — CGLINK Roadmap */}
          <div className="mb-24 bg-neutral-950 text-white p-8 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden border border-neutral-900">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-900/40 rounded-full filter blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mb-12">
              <span className="text-[9px] font-black tracking-[0.3em] uppercase mb-4 inline-block text-neutral-400 font-mono">SEGMENT 02 — CGLINK ROADMAP</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">A Continuous Journey. Tangible Impact. Built for the Hereafter.</h2>
              <p className="text-neutral-400 font-semibold text-sm md:text-base leading-relaxed">
                CGLINK's long-term roadmap is designed to be gradual, measurable, and oriented toward barakah, benefit, and sustainability.
              </p>
            </div>

            {/* Roadmap Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-neutral-800 pb-12 mb-12">
              {[
                { year: "2023", title: "Basic Fundamental", desc: "Laying a strong foundation of understanding, systems, and work culture." },
                { year: "2024", title: "Syariah Circle Development", desc: "Building a sharia-based growth ecosystem through community, education, and collaboration." },
                { year: "2025", title: "Foundation & Governance", desc: "Strengthening organizational structure, governance, and systems rooted in integrity." },
                { year: "2026", title: "Growth & Commercial Engine", desc: "Developing scalable, value-driven core business units." },
                { year: "2027", title: "Positioning & Specialization", desc: "Sharpening our market position and deepening strategic specialization." },
                { year: "2028", title: "Expansion & Investment", desc: "Strategic business expansion and investment to broaden our impact." },
                { year: "2029", title: "Systemization & Scale", desc: "Building automation and standardization systems for greater scale." },
                { year: "2030", title: "Market Leadership & Ecosystem", desc: "Becoming a market leader and building an ecosystem of widespread benefit." }
              ].map((step, idx) => (
                <div key={idx} className="bg-neutral-900/60 hover:bg-neutral-900 p-6 rounded-[2rem] border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                  <div className="text-2xl font-display font-black text-white font-mono mb-2">{step.year}</div>
                  <h4 className="font-display font-bold text-xs uppercase text-neutral-300 tracking-tight mb-2">{step.title}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Strip */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center text-xs md:text-sm">
              <div className="text-neutral-400 leading-relaxed font-semibold">
                Every step we take today is an investment for the future — for a better world and an eternal hereafter.
              </div>
              <div className="md:text-right">
                <div className="inline-block bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-left md:text-right">
                  <span className="text-[10px] font-black text-neutral-400 font-mono tracking-widest uppercase block mb-1">TARGET STATE</span>
                  <div className="text-white font-bold tracking-tight">
                    FINAL GOAL: Business sustainability, a life of barakah, and a real contribution to the ummah.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEGMENT 3 — Our Stance: MCG */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase mb-3 block font-mono">SEGMENT 03 — GLOBAL STANDARD</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 uppercase tracking-tighter">Our Stance: MCG</h2>
              <div className="w-12 h-0.5 bg-neutral-900 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  letter: "M",
                  title: "Mutual Benefit",
                  desc: "Every partnership is built on shared value and mutual gain for all parties involved."
                },
                {
                  letter: "C",
                  title: "Compliance & Effectiveness",
                  desc: "Operating within legal, logical, and halal frameworks — with measurable impact."
                },
                {
                  letter: "G",
                  title: "Governance",
                  desc: "Structured, accountable, and transparent across every business process."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[3rem] border border-neutral-100 hover:border-neutral-200 shadow-sm transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute -top-6 -right-2 text-8xl font-black font-display opacity-5 select-none text-neutral-900 group-hover:opacity-10 transition-opacity duration-300">
                    {item.letter}
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-neutral-150 flex items-center justify-center mb-6 font-display font-black text-xl text-neutral-900 bg-neutral-50">
                    {item.letter}
                  </div>
                  <h4 className="font-display font-black text-lg text-neutral-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-neutral-200/60 my-20" />

          {/* Bottom Pitch */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Why Choose CGLINK?</h3>
            <p className="text-neutral-500 leading-relaxed font-semibold text-lg italic">
              "Ready to take your business to the next level? Let's discuss how CGLINK Indonesia can help perfect your strategy today."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="border-t border-neutral-200/60 pt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:businesspartner@cglinkindonesia.com"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-neutral-900/10"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a 
                href="https://wa.me/62895428355681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-neutral-200 text-neutral-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
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
              The First Step Towards Your <span className="text-neutral-400">Business Transformation</span> Starts Here.
            </h1>
            <p className="text-lg text-neutral-500 mb-12 leading-relaxed font-medium">
              Have a big vision to realize? Or a business challenge that needs an immediate solution? Don't let your questions go unanswered. CGLINK Indonesia's team of experts is ready to listen, analyze, and collaborate with you to create a real-impact strategy.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Let's Discuss</h3>
                <p className="text-neutral-500 mb-6 font-medium">We believe that every great solution starts with a quality conversation. Choose the most convenient way for you to connect with us:</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Headquarters</h4>
                      <p className="text-neutral-500 font-medium leading-relaxed">Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br/>Pondok Pinang, Kebayoran Lama<br/>South Jakarta 12310</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Quick Consultation</h4>
                      <a href="https://wa.me/62895428355681" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors font-medium underline underline-offset-4">Whatsapp: +62 895-4283-55681</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold mb-1">Email Correspondence</h4>
                      <a href="mailto:businesspartner@cglinkindonesia.com" className="text-neutral-500 hover:text-black transition-colors font-medium underline underline-offset-4">businesspartner@cglinkindonesia.com</a>
                      <p className="text-sm text-neutral-400 mt-1 font-bold">We are committed to replying to your message within &lt; 24 business hours.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 uppercase tracking-tight">Follow Our Journey</h3>
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
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2 uppercase tracking-tight">Send a Message</h3>
              <p className="text-neutral-500 mb-8 font-medium">Ready to start? Fill out the short form below, and our specialist consultant will contact you to schedule a free business diagnosis session.</p>
              
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Company</label>
                    <input type="text" name="company" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="PT Innovation" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email</label>
                  <input type="email" name="email" required className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors shadow-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Message / Business Challenge</label>
                  <textarea name="message" required rows={4} className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none shadow-sm" placeholder="Briefly describe your needs..."></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Your message has been successfully sent! We will contact you shortly.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 text-sm">
                    Sorry, an error occurred while sending the message. Please try again or contact us via WhatsApp.
                  </div>
                )}

                <button 
                  id="contact-submit"
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="bg-neutral-900 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-transparent"></div>
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10 uppercase tracking-tight">Why Contact Us Now?</h3>
              <p className="text-neutral-400 text-sm mb-6 relative z-10 font-medium">In the business world, time is the most valuable currency. Delaying solutions means delaying growth. By contacting CGLINK Indonesia, you get:</p>
              
              <ul className="space-y-4 mb-6 relative z-10">
                {[
                  { title: "Initial Diagnosis Session", desc: "Objective mapping of issues." },
                  { title: "Data Confidentiality (NDA)", desc: "Your business information is safe with us." },
                  { title: "Custom Action Plan", desc: "Not a template solution, but a strategy designed specifically for you." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-neutral-400 shrink-0" />
                    <div><strong className="text-white">{item.title}:</strong> <span className="text-neutral-300">{item.desc}</span></div>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-white pl-6 py-2 italic text-white font-bold text-base relative z-10">
                "Our doors are always open for innovators, leaders, and entrepreneurs who are not satisfied with the status quo."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      <a 
        href="https://wa.me/62895428355681" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-5 py-3 bg-white shadow-2xl rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border border-neutral-100 opacity-0 group-hover:opacity-100 transition-all shadow-neutral-200/50 hidden md:block"
        >
          WhatsApp Business
        </motion.div>
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-[#25D366]/30 cursor-pointer relative"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-pulse" />
        </motion.div>
      </a>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | undefined>(undefined);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-200 font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedArticleId={setSelectedArticleId} />
      
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
            <ImpactHome setCurrentPage={setCurrentPage} setSelectedArticleId={setSelectedArticleId} />
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
        {currentPage === 'venture-thesis' && (
          <InvestmentThesisPage key="venture-thesis" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'venture-portfolio' && (
          <FundingPortfolioPage key="venture-portfolio" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
        {currentPage === 'impact' && (
          <ImpactPage key="impact" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
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
          <BlogPage 
            key="blog" 
            initialArticleId={selectedArticleId} 
            onBack={() => { 
              setCurrentPage('home'); 
              setSelectedArticleId(undefined); 
              window.scrollTo(0, 0); 
            }} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage key="contact" onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />
        )}
      </AnimatePresence>
      
      <FloatingActions />
      <Footer setCurrentPage={setCurrentPage} setSelectedArticleId={setSelectedArticleId} />
    </div>
  );
}
