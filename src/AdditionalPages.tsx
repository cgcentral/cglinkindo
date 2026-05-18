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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-neutral-900 leading-none">CAREERS AT <br/> CGLINK</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-8 uppercase tracking-widest text-left">"Become an Architect of Change in the Future Business Landscape."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-8 font-medium">
            At CGLINK Indonesia, we don't just provide consulting; we create impact. As a firm established in the dynamic hub of South Jakarta in 2023, we believe that innovation is born from freedom of thought, limitless collaboration, and unwavering professionalism.
          </p>
          <p className="text-xl text-neutral-900 leading-relaxed mb-12 font-black italic">
            Are you the talent we are looking for to redefine industry standards?
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">Why Career with Us?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">Working at CGLINK is not just a 9-to-5 routine. It is a journey to hone your expertise at the forefront of business transformation:</p>
          <ul className="space-y-6 mb-12 text-neutral-600">
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Exponential Growth Ecosystem:</strong> You will work alongside experts in Finance, Digital Strategy, to Human Capital. Every day is an opportunity to learn from the best.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Culture of Innovation & Agility:</strong> We value fresh ideas. Here, every team member's voice is heard, tested, and realized if it provides added value to the client.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Real Impact for Indonesian Economy:</strong> From growing MSMEs to large corporations, your contribution directly helps strengthen the business foundation in the country.</p></li>
            <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Well-being & Balance:</strong> We provide a modern work environment that supports productivity as well as mental health and self-development.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">WHO ARE WE LOOKING FOR?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">We look for individuals who not only have sharp technical skills but also possess a Growth Mindset:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Analytical & Strategic</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">High Integrity</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Collaborative</div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-bold text-neutral-700">Adaptive</div>
          </div>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">Open Roles</h3>
          <div className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-16 text-center mb-16">
            <Briefcase className="w-16 h-16 text-neutral-200 mx-auto mb-6" />
            <p className="text-neutral-400 font-black uppercase tracking-widest text-xs">No positions currently available.</p>
          </div>
 
          <div className="bg-neutral-900 rounded-[3.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-transparent"></div>
            <p className="text-white text-2xl font-display font-bold mb-10 relative z-10">Join Us & Grow Together!</p>
            <a 
              href="mailto:businesspartner@cglinkindonesia.com"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all hover:scale-105 relative z-10"
            >
              <Mail className="w-5 h-5" />
              Send Your CV
            </a>
            <p className="text-neutral-500 mt-10 text-xs font-bold uppercase tracking-widest relative z-10">Subject: [Position] - [Your Name]</p>
          </div>
        </div>
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
