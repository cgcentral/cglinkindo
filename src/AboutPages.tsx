import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight,
  Mail, 
  CheckCircle2, 
  Building2,
  Users, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Target,
  Lightbulb,
  Handshake,
  Search,
  UserCheck,
  Award,
  Heart,
  Briefcase,
  Coins,
  FileText,
  Globe,
  Settings,
  Store,
  BarChart,
  Shirt,
  GraduationCap,
  Instagram,
  Camera
} from "lucide-react";
import { downloadUmrohReportPDF } from "./utils/umrohPdfGenerator";
import { CGLinkLogo, SPNLogo, BTWMisterCaturLogo, CGTourTravelLogo, CGLinkImgLogo, SPNImgLogo, AffiliateBukuLogo, YoutubeChannelLogo, CGTourTravelImgLogo } from "./components/BusinessLogos";
import { Youtube, ExternalLink } from "lucide-react";

interface PageProps {
  onBack: () => void;
}

const CTASection = () => (
  <div className="mt-16 pt-8">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent mb-12"
    />
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="mailto:businesspartner@cglinkindonesia.com"
        className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
      >
        <Mail className="w-5 h-5" />
        Email Us
      </a>
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  </div>
);

export const VisionMissionPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        {/* Hero / Intro Section */}
        <motion.div variants={itemVariants} className="w-full mb-32">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900">
            CGLINK Indonesia
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-500 font-medium mb-8 leading-tight">
            Building Your Business Future with CGLINK Indonesia
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl font-medium">
            In an era of fast-moving economic transformation, the presence of a strategic partner is no longer just an option, but a necessity. CGLINK Indonesia is here as a catalyst for your business growth.
          </p>
        </motion.div>

        {/* Philosophy / Visi & Misi Section */}
        <motion.div variants={itemVariants} className="mb-12 bg-neutral-50 rounded-3xl p-10 md:p-12 border border-neutral-100">
          <div className="inline-block px-4 py-1 rounded-full bg-neutral-900 text-white text-[9px] font-black tracking-widest uppercase mb-6">Our Philosophy</div>
          <h3 className="text-3xl font-display font-black text-neutral-900 uppercase tracking-tighter mb-4">Professionalism Without Compromise</h3>
          <p className="text-lg text-neutral-600 leading-relaxed font-semibold max-w-4xl">
            We believe that sustainable growth can only be achieved by upholding legal transparency, logical strategy, and halal business compliance. Our work philosophy forms our primary guide in guiding clients and managing strategic assets to create long-term social and economic impact across Indonesia.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* Visi */}
          <motion.div 
            variants={itemVariants}
            className="relative group overflow-hidden rounded-3xl bg-white text-black p-12 md:p-16 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-8 opacity-10 absolute -top-10 -left-6 uppercase">Vision</h2>
              <h2 className="text-5xl font-display font-bold mb-12 relative uppercase">Vision</h2>
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-12">
                "To be a strategic business collaboration partner based on legal, logical, and halal principles through products, services, and professional business development to create sustainable growth and benefits for all parties."
              </p>
              <div className="h-px w-24 bg-black/20 mb-12"></div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-display font-black leading-none tracking-tighter">
                ONE LINK,<br />
                THOUSANDS OF<br />
                OPPORTUNITIES.
              </h3>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-neutral-50 rounded-3xl p-12 md:p-16 border border-neutral-100"
          >
            <h2 className="text-5xl font-display font-bold mb-12 text-neutral-900 uppercase tracking-tighter">Mission</h2>
            <div className="space-y-8">
              {[
                "Organize legal, logical, and halal business products and services.",
                "Become a professional and mutually beneficial business collaboration partner.",
                "Provide value-added consulting services and business solutions.",
                "Develop new businesses and business opportunities professionally and sustainably.",
                "Create sustainable growth and benefits for all parties."
              ].map((misi, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-400">
                    0{idx + 1}
                  </div>
                  <p className="text-lg text-neutral-500 leading-relaxed group-hover:text-neutral-900 transition-colors font-medium">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Nilai-Nilai Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-neutral-900 uppercase">VALUES</h2>
            <div className="text-right">
              <p className="text-neutral-900 font-display font-bold text-2xl mb-2">GRACE</p>
              <p className="text-neutral-400 max-w-xs font-bold uppercase tracking-widest text-xs">Grow • Share • Contribute</p>
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
              <div key={idx} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-2xl mb-4 text-neutral-900">{item.title}</h4>
                <p className="text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Mengapa CGLINK Consulting? Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-900/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black mb-20 text-center text-neutral-900 uppercase tracking-tighter">Why CGLINK Consulting?</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {[
                { num: "01", title: "Data Driven Strategy", desc: "Every recommendation we provide is based on in-depth research and real data analysis — not assumptions." },
                { num: "02", title: "Experienced Consultants", desc: "Over 10 years of direct experience in the Indonesian business ecosystem." },
                { num: "03", title: "Personal Approach", desc: "Every solution is tailormade to your unique business conditions." },
                { num: "04", title: "Value Based", desc: "A business philosophy that integrates integrity, trust, and real social impact." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-5xl font-display font-black text-neutral-200 group-hover:text-neutral-900 transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h4>
                    <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-700 transition-colors font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kami Hadir untuk Anda Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-20 text-center text-neutral-900 uppercase tracking-tighter">We Are Here For You</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Corporates", desc: "Market insights and strategic advisory for smarter and more measurable business decisions." },
              { title: "Investors", desc: "A bridge between your capital and verified, high-potential business opportunities." },
              { title: "Startups", desc: "From business model validation to regional expansion — we are with you every step of the way." },
              { title: "SMEs", desc: "Rise to the next level with the right strategy and full support from our professional team." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative p-8 rounded-3xl border border-neutral-100 bg-neutral-50 h-full flex flex-col hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="text-2xl font-display font-bold mb-4 text-neutral-900">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  <div className="mt-auto pt-6">
                    <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all text-neutral-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};

export const PilarBisnisPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>
        <motion.div variants={itemVariants} className="w-full mb-24">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900">
            BUSINESS PILLARS
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl font-medium">
            Our service structure is designed to provide comprehensive support for your business growth through strategic partnerships and expert consulting.
          </p>
        </motion.div>

        {/* Pilar Bisnis Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-16 border-l-4 border-neutral-900 pl-6 text-neutral-900 uppercase tracking-tighter">Business Units</h2>
          <div className="space-y-16">
            
            {/* 1. BUSINESS CONSULTING */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group relative overflow-hidden text-left">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm aspect-square max-w-[280px] mx-auto group-hover:shadow-md transition-all">
                  <CGLinkImgLogo className="w-full h-full max-h-[160px]" />
                </div>
                <div className="lg:col-span-8">
                  <span className="text-[10px] font-black tracking-widest text-[#C5A059] uppercase block mb-3">Corporate Advisory & Operations</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-900 uppercase tracking-tight">Business Consulting</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-medium">
                    Since 2023, CGLINK Indonesia has operated as a premium business consulting advisor in Jakarta. We provide legal standing structures, operational design, management standardizations, and risk audits to support scalable and sustainable business compliance.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    {[
                      "Fully compliant legal & corporate setup support.",
                      "Operational roadmap design & operating standards.",
                      "Transparent advisory based on legal, logical, and halal.",
                      "High-caliber networking with premium ecosystem partners."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                        <span className="font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://cglinkindonesia.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-bold text-sm hover:bg-neutral-800 transition-all group/btn"
                  >
                    <span>Visit cglinkindonesia.com</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. B2C SERVICES (CG TOUR & TRAVEL) */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group relative overflow-hidden text-left">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 flex items-center justify-center p-6 bg-black rounded-3xl border border-neutral-900 shadow-sm aspect-square max-w-[280px] mx-auto group-hover:shadow-md transition-all">
                  <CGTourTravelImgLogo className="w-full h-full max-h-[160px]" />
                </div>
                <div className="lg:col-span-8">
                  <span className="text-[10px] font-black tracking-widest text-[#C5A059] uppercase block mb-3">Consumer Services (B2C)</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-900 uppercase tracking-tight">CG Tour & Travel</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-medium">
                    Our dedicated B2C division, CG Tour & Travel, delivers highly reliable, comfortable, and trustworthy Umrah and Islamic tour solutions. We partner with top aviation, hospitality, and local transport operators in Saudi Arabia to guide pilgrims on an uncompromising journey to Baitullah.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    {[
                      "Trustworthy Sharia-compliant sacred journey services.",
                      "Official licensed partner networks in Makkah & Madinah.",
                      "Excellent accommodation & guide companionship.",
                      "Flexible customized Umrah holiday flight packages."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                        <span className="font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://cgtourtravel.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-bold text-sm hover:bg-neutral-800 transition-all group/btn"
                  >
                    <span>Visit cgtourtravel.com</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. ENERGY (SATYA PETROLEUM NUSANTARA) */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group relative overflow-hidden text-left">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm aspect-square max-w-[280px] mx-auto group-hover:shadow-md transition-all">
                  <SPNImgLogo className="w-full h-full max-h-[160px]" />
                </div>
                <div className="lg:col-span-8">
                  <span className="text-[10px] font-black tracking-widest text-[#27AE60] uppercase block mb-3">Resource & Energy Division</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-900 uppercase tracking-tight">Satya Petroleum Nusantara</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-medium">
                    Through PT Satya Petroleum Nusantara, we operate as an official authorized fuel distribution agent for Pertamina Patra Niaga. SPN specializes in high-volume industrial and marine fuel trading (HSD / Minyak Solar B35) with strict compliance, safety, and operational excellence.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    {[
                      "Official authorized agent of Pertamina Patra Niaga.",
                      "Industrial High-Speed Diesel (HSD / Solar B35) compliance.",
                      "Fast, direct, and transparent oil logistics delivery.",
                      "Strict adherence to safety and quality regulations."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#27AE60] shrink-0 mt-0.5" />
                        <span className="font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://satyapetroleumnusantara.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#27AE60] text-white rounded-full font-bold text-sm hover:bg-[#1e824c] transition-all group/btn"
                  >
                    <span>Visit satyapetroleumnusantara.com</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4. AFFILIATE PROGRAM: BUKU PULANG SEBELUM BERLARI */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group relative overflow-hidden text-left">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm aspect-square max-w-[280px] mx-auto group-hover:shadow-md transition-all">
                  <AffiliateBukuLogo className="w-full h-full max-h-[160px]" />
                </div>
                <div className="lg:col-span-8">
                  <span className="text-[10px] font-black tracking-widest text-[#1E3799] uppercase block mb-3">Affiliate Partnership Network</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-900 uppercase tracking-tight">Affiliate Buku Pulang Sebelum Berlari</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-medium">
                    Program affiliate resmi untuk Buku "Pulang Sebelum Berlari" karya Mister Catur. Kami membuka kemitraan bagi para pembaca, komunitas kreator, pengulas, dan rekan bisnis untuk memperluas distribusi buku inspirasional ini melalui skema bagi hasil yang menarik dan sistem pelacakan digital yang transparan.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    {[
                      "Skema bagi hasil bagi hasil komisi digital yang transparan.",
                      "Alat pelacakan konversi & dashboard afiliasi modern.",
                      "Membantu menyebarkan literasi kepemimpinan & kebijaksanaan hidup.",
                      "Dukungan materi promosi digital lengkap siap pakai."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#1E3799] shrink-0 mt-0.5" />
                        <span className="font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://btwmistercatur.com/affiliate/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3799] text-white rounded-full font-bold text-sm hover:bg-[#0c2461] transition-all group/btn"
                  >
                    <span>Visit Affiliate Portal</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 5. MEDIA CHANNEL */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group relative overflow-hidden text-left">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm aspect-square max-w-[280px] mx-auto group-hover:shadow-md transition-all relative">
                  <YoutubeChannelLogo className="w-full h-full max-h-[160px]" />
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white rounded-2xl px-3 py-1.5 flex items-center gap-1.5 text-xs font-black tracking-wider uppercase shadow-lg">
                    <Youtube className="w-4 h-4 fill-white" /> Live Media
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <span className="text-[10px] font-black tracking-widest text-[#eb2f06] uppercase block mb-3">YouTube Broadcast & Production</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-900 uppercase tracking-tight">BTW Mister Catur YouTube Media</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-medium">
                    The multimedia content powerhouse of CGLINK, led by the interactive YouTube program "Break Time With Mister Catur & Friends". Our platform focuses on business coaching, life wisdom, leadership mentorship, and Islamic motivation, serving over thousands of active listeners across social channels.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    {[
                      "High-impact business podcasting & interviews.",
                      "Highly engaged listener base centered on growth values.",
                      "Collaborative video sponsorships & product placement.",
                      "Broadcast-quality video editing & content production."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://www.youtube.com/channel/UCkTtWkZY0dL9NOl3Q3vXfSQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#eb2f06] text-white rounded-full font-bold text-sm hover:bg-red-700 transition-all group/btn"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};

export const ImpactPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedReport, setSelectedReport] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const reports = [
    {
      id: "qurban-2025",
      title: "YASCI Qurban 2025 Beneficiary Report: Reaching 7,070 People Across Indonesia",
      category: "Social Impact",
      date: "June 2025",
      image: "https://cglinkindonesia.com/wp-content/uploads/2026/05/WhatsApp-Image-2025-05-08-at-06.34.06-scaled.jpeg",
      desc: "Yayasan Amal Soleh CG Link (YASCI) delivered sacrificial meat and hope to 7,070 beneficiaries across Indonesia, reaching communities that rarely receive qurban."
    },
    {
      id: "umroh-2025",
      title: "Umroh Tamu Allah Spesial 2025: 42 Dakwah Champions Reach Baitullah During Ramadhan",
      category: "Social Impact",
      date: "March 2025",
      image: "https://cglinkindonesia.com/wp-content/uploads/2026/05/umroh-tamu-allah.jpeg",
      desc: "Umroh Tamu Allah Spesial (UTAS) 2025, organized by Yayasan Amal Soleh CG Link, successfully sent 42 selected jamaah to perform umrah in the holy cities of Makkah and Madinah in Ramadan 1446 H."
    },
    {
      id: "bukber-2026",
      title: "YASCI Bukber Ifthar 2026: Sharing Ramadhan Blessings Across 17 Islamic Institutions",
      category: "Social Impact",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=2340&auto=format&fit=crop",
      desc: "During Ramadhan 1447 H, Yayasan Amal Soleh CG Link (YASCI) distributed ifthar support across mosques, pesantren, and Islamic foundations throughout Indonesia."
    }
  ];

  const filteredReports = selectedCategory === "All"
    ? reports
    : reports.filter(r => r.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  if (selectedReport) {
    const isQurban = selectedReport.id === 'qurban-2025';
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-900 selection:text-white"
      >
        <div className="w-full px-6 md:px-16 max-w-5xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => setSelectedReport(null)} 
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-16 transition-colors group font-black uppercase tracking-[0.4em] text-[10px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            Back to Impact
          </button>

          {isQurban ? (
            <div className="text-left">
              {/* Article Header */}
              <div className="space-y-6 mb-12">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-neutral-400">
                  <span className="px-3 py-1 bg-neutral-900 text-white rounded-full uppercase tracking-widest text-[9px]">
                    {selectedReport.category}
                  </span>
                  <span>•</span>
                  <span>{selectedReport.date}</span>
                  <span>•</span>
                  <span>5 Min Read</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 tracking-tighter uppercase leading-[1.1]">
                  {selectedReport.title}
                </h1>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl">
                  YASCI Qurban 2025, organized by Yayasan Amal Soleh CG Link, has successfully delivered the joy of Eid al-Adha to thousands of recipients across Indonesia. Conducted on 6–7 June 2025 (10–11 Dzulhijjah 1446 H), this qurban distribution program reached communities that rarely receive qurban meat throughout the year.
                </p>
              </div>

              {/* Main Banner / Thumbnail */}
              <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-16 border border-neutral-100 shadow-2xl">
                <img 
                  src={selectedReport.image} 
                  alt={selectedReport.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Realization Metrics Grid */}
              <div className="my-16 bg-neutral-50 rounded-[3rem] p-10 md:p-16 border border-neutral-100">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-neutral-500 text-center">Program Realization at a Glance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-display font-black text-red-600 mb-2">7,070</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Total Beneficiaries</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">12</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Cows Distributed</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">4,702 kg</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Total weight</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">12</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Entities/Points</div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center px-4 gap-4 text-center sm:text-left">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Total Program Cost</div>
                    <div className="text-2xl font-display font-bold text-neutral-950">Rp 301,825,000</div>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">Covering cattle purchase, slaughter logistics, banners, and organic packaging</span>
                </div>
              </div>

              {/* Editorial Article Body */}
              <div className="text-neutral-600 text-lg leading-relaxed font-medium space-y-8">
                <p>
                  YASCI Qurban 2025 prioritized underserved regions, distributing meat from Nusa Tenggara Timur to West Kalimantan. Recipient institutions included Masjid Ar Rahman (NTT, 392 recipients), Ponpes Tahfidz Madina (West Java, 963 recipients), Masjid At-Taqwa Cianjur (744 recipients), Ponpes Darul Fikar (Banten, 765 recipients), Masjid Baiturrahim (West Kalimantan, 536 recipients), Pondok Darul Mukhlasin (Lampung, 690 recipients), and Masjid Muslim Bilionaire (Bogor, 836 recipients), among others.
                </p>

                {/* Table Breakdown */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 my-10 overflow-x-auto">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">Key Distribution Allocations</h4>
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-neutral-200 text-[10px] font-black uppercase tracking-wider text-neutral-500">
                        <th className="pb-4">Recipient Entity</th>
                        <th className="pb-4">Region/Province</th>
                        <th className="pb-4 text-right">Beneficiary Count</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 font-semibold text-neutral-800">
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Masjid Ar Rahman</td>
                        <td className="py-3 text-neutral-500">Nusa Tenggara Timur (NTT)</td>
                        <td className="py-3 text-right font-mono">392 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Ponpes Tahfidz Madina</td>
                        <td className="py-3 text-neutral-500">West Java</td>
                        <td className="py-3 text-right font-mono">963 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Masjid At-Taqwa Cianjur</td>
                        <td className="py-3 text-neutral-500">Cianjur, West Java</td>
                        <td className="py-3 text-right font-mono">744 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Ponpes Darul Fikar</td>
                        <td className="py-3 text-neutral-500">Banten</td>
                        <td className="py-3 text-right font-mono">765 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Masjid Baiturrahim</td>
                        <td className="py-3 text-neutral-500">West Kalimantan</td>
                        <td className="py-3 text-right font-mono">536 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Pondok Darul Mukhlasin</td>
                        <td className="py-3 text-neutral-500">Lampung</td>
                        <td className="py-3 text-right font-mono">690 recipients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Masjid Muslim Bilionaire</td>
                        <td className="py-3 text-neutral-500">Bogor, West Java</td>
                        <td className="py-3 text-right font-mono">836 recipients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Transparent Execution Process</h3>
                <p>
                  The program followed a structured workflow: online registration via Facebook, two-stage data verification through WhatsApp and Zoom, livestock procurement based on recommendations from local mosques and pesantren, two-phase payment to vetted vendors, and delivery one day before slaughter. Total realized expenditure reached Rp 301,825,000, covering cattle purchase, slaughter logistics, banners, and packaging.
                </p>

                {/* Image 2 (Body image) */}
                <div className="my-16 rounded-[3rem] overflow-hidden border border-neutral-100 shadow-xl relative aspect-[16/10]">
                  <img 
                    src="https://cglinkindonesia.com/wp-content/uploads/2026/05/WhatsApp-Image-2025-05-07-at-11.39.00-1.jpeg" 
                    alt="YASCI execution operations" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10" />
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-2xl text-white text-xs font-semibold leading-relaxed">
                    YASCI execution processes ensuring high-fidelity delivery and verified Sharia-compliance across distributions.
                  </div>
                </div>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Building Bridges of Goodness</h3>
                <p>
                  YASCI Qurban 2025 demonstrates that strategic qurban distribution can extend benefit far beyond a single neighborhood. By partnering with verified Islamic institutions across multiple provinces, Yayasan Amal Soleh CG Link continues to serve as a bridge between qurban donors and communities most in need of this annual blessing.
                </p>
              </div>

              <div className="pt-20 border-t border-neutral-100 mt-20 flex justify-between items-center flex-wrap gap-8">
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 font-display mb-1">Amplify the Impact</h4>
                  <p className="text-xs text-neutral-400 font-medium">Follow Yayasan Amal Soleh CGLINK (YASCI) on Instagram to support our daily missions.</p>
                </div>
                <a 
                  href="https://www.instagram.com/cglinkindonesia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-850 transition-all flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Go to YASCI Instagram
                </a>
              </div>
            </div>
          ) : selectedReport.id === 'umroh-2025' ? (
            <div className="text-left">
              {/* Article Header */}
              <div className="space-y-6 mb-12">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-neutral-400">
                  <span className="px-3 py-1 bg-neutral-900 text-white rounded-full uppercase tracking-widest text-[9px]">
                    {selectedReport.category}
                  </span>
                  <span>•</span>
                  <span>{selectedReport.date}</span>
                  <span>•</span>
                  <span>6 Min Read</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 tracking-tighter uppercase leading-[1.1]">
                  {selectedReport.title}
                </h1>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl">
                  Umroh Tamu Allah Spesial (UTAS) 2025, organized by Yayasan Amal Soleh CG Link, successfully sent 42 selected jamaah to perform umrah in the holy cities of Makkah and Madinah in Ramadan 1446 H.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={downloadUmrohReportPDF}
                    className="flex items-center gap-3 px-8 py-4 bg-red-650 hover:bg-neutral-900 border border-neutral-200 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" /> Download Official PDF Report
                  </button>
                </div>
              </div>

              {/* Main Banner / Thumbnail */}
              <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-16 border border-neutral-100 shadow-2xl">
                <img 
                  src={selectedReport.image} 
                  alt={selectedReport.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Realization Metrics Grid */}
              <div className="my-16 bg-neutral-50 rounded-[3rem] p-10 md:p-16 border border-neutral-100">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-neutral-500 text-center">Program Realization at a Glance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-display font-black text-red-600 mb-2">42</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Total Jamaah</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">10</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Provinces Served</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">300m</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Hotel Distance to Haram</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">Rp 0</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Closing balance</div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center px-4 gap-4 text-center sm:text-left">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Total Program Cost</div>
                    <div className="text-2xl font-display font-bold text-neutral-950">Rp 1,218,428,217</div>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">Covering flight packages, local transits, hotel stays, and operational management.</span>
                </div>
              </div>

              {/* Editorial Article Body */}
              <div className="text-neutral-600 text-lg leading-relaxed font-medium space-y-8">
                <p>
                  Program <strong>Umroh Tamu Allah Spesial (UTAS) 2025</strong> yang dikelola oleh Yayasan Amal Soleh CG Link telah secara sukses memberangkatkan <strong>42 jamaah pilihan</strong> untuk menunaikan ibadah umroh di tanah suci Makkah dan Madinah pada <strong>4 – 12 Maret 2025</strong> (3 – 10 Ramadhan 1446 H). Program ini merupakan wujud apresiasi dan rasa syukur mendalam bagi pejuang dakwah, pengajar Al-Qur'an, dan pengabdi masjid yang tanpa pamrih berkhidmat di berbagai penjuru Indonesia.
                </p>

                {/* Table Breakdown */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 my-10 overflow-x-auto">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 font-display">Jamaah Qualifications & Classifications</h4>
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-neutral-200 text-[10px] font-black uppercase tracking-wider text-neutral-500">
                        <th className="pb-4">Dedication Role</th>
                        <th className="pb-4">Count</th>
                        <th className="pb-4">Core Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 font-semibold text-neutral-800">
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Guru Ngaji (Quran Teachers)</td>
                        <td className="py-3 font-mono text-red-650">19 Jamaah</td>
                        <td className="py-3 text-neutral-500">Educating local children on Quran reading and Islamic character</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Penggiat Dakwah (Dakwah Activists)</td>
                        <td className="py-3 font-mono text-red-650">15 Jamaah</td>
                        <td className="py-3 text-neutral-500">Community service, religious guidance, and grassroots activities</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950 font-display">Huffadz (Quran Memorizers)</td>
                        <td className="py-3 font-mono text-red-650">6 Jamaah</td>
                        <td className="py-3 text-neutral-500">Preserving the holy Quran text (30 Juz) & teaching in Islamic boarding schools</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-neutral-950">Marbot / Pengurus Masjid</td>
                        <td className="py-3 font-mono text-red-650">2 Jamaah</td>
                        <td className="py-3 text-neutral-500 font-sans">Serving local mosques, coordinating daily prayer logistics and administrative tasks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Direct Flights & Near-Haram Accommodations</h3>
                <p>
                  To ensure that our elders and dakwah workers can optimize their worship without heavy physical exhaustion, we designed a premium itinerary. Partnering with Salmi Halal Tour, the package included a direct flight with Saudi Arabian Airlines, and near-Haram hotel arrangements within 300 meters (Sawaed Al Khair in Makkah and Al Fayroz Shatta in Madinah).
                </p>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Zero Balance Financial Management</h3>
                <p>
                  Transparency is our fundamental covenant. Out of the Rp 1,218,428,217 in generous donor infaq received, every single rupiah was allocated to serve the jamaah: Rp 1.104 billion for the primary umrah packages, Rp 69 million for regional domestic travel to Jakarta, Rp 4.6 million for equipment and cash allowance, and Rp 39.9 million for ground operations. The closing balance is an absolute zero—proving our dedication to bringing dreams closer to Baitullah.
                </p>
              </div>

              <div className="pt-20 border-t border-neutral-100 mt-20 flex justify-between items-center flex-wrap gap-8">
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 font-display mb-1">Amplify the Impact</h4>
                  <p className="text-xs text-neutral-400 font-medium">Follow Yayasan Amal Soleh CGLINK (YASCI) on Instagram to support our daily missions.</p>
                </div>
                <a 
                  href="https://www.instagram.com/cglinkindonesia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-850 transition-all flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Go to YASCI Instagram
                </a>
              </div>
            </div>
          ) : selectedReport.id === 'bukber-2026' ? (
            <div className="text-left">
              {/* Article Header */}
              <div className="space-y-6 mb-12">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-neutral-400">
                  <span className="px-3 py-1 bg-neutral-900 text-white rounded-full uppercase tracking-widest text-[9px]">
                    {selectedReport.category}
                  </span>
                  <span>•</span>
                  <span>{selectedReport.date}</span>
                  <span>•</span>
                  <span>4 Min Read</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 tracking-tighter uppercase leading-[1.1]">
                  {selectedReport.title}
                </h1>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl">
                  Throughout the holy month of Ramadhan 1447 H, Yayasan Amal Soleh CG Link (YASCI) ran one of its most extensive community programs to date: distributing ifthar (breaking-fast) support across mosques, pesantren, and Islamic foundations throughout Indonesia.
                </p>
              </div>

              {/* Main Banner / Thumbnail */}
              <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-16 border border-neutral-100 shadow-2xl">
                <img 
                  src={selectedReport.image} 
                  alt={selectedReport.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Realization Metrics Grid */}
              <div className="my-16 bg-neutral-50 rounded-[3rem] p-10 md:p-16 border border-neutral-100">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-neutral-500 text-center">Program Realization at a Glance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-display font-black text-red-600 mb-2">17</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Islamic Institutions</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Direct Delivery</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">Ramadhan</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">1447 H / 2026 M</div>
                  </div>
                  <div className="text-center p-4 border-l border-neutral-200">
                    <div className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-2">Activists</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-neutral-500 leading-snug">Fully supported</div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center px-4 gap-4 text-center sm:text-left">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Core Objective</div>
                    <div className="text-2xl font-display font-bold text-neutral-950">Spiritual & Food Share</div>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">Empowering local mosques, Quran classes, and communities with essential ifthar support.</span>
                </div>
              </div>

              {/* Editorial Article Body */}
              <div className="text-neutral-600 text-lg leading-relaxed font-medium space-y-8">
                <p>
                  Throughout the holy month of Ramadhan 1447 H, <strong>Yayasan Amal Soleh CG Link (YASCI)</strong> ran one of its most extensive community programs to date: distributing ifthar (breaking-fast) support across mosques, pesantren, and Islamic foundations throughout Indonesia. The <strong>Bukber Ifthar 2026</strong> initiative brought the joy of communal iftar to congregations that often lacked the resources to organize one themselves.
                </p>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Reaching 17 Islamic Institutions</h3>
                <p>
                  The 2026 program partnered with 17 recipient entities, including:
                </p>
                
                {/* 17 Partners Table Grid */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 my-10 overflow-x-auto">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 font-display">Recipient list of 17 Partner Institutions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-neutral-800">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Muslim Bilonaire</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Komunitas Jum'at Berkah</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Cinta Quran Berbagi</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Al Imtyaz Bandung</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Ar Rahman Batu Putih</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Muhajirin Makassar</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Nuruddakwah</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Nurul Jam'ah</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Nurul Amin</li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid Nahdatul Islam</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid H. Riyanto</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Ponpes Darul Fikar</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Baitul Qur'an Nur Zamani</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Yayasan Al-Ikhwan</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> DKM Al Kautsar</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> DKM Sasama</li>
                      <li className="flex items-center gap-2 font-bold"><span className="w-2 h-2 rounded-full bg-red-650"></span> Masjid At-Taubah</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">A Nationwide Footprint</h3>
                <p>
                  YASCI prioritized geographic diversity. From Makassar in Sulawesi to mosque communities in Bandung and pesantren in West Java, the program intentionally reached congregations beyond the usual urban centers. Recipients included not only mosques but also Islamic boarding schools (pesantren), Quran-learning communities, and Islamic foundations — reflecting YASCI's belief that ifthar support should follow wherever Muslims gather to break their fast.
                </p>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">More Than a Meal</h3>
                <p>
                  For many recipient institutions, Bukber Ifthar 2026 enabled them to host nightly ifthar gatherings that strengthened their congregations, attracted santri, and welcomed surrounding communities. YASCI views this not merely as food distribution but as investment in the spiritual ecosystem of grassroots dakwah — feeding the body so that the heart and mind can focus on worship during Ramadhan's blessed nights.
                </p>

                <h3 className="text-2xl font-display font-black text-neutral-900 uppercase tracking-tight pt-6">Continuing the Mission</h3>
                <p>
                  YASCI continues building bridges of amal soleh (righteous deeds), connecting donors with the institutions that quietly carry Indonesia's Islamic tradition forward — one ifthar at a time.
                </p>
              </div>

              <div className="pt-20 border-t border-neutral-100 mt-20 flex justify-between items-center flex-wrap gap-8">
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 font-display mb-1">Amplify the Impact</h4>
                  <p className="text-xs text-neutral-400 font-medium">Follow Yayasan Amal Soleh CGLINK (YASCI) on Instagram to support our daily missions.</p>
                </div>
                <a 
                  href="https://www.instagram.com/cglinkindonesia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-850 transition-all flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Go to YASCI Instagram
                </a>
              </div>
            </div>
          ) : (
            <div className="text-left">
              <div className="space-y-6 mb-12">
                <span className="px-3 py-1 bg-neutral-900 text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                  {selectedReport.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 uppercase tracking-tighter leading-tight">
                  {selectedReport.title}
                </h1>
                <p className="text-sm text-neutral-400 font-bold font-mono">{selectedReport.date}</p>
              </div>

              <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-12 border border-neutral-100 shadow-xl">
                <img 
                  src={selectedReport.image} 
                  alt={selectedReport.title} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-lg text-neutral-600 leading-relaxed font-semibold max-w-2xl space-y-6">
                <p>{selectedReport.desc}</p>
                <p>This report highlights our operational benchmarks, transparency protocols, and systemic outcomes focused on circular economy principles and community welfare.</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-900 selection:text-white"
    >
      <div className="w-full px-6 md:px-16">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-16 transition-colors group font-black uppercase tracking-[0.4em] text-[10px]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <header className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.5em] mb-8 border-l-4 border-neutral-900 pl-6">Governance & Impact</div>
              <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 uppercase leading-[0.9] mb-8">
                Our Impact:<br />
                <span className="text-neutral-300">Committing to Real</span> <br />
                Contribution.
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-xl text-neutral-900 font-bold leading-relaxed mb-6">
                Aligned with our core value to "Contribute," CGLINK is dedicated to creating a positive, sustainable impact for our clients, the economy, and the wider community.
              </p>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-8">
                We are committed to not just building businesses, but making a tangible difference in society. Through our foundation, Yayasan Amal Soleh CGLINK (YASCI), we bring this commitment to life by driving various social, educational, and community empowerment programs.
              </p>
              <a 
                href="https://www.instagram.com/cglinkindonesia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-850 transition-all shadow-xl shadow-neutral-200"
              >
                <Instagram className="w-4 h-4" /> View Social Action
              </a>
            </div>
          </div>
        </header>

        {/* Focus Areas Section */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Social Collaborations",
                  icon: <Handshake className="w-8 h-8" />,
                  desc: "Actively partnering with various social foundations to amplify our shared impact through collaborative resource management and strategic outreach."
                },
                {
                  title: "Humanitarian Support",
                  icon: <Heart className="w-8 h-8" />,
                  desc: "Providing direct social assistance to underprivileged communities and supporting the physical development and operational welfare of local mosques."
                },
                {
                  title: "Muslim Empowerment",
                  icon: <Globe className="w-8 h-8" />,
                  desc: "Running special initiatives such as Qurban Sebar Nusantara and funding Umrah pilgrimages for dedicated mosque caretakers (marbot) and local religious leaders."
                }
              ].map((focus, i) => (
                <div key={i} className="p-12 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                    {focus.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase mb-6 tracking-tight">{focus.title}</h3>
                  <p className="text-neutral-500 font-medium leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              ))}
           </div>
        </section>



        {/* Featured Impact - Amal Soleh */}
        <section className="mb-40">
          <div className="bg-neutral-950 text-white rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-3 p-12 md:p-24 flex flex-col justify-center text-left">
                <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-10">Flagship Initiative</span>
                <h2 className="text-4xl md:text-7xl font-display font-black mb-10 uppercase tracking-tighter leading-none">
                  YASCI: Doing <br /> Good <br /> Better.
                </h2>
                <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-16 max-w-xl">
                  Through Yayasan Amal Soleh CGLINK (YASCI), we implement programs like Umrah funding for mosque caretakers (marbot) and Qurban distributions which ensure our growth feeds back into the heart of the community.
                </p>
                <div className="flex flex-wrap gap-12">
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">7,070+</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Lives Impacted</div>
                   </div>
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">15+</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Active Programs</div>
                   </div>
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">100%</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Halal Governance</div>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative min-h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2340&auto=format&fit=crop" 
                   alt="Impact Action"
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-900">Reports & <span className="text-neutral-400">Insights</span></h2>
            </div>
            <div className="flex flex-wrap gap-4">
               {['All', 'Social Impact'].map(cat => (
                 <button 
                   key={cat} 
                   onClick={() => setSelectedCategory(cat)}
                   className={`px-6 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                     (cat === 'All' && selectedCategory === 'All') ||
                     (cat !== 'All' && selectedCategory.toLowerCase().includes(cat.toLowerCase()))
                       ? 'bg-neutral-900 border-neutral-900 text-white' 
                       : 'border-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-500'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => { 
                  setSelectedReport(report); 
                  window.scrollTo(0, 0); 
                }}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] bg-neutral-50 border border-neutral-100 overflow-hidden mb-8 relative">
                   <img 
                     src={report.image} 
                     alt={report.title}
                     className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-white via-white/20 to-transparent">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">{report.category}</span>
                      <h3 className="text-2xl font-display font-bold text-neutral-900 leading-tight mb-6">{report.title}</h3>
                      <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                        View Report <FileText className="w-4 h-4" />
                      </button>
                   </div>
                </div>
                <div className="px-4">
                   <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                     {report.desc}
                   </p>
                </div>
              </motion.div>
            ))}
            </div>
        </section>
        
        <CTASection />
      </div>
    </motion.div>
  );
};

export const InvestmentThesisPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24"
    >
      <div className="w-full px-6 md:px-16 text-left">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group font-bold uppercase tracking-widest text-[10px]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <h1 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter text-neutral-900 uppercase leading-none">Investment <br/> Thesis</h1>
        
        <div className="bg-neutral-900 text-white p-12 md:p-20 rounded-[3.5rem] mb-32 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full"></div>
           <div className="max-w-5xl relative z-10">
             <h2 className="text-3xl md:text-5xl font-display font-black mb-10 uppercase tracking-tighter italic text-neutral-400">"We don't just invest capital; we invest in sustainable futures."</h2>
             
             <div className="grid lg:grid-cols-2 gap-16 mb-20 text-left">
               <div>
                  <h4 className="text-xl font-bold mb-8 uppercase tracking-[0.3em] text-white border-l-4 border-white pl-6">Investment Types</h4>
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-lg font-black text-neutral-200 mb-3 uppercase">Project-Based Funding</h5>
                      <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                        Financing ownership rights over a specific project, asset, or intellectual property of a business entity, so that the investment and risk are completely isolated to the viability and income of the project alone.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-neutral-200 mb-3 uppercase">Acquisition Funding</h5>
                      <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                        Funding provided to portfolio companies to purchase or acquire a complete corporate entity—including all assets, operations, employees, and liabilities—is intended to accelerate growth, gain market share, or acquire new talent (acqui-hire).
                      </p>
                    </div>
                  </div>
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-8 uppercase tracking-[0.3em] text-white border-l-4 border-white pl-6">Investment Criteria</h4>
                  <ul className="space-y-6 text-neutral-400 font-medium">
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>Minimum 3 years of active operation.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>Proven management and execution capabilities.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>The business model must be <span className="text-white italic">halal, legal, and logical</span>.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h4 className="text-sm font-black uppercase tracking-widest text-neutral-300 mb-4">Investment Amount</h4>
                    <p className="text-2xl font-display font-bold text-white mb-2">Up to IDR 500 Million</p>
                    <p className="text-neutral-500 text-xs font-medium">
                      Investments above IDR 500 million are possible for businesses that meet certain strategic requirements and conditions.
                    </p>
                  </div>
               </div>
             </div>
           </div>
        </div>
        
        <CTASection />
      </div>
    </motion.div>
  );
};

export const FundingPortfolioPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectors = [
    { name: "Retail", icon: <Store className="w-8 h-8" /> },
    { name: "Trading", icon: <BarChart className="w-8 h-8" /> },
    { name: "Fashion", icon: <Shirt className="w-8 h-8" /> },
    { name: "Education", icon: <GraduationCap className="w-8 h-8" /> }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        <motion.div variants={itemVariants} className="w-full mb-24 text-left">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900 leading-none">
            FUNDING <br/> PORTFOLIO
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-900 font-bold mb-8 uppercase tracking-widest">
            PARTNERSHIP & ACQUISITION
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-3xl font-medium">
            Strategic funding is carried out through a series of assessment and verification processes to ensure that investments made truly consider various aspects and have a positive impact on recipients.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-4 text-neutral-900">PORTFOLIO SECTOR</h2>
              <p className="text-lg text-neutral-500 max-w-xl font-medium">
                The following sectors are selected based on market potential, Sharia compliance, and business expansion readiness in Indonesia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <div key={idx} className="bg-neutral-50 p-12 rounded-[2.5rem] border border-neutral-100 hover:shadow-xl transition-all group text-center flex flex-col items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 uppercase tracking-tighter">{sector.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-neutral-900 p-12 md:p-20 rounded-[4rem] text-center mb-32 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-transparent"></div>
          <p className="text-2xl md:text-4xl text-white leading-tight max-w-4xl mx-auto font-display font-bold relative z-10">
            "We are currently actively expanding our investment portfolio sectors and opening up funding opportunities for potential partners."
          </p>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};
