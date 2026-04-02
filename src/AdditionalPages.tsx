import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Briefcase, ArrowRight } from "lucide-react";

export const CareersPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        
        <div className="prose prose-invert prose-lg max-w-none text-justify">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Karir di CGLink Indonesia</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Jadilah Arsitek Perubahan dalam Lanskap Bisnis Masa Depan."</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Di CGLink Indonesia, kami tidak hanya memberikan konsultasi; kami menciptakan dampak. Sebagai firma yang didirikan di pusat dinamika Jakarta Selatan pada 2025, kami percaya bahwa inovasi lahir dari kebebasan berpikir, kolaborasi tanpa batas, dan profesionalitas yang tak tergoyahkan.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-8 font-medium text-white">
            Apakah Anda talenta yang kami cari untuk mendefinisikan ulang standar industri?
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Berkarir Bersama Kami?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Bekerja di CGLink bukan sekadar rutinitas 9-ke-5. Ini adalah perjalanan untuk mengasah ekspertis Anda di garis depan transformasi bisnis:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Ekosistem Pertumbuhan Eksponensial:</strong> Anda akan bekerja berdampingan dengan para ahli di bidang Finance, Digital Strategy, hingga Human Capital. Setiap hari adalah kesempatan belajar dari yang terbaik.</li>
            <li><strong className="text-white">Budaya Inovasi & Agilitas:</strong> Kami menghargai ide-ide segar. Di sini, suara setiap anggota tim didengar, diuji, dan diwujudkan jika memberikan nilai tambah bagi klien.</li>
            <li><strong className="text-white">Dampak Nyata bagi Ekonomi Indonesia:</strong> Dari UMKM yang sedang berkembang hingga korporasi besar, kontribusi Anda secara langsung membantu memperkuat fondasi bisnis di tanah air.</li>
            <li><strong className="text-white">Kesejahteraan & Keseimbangan:</strong> Kami menyediakan lingkungan kerja modern yang mendukung produktivitas sekaligus kesehatan mental dan pengembangan diri.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Siapa yang Kami Cari?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami mencari individu yang tidak hanya memiliki skill teknis yang tajam, tetapi juga memiliki Growth Mindset:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Analitis & Strategis:</strong> Mampu melihat melampaui angka dan data.</li>
            <li><strong className="text-white">Integritas Tinggi:</strong> Menjunjung tinggi etika profesional dalam setiap interaksi.</li>
            <li><strong className="text-white">Kolaboratif:</strong> Percaya bahwa hasil tim selalu lebih besar daripada ambisi pribadi.</li>
            <li><strong className="text-white">Adaptif:</strong> Cepat menyesuaikan diri dengan tren pasar yang terus berubah.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Posisi yang Tersedia (Open Roles)</h3>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center mb-12">
            <Briefcase className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
            <p className="text-neutral-400 font-medium">Belum dibuka</p>
          </div>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mari Bergabung!</h3>
          <p className="text-neutral-300 leading-relaxed mb-8">
            Jangan hanya menjadi penonton dalam transformasi bisnis. Jadilah bagian dari mesin penggeraknya.
          </p>
          
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-8 text-center">
            <p className="text-white mb-6">Kirimkan CV, Portofolio, dan Cover Letter singkat Anda ke:</p>
            <a 
              href="mailto:businesspartner@cglinkindonesia.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              businesspartner@cglinkindonesia.com
            </a>
            <p className="text-neutral-400 mt-6 text-sm">Subjek: [Posisi yang Dilamar] - [Nama Anda]</p>
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
      className="min-h-screen pt-32 pb-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-5xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">CGLink Insights & Blog</h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Artikel, analisis, dan pandangan terbaru dari para ahli kami seputar dunia bisnis, keuangan, pemasaran, dan manajemen talenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-neutral-500">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
