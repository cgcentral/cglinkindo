import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Briefcase, ArrowRight } from "lucide-react";

export const CareersPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900 leading-none">KARIR DI <br/> CGLINK</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-8 uppercase tracking-widest text-left">"Jadilah Arsitek Perubahan dalam Lanskap Bisnis Masa Depan."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-8 font-medium">
            Di CGLink Indonesia, kami tidak hanya memberikan konsultasi; kami menciptakan dampak. Sebagai firma yang didirikan di pusat dinamika Jakarta Selatan pada 2025, kami percaya bahwa inovasi lahir dari kebebasan berpikir, kolaborasi tanpa batas, dan profesionalitas yang tak terjoyahkan.
          </p>
          <p className="text-xl text-neutral-900 leading-relaxed mb-12 font-black italic">
            Apakah Anda talenta yang kami cari untuk mendefinisikan ulang standar industri?
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">Mengapa Berkarir Bersama Kami?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">Bekerja di CGLink bukan sekadar rutinitas 9-ke-5. Ini adalah perjalanan untuk mengasah ekspertis Anda di garis depan transformasi bisnis:</p>
          <ul className="space-y-6 mb-12 text-neutral-600">
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Ekosistem Pertumbuhan Eksponensial:</strong> Anda akan bekerja berdampingan dengan para ahli di bidang Finance, Digital Strategy, hingga Human Capital. Setiap hari adalah kesempatan belajar dari yang terbaik.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Budaya Inovasi & Agilitas:</strong> Kami menghargai ide-ide segar. Di sini, suara setiap anggota tim didengar, diuji, dan diwujudkan jika memberikan nilai tambah bagi klien.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Dampak Nyata bagi Ekonomi Indonesia:</strong> Dari UMKM yang sedang berkembang hingga korporasi besar, kontribusi Anda secara langsung membantu memperkuat fondasi bisnis di tanah air.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Kesejahteraan & Keseimbangan:</strong> Kami menyediakan lingkungan kerja modern yang mendukung produktivitas sekaligus kesehatan mental dan pengembangan diri.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">SIAPA YANG KAMI CARI?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">Kami mencari individu yang tidak hanya memiliki skill teknis yang tajam, tetapi juga memiliki Growth Mindset:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Analitis & Strategis</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Integritas Tinggi</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Kolaboratif</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Adaptif</div>
          </div>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">Open Roles</h3>
          <div className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-16 text-center mb-16">
            <Briefcase className="w-16 h-16 text-neutral-200 mx-auto mb-6" />
            <p className="text-neutral-400 font-black uppercase tracking-widest text-xs">Belum ada posisi yang tersedia saat ini.</p>
          </div>
 
          <div className="bg-neutral-900 rounded-[3.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-transparent"></div>
            <p className="text-white text-2xl font-display font-bold mb-10 relative z-10">Mari Bergabung & Tumbuh Bersama!</p>
            <a 
              href="mailto:businesspartner@cglinkindonesia.com"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all hover:scale-105 relative z-10"
            >
              <Mail className="w-5 h-5" />
              Kirim CV Anda
            </a>
            <p className="text-neutral-500 mt-10 text-xs font-bold uppercase tracking-widest relative z-10">Subjek: [Posisi] - [Nama Anda]</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const BlogPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 1,
      title: "Strategi Digital Marketing untuk UMKM di Tahun 2026",
      excerpt: "Pelajari bagaimana UMKM dapat memanfaatkan AI dan otomatisasi untuk bersaing dengan brand besar tanpa anggaran pemasaran yang fantastis.",
      date: "10 Maret 2026",
      category: "Digital Marketing"
    },
    {
      id: 2,
      title: "Pentingnya Restrukturisasi Keuangan Menghadapi Ketidakpastian Ekonomi",
      excerpt: "Langkah-langkah taktis yang harus diambil oleh CFO dan pemilik bisnis untuk mengamankan arus kas dan memastikan keberlanjutan operasional.",
      date: "28 Februari 2026",
      category: "Corporate Finance"
    },
    {
      id: 3,
      title: "Membangun Budaya Kerja Agile di Perusahaan Tradisional",
      excerpt: "Transformasi budaya kerja bukan sekadar mengganti jam kerja. Temukan cara mengubah mindset tim Anda menuju agilitas yang sesungguhnya.",
      date: "15 Februari 2026",
      category: "Human Capital"
    },
    {
      id: 4,
      title: "Kemitraan Strategis: Kunci Ekspansi Cepat Tanpa Bakar Uang",
      excerpt: "Mengapa akuisisi pelanggan melalui kemitraan B2B seringkali lebih efektif dan murah dibandingkan iklan digital konvensional.",
      date: "02 Februari 2026",
      category: "Partnerships"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">INSIGHTS & <br/> BLOG</h1>
          <p className="text-xl text-neutral-500 max-w-2xl font-medium">
            Artikel, analisis, dan pandangan terbaru dari para ahli kami seputar dunia bisnis, keuangan, pemasaran, dan manajemen talenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900 bg-neutral-50 px-4 py-1.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{article.date}</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6 group-hover:text-neutral-500 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-10 font-medium">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-3 text-neutral-900 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                Baca Selengkapnya <ArrowRight className="w-4 h-4 text-neutral-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
