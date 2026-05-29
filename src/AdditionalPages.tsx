import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Briefcase, ArrowRight, Clock, BookOpen, Linkedin, Instagram, X, CheckCircle2, Download, MessageSquare, User, Phone, Database, Trash2 } from "lucide-react";
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

const LeadsDatabaseAdmin: React.FC<{
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
  submissionsList: any[];
  exportToCSV: () => void;
  clearSubmissions: () => void;
  testSent: boolean;
  setTestSent: (sent: boolean) => void;
  showCopyCode: boolean;
  setShowCopyCode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  webhookUrl,
  setWebhookUrl,
  submissionsList,
  exportToCSV,
  clearSubmissions,
  testSent,
  setTestSent,
  showCopyCode,
  setShowCopyCode
}) => {
  const [localUrl, setLocalUrl] = useState(webhookUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [testError, setTestError] = useState("");

  useEffect(() => {
    setLocalUrl(webhookUrl);
  }, [webhookUrl]);

  const handleSaveWebhook = () => {
    localStorage.setItem("outlook_webhook_url", localUrl.trim());
    setWebhookUrl(localUrl.trim());
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleSendTestData = async () => {
    setTestError("");
    setTestSent(false);
    if (!localUrl.trim()) {
      setTestError("Silakan masukkan URL Webhook terlebih dahulu.");
      return;
    }

    try {
      const dummyData = {
        name: "Mister Catur (Test)",
        email: "test-cglink@perusahaan.com",
        whatsapp: "08123456789",
        timestamp: new Date().toISOString()
      };

      await fetch(localUrl.trim(), {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dummyData)
      });

      setTestSent(true);
      setTimeout(() => setTestSent(false), 4000);
    } catch (e: any) {
      setTestError("Koneksi gagal: " + e.message);
    }
  };

  const appsScriptCode = `function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "error", 
        message: "Spreadsheet tidak terdeteksi. Hubungkan via Ekstensi > Apps Script." 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    var sheet = ss.getActiveSheet();
    
    var name = "";
    var email = "";
    var whatsapp = "";
    
    // Metode A: Dari parameter URL/Form (Sangat andal untuk GET/POST)
    if (e && e.parameter && e.parameter.name) {
      name = e.parameter.name;
      email = e.parameter.email;
      whatsapp = e.parameter.whatsapp;
    }
    
    // Metode B: Dari JSON payload mentah jika ada
    if (!name && e && e.postData && e.postData.contents) {
      try {
        var data = JSON.parse(e.postData.contents);
        name = data.name || "";
        email = data.email || "";
        whatsapp = data.whatsapp || "";
      } catch (err) {
        // Silently skip JSON parse if it's form-encoded
      }
    }
    
    if (name || email || whatsapp) {
      sheet.appendRow([
        new Date(),
        name || "",
        email || "",
        whatsapp || ""
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ status: "ignored", message: "Data kosong" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-6 p-6 bg-white border border-neutral-200 rounded-3xl text-left"
    >
      {/* Spreadsheet Sync Header & Config */}
      <div className="mb-6 p-5 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200/60 shadow-inner">
        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-800 flex items-center gap-2 mb-2">
          <Database className="w-4 h-4 text-[#C5A059]" /> Integrasi Google Spreadsheet Otomatis (Autosync)
        </h4>
        <p className="text-[11px] text-neutral-500 mb-4 leading-relaxed">
          Kirim otomatis data leads (Nama, Email, dan No. WA) langsung ke Google Spreadsheet Anda setiap kali pengunjung mengisi form unduhan.
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-1.5">
              URL Web App / Webhook Apps Script
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={localUrl}
                onChange={(e) => setLocalUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/.../exec"
                className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-xl text-xs focus:border-black outline-none font-mono"
              />
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleSaveWebhook}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {saveSuccess ? "✓ Tersimpan" : "Simpan URL"}
                </button>
                <button
                  type="button"
                  onClick={handleSendTestData}
                  className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Kirim Data Tes
                </button>
              </div>
            </div>
            {testSent && (
              <p className="text-[10px] text-emerald-600 font-bold uppercase mt-1.5">
                ✓ Data uji coba terkirim! Silakan cek spreadsheet Anda.
              </p>
            )}
            {testError && (
              <p className="text-[10px] text-rose-600 font-bold uppercase mt-1.5">
                ⚠️ {testError}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowCopyCode(!showCopyCode)}
              className="text-[10px] font-bold text-[#C5A059] hover:underline uppercase tracking-wide cursor-pointer flex items-center gap-1"
            >
              <span>{showCopyCode ? "Sembunyikan Petunjuk Setup Google Sheets" : "→ Lihat Cara Setup Google Sheets (Gratis & Mudah)"}</span>
            </button>

            {showCopyCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 text-[11px] text-neutral-600 space-y-2.5 bg-white p-4 rounded-xl border border-neutral-250 shadow-sm font-sans"
              >
                <ol className="list-decimal pl-4 space-y-1.5">
                  <li>Buat atau buka spreadsheet baru di Google Sheets Anda.</li>
                  <li>Di menu atas, klik <strong>Ekstensi (Extensions)</strong> &gt; <strong>Apps Script</strong>.</li>
                  <li>Hapus semua kode default di dalam editor tersebut, lalu tempel kode script di bawah.</li>
                  <li>Di kanan atas editor, klik tombol <strong>Terapkan (Deploy)</strong> &gt; <strong>Penerapan Baru (New Deployment)</strong>.</li>
                  <li>Klik ikon roda gigi pengaturan di sebelah tulisan "Pilih jenis", lalu pilih <strong>Aplikasi Web (Web App)</strong>.</li>
                  <li>Ubah pengaturan <strong>"Yang memiliki akses" (Who has access)</strong> menjadi <strong>"Siapa saja" (Anyone)</strong>.</li>
                  <li>Klik <strong>Terapkan (Deploy)</strong>, berikan izin akses (Authorize Access) menggunakan akun Google Anda jika diminta, lalu salin <strong>URL Aplikasi Web (Web App URL)</strong> yang didapatkan.</li>
                  <li>Tempelkan URL tersebut ke kolom <strong>URL Web App</strong> di atas lalu klik <strong>Simpan URL</strong>.</li>
                </ol>

                <div className="pt-2">
                  <div className="flex justify-between items-center bg-neutral-900 px-3 py-1.5 rounded-t-lg">
                    <span className="text-[9px] font-mono font-bold text-neutral-400">Google Apps Script Code</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(appsScriptCode);
                        alert("Kode script berhasil disalin!");
                      }}
                      className="text-[9px] text-white hover:text-neutral-300 font-bold uppercase"
                    >
                      Salin Kode Script
                    </button>
                  </div>
                  <pre className="p-3 bg-neutral-950 text-neutral-100 font-mono text-[9px] rounded-b-lg overflow-x-auto max-h-40">
                    {appsScriptCode}
                  </pre>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Local Export & List of Leads */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-150">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5" /> Database Lokal Browser ({submissionsList.length} Leads)
        </span>
        <div className="flex gap-2">
          <button
            onClick={exportToCSV}
            disabled={submissionsList.length === 0}
            className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50 text-neutral-800 rounded-lg text-[9px] font-black uppercase tracking-wider cursor-pointer font-bold"
          >
            Ekspor CSV
          </button>
          <button
            onClick={clearSubmissions}
            disabled={submissionsList.length === 0}
            className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 disabled:opacity-50 text-rose-600 rounded-lg text-[9px] font-black uppercase tracking-wider cursor-pointer font-bold"
          >
            Hapus Semua
          </button>
        </div>
      </div>

      {submissionsList.length === 0 ? (
        <p className="text-xs text-neutral-400 text-center py-6">Belum ada email atau data masuk yang tersimpan.</p>
      ) : (
        <div className="overflow-x-auto max-h-60 overflow-y-auto">
          <table className="w-full text-left text-[11px] font-mono whitespace-nowrap">
            <thead>
              <tr className="bg-neutral-50 text-neutral-500 uppercase border-b border-neutral-100">
                <th className="p-2 font-bold font-sans">Tanggal</th>
                <th className="p-2 font-bold font-sans">Nama</th>
                <th className="p-2 font-bold font-sans">Email</th>
                <th className="p-2 font-bold font-sans">WhatsApp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {submissionsList.slice().reverse().map((sub, i) => (
                <tr key={i} className="hover:bg-neutral-50">
                  <td className="p-2 text-neutral-400">{new Date(sub.timestamp).toLocaleDateString("id-ID")}</td>
                  <td className="p-2 font-bold text-neutral-800">{sub.name}</td>
                  <td className="p-2 text-neutral-600 font-sans break-all">{sub.email}</td>
                  <td className="p-2 text-neutral-600">{sub.whatsapp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export const OutlookReportForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showAdminDb, setShowAdminDb] = useState(false);
  const [submissionsList, setSubmissionsList] = useState<any[]>([]);
  const [webhookUrl, setWebhookUrl] = useState("https://script.google.com/macros/s/AKfycbwCu1ja_TraCJ65t1dBQqC9TwCRFTTSDxEZt9EHR_oGr8EMujFd_MDjejSNpL76dHNZ/exec");
  const [testSent, setTestSent] = useState(false);
  const [showCopyCode, setShowCopyCode] = useState(false);

  useEffect(() => {
    // Load existing registered customer details if they previously registered
    const savedUserData = localStorage.getItem("outlook_user_data");
    if (savedUserData) {
      try {
        const parsed = JSON.parse(savedUserData);
        if (parsed.name && parsed.email && parsed.whatsapp) {
          setName(parsed.name);
          setEmail(parsed.email);
          setWhatsapp(parsed.whatsapp);
          setIsSubmitted(true);
        }
      } catch (e) {
        console.error("Error parsing saved user data:", e);
      }
    }

    // Load full database of leads
    const savedSubmissions = localStorage.getItem("outlook_submissions");
    if (savedSubmissions) {
      try {
        setSubmissionsList(JSON.parse(savedSubmissions));
      } catch (e) {
        console.error("Error parsing submissions list:", e);
      }
    }

    // Load spreadsheet webhook URL
    const savedWebhook = localStorage.getItem("outlook_webhook_url");
    if (savedWebhook && savedWebhook.includes("AKfycbwCu1ja_TraCJ65t1dBQqC9TwCRFTTSDxEZt9EHR_oGr8EMujFd_MDjejSNpL76dHNZ")) {
      setWebhookUrl(savedWebhook);
    } else {
      localStorage.removeItem("outlook_webhook_url");
      setWebhookUrl("https://script.google.com/macros/s/AKfycbwCu1ja_TraCJ65t1dBQqC9TwCRFTTSDxEZt9EHR_oGr8EMujFd_MDjejSNpL76dHNZ/exec");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError("Nama lengkap wajib diisi.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Alamat email tidak valid.");
      return;
    }
    if (!whatsapp.trim()) {
      setFormError("Nomor WhatsApp wajib diisi.");
      return;
    }

    const newLead = {
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      timestamp: new Date().toISOString()
    };

    // Save lead's personalized session context
    localStorage.setItem("outlook_user_data", JSON.stringify(newLead));

    // Append to global leads list
    const currentList = JSON.parse(localStorage.getItem("outlook_submissions") || "[]");
    currentList.push(newLead);
    localStorage.setItem("outlook_submissions", JSON.stringify(currentList));

    setSubmissionsList(currentList);
    setIsSubmitted(true);

    // Track Facebook/Meta Pixel Lead Event if Pixel is active
    try {
      // @ts-ignore
      if (window.fbq) {
        // @ts-ignore
        window.fbq('track', 'Lead', {
          content_name: 'Economic & Business Outlook 2026',
          content_category: 'Report Download',
          value: 1.00,
          currency: 'IDR'
        });
        console.log("Facebook Pixel Lead tracked successfully.");
      }
    } catch (pixelErr) {
      console.warn("Failed tracking Meta Pixel lead event:", pixelErr);
    }

    // Automatically trigger Google Spreadsheet Webhook / App Script sync
    const targetWebhook = "https://script.google.com/macros/s/AKfycbwCu1ja_TraCJ65t1dBQqC9TwCRFTTSDxEZt9EHR_oGr8EMujFd_MDjejSNpL76dHNZ/exec";
    
    // Format query parameters for GET request (Most reliable, never triggers CORS pre-flight)
    const queryParams = new URLSearchParams({
      name: newLead.name,
      email: newLead.email,
      whatsapp: newLead.whatsapp
    }).toString();
    
    const targetWithParams = `${targetWebhook}?${queryParams}`;
    
    // Send via GET (only once per submission to prevent duplicates)
    fetch(targetWithParams, {
      method: "GET",
      mode: "no-cors"
    }).then(() => {
      console.log("Real-time GET sheet sync triggered successfully.");
    }).catch(err => {
      console.error("GET sheet sync error:", err);
    });
  };

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

  const handleEditIdentity = () => {
    localStorage.removeItem("outlook_user_data");
    setIsSubmitted(false);
    setDownloadSuccess(false);
  };

  const exportToCSV = () => {
    if (submissionsList.length === 0) return;
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Tanggal,Nama,Email,No. WhatsApp\n";

    submissionsList.forEach((sub) => {
      const date = new Date(sub.timestamp).toLocaleString("id-ID");
      const nameEscaped = sub.name.replace(/"/g, '""');
      const emailEscaped = sub.email.replace(/"/g, '""');
      const waEscaped = sub.whatsapp.replace(/"/g, '""');
      csvContent += `"${date}","${nameEscaped}","${emailEscaped}","${waEscaped}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `CGLINK_Outlook2026_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearSubmissions = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus seluruh database email & data leads masuk?")) {
      localStorage.removeItem("outlook_submissions");
      setSubmissionsList([]);
    }
  };

  if (isSubmitted) {
    const waText = encodeURIComponent(
      `Halo CGLINK Indonesia Advisory, saya *${name}* (${email}) baru saja mengunduh e-book Economic & Business Outlook 2026. Saya ingin melakukan konfirmasi dan berkonsultasi mengenai laporan ini.`
    );
    const waUrl = `https://wa.me/6285121372871?text=${waText}`;

    return (
      <div className="bg-neutral-50 border border-neutral-100 p-8 md:p-12 rounded-[3.5rem] shadow-xl my-12 text-left max-w-2xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <span className="text-[10px] font-black text-emerald-600 font-mono tracking-widest uppercase mb-2 block">✓ Akses Berhasil Terbuka</span>
        <h3 className="text-2xl md:text-3xl font-display font-black text-neutral-900 mb-2 uppercase tracking-tight">Terima Kasih, {name}!</h3>
        <p className="text-sm text-neutral-500 mb-8 font-medium leading-relaxed">
          Tautan unduhan dokumen Premium <strong>"Membaca Ekonomi & Outlook Bisnis Indonesia 2026"</strong> sekarang aktif. Silakan unduh dokumen Anda di bawah ini dan lakukan konfirmasi instan via WhatsApp untuk sesi konsultasi strategi.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Button 1: Download PDF */}
          <button
            onClick={startDownload}
            disabled={downloading}
            className="w-full py-5 px-6 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-200 text-white disabled:text-neutral-500 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            {downloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Mengunduh PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Unduh PDF Laporan
              </>
            )}
          </button>

          {/* Button 2: WhatsApp Confirmation */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 px-6 bg-[#27AE60] hover:bg-[#219653] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-xl text-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            Konfirmasi Via WA
          </a>
        </div>

        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl mt-8 flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-[11px] text-emerald-800 font-bold tracking-wide uppercase">
              ✓ Laporan Berhasil Diunduh! Sila cek direktori unduhan (PDF format).
            </p>
          </motion.div>
        )}

        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-wrap justify-between items-center gap-4 text-xs font-bold font-mono text-neutral-400">
          <button onClick={handleEditIdentity} className="hover:text-black transition-colors uppercase tracking-wider cursor-pointer font-sans">
            ← Ganti Identitas / Isi Form Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 border border-neutral-100 p-8 md:p-12 rounded-[3.5rem] shadow-xl my-12 text-left max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none" />

      <span className="text-[10px] font-black text-[#C5A059] font-mono tracking-widest uppercase mb-2 block font-semibold">Premium Report Access</span>
      <h3 className="text-2xl md:text-3xl font-display font-black text-neutral-900 mb-3 uppercase tracking-tight">Buka Akses Unduhan Laporan</h3>
      <p className="text-sm text-neutral-500 mb-8 font-medium leading-relaxed">
        Laporan Premium <strong>"Membaca Ekonomi & Outlook Bisnis Indonesia 2026"</strong> tersedia untuk langsung diunduh secara gratis. Silakan lengkapi identitas Anda di bawah ini untuk mengaktifkan tautan download PDF dan opsi konfirmasi konsultasi secara instan.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-2">Nama Lengkap</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400 pointer-events-none">
              <User className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap Anda"
              className="w-full pl-11 pr-4 py-4 bg-white border border-neutral-200 rounded-2xl text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-2">Alamat Email Bisnis</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400 pointer-events-none">
              <Mail className="w-4 h-4" />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@perusahaan.com"
              className="w-full pl-11 pr-4 py-4 bg-white border border-neutral-200 rounded-2xl text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-2">Nomor WhatsApp</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400 pointer-events-none">
              <Phone className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="0812xxxxxxxx atau +628xxxxxxxx"
              className="w-full pl-11 pr-4 py-4 bg-white border border-neutral-200 rounded-2xl text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              required
            />
          </div>
        </div>

        {formError && (
          <p className="text-xs text-rose-600 font-bold tracking-wide uppercase">
            ⚠️ {formError}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-5 px-6 bg-neutral-900 hover:bg-neutral-800 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-xl cursor-pointer"
        >
          <span>Buka Akses Laporan Premium</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

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
