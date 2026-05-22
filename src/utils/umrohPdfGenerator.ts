import { jsPDF } from "jspdf";

export const downloadUmrohReportPDF = () => {
  // Create jsPDF instance (A4: 210mm x 297mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const primaryDark = [15, 15, 15]; // Charcoal black
  const goldBrass = [181, 143, 44]; // Elegant Gold
  const neutralGray = [100, 116, 139]; // Slate Slate
  const bgLight = [250, 250, 250]; // Soft White

  const drawPageBorder = (color: number[] = [226, 232, 240], margin: number = 10) => {
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(0.5);
    doc.rect(margin, margin, 210 - margin * 2, 297 - margin * 2);
  };

  const drawHeader = (title: string, subtitle: string) => {
    // Upper brand line
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text("YAYASAN AMAL SOLEH CG LINK  •  UTAS REPORT 2025", 15, 18);
    
    // Title
    doc.setFontSize(14);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(title, 15, 25);

    // Subtitle
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(neutralGray[0], neutralGray[1], neutralGray[2]);
    doc.text(subtitle, 15, 30);

    // Separator line
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(15, 33, 195, 33);
  };

  const drawFooter = (pageNum: number, totalPages: number) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Laporan Realisasi Program YASCI UTAS 2025  |  Confidential & Public Report", 15, 287);
    doc.text(`Page ${pageNum} of ${totalPages}`, 195, 287, { align: "right" });
  };

  // ================= PAGE 1: COVER =================
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(0, 0, 210, 297, "F");

  // Elegant borders for cover
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1);
  doc.rect(8, 8, 210 - 16, 297 - 16);

  doc.setDrawColor(50, 50, 50);
  doc.setLineWidth(0.3);
  doc.rect(10, 10, 210 - 20, 297 - 20);

  // Cover Text
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("ACTIVITY & REALIZATION REPORT", 105, 50, { align: "center" });

  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text("UMROH TAMU ALLAH", 105, 75, { align: "center" });
  doc.text("SPESIAL 2025", 105, 87, { align: "center" });

  // Gold separator line
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1);
  doc.line(75, 100, 135, 100);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  doc.text("42 Dakwah Champions Reach Baitullah During Ramadhan", 105, 115, { align: "center" });

  // Location/Date metadata block
  doc.setFillColor(28, 28, 28);
  doc.rect(25, 150, 160, 65, "F");
  
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(0.5);
  doc.rect(25, 150, 160, 65);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("PROGRAM METRICS & SCHEDULE", 35, 162);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(230, 230, 230);
  doc.text("Program Period    :  4 - 12 March 2025 (3 - 10 Ramadhan 1446 H)", 35, 172);
  doc.text("Total Beneficiaries:  42 Selected Jamaah (Guru Ngaji, Huffadz, & Marbot)", 35, 180);
  doc.text("Operator Partner   :  Salmi Halal Tour (Vetted Partner)", 35, 188);
  doc.text("Strategic Flight   :  Saudi Arabian Airlines (Direct Flights)", 35, 196);
  doc.text("Total Realization  :  Rp 1,218,428,217,- (Zero Balance)", 35, 204);

  // Footer cover
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("YAYASAN AMAL SOLEH CG LINK (YASCI)", 105, 255, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("Komp. Grand Surapaticore Blok Aa-16, Pasirlayung, Kec. Cibeunying Kidul, Bandung, Jabar", 105, 262, { align: "center" });

  // ================= PAGE 2: PROGRAM HIGHLIGHTS & ITINERARY =================
  doc.addPage();
  drawPageBorder();
  drawHeader("PROGRAM HIGHLIGHTS & BENEFICIARIES", "Distribution of dakwah workers sent to Mecca & Madinah");
  drawFooter(2, 3);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("1. SEBARAN JAMAAH UTAS 2025 BERDASARKAN DEDIKASI", 15, 45);

  // Draw table header
  doc.setFillColor(245, 245, 245);
  doc.rect(15, 52, 180, 8, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  doc.text("DEDICATION CATEGORY / ROLE", 20, 58);
  doc.text("JAMAAH COUNT", 120, 58);
  doc.text("CONTRIBUTION TO COMMUNITY", 150, 58);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(15, 60, 195, 60);

  // Table rows
  const roles = [
    { role: "Guru Ngaji (Quran Teachers)", count: "19 Jamaah", desc: "Teaching Quran & character building" },
    { role: "Penggiat Dakwah (Dakwah Activists)", count: "15 Jamaah", desc: "Spreading Islamic values across regions" },
    { role: "Huffadz (Quran Memorizers)", count: "6 Jamaah", desc: "Preserving Quran recitation & values" },
    { role: "Pengurus Masjid (Marbot/Takmir)", count: "2 Jamaah", desc: "Maintaining & managing local mosques" },
  ];

  doc.setFont("Helvetica", "normal");
  let currentY = 66;
  roles.forEach((row, i) => {
    doc.text(row.role, 20, currentY);
    doc.text(row.count, 120, currentY);
    doc.text(row.desc, 150, currentY);
    doc.line(15, currentY + 3, 195, currentY + 3);
    currentY += 8;
  });

  // Geographic distribution
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("2. SEBARAN GEOGRAFIS JAMA'AH (10 PROVINSI)", 15, 108);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  
  const geoText = "The 42 dakwah champions were meticulously selected from 10 different provinces of Indonesia:";
  doc.text(geoText, 15, 115);

  // Box grid for provinces
  const provinces = [
    { name: "Jawa Barat", val: "22" },
    { name: "Jawa Timur", val: "8" },
    { name: "Lampung", val: "3" },
    { name: "DI Yogyakarta", val: "2" },
    { name: "Jawa Tengah", val: "2" },
    { name: "DKI Jakarta", val: "1" },
    { name: "Banten", val: "1" },
    { name: "Batam / Kepri", val: "1" },
    { name: "Nusa Tenggara Barat", val: "1" },
    { name: "Nusa Tenggara Timur", val: "1" },
  ];

  let boxX = 15;
  let boxY = 120;
  const boxWidth = 33;
  const boxHeight = 12;

  provinces.forEach((p, index) => {
    doc.setFillColor(250, 250, 250);
    doc.rect(boxX, boxY, boxWidth, boxHeight, "F");
    doc.setDrawColor(230, 230, 230);
    doc.rect(boxX, boxY, boxWidth, boxHeight);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(p.val, boxX + 4, boxY + 8);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(60, 60, 60);
    doc.text(p.name, boxX + 11, boxY + 7);

    boxX += boxWidth + 3;
    if ((index + 1) % 5 === 0) {
      boxX = 15;
      boxY += boxHeight + 3;
    }
  });

  // Spiritual itinerary section
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("3. DETAIL PERJALANAN SPIRITUAL & LAYANAN PREMIUM", 15, 163);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);

  const itineraryItems = [
    "Transportasi Udara: Penerbangan langsung Jakarta - Madinah / Jeddah - Jakarta pp dengan maskapai Saudi Arabian Airlines.",
    "Akomodasi Hotel: Menggunakan hotel strategis dalam radius 300 meter untuk memudahkan jamaah beribadah: Sawaed Al Khair di Makkah dan Al Fayroz Shatta di Madinah.",
    "Layanan Ibadah Utama: Pendampingan pembimbing ibadah (muthawwif) berpengalaman, penyaluran ibadah umroh dua kali, halaqah Quran intensif, serta muhasabah kolektif langsung menghadap Baitullah.",
    "Ziarah & Wisata Edukasi: Kunjungan khusus ke Raudhah, ziarah situs sejarah Islam di kota Makkah & Madinah, serta acara kekeluargaan dan buka puasa Ramadhan bersama di Kebun Kurma Madinah."
  ];

  let itinY = 171;
  itineraryItems.forEach((text, i) => {
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(`•`, 15, itinY);
    
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(75, 75, 75);
    // Auto wrap text
    const lines = doc.splitTextToSize(text, 172);
    doc.text(lines, 20, itinY);
    itinY += lines.length * 4.3 + 2;
  });

  // ================= PAGE 3: TRANSPARENT FINANCIAL REALIZATION & SIGN-OFF =================
  doc.addPage();
  drawPageBorder();
  drawHeader("TRANSPARENT FINANCIAL REALIZATION", "Sistem Laporan Keuangan Nol Rupiah (Zero-Balance System)");
  drawFooter(3, 3);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("1. LAPORAN PEMASUKAN & REALISASI ANGGARAN", 15, 45);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Total penerimaan infaq donatur sebesar Rp 1.218.428.217,- disalurkan penuh 100% tanpa potongan:", 15, 52);

  // Financial Table
  doc.setFillColor(245, 245, 245);
  doc.rect(15, 58, 180, 8, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(60, 60, 60);
  doc.text("KETERANGAN ALOKASI / ANGGARAN", 20, 64);
  doc.text("REALISASI DANA (RP)", 135, 64);
  doc.text("PERSENTASE", 170, 64);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(15, 66, 195, 66);

  const budget = [
    { title: "Paket Umroh Utama (Tiket, Hotel Makkah/Madinah, Visa, Konsumsi)", val: "Rp 1,104,000,000", pct: "90.61%" },
    { title: "Transportasi Domestik (Tiket pesawat daerah asal, bus penjemputan)", val: "Rp 69,000,000", pct: "5.66%" },
    { title: "Operasional & Logistik Lapangan (Manasik, pembimbing, handling)", val: "Rp 39,900,000", pct: "3.27%" },
    { title: "Uang Saku & Perlengkapan Tambahan Jamaah", val: "Rp 4,600,000", pct: "0.38%" },
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  let budgetY = 72;
  budget.forEach((item, i) => {
    const wrappedTitle = doc.splitTextToSize(item.title, 110);
    doc.text(wrappedTitle, 20, budgetY);
    doc.text(item.val, 135, budgetY, { align: "left" });
    doc.text(item.pct, 170, budgetY, { align: "left" });
    const rowHeight = wrappedTitle.length * 4;
    doc.line(15, budgetY + rowHeight, 195, budgetY + rowHeight);
    budgetY += rowHeight + 4;
  });

  // Total Row
  doc.setFillColor(250, 248, 242);
  doc.rect(15, budgetY - 2, 180, 8, "F");
  doc.setFont("Helvetica", "bold");
  doc.text("TOTAL DISBURSED / DISTRIBUTED", 20, budgetY + 3);
  doc.text("Rp 1,218,428,217", 135, budgetY + 3);
  doc.text("100.00%", 170, budgetY + 3);
  doc.line(15, budgetY + 6, 195, budgetY + 6);

  // Remaining Balance Callout
  doc.setFillColor(255, 235, 235);
  doc.rect(15, budgetY + 12, 180, 16, "F");
  doc.setDrawColor(230, 0, 0);
  doc.setLineWidth(0.3);
  doc.rect(15, budgetY + 12, 180, 16);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(150, 0, 0);
  doc.text("ZERO-BALANCE POLICY CONFIRMED  (SALDO AKHIR: Rp 0,-)", 20, budgetY + 18);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(80, 85, 90);
  doc.text("Seluruh dana infaq yang masuk telah disalurkan tuntas 100% untuk kesejahteraan perjalanan spiritual jamaah tanpa ada sisa saldo program.", 20, budgetY + 24);

  // Closing Statement
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("2. INTEGRITAS & MISI JANGKA PANJANG YASCI", 15, budgetY + 38);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  const closingText = "Program Umroh Tamu Allah Spesial (UTAS) merupakan agenda berkesinambungan Yayasan Amal Soleh CG Link. Dengan melahirkan transparansi penuh, kami menumbuhkan 'peace of mind' dan jembatan syar'i antara donatur yang siap berbagi keberkahan dengan para da'i, marbot, dan guru Al-Qur'an penjaga akidah umat di penjuru nusantara. Semoga menjadi amal jariyah yang terus mengalir pahalanya bagi para donatur setia YASCI.";
  const wrappedClosing = doc.splitTextToSize(closingText, 180);
  doc.text(wrappedClosing, 15, budgetY + 45);

  // Signatures / Validation Stamps
  const sigY = budgetY + 80;
  doc.setDrawColor(220, 220, 220);
  doc.line(15, sigY, 195, sigY);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(50, 50, 50);
  doc.text("Dipersiapkan oleh:", 20, sigY + 6);
  doc.text("Yayasan Amal Soleh CG Link (YASCI)", 20, sigY + 10);
  
  doc.text("Disahkan secara Syariah:", 135, sigY + 6);
  doc.text("Dewan Syariah Aliansi CG Link", 135, sigY + 10);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(120, 120, 120);
  doc.text("Team Pelaksana Program UTAS 2025", 20, sigY + 28);
  doc.text("Sistem Pengawasan Keuangan Internal", 135, sigY + 28);

  // Save PDF
  doc.save("YASCI_UTAS_2025_Activity_Report.pdf");
};
