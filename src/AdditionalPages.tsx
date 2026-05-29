import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Briefcase, ArrowRight, Clock, BookOpen, Linkedin, Instagram, X, CheckCircle2, Download, MessageSquare } from "lucide-react";
import { downloadOutlookReportPDF } from "./utils/outlookPdfGenerator";

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
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-900 selection:text-white"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-16 transition-colors group font-black uppercase tracking-[0.4em] text-[10px]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>
        
        {/* 1. Hero Section */}
        <motion.div variants={itemVariants} className="w-full mb-32 text-left">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-9xl font-display font-black mb-8 tracking-tighter text-neutral-900 leading-[0.85] uppercase">
              Go Beyond <br />
              <span className="text-neutral-300">Business.</span> <br />
              Build Your Career with <span className="italic font-light">Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-medium mb-12">
              Join CGLINK Indonesia. Empower businesses, drive sustainable growth, and make a real impact in an ecosystem built on Legal, Logical, and Halal principles.
            </p>
            <button 
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all hover:scale-105"
            >
              View Open Roles
            </button>
          </div>
        </motion.div>

        {/* 2. Value Proposition */}
        <section className="mb-40 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.5em] mb-6 border-l-4 border-neutral-900 pl-6 text-left">Core Culture</div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-900">Why Grow <br /><span className="text-neutral-400">with CGLINK?</span></h2>
            </div>
            <p className="max-w-sm text-neutral-500 font-medium leading-relaxed">
              At CGLINK, we don’t just build businesses—we build people. We are looking for visionary talents who want to accelerate economic growth through integrity-based collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Grow with Excellence",
                icon: "🌱",
                desc: "Elevate your capabilities, mindset, and professional attitude in an environment deeply rooted in trust and continuous learning."
              },
              {
                title: "Share to Empower",
                icon: "🤝",
                desc: "We believe in fair and transparent collaboration. Share your ideas, experiences, and expertise to craft logical, impactful solutions."
              },
              {
                title: "Contribute to Society",
                icon: "🌍",
                desc: "Your work here matters. Create a positive, sustainable impact for local businesses, the economy, and the wider community."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-10 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold uppercase mb-6 tracking-tight">{value.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Life at CGLINK */}
        <section className="mb-40 text-left">
           <div className="bg-neutral-950 text-white rounded-[4rem] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full"></div>
              <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-24 items-center">
                 <div className="relative z-10">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-8 block">Our Environment</span>
                    <h2 className="text-4xl md:text-7xl font-display font-black mb-10 uppercase tracking-tighter leading-none">Inside Our <br /> Ecosystem.</h2>
                    <p className="text-xl text-neutral-400 leading-relaxed font-medium">
                      Whether you are streamlining operational strategies, driving digital marketing transformations, or optimizing financial planning, you will be part of a structured, data-driven team. We value a healthy, syariah-compliant partnership approach that feels dynamic but stays grounded in strong fundamentals.
                    </p>
                    <div className="h-1 w-24 bg-white/20 mt-12"></div>
                 </div>
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale opacity-50 relative group">
                       <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop" alt="Culture 1" className="w-full h-full object-cover transition-all group-hover:grayscale-0 group-hover:scale-110 duration-700" />
                    </div>
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale opacity-50 relative group mt-12">
                       <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2348&auto=format&fit=crop" alt="Culture 2" className="w-full h-full object-cover transition-all group-hover:grayscale-0 group-hover:scale-110 duration-700" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Open Positions */}
        <section id="open-positions" className="mb-40 text-left">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter text-neutral-900 mb-8">Discover Your <br /> Next Role</h2>
             <p className="text-lg text-neutral-500 font-medium">
               Ready to make an impact? Explore our current openings across our strategic business units. Don't see a perfect fit? Please always check this page continuously for further updates on job openings.
             </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-neutral-50 border border-neutral-100 rounded-[3rem] p-20 text-center flex flex-col items-center">
              <Briefcase className="w-16 h-16 text-neutral-200 mb-8" />
              <p className="text-neutral-400 font-black uppercase tracking-[0.4em] text-xs">No active vacancies currently available.</p>
              <p className="text-neutral-300 text-xs mt-4 uppercase tracking-widest">Follow our LinkedIn for instant updates</p>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="mb-24 text-left">
           <div className="bg-neutral-50 border border-neutral-100 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
              
              <div className="relative z-10 transition-colors duration-700 group-hover:text-white">
                <h2 className="text-4xl md:text-8xl font-display font-black mb-10 uppercase tracking-tighter leading-none text-center">Let's Build the <br /> Future of Business, <br /> Together.</h2>
                <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-2xl mx-auto group-hover:text-neutral-400 text-center">
                  Take the next step in your career journey with a team that values your integrity as much as your expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <a 
                     href="mailto:businesspartner@cglinkindonesia.com"
                     className="px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all border border-transparent shadow-xl"
                   >
                     Apply Now
                   </a>
                </div>
              </div>
           </div>
        </section>
      </div>
    </motion.div>
  );
};

export const OutlookReportForm: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const startDownload = () => {
    setDownloading(true);
    setTimeout(async () => {
      try {
        await downloadOutlookReportPDF();
        setDownloadSuccess(true);
      } catch (err) {
        console.error("Failed to generate PDF:", err);
      }
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-100 p-8 md:p-12 rounded-[3.5rem] shadow-xl my-12 text-left max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none" />
      
      <span className="text-[10px] font-black text-[#C5A059] font-mono tracking-widest uppercase mb-2 block">Direct Premium Access</span>
      <h3 className="text-2xl md:text-3xl font-display font-black text-neutral-900 mb-3 uppercase tracking-tight">Unduh Laporan Outlook & Konsultasi</h3>
      <p className="text-sm text-neutral-500 mb-8 font-medium leading-relaxed">
        Laporan Premium <strong>"Membaca Ekonomi & Outlook Bisnis Indonesia 2026"</strong> tersedia untuk langsung diunduh tanpa perlu registrasi form. Dapatkan insight hukum korporasi, standarisasi operasional, dan peta jalan logistik energi secara gratis.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Button 1: Download PDF */}
        <button
          onClick={startDownload}
          disabled={downloading}
          className="w-full py-5 px-6 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-200 text-white disabled:text-neutral-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-xl"
        >
          {downloading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Menyiapkan PDF...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Unduh PDF Gratis
            </>
          )}
        </button>
              {/* Button 2: Consultation WhatsApp */}
        <a
          href="https://wa.me/6285121372871?text=Halo%20CGLINK%20Indonesia%20Advisory%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20Economic%20%26%20Business%20Outlook%202026."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-5 px-6 bg-[#C5A059] hover:bg-[#b08e48] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-xl text-center"
        >
          <MessageSquare className="w-4 h-4" />
          Konsultasi Bisnis
        </a>
      </div>

      {downloadSuccess && (
        <motion.p 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-emerald-600 font-bold tracking-wide mt-5 text-center uppercase"
        >
          ✓ Laporan PDF CGLINK_Business_Outlook_2026 Berhasil Diunduh!
        </motion.p>
      )}
    </div>
  );
};

export interface InsightArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

export const insightsData: InsightArticle[] = [
  {
    id: 4,
    title: "Economic & Business Outlook 2026: Tumbuh 5,16% — Tapi Apakah Bisnis Anda Merasakannya?",
    excerpt: "Ada gap yang menarik terjadi di Indonesia saat ini. Di satu sisi, data makro terlihat solid. Di sisi lain, pengusaha melaporkan tantangan konversi dan daya beli ritel yang berbeda.",
    date: "Mei 2026",
    category: "Economic Outlook",
    readTime: "7 min read",
    image: "https://cglinkindonesia.com/wp-content/uploads/2026/05/unnamed.jpg",
    content: (
      <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
        <p className="text-xl font-medium text-neutral-800 leading-normal mb-8 text-justify">
          Ada gap yang menarik terjadi di Indonesia saat ini.
        </p>
        <p className="text-justify">
          Di satu sisi, data makro terlihat solid. PDB tumbuh, surplus perdagangan masih berjalan, inflasi terkendali, dan Indonesia masih menjadi salah satu ekonomi dengan pertumbuhan tertinggi di antara negara-negara G20.
        </p>
        <p className="text-justify">
          Di sisi lain, many pengusaha dari berbagai skala dan sektor melaporkan hal yang berbeda. Konversi turun. Tiket rata-rata mengecil. Konsumen lebih lama mempertimbangkan, atau tidak jadi beli sama sekali.
        </p>
        <p className="text-justify">
          Keduanya bisa benar secara bersamaan. Dan justru di sinilah letak pentingnya membaca ekonomi secara lebih dalam — tidak berhenti di angka headline.
        </p>

        <h2 className="text-2xl font-bold font-display text-neutral-900 mt-12 mb-4 uppercase tracking-tight">Apa yang Tidak Terlihat dari Angka PDB</h2>
        <p className="text-justify">
          Pertumbuhan PDB adalah indikator agregat. Ia merata-rata banyak hal: sektor yang melesat dan yang stagnan, konsumen yang daya belinya terjaga dan yang sudah mulai terbebani, momentum musiman dan pertumbuhan yang benar-benar struktural.
        </p>
        <p className="text-justify">
          Ketika angkanya positif, semua terlihat baik. Tapi bagi pengusaha privat yang perlu mengambil keputusan strategis soal ekspansi, kebijakan harga baru, repositioning kelas produk, atau target pasar baru — data rata-rata agregat tidaklah cukup.
        </p>
        <p className="border-l-4 border-neutral-900 pl-6 py-2 italic text-neutral-900 font-semibold bg-neutral-50 rounded-r-2xl text-justify">
          "Yang dibutuhkan adalah pembacaan per sektor, per komponen, dan per lapisan riil tingkat konsumen."
        </p>

        <h2 className="text-2xl font-bold font-display text-neutral-900 mt-12 mb-4 uppercase tracking-tight">Yang Kami Coba Jawab dalam Laporan Ini</h2>
        <p className="text-justify">
          Bersama CGLink Indonesia, kami menyusun laporan premium <strong>"Membaca Ekonomi Indonesia 2026"</strong>, sebuah analisis mendalam yang mencoba membedah kondisi riil makro & mikro Indonesia bukan dari satu sudut pandang teoretis, melainkan dari sembilan dimensi yang paling mendesak dan relevan bagi pengusaha & pelaku bisnis:
        </p>
        
        <div className="space-y-4 my-8 bg-neutral-50 p-8 rounded-[2.5rem] border border-neutral-100 text-left">
          {[
            "Dari mana sebenarnya pertumbuhan PDB itu datang dan seberapa berkelanjutan sumbernya di tahun 2026?",
            "Sektor mana yang sedang dalam tren naik konsisten, dan mana yang mulai menunjukkan sinyal pelemahan jangka panjang?",
            "Apa yang sebenarnya terjadi di pasar ekspor dan impor Indonesia dan apa artinya bagi bisnis dengan eksposur ke luar negeri?",
            "Bagaimana peran inflasi dan pelemahan nilai tukar lima tahun terakhir secara kumulatif mempengaruhi daya beli riil sisa likuiditas masyarakat?",
            "Apa yang data riil properti, otomotif nasional, ritel, dan FMCG katakan tentang kondisi konsumen Indonesia saat ini dan ke mana arah pergeserannya?"
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-1">
                {index + 1}
              </div>
              <p className="text-sm md:text-base text-neutral-700 font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-justify">
          Setiap pertanyaan di atas kami bedah dengan mengacu penuh pada data primer dari BPS, Bank Indonesia, Gaikindo, Kantar Worldpanel, dan sumber valid pemerintah lainnya — murni berpijak pada fakta, bukan sekdar opini atau proyeksi pasar yang spekulatif.
        </p>

        <h2 className="text-2xl font-bold font-display text-neutral-900 mt-12 mb-4 uppercase tracking-tight">Untuk Siapa Laporan Ini Ditulis?</h2>
        <p className="text-justify">
          Laporan ini ditulis khusus untuk pengusaha, direksi, dan pemimpin bisnis yang ingin membaca kondisi ekonomi nasional secara lebih jernih dan berlandaskan realita pasar — bukan untuk kebutuhan akademis semata, dan bukan pula sekadar untuk bahan presentasi slide yang terlihat indah secara kosmetik.
        </p>
        <p className="text-justify">
          Jika saat ini Anda sedang mempertimbangkan ekspansi ekspatriat bisnis baru, merumuskan kembali dinamika harga produk, atau berupaya keras memahami mengapa kondisi pasar terasa berlawanan dengan narasi resmi yang dilaporkan media massa arus utama, maka laporan ini dirancang khusus untuk keputusan Anda.
        </p>

        <h2 className="text-2xl font-bold font-display text-neutral-900 mt-12 mb-4 uppercase tracking-tight">Akses Laporan Lengkapnya Secara Gratis</h2>
        <p className="text-justify">
          Laporan eksklusif <strong>Membaca Ekonomi Indonesia 2026</strong> kini tersedia secara gratis dalam format dokumen digital PDF. Dapatkan panduan lengkap analisis ini dengan mengisi identitas Anda pada form berikut:
        </p>

        <OutlookReportForm />
      </div>
    )
  }
];

export const BlogPage: React.FC<{ onBack: () => void; initialArticleId?: number }> = ({ onBack, initialArticleId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (initialArticleId) {
      const art = insightsData.find(a => a.id === initialArticleId);
      if (art) {
        setSelectedArticle(art);
      }
    } else {
      setSelectedArticle(null);
    }
  }, [initialArticleId]);

  const categories = ["All", "Economic Outlook"];

  const filteredArticles = selectedCategory === "All"
    ? insightsData
    : insightsData.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  if (selectedArticle) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-950 selection:text-white"
      >
        <div className="w-full px-6 md:px-16 max-w-5xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => { setSelectedArticle(null); window.scrollTo(0, 0); }} 
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-16 transition-colors group font-black uppercase tracking-[0.4em] text-[10px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            Back to Insights
          </button>

          <div className="text-left">
            {/* Header metadata */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-neutral-400">
                <span className="px-3 py-1 bg-neutral-900 text-white rounded-full uppercase tracking-widest text-[9px]">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-neutral-900 tracking-tighter uppercase leading-[1.1]">
                {selectedArticle.title}
              </h1>
              <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl">
                {selectedArticle.excerpt}
              </p>
            </div>

            {/* Large thumbnail image */}
            <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-16 border border-neutral-100 shadow-2xl bg-neutral-50">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className={`w-full h-full transition-all duration-500 ${selectedArticle.id === 4 ? "object-fill" : "object-cover grayscale hover:grayscale-0"}`}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Author information & Date details */}
            <div className="flex flex-wrap items-center gap-10 mb-16 border-b border-t border-neutral-100 py-8">
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
                  <div className="text-sm font-bold text-neutral-900">{selectedArticle.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <BookOpen className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 font-mono">Duration</div>
                  <div className="text-sm font-bold text-neutral-900">{selectedArticle.readTime}</div>
                </div>
              </div>
            </div>

            {/* Prose text container */}
            <div className="max-w-none pt-4 text-left">
              {selectedArticle.content}
            </div>

            {/* Footer newsletter / engage actions */}
            <div className="pt-20 border-t border-neutral-100 mt-20 flex justify-between items-center flex-wrap gap-8 bg-neutral-50 p-10 md:p-14 rounded-[3rem]">
              <div className="text-left max-w-xl">
                <h4 className="text-base font-black text-neutral-950 font-display mb-2 uppercase tracking-tight">Stay Ahead of Indonesian Business Trends</h4>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Join CGLINK's editorial network to receive practical legal, logical, and halal growth roadmaps directly in your channel.</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/cglink-indonesia/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 bg-white hover:text-black hover:shadow-lg transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/amalsolehcglink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 bg-white hover:text-black hover:shadow-lg transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

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
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12 group text-[10px] font-black uppercase tracking-[0.3em]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="mb-20 text-left">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none uppercase">INSIGHTS & <br/> BLOG</h1>
          <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
            Latest articles, analysis, and views from our experts around the business world, finance, marketing, and talent management.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
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

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              onClick={() => { setSelectedArticle(article); window.scrollTo(0, 0); }}
              className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all group cursor-pointer flex flex-col text-left"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-neutral-100 bg-neutral-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className={`w-full h-full transition-all duration-500 hover:scale-105 ${article.id === 4 ? "object-fill opacity-100" : "object-cover grayscale opacity-90 group-hover:grayscale-0"}`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white bg-neutral-950 px-4 py-1.5 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span>{article.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-200"></span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black text-neutral-900 mb-4 group-hover:text-neutral-500 transition-colors leading-[1.1] uppercase tracking-tight">
                  {article.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3 text-neutral-900 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-neutral-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
