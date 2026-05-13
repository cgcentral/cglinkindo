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
  GraduationCap
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
              Founded in 2025 and based in the business heart of South Jakarta, CGLINK Indonesia is a business consulting firm born from a spirit of collaboration and innovation. We understand that every business has unique challenges; that's why we don't just provide advice, but provide measurable and sustainable solutions.
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
