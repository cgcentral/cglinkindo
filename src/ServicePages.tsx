import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

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
        href="mailto:businesspartner@cglinkindonesia.com"
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Business Fundamentals</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Membangun Fondasi Kokoh untuk Pertumbuhan Tanpa Batas"</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Sebuah bangunan megah hanya akan berdiri selama fondasinya kuat. Begitu pula dengan bisnis. Di CGLink Indonesia, kami percaya bahwa skalabilitas dimulai dari struktur internal yang sehat dan strategi dasar yang presisi. Kami membantu Anda merancang ulang atau memperkuat pilar utama bisnis agar siap menghadapi tantangan pasar global.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Area Fokus Kami</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami menyelami inti bisnis Anda melalui pendekatan yang komprehensif:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Penyusunan Model Bisnis (Business Model Canvas):</strong> Memastikan proposisi nilai Anda tepat sasaran dan alur pendapatan (revenue stream) terpetakan dengan jelas untuk profitabilitas jangka panjang.</li>
            <li><strong className="text-white">Standard Operating Procedure (SOP) & Efisiensi Operasional:</strong> Membangun sistem yang memungkinkan bisnis Anda berjalan secara otomatis (auto-pilot) dengan standar kualitas yang konsisten.</li>
            <li><strong className="text-white">Analisis Struktur Organisasi & Budaya Kerja:</strong> Menyelaraskan peran tim dengan visi perusahaan untuk menciptakan ekosistem kerja yang produktif dan profesional.</li>
            <li><strong className="text-white">Legalitas & Kepatuhan Bisnis:</strong> Memastikan seluruh operasional Anda berdiri di atas payung hukum yang tepat, meminimalkan risiko di masa depan.</li>
            <li><strong className="text-white">Perencanaan Strategis Jangka Panjang:</strong> Transformasi dari sekadar "bertahan hidup" menjadi "pemimpin pasar" melalui penetapan KPI dan milestones yang terukur.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Fundamental Bisnis Sangat Krusial?</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Banyak bisnis gagal bukan karena kekurangan modal atau produk yang buruk, melainkan karena sistem internal yang rapuh. Layanan kami dirancang untuk menghilangkan hambatan operasional (bottlenecks) dan memberikan Anda kendali penuh atas arah perusahaan.
          </p>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl italic text-white/90 text-left">
            "Jangan biarkan retakan kecil di fondasi menghambat pertumbuhan besar Anda. Kami di sini untuk memastikan struktur bisnis Anda siap untuk skala yang lebih luas."
          </blockquote>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Metodologi Kami</h3>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Audit & Diagnosa:</strong> Membedah kondisi kesehatan bisnis Anda saat ini.</li>
            <li><strong className="text-white">Restrukturisasi:</strong> Memperbaiki bagian yang rapuh dan memperkuat yang sudah ada.</li>
            <li><strong className="text-white">Implementasi & Monitoring:</strong> Mendampingi proses eksekusi hingga sistem berjalan sempurna.</li>
          </ul>

          <p className="text-white font-medium text-lg mt-8 text-center">Butuh bantuan untuk merapikan struktur internal bisnis Anda?</p>
          
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Digital Marketing & Growth Hacking</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Bukan Sekadar Tren, Kami Menciptakan Dominasi Pasar."</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Di dunia digital yang bising, menjadi "terlihat" saja tidak cukup. Anda harus menjadi pilihan utama. CGLink Indonesia Menggabungkan seni pemasaran kreatif dengan presisi data Growth Hacking untuk mengakselerasi skala bisnis Anda dalam waktu singkat. Kami tidak hanya mengejar likes, kami mengejar ROI.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Strategi Pertumbuhan yang Kami Tawarkan</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami menggunakan pendekatan full-funnel untuk memastikan setiap rupiah yang Anda keluarkan bekerja lebih keras:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Social Media Authority:</strong> Membangun ekosistem media sosial yang bukan hanya cantik secara visual, tapi juga memiliki interaksi (engagement) yang tinggi dan konversi nyata.</li>
            <li><strong className="text-white">Performance Marketing (Ads):</strong> Kampanye iklan berbayar (Google, Meta, TikTok) yang dioptimasi secara harian untuk memastikan Customer Acquisition Cost (CAC) terendah dengan hasil tertinggi.</li>
            <li><strong className="text-white">Search Engine Optimization (SEO):</strong> Memastikan bisnis Anda muncul di baris terdepan mesin pencari saat calon pelanggan membutuhkan solusi Anda.</li>
            <li><strong className="text-white">Growth Hacking Experiments:</strong> Menggunakan metode eksperimen cepat pada produk dan pemasaran untuk menemukan celah pertumbuhan (growth loops) yang belum tersentuh kompetitor.</li>
            <li><strong className="text-white">Conversion Rate Optimization (CRO):</strong> Menganalisis perilaku audiens di website Anda dan mengoptimasi setiap titik sentuh agar pengunjung berubah menjadi pembeli setia.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Pendekatan Kami Berbeda?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami meninggalkan metode pemasaran tradisional yang bersifat menebak-nebak. Bersama CGLink, strategi Anda akan didasarkan pada:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Data-Driven Insights:</strong> Setiap keputusan diambil berdasarkan data perilaku konsumen, bukan sekadar asumsi.</li>
            <li><strong className="text-white">Scalability:</strong> Kami membangun mesin pemasaran yang bisa diperbesar (scaled up) seiring dengan pertumbuhan target perusahaan Anda.</li>
            <li><strong className="text-white">Creative Excellence:</strong> Konten yang memikat secara psikologis untuk membangun loyalitas merek jangka panjang.</li>
          </ul>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl italic text-white/90 text-left">
            "Marketing yang baik akan mendatangkan pembeli. Growth Hacking yang hebat akan memastikan mereka tidak pernah pergi dan membawa teman mereka untuk bergabung."
          </blockquote>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Target Hasil Kami</h3>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Brand Awareness:</strong> Menjangkau audiens yang tepat di waktu yang tepat.</li>
            <li><strong className="text-white">Acquisition:</strong> Mengubah audiens menjadi prospek atau pelanggan.</li>
            <li><strong className="text-white">Retention:</strong> Menjaga pelanggan agar terus kembali dan menjadi advokat bagi brand Anda.</li>
          </ul>

          <p className="text-white font-medium text-lg mt-8 text-center">Siap mendominasi pasar digital dan melipatgandakan pertumbuhan bisnis Anda?</p>
          
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Partnerships & Business Development</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Membangun Jembatan, Membuka Peluang, Melampaui Batas."</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Bisnis yang besar tidak tumbuh dalam isolasi. Pertumbuhan eksponensial terjadi ketika strategi yang tepat bertemu dengan mitra yang tepat. Di CGLink Indonesia, kami bertindak sebagai arsitek pertumbuhan Anda—menemukan celah pasar, membangun aliansi strategis, dan memastikan bisnis Anda selalu berada di baris terdepan dalam setiap peluang kolaborasi.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Strategi Ekspansi & Kolaborasi Kami</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami melampaui metode konvensional untuk memastikan setiap kemitraan memberikan nilai tambah yang nyata:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Strategic Partnership Scouting:</strong> Kami mengidentifikasi dan menghubungkan bisnis Anda dengan mitra strategis (B2B, Pemerintah, atau Komunitas) yang memiliki visi selaras untuk menciptakan sinergi yang saling menguntungkan.</li>
            <li><strong className="text-white">Market Expansion Strategy:</strong> Memetakan peluang ekspansi ke wilayah atau segmen pasar baru di Indonesia melalui analisis pasar yang mendalam dan manajemen risiko.</li>
            <li><strong className="text-white">Key Account Management:</strong> Membantu Anda mengelola dan merawat hubungan dengan klien atau mitra strategis utama guna memastikan kerja sama jangka panjang yang produktif.</li>
            <li><strong className="text-white">Go-To-Market (GTM) Excellence:</strong> Merancang strategi peluncuran produk atau layanan baru dengan memanfaatkan jaringan distribusi dan ekosistem mitra kami yang luas.</li>
            <li><strong className="text-white">Negotiation & Deal Making:</strong> Pendampingan profesional dalam proses negosiasi kontrak dan kesepakatan bisnis untuk memastikan Anda mendapatkan posisi tawar terbaik.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Memilih CGLink sebagai Partner Pengembangan Bisnis?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Dalam dunia Business Development, siapa yang Anda kenal sama pentingnya dengan apa yang Anda ketahui. Keunggulan kami terletak pada:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">High-Level Networking:</strong> Berbasis di Jakarta Selatan, kami memiliki akses ke jaringan pembuat keputusan, investor, dan pemimpin industri.</li>
            <li><strong className="text-white">Win-Win Methodology:</strong> Kami hanya membangun kemitraan yang berkelanjutan, di mana kedua belah pihak mendapatkan pertumbuhan yang terukur.</li>
            <li><strong className="text-white">Future-Proof Planning:</strong> Kami tidak hanya mencari kesepakatan untuk hari ini, tapi membangun ekosistem yang memperkuat posisi pasar Anda di masa depan.</li>
          </ul>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl italic text-white/90 text-left">
            "Kemitraan yang hebat bukan tentang siapa yang lebih besar, tapi tentang bagaimana dua kekuatan bersatu untuk mendominasi pasar yang lebih luas."
          </blockquote>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Hasil yang Kami Targetkan</h3>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Akses Pasar Baru:</strong> Menembus barikade pasar yang sebelumnya sulit dijangkau.</li>
            <li><strong className="text-white">Efisiensi Biaya:</strong> Mengurangi biaya akuisisi melalui kolaborasi strategis.</li>
            <li><strong className="text-white">Keberlanjutan Bisnis:</strong> Membangun ekosistem yang mendukung pertumbuhan jangka panjang.</li>
          </ul>

          <p className="text-white font-medium text-lg mt-8 text-center">Siap memperluas jangkauan bisnis Anda melalui kolaborasi strategis?</p>
          
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Corporate Finance & Financial Management</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Presisi Finansial untuk Keputusan Strategis yang Tak Tergoyahkan."</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Keberhasilan sebuah perusahaan tidak hanya diukur dari seberapa besar pendapatan yang masuk, tetapi dari seberapa cerdas modal tersebut dikelola. Di CGLink Indonesia, kami mentransformasi data keuangan Anda menjadi instrumen strategis yang tajam. Kami memastikan kesehatan finansial Anda hari ini adalah bahan bakar untuk ekspansi Anda esok hari.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Pilar Solusi Keuangan Kami</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami menghadirkan standar manajemen keuangan korporat kelas dunia ke dalam operasional bisnis Anda:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Financial Planning & Analysis (FP&A):</strong> Proyeksi arus kas (cash flow), penganggaran, dan analisis varians untuk memastikan setiap langkah bisnis didasarkan pada angka yang akurat, bukan asumsi.</li>
            <li><strong className="text-white">Capital Structuring & Optimization:</strong> Menentukan komposisi modal terbaik—antara ekuitas dan utang—untuk meminimalkan biaya modal (Cost of Capital) dan memaksimalkan nilai pemegang saham.</li>
            <li><strong className="text-white">Fundraising & Investor Relations:</strong> Pendampingan dalam persiapan pendanaan, mulai dari penyusunan pitch deck keuangan hingga negosiasi dengan investor atau institusi keuangan.</li>
            <li><strong className="text-white">Investment Appraisal:</strong> Analisis kelayakan investasi (NPV, IRR, Payback Period) untuk memastikan setiap proyek baru atau akuisisi memberikan imbal hasil yang optimal.</li>
            <li><strong className="text-white">Financial Risk Management:</strong> Identifikasi dan mitigasi risiko keuangan, termasuk fluktuasi pasar dan efisiensi struktur biaya, guna menjaga stabilitas bisnis di tengah ketidakpastian ekonomi.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Keuangan Anda Aman Bersama CGLink?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Di jantung Jakarta Selatan yang dinamis, kami memahami bahwa kecepatan harus dibarengi dengan ketelitian. Keunggulan kami meliputi:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Transparansi Radikal:</strong> Laporan keuangan yang jernih dan mudah dipahami oleh pengambil keputusan.</li>
            <li><strong className="text-white">Kepatuhan & Integritas:</strong> Memastikan seluruh praktik keuangan selaras dengan regulasi dan standar akuntansi yang berlaku.</li>
            <li><strong className="text-white">Data-Driven Logic:</strong> Menggunakan metodologi kuantitatif untuk meminimalkan bias dalam pengambilan keputusan finansial.</li>
          </ul>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl italic text-white/90 text-left">
            "Profitabilitas adalah hasil dari operasional yang baik, tetapi keberlanjutan (sustainability) adalah hasil dari manajemen keuangan yang hebat."
          </blockquote>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Hasil yang Kami Jamin</h3>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Efisiensi Arus Kas:</strong> Optimalisasi likuiditas untuk mendukung operasional tanpa hambatan.</li>
            <li><strong className="text-white">Kesiapan Investasi:</strong> Membuat bisnis Anda "layak investasi" (investment-ready) di mata para pemangku kepentingan.</li>
            <li><strong className="text-white">Pertumbuhan Nilai Perusahaan:</strong> Meningkatkan valuasi bisnis melalui pengelolaan aset dan liabilitas yang strategis.</li>
          </ul>

          <p className="text-white font-medium text-lg mt-8 text-center">Siap mengoptimalkan kesehatan finansial perusahaan Anda?</p>
          
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-left">Human Capital Management & Recruitment</h1>
          <h2 className="text-2xl text-indigo-400 font-medium mb-8 text-left">"Menemukan Talenta Terbaik, Membangun Budaya Pemenang."</h2>
          
          <p className="text-neutral-300 leading-relaxed mb-8">
            Bisnis yang hebat tidak dibangun oleh strategi semata, melainkan oleh orang-orang hebat yang mengeksekusinya. Di CGLink Indonesia, kami tidak hanya mengisi kursi yang kosong; kami menghubungkan visi perusahaan Anda dengan talenta yang memiliki kompetensi, karakter, dan gairah yang selaras. Kami membantu Anda mengelola aset paling berharga: Manusia.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Solusi Strategis Sumber Daya Manusia Kami</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Kami menghadirkan pendekatan manajemen talenta yang komprehensif untuk setiap fase perjalanan karyawan:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Executive Search & Strategic Recruitment:</strong> Proses rekrutmen berbasis kompetensi dan kecocokan budaya (cultural fit) untuk menemukan pemimpin dan tenaga ahli yang tepat bagi industri Anda.</li>
            <li><strong className="text-white">Organization Design & Development:</strong> Merancang struktur organisasi yang lincah (agile) dan efektif untuk mendukung pertumbuhan bisnis yang cepat.</li>
            <li><strong className="text-white">Performance Management System:</strong> Membangun sistem penilaian kinerja yang objektif, transparan, dan berbasis hasil (KPI/OKR) untuk memotivasi produktivitas tim.</li>
            <li><strong className="text-white">Compensation & Benefits Mapping:</strong> Menyusun struktur penggajian dan paket benefit yang kompetitif guna mempertahankan talenta terbaik (retention) di pasar Jakarta yang dinamis.</li>
            <li><strong className="text-white">Corporate Culture Transformation:</strong> Menanamkan nilai-nilai perusahaan yang kuat untuk menciptakan lingkungan kerja yang kolaboratif, profesional, dan penuh inovasi.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Mengapa Menyerahkan Manajemen Talenta pada CGLink?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Di tengah ketatnya perebutan talenta (war for talent) di Jakarta Selatan dan sekitarnya, kami hadir dengan keunggulan:</p>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Talent Mapping yang Luas:</strong> Akses ke jaringan profesional lintas industri yang telah terkurasi dengan ketat.</li>
            <li><strong className="text-white">Pendekatan Psikologis & Teknis:</strong> Kami menilai kandidat tidak hanya dari CV, tetapi dari potensi kepemimpinan dan stabilitas emosional mereka.</li>
            <li><strong className="text-white">Efisiensi Waktu & Biaya:</strong> Mengurangi risiko salah rekrut (bad hire) yang dapat merugikan finansial dan moral perusahaan.</li>
          </ul>
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl italic text-white/90 text-left">
            "Rekrutmen adalah investasi, bukan sekadar biaya. Orang yang tepat di posisi yang tepat adalah kunci utama skalabilitas bisnis Anda."
          </blockquote>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-left">Dampak Nyata untuk Bisnis Anda</h3>
          <ul className="space-y-4 mb-8 text-neutral-300">
            <li><strong className="text-white">Turnover Rendah:</strong> Meningkatkan loyalitas karyawan melalui sistem manajemen yang adil.</li>
            <li><strong className="text-white">Produktivitas Maksimal:</strong> Tim yang bekerja dengan tujuan yang jelas dan motivasi yang tinggi.</li>
            <li><strong className="text-white">Employer Branding:</strong> Membangun citra perusahaan Anda sebagai tempat kerja impian (Great Place to Work).</li>
          </ul>

          <p className="text-white font-medium text-lg mt-8 text-center">Siap membangun tim impian yang akan membawa bisnis Anda terbang tinggi?</p>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};
