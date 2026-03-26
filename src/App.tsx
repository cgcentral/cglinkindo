import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
  Share2,
  HeartHandshake,
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

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (currentPage !== 'home') {
      e.preventDefault();
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[88px] glass-panel border-b-0 border-x-0 border-t-0"
      onMouseLeave={() => {
        setIsServicesMenuOpen(false);
        setIsAboutMenuOpen(false);
      }}
    >
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white">
          <img 
            src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
            alt="CGLINK Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-display font-bold text-xl tracking-widest">CGLINK</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center h-full gap-10 text-sm font-medium text-neutral-400">
        {/* About Us Dropdown Trigger */}
        <div className="h-full flex items-center relative">
          <button 
            onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
            onMouseEnter={() => {
              setIsAboutMenuOpen(true);
              setIsServicesMenuOpen(false);
            }}
            className={`flex items-center gap-1 ${currentPage.startsWith('about-') || isAboutMenuOpen ? 'text-white' : ''} hover:text-white transition-colors h-full`}
          >
            About Us <ChevronDown className={`w-4 h-4 transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isAboutMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-64 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-b-2xl overflow-hidden"
                onMouseLeave={() => setIsAboutMenuOpen(false)}
              >
                <div className="flex flex-col py-2">
                  <button
                    onClick={() => {
                      setCurrentPage('about-vision');
                      window.scrollTo(0, 0);
                      setIsAboutMenuOpen(false);
                    }}
                    className="text-left px-6 py-4 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border-b border-white/5"
                  >
                    Visi dan Misi
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('about-pillars');
                      window.scrollTo(0, 0);
                      setIsAboutMenuOpen(false);
                    }}
                    className="text-left px-6 py-4 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                  >
                    Pilar Bisnis
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Services Dropdown Trigger */}
        <div className="h-full flex items-center relative">
          <button 
            onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
            onMouseEnter={() => {
              setIsServicesMenuOpen(true);
              setIsAboutMenuOpen(false);
            }}
            className={`flex items-center gap-1 ${currentPage.startsWith('service-') || isServicesMenuOpen ? 'text-white' : ''} hover:text-white transition-colors h-full`}
          >
            Business Consulting <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <button 
          onClick={() => { setCurrentPage('about-funding'); window.scrollTo(0, 0); }}
          className={`${currentPage === 'about-funding' ? 'text-white' : ''} hover:text-white transition-colors h-full flex items-center`}
        >
          Funding Portfolio
        </button>

        <button 
          onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }}
          className={`${currentPage === 'careers' ? 'text-white' : ''} hover:text-white transition-colors h-full flex items-center`}
        >
          Careers
        </button>

        <button 
          onClick={() => { setCurrentPage('blog'); window.scrollTo(0, 0); }}
          className={`${currentPage === 'blog' ? 'text-white' : ''} hover:text-white transition-colors h-full flex items-center`}
        >
          Blog
        </button>
      </div>

      <button 
        onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
        className="hidden md:block px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors"
      >
        Contact Us
      </button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isServicesMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl cursor-default"
            onMouseEnter={() => setIsServicesMenuOpen(true)}
            onMouseLeave={() => setIsServicesMenuOpen(false)}
          >
            <div className="container mx-auto px-6 md:px-12 py-10 flex gap-12">
              {/* Left Column: Services List */}
              <div className="w-5/12">
                <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-display font-bold text-white">Layanan</h3>
                  <button 
                    onClick={() => {
                      setIsServicesMenuOpen(false);
                      if (currentPage !== 'home') {
                        setCurrentPage('home');
                        setTimeout(() => {
                          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Semua Layanan
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {servicesData.map(s => (
                    <button
                      key={s.id}
                      onMouseEnter={() => setActiveService(s.id)}
                      onClick={() => { 
                        setCurrentPage(('service-' + s.id) as PageType); 
                        window.scrollTo(0, 0);
                        setIsServicesMenuOpen(false);
                      }}
                      className={`text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeService === s.id ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white hover:bg-transparent'}`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Description */}
              <div className="w-7/12 pt-16 pl-8 border-l border-white/10">
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {servicesData.find(s => s.id === activeService)?.desc}
                </p>
                <button 
                  onClick={() => { 
                    setCurrentPage(('service-' + activeService) as PageType); 
                    window.scrollTo(0, 0);
                    setIsServicesMenuOpen(false);
                  }}
                  className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 text-sm"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white p-2"
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
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <span className="text-left text-lg font-medium text-white">About Us</span>
              <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                <button 
                  onClick={() => { setCurrentPage('about-vision'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
                  className={`text-left text-base font-medium ${currentPage === 'about-vision' ? 'text-white' : 'text-neutral-400'}`}
                >
                  Visi dan Misi
                </button>
                <button 
                  onClick={() => { setCurrentPage('about-pillars'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
                  className={`text-left text-base font-medium ${currentPage === 'about-pillars' ? 'text-white' : 'text-neutral-400'}`}
                >
                  Pilar Bisnis
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setCurrentPage('about-funding'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
                className={`text-left text-lg font-medium ${currentPage === 'about-funding' ? 'text-white' : 'text-neutral-400'}`}
              >
                Funding Portfolio
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-left text-lg font-medium text-white">Business Consulting</span>
              <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                <button 
                  onClick={() => { 
                    setIsMobileMenuOpen(false);
                    if (currentPage !== 'home') {
                      setCurrentPage('home');
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-base font-medium text-indigo-400 mb-2"
                >
                  Semua Layanan
                </button>
                {servicesData.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => { setCurrentPage(('service-' + s.id) as PageType); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
                    className={`text-left text-base font-medium ${currentPage === ('service-' + s.id) ? 'text-white' : 'text-neutral-400'}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
              className="text-left text-lg font-medium text-neutral-400"
            >
              Funding
            </button>
            <button 
              onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
              className={`text-left text-lg font-medium ${currentPage === 'careers' ? 'text-white' : 'text-neutral-400'}`}
            >
              Careers
            </button>
            <button 
              onClick={() => { setCurrentPage('blog'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
              className={`text-left text-lg font-medium ${currentPage === 'blog' ? 'text-white' : 'text-neutral-400'}`}
            >
              Blog
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
              className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors w-full text-center"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setCurrentPage }: { setCurrentPage: (p: 'home' | 'about' | 'services' | 'contact') => void }) => {
  const dataNodes = [
    { left: "20%", delay: 0, duration: 12 },
    { left: "45%", delay: 3, duration: 15 },
    { left: "65%", delay: 1, duration: 10 },
    { left: "80%", delay: 5, duration: 14 },
    { left: "35%", delay: 2, duration: 11 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements - "Beyond Business" Theme */}
      <div className="absolute inset-0 z-0 bg-[#020202] overflow-hidden pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]" />
        
        {/* Animated Flowing Grid */}
        <div 
          className="absolute inset-0 bg-grid opacity-30 animate-grid-flow" 
          style={{ maskImage: 'linear-gradient(to bottom, black 10%, transparent 80%)' }} 
        />

        {/* GLOBAL REACH: Rotating Wireframe Globe */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[40%] -left-[10%] w-[800px] h-[800px] opacity-[0.15]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.2">
            <circle cx="50" cy="50" r="48" />
            <ellipse cx="50" cy="50" rx="24" ry="48" />
            <ellipse cx="50" cy="50" rx="48" ry="24" />
            <ellipse cx="50" cy="50" rx="12" ry="48" />
            <ellipse cx="50" cy="50" rx="48" ry="12" />
            <path d="M 2 50 L 98 50" />
            <path d="M 50 2 L 50 98" />
          </svg>
        </motion.div>

        {/* GROWTH: Upward Trending Abstract Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="growth-curve" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M -100,1000 C 300,800 400,600 800,400 C 1200,200 1600,100 2000,-100"
            fill="none"
            stroke="url(#growth-curve)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 1, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M -100,1100 C 400,900 500,700 900,500 C 1300,300 1700,200 2100,0"
            fill="none"
            stroke="url(#growth-curve)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.5, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </svg>

        {/* INNOVATION: Floating Geometric Shapes (Hexagons) */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[35%] w-40 h-40"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-300" fill="none" stroke="currentColor" strokeWidth="0.5">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
            <polygon points="50 10 85 30 85 70 50 90 15 70 15 30" />
            <line x1="50" y1="1" x2="50" y2="99" />
            <line x1="5" y1="25" x2="95" y2="75" />
            <line x1="5" y1="75" x2="95" y2="25" />
          </svg>
        </motion.div>

        {/* Glowing Data Streams (Vertical) */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] top-0 w-[1px] h-[30%] bg-gradient-to-b from-transparent via-white/30 to-transparent blur-[1px]"
        />
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute left-[45%] top-0 w-[2px] h-[40%] bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent blur-[2px]"
        />
        
        {/* Floating Data Nodes */}
        {dataNodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["100vh", "-20vh"],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: node.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: node.delay
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]"
            style={{ left: node.left }}
          />
        ))}

        {/* Abstract "Beyond" Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[10%] w-[1000px] h-[1000px] rounded-full border border-white/5 border-dashed opacity-40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[5%] w-[800px] h-[800px] rounded-full border border-indigo-500/10 opacity-20"
        />

        {/* Soft Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-8">
                Go beyond <br />
                <span className="text-gradient">business as usual.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed"
            >
              Menjadi mitra strategis terdepan dalam membangun bisnis yang profesional, berdaya saing, dan berkelanjutan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button 
                onClick={() => document.getElementById('business-lines')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 glass-panel rounded-full font-bold text-white hover:bg-white/10 transition-all"
              >
                Our Services
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-[500px] perspective-[1000px]">
            <motion.div
              animate={{ 
                y: [-10, 10, -10], 
                rotateX: [5, -5, 5], 
                rotateY: [-5, 5, -5] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] glass-panel rounded-2xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex justify-between items-start">
                <div className="font-display font-bold text-2xl tracking-widest text-white/90">CGLINK</div>
                <div className="w-12 h-8 rounded bg-white/20" />
              </div>
              <div>
                <div className="text-sm text-neutral-400 mb-1 font-medium">Business Consultant</div>
                <div className="font-mono text-lg tracking-widest text-white/80">**** **** **** 2024</div>
              </div>
            </motion.div>
          </div>
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
      desc: "Meningkatkan kapabilitas melalui pengetahuan, sikap, dan mentalitas."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share",
      desc: "Berbagi cerita, pengalaman, dan solusi lintas tim dengan integritas."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Contribute",
      desc: "Melayani masyarakat melalui inisiatif sosial dan lingkungan."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                {v.icon}
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">{v.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Vision</h2>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light italic">
              "Menjadi jembatan utama bagi para pelaku bisnis di Indonesia untuk mencapai potensi maksimal mereka di pasar domestik dan global."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Mission</h2>
            <ul className="space-y-8">
              {[
                "Merumuskan strategi bisnis adaptif yang memastikan klien tetap relevan dan kompetitif.",
                "Mengoptimalkan struktur keuangan, manajemen risiko, dan perencanaan modal secara presisi.",
                "Membangun kehadiran merek digital yang kuat melalui strategi pemasaran berbasis data.",
                "Mengidentifikasi dan mempercepat penetrasi peluang pasar baru bagi bisnis klien.",
                "Menghubungkan titik-titik potensi melalui jejaring kemitraan strategis yang saling menguntungkan."
              ].map((m, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-sm font-mono font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg text-neutral-400 leading-relaxed">{m}</p>
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
      id: 'service-fundamental',
      title: "Strategy & Operations",
      desc: "Membangun fondasi kokoh untuk pertumbuhan tanpa batas melalui penyusunan model bisnis dan SOP yang efisien."
    },
    {
      id: 'service-digital',
      title: "Digital & Marketing",
      desc: "Menggabungkan seni pemasaran kreatif dengan presisi data untuk mengakselerasi skala bisnis Anda."
    },
    {
      id: 'service-partnerships',
      title: "Innovation & Development",
      desc: "Membangun jembatan dan membuka peluang melalui aliansi strategis dan ekspansi pasar."
    },
    {
      id: 'service-finance',
      title: "Finance & Tax",
      desc: "Presisi finansial untuk keputusan strategis yang tak tergoyahkan dan optimalisasi struktur modal."
    },
    {
      id: 'service-hc',
      title: "Human Capital",
      desc: "Menemukan talenta terbaik dan membangun budaya pemenang untuk mengeksekusi strategi bisnis Anda."
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Business Consulting</h2>
          <p className="text-xl text-neutral-400">Solusi komprehensif untuk pertumbuhan bisnis Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full hover:bg-white/5 transition-colors shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group"
            >
              <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">{s.desc}</p>
              <button 
                onClick={() => { setCurrentPage(s.id as PageType); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 text-indigo-400 font-bold group-hover:text-indigo-300 transition-colors mt-auto"
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
    <section id="business-lines" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Why Us?</h2>
            <div className="space-y-10">
              {reasons.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{r.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Our Business Lines</h2>
            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">
              CGLINK mengelola beragam lini usaha untuk menjawab kebutuhan pasar yang dinamis. Mulai dari B2B dan B2C, hingga retail, wholesale, serta sektor energi. Selain itu, CGLINK juga mengembangkan media digital lewat BTW Mister Catur, layanan perjalanan umroh, dan program affiliate yang membuka peluang distribusi lebih luas.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:bg-white hover:text-black transition-colors group cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                  <div className="text-neutral-400 group-hover:text-black transition-colors">
                    {l.icon}
                  </div>
                  <span className="font-bold text-sm">{l.name}</span>
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
    <section id="testimonials" className="py-24 relative z-10 bg-neutral-950/50 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What People Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white/40 to-transparent mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass-panel p-8 rounded-3xl flex flex-col justify-between hover:bg-white/5 transition-all duration-500 group relative overflow-hidden ${t.colSpan} ${t.rowSpan}`}
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-white/20 mb-6 group-hover:text-white/40 transition-colors" />
                <p className="text-lg text-neutral-300 leading-relaxed mb-8 font-light">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/10">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <span className="text-neutral-400">{t.role}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-neutral-300 font-medium">{t.company}</span>
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
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#020202]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Business <span className="text-gradient">Check-up</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-10 font-light">
                Ambil langkah pertama untuk mengoptimalkan bisnis Anda. Isi form evaluasi singkat ini untuk mendapatkan insight awal mengenai potensi dan area perbaikan di perusahaan Anda.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <TrendingUp className="w-5 h-5 text-white" />, text: "Identifikasi hambatan pertumbuhan" },
                  { icon: <BarChart3 className="w-5 h-5 text-white" />, text: "Dapatkan insight yang actionable" },
                  { icon: <ShieldCheck className="w-5 h-5 text-white" />, text: "Perkuat fundamental bisnis" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 text-neutral-300"
                  >
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-white/5"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Nama Lengkap</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Perusahaan</label>
                  <input type="text" name="company" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="PT Inovasi Maju" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Pesan / Tantangan Bisnis</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Ceritakan singkat tentang kebutuhan Anda..."></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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
    <footer className="border-t border-white/10 pt-24 pb-12 relative z-10 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white">
                <img 
                  src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
                  alt="CGLINK Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-widest">CGLINK</span>
            </div>
            <p className="text-neutral-400 max-w-md text-lg leading-relaxed mb-8">
              Mitra strategis terdepan dalam membangun bisnis yang profesional, berdaya saing, dan berkelanjutan.
            </p>
            <a 
              href="https://www.google.com/maps/place/CGLINK+Indonesia/data=!4m2!3m1!1s0x0:0xa427427426dcf26f?sa=X&ved=1t:2428&ictx=111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-white/10 h-48 w-full max-w-md relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Buka di Google Maps
                </span>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.012345678901!2d106.7725!3d-6.2731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa427427426dcf26f%3A0xa427427426dcf26f!2sCGLINK%20Indonesia!5e0!3m2!1sen!2sid!4v1711440000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, pointerEvents: 'none' }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CGLINK Indonesia Location"
              ></iframe>
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-8">Head Office</h4>
            <div className="space-y-4 text-neutral-400">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-white mt-1" />
                <p className="leading-relaxed">Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br/>Pondok Pinang, Kebayoran Lama<br/>Jakarta Selatan 12310</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-8">Contact</h4>
            <div className="space-y-6 text-neutral-400">
              <a href="tel:02112345678" className="flex gap-4 hover:text-white transition-colors items-center">
                <Phone className="w-5 h-5 shrink-0 text-white" />
                (021) 1234 5678
              </a>
              <a href="mailto:cglinkmultimedia@gmail.com" className="flex gap-4 hover:text-white transition-colors items-center">
                <Mail className="w-5 h-5 shrink-0 text-white" />
                cglinkmultimedia@gmail.com
              </a>
              <a href="https://cglinkindonesia.com" className="flex gap-4 hover:text-white transition-colors items-center">
                <Globe className="w-5 h-5 shrink-0 text-white" />
                cglinkindonesia.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} CGLINK INDONESIA. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
      className="pt-32 pb-24 min-h-screen relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">CGLINK Indonesia</h1>
          <h2 className="text-xl md:text-2xl text-gradient font-light mb-12">Membangun Masa Depan Bisnis Anda Bersama CGLINK Indonesia</h2>

          <div className="space-y-12 text-neutral-300 leading-relaxed">
            <section>
              <p className="text-lg">
                Di era transformasi ekonomi yang bergerak cepat, kehadiran mitra strategis bukan lagi sekadar pilihan, melainkan keharusan. CGLINK Indonesia hadir sebagai katalisator pertumbuhan bagi bisnis Anda.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Siapa Kami?</h3>
              <p>
                Didirikan pada tahun 2025 dan berbasis di jantung bisnis Jakarta Selatan, CGLINK Indonesia adalah firma konsultasi bisnis yang lahir dari semangat kolaborasi dan inovasi. Kami memahami bahwa setiap bisnis memiliki tantangan unik; itulah mengapa kami tidak hanya memberikan saran, tetapi memberikan solusi yang terukur and berkelanjutan.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Keahlian Utama Kami</h3>
              <p className="mb-4">Kami menggabungkan data, pengalaman industri, dan kreativitas untuk memberikan layanan komprehensif di berbagai pilar utama:</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                  <div><strong className="text-white">Strategi Bisnis:</strong> Merumuskan roadmap yang adaptif untuk memastikan bisnis Anda tetap relevan dan kompetitif.</div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                  <div><strong className="text-white">Manajemen Keuangan (Finance):</strong> Optimalisasi struktur modal, manajemen risiko, dan perencanaan keuangan yang presisi.</div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                  <div><strong className="text-white">Digital Marketing:</strong> Membangun kehadiran merek yang kuat melalui strategi pemasaran berbasis data untuk hasil konversi maksimal.</div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                  <div><strong className="text-white">Business Development:</strong> Mengidentifikasi peluang pasar baru dan mempercepat penetrasi produk/layanan Anda.</div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                  <div><strong className="text-white">Kemitraan Strategis (Partnerships):</strong> Menghubungkan titik-titik potensi dengan membangun jejaring yang saling menguntungkan.</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Mengapa Memilih CGLINK?</h3>
              <p className="mb-6">
                Kami percaya pada Profesionalitas Tanpa Kompromi. Tim kami terdiri dari para ahli yang berdedikasi tinggi untuk membantu klien menavigasi kompleksitas dunia usaha. Dengan filosofi kerja yang transparan dan berorientasi pada hasil, kami memastikan setiap langkah yang kita ambil bersama membawa Anda lebih dekat ke puncak kesuksesan.
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-8 bg-white/5 rounded-r-xl italic text-lg text-white/90">
                "Visi kami adalah menjadi jembatan (Link) utama bagi para pelaku bisnis di Indonesia untuk mencapai potensi maksimal mereka di pasar global."
              </blockquote>
              <p className="text-xl text-white font-medium mt-12 text-center">
                Siap untuk membawa bisnis Anda ke level selanjutnya? Mari berdiskusi bagaimana CGLINK Indonesia dapat membantu menyempurnakan strategi Anda hari ini.
              </p>
            </section>

            {/* CTA Buttons */}
            <div className="mt-16 pt-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-12"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:cglinkmultimedia@gmail.com"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a 
                  href="https://wa.me/62895428355681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)] backdrop-blur-md"
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
      className="pt-32 pb-24 min-h-screen relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info & Value Proposition */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Langkah Pertama Menuju <span className="text-gradient">Transformasi Bisnis</span> Anda Dimulai di Sini.
            </h1>
            <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
              Punya visi besar yang ingin diwujudkan? Atau tantangan bisnis yang butuh solusi segera? Jangan biarkan pertanyaan Anda tidak terjawab. Tim ahli CGLINK Indonesia siap mendengarkan, menganalisis, dan berkolaborasi dengan Anda untuk menciptakan strategi yang berdampak nyata.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-display font-bold text-white mb-6">Mari Berdiskusi</h3>
                <p className="text-neutral-400 mb-6">Kami percaya bahwa setiap solusi hebat dimulai dari percakapan yang berkualitas. Pilih cara yang paling nyaman bagi Anda untuk terhubung dengan kami:</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Kantor Pusat</h4>
                      <p className="text-neutral-400">Jl. Ciputat Raya No. 1B Unit 4 RT01/RW08<br/>Pondok Pinang, Kebayoran Lama<br/>Jakarta Selatan 12310</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Konsultasi Cepat</h4>
                      <a href="https://wa.me/62895428355681" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-indigo-400 transition-colors">Whatsapp: +62 895-4283-55681</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Korespondensi Email</h4>
                      <a href="mailto:cglinkmultimedia@gmail.com" className="text-neutral-400 hover:text-indigo-400 transition-colors">cglinkmultimedia@gmail.com</a>
                      <p className="text-sm text-neutral-500 mt-1">Kami berkomitmen membalas pesan Anda dalam waktu &lt; 24 jam kerja.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-display font-bold text-white mb-6">Ikuti Perjalanan Kami</h3>
                <div className="flex gap-4">
                  <a href="https://id.linkedin.com/company/catur-gunandi-link-indonesia?trk=ppro_cprof" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/cglink_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Form & Why Us */}
          <div>
            <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Kirim Pesan Langsung</h3>
              <p className="text-neutral-400 mb-8">Siap untuk memulai? Isi formulir singkat di bawah ini, dan konsultan spesialis kami akan menghubungi Anda untuk menjadwalkan sesi diagnosis bisnis gratis.</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400">Nama Lengkap</label>
                    <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-400">Perusahaan</label>
                    <input type="text" name="company" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="PT Inovasi Maju" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Email</label>
                  <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Pesan / Tantangan Bisnis</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Ceritakan singkat tentang kebutuhan Anda..."></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>
              </form>
            </div>

            <div className="glass-panel p-8 rounded-3xl bg-indigo-900/10 border-indigo-500/20">
              <h3 className="text-xl font-display font-bold text-white mb-4">Mengapa Menghubungi Kami Sekarang?</h3>
              <p className="text-neutral-400 text-sm mb-6">Di dunia bisnis, waktu adalah mata uang yang paling berharga. Menunda solusi berarti menunda pertumbuhan. Dengan menghubungi CGLINK Indonesia, Anda mendapatkan:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /><div><strong className="text-white">Sesi Diagnosis Awal:</strong> Pemetaan masalah secara objektif.</div></li>
                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /><div><strong className="text-white">Kerahasiaan Data (NDA):</strong> Informasi bisnis Anda aman bersama kami.</div></li>
                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /><div><strong className="text-white">Rencana Aksi Kustom:</strong> Bukan solusi template, tapi strategi yang dirancang khusus untuk Anda.</div></li>
              </ul>

              <blockquote className="border-l-2 border-indigo-500 pl-4 py-1 italic text-white/80 text-sm">
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/30 font-sans">
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
            <CoreValues />
            <VisionMission />
            <ServicesSection setCurrentPage={setCurrentPage} />
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
