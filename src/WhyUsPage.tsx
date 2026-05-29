import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart4, 
  UserCheck, 
  Heart, 
  Building2, 
  Users, 
  Coins, 
  TrendingUp, 
  Zap,
  Mail,
  ChevronRight
} from "lucide-react";

interface PageProps {
  onBack: () => void;
}

export const WhyUsPage: React.FC<PageProps> = ({ onBack }) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 selection:bg-neutral-200"
    >
      <div className="w-full px-6 md:px-16 max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button 
          variants={itemVariants}
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors mb-16"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all group-hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Home
        </motion.button>

        {/* Header Block */}
        <div className="border-b border-neutral-100 pb-16 mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.span 
                variants={itemVariants}
                className="text-[#C5A059] font-black tracking-[0.3em] text-xs uppercase block mb-4 font-mono"
              >
                CGLINK Consulting — Why Choose Us
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-display font-black text-neutral-900 uppercase tracking-tighter leading-[0.9] mb-6"
              >
                Empowering <span className="text-neutral-300">Sustainable</span> <br />Growth & Real Solutions.
              </motion.h1>
            </div>
            <div className="lg:col-span-4">
              <motion.p 
                variants={itemVariants}
                className="text-neutral-500 font-medium text-lg leading-relaxed md:border-l-4 md:border-neutral-900 md:pl-6"
              >
                At CGLINK Consulting, we ensure that every recommendation is backed by in-depth research and real data—not just assumptions.
              </motion.p>
            </div>
          </div>
        </div>

        {/* SECTION 1 — Why Choose Us Grid */}
        <div className="mb-24">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-[10px] font-black text-[#C5A059] tracking-[0.22em] uppercase mb-3 block font-mono">Core Advantages</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 uppercase tracking-tight">Why Choose Us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <BarChart4 className="w-6 h-6" />,
                title: "Data-Driven Strategy",
                desc: "Every recommendation, layout, and advisory report we deliver is compiled through rigorous market analysis and precise evidence—never guesswork."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Experienced Consultants",
                desc: "With over 10 years of active direct experience inside the complex Indonesian business ecosystem, across multiple thriving sectors."
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Personalized Approach",
                desc: "We dive deeply into your unique organization dynamics, constraints, and opportunities to custom-tailor robust, actionable growth blueprints."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Value-Based Integration",
                desc: "Unwaveringly committed to absolute transparency, sharia compliance, barakah principles, and measurable social impact."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-neutral-50 p-10 md:p-12 rounded-[2.5rem] border border-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center text-neutral-900 group-hover:text-white transition-all duration-300 mb-8 border border-neutral-100/50">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight text-neutral-900 group-hover:text-white">{card.title}</h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 font-medium text-sm md:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2 — Our Core Expertise Checklist */}
        <div className="mb-24 py-16 bg-neutral-50 rounded-[4rem] px-8 md:px-16 border border-neutral-100 shadow-inner">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="text-[10px] font-black text-[#C5A059] tracking-widest uppercase mb-4 block font-mono">Service Map</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 uppercase tracking-tight mb-6">Our Core Expertise</h2>
              <p className="text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                We configure industry capabilities and strategies to secure complete scalability in each division:
              </p>
            </motion.div>

            <motion.ul variants={itemVariants} className="space-y-6 bg-white p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 shadow-sm">
              {[
                { title: "Strategy & Operations", desc: "Formulating an adaptive roadmap, standard operating procedures (SOPs), and optimized organizational structure to ensure operational fluidity and scalability." },
                { title: "Digital & Marketing", desc: "Data-driven compound growth strategies, enterprise digital ecosystems, performance marketing orchestration, and brand equity transformation." },
                { title: "Innovation & Development", desc: "Expanding robust corporate networks, initiating strategic joint-ventures, forming elite partnerships, and uncovering high-yield market opportunities." },
                { title: "Finance, Accounting, & Tax", desc: "Capital structure optimization, precision financial modeling, budget planning, robust corporate tax strategy, and proactive risk control." },
                { title: "Human Capital", desc: "Talent acquisition structures, high-performance corporate culture building, key-result aligned compensation systems, and executive development." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div className="text-sm md:text-base text-neutral-600 leading-normal font-medium">
                    <strong className="text-neutral-900 font-bold">{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* SECTION 3 — Tailored Journeys (For Every Stage) */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <span className="text-[10px] font-black text-[#C5A059] tracking-[0.22em] uppercase mb-3 block font-mono">Target Segments</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 uppercase tracking-tight">Structured For Every Journey</h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <p className="text-neutral-500 font-medium leading-relaxed">
                Whether you need enterprise-level expansion or structural stabilization, our customized consulting solutions are systematically tuned to match the density and scale of your entity.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                idx: "01",
                segment: "Corporations",
                desc: "Actionable corporate intelligence, market insights, and strategic advisory for smarter, highly measurable business decisions."
              },
              {
                idx: "02",
                segment: "Investors",
                desc: "Serving as a transparent bridge between your private capital allocation and vetted, verified, high-performance opportunities."
              },
              {
                idx: "03",
                segment: "Startups",
                desc: "Complete end-to-end launch verification, rapid business model validation, regional pivot designs, and seed/expansion support."
              },
              {
                idx: "04",
                segment: "MSMEs (UMKM)",
                desc: "The right professional strategies, financial scaling paths, and digital tools to help your passionate brand scale to the next level."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-neutral-100 p-8 rounded-[2rem] hover:border-neutral-900 hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <span className="text-neutral-300 font-mono font-black text-4xl block mb-6">{step.idx}</span>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight text-neutral-900 mb-3">{step.segment}</h4>
                  <p className="text-neutral-500 font-medium text-xs md:text-sm leading-relaxed mb-6">{step.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-400 group cursor-pointer text-[10px] font-mono font-black uppercase tracking-wider hover:text-black transition-colors self-start">
                  Learn Capabilities <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Contact Banner */}
        <motion.div 
          variants={itemVariants}
          className="bg-neutral-950 text-white rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-left">
            <span className="text-[#C5A059] font-black tracking-widest text-[10px] uppercase block mb-4 font-mono">Let's Discuss</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-6">
              Let's craft your custom blueprint.
            </h2>
            <p className="text-neutral-400 font-medium text-sm md:text-base mb-10 leading-relaxed">
              Have questions, or want to perform a complimentary diagnosis session on your currents? Let's analyze your bottlenecks and unlock exponential, value-based growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:businesspartner@cglinkindonesia.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 text-xs font-mono uppercase tracking-widest"
              >
                <Mail className="w-4 h-4" />
                Email Partners
              </a>
              <a 
                href="https://wa.me/6285121372871" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 text-xs font-mono uppercase tracking-widest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
