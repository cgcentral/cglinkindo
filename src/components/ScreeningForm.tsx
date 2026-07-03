import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, Building2, Target, HelpCircle, Compass, 
  DollarSign, Check, ChevronRight, ChevronLeft, 
  Send, CheckCircle2, ArrowLeft, MessageSquare, ShieldCheck,
  AlertCircle
} from "lucide-react";

interface ScreeningFormProps {
  onBack: () => void;
  currentPageSetter?: (page: any) => void;
}

export const ScreeningForm: React.FC<ScreeningFormProps> = ({ onBack, currentPageSetter }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Identitas Diri
    namaLengkap: "",
    jabatan: "",
    email: "",
    whatsapp: "",
    penentuKeputusan: "", // Ya | Tidak

    // Step 2: Profil Perusahaan
    namaPerusahaan: "",
    bentukBadanUsaha: "", // PT | CV | Perorangan | Yayasan | Lainnya
    industri: "",
    tahunBerdiri: "",
    jumlahKaryawan: "", // <10 | 11-50 | 51-200 | >200
    estimasiOmzet: "", // ≤1 Miliar | 1-10 Miliar | 10-50 Miliar | >50 Miliar
    trenPerusahaan: "", // Tumbuh | Stagnan | Menurun
    websiteSosmed: "",
    alamatKantor: "",

    // Step 3: Target & Kondisi Bisnis
    targetBisnis: [] as string[], // Meningkatkan Profit, Meningkatkan Omzet, Ekspansi Cabang, Meningkatkan Efisiensi, Menyiapkan Perusahaan Profesional, Lainnya
    targetBisnisLainnya: "",
    kanalPenjualan: [] as string[], // Offline, Marketplace, TikTok, Instagram/Facebook, Google Ads, Direct/B2B, Lainnya
    kanalPenjualanLainnya: "",
    tantanganTerbesar: "",
    prioritasPendampingan: [] as string[], // Finance, Accounting, Tax, Digital Marketing, Strategi Pertumbuhan, Operasional, Restrukturisasi, Riset Pasar
    tantanganPernahDicoba: "", // Ya, belum berhasil | Belum pernah | Sedang berjalan
    dampakNyata: "",

    // Step 4: Pendalaman Area (Conditional based on prioritasPendampingan)
    // Finance
    financeLaporanRutin: "", // Ya | Tidak
    financeKontrol: [] as string[], // Cash Flow, Profitability, Budget Tahunan, Semua belum terukur
    financeTantangan: "",
    // Accounting
    accountingSistem: [] as string[], // Excel/Manual, Software, ERP, Belum ada
    accountingClosing: "", // Ya | Tidak
    accountingKendala: "",
    // Tax
    taxTransaksiPajak: "", // Ya | Tidak
    taxKewajibanRutin: "", // Ya | Tidak | Belum sepenuhnya
    taxTantangan: "",
    // Digital Marketing
    marketingChannel: [] as string[], // Website/SEO, Instagram, Facebook, TikTok, LinkedIn, Google Ads, Marketplace, Belum ada
    marketingTujuan: [] as string[], // Brand Awareness, Lead Gen, Sales, Rekrut Partner, Loyalty
    marketingTantangan: "",
    // Strategi Pertumbuhan
    growthRencanaTertulis: "", // Ya | Ada, belum formal | Belum ada
    growthArahEkspansi: [] as string[], // Membuka cabang, Masuk wilayah baru, Diversifikasi, Luar negeri, Kemitraan, Akuisisi
    growthHambatan: "",
    growthPeluang12Bulan: "",
    // Operasional
    opsSopTerdokumentasi: "", // Ya | Sebagian | Belum ada
    opsAreaBermasalah: [] as string[], // SDM, Supply chain, Produksi/Layanan, IT, Customer service, Koordinasi
    opsBottleneck: "",
    opsProsesBuangWaktu: "",
    // Restrukturisasi
    restructPendorong: [] as string[], // Pertumbuhan pesat, Penurunan, Pivot, Kepemimpinan, Investasi, Konflik
    restructOrgChart: "", // Ya | Ada, tidak relevan | Belum ada
    restructModelBisnis: [] as string[], // B2C, B2B, B2G, B2B2C, Franchise, Subscription, Lainnya
    restructMasalahTerbesar: "",
    // Riset Pasar
    risetFrekuensi: "", // Rutin | Sesekali | Belum pernah
    risetTujuan: [] as string[], // Perilaku konsumen, Benchmarking kompetitor, Validasi produk, Identifikasi peluang, Pricing, Pitching investor
    risetKeputusan: "",
    risetKompetitorUtama: "",

    // Step 5: Komitmen & Ekspektasi
    hasilIdeal: [] as string[], // Gambaran, Rekomendasi, Mitra jangka panjang, Akses pendanaan, Semuanya
    seberapaMendesak: "", // Sangat mendesak | Cukup mendesak | Masih perencanaan
    targetWaktu: "", // 3 Bulan | 6 Bulan | 12 Bulan | > 12 Bulan
    pernahKonsultan: "", // Belum pernah | Pernah belum memuaskan

    // Step 6: Skema & Anggaran
    modelKeterlibatan: "", // Project-based | Retainer bulanan | Advisory | Belum tahu
    rentangAnggaran: "", // < Rp 25 juta | Rp 25-75 juta | Rp 75-200 juta | > Rp 200 juta | Belum ditentukan
    sumberInfo: "", // Referral | Acara | Medsos | Website | Lainnya
    namaReferensi: "",
    halLainKetahui: "",
    persetujuan: false
  });

  const [validationError, setValidationError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxGroupChange = (groupName: string, value: string) => {
    setFormData(prev => {
      const current = (prev[groupName as keyof typeof prev] as string[]) || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return {
        ...prev,
        [groupName]: updated
      };
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setValidationError("");

    // Step Validation
    if (step === 1) {
      if (!formData.namaLengkap.trim()) return setValidationError("Nama lengkap wajib diisi.");
      if (!formData.jabatan.trim()) return setValidationError("Jabatan/peran wajib diisi.");
      if (!formData.email.trim() || !formData.email.includes("@")) return setValidationError("Email tidak valid.");
      if (!formData.whatsapp.trim()) return setValidationError("Nomor WhatsApp wajib diisi.");
      if (!formData.penentuKeputusan) return setValidationError("Pilih salah satu opsi penentu keputusan.");
    }

    if (step === 2) {
      if (!formData.namaPerusahaan.trim()) return setValidationError("Nama perusahaan wajib diisi.");
      if (!formData.bentukBadanUsaha) return setValidationError("Bentuk Badan Usaha wajib dipilih.");
      if (!formData.industri.trim()) return setValidationError("Industri/sektor wajib diisi.");
      if (!formData.tahunBerdiri.trim()) return setValidationError("Tahun berdiri wajib diisi.");
      if (!formData.jumlahKaryawan) return setValidationError("Jumlah karyawan wajib dipilih.");
      if (!formData.estimasiOmzet) return setValidationError("Estimasi omzet tahunan wajib dipilih.");
      if (!formData.trenPerusahaan) return setValidationError("Tren perusahaan wajib dipilih.");
      if (!formData.alamatKantor.trim()) return setValidationError("Alamat kantor wajib diisi.");
    }

    if (step === 3) {
      if (formData.targetBisnis.length === 0) return setValidationError("Pilih minimal satu target bisnis utama.");
      if (formData.kanalPenjualan.length === 0) return setValidationError("Pilih minimal satu kanal penjualan utama.");
      if (!formData.tantanganTerbesar.trim()) return setValidationError("Tantangan terbesar wajib diisi.");
      if (formData.prioritasPendampingan.length === 0) return setValidationError("Pilih minimal satu area pendampingan.");
      if (!formData.tantanganPernahDicoba) return setValidationError("Pilih status penyelesaian tantangan.");
      if (!formData.dampakNyata.trim()) return setValidationError("Dampak nyata jika tidak segera diselesaikan wajib diisi.");
    }

    if (step === 5) {
      if (formData.hasilIdeal.length === 0) return setValidationError("Pilih minimal satu hasil ideal yang diharapkan.");
      if (!formData.seberapaMendesak) return setValidationError("Tingkat kemendesakan wajib dipilih.");
      if (!formData.targetWaktu) return setValidationError("Target waktu pencapaian wajib dipilih.");
      if (!formData.pernahKonsultan) return setValidationError("Pilih status penggunaan jasa konsultan sebelumnya.");
    }

    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setValidationError("");
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.modelKeterlibatan) return setValidationError("Model keterlibatan yang diminati wajib dipilih.");
    if (!formData.rentangAnggaran) return setValidationError("Rentang anggaran wajib dipilih.");
    if (!formData.sumberInfo) return setValidationError("Pilih dari mana Anda mengetahui CGLINK.");
    if (!formData.persetujuan) return setValidationError("Anda harus menyetujui pernyataan persetujuan data.");

    setIsSubmitting(true);

    try {
      // 1. Simpan di Local Storage Lead list
      const submissions = JSON.parse(localStorage.getItem("screening_submissions") || "[]");
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      submissions.push(newSubmission);
      localStorage.setItem("screening_submissions", JSON.stringify(submissions));

      // 2. Kirim Web3Forms
      const web3Data = new FormData();
      web3Data.append("access_key", "87567d39-6aa5-4b31-b166-724fa2de1149");
      web3Data.append("subject", `New Screening Form: ${formData.namaLengkap} - ${formData.namaPerusahaan}`);
      web3Data.append("from_name", "CGLINK Screening Portal");
      
      // Flatten data for email representation
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          web3Data.append(key, value.join(", "));
        } else {
          web3Data.append(key, String(value));
        }
      });

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data
      });

      // 3. Kirim ke google sheets webhook if active
      const sheetsWebhook = "https://script.google.com/macros/s/AKfycbwCu1ja_TraCJ65t1dBQqC9TwCRFTTSDxEZt9EHR_oGr8EMujFd_MDjejSNpL76dHNZ/exec";
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          params.append(key, value.join(", "));
        } else {
          params.append(key, String(value));
        }
      });
      fetch(`${sheetsWebhook}?${params.toString()}`, { method: "GET" }).catch(e => console.warn("Google Sheet sync failed:", e));

      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setValidationError("Terjadi kesalahan teknis. Namun, data Anda telah disimpan secara lokal. Kami akan segera menghubungi Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppURL = () => {
    const text = `Halo Admin CGLINK Indonesia! Saya baru saja mengirimkan Formulir Initial Screening Konsultasi Bisnis di website.\n\n` +
      `*Berikut Rangkuman Profil Saya:*\n` +
      `• *Nama:* ${formData.namaLengkap}\n` +
      `• *Perusahaan:* ${formData.namaPerusahaan} (${formData.bentukBadanUsaha})\n` +
      `• *Jabatan:* ${formData.jabatan}\n` +
      `• *WhatsApp:* ${formData.whatsapp}\n` +
      `• *Industri:* ${formData.industri}\n` +
      `• *Omzet Tahunan:* ${formData.estimasiOmzet}\n` +
      `• *Kebutuhan Utama:* ${formData.prioritasPendampingan.join(", ")}\n\n` +
      `Mohon dibantu jadwalkan sesi konsultasi awal / in-depth business diagnosis. Terima kasih!`;
    return `https://wa.me/6285121372871?text=${encodeURIComponent(text)}`;
  };

  const stepTitles = [
    "Identitas Diri",
    "Profil Perusahaan",
    "Target & Kondisi Bisnis",
    "Pendalaman Area",
    "Komitmen & Ekspektasi",
    "Anggaran & Persetujuan"
  ];

  const stepsIcons = [
    <User className="w-5 h-5" />,
    <Building2 className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <HelpCircle className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />
  ];

  return (
    <div className="min-h-screen bg-neutral-50/50 text-neutral-900 font-sans pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Back Button */}
        {!submitSuccess && (
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-black transition-colors mb-8 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </button>
        )}

        {/* Title & Description Banner */}
        {!submitSuccess && (
          <div className="bg-neutral-900 text-white rounded-[3rem] p-8 md:p-12 border border-neutral-800 shadow-2xl mb-12 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-xs font-black tracking-widest text-[#C5A059] uppercase block mb-3 font-mono">Tahap Seleksi Kemitraan CGLINK</span>
              <h1 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase leading-tight">
                Formulir Initial Screening <br />
                Konsultasi Bisnis
              </h1>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-medium">
                Mohon lengkapi informasi berikut untuk membantu kami mempersiapkan pertemuan konsultasi awal yang paling efektif. Formulir ini merupakan tahap awal seleksi kemitraan CGLINK. Mohon diisi dengan jujur, lengkap, dan sebenar-benarnya. Informasi yang Anda berikan digunakan semata-mata untuk menilai kesesuaian layanan dan menyiapkan rekomendasi yang relevan.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#C5A059]" /> 100% Rahasia & Aman</span>
                <span className="flex items-center gap-2">⏱️ Waktu Pengisian: 5-8 Menit</span>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tracker */}
        {!submitSuccess && (
          <div className="mb-12">
            <div className="grid grid-cols-6 gap-2 md:gap-4 mb-4">
              {stepTitles.map((title, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isCompleted = step > stepNum;
                return (
                  <button 
                    key={i}
                    onClick={() => {
                      // Only allow navigating back or to steps already completed
                      if (stepNum < step) setStep(stepNum);
                    }}
                    disabled={stepNum >= step}
                    className={`flex flex-col items-center text-center p-2 rounded-xl border transition-all ${
                      isActive 
                        ? 'bg-white border-[#C5A059] text-neutral-950 shadow-sm font-bold scale-105' 
                        : isCompleted 
                        ? 'bg-neutral-900 border-neutral-900 text-[#C5A059] hover:bg-neutral-800' 
                        : 'bg-white/50 border-neutral-100 text-neutral-400 opacity-60'
                    }`}
                  >
                    <div className="mb-1">{stepsIcons[i]}</div>
                    <span className="text-[8px] font-black uppercase tracking-wider hidden md:block">{title}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Visual Progress Bar */}
            <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
              <motion.div 
                className="bg-neutral-900 h-full"
                initial={{ width: "16.6%" }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
              <span>Langkah {step} dari 6</span>
              <span className="text-[#C5A059]">{stepTitles[step - 1]}</span>
            </div>
          </div>
        )}

        {/* Error message */}
        {validationError && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl flex gap-3 items-center text-sm font-bold text-left"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{validationError}</span>
          </motion.div>
        )}

        {/* Form Wizard Container */}
        <div className="bg-white rounded-[3.5rem] border border-neutral-100 p-8 md:p-12 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-900 border border-[#C5A059] flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-4 text-neutral-900 uppercase">
                  Terima Kasih!
                </h2>
                <p className="text-[#C5A059] text-xs font-mono font-black tracking-[0.3em] uppercase mb-6">
                  Formulir Anda Berhasil Dikirimkan
                </p>
                
                <p className="text-neutral-500 text-base leading-relaxed max-w-xl mx-auto mb-10 font-medium">
                  Informasi Anda telah disimpan dengan aman dan rahasia di sistem CGLINK Indonesia. Tim kami akan menganalisis profil bisnis Anda terlebih dahulu dan menghubungi Anda dalam waktu <strong>1×24 jam kerja</strong> untuk menjadwalkan konsultasi awal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href={getWhatsAppURL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" /> Hubungi via WhatsApp
                  </a>
                  <button 
                    onClick={onBack}
                    className="w-full sm:w-auto px-8 py-4 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105"
                  >
                    Kembali ke Beranda
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-8 text-left">
                
                {/* STEP 1: IDENTITAS DIRI */}
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">1. Identitas Diri</h3>
                      <p className="text-sm text-neutral-400 font-medium">Beritahu kami sedikit tentang diri Anda terlebih dahulu.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        name="namaLengkap" 
                        value={formData.namaLengkap}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Masukkan nama lengkap Anda" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Jabatan / Peran Anda di Perusahaan *</label>
                      <input 
                        type="text" 
                        name="jabatan" 
                        value={formData.jabatan}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Contoh: Direktur Utama, Owner, Head of Finance" 
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email Korespondensi *</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                          placeholder="nama@perusahaan.com" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nomor WhatsApp Aktif *</label>
                        <input 
                          type="tel" 
                          name="whatsapp" 
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                          placeholder="Contoh: 081234567890" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">Apakah Anda penentu keputusan akhir untuk penggunaan layanan konsultasi ini? *</label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { val: "Ya", label: "Ya, saya penentu keputusan utama" },
                          { val: "Tidak", label: "Tidak, persetujuan masih diperlukan dari direksi / pemegang saham" }
                        ].map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleRadioChange("penentuKeputusan", opt.val)}
                            className={`p-4 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                              formData.penentuKeputusan === opt.val 
                                ? 'bg-neutral-950 border-neutral-950 text-white' 
                                : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${formData.penentuKeputusan === opt.val ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                              {formData.penentuKeputusan === opt.val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* STEP 2: PROFIL PERUSAHAAN */}
                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">2. Profil Perusahaan</h3>
                      <p className="text-sm text-neutral-400 font-medium">Beritahu kami tentang perusahaan yang ingin didampingi.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nama Perusahaan *</label>
                        <input 
                          type="text" 
                          name="namaPerusahaan" 
                          value={formData.namaPerusahaan}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                          placeholder="Masukkan nama perusahaan" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Bentuk Badan Usaha *</label>
                        <select
                          name="bentukBadanUsaha"
                          value={formData.bentukBadanUsaha}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih Bentuk Badan Usaha --</option>
                          <option value="PT">PT (Perseroan Terbatas)</option>
                          <option value="CV">CV (Commanditaire Vennootschap)</option>
                          <option value="Perorangan">Perusahaan Perorangan / UMKM</option>
                          <option value="Yayasan">Yayasan</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Industri / Sektor Perusahaan *</label>
                        <input 
                          type="text" 
                          name="industri" 
                          value={formData.industri}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                          placeholder="Contoh: Manufaktur, Kuliner, Properti, Retail" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Tahun Berdiri *</label>
                        <input 
                          type="number" 
                          name="tahunBerdiri" 
                          value={formData.tahunBerdiri}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                          placeholder="Contoh: 2018" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Jumlah Karyawan *</label>
                        <select
                          name="jumlahKaryawan"
                          value={formData.jumlahKaryawan}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="<10">&lt; 10 Orang</option>
                          <option value="11-50">11 - 50 Orang</option>
                          <option value="51-200">51 - 200 Orang</option>
                          <option value=">200">&gt; 200 Orang</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Estimasi Omzet Tahunan *</label>
                        <select
                          name="estimasiOmzet"
                          value={formData.estimasiOmzet}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="≤1 Miliar">≤ Rp 1 Miliar</option>
                          <option value="1-10 Miliar">Rp 1 Miliar - Rp 10 Miliar</option>
                          <option value="10-50 Miliar">Rp 10 Miliar - Rp 50 Miliar</option>
                          <option value=">50 Miliar">&gt; Rp 50 Miliar</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Tren Perusahaan (12 bln terakhir) *</label>
                        <select
                          name="trenPerusahaan"
                          value={formData.trenPerusahaan}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="Tumbuh">Tumbuh / Mengalami Ekspansi</option>
                          <option value="Stagnan">Stagnan / Cukup Stabil</option>
                          <option value="Menurun">Menurun / Mengalami Penurunan</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Website atau Akun Media Sosial Perusahaan</label>
                      <input 
                        type="text" 
                        name="websiteSosmed" 
                        value={formData.websiteSosmed}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Contoh: www.perusahaan.com / @instagram" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Alamat Kantor Perusahaan *</label>
                      <textarea 
                        rows={3}
                        name="alamatKantor" 
                        value={formData.alamatKantor}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Masukkan alamat lengkap kantor perusahaan" 
                      />
                    </div>

                  </motion.div>
                )}

                {/* STEP 3: TARGET & KONDISI BISNIS */}
                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">3. Target & Kondisi Bisnis</h3>
                      <p className="text-sm text-neutral-400 font-medium">Bantu kami mengerti target jangka panjang dan tantangan utama Anda.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">Target bisnis utama dalam 1–3 tahun ke depan (pilih semua yang relevan) *</label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Meningkatkan Profit",
                          "Meningkatkan Omzet",
                          "Ekspansi Cabang / Masuk Pasar Baru",
                          "Meningkatkan Efisiensi Operasional",
                          "Menyiapkan Perusahaan yang Lebih Profesional & Terstruktur",
                          "Lainnya"
                        ].map((opt, i) => {
                          const isSelected = formData.targetBisnis.includes(opt);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleCheckboxGroupChange("targetBisnis", opt)}
                              className={`p-4 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-neutral-950 border-neutral-950 text-white' 
                                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                              }`}
                            >
                              <span>{opt}</span>
                              <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {formData.targetBisnis.includes("Lainnya") && (
                        <input 
                          type="text"
                          name="targetBisnisLainnya"
                          value={formData.targetBisnisLainnya}
                          onChange={handleInputChange}
                          placeholder="Sebutkan target lainnya..."
                          className="w-full mt-2 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm"
                        />
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">Kanal penjualan / pemasaran utama yang saat ini digunakan (pilih semua yang relevan) *</label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Offline (toko, kantor, door-to-door)",
                          "Marketplace (Tokopedia, Shopee, dll)",
                          "TikTok / TikTok Shop",
                          "Instagram / Facebook",
                          "Google Ads / Search",
                          "Direct / B2B Langsung / Referral",
                          "Lainnya"
                        ].map((opt, i) => {
                          const isSelected = formData.kanalPenjualan.includes(opt);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleCheckboxGroupChange("kanalPenjualan", opt)}
                              className={`p-4 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-neutral-950 border-neutral-950 text-white' 
                                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                              }`}
                            >
                              <span>{opt}</span>
                              <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {formData.kanalPenjualan.includes("Lainnya") && (
                        <input 
                          type="text"
                          name="kanalPenjualanLainnya"
                          value={formData.kanalPenjualanLainnya}
                          onChange={handleInputChange}
                          placeholder="Sebutkan kanal lainnya..."
                          className="w-full mt-2 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm"
                        />
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Apa tantangan terbesar yang saat ini sedang dihadapi perusahaan Anda? *</label>
                      <textarea 
                        rows={3}
                        name="tantanganTerbesar" 
                        value={formData.tantanganTerbesar}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Deskripsikan hambatan/masalah terbesar operasional atau performa bisnis Anda saat ini." 
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">D. 2 Area mana yang paling membutuhkan perhatian dan pendampingan? (Pilih semua yang relevan) *</label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Finance",
                          "Accounting",
                          "Tax",
                          "Digital Marketing",
                          "Strategi Pertumbuhan & Ekspansi Pasar",
                          "Operasional & Efisiensi Proses Bisnis",
                          "Restrukturisasi Organisasi / Model Bisnis",
                          "Riset Pasar & Analisis Kompetitor"
                        ].map((opt, i) => {
                          const isSelected = formData.prioritasPendampingan.includes(opt);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleCheckboxGroupChange("prioritasPendampingan", opt)}
                              className={`p-4 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-[#C5A059] border-[#C5A059] text-white shadow-md scale-[1.01]' 
                                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                              }`}
                            >
                              <span>{opt}</span>
                              <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-neutral-900' : 'border-neutral-300 bg-white'}`}>
                                {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-[#C5A059] font-bold">Catatan: Pilihan Anda di atas akan mengaktifkan halaman pendalaman khusus di Langkah selanjutnya.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">Apakah tantangan ini sudah pernah dicoba diselesaikan sebelumnya? *</label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {[
                          { val: "Ya, sudah pernah mencoba tapi belum berhasil", label: "Ya, sudah dicoba & belum berhasil" },
                          { val: "Belum pernah mencoba", label: "Belum pernah mencoba" },
                          { val: "Sedang berjalan/dalam proses", label: "Sedang berjalan / dalam proses" }
                        ].map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleRadioChange("tantanganPernahDicoba", opt.val)}
                            className={`p-4 rounded-2xl border text-left transition-all text-xs font-bold flex flex-col justify-between h-20 ${
                              formData.tantanganPernahDicoba === opt.val 
                                ? 'bg-neutral-950 border-neutral-950 text-white shadow-md' 
                                : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                            }`}
                          >
                            <span className="leading-tight">{opt.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-2 self-end ${formData.tantanganPernahDicoba === opt.val ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                              {formData.tantanganPernahDicoba === opt.val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Jika masalah tersebut tidak segera diselesaikan, apa dampak nyata bagi perusahaan Anda? *</label>
                      <textarea 
                        rows={3}
                        name="dampakNyata" 
                        value={formData.dampakNyata}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Contoh: Kehilangan momentum pertumbuhan, inefisiensi biaya terus membengkak, penurunan semangat tim." 
                      />
                    </div>

                  </motion.div>
                )}

                {/* STEP 4: PENDALAMAN AREA (DYNAMIC ACCORDIONS OR FLOW) */}
                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">4. Pendalaman Area Prioritas</h3>
                      <p className="text-sm text-neutral-400 font-medium">Lengkapi bagian khusus berdasarkan kebutuhan pendampingan yang telah Anda pilih sebelumnya.</p>
                    </div>

                    {formData.prioritasPendampingan.length === 0 ? (
                      <div className="p-8 bg-neutral-50 rounded-3xl text-center">
                        <p className="text-neutral-500 font-bold">Anda tidak memilih area prioritas di langkah sebelumnya. Anda dapat melewati langkah ini.</p>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {/* FINANCE SECTION */}
                        {formData.prioritasPendampingan.includes("Finance") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Finance (Keuangan)</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah perusahaan memiliki laporan keuangan bulanan yang rutin dan akurat?</label>
                              <div className="flex gap-4">
                                {["Ya", "Tidak"].map((o) => (
                                  <button
                                    key={o}
                                    type="button"
                                    onClick={() => handleRadioChange("financeLaporanRutin", o)}
                                    className={`px-6 py-3 rounded-full border text-xs font-bold transition-all ${
                                      formData.financeLaporanRutin === o 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Kontrol keuangan yang sudah dimiliki (centang semua yang berlaku)</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {["Cash Flow", "Profitability", "Budget Tahunan", "Semua belum terukur"].map((opt) => {
                                  const isSelected = formData.financeKontrol.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("financeKontrol", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa tantangan terbesar dalam pengelolaan keuangan saat ini?</label>
                              <input 
                                type="text" 
                                name="financeTantangan" 
                                value={formData.financeTantangan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Cash flow seret, profit margin tipis, over-budgeting" 
                              />
                            </div>
                          </div>
                        )}

                        {/* ACCOUNTING SECTION */}
                        {formData.prioritasPendampingan.includes("Accounting") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Accounting (Pencatatan)</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Sistem pencatatan keuangan yang saat ini digunakan</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Excel / Manual",
                                  "Software Accounting (Accurate, Jurnal, dll)",
                                  "ERP",
                                  "Belum ada sistem formal"
                                ].map((opt) => {
                                  const isSelected = formData.accountingSistem.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("accountingSistem", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah proses closing laporan keuangan dilakukan setiap bulan?</label>
                              <div className="flex gap-4">
                                {["Ya", "Tidak"].map((o) => (
                                  <button
                                    key={o}
                                    type="button"
                                    onClick={() => handleRadioChange("accountingClosing", o)}
                                    className={`px-6 py-3 rounded-full border text-xs font-bold transition-all ${
                                      formData.accountingClosing === o 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa kendala terbesar pada proses accounting saat ini?</label>
                              <input 
                                type="text" 
                                name="accountingKendala" 
                                value={formData.accountingKendala}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Laporan terlambat dibuat, tidak balance, admin kurang kompeten" 
                              />
                            </div>
                          </div>
                        )}

                        {/* TAX SECTION */}
                        {formData.prioritasPendampingan.includes("Tax") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Tax (Perpajakan)</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah perusahaan memiliki transaksi yang berdampak pajak?</label>
                              <div className="flex gap-4">
                                {["Ya", "Tidak"].map((o) => (
                                  <button
                                    key={o}
                                    type="button"
                                    onClick={() => handleRadioChange("taxTransaksiPajak", o)}
                                    className={`px-6 py-3 rounded-full border text-xs font-bold transition-all ${
                                      formData.taxTransaksiPajak === o 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah seluruh kewajiban perpajakan dikelola secara rutin dan tepat waktu?</label>
                              <div className="grid sm:grid-cols-3 gap-3">
                                {["Ya", "Tidak", "Belum sepenuhnya"].map((o) => (
                                  <button
                                    key={o}
                                    type="button"
                                    onClick={() => handleRadioChange("taxKewajibanRutin", o)}
                                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                      formData.taxKewajibanRutin === o 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa tantangan terbesar terkait perpajakan yang sedang dihadapi?</label>
                              <input 
                                type="text" 
                                name="taxTantangan" 
                                value={formData.taxTantangan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Takut audit, SPT Masa tidak rapi, tidak paham regulasi PPN/PPh terbaru" 
                              />
                            </div>
                          </div>
                        )}

                        {/* DIGITAL MARKETING SECTION */}
                        {formData.prioritasPendampingan.includes("Digital Marketing") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Digital Marketing</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Channel pemasaran digital yang saat ini aktif digunakan</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Website / SEO",
                                  "Instagram",
                                  "Facebook",
                                  "TikTok / TikTok Ads",
                                  "LinkedIn",
                                  "Google Ads",
                                  "Marketplace",
                                  "Belum ada"
                                ].map((opt) => {
                                  const isSelected = formData.marketingChannel.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("marketingChannel", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Tujuan utama aktivitas digital marketing perusahaan</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Brand Awareness",
                                  "Lead Generation",
                                  "Sales",
                                  "Rekrut Partner / Distributor",
                                  "Loyalty"
                                ].map((opt) => {
                                  const isSelected = formData.marketingTujuan.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("marketingTujuan", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa tantangan terbesar dalam pemasaran digital saat ini?</label>
                              <input 
                                type="text" 
                                name="marketingTantangan" 
                                value={formData.marketingTantangan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Cost-per-acquisition mahal, organic reach anjlok, tim konten tidak konsisten" 
                              />
                            </div>
                          </div>
                        )}

                        {/* STRATEGI PERTUMBUHAN */}
                        {formData.prioritasPendampingan.includes("Strategi Pertumbuhan & Ekspansi Pasar") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Strategi Pertumbuhan & Ekspansi Pasar</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah perusahaan saat ini memiliki rencana pertumbuhan yang tertulis / terdokumentasi?</label>
                              <div className="grid sm:grid-cols-3 gap-3">
                                {[
                                  { val: "Ya, sudah terdokumentasi", label: "Ya, terdokumentasi" },
                                  { val: "Ada, tapi belum formal", label: "Ada, belum formal" },
                                  { val: "Belum ada", label: "Belum ada" }
                                ].map((o) => (
                                  <button
                                    key={o.val}
                                    type="button"
                                    onClick={() => handleRadioChange("growthRencanaTertulis", o.val)}
                                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                      formData.growthRencanaTertulis === o.val 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Arah ekspansi yang paling diminati (pilih semua yang relevan)</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Membuka cabang / outlet baru",
                                  "Masuk ke kota / wilayah baru",
                                  "Diversifikasi produk atau layanan",
                                  "Ekspansi ke luar negeri",
                                  "Kemitraan / partnership strategis",
                                  "Akuisisi bisnis lain"
                                ].map((opt) => {
                                  const isSelected = formData.growthArahEkspansi.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("growthArahEkspansi", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa yang selama ini menjadi hambatan terbesar dalam pertumbuhan perusahaan Anda?</label>
                              <input 
                                type="text" 
                                name="growthHambatan" 
                                value={formData.growthHambatan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Kurang modal, tidak punya tim ekspansi, persaingan harga sengit" 
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Peluang pasar mana yang ingin Anda kejar dalam 12 bulan ke depan?</label>
                              <input 
                                type="text" 
                                name="growthPeluang12Bulan" 
                                value={formData.growthPeluang12Bulan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Jelaskan secara singkat peluang yang ingin dieksploitasi" 
                              />
                            </div>
                          </div>
                        )}

                        {/* OPERASIONAL */}
                        {formData.prioritasPendampingan.includes("Operasional & Efisiensi Proses Bisnis") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Operasional & Efisiensi Proses Bisnis</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah SOP (Standar Operasional Prosedur) perusahaan sudah terdokumentasi?</label>
                              <div className="grid sm:grid-cols-3 gap-3">
                                {[
                                  { val: "Ya, lengkap dan dijalankan", label: "Ya, lengkap & dijalankan" },
                                  { val: "Sebagian sudah ada", label: "Sebagian sudah ada" },
                                  { val: "Belum ada sama sekali", label: "Belum ada" }
                                ].map((o) => (
                                  <button
                                    key={o.val}
                                    type="button"
                                    onClick={() => handleRadioChange("opsSopTerdokumentasi", o.val)}
                                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                      formData.opsSopTerdokumentasi === o.val 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Area operasional yang paling bermasalah saat ini (pilih semua yang relevan):</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Manajemen SDM & rekrutmen",
                                  "Supply chain / inventory / logistik",
                                  "Proses produksi atau penyampaian layanan",
                                  "Sistem teknologi / IT internal",
                                  "Customer service & after-sales",
                                  "Koordinasi antar divisi / tim"
                                ].map((opt) => {
                                  const isSelected = formData.opsAreaBermasalah.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("opsAreaBermasalah", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa bottleneck terbesar dalam operasional sehari-hari perusahaan Anda?</label>
                              <input 
                                type="text" 
                                name="opsBottleneck" 
                                value={formData.opsBottleneck}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Jelaskan titik kemandekan tersulit dalam operasional harian" 
                              />
                            </div>
                          </div>
                        )}

                        {/* RESTRUKTURISASI */}
                        {formData.prioritasPendampingan.includes("Restrukturisasi Organisasi / Model Bisnis") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Restrukturisasi Organisasi & Model Bisnis</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Apa yang mendorong kebutuhan restrukturisasi? (pilih semua yang relevan)</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Pertumbuhan pesat yang sulit dikelola",
                                  "Penurunan performa bisnis",
                                  "Perubahan model bisnis atau pivot",
                                  "Pergantian kepemimpinan / generasi",
                                  "Persiapan investasi / akuisisi",
                                  "Konflik internal atau ketidakjelasan peran"
                                ].map((opt) => {
                                  const isSelected = formData.restructPendorong.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("restructPendorong", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Apakah struktur organisasi perusahaan saat ini sudah terdokumentasi (org chart)?</label>
                              <div className="grid sm:grid-cols-3 gap-3">
                                {[
                                  { val: "Ya, ada dan diperbarui secara rutin", label: "Ya, diupdate rutin" },
                                  { val: "Ada, tapi sudah tidak relevan", label: "Ada, tidak relevan" },
                                  { val: "Belum ada", label: "Belum ada" }
                                ].map((o) => (
                                  <button
                                    key={o.val}
                                    type="button"
                                    onClick={() => handleRadioChange("restructOrgChart", o.val)}
                                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                      formData.restructOrgChart === o.val 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Apa masalah terbesar dalam struktur organisasi atau model bisnis saat ini?</label>
                              <input 
                                type="text" 
                                name="restructMasalahTerbesar" 
                                value={formData.restructMasalahTerbesar}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Pembagian wewenang bias, KPI tidak jelas, konflik antar-direktur" 
                              />
                            </div>
                          </div>
                        )}

                        {/* RISET PASAR */}
                        {formData.prioritasPendampingan.includes("Riset Pasar & Analisis Kompetitor") && (
                          <div className="p-6 md:p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 space-y-4">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059] uppercase block">Bagian Khusus</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight text-neutral-900 border-l-4 border-neutral-900 pl-3">Riset Pasar & Analisis Kompetitor</h4>
                            
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700">Seberapa sering perusahaan melakukan riset pasar secara formal?</label>
                              <div className="grid sm:grid-cols-3 gap-3">
                                {[
                                  { val: "Rutin — minimal setahun sekali", label: "Rutin (min. 1x/thn)" },
                                  { val: "Sesekali, tidak terjadwal", label: "Sesekali" },
                                  { val: "Belum pernah dilakukan secara formal", label: "Belum pernah" }
                                ].map((o) => (
                                  <button
                                    key={o.val}
                                    type="button"
                                    onClick={() => handleRadioChange("risetFrekuensi", o.val)}
                                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                      formData.risetFrekuensi === o.val 
                                        ? 'bg-neutral-900 text-white border-neutral-900' 
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {o.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-bold text-neutral-700 block">Tujuan utama riset yang dibutuhkan saat ini (pilih semua yang relevan)</label>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Memahami perilaku & kebutuhan konsumen",
                                  "Pemetaan dan benchmarking kompetitor",
                                  "Validasi produk / layanan baru",
                                  "Identifikasi peluang pasar yang belum digarap",
                                  "Penentuan harga (pricing strategy)",
                                  "Riset untuk keperluan pitching investor"
                                ].map((opt) => {
                                  const isSelected = formData.risetTujuan.includes(opt);
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => handleCheckboxGroupChange("risetTujuan", opt)}
                                      className={`p-3 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                                        isSelected 
                                          ? 'bg-neutral-950 border-neutral-950 text-white' 
                                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral-700">Keputusan bisnis apa yang ingin Anda buat berdasarkan hasil riset ini?</label>
                              <input 
                                type="text" 
                                name="risetKeputusan" 
                                value={formData.risetKeputusan}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black" 
                                placeholder="Contoh: Rencana pricing baru, peluncuran lini produk anyar" 
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </motion.div>
                )}

                {/* STEP 5: KOMITMEN & EKSPEKTASI */}
                {step === 5 && (
                  <motion.div 
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">5. Komitmen & Ekspektasi</h3>
                      <p className="text-sm text-neutral-400 font-medium">Bantu kami menyelaraskan target hasil konsultasi yang optimal.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block">Apa hasil ideal yang kamu harapkan dari sesi konsultasi ini? *</label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Mendapatkan gambaran / second opinion atas kondisi bisnis saya",
                          "Mendapatkan rekomendasi strategi yang bisa langsung dieksekusi",
                          "Mencari mitra untuk mendampingi implementasi jangka panjang",
                          "Mengeksplorasi akses pendanaan atau kemitraan bisnis",
                          "Semuanya"
                        ].map((opt, i) => {
                          const isSelected = formData.hasilIdeal.includes(opt);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleCheckboxGroupChange("hasilIdeal", opt)}
                              className={`p-4 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-neutral-950 border-neutral-950 text-white shadow-sm' 
                                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                              }`}
                            >
                              <span>{opt}</span>
                              <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-3 ${isSelected ? 'border-white bg-[#C5A059]' : 'border-neutral-300 bg-white'}`}>
                                {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Seberapa mendesak kebutuhan ini? *</label>
                        <select
                          name="seberapaMendesak"
                          value={formData.seberapaMendesak}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="Sangat mendesak — perlu solusi dalam 1 bulan ke depan">Sangat mendesak (&lt; 1 bulan)</option>
                          <option value="Cukup mendesak — dalam 1–3 bulan ke depan">Cukup mendesak (1-3 bulan)</option>
                          <option value="Masih dalam tahap perencanaan — 3–6 bulan ke depan">Masih perencanaan (3-6 bulan)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Target waktu pencapaian *</label>
                        <select
                          name="targetWaktu"
                          value={formData.targetWaktu}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="3 Bulan">3 Bulan</option>
                          <option value="6 Bulan">6 Bulan</option>
                          <option value="12 Bulan">12 Bulan</option>
                          <option value="> 12 Bulan">&gt; 12 Bulan</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Pernah pakai konsultan bisnis? *</label>
                        <select
                          name="pernahKonsultan"
                          value={formData.pernahKonsultan}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="Belum pernah">Belum pernah</option>
                          <option value="Pernah namun belum memuaskan">Pernah, namun belum memuaskan</option>
                        </select>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* STEP 6: SKEMA, ANGGARAN & PERSETUJUAN */}
                {step === 6 && (
                  <motion.div 
                    key="step6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-100 pb-4 mb-6">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900">6. Skema Keterlibatan & Anggaran</h3>
                      <p className="text-sm text-neutral-400 font-medium">Lengkapi rincian administratif akhir sebelum mengirimkan formulir.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Model keterlibatan yang diminati *</label>
                        <select
                          name="modelKeterlibatan"
                          value={formData.modelKeterlibatan}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih Model Keterlibatan --</option>
                          <option value="Project-based — lingkup & durasi tetap">Project-based (Lingkup & Durasi Tetap)</option>
                          <option value="Retainer bulanan — pendampingan berkelanjutan">Retainer Bulanan (Pendampingan Berkelanjutan)</option>
                          <option value="Advisory / sesi konsultasi per jam">Advisory (Konsultasi per Jam)</option>
                          <option value="Belum tahu — mohon rekomendasi dari CGLINK">Belum tahu, mohon rekomendasi CGLINK</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Rentang anggaran yang dialokasikan *</label>
                        <select
                          name="rentangAnggaran"
                          value={formData.rentangAnggaran}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih Alokasi Anggaran --</option>
                          <option value="< Rp 25 juta">&lt; Rp 25 Juta</option>
                          <option value="Rp 25 – 75 juta">Rp 25 Juta - Rp 75 Juta</option>
                          <option value="Rp 75 – 200 juta">Rp 75 Juta - Rp 200 Juta</option>
                          <option value="> Rp 200 juta">&gt; Rp 200 Juta</option>
                          <option value="Belum ditentukan">Belum ditentukan</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Dari mana Anda mengetahui CGLINK? *</label>
                        <select
                          name="sumberInfo"
                          value={formData.sumberInfo}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm font-bold"
                        >
                          <option value="">-- Pilih --</option>
                          <option value="Referral/Network/Teman">Rekomendasi / Referral Network / Teman</option>
                          <option value="Acara">Acara / Seminar / Exhibition</option>
                          <option value="Media Sosial">Media Sosial (LinkedIn, Instagram)</option>
                          <option value="Website">Website</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>

                      {formData.sumberInfo === "Referral/Network/Teman" && (
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Nama referensi (jika ada)</label>
                          <input 
                            type="text" 
                            name="namaReferensi" 
                            value={formData.namaReferensi}
                            onChange={handleInputChange}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                            placeholder="Contoh: Pak Catur" 
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Hal lain yang perlu kami ketahui tentang bisnis atau situasi Anda</label>
                      <textarea 
                        rows={3}
                        name="halLainKetahui" 
                        value={formData.halLainKetahui}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm" 
                        placeholder="Masukkan detail tambahan atau catatan opsional untuk kami ketahui." 
                      />
                    </div>

                    {/* Persetujuan Checkbox */}
                    <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-3xl mt-6">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={formData.persetujuan}
                          onChange={(e) => setFormData(prev => ({ ...prev, persetujuan: e.target.checked }))}
                          required
                          className="mt-1 w-5 h-5 accent-neutral-950 shrink-0" 
                        />
                        <span className="text-xs text-neutral-500 font-bold leading-relaxed text-left">
                          Saya menyatakan bahwa seluruh informasi yang saya berikan di atas adalah benar dan akurat. Saya menyetujui agar PT. Catur Gunandi Link Indonesia menggunakan informasi ini untuk keperluan penilaian kesesuaian layanan. Saya memahami bahwa seluruh data diperlakukan rahasia dan tidak akan disebarluaskan tanpa persetujuan saya. *
                        </span>
                      </label>
                    </div>

                  </motion.div>
                )}

                {/* Form Buttons navigation footer */}
                <div className="pt-8 border-t border-neutral-100 flex justify-between items-center gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-4 border border-neutral-200 hover:bg-neutral-50 rounded-2xl font-black text-[10px] uppercase tracking-widest text-neutral-600 transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" /> Kembali
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 6 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-8 py-4 bg-neutral-900 text-white hover:bg-black rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer ml-auto"
                    >
                      Lanjut <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer disabled:bg-neutral-400 disabled:cursor-not-allowed ml-auto"
                    >
                      {isSubmitting ? (
                        <>Sedang Mengirim...</>
                      ) : (
                        <>Kirim Formulir <Send className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>

              </form>
            )}
          </AnimatePresence>
          
        </div>

      </div>
    </div>
  );
};
