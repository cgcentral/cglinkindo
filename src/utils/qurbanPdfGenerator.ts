import { jsPDF } from "jspdf";

export const downloadQurbanReportPDF = () => {
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

  // Helper to draw clean borders
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
    doc.text("YAYASAN AMAL SOLEH CG LINK  •  YASCI QURBAN 2025", 15, 18);
    
    // Title
    doc.setFontSize(16);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(title, 15, 26);

    // Subtitle
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(neutralGray[0], neutralGray[1], neutralGray[2]);
    doc.text(subtitle, 15, 31);

    // Separator line
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(15, 34, 195, 34);
  };

  const drawFooter = (pageNum: number, totalPages: number) => {
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Laporan Realisasi Program YASCI Qurban 2025  |  Confidential & Public Report", 15, 287);
    doc.text(`Page ${pageNum} of ${totalPages}`, 195, 287, { align: "right" });
  };

  // ================= PAGE 1: COVER =================
  // Background
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(0, 0, 210, 297, "F");

  // Elegant inner borders matching screenshot page 1
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1);
  doc.rect(12, 12, 186, 273);
  doc.rect(13.5, 13.5, 183, 270);

  // LOGO AREA
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text("AMAL SOLEH CG LINK", 105, 40, { align: "center" });

  // Main Category
  doc.setFontSize(11);
  doc.setTextColor(150, 150, 150);
  doc.text("LAPORAN REALISASI", 105, 95, { align: "center" });

  // Big Title
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text("YASCI", 105, 120, { align: "center" });
  doc.text("QURBAN", 105, 138, { align: "center" });
  
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("2025", 105, 156, { align: "center" });

  // Baseline divider
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(0.7);
  doc.line(75, 175, 135, 175);

  // Subtitle
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text("Berbagi kebahagiaan dan mengalirkan kebermanfaatan", 105, 192, { align: "center" });
  doc.text("ke seluruh penjuru nusantara.", 105, 198, { align: "center" });

  // Technical Metadata footer
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text("Pelaksanaan: 10 - 11 Dzulhijjah 1446 H  /  6 - 7 Juni 2025", 105, 255, { align: "center" });
  doc.text("JAKARTA, INDONESIA", 105, 261, { align: "center" });


  // ================= PAGE 2: EXECUTIVE SUMMARY =================
  doc.addPage();
  drawPageBorder();
  drawHeader("EXECUTIVE SUMMARY", "Latar belakang, waktu pelaksanaan, dan tujuan program");

  // Title Box
  doc.setFillColor(248, 250, 252);
  doc.rect(15, 42, 180, 52, "F");
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.rect(15, 42, 180, 52);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Title : YASCI QURBAN 2025", 22, 52);
  doc.text("Pelaksanaan : 6 - 7 Juni 2025  /  10 - 11 Dzulhijjah 1446 H", 22, 60);
  
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text("Description :", 22, 69);
  
  const descParagraph = "YASCI Qurban 2025 adalah program berbagi kebahagiaan dan pengalaman berqurban bagi mereka yang pertama kali merasakan, yang tersebar di seluruh wilayah terisolir di Indonesia.";
  const splitDesc = doc.splitTextToSize(descParagraph, 135);
  doc.text(splitDesc, 47, 69);

  // Gold Left Indicator line for objectives
  doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.rect(15, 110, 3, 10, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Objektif & Mission Goals", 22, 118);

  // Objectives List
  const objectives = [
    {
      num: "01",
      title: "Rasa Syukur yang Mendalam",
      text: "Sebagai wujud manifestasi rasa syukur kita kepada Allah Subhanahu wa Ta'ala atas limpahan berkah, nikmat sehat, karunia, dan kelapangan rezeki yang dikaruniakan sepanjang tahun."
    },
    {
      num: "02",
      title: "Pemerataan Penerima Manfaat",
      text: "Berbagi kebahagiaan sejati dengan saudara-saudara kita yang belum pernah atau sangat jarang berkesempatan merasakan berkah dan manfaat dari daging hewan Qurban di hari raya."
    },
    {
      num: "03",
      title: "Jembatan Kebaikan Berkelanjutan",
      text: "Menjadi jembatan amanah (syariah-compliant) untuk menyalurkan amal soleh para donatur (mudhohi) sehingga mampu tersebar merata dan menghasilkan dampak kesejahteraan sosial jangka panjang."
    }
  ];

  let currentY = 132;
  objectives.forEach((obj) => {
    // Number circle representation
    doc.setFillColor(241, 245, 249);
    doc.rect(15, currentY, 12, 12, "F");
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(obj.num, 21, currentY + 8, { align: "center" });

    // Header Content
    doc.setFontSize(11);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(obj.title, 32, currentY + 6);

    // Text Content
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(100, 116, 139);
    const splitObjText = doc.splitTextToSize(obj.text, 160);
    doc.text(splitObjText, 32, currentY + 13);

    currentY += 34;
  });

  drawFooter(2, 8);


  // ================= PAGE 3: WORKFLOW / ROADMAP =================
  doc.addPage();
  drawPageBorder();
  drawHeader("TAHAPAN WORKFLOW & STRATEGI", "Proses hulu ke hilir penyaluran Qurban");

  const stageY = 48;
  
  // Column 1: MEI 2025
  doc.setFillColor(248, 250, 252);
  doc.rect(15, stageY, 85, 215, "F");
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, stageY, 85, 215);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("MEI 2025  •  Persiapan", 22, stageY + 12);
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1.5);
  doc.line(22, stageY + 16, 45, stageY + 16);

  const stepsMei = [
    { name: "1. Reg Online (Rekomendasi)", details: "Penyebaran info di media sosial untuk pendaftaran titik distribusi potensial secara organik." },
    { name: "2. Verifikasi Data (Online Check)", details: "Pemeriksaan kelayakan titik (Pondok & Masjid) via official WhatsApp YASCI." },
    { name: "3. Verifikasi Final (Zoom Call)", details: "Wawancara interaktif via zoom bersama pengurus pondok/masjid untuk memvalidasi populasi dhuafa." },
    { name: "4. Pemesanan & Seleksi Vendor", details: "Pemesanan hewan dari peternak lokal terpercaya untuk menjamin efisiensi logsitik luar kota." },
    { name: "5. Penetapan Penerima", details: "Menetapkan 12 entitas (7 Masjid dan 5 Pondok Pesantren) sebagai penerima manfaat tetap." }
  ];

  let subY = stageY + 28;
  stepsMei.forEach(step => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(step.name, 22, subY);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const splitDetails = doc.splitTextToSize(step.details, 72);
    doc.text(splitDetails, 22, subY + 4);
    subY += 34;
  });

  // Column 2: JUNI 2025
  doc.setFillColor(15, 15, 15);
  doc.rect(110, stageY, 85, 215, "F");
  doc.setDrawColor(24, 24, 27);
  doc.rect(110, stageY, 85, 215);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text("JUNI 2025  •  Eksekusi", 117, stageY + 12);
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1.5);
  doc.line(117, stageY + 16, 140, stageY + 16);

  const stepsJuni = [
    { name: "1. Lock Vendor & Deal", details: "Sourcing sapi berbobot pas sesuai syariat, langsung di area pembagian untuk dukung ekonomi wilayah." },
    { name: "2. Termin Pembayaran 2x", details: "Skema pembiayaan amanah untuk menjamin kualitas pemeliharaan ternak hingga hari H." },
    { name: "3. Pengiriman Sapi (H-1)", details: "Mobilisasi armada darat & laut menuju 12 titik penyaluran dengan pengawalan relawan lokal." },
    { name: "4. Penyembelihan Serentak", details: "Prosesi pemotongan serentak pada Hari Tasyrik (10-11 Dzulhijjah) sesuai standar higienis syariah." },
    { name: "5. Distribusi Door-to-Door", details: "Membagi daging kurban langsung kepada warga, menghemat antrean antra-suku & jaga martabat mereka." }
  ];

  subY = stageY + 28;
  stepsJuni.forEach(step => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.text(step.name, 117, subY);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(180, 180, 180);
    const splitDetails = doc.splitTextToSize(step.details, 72);
    doc.text(splitDetails, 117, subY + 4);
    subY += 34;
  });

  drawFooter(3, 8);


  // ================= PAGE 4: STATISTICS =================
  doc.addPage();
  drawPageBorder();
  drawHeader("ALHAMDULILLAH - KINERJA MITRA", "Data statistik final capaian sosial program");

  // Grid blocks for counts
  const statGrid = [
    { val: "7,070", label: "TOTAL PENERIMA MANFAAT", color: [220, 38, 38] },
    { val: "12 Ekor", label: "TOTAL SAPI DISTRIBUSI", color: primaryDark },
    { val: "4,702 Kg", label: "TOTAL BOBOT TERKUMPUL", color: primaryDark },
    { val: "12 Entitas", label: "WILAYAH / TITIK PENERIMA", color: primaryDark }
  ];

  statGrid.forEach((grid, index) => {
    const gx = index % 2 === 0 ? 15 : 110;
    const gy = index < 2 ? 45 : 105;

    doc.setFillColor(248, 250, 252);
    doc.rect(gx, gy, 85, 45, "F");
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.rect(gx, gy, 85, 45);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(grid.color[0], grid.color[1], grid.color[2]);
    doc.text(grid.val, gx + 42.5, gy + 20, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(grid.label, gx + 42.5, gy + 32, { align: "center" });
  });

  // Paragraph story
  currentY = 168;
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Kepatuhan Tata Kelola & Jaminan Syariah (Halal Governance)", 15, currentY);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  const storyPara = "Dengan berpegang teguh pada komitmen tata kelola sosial yang transparan dan amanah, Yayasan Amal Soleh CG Link (YASCI) menguji kelayakan biologis seluruh hewan qurban. Setiap ekor sapi diwajibkan melewati evaluasi bobot minimum, verifikasi klinis kesehatan oleh dokter hewan setempat, dan keabsahan usia kurban berdasarkan parameter rukun syariah Islam.\n\n" +
                    "Hal ini menjamin para mudhohi mendapatkan jaminan mutu ibadah qurban paling amanah dan murni dari rasa khawatir, serta mengoptimalkan volume daging bersih yang dinikmati oleh para warga dhuafa di berbagai pulau eksotis Indonesia.";
  const splitStory = doc.splitTextToSize(storyPara, 180);
  doc.text(splitStory, 15, currentY + 8);

  // Signatory Area at page 4 lower corner
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Disetujui dan Disahkan oleh:", 15, 246);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Amal Soleh Catur Gunandi Link (YASCI)", 15, 252);

  doc.setFont("Helvetica", "bold");
  doc.text("Amal Soleh Catur G.", 15, 274);
  doc.setFont("Helvetica", "normal");
  doc.text("Ketua Dewan Pembina", 15, 279);

  drawFooter(4, 8);


  // ================= PAGE 5: ENTITIES PART 1 =================
  doc.addPage();
  drawPageBorder();
  drawHeader("DAFTAR ENTITAS PENERIMA MANFAAT (PART 1)", "Data rincian sapi, berat, dan jumlah warga penerima maslahat");

  const entList1 = [
    {
      num: "01",
      name: "Masjid Ar Rahman",
      addr: "RT 01 RW 01 Desa Oebobo Kec. Batuputih Kab. Timor Tengah Selatan, Nusa Tenggara Timur",
      berat: "400 Kg",
      penerima: "392 Warga Dhuafa",
      harga: "Rp 20.000.000,-"
    },
    {
      num: "02",
      name: "Masjid Al Istiqomah",
      addr: "Kp. Jawa RT 01 RW 02 Desa Sukamaju Kec. Megamendung Kab. Bogor, Jawa Barat",
      berat: "384 Kg",
      penerima: "452 Warga Dhuafa",
      harga: "Rp 27.000.000,-"
    },
    {
      num: "03",
      name: "Ponpes Tahfidz Madina",
      addr: "Jl. Bojong Hilir No.76, Mandalasari, Kec. Cikalong Wetan, Kabupaten Bandung Barat, Jawa Barat",
      berat: "384 Kg",
      penerima: "963 Warga & Santri",
      harga: "Rp 27.000.000,-"
    },
    {
      num: "04",
      name: "Masjid At-Taqwa",
      addr: "Kp. Cidadap Desa. Cidadap Kec. Campaka Kab. Cianjur, Jawa Barat",
      berat: "480 Kg",
      penerima: "744 Warga Dhuafa",
      harga: "Rp 27.000.000,-"
    },
    {
      num: "05",
      name: "Masjid Attaufiq",
      addr: "Kp. Ciseupan Hilir 02/06 Ds. Seuseupan Kec. Caringin Kab. Sukabumi, Jawa Barat",
      berat: "300 Kg",
      penerima: "618 Warga Dhuafa",
      harga: "Rp 21.000.000,-"
    },
    {
      num: "06",
      name: "Ponpes Darul Fikar",
      addr: "Kp. Coo Barat dekat suku baduy Desa Leuwi coo kecamatan muncang kabupaten Lebak, Banten",
      berat: "384 Kg",
      penerima: "765 Santri & Warga",
      harga: "Rp 27.000.000,-"
    }
  ];

  let ey = 42;
  entList1.forEach(ent => {
    doc.setFillColor(252, 252, 252);
    doc.rect(15, ey, 180, 36, "F");
    doc.setDrawColor(230, 235, 240);
    doc.setLineWidth(0.3);
    doc.rect(15, ey, 180, 36);

    // Sidebar line indicator
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(15, ey, 2, 36, "F");

    // Number + Title
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(`${ent.num}. ${ent.name}`, 22, ey + 7);

    // Stats layout inside
    doc.setFontSize(9);
    doc.text(`Bobot Sapi: ${ent.berat}`, 22, ey + 14);
    doc.text(`Harga Sapi: ${ent.harga}`, 80, ey + 14);
    
    doc.setTextColor(220, 38, 38);
    doc.text(`Impak: ${ent.penerima}`, 142, ey + 14);

    // Address
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const splitAddr = doc.splitTextToSize(`Alamat: ${ent.addr}`, 164);
    doc.text(splitAddr, 22, ey + 22);

    ey += 39;
  });

  drawFooter(5, 8);


  // ================= PAGE 6: ENTITIES PART 2 =================
  doc.addPage();
  drawPageBorder();
  drawHeader("DAFTAR ENTITAS PENERIMA MANFAAT (PART 2)", "Data rincian sapi, berat, dan jumlah warga penerima maslahat");

  const entList2 = [
    {
      num: "07",
      name: "Masjid Baiturrahim",
      addr: "Parit Seri Baru Desa Punggur Besar Kubu Raya, Kalimantan Barat",
      berat: "290 Kg",
      penerima: "536 Warga Dhuafa",
      harga: "Rp 27.000.000,-"
    },
    {
      num: "08",
      name: "Ponpes Darul Ulum Petir",
      addr: "Dusun Pasir Kadu, Rt02/Rw 08, Desa Petir Hilir, Kec. Baregbeg, Kab. Ciamis, Jawa barat",
      berat: "350 Kg",
      penerima: "364 Santri & Warga",
      harga: "Rp 25.000.000,-"
    },
    {
      num: "09",
      name: "SDI Ar Rohmah",
      addr: "Dusun Jetis desa Sumberagung kecamatan Jatirejo, Mojokerto, Jawa Timur",
      berat: "300 Kg",
      penerima: "450 Warga Dhuafa",
      harga: "Rp 25.500.000,-"
    },
    {
      num: "10",
      name: "Pondok Darul Mukhlasin",
      addr: "Desa Sido Binangun, Kec. Way Seputih Lampung Tengah, Lampung",
      berat: "230 Kg",
      penerima: "690 Warga Dhuafa",
      harga: "Rp 17.300.000,-"
    },
    {
      num: "11",
      name: "Masjid Muslim Bilionaire",
      addr: "Cinangneng, Kabupaten Bogor, Jawa Barat",
      berat: "800 Kg",
      penerima: "836 Santri & Warga",
      harga: "Rp 50.000.000,-"
    },
    {
      num: "12",
      name: "Masjid Baitul Ulum",
      addr: "Serpong, Tangerang Selatan, Banten",
      berat: "400 Kg",
      penerima: "240 Warga Dhuafa",
      harga: "Rp 21.600.000,-"
    }
  ];

  ey = 42;
  entList2.forEach(ent => {
    doc.setFillColor(252, 252, 252);
    doc.rect(15, ey, 180, 36, "F");
    doc.setDrawColor(230, 235, 240);
    doc.setLineWidth(0.3);
    doc.rect(15, ey, 180, 36);

    // Sidebar line indicator
    doc.setFillColor(goldBrass[0], goldBrass[1], goldBrass[2]);
    doc.rect(15, ey, 2, 36, "F");

    // Number + Title
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(`${ent.num}. ${ent.name}`, 22, ey + 7);

    // Stats layout inside
    doc.setFontSize(9);
    doc.text(`Bobot Sapi: ${ent.berat}`, 22, ey + 14);
    doc.text(`Harga Sapi: ${ent.harga}`, 80, ey + 14);
    
    doc.setTextColor(220, 38, 38);
    doc.text(`Impak: ${ent.penerima}`, 142, ey + 14);

    // Address
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const splitAddr = doc.splitTextToSize(`Alamat: ${ent.addr}`, 164);
    doc.text(splitAddr, 22, ey + 22);

    ey += 39;
  });

  drawFooter(6, 8);


  // ================= PAGE 7: FINANCIAL AUDIT =================
  doc.addPage();
  drawPageBorder();
  drawHeader("REALISASI ANGGARAN & CASH OUTFLOW", "Transparansi audit penggunaan dana infaq qurban");

  // Summary box
  doc.setFillColor(15, 15, 15);
  doc.rect(15, 45, 180, 28, "F");
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(180, 180, 180);
  doc.text("TOTAL CASH INFLOW / DANA DONASI", 22, 53);
  
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("Rp 301,825,000,-", 22, 65);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("SINKRONISASI 100% DISALURKAN", 193, 63, { align: "right" });

  // Detail itemization table headers
  const tableY = 88;
  doc.setFillColor(241, 245, 249);
  doc.rect(15, tableY, 180, 10, "F");
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, tableY, 180, 10);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("No", 19, tableY + 6.5);
  doc.text("Uraian Destinasi Anggaran", 30, tableY + 6.5);
  doc.text("Nominal (Rp)", 145, tableY + 6.5);
  doc.text("Rasio", 182, tableY + 6.5);

  // Table items
  const financeItems = [
    { no: "1.", desc: "Pelunasan Sapi Qurban (12 Ekor Hewan Utama)", nominal: "195.950.000", ratio: "64.92%" },
    { no: "2.", desc: "Down Payment Sapi Qurban (Uang Muka Mitra Tani)", nominal: "97.850.000", ratio: "32.42%" },
    { no: "3.", desc: "Biaya Plastik Ramah Lingkungan Organik (12 Titik)", nominal: "1.268.000", ratio: "0.42%" },
    { no: "4.", desc: "Biaya Cetak Banner Sosial & Identitas Sapi", nominal: "1.057.000", ratio: "0.35%" },
    { no: "5.", desc: "Upah Jasa Jagal, Kebersihan, & Distribusi", nominal: "5.700.000", ratio: "1.89%" }
  ];

  let itemY = tableY + 10;
  financeItems.forEach(item => {
    doc.setDrawColor(241, 245, 249);
    doc.line(15, itemY + 10, 195, itemY + 10);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    
    doc.text(item.no, 19, itemY + 6.5);
    doc.text(item.desc, 30, itemY + 6.5);
    doc.setFont("Helvetica", "bold");
    doc.text(item.nominal, 145, itemY + 6.5);
    doc.setFont("Helvetica", "normal");
    doc.text(item.ratio, 182, itemY + 6.5);

    itemY += 10;
  });

  // Total summary line
  doc.setFillColor(248, 250, 252);
  doc.rect(15, itemY, 180, 12, "F");
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, itemY, 180, 12);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("TOTAL CASH OUTFLOW (REALISASI)", 30, itemY + 8);
  doc.text("301.825.000", 145, itemY + 8);
  doc.text("100%", 182, itemY + 8);

  // Financial audit statement
  currentY = itemY + 28;
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Konfirmasi Sisa Saldo: Rp 0,- (Clean Balance)", 15, currentY);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  const auditStatement = "Kami menyatakan bahwa seluruh dana sumbangan infaq kemanusiaan qurban yang diterima melalui rekening Yayasan Amal Soleh CG Link telah tersalurkan secara penuh, tuntas, tanpa ada potongan biaya manajemen yayasan (0% management cuts). Sisa saldo Rp 0 di dalam pencatatan merupakan bentuk efisiensi alokasi finansial berskala tinggi yang mengamankan setiap sen dana donatur langsung menjadi daging qurban berkualitas bagi mustahik.";
  const splitAuditStatement = doc.splitTextToSize(auditStatement, 180);
  doc.text(splitAuditStatement, 15, currentY + 6);

  drawFooter(7, 8);


  // ================= PAGE 8: CLOSING (GOLDEN BACK SPLASH) =================
  doc.addPage();
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(0, 0, 210, 297, "F");

  // Golden accent frame layout
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1);
  doc.rect(12, 12, 186, 273);
  doc.rect(13.5, 13.5, 183, 270);

  // Closing greeting
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("JAZAKUMULLAH KHAIRAN KATSIRAN", 105, 100, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(240, 240, 240);
  doc.text("Semoga Allah menerima ibadah qurban bapak/ibu sekalian,", 105, 115, { align: "center" });
  doc.text("Serta melipatgandakan pahala kebaikan yang telah dialirkan.", 105, 121, { align: "center" });

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("Sampai Berjumpa Kembali di YASCI Qurban 2026", 105, 150, { align: "center" });

  // Double thin gold lines divider
  doc.line(70, 164, 140, 164);
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text("ORGANIZED BY", 105, 215, { align: "center" });

  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text("YAYASAN AMAL SOLEH CG LINK", 105, 226, { align: "center" });
  doc.setFontSize(10);
  doc.text("& CGLINK Indonesia Team", 105, 233, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("www.cglinkindonesia.com  •  @amalsolehcglink", 105, 260, { align: "center" });


  // Save to file downloadable name
  doc.save("Laporan_Realisasi_YASCI_Qurban_2025.pdf");
};
