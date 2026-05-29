import { jsPDF } from "jspdf";

const fetchImageAsBase64 = (url: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/jpeg"));
        } else {
          resolve(null);
        }
      } catch (e) {
        resolve(null);
      }
    };
    img.onerror = () => {
      // In case of crossorigin issue, try direct load without credential / fallback request
      const fallbackImg = new Image();
      fallbackImg.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = fallbackImg.width;
          canvas.height = fallbackImg.height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(fallbackImg, 0, 0);
            resolve(canvas.toDataURL("image/jpeg"));
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      };
      fallbackImg.onerror = () => resolve(null);
      fallbackImg.src = url;
    };
    img.src = url;
  });
};

export const downloadOutlookReportPDF = async () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const primaryDark = [15, 15, 15]; // Charcoal black
  const goldBrass = [197, 160, 89]; // Warm elegant gold #C5A059
  const mutedText = [120, 120, 120];
  const borderLight = [235, 235, 235];

  const drawHeader = (pageTitle: string, pageNum: number) => {
    // Top fine line
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.setLineWidth(0.3);
    doc.line(15, 15, 195, 15);

    // Header text
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("CGLINK CONSULTING", 15, 11);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text("INDONESIA ECONOMIC OUTLOOK 2026", 195, 11, { align: "right" });

    // Page title sub-header
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(pageTitle.toUpperCase(), 15, 21);

    // Footer divider
    doc.line(15, 282, 195, 282);

    // Footer text
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text("© 2026 CGLINK Consulting. All rights reserved.", 15, 287);
    doc.text(`Page ${pageNum} of 7`, 195, 287, { align: "right" });
  };

  const drawSectionTitle = (title: string, sub: string, y: number) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(title.toUpperCase(), 15, y);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(sub.toUpperCase(), 15, y - 4);

    doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.setLineWidth(0.8);
    doc.line(15, y + 2, 35, y + 2);
  };

  // ================= PAGE 1: COVER =================
  let imageAdded = false;
  try {
    const imgBase64 = await fetchImageAsBase64("https://cglinkindonesia.com/wp-content/uploads/2026/05/unnamed.jpg");
    if (imgBase64) {
      // Draw the image directly to fill the entire page (0, 0, 210, 297)
      doc.addImage(imgBase64, "JPEG", 0, 0, 210, 297);
      imageAdded = true;
    }
  } catch (e) {
    console.warn("Failed to load PDF cover image, utilizing elegant fallback:", e);
  }

  if (!imageAdded) {
    // Elegant fallback layout
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.rect(0, 0, 210, 297, "F");

    // Golden accent frame
    doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.setLineWidth(0.8);
    doc.rect(10, 10, 190, 277);

    // Logo text or Icon
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("CC", 105, 55, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text("CGLINK CONSULTING", 105, 63, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text("DATA-DRIVEN SOLUTIONS • REAL IMPACT", 105, 69, { align: "center" });

    // Decorative Line
    doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.setLineWidth(0.5);
    doc.line(85, 75, 125, 75);

    // Large Cover Title
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 255, 255);
    doc.text("MEMBACA EKONOMI", 105, 120, { align: "center" });
    doc.text("INDONESIA 2026", 105, 133, { align: "center" });

    // Subtitle
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(190, 190, 190);
    doc.text("Sektor, Ekspor-Impor, Inflasi, Kurs, Properti, Otomotif, Ritel & FMCG", 105, 146, { align: "center" });

    // Author details box
    doc.setFillColor(25, 25, 25);
    doc.rect(40, 190, 130, 45, "F");
    
    doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.setLineWidth(0.3);
    doc.rect(40, 190, 130, 45);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(180, 180, 180);
    doc.text("DISUSUN OLEH", 105, 200, { align: "center" });
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("MISTER CATUR", 105, 208, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text("SHARING SESSION  •  MEI 2026", 105, 220, { align: "center" });

    // Footer Tagline
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("Grow. Share. Contribute.", 105, 260, { align: "center" });
  }


  // ================= PAGE 2: PETA PERJALANAN =================
  doc.addPage();
  drawHeader("00  •  Peta Perjalanan", 2);

  drawSectionTitle("Peta Perjalanan", "Outline Analisis", 38);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.text("Laporan advisory ini disusun untuk menjawab pertanyaan mendasari iklim bisnis nasional tahun 2026.", 15, 48);

  const roadmapItems = [
    { num: "01", title: "Headline Makro", desc: "PDB tumbuh 5,61% — tapi siapakah penggerak sesungguhnya di balik angka ini?" },
    { num: "02", title: "Sektor Industri", desc: "Sektor yang melesat tumbuh dua digit dibanding sektor yang mengalami stagnasi di Q1 2026." },
    { num: "03", title: "Ekspor & Impor", desc: "Kondisi surplus perdagangan nasional yang terpangkas hampir separuh dalam satu tahun terakhir." },
    { num: "04", title: "Inflasi & Kurs 5 Tahun", desc: "Analisis volatilitas tingkat inflasi domestik serta pelemahan rupiah pelan tapi pasti mencapai 21%." },
    { num: "05", title: "Tabungan & Daya Beli", desc: "Fenomena precautionary saving serta hilangnya 11 juta masyarakat kelas menengah Indonesia." },
    { num: "06", title: "Properti, Otomotif, Ritel, FMCG", desc: "Empat sektor paling jujur dan transparan dalam menggambarkan daya beli riil pasar saat ini." },
  ];

  let currentY = 62;
  roadmapItems.forEach((item, index) => {
    // Draw box
    doc.setFillColor(248, 248, 248);
    doc.rect(15, currentY, 180, 26, "F");
    
    // Draw left accent line
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(15, currentY, 1.5, 26, "F");

    // Number
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(item.num, 22, currentY + 16);

    // Title
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(item.title, 36, currentY + 10);

    // Description text
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(item.desc, 36, currentY + 17, { maxWidth: 152 });

    currentY += 31;
  });


  // ================= PAGE 3: HEADLINE MAKRO & SEKTOR INDUSTRI =================
  doc.addPage();
  drawHeader("01-02  •  Headline Makro & Industri", 3);

  drawSectionTitle("PDB Q1 2026 Tumbuh 5.61%", "Headline Makro", 38);

  // Large Stat box
  doc.setFillColor(245, 242, 235);
  doc.rect(15, 45, 75, 42, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("+5.61%", 52.5, 66, { align: "center" });
  
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("year-on-year, Triwulan I 2026", 52.5, 74, { align: "center" });

  // Comparison List
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Perbandingan Kompetitor (Q1 2026):", 98, 48);

  const countryComp = [
    { name: "Vietnam", val: "7.8%" },
    { name: "Malaysia", val: "5.3%" },
    { name: "Tiongkok", val: "5.0%" },
    { name: "Singapura", val: "4.6%" },
    { name: "Korea Selatan", val: "3.6%" },
    { name: "Amerika Serikat", val: "2.7%" },
  ];

  let countryY = 56;
  countryComp.forEach((country) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(country.name, 98, countryY);
    
    // Draw simple line scale
    const barWidth = parseFloat(country.val) * 7;
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(130, countryY - 2.5, barWidth, 3, "F");

    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(country.val, 185, countryY, { align: "right" });
    countryY += 6.5;
  });

  // Disclaimer warning box
  doc.setFillColor(253, 242, 242);
  doc.rect(15, 93, 180, 22, "F");
  doc.setDrawColor(239, 68, 68);
  doc.setLineWidth(0.5);
  doc.rect(15, 93, 180, 22);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(185, 28, 28);
  doc.text("Catatan Penting:", 20, 101);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(127, 29, 29);
  doc.text("Konsumsi pemerintah melonjak 21,81% (digerakkan program THR + Makan Bergizi Gratis). Secara q-to-q justru kontraksi -0,77% dibanding Q4-2025. Sebagian besar pertumbuhan y-on-y terdorong musiman Ramadhan & Idul Fitri.", 20, 107, { maxWidth: 170 });

  // Section 2: Industry Sector
  drawSectionTitle("Sektor Industri Mana Yang Melesat?", "Sektor Industri", 135);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Indeks pertumbuhan sektoral secara year-on-year (Q1-2026):", 15, 143);

  const sectorGrowth = [
    { name: "Akomodasi & Makan Minum", val: "13.1%", status: "Melesat" },
    { name: "Jasa Lainnya", val: "9.9%", status: "Melesat" },
    { name: "Transportasi & Pergudangan", val: "8.0%", status: "Melesat" },
    { name: "Perdagangan", val: "6.3%", status: "Sedang" },
    { name: "Konstruksi", val: "5.5%", status: "Sedang" },
    { name: "Industri Pengolahan", val: "5.0%", status: "Stagnan/Stabil" },
    { name: "Pertanian", val: "5.0%", status: "Stagnan" },
  ];

  let sectorY = 152;
  sectorGrowth.forEach((sec) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(sec.name, 15, sectorY);

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(sec.status, 95, sectorY);

    // Indicator bar
    const indicatorWidth = parseFloat(sec.val) * 5;
    doc.setFillColor(sec.status === "Melesat" ? primaryDark[0] : goldBrass[0], sec.status === "Melesat" ? primaryDark[1] : goldBrass[1], sec.status === "Melesat" ? primaryDark[2] : goldBrass[2]);
    doc.rect(130, sectorY - 2.5, indicatorWidth, 3, "F");

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(sec.val, 195, sectorY, { align: "right" });

    sectorY += 7.5;
  });

  // Bottom box insight
  doc.setFillColor(248, 248, 248);
  doc.rect(15, 212, 180, 22, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Advisory Sektoral:", 20, 220);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Yang tumbuh dua digit terkonsentrasi di sektor JASA. Sementara Pertanian yang merupakan roda penyerapan tenaga kerja terbesar justru jalan di tempat. Pemenang utama: Mobilitas, Hiburan, dan Makan di Luar.", 20, 226, { maxWidth: 170 });


  // ================= PAGE 4: STRUKTUR PDB & EKSPOR-IMPOR =================
  doc.addPage();
  drawHeader("02-03  •  Struktur PDB & Perdagangan", 4);

  drawSectionTitle("5 Sektor Menopang 63% PDB Indonesia", "Penitipan Roda PDB", 38);

  const pdbContributors = [
    { share: "19.07%", title: "Industri Pengolahan" },
    { share: "13.28%", title: "Perdagangan" },
    { share: "12.67%", title: "Pertanian" },
    { share: "9.81%", title: "Konstruksi" },
    { share: "8.69%", title: "Pertambangan" },
  ];

  let contributorX = 15;
  pdbContributors.forEach((contrib) => {
    // draw small box
    doc.setFillColor(248, 248, 248);
    doc.rect(contributorX, 45, 33, 28, "F");
    
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.setLineWidth(0.3);
    doc.rect(contributorX, 45, 33, 28);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(contrib.share, contributorX + 16.5, 55, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(80, 80, 80);
    doc.text(contrib.title, contributorX + 16.5, 63, { align: "center" });

    contributorX += 36;
  });

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Total Kontribusi 5 Pilar Utama: 63,52% PDB", 15, 82);

  // Section 2: Ekspor Impor Surplus
  drawSectionTitle("Surplus Beruntun Tapi Tergerus Separuh", "Ekspor & Impor", 102);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Meskipun mencetak surplus beruntun selama 71 bulan, margin surplus terjun bebas:", 15, 111);

  // Stats boxes
  const tradeStats = [
    { title: "EKSPOR MARET 2026", val: "$22.53 M", pct: "-3.10% yoy", isNeg: true },
    { title: "IMPOR MARET 2026", val: "$19.21 M", pct: "+1.51% yoy", isNeg: false },
    { title: "SURPLUS MARET 2026", val: "$3.32 M", pct: "71 Bulan Beruntun", isNeg: false },
  ];

  let tradeStatX = 15;
  tradeStats.forEach((stat) => {
    doc.setFillColor(248, 248, 248);
    doc.rect(tradeStatX, 117, 56, 32, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(stat.title, tradeStatX + 28, 125, { align: "center" });

    doc.setFontSize(14);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(stat.val, tradeStatX + 28, 134, { align: "center" });

    doc.setFontSize(8.5);
    doc.setTextColor(stat.isNeg ? 185 : 22, stat.isNeg ? 28 : 101, stat.isNeg ? 28 : 22);
    doc.text(stat.pct, tradeStatX + 28, 142, { align: "center" });

    tradeStatX += 62;
  });

  // Warning text
  doc.setFillColor(254, 252, 232);
  doc.rect(15, 156, 180, 24, "F");
  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(0.5);
  doc.rect(15, 156, 180, 24);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(133, 77, 14);
  doc.text("Poin Kritis Realitas:", 20, 163);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(113, 63, 18);
  doc.text("Surplus Q1 2026 ambles menjadi $5,55 M — turun hampir 50% dibandingkan Q1 2025 ($10,9 M). Ekspor cuma naik tipis 0,34%, sedangkan impor barang melonjak 10,05%. Kita membeli jauh lebih banyak daripada menjual.", 20, 170, { maxWidth: 170 });


  // Grid commodities table
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Peta Komoditas Dagang:", 15, 195);

  // Left Column - Yang Naik
  doc.setFillColor(242, 253, 243);
  doc.rect(15, 201, 86, 68, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(22, 101, 12);
  doc.text("✓ YANG NAIK / SURPLUS", 20, 209);

  const raiseItems = [
    { name: "Industri Pengolahan Ekspor", num: "+3.96%" },
    { name: "Impor Barang Modal", num: "+4.98%" },
    { name: "Surplus Dagang dengan AS", num: "$4.43 M" },
    { name: "Surplus Dagang dengan India", num: "$3.29 M" },
    { name: "Besi-Baja, CPO, & Batu Bara", num: "28.5% Total" },
  ];

  let raiseY = 217;
  raiseItems.forEach((item) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(item.name, 20, raiseY);
    
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(22, 101, 12);
    doc.text(item.num, 93, raiseY, { align: "right" });
    raiseY += 9;
  });

  // Right Column - Yang Turun
  doc.setFillColor(253, 242, 242);
  doc.rect(109, 201, 86, 68, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(185, 28, 28);
  doc.text("✗ YANG TURUN / DEFISIT", 114, 209);

  const dropItems = [
    { name: "Ekspor Pertanian & Perikanan", num: "-44.14%" },
    { name: "Ekspor Pertambangan", num: "-11.17%" },
    { name: "Impor Barang Konsumsi", num: "-10.81%" },
    { name: "Defisit Dagang dengan Tiongkok", num: "-$5.18 M" },
    { name: "Rerata Komoditas (Kopi, Rempah)", num: "-32.0%" },
  ];

  let dropY = 217;
  dropItems.forEach((item) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(item.name, 114, dropY);

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(185, 28, 28);
    doc.text(item.num, 187, dropY, { align: "right" });
    dropY += 9;
  });


  // ================= PAGE 5: INFLASI & KURS =================
  doc.addPage();
  drawHeader("04  •  Tingkat Inflasi & Mata Uang", 5);

  drawSectionTitle("Inflasi & Kurs Rupiah 5 Tahun", "Kebijakan Moneter", 38);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Pengamatan menyeluruh terhadap inflasi menunjukkan jalur fluktuasi tak menentu ('roller coaster'):", 15, 48);

  // Line chart representation as structured timeline
  const inflationTimeline = [
    { year: "2022 — BBM Naik", rate: "5.51%", desc: "Lonjakan tinggi imbas penyesuaian subsidi bahan bakar minyak secara massal." },
    { year: "2024 — Rekor Terendah", rate: "1.57%", desc: "Titik peredaan inflasi terdalam sejak pencatatan digital BPS dimulai tahun 1958." },
    { year: "Februari 2026 — Kaget", rate: "4.76%", desc: "Peningkatan tajam mendadak di awal tahun, tertinggi dalam siklus 3 tahun." },
    { year: "April 2026 — Mereda", rate: "2.42%", desc: "Laju kumulatif kembali mendekati target jangka panjang Bank Indonesia." },
  ];

  let timelineY = 56;
  inflationTimeline.forEach((point) => {
    // bullet node
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.circle(18, timelineY + 1.5, 1.5, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(point.year, 24, timelineY + 3);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(point.rate.includes("1.57") ? [34, 197, 94][0] : [239, 68, 68][0], point.rate.includes("1.57") ? [34, 197, 94][1] : [239, 68, 68][1], point.rate.includes("1.57") ? [34, 197, 94][2] : [239, 68, 68][2]);
    doc.text(point.rate, 195, timelineY + 3, { align: "right" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(point.desc, 24, timelineY + 8, { maxWidth: 170 });

    timelineY += 15;
  });

  // Note
  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(8.5);
  doc.setTextColor(120, 120, 120);
  doc.text("Catatan Advisory: Inflasi rendah tidak melulu berarti ekonomi sehat. Seringkali hal ini mengindikasikan daya beli masyarakat yang terlalu tertekan.", 15, timelineY + 5, { maxWidth: 180 });

  // Right to the Currency Kurs
  drawSectionTitle("Pelemahan Rupiah: Turun Pelan Tapi Pasti", "Mata Uang & Valas", timelineY + 22);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(185, 28, 28);
  doc.text("-21%", 15, timelineY + 44);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Pelemahan 5 Tahun Terakhir", 56, timelineY + 35);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Nilai tukar Rupiah tergerus berkelanjutan dari Rp 14.263 per Dollar AS menjadi Rp 17.400.", 56, timelineY + 41, { maxWidth: 135 });

  // Example box
  doc.setFillColor(248, 248, 248);
  doc.rect(15, timelineY + 50, 180, 18, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Dampak Nyata Ritel Importasi:", 20, timelineY + 56);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("Harga satu unit smartphone impor yang dulunya setara Rp 15 Juta kini melambung menjadi Rp 18 Juta secara murni akibat depresiasi moneter valuta asing — tanpa perubahan fitur produk sedikit pun.", 20, timelineY + 61, { maxWidth: 170 });


  // ================= PAGE 6: TABUNGAN, DAYA BELI & KELAS MENENGAH =================
  doc.addPage();
  drawHeader("05  •  Tabungan, Kelas Menengah & Daya Beli", 6);

  drawSectionTitle("Tabungan Tumbuh — Tapi Siapa Yang Menabung?", "Tabungan Domestik", 38);

  // stats
  doc.setFillColor(248, 248, 248);
  doc.rect(15, 45, 180, 42, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Total DPK (Dana Pihak Ketiga) Perbankan (Maret 2026)", 22, 53);

  doc.setFontSize(24);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("Rp 9.658 Triliun", 22, 65);

  doc.setFontSize(10);
  doc.setTextColor(22, 101, 12);
  doc.text("Tumbuh +10,7% yoy (Didominasi Penempatan Simpanan Korporasi: +18.8%)", 22, 73);

  doc.setFontSize(9);
  doc.setTextColor(185, 28, 28);
  doc.text("DPK Perorangan (Rumah Tangga): Tertekan", 22, 80);

  // Fenomena precautionary saving
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Paradoks Tabungan (Precautionary Saving):", 15, 102);

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  doc.text("\"Masyarakat menengah ke atas cenderung menahan belanja bukan karena mereka bertambah makmur, melainkan karena didorong rasa takut akan ketidakpastian pekerjaan di masa depan.\"", 15, 108, { maxWidth: 180 });

  // Bullet points
  const savingBullets = [
    "Upa buruh rata-rata nasional per Agustus 2025 hanya berkisar Rp 3,33 Juta / bulan.",
    "Laju kenaikan upah rata-rata tahunan cuma berkisar +1,94% - jauh di bawah laju inflasi riil.",
    "Daya beli masyarakat kelas akar rumput tergerus secara konstan dan merayap ke atas.",
    "Kredit konsumtif tumbuh pesat di kisaran 7,4% - 8% sebagai strategi bertahan hidup lewat utang.",
  ];

  let bulletY = 126;
  savingBullets.forEach((bullet) => {
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.circle(18, bulletY + 1.2, 1, "F");
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text(bullet, 23, bulletY + 3, { maxWidth: 172 });
    bulletY += 8;
  });

  // Next: middle class lost
  drawSectionTitle("Kelas Menengah Hilang 11 Juta Orang", "Dinamika Sosial", bulletY + 12);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(185, 28, 28);
  doc.text("-11.000.000", 15, bulletY + 34);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Masyarakat Turun Kelas Sosial (5 Tahun Terakhir)", 85, bulletY + 27);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("Populasi kelas menengah menyusut tajam dari 47.9 Juta jiwa (2024) menjadi 46.7 Juta jiwa (2025) lalu terus menyusut. Hal ini berimbas langsung pada konsumsi rumah tangga yang memegang 53,88% dari total PDB Indonesia.", 85, bulletY + 33, { maxWidth: 110 });


  // ================= PAGE 7: BENANG MERAH, TRADEDOWN & SIKAP PENGUSAHA =================
  doc.addPage();
  drawHeader("06  •  Benang Merah & Konsensus Pengusaha", 7);

  drawSectionTitle("Pola Yang Konsisten: \"Trade Down\"", "Benang Merah Sektor Riil", 38);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Konsumen tidak hilang, melainkan beralih massal ke pilihan alternatif yang lebih ekonomis:", 15, 48);

  const tradedownPillars = [
    { title: "PROPERTI", from: "Tipe Mewah / Besar", to: "Tipe Kecil / Minimalis", stat: "-15.0% Volume" },
    { title: "OTOMOTIF", from: "Innova / Mobil Baru", to: "Avanza / Sepeda Motor", stat: "-7.2% Penjualan" },
    { title: "RITEL", from: "Belanja Non-Esensial", to: "Belanja Musiman Raya", stat: "Sangat Lesu" },
    { title: "FMCG", from: "Merek Premium Utama", to: "Sachet / Merek Murah", stat: "Volume Menurun" },
  ];

  let tdX = 15;
  tradedownPillars.forEach((col) => {
    doc.setFillColor(248, 248, 248);
    doc.rect(tdX, 54, 42, 48, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(col.title, tdX + 21, 62, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text("Dari:", tdX + 21, 69, { align: "center" });
    
    doc.setFont("Helvetica", "bold");
    doc.text(col.from, tdX + 21, 73, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.text("Ke:", tdX + 21, 80, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(col.to, tdX + 21, 84, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(185, 28, 28);
    doc.text(col.stat, tdX + 21, 94, { align: "center" });

    tdX += 46;
  });

  // Section 2: 5 Sikap Pengusaha
  drawSectionTitle("5 Sikap Strategis Menghadapi 2026", "Konsensus & Tindakan Advisory", 118);

  const fiveStrategies = [
    { num: "01", title: "Jangan Tertipu Angka Makro", desc: "PDB tumbuh 5,61% bukan berarti pelanggan Anda tambah makmur. Selalu monitoring indikator riil rumah tangga: tingkat utang konsumen, tabungan ritel, dan upah rata-rata." },
    { num: "02", title: "Pahami Pergeseran Konsumen", desc: "Fenomena 'trade down' menyebar luas. Anda harus memperkuat proposisi nilai produk premium Anda atau mulai merancang diversifikasi lini produk ke versi yang bersahabat." },
    { num: "03", title: "Kelola Eksposur Impor Secara Ketat", desc: "Rupiah melemah 21% dalam 5 tahun meningkatkan beban komoditas impor secara parah. Cari substitusi bahan baku lokal untuk melestarikan rasio margin keuntungan." },
    { num: "04", title: "Gali Peluang Sektor Jasa & Mobilitas", desc: "Akomodasi, kuliner, pariwisata, hiburan, dan logistik pergudangan terbukti melaju kencang. Re-alokasikan sumber daya Anda ke arah pusaran tren positif ini." },
    { num: "05", title: "Segera Bangun Cash Buffer Lebih Tebal", desc: "Kepercayaan pendanaan startup menurun, daya beli rumah tangga tertatih. Cash is King. Liquiditas likuiditas tebal melahirkan ketenangan navigasi melintasi badai ekonomi." },
  ];

  let strY = 127;
  fiveStrategies.forEach((strat) => {
    doc.setFillColor(248, 248, 248);
    doc.rect(15, strY, 180, 18, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(strat.num, 19, strY + 11);

    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.setFontSize(8.5);
    doc.text(strat.title, 27, strY + 6);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(80, 80, 80);
    doc.text(strat.desc, 27, strY + 11, { maxWidth: 164 });

    strY += 21;
  });

  // Closing banner
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(15, 236, 180, 32, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("PESAN PENUTUP DARI MISTER CATUR:", 22, 244);

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text("\"Indonesia 2026 itu seperti rumah yang fondasinya makin tipis tapi catnya dibikin makin mengkilap.\"", 22, 251);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text("Membaca data secara jujur, bertindak dengan tenang.", 22, 261);

  // Save the PDF
  doc.save("CGLINK_Economic_Outlook_Indonesia_2026.pdf");
};
