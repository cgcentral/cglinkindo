import React, { useEffect } from "react";
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
  GraduationCap
} from "lucide-react";

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
      className="min-h-screen bg-[#050505] text-white pt-32 pb-24 selection:bg-white/20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        {/* Hero / Intro Section */}
        <motion.div variants={itemVariants} className="max-w-4xl mb-32">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            CGLINK Indonesia
          </h1>
          <h2 className="text-2xl md:text-4xl text-neutral-400 font-light mb-8 leading-tight">
            Membangun Masa Depan Bisnis Anda Bersama CGLINK Indonesia
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl">
            Di era transformasi ekonomi yang bergerak cepat, kehadiran mitra strategis bukan lagi sekadar pilihan, melainkan keharusan. CGLINK Indonesia hadir sebagai katalisator pertumbuhan bagi bisnis Anda.
          </p>
        </motion.div>

        {/* Siapa Kami & Mengapa Memilih Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.section variants={itemVariants} className="glass-panel p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-indigo-400" />
              Siapa Kami?
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Didirikan pada tahun 2025 dan berbasis di jantung bisnis Jakarta Selatan, CGLINK Indonesia adalah firma konsultasi bisnis yang lahir dari semangat kolaborasi dan inovasi. Kami memahami bahwa setiap bisnis memiliki tantangan unik; itulah mengapa kami tidak hanya memberikan saran, tetapi memberikan solusi yang terukur dan berkelanjutan.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="glass-panel p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
              Mengapa Memilih CGLINK?
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Kami percaya pada Profesionalitas Tanpa Kompromi. Tim kami terdiri dari para ahli yang berdedikasi tinggi untuk membantu klien menavigasi kompleksitas dunia usaha. Dengan filosofi kerja yang transparan dan berorientasi pada hasil, kami memastikan setiap langkah yang kita ambil bersama membawa Anda lebih dekat ke puncak kesuksesan.
            </p>
          </motion.section>
        </div>

          {/* Visi & Misi Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* Visi */}
          <motion.div 
            variants={itemVariants}
            className="relative group overflow-hidden rounded-3xl bg-white text-black p-12 md:p-16 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-8 opacity-10 absolute -top-10 -left-6">Visi</h2>
              <h2 className="text-5xl font-display font-bold mb-12 relative">Visi</h2>
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-12">
                "Menjadi mitra kolaborasi bisnis yang berlandaskan prinsip legal, logis, dan halal melalui produk, jasa, serta pengembangan bisnis profesional untuk menciptakan pertumbuhan dan manfaat berkelanjutan bagi seluruh pihak."
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

          {/* Misi */}
          <motion.div 
            variants={itemVariants}
            className="bg-neutral-900 rounded-3xl p-12 md:p-16 border border-white/5"
          >
            <h2 className="text-5xl font-display font-bold mb-12">Misi</h2>
            <div className="space-y-8">
              {[
                "Menyelenggarakan produk dan jasa bisnis yang legal, logis, dan halal.",
                "Menjadi mitra kolaborasi bisnis yang profesional dan saling menguntungkan.",
                "Memberikan layanan konsultasi dan solusi bisnis yang bernilai tambah.",
                "Mengembangkan bisnis dan peluang usaha baru secara profesional dan berkelanjutan.",
                "Menciptakan pertumbuhan dan manfaat yang berkelanjutan bagi seluruh pihak."
              ].map((misi, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 font-mono text-sm group-hover:bg-white group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <p className="text-lg text-neutral-400 leading-relaxed group-hover:text-white transition-colors">
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
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Nilai-Nilai</h2>
            <div className="text-right">
              <p className="text-indigo-400 font-display font-bold text-2xl mb-2">GRACE</p>
              <p className="text-neutral-500 max-w-xs">Grow • Share • Contribute</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Grow", 
                icon: <TrendingUp className="w-6 h-6" />, 
                desc: "Meningkatkan kapabilitas melalui pengetahuan, sikap, dan mentalitas berlandaskan kepercayaan dan profesionalisme." 
              },
              { 
                title: "Share", 
                icon: <Users className="w-6 h-6" />, 
                desc: "Berbagi cerita, pengalaman, dan solusi dengan klien, mitra dan masyarakat secara adil, transparan, dan bertanggung jawab." 
              },
              { 
                title: "Contribute", 
                icon: <Heart className="w-6 h-6" />, 
                desc: "Menciptakan dampak positif bagi klien, ekonomi, dan masyarakat melalui kegiatan yang berkelanjutan" 
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Mengapa CGLINK Consulting? Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center">Mengapa CGLINK Consulting?</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {[
                { num: "01", title: "Data Driven Strategy", desc: "Setiap rekomendasi kami dilandasi oleh riset mendalam dan analisis data nyata — bukan asumsi." },
                { num: "02", title: "Konsultan Berpengalaman", desc: "Lebih dari 10 tahun pengalaman langsung di ekosistem bisnis Indonesia." },
                { num: "03", title: "Pendekatan Personal", desc: "Setiap solusi disesuaikan dengan kondisi unik bisnis Anda." },
                { num: "04", title: "Berbasis Nilai", desc: "Filosofi bisnis yang mengintegrasikan integritas, amanah, dan dampak sosial yang nyata." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-5xl font-display font-black text-white/10 group-hover:text-white/40 transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kami Hadir untuk Anda Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center">Kami Hadir untuk Anda</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Korporasi", desc: "Insight pasar dan advisory strategis untuk keputusan bisnis yang lebih cerdas dan terukur." },
              { title: "Investor", desc: "Jembatan antara modal Anda dan peluang bisnis yang terverifikasi serta berpotensi tinggi." },
              { title: "Startup", desc: "Dari validasi model bisnis hingga ekspansi regional — kami ada di setiap langkah perjalanan Anda." },
              { title: "UMKM", desc: "Naik ke level berikutnya dengan strategi tepat dan dukungan penuh dari tim profesional kami." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative glass-panel p-8 rounded-3xl border border-white/5 h-full flex flex-col">
                  <h4 className="text-2xl font-display font-bold mb-4">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-auto pt-6">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
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
      className="min-h-screen bg-[#050505] text-white pt-32 pb-24 selection:bg-white/20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        <motion.div variants={itemVariants} className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            Pilar Bisnis
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
            Struktur layanan kami dirancang untuk memberikan dukungan komprehensif bagi pertumbuhan bisnis Anda melalui kemitraan strategis dan konsultasi ahli.
          </p>
        </motion.div>

        {/* Layanan Utama Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 border-l-4 border-indigo-500 pl-6">Layanan Utama</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Funding Partnership", 
                icon: <Handshake className="w-8 h-8" />, 
                desc: "Pendanaan syariah berbasis syirkah, transparan dan berkeadilan, untuk mendukung pertumbuhan usaha." 
              },
              { 
                title: "Business Consulting", 
                icon: <Briefcase className="w-8 h-8" />, 
                desc: "Konsultan bisnis yang membantu perusahaan menata pondasi usaha, mengelola keuangan & SDM, serta mengembangkan strategi digital untuk pertumbuhan berkelanjutan." 
              },
              { 
                title: "Funding Acquisition", 
                icon: <TrendingUp className="w-8 h-8" />, 
                desc: "Pendanaan syariah untuk mengembangkan usaha baru maupun masuk ke bisnis yang sudah berjalan, dengan strategi ekspansi yang terukur." 
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pilar Bisnis Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 border-l-4 border-indigo-500 pl-6">Pilar Bisnis</h2>
          <div className="space-y-12">
            {/* BTW Mister Catur */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">BTW Mister Catur</h3>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    Kanal media digital yang fokus pada konten bisnis, motivasi, dan nilai kehidupan. Melalui platform ini, kami tidak hanya membagikan insight praktis, tetapi juga membuka peluang kolaborasi dan sponsorship dengan mitra yang ingin menjangkau audiens yang relevan.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      "Fokus pada bisnis, motivasi, dan nilai Islami.",
                      "Jangkauan audiens luas melalui YouTube & media sosial.",
                      "Sudah tampil di beberapa podcast & media coverage",
                      "Terbuka untuk kolaborasi & sponsorship."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-400">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://btwmistercatur.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all group/btn"
                  >
                    Visit btwmistercatur.com
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img 
                    src="https://cglinkindonesia.com/wp-content/uploads/2026/03/Desain-tanpa-judul-2.png" 
                    alt="BTW Mister Catur" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* CG Tour & Travel */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">CG Tour & Travel</h3>
                  <p className="text-indigo-400 font-medium">Layanan Perjalanan Umroh Amanah</p>
                </div>
                <a 
                  href="https://cgtourtravel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
                >
                  cgtourtravel.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-3xl">
                Layanan perjalanan umroh yang amanah, nyaman, dan terpercaya. Kami mendampingi jamaah dengan manajemen perjalanan profesional serta dukungan mitra resmi untuk memastikan ibadah berjalan lancar.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Amanah & sesuai syariah.",
                  "Fasilitas perjalanan modern.",
                  "Pendampingan jamaah profesional.",
                  "Jaringan mitra resmi & terpercaya."
                ].map((bullet, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-neutral-300 font-medium">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Program Affiliate */}
              <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5">
                <h3 className="text-2xl font-display font-bold mb-6">Program Affiliate</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  CGLINK membuka peluang bagi mitra untuk memperluas distribusi produk melalui program affiliate. Dengan sistem yang terstruktur, kami membantu partner mencapai pasar yang lebih luas dan meningkatkan penjualan secara berkelanjutan.
                </p>
                <ul className="space-y-4">
                  {[
                    "Mudah bergabung & transparan.",
                    "Dukungan sistem penjualan digital.",
                    "Jaringan distribusi luas.",
                    "Potensi income tambahan."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-center text-neutral-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Yayasan Amal Soleh */}
              <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5">
                <h3 className="text-2xl font-display font-bold mb-6">Yayasan Amal Soleh</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  CGLINK berkomitmen untuk tidak hanya membangun bisnis, tetapi juga memberikan kontribusi nyata bagi masyarakat. Melalui Yayasan Amal Soleh CGLINK (YASCI), kami hadir dalam berbagai program sosial, pendidikan, dan pemberdayaan.
                </p>
                <ul className="space-y-4">
                  {[
                    "Program pendidikan & literasi.",
                    "Dukungan sosial & kemanusiaan.",
                    "Pemberdayaan ekonomi masyarakat.",
                    "Kolaborasi dengan mitra sosial."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-center text-neutral-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

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
      className="min-h-screen bg-[#050505] text-white pt-32 pb-24 selection:bg-white/20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        <motion.div variants={itemVariants} className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            Funding Portfolio
          </h1>
          <h2 className="text-2xl md:text-4xl text-indigo-400 font-bold mb-8 uppercase tracking-widest">
            FUNDING PARTNERSHIP & ACQUISITION
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Pendanaan strategis dilakukan melalui serangkaian proses penilaian dan verifikasi untuk memastikan bahwa investasi yang dilakukan benar-benar mempertimbangkan berbagai aspek dan berdampak positif bagi penerima.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">Portfolio Sector</h2>
              <p className="text-neutral-400 max-w-xl">
                Sektor-sektor berikut dipilih berdasarkan potensi pasar, kelayakan syariah, dan kesiapan ekspansi bisnis di Indonesia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all group text-center flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-display font-bold">{sector.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-12 md:p-16 rounded-[3rem] border border-white/5 bg-neutral-900/50 text-center mb-32">
          <p className="text-2xl md:text-3xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            "Kami saat ini secara aktif memperluas sektor portofolio investasi dan membuka peluang pendanaan bagi mitra potensial."
          </p>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};
