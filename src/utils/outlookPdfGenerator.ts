import { jsPDF } from "jspdf";

export const downloadOutlookReportPDF = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const primaryDark = [15, 15, 15]; // Charcoal black
  const goldBrass = [181, 143, 44]; // Elegant Gold
  const bgLight = [250, 250, 250]; // Soft White

  // ================= PAGE 1: COVER =================
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(0, 0, 210, 297, "F");

  // Elegant golden inner border for cover
  doc.setDrawColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.setLineWidth(1);
  doc.rect(10, 10, 190, 277);

  // Logo / Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("CGLINK INDONESIA", 105, 50, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(230, 230, 230);
  doc.text("LEGAL  •  LOGICAL  •  HALAL", 105, 56, { align: "center" });

  // Divider
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  doc.line(85, 62, 125, 62);

  // Main Title
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text("ECONOMIC & BUSINESS", 105, 110, { align: "center" });
  doc.text("OUTLOOK 2026", 105, 122, { align: "center" });

  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(12);
  doc.setTextColor(180, 180, 180);
  doc.text("A Premium Analysis of National Corporate Growth", 105, 134, { align: "center" });

  // Meta info
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text("Released: Q2 2026", 105, 230, { align: "center" });
  doc.text("Presented by CGLINK Business Advisory", 105, 237, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("CONFIDENTIAL & FREE ACCESS", 105, 250, { align: "center" });


  // ================= PAGE 2: ANALYSIS =================
  doc.addPage();
  
  // Base setup
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.rect(0, 0, 210, 297, "F");

  doc.setDrawColor(240, 240, 240);
  doc.setLineWidth(0.3);
  doc.rect(10, 10, 190, 277);

  // Page Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("CGLINK INDONESIA BUSINESS OUTLOOK 2026", 15, 18);
  doc.setDrawColor(220, 220, 220);
  doc.line(15, 22, 195, 22);

  // Section: Executive Summary
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("Executive Summary: Indonesia 2026", 15, 32);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  
  const text1 = "Ekonomi Indonesia di tahun 2026 diproyeksikan tumbuh tangguh di kisaran 5,16%. " +
    "Namun, tantangan berupa kepatuhan hukum, efisiensi operasional, dan pengelolaan risiko " +
    "menjadi jurang pemisah antara bisnis yang benar-benar tumbuh dengan bisnis yang stagnan. " +
    "CGLINK Indonesia hadir untuk menjembatani standarisasi kepatuhan operasional.";
  const splitText1 = doc.splitTextToSize(text1, 180);
  doc.text(splitText1, 15, 40);

  // Subsections points
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.text("1. Legal Standing & Compliance", 15, 75);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Penyusunan legal standing yang halal dan logis adalah pondasi utama dari ekspansi nasional. " +
    "Pemeriksaan ketat terhadap kepatuhan regulasi lingkungan hidup, perpajakan, dan ketenagakerjaan " +
    "akan menjadi kunci stabilitas di tahun 2026.", 15, 82, { maxWidth: 180 });

  doc.setFont("Helvetica", "bold");
  doc.text("2. Resource & Energy Optimization", 15, 115);

  doc.setFont("Helvetica", "normal");
  doc.text("Kebutuhan energi industri yang andal (seperti HSD / Solar B35) dengan rantai pasok tangguh " +
    "menjadi katalis pertumbuhan yang tidak bisa ditawar. Melalui kolaborasi strategis dengan penyedia " +
    "resmi, perusahaan dapat memotong inefisiensi logistik.", 15, 122, { maxWidth: 180 });

  doc.setFont("Helvetica", "bold");
  doc.text("3. B2C & Consumer Travel Services Engagement", 15, 155);

  doc.setFont("Helvetica", "normal");
  doc.text("Peningkatan daya beli dalam perjalanan spiritual (Umrah & Wisata Halal) mengalami " +
    "lonjakan signifikan pasca-pemulihan global. Layanan perjalanan yang terstandarisasi, amanah, " +
    "dan tepercaya menjadi pilihan utama para konsumen di tahun 2026.", 15, 162, { maxWidth: 180 });

  // Call to action block
  doc.setFillColor(primaryDark[0], primaryDark[1], primaryDark[2]);
  doc.rect(15, 200, 180, 50, "F");

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text("KONSULTASIKAN OUTLOOK BISNIS ANDA BERSAMA KAMI", 105, 215, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Hubungi tim Business Advisory CGLINK Indonesia untuk audit kepatuhan,", 105, 224, { align: "center" });
  doc.text("analisis operasional mendalam, serta pengadaan energi logistik.", 105, 229, { align: "center" });

  doc.setFont("Helvetica", "bold");
  doc.setTextColor(goldBrass[0], goldBrass[1], goldBrass[2]);
  doc.text("Hubungi WhatsApp kami: +62 895-4283-55681", 105, 240, { align: "center" });

  // Footer for Page 2
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("© 2026 CGLINK Indonesia. All rights reserved.", 15, 280);
  doc.text("Page 2 of 2", 195, 280, { align: "right" });

  // Save the PDF
  doc.save("CGLINK_Economic_and_Business_Outlook_2026.pdf");
};
