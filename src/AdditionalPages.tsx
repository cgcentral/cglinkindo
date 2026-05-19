import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Briefcase, ArrowRight } from "lucide-react";

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

export const BlogPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 1,
      title: "Digital Marketing Strategy for MSMEs in 2026",
      excerpt: "Learn how MSMEs can leverage AI and automation to compete with big brands without fantastic marketing budgets.",
      date: "March 10, 2026",
      category: "Digital Marketing"
    },
    {
      id: 2,
      title: "Importance of Financial Restructuring Facing Economic Uncertainty",
      excerpt: "Tactical steps that CFOs and business owners must take to secure cash flow and ensure operational sustainability.",
      date: "February 28, 2026",
      category: "Corporate Finance"
    },
    {
      id: 3,
      title: "Building an Agile Work Culture in Traditional Companies",
      excerpt: "Transforming work culture is more than just changing working hours. Discover how to shift your team's mindset towards true agility.",
      date: "February 15, 2026",
      category: "Human Capital"
    },
    {
      id: 4,
      title: "Strategic Partnerships: Key to Rapid Expansion Without Burning Money",
      excerpt: "Why customer acquisition through B2B partnerships is often more effective and cheaper than conventional digital advertising.",
      date: "February 02, 2026",
      category: "Partnerships"
    }
  ];

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
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">INSIGHTS & <br/> BLOG</h1>
          <p className="text-xl text-neutral-500 max-w-2xl font-medium">
            Latest articles, analysis, and views from our experts around the business world, finance, marketing, and talent management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900 bg-neutral-50 px-4 py-1.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{article.date}</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6 group-hover:text-neutral-500 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-10 font-medium">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-3 text-neutral-900 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                Read More <ArrowRight className="w-4 h-4 text-neutral-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
