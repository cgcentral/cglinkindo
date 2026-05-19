import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight,
  Mail, 
  CheckCircle2, 
  Building2,
  Users, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Target,
  Lightbulb,
  Handshake,
  Search,
  UserCheck,
  Award,
  Heart,
  Briefcase,
  Coins,
  FileText,
  Globe,
  Settings,
  Store,
  BarChart,
  Shirt,
  GraduationCap,
  Instagram,
  Camera
} from "lucide-react";

interface PageProps {
  onBack: () => void;
}

const CTASection = () => (
  <div className="mt-16 pt-8">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent mb-12"
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
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  </div>
);

export const VisionMissionPage: React.FC<PageProps> = ({ onBack }) => {
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
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        {/* Hero / Intro Section */}
        <motion.div variants={itemVariants} className="w-full mb-32">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900">
            CGLINK Indonesia
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-500 font-medium mb-8 leading-tight">
            Building Your Business Future with CGLINK Indonesia
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl font-medium">
            In an era of fast-moving economic transformation, the presence of a strategic partner is no longer just an option, but a necessity. CGLINK Indonesia is here as a catalyst for your business growth.
          </p>
        </motion.div>

        {/* Who We Are & Why Choose Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.section variants={itemVariants} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-neutral-900" />
              Who Are We?
            </h3>
            <p className="text-neutral-500 leading-relaxed font-medium">
              Founded in 2023 and based in the business heart of South Jakarta, CGLINK Indonesia is a business consulting firm born from a spirit of collaboration and innovation. We understand that every business has unique challenges; that's why we don't just provide advice, but provide measurable and sustainable solutions.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-neutral-900" />
              Why Choose CGLINK?
            </h3>
            <p className="text-neutral-500 leading-relaxed font-medium">
              We believe in Uncompromising Professionalism. Our team consists of highly dedicated experts helping clients navigate the complexities of the business world. With a transparent and results-oriented work philosophy, we ensure every step we take together brings you closer to the peak of success.
            </p>
          </motion.section>
        </div>

          {/* Visi & Misi Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* Visi */}
          <motion.div 
            variants={itemVariants}
            className="relative group overflow-hidden rounded-3xl bg-white text-black p-12 md:p-16 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-8 opacity-10 absolute -top-10 -left-6 uppercase">Vision</h2>
              <h2 className="text-5xl font-display font-bold mb-12 relative uppercase">Vision</h2>
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-12">
                "To be a strategic business collaboration partner based on legal, logical, and halal principles through products, services, and professional business development to create sustainable growth and benefits for all parties."
              </p>
              <div className="h-px w-24 bg-black/20 mb-12"></div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-display font-black leading-none tracking-tighter">
                ONE LINK,<br />
                THOUSANDS OF<br />
                OPPORTUNITIES.
              </h3>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-neutral-50 rounded-3xl p-12 md:p-16 border border-neutral-100"
          >
            <h2 className="text-5xl font-display font-bold mb-12 text-neutral-900 uppercase tracking-tighter">Mission</h2>
            <div className="space-y-8">
              {[
                "Organize legal, logical, and halal business products and services.",
                "Become a professional and mutually beneficial business collaboration partner.",
                "Provide value-added consulting services and business solutions.",
                "Develop new businesses and business opportunities professionally and sustainably.",
                "Create sustainable growth and benefits for all parties."
              ].map((misi, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-400">
                    0{idx + 1}
                  </div>
                  <p className="text-lg text-neutral-500 leading-relaxed group-hover:text-neutral-900 transition-colors font-medium">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Nilai-Nilai Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-neutral-900 uppercase">VALUES</h2>
            <div className="text-right">
              <p className="text-neutral-900 font-display font-bold text-2xl mb-2">GRACE</p>
              <p className="text-neutral-400 max-w-xs font-bold uppercase tracking-widest text-xs">Grow • Share • Contribute</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Grow", 
                icon: <TrendingUp className="w-6 h-6" />, 
                desc: "Increasing capabilities through knowledge, attitude, and mentality based on trust and professionalism." 
              },
              { 
                title: "Share", 
                icon: <Users className="w-6 h-6" />, 
                desc: "Sharing stories, experiences, and solutions with clients, partners, and the community fairly, transparently, and responsibly." 
              },
              { 
                title: "Contribute", 
                icon: <Heart className="w-6 h-6" />, 
                desc: "Creating a positive impact for clients, the economy, and the community through sustainable activities." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-2xl mb-4 text-neutral-900">{item.title}</h4>
                <p className="text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Mengapa CGLINK Consulting? Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-900/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black mb-20 text-center text-neutral-900 uppercase tracking-tighter">Why CGLINK Consulting?</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {[
                { num: "01", title: "Data Driven Strategy", desc: "Every recommendation we provide is based on in-depth research and real data analysis — not assumptions." },
                { num: "02", title: "Experienced Consultants", desc: "Over 10 years of direct experience in the Indonesian business ecosystem." },
                { num: "03", title: "Personal Approach", desc: "Every solution is tailormade to your unique business conditions." },
                { num: "04", title: "Value Based", desc: "A business philosophy that integrates integrity, trust, and real social impact." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-5xl font-display font-black text-neutral-200 group-hover:text-neutral-900 transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h4>
                    <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-700 transition-colors font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kami Hadir untuk Anda Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-20 text-center text-neutral-900 uppercase tracking-tighter">We Are Here For You</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Corporates", desc: "Market insights and strategic advisory for smarter and more measurable business decisions." },
              { title: "Investors", desc: "A bridge between your capital and verified, high-potential business opportunities." },
              { title: "Startups", desc: "From business model validation to regional expansion — we are with you every step of the way." },
              { title: "SMEs", desc: "Rise to the next level with the right strategy and full support from our professional team." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative p-8 rounded-3xl border border-neutral-100 bg-neutral-50 h-full flex flex-col hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="text-2xl font-display font-bold mb-4 text-neutral-900">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  <div className="mt-auto pt-6">
                    <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all text-neutral-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};

export const PilarBisnisPage: React.FC<PageProps> = ({ onBack }) => {
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
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>
        <motion.div variants={itemVariants} className="w-full mb-24">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900">
            BUSINESS PILLARS
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl font-medium">
            Our service structure is designed to provide comprehensive support for your business growth through strategic partnerships and expert consulting.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-16 border-l-4 border-neutral-900 pl-6 text-neutral-900 uppercase tracking-tighter">Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Funding Partnership", 
                icon: <Handshake className="w-8 h-8" />, 
                desc: "Syirkah-based Sharia funding, transparent and equitable, to support business growth." 
              },
              { 
                title: "Business Consulting", 
                icon: <Briefcase className="w-8 h-8" />, 
                desc: "Business consultants helping companies set up business foundations, manage finance & HR, and develop digital strategies for sustainable growth." 
              },
              { 
                title: "Funding Acquisition", 
                icon: <TrendingUp className="w-8 h-8" />, 
                desc: "Sharia funding to develop new businesses or enter existing businesses, with measured expansion strategies." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:bg-white hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pilar Bisnis Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-16 border-l-4 border-neutral-900 pl-6 text-neutral-900 uppercase tracking-tighter">Business Pillars</h2>
          <div className="space-y-12">
            {/* BTW Mister Catur */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 relative overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-900">BTW Mister Catur</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-medium">
                    A digital media channel focusing on business content, motivation, and life values. Through this platform, we not only share practical insights but also open up opportunities for collaboration and sponsorship.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                    {[
                      "Focus on business, motivation, and Islamic values.",
                      "Wide audience reach through YouTube & social media.",
                      "Has appeared in several podcasts & media coverage",
                      "Open for collaboration & sponsorship."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start text-neutral-500">
                        <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                        <span className="text-sm font-bold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://btwmistercatur.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-all group/btn"
                  >
                    Visit btwmistercatur.com
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
                  <img 
                    src="https://cglinkindonesia.com/wp-content/uploads/2026/03/Desain-tanpa-judul-2.png" 
                    alt="BTW Mister Catur" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* CG Tour & Travel */}
            <div className="bg-neutral-50 p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 group text-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2 text-neutral-900">CG Tour & Travel</h3>
                  <p className="text-neutral-900 font-bold uppercase tracking-widest text-xs">Amanah Umrah Travel Services</p>
                </div>
                <a 
                  href="https://cgtourtravel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all font-bold flex items-center gap-2"
                >
                  cgtourtravel.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-neutral-500 text-lg leading-relaxed mb-8 max-w-3xl font-medium">
                Trustworthy, comfortable, and reliable Umrah travel services. We accompany pilgrims with professional travel management and support from official partners to ensure smooth worship.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Trustworthy & Sharia compliant.",
                  "Modern travel facilities.",
                  "Professional pilgrim assistance.",
                  "Reliable network of official partners."
                ].map((bullet, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all">
                    <p className="text-neutral-600 font-bold text-sm tracking-tight">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              {/* Program Affiliate */}
              <div className="bg-neutral-900 text-white p-12 rounded-[3.5rem] shadow-2xl">
                <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight">Affiliate Program</h3>
                <p className="text-neutral-400 leading-relaxed mb-8 font-medium">
                  CGLINK opens opportunities for partners to expand product distribution through an affiliate program. With a structured system, we help partners reach a wider market.
                </p>
                <ul className="space-y-4">
                  {[
                    "Easy to join & transparent.",
                    "Digital sales system support.",
                    "Wide distribution network.",
                    "Potential additional income."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-center text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Yayasan Amal Soleh */}
              <div className="bg-neutral-50 p-12 rounded-[3.5rem] border border-neutral-100">
                <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight text-neutral-900">Amal Soleh Foundation</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 font-medium">
                  CGLINK is committed to not only building businesses but also making a real contribution to society through the CGLINK Amal Soleh Foundation (YASCI).
                </p>
                <ul className="space-y-4">
                  {[
                    "Education & literacy programs.",
                    "Social & humanitarian support.",
                    "Community economic empowerment.",
                    "Collaboration with social partners."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-center text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                      <span className="font-bold">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};

export const ImpactPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reports = [
    {
      title: "Sustainable Business Ecosystem Report 2024",
      category: "Sustainability",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      desc: "An in-depth analysis of how sharia-compliant business models contribute to Indonesia's circular economy."
    },
    {
      title: "YASCI Social Impact Audit Q1",
      category: "Social Impact",
      date: "April 2024",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop",
      desc: "Measuring the reach and effectiveness of our education and community empowerment programs across West Java."
    },
    {
      title: "MSME Resilience Strategy 2024",
      category: "Economic",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop",
      desc: "Frameworks for small business sustainability in high-volatility market conditions."
    }
  ];

  const initiatives = [
    {
      title: "Jumat Berkah: Sharing 150+ Meal Boxes",
      category: "Community",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2340&auto=format&fit=crop",
      location: "Jakarta Selatan",
      link: "https://www.instagram.com/amalsolehcglink/"
    },
    {
      title: "Scholarship Support for 25 Students",
      category: "Education",
      date: "May 2, 2024",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2484&auto=format&fit=crop",
      location: "Banten Province",
      link: "https://www.instagram.com/amalsolehcglink/"
    },
    {
      title: "Humanitarian Speed: Emergency Response",
      category: "Humanitarian",
      date: "April 18, 2024",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2340&auto=format&fit=crop",
      location: "Yogyakarta",
      link: "https://www.instagram.com/amalsolehcglink/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-900 selection:text-white"
    >
      <div className="w-full px-6 md:px-16">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-16 transition-colors group font-black uppercase tracking-[0.4em] text-[10px]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <header className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.5em] mb-8 border-l-4 border-neutral-900 pl-6">Governance & Impact</div>
              <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 uppercase leading-[0.9] mb-8">
                Our Impact:<br />
                <span className="text-neutral-300">Committing to Real</span> <br />
                Contribution.
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-xl text-neutral-900 font-bold leading-relaxed mb-6">
                Aligned with our core value to "Contribute," CGLINK is dedicated to creating a positive, sustainable impact for our clients, the economy, and the wider community.
              </p>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-8">
                We are committed to not just building businesses, but making a tangible difference in society. Through our foundation, Yayasan Amal Soleh CGLINK (YASCI), we bring this commitment to life by driving various social, educational, and community empowerment programs.
              </p>
              <a 
                href="https://www.instagram.com/amalsolehcglink/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200"
              >
                <Instagram className="w-4 h-4" /> View Social Action
              </a>
            </div>
          </div>
        </header>

        {/* Focus Areas Section */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Social Collaborations",
                  icon: <Handshake className="w-8 h-8" />,
                  desc: "Actively partnering with various social foundations to amplify our shared impact through collaborative resource management and strategic outreach."
                },
                {
                  title: "Humanitarian Support",
                  icon: <Heart className="w-8 h-8" />,
                  desc: "Providing direct social assistance to underprivileged communities and supporting the physical development and operational welfare of local mosques."
                },
                {
                  title: "Muslim Empowerment",
                  icon: <Globe className="w-8 h-8" />,
                  desc: "Running special initiatives such as Qurban Sebar Nusantara and funding Umrah pilgrimages for dedicated mosque caretakers (marbot) and local religious leaders."
                }
              ].map((focus, i) => (
                <div key={i} className="p-12 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                    {focus.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase mb-6 tracking-tight">{focus.title}</h3>
                  <p className="text-neutral-500 font-medium leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              ))}
           </div>
        </section>

        {/* Initiatives List - Instagram Style Benchmarking */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 text-neutral-400 mb-6">
                <Camera className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">From the Field</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-900">Recent <br /><span className="text-neutral-400">Initiatives</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {initiatives.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 relative border border-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:rounded-[2rem]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black shadow-xl">
                      <Instagram className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-black">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                      {item.location}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-300">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 group-hover:text-black transition-colors leading-tight mb-4">
                    {item.title}
                  </h3>
                   <div className="w-12 h-1 bg-neutral-100 group-hover:w-24 group-hover:bg-neutral-900 transition-all duration-700" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Featured Impact - Amal Soleh */}
        <section className="mb-40">
          <div className="bg-neutral-950 text-white rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-3 p-12 md:p-24 flex flex-col justify-center">
                <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-10">Flagship Initiative</span>
                <h2 className="text-4xl md:text-7xl font-display font-black mb-10 uppercase tracking-tighter leading-none">
                  YASCI: Doing <br /> Good <br /> Better.
                </h2>
                <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-16 max-w-xl">
                  Through Yayasan Amal Soleh CGLINK (YASCI), we implement programs like Umrah funding for mosque caretakers (marbot) and Qurban distributions which ensure our growth feeds back into the heart of the community.
                </p>
                <div className="flex flex-wrap gap-12">
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">350+</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Lives Impacted</div>
                   </div>
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">12+</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Active Programs</div>
                   </div>
                   <div>
                     <div className="text-4xl font-display font-bold mb-2">100%</div>
                     <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Halal Governance</div>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative min-h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2340&auto=format&fit=crop" 
                   alt="Impact Action"
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-900">Reports & <span className="text-neutral-400">Insights</span></h2>
            </div>
            <div className="flex gap-4">
               {['All', 'Sustainability', 'Social', 'Economic'].map(cat => (
                 <button key={cat} className="px-6 py-2 rounded-full border border-neutral-100 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all">
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] bg-neutral-50 border border-neutral-100 overflow-hidden mb-8 relative">
                   <img 
                     src={report.image} 
                     alt={report.title}
                     className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-white via-white/20 to-transparent">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">{report.category}</span>
                      <h3 className="text-2xl font-display font-bold text-neutral-900 leading-tight mb-6">{report.title}</h3>
                      <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                        View Report <FileText className="w-4 h-4" />
                      </button>
                   </div>
                </div>
                <div className="px-4">
                   <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                     {report.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pillars Section */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-3 gap-16 border-t border-neutral-100 pt-32">
              <div>
                 <h3 className="text-2xl font-display font-bold uppercase mb-8">Environmental</h3>
                 <p className="text-neutral-500 font-medium leading-relaxed">
                   Prioritizing eco-efficient operations and supporting ventures that reduce waste and carbon footprint across our portfolio.
                 </p>
              </div>
              <div>
                 <h3 className="text-2xl font-display font-bold uppercase mb-8">Social</h3>
                 <p className="text-neutral-500 font-medium leading-relaxed">
                   Fostering inclusive growth and empowering underserved communities through education, health, and economic access.
                 </p>
              </div>
              <div>
                 <h3 className="text-2xl font-display font-bold uppercase mb-8">Governance</h3>
                 <p className="text-neutral-500 font-medium leading-relaxed">
                   Upholding the highest standards of integrity, transparency, and sharia-compliance in every strategic transaction.
                 </p>
              </div>
           </div>
        </section>
        
        <CTASection />
      </div>
    </motion.div>
  );
};

export const InvestmentThesisPage: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24"
    >
      <div className="w-full px-6 md:px-16 text-left">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group font-bold uppercase tracking-widest text-[10px]"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </button>

        <h1 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter text-neutral-900 uppercase leading-none">Investment <br/> Thesis</h1>
        
        <div className="bg-neutral-900 text-white p-12 md:p-20 rounded-[3.5rem] mb-32 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full"></div>
           <div className="max-w-5xl relative z-10">
             <h2 className="text-3xl md:text-5xl font-display font-black mb-10 uppercase tracking-tighter italic text-neutral-400">"We don't just invest capital; we invest in sustainable futures."</h2>
             
             <div className="grid lg:grid-cols-2 gap-16 mb-20 text-left">
               <div>
                  <h4 className="text-xl font-bold mb-8 uppercase tracking-[0.3em] text-white border-l-4 border-white pl-6">Investment Types</h4>
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-lg font-black text-neutral-200 mb-3 uppercase">Project-Based Funding</h5>
                      <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                        Financing ownership rights over a specific project, asset, or intellectual property of a business entity, so that the investment and risk are completely isolated to the viability and income of the project alone.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-neutral-200 mb-3 uppercase">Acquisition Funding</h5>
                      <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                        Funding provided to portfolio companies to purchase or acquire a complete corporate entity—including all assets, operations, employees, and liabilities—is intended to accelerate growth, gain market share, or acquire new talent (acqui-hire).
                      </p>
                    </div>
                  </div>
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-8 uppercase tracking-[0.3em] text-white border-l-4 border-white pl-6">Investment Criteria</h4>
                  <ul className="space-y-6 text-neutral-400 font-medium">
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>Minimum 3 years of active operation.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>Proven management and execution capabilities.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                      <span>The business model must be <span className="text-white italic">halal, legal, and logical</span>.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h4 className="text-sm font-black uppercase tracking-widest text-neutral-300 mb-4">Investment Amount</h4>
                    <p className="text-2xl font-display font-bold text-white mb-2">Up to IDR 500 Million</p>
                    <p className="text-neutral-500 text-xs font-medium">
                      Investments above IDR 500 million are possible for businesses that meet certain strategic requirements and conditions.
                    </p>
                  </div>
               </div>
             </div>
           </div>
        </div>
        
        <CTASection />
      </div>
    </motion.div>
  );
};

export const FundingPortfolioPage: React.FC<PageProps> = ({ onBack }) => {
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

  const sectors = [
    { name: "Retail", icon: <Store className="w-8 h-8" /> },
    { name: "Trading", icon: <BarChart className="w-8 h-8" /> },
    { name: "Fashion", icon: <Shirt className="w-8 h-8" /> },
    { name: "Education", icon: <GraduationCap className="w-8 h-8" /> }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16">
        <motion.button 
          variants={itemVariants}
          onClick={onBack} 
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </motion.button>

        <motion.div variants={itemVariants} className="w-full mb-24 text-left">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900 leading-none">
            FUNDING <br/> PORTFOLIO
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-900 font-bold mb-8 uppercase tracking-widest">
            PARTNERSHIP & ACQUISITION
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-3xl font-medium">
            Strategic funding is carried out through a series of assessment and verification processes to ensure that investments made truly consider various aspects and have a positive impact on recipients.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-4 text-neutral-900">PORTFOLIO SECTOR</h2>
              <p className="text-lg text-neutral-500 max-w-xl font-medium">
                The following sectors are selected based on market potential, Sharia compliance, and business expansion readiness in Indonesia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <div key={idx} className="bg-neutral-50 p-12 rounded-[2.5rem] border border-neutral-100 hover:shadow-xl transition-all group text-center flex flex-col items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 uppercase tracking-tighter">{sector.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-neutral-900 p-12 md:p-20 rounded-[4rem] text-center mb-32 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-transparent"></div>
          <p className="text-2xl md:text-4xl text-white leading-tight max-w-4xl mx-auto font-display font-bold relative z-10">
            "We are currently actively expanding our investment portfolio sectors and opening up funding opportunities for potential partners."
          </p>
        </motion.div>

        <CTASection />
      </div>
    </motion.div>
  );
};
