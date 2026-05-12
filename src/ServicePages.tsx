import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

const CTASection = () => (
  <div className="mt-20 pt-10">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-16"
    />
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a 
        href="mailto:businesspartner@cglinkindonesia.com"
        className="flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Email Us
      </a>
      <a 
        href="https://wa.me/62895428355681"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-neutral-900 text-neutral-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-50 transition-all hover:scale-105 shadow-sm"
      >
        <MessageCircle className="w-5 h-5 text-neutral-900" />
        WhatsApp
      </a>
    </div>
  </div>
);

export const ServiceFundamentalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">BUSINESS <br/> FUNDAMENTALS</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Membangun Fondasi Kokoh untuk Pertumbuhan Tanpa Batas"</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Sebuah bangunan megah hanya akan berdiri selama fondasinya kuat. Begitu pula dengan bisnis. Di CGLink Indonesia, kami percaya bahwa skalabilitas dimulai dari struktur internal yang sehat dan strategi dasar yang presisi. Kami membantu Anda merancang ulang atau memperkuat pilar utama bisnis agar siap menghadapi tantangan pasar global.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> AREA FOKUS KAMI</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">Kami menyelami inti bisnis Anda melalui pendekatan yang komprehensif:</p>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Penyusunan Model Bisnis (Business Model Canvas):</strong> Memastikan proposisi nilai Anda tepat sasaran dan alur pendapatan terpetakan dengan jelas.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Standard Operating Procedure (SOP) & Efisiensi Operasional:</strong> Membangun sistem yang memungkinkan bisnis Anda berjalan secara otomatis (auto-pilot).</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Analisis Struktur Organisasi & Budaya Kerja:</strong> Menyelaraskan peran tim dengan visi perusahaan untuk menciptakan ekosistem kerja profesional.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Legalitas & Kepatuhan Bisnis:</strong> Memastikan seluruh operasional Anda berdiri di atas payung hukum yang tepat.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Perencanaan Strategis Jangka Panjang:</strong> Transformasi menjadi pemimpin pasar melalui penetapan KPI yang terukur.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">MENGAPA FUNDAMENTAL BISNIS SANGAT KRUSIAL?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-12 font-medium">
            Banyak bisnis gagal bukan karena kekurangan modal, melainkan karena sistem internal yang rapuh. Layanan kami dirancang untuk menghilangkan hambatan operasional (bottlenecks) dan memberikan Anda kendali penuh atas arah perusahaan.
          </p>
          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Jangan biarkan retakan kecil di fondasi menghambat pertumbuhan besar Anda. Kami di sini untuk memastikan struktur bisnis Anda siap untuk skala yang lebih luas."
          </blockquote>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">METODOLOGI KAMI</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Audit & Diagnosa", desc: "Membedah kondisi kesehatan bisnis Anda saat ini." },
              { title: "Restrukturisasi", desc: "Memperbaiki bagian yang rapuh dan memperkuat yang ada." },
              { title: "Implementasi", desc: "Mendampingi proses eksekusi hingga sistem berjalan sempurna." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em] mb-4 block">Tahap 0{i+1}</span>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-400 font-black uppercase tracking-widest text-xs text-center mb-0">Butuh bantuan untuk merapikan struktur internal bisnis Anda?</p>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceDigitalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">DIGITAL <br/> MARKETING</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Bukan Sekadar Tren, Kami Menciptakan Dominasi Pasar."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Di dunia digital yang bising, menjadi "terlihat" saja tidak cukup. Anda harus menjadi pilihan utama. CGLink Indonesia menggabungkan seni pemasaran kreatif dengan presisi data Growth Hacking untuk mengakselerasi skala bisnis Anda. Kami tidak hanya mengejar likes, kami mengejar ROI.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> STRATEGI PERTUMBUHAN</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">Kami menggunakan pendekatan full-funnel untuk memastikan setiap investasi bekerja lebih keras:</p>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Social Media Authority:</strong> Membangun ekosistem media sosial dengan interaksi tinggi dan konversi nyata.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Performance Marketing (Ads):</strong> Kampanye iklan (Google, Meta, TikTok) yang dioptimasi untuk CAC terendah.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Search Engine Optimization (SEO):</strong> Memastikan bisnis Anda muncul di baris terdepan mesin pencari.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Growth Hacking Experiments:</strong> Eksperimen cepat untuk menemukan celah pertumbuhan yang belum tersentuh.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Conversion Rate Optimization (CRO):</strong> Mengoptimasi titik sentuh agar pengunjung berubah menjadi pembeli setia.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">MENGAPA PENDEKATAN KAMI BERBEDA?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Data-Driven", desc: "Setiap keputusan diambil berdasarkan data perilaku konsumen nyata." },
              { title: "Scalability", desc: "Sistem pemasaran yang bisa diperbesar seiring pertumbuhan target." },
              { title: "Creative Excellence", desc: "Konten memikat secara psikologis untuk loyalitas brand." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-neutral-900 text-white rounded-3xl">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Marketing yang baik akan mendatangkan pembeli. Growth Hacking yang hebat akan memastikan mereka tidak pernah pergi."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServicePartnershipsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">PARTNERSHIPS <br/> & BIZDEV</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Membangun Jembatan, Membuka Peluang, Melampaui Batas."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Bisnis yang besar tidak tumbuh dalam isolasi. Pertumbuhan eksponensial terjadi ketika strategi yang tepat bertemu dengan mitra yang tepat. Di CGLink Indonesia, kami bertindak sebagai arsitek pertumbuhan Anda—menemukan celah pasar dan membangun aliansi strategis.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> STRATEGI EKSPANSI</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Strategic Partnership Scouting:</strong> Menghubungkan bisnis Anda dengan mitra strategis (B2B, Pemerintah, Komunitas).</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Market Expansion Strategy:</strong> Memetakan peluang ekspansi ke wilayah atau segmen pasar baru di Indonesia.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Key Account Management:</strong> Mengelola hubungan dengan mitra strategis utama untuk kerja sama jangka panjang.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Go-To-Market (GTM) Excellence:</strong> Merancang strategi peluncuran produk baru dengan jaringan distribusi luas.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Negotiation & Deal Making:</strong> Pendampingan profesional dalam proses negosiasi kontrak dan kesepakatan bisnis.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Kemitraan yang hebat bukan tentang siapa yang lebih besar, tapi tentang bagaimana dua kekuatan bersatu untuk mendominasi pasar."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceFinancePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">CORPORATE <br/> FINANCE</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Presisi Finansial untuk Keputusan Strategis yang Tak Tergoyahkan."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Di CGLink Indonesia, kami mentransformasi data keuangan Anda menjadi instrumen strategis yang tajam. Kami memastikan kesehatan finansial Anda hari ini adalah bahan bakar untuk ekspansi Anda esok hari.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> PILAR SOLUSI KEUANGAN</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Financial Planning & Analysis (FP&A):</strong> Proyeksi arus kas, penganggaran, and analisis varians untuk akurasi langkah bisnis.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Capital Structuring & Optimization:</strong> Menentukan komposisi modal terbaik untuk meminimalkan biaya modal.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Fundraising & Investor Relations:</strong> Pendampingan persiapan pendanaan, pitch deck, hingga negosiasi investor.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Investment Appraisal:</strong> Analisis kelayakan investasi (NPV, IRR) untuk imbal hasil optimal.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Financial Risk Management:</strong> Mitigasi risiko keuangan guna menjaga stabilitas bisnis di tengah ketidakpastian.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Profitabilitas adalah hasil dari operasional yang baik, tetapi keberlanjutan adalah hasil dari manajemen keuangan yang hebat."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceHCPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">HUMAN <br/> CAPITAL</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Menemukan Talenta Terbaik, Membangun Budaya Pemenang."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Bisnis yang hebat built by great people. Di CGLink Indonesia, kami tidak hanya mengisi kursi kosong; kami menghubungkan visi perusahaan Anda dengan talenta berkualitas.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> SOLUSI MANAJEMEN TALENTA</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Executive Search & Recruitment:</strong> Menemukan pemimpin dan tenaga ahli yang tepat bagi industri Anda.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Organization Design & Development:</strong> Merancang struktur organisasi yang lincah (agile) and efektif.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Performance Management System:</strong> Membangun sistem penilaian kinerja objektif berbasis KPI/OKR.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Compensation & Benefits Mapping:</strong> Menyusun paket benefit kompetitif untuk retensi talenta terbaik.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Corporate Culture Transformation:</strong> Menanamkan nilai-nilai perusahaan untuk lingkungan kerja inovatif.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Rekrutmen adalah investasi. Orang yang tepat di posisi yang tepat adalah kunci utama skalabilitas bisnis Anda."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};
