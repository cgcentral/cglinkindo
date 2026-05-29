import { jsPDF } from "jspdf";

export const downloadOutlookReportPDF = async () => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4" // 297mm width x 210mm height
  });

  const primaryDark = [15, 15, 15]; // Charcoal black
  const goldBrass = [197, 160, 89]; // Gold accent #C5A059
  const accentGreen = [34, 197, 94];
  const accentRed = [239, 68, 68];

  const setupSlide = (slideNum: number, category: string, source: string, darkTheme: boolean = false) => {
    if (slideNum > 1) {
      doc.addPage();
    }
    // Background color
    if (darkTheme) {
      doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
      doc.rect(0, 0, 297, 210, "F");
    } else {
      doc.setFillColor(253, 253, 253);
      doc.rect(0, 0, 297, 210, "F");
    }

    // Header segment
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(darkTheme ? goldBrass[0] : 100, darkTheme ? goldBrass[1] : 100, darkTheme ? goldBrass[2] : 100);
    doc.text(category.toUpperCase(), 15, 15);

    doc.setFontSize(7);
    doc.setTextColor(darkTheme ? 160 : 150, darkTheme ? 160 : 150, darkTheme ? 160 : 150);
    doc.text("CGLINK INDONESIA", 282, 15, { align: "right" });

    // Header underline
    doc.setDrawColor(darkTheme ? 40 : 225, darkTheme ? 40 : 225, darkTheme ? 40 : 225);
    doc.setLineWidth(0.3);
    doc.line(15, 18, 282, 18);

    // Footer segment
    doc.line(15, 192, 282, 192);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(darkTheme ? 140 : 130, darkTheme ? 140 : 130, darkTheme ? 140 : 130);
    doc.text(source, 15, 197, { maxWidth: 170 });
    doc.text("Grow. Share. Contribute.", 195, 197);
    doc.text(`Slide ${slideNum} / 20`, 282, 197, { align: "right" });
  };

  // ================= SLIDE 1: COVER (Dark) =================
  setupSlide(1, "SHARING SESSION · MEI 2026", "cglinkindonesia.com", true);

  // Big Display Typography
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(40);
  doc.setTextColor(255, 255, 255);
  doc.text("MEMBACA EKONOMI", 20, 70);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("INDONESIA 2026", 20, 92);

  // Thick accent line
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1.2);
  doc.line(20, 105, 160, 105);

  // Subtitle
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(180, 180, 180);
  doc.text("Sektor, Ekspor-Impor, Inflasi, Kurs, Properti, Otomotif, Ritel & FMCG", 20, 118);

  // Sharing session badge background
  doc.setFillColor(30, 30, 30);
  doc.rect(20, 132, 100, 10, "F");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("SHARING SESSION  •  MEI 2026", 26, 138.5);

  // Author credit
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(150, 150, 150);
  doc.text("Disusun oleh:", 20, 162);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text("MISTER CATUR", 20, 171);

  // Elegant floating abstract rect on the right
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(0.4);
  doc.rect(230, 42, 45, 135);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("CG", 252.5, 110, { align: "center" });


  // ================= SLIDE 2: PETA PERJALANAN (Split Layout) =================
  setupSlide(2, "OUTLINE REPORT", "cglinkindonesia.com", false);

  // Left solid black panel
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(0, 0, 95, 210, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(30);
  doc.setTextColor(255, 255, 255);
  doc.text("PETA", 20, 60);
  doc.text("PERJALANAN", 20, 75);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(160, 160, 160);
  doc.text("Apa yang akan kita\nbaca hari ini?", 20, 100);

  // Right Side lists 6 items
  const journeys = [
    { num: "01", title: "Headline Makro", desc: "PDB tumbuh 5,61% — tapi siapa yang menggerakkannya?" },
    { num: "02", title: "Sektor Industri", desc: "Yang melesat dan yang stagnan di Q1 2026" },
    { num: "03", title: "Ekspor & Impor", desc: "Surplus terpangkas separuh — sinyal apa ini?" },
    { num: "04", title: "Inflasi & Kurs 5 Tahun", desc: "Rupiah melemah 21% sejak 2021" },
    { num: "05", title: "Tabungan & Daya Beli", desc: "Kelas menengah hilang 11 juta orang" },
    { num: "06", title: "Properti, Otomotif, Ritel, FMCG", desc: "Empat sektor paling jujur menggambarkan kondisi" }
  ];

  let jY = 32;
  journeys.forEach(item => {
    // Left dot/node
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.circle(108, jY + 5, 1.2, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(item.num, 115, jY + 7);

    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.setFontSize(11);
    doc.text(item.title, 126, jY + 7);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(110, 110, 110);
    doc.text(item.desc, 126, jY + 13);

    jY += 24;
  });


  // ================= SLIDE 3: 01 · HEADLINE MAKRO (PDB) =================
  setupSlide(3, "01 · HEADLINE MAKRO", "Sumber: BPS, Berita Resmi Statistik No.36/05/Th.XXIX, 5 Mei 2026 · Kemenko Perekonomian (ekon.go.id, Mei 2026)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("PDB Q1 2026 tumbuh 5,61%", 15, 34);

  // Big Stat panel (Left side)
  doc.setFillColor(242, 240, 235);
  doc.rect(15, 45, 85, 65, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("5,61%", 57.5, 78, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("year-on-year, Triwulan I 2026", 57.5, 90, { align: "center" });

  // Bar Graph right side comparison
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Bandingkan dengan mitra dagang utama (Q1 2026):", 120, 48);

  const tradePartners = [
    { name: "Vietnam", val: "7,8%", num: 7.8 },
    { name: "Malaysia", val: "5,3%", num: 5.3 },
    { name: "Tiongkok", val: "5,0%", num: 5.0 },
    { name: "Singapura", val: "4,6%", num: 4.6 },
    { name: "Korea Selatan", val: "3,6%", num: 3.6 },
    { name: "Amerika Serikat", val: "2,7%", num: 2.7 }
  ];

  let pY = 56;
  tradePartners.forEach(p => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(80, 80, 80);
    doc.text(p.name, 120, pY + 4);

    // Draw scale bar
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    const maxBarW = 90;
    const barW = (p.num / 8) * maxBarW;
    doc.rect(180, pY, barW, 4.5, "F");

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(p.val, 278, pY + 4, { align: "right" });

    pY += 9;
  });

  // Bottom Critical warning box
  doc.setFillColor(254, 242, 242);
  doc.rect(15, 125, 267, 52, "F");
  doc.setDrawColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.setLineWidth(0.4);
  doc.rect(15, 125, 267, 52);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("⚠ Catatan Penting", 22, 136);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 20, 20);
  const textMsg = "Konsumsi pemerintah melonjak 21,81% (THR + Makan Bergizi Gratis). Secara qtq justru kontraksi -0,77% dibanding Q4-2025. Pertumbuhan 5,61% sebagian besar didukung oleh dorongan musiman menyongsong bulan Ramadhan & Idul Fitri.";
  doc.text(textMsg, 22, 144, { maxWidth: 253 });


  // ================= SLIDE 4: 02 · SEKTOR INDUSTRI (Melesat) =================
  setupSlide(4, "02 · SEKTOR INDUSTRI", "Sumber: BPS, Pertumbuhan Ekonomi Indonesia Triwulan I-2026 (bps.go.id, Mei 2026) · Kemenko Perekonomian", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Sektor mana yang melesat?", 15, 34);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Pertumbuhan sektor (yoy) — Q1 2026", 15, 42);

  const sectors = [
    { name: "Akomodasi & Makan Minum", val: "13.1%", num: 13.1 },
    { name: "Jasa Lainnya", val: "9.9%", num: 9.9 },
    { name: "Transportasi & Pergudangan", val: "8.0%", num: 8.0 },
    { name: "Perdagangan", val: "6.3%", num: 6.3 },
    { name: "Konstruksi", val: "5.5%", num: 5.5 },
    { name: "Industri Pengolahan", val: "5.0%", num: 5.0 },
    { name: "Pertanian", val: "5.0%", num: 5.0 }
  ];

  let sY = 52;
  sectors.forEach(s => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(s.name, 15, sY + 4);

    // Draw bar chart
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    const maxBarS = 90;
    const barW = (s.num / 14) * maxBarS;
    doc.rect(90, sY, barW, 4.5, "F");

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(s.val, 190, sY + 4, { align: "right" });

    sY += 10;
  });

  // Right Column Insight Box
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(198, 45, 84, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("INSIGHT", 210, 60);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(240, 240, 240);
  doc.text("Yang tumbuh dua digit semua\ndi sektor jasa.", 210, 74, { maxWidth: 66 });
  doc.text("yang stagnan justru\npertanian — sektor yang\nmenyerap tenaga kerja paling\nbesar.", 210, 94, { maxWidth: 66 });
  doc.text("Pemenang: yang berkaitan\nmobilitas, hiburan, makan di\nluar.", 210, 126, { maxWidth: 66 });


  // ================= SLIDE 5: 02 · SEKTOR INDUSTRI (5 Sektor Penopang PDB) =================
  setupSlide(5, "02 · SEKTOR INDUSTRI", "Sumber: BPS, BRS PDB Triwulan I-2026 (Mei 2026) · Data mobilitas Lebaran: BPS, Maret–April 2026", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("5 sektor menopang 63% PDB Indonesia", 15, 34);

  // Core Sektor layout panels
  const supports = [
    { title: "Industri Pengolahan", val: "19,07%", active: true },
    { title: "Perdagangan", val: "13,28%", active: false },
    { title: "Pertanian", val: "12,67%", active: false },
    { title: "Konstruksi", val: "9,81%", active: false },
    { title: "Pertambangan", val: "8,69%", active: false }
  ];

  let cardX = 15;
  supports.forEach(s => {
    doc.setFillColor(s.active ? primaryDark[0] : 248, s.active ? primaryDark[1] : 248, s.active ? primaryDark[2] : 248);
    doc.rect(cardX, 48, 50, 48, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(s.active ? 255 : primaryDark[0], s.active ? 255 : primaryDark[1], s.active ? 255 : primaryDark[2]);
    doc.text(s.val, cardX + 25, 66, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(s.active ? 180 : 100, s.active ? 180 : 100, s.active ? 180 : 100);
    doc.text(s.title, cardX + 25, 78, { align: "center" });

    cardX += 54;
  });

  // Row for "Total kontribusi: 63,52% PDB Indonesia"
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Total kontribusi: 63,52% PDB Indonesia", 15, 112);

  // Insight block below
  doc.setFillColor(245, 245, 245);
  doc.rect(15, 122, 267, 55, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Mobilitas Lebaran 2026:", 22, 134);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(70, 70, 70);
  const mobText = "Kereta api 48 juta penumpang (+17,76%), angkutan udara +32,35%, penyeberangan +72,73%. Wisatawan Nusantara (Wisnus) mencatat 126 juta perjalanan (+42,10%). Sektor mobilitas dan jasa yang relevan mengalami sirkulasi transaksi yang luar biasa cepat.";
  doc.text(mobText, 22, 142, { maxWidth: 253 });


  // ================= SLIDE 6: 03 · EKSPOR & IMPOR =================
  setupSlide(6, "03 · EKSPOR & IMPOR", "Sumber: BPS, Berita Resmi Statistik Ekspor-Impor Maret 2026 (No.30/04/Th.XXIX, April 2026) · CNN Indonesia, Bisnis.com (Mei 2026)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Surplus 71 bulan beruntun — tapi tergerus separuh", 15, 34);

  // 3 Large Stats layout
  const statsBoxes = [
    { title: "Ekspor Maret 2026", value: "$22,53 M", desc: "-3,10% yoy", dark: true },
    { title: "Impor Maret 2026", value: "$19,21 M", desc: "+1,51% yoy", dark: true },
    { title: "Surplus Maret 2026", value: "$3,32 M", desc: "Beruntun 71 bulan", dark: false }
  ];

  let boxX = 15;
  statsBoxes.forEach(st => {
    // Backdrop rect
    doc.setFillColor(st.dark ? primaryDark[0] : 255, st.dark ? primaryDark[1] : 255, st.dark ? primaryDark[2] : 255);
    doc.rect(boxX, 46, 85, 48, "F");
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(st.dark ? 0 : 0.4);
    if (!st.dark) {
      doc.rect(boxX, 46, 85, 48);
    }

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(st.dark ? 180 : 100, st.dark ? 180 : 100, st.dark ? 180 : 100);
    doc.text(st.title, boxX + 42.5, 58, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(st.dark ? 255 : primaryDark[0], st.dark ? 255 : primaryDark[1], st.dark ? 255 : primaryDark[2]);
    doc.text(st.value, boxX + 42.5, 72, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    const colorCode = st.desc.includes("-") ? accentRed : (st.desc.includes("+") ? accentGreen : goldBrass);
    doc.setTextColor(st.dark ? colorCode[0] : 113, st.dark ? colorCode[1] : 63, st.dark ? colorCode[2] : 18);
    doc.text(st.desc, boxX + 42.5, 82, { align: "center" });

    boxX += 91;
  });

  // Bottom analytical callout
  doc.setFillColor(248, 248, 248);
  doc.rect(15, 108, 267, 68, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Yang harus diperhatikan baik-baik:", 22, 120);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Surplus Q1 2026 turun jadi $5,55 M — dari $10,9 M di Q1 2025.", 22, 131);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const extraText = "Itu turun hampir 50% dalam 1 tahun. Ekspor naik tipis 0,34%, impor naik 10,05% — di lapangan riil, kita membeli lebih banyak barang dan komoditas dari luar negeri daripada jumlah volume ekspor yang kita jual.";
  doc.text(extraText, 22, 141, { maxWidth: 253 });


  // ================= SLIDE 7: 03 · EKSPOR & IMPOR (Arah Komoditas) =================
  setupSlide(7, "03 · EKSPOR & IMPOR", "Sumber: BPS, Statistik Perdagangan Luar Negeri Indonesia, kumulatif Januari–Maret 2026 (bps.go.id) · Kemenkeu RI, April 2026", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Yang naik & yang turun — komoditas mana?", 15, 34);

  // Left Section (Green)
  doc.setFillColor(242, 253, 243);
  doc.rect(15, 45, 130, 132, "F");
  doc.setDrawColor(accentGreen[0], accentGreen[1], accentGreen[2]);
  doc.setLineWidth(0.5);
  doc.rect(15, 45, 130, 132);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
  doc.text("✓ YANG NAIK", 24, 60);

  const raiseDetails = [
    { name: "Industri pengolahan ekspor", value: "+3,96%" },
    { name: "Impor barang modal", value: "+4,98%" },
    { name: "Surplus dengan AS", value: "$4,43 M" },
    { name: "Surplus dengan India", value: "$3,29 M" },
    { name: "Komoditas: Besi & baja, CPO, batu bara", value: "28,5% total" }
  ];

  let rY = 74;
  raiseDetails.forEach(r => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(r.name, 24, rY);

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
    doc.text(r.value, 135, rY, { align: "right" });
    rY += 18;
  });

  // Right Section (Red)
  doc.setFillColor(254, 242, 242);
  doc.rect(152, 45, 130, 132, "F");
  doc.setDrawColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.setLineWidth(0.5);
  doc.rect(152, 45, 130, 132);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("✗ YANG TURUN", 161, 60);

  const dropDetails = [
    { name: "Ekspor pertanian, kehutanan, perikanan", value: "-44,14%" },
    { name: "Ekspor pertambangan", value: "-11,17%" },
    { name: "Impor barang konsumsi", value: "-10,81%" },
    { name: "Defisit dengan Tiongkok", value: "-$5,18 M" },
    { name: "Komoditas: kopi, buah, rempah, cengkih", value: "-32%" }
  ];

  let dY = 74;
  dropDetails.forEach(d => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(d.name, 161, dY);

    doc.setFont("Helvetica", "bold");
    doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
    doc.text(d.value, 272, dY, { align: "right" });
    dY += 18;
  });


  // ================= SLIDE 8: 04 · INFLASI =================
  setupSlide(8, "04 · INFLASI & KURS", "Sumber: BPS, Tingkat Inflasi Konsumen Tahunan 2021–2026 (bps.go.id) · Bank Indonesia (bi.go.id) · Kemenko Perekonomian · Trading Economics (April 2026)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Inflasi 5 tahun: roller coaster lalu kaget", 15, 34);

  // Line chart representation
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(15, 140, 125, 140); // Axis line

  // Nodes for line chart
  const linePoints = [
    { x: 20, y: 110, rate: "1.87%", year: "2021" },
    { x: 41, y: 65, rate: "5.51%", year: "2022" },
    { x: 62, y: 98, rate: "2.61%", year: "2023" },
    { x: 83, y: 115, rate: "1.57%", year: "2024" },
    { x: 104, y: 72, rate: "4.76%", year: "2025" },
    { x: 125, y: 101, rate: "2.42%", year: "2026" }
  ];

  doc.setDrawColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.setLineWidth(1);
  for (let i = 0; i < linePoints.length - 1; i++) {
    doc.line(linePoints[i].x, linePoints[i].y, linePoints[i + 1].x, linePoints[i + 1].y);
  }

  // Draw node values
  linePoints.forEach(p => {
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.circle(p.x, p.y, 1.5, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(p.rate, p.x, p.y - 4, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(110, 110, 110);
    doc.text(p.year, p.x, 146, { align: "center" });
  });

  // Under chart quote
  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(10.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Inflasi rendah  ne ekonomi sehat. Bisa juga karena daya beli tertekan.", 15, 168);

  // Right Side text bullets
  doc.setFillColor(250, 250, 250);
  doc.rect(142, 45, 140, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("CERITA DI BALIK ANGKA", 152, 60);

  const stories = [
    { year: "2022 — BBM naik", desc: "Lonjakan ke 5,51%" },
    { year: "2024 — Rekor terendah", desc: "1,57% sejak BPS hitung 1958" },
    { year: "Feb 2026 — Kaget", desc: "4,76%, tertinggi sejak 2023" },
    { year: "Apr 2026 — Mereda", desc: "2,42%, kembali ke target" }
  ];

  let sYDir = 74;
  stories.forEach(st => {
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(152, sYDir, 1.5, 12, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(st.year, 158, sYDir + 4);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(110, 110, 110);
    doc.text(st.desc, 158, sYDir + 9);

    sYDir += 22;
  });


  // ================= SLIDE 9: 04 · KURS (Rupiah) =================
  setupSlide(9, "04 · INFLASI & KURS", "Sumber: Bank Indonesia (JISDOR) · Kompaspedia, Perkembangan Nilai Tukar Rupiah Pascareformasi · Investing.com · Exchange-rates.org (Mei 2026)", true);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Rupiah 5 tahun: melemah pelan tapi pasti", 15, 34);

  // Line chart representation on dark
  doc.setDrawColor(80, 80, 80);
  doc.setLineWidth(0.3);
  doc.line(15, 150, 135, 150);

  const rupiahPoints = [
    { x: 20, y: 135, rate: "14.263", index: 1 },
    { x: 40, y: 110, rate: "15.592", index: 2 },
    { x: 60, y: 116, rate: "15.400", index: 3 },
    { x: 80, y: 102, rate: "16.080", index: 4 },
    { x: 100, y: 104, rate: "16.000", index: 5 },
    { x: 120, y: 92, rate: "16.575", index: 6 },
    { x: 140, y: 78, rate: "17.400", index: 7 }
  ];

  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1.2);
  for (let i = 0; i < rupiahPoints.length - 1; i++) {
    doc.line(rupiahPoints[i].x, rupiahPoints[i].y, rupiahPoints[i + 1].x, rupiahPoints[i + 1].y);
  }

  rupiahPoints.forEach(p => {
    doc.setFillColor(255, 255, 255);
    doc.circle(p.x, p.y, 1.5, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(p.rate, p.x, p.y - 4, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(150, 150, 150);
    doc.text(String(p.index), p.x, 156, { align: "center" });
  });

  // Right Segment Callout
  doc.setFillColor(30, 30, 30);
  doc.rect(155, 45, 127, 132, "F");

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(200, 200, 200);
  doc.text("PELEMAHAN 5 TAHUN", 165, 58);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("-21%", 165, 93);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 220);
  doc.text("Rupiah melemah dari Rp 14.263 → Rp\n17.400 dalam 5 tahun.", 165, 110);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("DAMPAK NYATA:", 165, 132);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(180, 180, 180);
  doc.text("iPhone yang dulu Rp 15jt, sekarang efektif Rp\n18jt — tanpa ada perubahan apa-apa.", 165, 142, { maxWidth: 108 });


  // ================= SLIDE 10: 05 · TABUNGAN & DAYA BELI =================
  setupSlide(10, "05 · TABUNGAN & DAYA BELI", "Sumber: Bank Indonesia, Analisis Uang Beredar Maret 2026 (bi.go.id) · OJK · Kompas (April 2026) · CNBC Indonesia · Survei Upah Buruh BPS Agustus 2025", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Tabungan tumbuh — tapi siapa yang menabung?", 15, 34);

  // Left Section
  doc.setFillColor(248, 248, 248);
  doc.rect(15, 45, 130, 132, "F");

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(110, 110, 110);
  doc.text("Total DPK Perbankan Maret 2026", 24, 60);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Rp 9.658 T", 24, 92);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
  doc.text("tumbuh +10,7% yoy", 24, 106);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.text("Tapi pertumbuhannya didominasi:\nKorporasi: +18,8% yoy\nPerorangan: tertekan", 24, 124);

  doc.setFont("Helvetica", "bold");
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("\"Yang menabung adalah perusahaan, bukan rumah tangga.\"", 24, 156);

  // Right Panel (Dark)
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(152, 45, 130, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("FENOMENA: PRECAUTIONARY SAVING", 162, 58);

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text("\"Masyarakat menabung karena takut, bukan\nkarena makmur.\"", 162, 70);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);

  const bullets = [
    "Upah buruh rata-rata (Agt 2025): Rp 3,33 jt/bulan",
    "Pertumbuhan upah hanya +1,94% — di bawah inflasi",
    "Daya beli riil tergerus pelan-pelan",
    "Kredit konsumtif tumbuh 7,4–8% — bertahan dengan utang"
  ];

  let bY = 94;
  bullets.forEach(b => {
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(162, bY + 1.2, 2, 2, "F");

    doc.setFont("Helvetica", "normal");
    doc.text(b, 168, bY + 3.2, { maxWidth: 110 });
    bY += 18;
  });


  // ================= SLIDE 11: 05 · TABUNGAN & DAYA BELI (Middle Class) =================
  setupSlide(11, "05 · TABUNGAN & DAYA BELI", "Sumber: CORE Indonesia (Center of Reform on Economics) · NEXT Indonesia Center · Dompet Dhuafa · BPS Susenas 2024–2025", true);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Kelas menengah Indonesia hilang 11 juta orang", 15, 34);

  // Left Huge Red metric callout
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(52);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("-11.000.000", 15, 96);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(180, 180, 180);
  doc.text("orang turun kelas dalam 5 tahun terakhir", 15, 112);

  // Right Side blocks representing stats
  const blocks = [
    { title: "Kelas menengah 2024", metric: "47,9 jt" },
    { title: "Kelas menengah 2025", metric: "46,7 jt" },
    { title: "Konsumsi rumah tangga = % PDB", metric: "53,88%" }
  ];

  let blY = 46;
  blocks.forEach(b => {
    doc.setFillColor(30, 30, 30);
    doc.rect(152, blY, 130, 38, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    doc.text(b.metric, 162, blY + 24);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(b.title, 162, blY + 12);

    blY += 44;
  });


  // ================= SLIDE 12: 06 · PROPERTI =================
  setupSlide(12, "06 · PROPERTI", "Sumber: Bank Indonesia, Survei Harga Properti Residensial (SHPR) Q1 2024–Q4 2025 (bi.go.id) · GoodStats (Februari 2026)", true);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Pasar properti: bergeser ke segmen lebih bawah", 15, 34);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(160, 160, 160);
  doc.text("Pertumbuhan penjualan rumah (% yoy)", 15, 42);

  // Simple column chart for property
  doc.setFillColor(242, 240, 235);
  doc.rect(20, 60, 12, 50, "F"); // 31.16
  doc.rect(40, 92, 12, 18, "F"); // 7.3
  doc.rect(60, 102, 12, 8, "F"); // 2.5
  doc.rect(80, 110, 12, -10, "F"); // -3.8 (draw upwards for negative representation relative to bottom)
  doc.rect(100, 110, 12, -4, "F"); // -1.29
  doc.rect(120, 91, 12, 19, "F"); // 7.83

  // Draw axis line at base (y = 110)
  doc.setDrawColor(120, 120, 120);
  doc.setLineWidth(0.3);
  doc.line(15, 110, 140, 110);

  // Label values
  const propLabels = ["31.16", "7.3", "2.5", "-3.8", "-1.29", "7.83"];
  const propX = [26, 46, 66, 86, 106, 126];
  for (let i = 0; i < propLabels.length; i++) {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(240, 240, 240);
    const textY = i === 3 || i === 4 ? 122 : 55;
    doc.text(propLabels[i], propX[i], textY, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(150, 150, 150);
    doc.text(String(i + 1), propX[i], 144, { align: "center" });
  }

  // Right Side Insight Card
  doc.setFillColor(30, 30, 30);
  doc.rect(155, 45, 127, 132, "F");
  doc.setDrawColor(100, 100, 100);
  doc.setLineWidth(0.3);
  doc.rect(155, 45, 127, 132);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("Q2 2025: TIPE BESAR ANJLOK", 165, 58);

  doc.setFontSize(22);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("-14,95%", 165, 78);
  doc.setFontSize(9.5);
  doc.setTextColor(180, 180, 180);
  doc.text("Rumah tipe besar", 165, 84);

  doc.setFontSize(22);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("-17,69%", 165, 104);
  doc.setFontSize(9.5);
  doc.setTextColor(180, 180, 180);
  doc.text("Rumah tipe menengah", 165, 110);

  doc.setFontSize(22);
  doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
  doc.text("+6,7%", 165, 130);
  doc.setFontSize(9.5);
  doc.setTextColor(180, 180, 180);
  doc.text("Rumah tipe kecil", 165, 136);

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(9.5);
  doc.setTextColor(240, 240, 240);
  doc.text("Konsumen turun kelas: yang dulu beli rumah\nbesar, sekarang beli rumah kecil.", 165, 152);


  // ================= SLIDE 13: 06 · PROPERTI ("Butuh Uang") =================
  setupSlide(13, "06 · PROPERTI", "Sumber: Pinhome Indonesia Residential Market Report Semester 2 2025 & Outlook 2026 (Februari 2026) · Indonesia Property Watch, Q1 2026 · Stabilitas.id", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("\"Butuh Uang\" jadi label baru di pasar properti", 15, 34);

  // Large Quote border frame
  doc.setFillColor(248, 248, 248);
  doc.rect(15, 45, 267, 48, "F");

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(10.5);
  doc.setTextColor(80, 80, 80);
  const propQuote = "\"Tekanan ekonomi mendorong pemilik properti melepas aset hunian. Ini terlihat dari meningkatnya listing dengan label 'Butuh Uang' (BU) atau 'Jual Cepat' di bawah harga pasar.\"";
  doc.text(propQuote, 24, 60, { maxWidth: 250 });

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("— Dayu Dara Permata, CEO Pinhome (Feb 2026)", 24, 82);

  // 4 indicators row cards
  const propIndicators = [
    { title: "Inventori rumah baru", rate: "-14%", desc: "per bulan", red: true },
    { title: "Pasokan rumah sekunder", rate: "+5%", desc: "per bulan", red: false },
    { title: "Tingkat pembatalan", rate: "+17,28%", desc: "transaksi", red: true },
    { title: "Permintaan properti", rate: "+16%", desc: "Cikarang", red: false }
  ];

  let indX = 15;
  propIndicators.forEach(prop => {
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.rect(indX, 102, 63, 68, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(prop.red ? accentRed[0] : accentGreen[0], prop.red ? accentRed[1] : accentGreen[1], prop.red ? accentRed[2] : accentGreen[2]);
    doc.text(prop.rate, indX + 31.5, 126, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(190, 190, 190);
    doc.text(prop.title, indX + 31.5, 142, { align: "center", maxWidth: 55 });
    doc.text(prop.desc, indX + 31.5, 154, { align: "center", maxWidth: 55 });

    indX += 68;
  });


  // ================= SLIDE 14: 07 · OTOMOTIF =================
  setupSlide(14, "07 · OTOMOTIF", "Sumber: Gaikindo (Gabungan Industri Kendaraan Bermotor Indonesia), data wholesale 2021–2025 · CNBC Indonesia (Januari 2026) · Trading Economics · Databoks Katadata", true);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Penjualan mobil turun 3 tahun beruntun", 15, 34);

  // Simple Column chart logic
  const carSales = ["887", "1048", "1005", "889", "804"];
  const carX = [24, 46, 68, 90, 112];
  const carH = [45, 60, 56, 46, 40];

  doc.setDrawColor(120, 120, 120);
  doc.setLineWidth(0.3);
  doc.line(15, 140, 130, 140);

  for (let i = 0; i < carSales.length; i++) {
    doc.setFillColor(242, 240, 235);
    doc.rect(carX[i], 140, 14, -carH[i], "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(240, 240, 240);
    doc.text(carSales[i], carX[i] + 7, 140 - carH[i] - 3, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(150, 150, 150);
    doc.text(String(i + 1), carX[i] + 7, 146, { align: "center" });
  }

  // Right Side stats cards
  doc.setFillColor(30, 30, 30);
  doc.rect(148, 45, 134, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("3 TAHUN TURUN", 158, 62);

  doc.setFontSize(36);
  doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
  doc.text("-23%", 158, 96);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(200, 200, 200);
  doc.text("dari 1,05 juta (2022) → 804 ribu (2025)", 158, 110);

  // White metrics block inside
  doc.setFillColor(255, 255, 255);
  doc.rect(158, 124, 114, 42, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("99 mobil", 166, 144);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(110, 110, 110);
  doc.text("per 1.000 penduduk — Pasar masih punya ruang besar.", 166, 154, { maxWidth: 100 });


  // ================= SLIDE 15: 07 · OTOMOTIF (Pasar Mobil Detail) =================
  setupSlide(15, "07 · OTOMOTIF", "Sumber: Gaikindo (gaikindo.or.id), data Desember 2025 & Q1 2026 · Bisnis.com (Januari 2026) · CNBC Indonesia · Detik Oto · Trading Economics (April 2026)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Apa yang sebenarnya terjadi di pasar mobil?", 15, 34);

  // Rows panel Left Side
  const mobRows = [
    { rate: "+25,7%", title: "Lonjakan Desember 2025", desc: "94.100 unit terjual — rekor bulanan tertinggi 2025. APM ngebut diskon + insentif EV impor berakhir 31 Des." },
    { rate: "+1,7%", title: "Q1 2026 mulai membaik?", desc: "209.021 unit di Q1 2026, sedikit naik vs Q1 2025. Tapi Maret 2026 langsung anjlok -13,8% yoy karena libur Lebaran." },
    { rate: "+4,1%", title: "Penjualan motor lesu", desc: "Penjualan domestik motor cuma naik tipis MoM per Oktober 2025. Pasar ekspor roda dua belum pulih." }
  ];

  let mrY = 45;
  mobRows.forEach(r => {
    doc.setFillColor(248, 248, 248);
    doc.rect(15, mrY, 135, 38, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
    doc.text(r.rate, 24, mrY + 22);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(r.title, 48, mrY + 12);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(r.desc, 48, mrY + 18, { maxWidth: 98 });

    mrY += 44;
  });

  // Right Side Top Brand Control Box
  doc.setFillColor(242, 240, 235);
  doc.rect(158, 45, 124, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("PASAR DIKUASAI\nTop 3 (wholesale 2025):", 168, 62);

  const brands = [
    { rank: "1. Toyota", count: "250.431" },
    { rank: "2. Daihatsu", count: "130.677" },
    { rank: "3. Mitsubishi", count: "—" }
  ];

  let bYPos = 90;
  brands.forEach(b => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(b.rank, 168, bYPos);
    doc.text(b.count, 272, bYPos, { align: "right" });
    bYPos += 14;
  });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(110, 110, 110);
  doc.text("Pendatang baru:\nBYD (China) — pemimpin EV\nVinFast (Vietnam) — 10.886 unit\n\nPesaing baru terus masuk ke pasar.", 168, 140);


  // ================= SLIDE 16: 08 · RITEL =================
  setupSlide(16, "08 · RITEL", "Sumber: Bank Indonesia, Survei Penjualan Eceran (SPE) Januari–Desember 2025 (bi.go.id) · Bloomberg Technoz · GoodStats · SWA · Investor.id", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Penjualan ritel: hidup karena hari raya", 15, 34);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(110, 110, 110);
  doc.text("Indeks Penjualan Riil (IPR) 2025–2026", 15, 42);

  // Line chart representation for retail (IPR)
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(15, 140, 135, 140);

  const iprPoints = [
    { x: 20, y: 120 },
    { x: 30, y: 114 },
    { x: 40, y: 70 }, // peak 248.3
    { x: 50, y: 104 },
    { x: 60, y: 112 },
    { x: 70, y: 118 },
    { x: 80, y: 120 },
    { x: 90, y: 122 },
    { x: 100, y: 116 },
    { x: 110, y: 110 },
    { x: 120, y: 100 },
    { x: 130, y: 92 }
  ];

  doc.setDrawColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.setLineWidth(1);
  for (let i = 0; i < iprPoints.length - 1; i++) {
    doc.line(iprPoints[i].x, iprPoints[i].y, iprPoints[i + 1].x, iprPoints[i + 1].y);
  }

  iprPoints.forEach((p, idx) => {
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.circle(p.x, p.y, 1.2, "F");

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(130, 130, 130);
    doc.text(String(idx + 1), p.x, 146, { align: "center" });

    if (idx === 2) {
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
      doc.text("248,3", p.x, p.y - 4, { align: "center" });
    }
  });

  // Under graph annotation
  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(10.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Konsumsi ritel masih sangat tergantung momentum musiman, bukan fundamental.", 15, 168, { maxWidth: 130 });

  // Right Side blocks
  doc.setFillColor(250, 250, 250);
  doc.rect(152, 45, 130, 132, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("POLA YANG TERLIHAT", 162, 60);

  const ritelPoles = [
    { title: "Puncak Maret 2025 (Ramadhan)", desc: "IPR tembus 248,3 — tertinggi." },
    { title: "Apr 2025", desc: "Anjlok -5,1% mtm. Tanpa Lebaran, ritel langsung lesu." },
    { title: "Des 2025", desc: "Pertumbuhan tahunan 3,5% — lebih lambat dari Nov (6,3%)." }
  ];

  let rtpY = 74;
  ritelPoles.forEach(rtp => {
    doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.rect(162, rtpY, 110, 26, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(rtp.title, 170, rtpY + 10);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(240, 240, 240);
    doc.text(rtp.desc, 170, rtpY + 18, { maxWidth: 100 });

    rtpY += 32;
  });


  // ================= SLIDE 17: 09 · FMCG =================
  setupSlide(17, "09 · FMCG", "Sumber: Kantar Worldpanel Indonesia, Brand Footprint 2025 (Mei 2025) & Indonesia FMCG Monitor Q2 2025 · Databoks Katadata · Kompas (Mei 2025)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("FMCG tumbuh — tapi konsumen \"trade down\"", 15, 34);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(110, 110, 110);
  doc.text("Channel penjualan FMCG di Indonesia (Q1 2025)", 15, 42);

  const fmcgCards = [
    { share: "67%", title: "Pasar tradisional & kios", extra: "Turun dari 68%" },
    { share: "17%", title: "Minimarket", extra: "Stagnan 3 tahun" },
    { share: "6%", title: "Hipermarket & supermarket", extra: "Stagnan 3 tahun" },
    { share: "5%", title: "Toko spesialis", extra: "Naik dari 3%" }
  ];

  let fcX = 15;
  fmcgCards.forEach(fc => {
    doc.setFillColor(248, 248, 248);
    doc.rect(fcX, 50, 63, 45, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(fc.share, fcX + 31.5, 70, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(fc.title, fcX + 31.5, 80, { align: "center", maxWidth: 55 });
    doc.text(fc.extra, fcX + 31.5, 88, { align: "center", maxWidth: 55 });

    fcX += 68;
  });

  // Large bottom Kantar highlight Box
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(15, 108, 267, 68, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("KANTAR Q2 2025: \"VOLUME TURUN, KONSUMEN PINDAH KE PRODUK MURAH\"", 24, 122);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(240, 240, 240);
  doc.text("Volume FMCG turun di seluruh kelas sosial-ekonomi, terutama kelas atas-menengah yang terdampak kenaikan harga.", 24, 134, { maxWidth: 250 });
  doc.text("Strategi konsumen: (1) beli volume lebih besar untuk hemat per unit, atau (2) pindah ke merek yang lebih murah untuk kelola pengeluaran.", 24, 142, { maxWidth: 250 });

  doc.setFont("Helvetica", "bold");
  doc.setTextColor(accentGreen[0], accentGreen[1], accentGreen[2]);
  doc.text("✓ FMCG Indonesia masih tumbuh 5,5% (Q1 2025) — tertinggi di Asia Tenggara, setara Filipina", 24, 158);


  // ================= SLIDE 18: BENANG MERAH (Dark Solid) =================
  setupSlide(18, "BENANG MERAH", "Sumber data terkompilasi: BI (SHPR Q2 2025), Gaikindo (2025), BI (SPE Apr 2025), Kantar Worldpanel Indonesia (Q2 2025)", true);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Pola yang konsisten: \"Trade Down\"", 15, 34);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(180, 180, 180);
  doc.text("Pelanggan tidak hilang — mereka pindah ke pilihan yang lebih murah.", 15, 42);

  const pillars = [
    { title: "PROPERTI", from: "Rumah Tipe Besar", to: "Rumah Tipe Kecil", rate: "-15%" },
    { title: "OTOMOTIF", from: "Innova / Mobil baru", to: "Avanza / Motor", rate: "-7,2%" },
    { title: "RITEL", from: "Belanja non-esensial", to: "Hanya hari raya", rate: "Lesu" },
    { title: "FMCG", from: "Premium brand", to: "Volume lebih besar /\nbrand murah", rate: "Volume ↓" }
  ];

  let pilX = 15;
  pillars.forEach(p => {
    // Elegant sharp white/light frame
    doc.setFillColor(30, 30, 30);
    doc.rect(pilX, 50, 63, 128, "F");
    doc.setDrawColor(80, 80, 80);
    doc.setLineWidth(0.4);
    doc.rect(pilX, 50, 63, 128);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(p.title, pilX + 31.5, 66, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("DARI", pilX + 31.5, 78, { align: "center" });
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(p.from, pilX + 31.5, 86, { align: "center", maxWidth: 55 });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("↓", pilX + 31.5, 102, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("KE", pilX + 31.5, 114, { align: "center" });
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(p.to, pilX + 31.5, 122, { align: "center", maxWidth: 55 });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(accentRed[0], accentRed[1], accentRed[2]);
    doc.text(p.rate, pilX + 31.5, 154, { align: "center" });

    pilX += 68;
  });


  // ================= SLIDE 19: YANG BISA KITA LAKUKAN (Strategy) =================
  setupSlide(19, "YANG BISA KITA LAKUKAN", "Sintesis dari data yang dipresentasikan di slide 3–17 · Interpretasi: Mister Catur (CGLink Indonesia)", false);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("5 sikap pengusaha menghadapi 2026", 15, 34);

  const stratCards = [
    { num: "01", title: "Jangan tertipu angka makro.", desc: "PDB tumbuh 5,61% bukan berarti pelanggan Anda makmur. Cek kondisi rumah tangga: upah, tabungan, utang." },
    { num: "02", title: "Pahami pergeseran konsumen.", desc: "Trade down terjadi di semua sektor. Produk premium harus punya value proposition kuat — atau buat versi yang lebih terjangkau." },
    { num: "03", title: "Eksposur impor = risiko.", desc: "Rupiah melemah 21% dalam 5 tahun. Jika bahan baku impor, kelola hedging atau cari subtitusi lokal." },
    { num: "04", title: "Sektor jasa & mobilitas masih hidup.", desc: "Akomodasi +13%, transportasi +8%, jasa lain +10%. Kalau bisnis Anda di area ini, momentum masih ada." },
    { num: "05", title: "Bangun cash buffer.", desc: "Krisis kepercayaan startup, tabungan rumah tangga turun, kelas menengah hilang 11 juta. Cash adalah raja di kondisi seperti ini." }
  ];

  let cardY = 46;
  stratCards.forEach(sc => {
    doc.setFillColor(248, 248, 248);
    doc.rect(15, cardY, 267, 24, "F");
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.3);
    doc.rect(15, cardY, 267, 24);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(sc.num, 24, cardY + 15);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(sc.title, 42, cardY + 9);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(sc.desc, 42, cardY + 15, { maxWidth: 228 });

    cardY += 28;
  });


  // ================= SLIDE 20: PESAN PENUTUP (Dark Solid) =================
  setupSlide(20, "PESAN PENUTUP", "TERIMA KASIH • MISTER CATUR • CGLink Indonesia • @mistercatur • www.mistercatur.com", true);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("PESAN PENUTUP", 148.5, 45, { align: "center" });

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("\"Indonesia 2026 itu seperti", 148.5, 68, { align: "center" });
  doc.text("rumah yang fondasinya makin tipis", 148.5, 80, { align: "center" });
  doc.text("tapi catnya dibikin makin mengkilap.\"", 148.5, 92, { align: "center" });

  // Thin line under quote
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(0.6);
  doc.line(100, 108, 197, 108);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(180, 180, 180);
  doc.text("Tugas kita sebagai pengusaha:", 148.5, 122, { align: "center" });

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text("Membaca data dengan jujur, bertindak dengan tenang.", 148.5, 134, { align: "center" });

  doc.setFontSize(16);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("TERIMA KASIH", 148.5, 160, { align: "center" });

  // Outlines elegant border layout
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(0.5);
  // Elegant border design matching slide 20
  doc.line(15, 52, 15, 165);
  doc.line(15, 52, 60, 52);
  doc.line(237, 165, 282, 165);
  doc.line(282, 52, 282, 165);

  // Save the PDF
  doc.save("CGLINK_Economic_Outlook_Indonesia_2026.pdf");
};
