import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

const CTASection = () => (
  <div className="mt-20 pt-10">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-16"
    />
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a 
        href="mailto:businesspartner@cglinkindonesia.com"
        className="flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Email Us
      </a>
      <a 
        href="https://wa.me/62895428355681"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-neutral-900 text-neutral-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-50 transition-all hover:scale-105 shadow-sm"
      >
        <MessageCircle className="w-5 h-5 text-neutral-900" />
        WhatsApp
      </a>
    </div>
  </div>
);

export const ServiceFundamentalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">BUSINESS <br/> FUNDAMENTALS</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Building a Solid Foundation for Limitless Growth"</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            A grand building will only stand as long as its foundation is strong. The same goes for business. At CGLINK Indonesia, we believe that scalability starts from a healthy internal structure and precise basic strategies. We help you redesign or strengthen your business's core pillars to be ready to face global market challenges.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> OUR FOCUS AREAS</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">We delve into your business's core through a comprehensive approach:</p>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Business Model Canvas Construction:</strong> Ensuring your value proposition is on target and revenue streams are clearly mapped.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Standard Operating Procedure (SOP) & Operational Efficiency:</strong> Building systems that allow your business to run on auto-pilot.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Organizational Structure & Work Culture Analysis:</strong> Aligning team roles with the company's vision to create a professional work ecosystem.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Business Legality & Compliance:</strong> Ensuring all your operations stand on the right legal umbrella.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Long-term Strategic Planning:</strong> Transforming into a market leader through measurable KPI setting.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">WHY BUSINESS FUNDAMENTALS ARE SO CRUCIAL?</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-12 font-medium">
            Many businesses fail not because of a lack of capital, but because of fragile internal systems. Our services are designed to eliminate operational bottlenecks and give you full control over the direction of the company.
          </p>
          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Don't let small cracks in the foundation hinder your major growth. We are here to ensure your business structure is ready for a wider scale."
          </blockquote>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">OUR METHODOLOGY</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Audit & Diagnosis", desc: "Dissecting your current business health conditions." },
              { title: "Restructuring", desc: "Fixing fragile parts and strengthening existing ones." },
              { title: "Implementation", desc: "Assisting the execution process until the system runs perfectly." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em] mb-4 block">Stage 0{i+1}</span>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-400 font-black uppercase tracking-widest text-xs text-center mb-0">Need help tidying up your business's internal structure?</p>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceDigitalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">DIGITAL <br/> MARKETING</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Not Just a Trend, We Create Market Dominance."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            In the noisy digital world, just being "seen" is not enough. You must become the primary choice. CGLINK Indonesia combines creative marketing art with Growth Hacking data precision to accelerate your business scale. We don't just chase likes, we chase ROI.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> GROWTH STRATEGY</h3>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-medium">We use a full-funnel approach to ensure every investment works harder:</p>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Social Media Authority:</strong> Building a social media ecosystem with high interaction and real conversion.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Performance Marketing (Ads):</strong> Ad campaigns (Google, Meta, TikTok) optimized for the lowest CAC.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Search Engine Optimization (SEO):</strong> Ensuring your business appears at the forefront of search engines.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Growth Hacking Experiments:</strong> Quick experiments to find untouched growth gaps.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Conversion Rate Optimization (CRO):</strong> Optimizing touchpoints so visitors turn into loyal buyers.</p></li>
          </ul>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter">WHY OUR APPROACH IS DIFFERENT?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Data-Driven", desc: "Every decision is made based on real consumer behavior data." },
              { title: "Scalability", desc: "Marketing systems that can be enlarged along with target growth." },
              { title: "Creative Excellence", desc: "Psychologically compelling content for brand loyalty." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-neutral-900 text-white rounded-3xl">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Good marketing will bring in buyers. Great Growth Hacking will ensure they never leave."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServicePartnershipsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">PARTNERSHIPS <br/> & BIZDEV</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Building Bridges, Opening Opportunities, Beyond Boundaries."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Great businesses do not grow in isolation. Exponential growth happens when the right strategy meets the right partners. At CGLINK Indonesia, we act as your growth architects—finding market gaps and building strategic alliances.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> EXPANSION STRATEGY</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Strategic Partnership Scouting:</strong> Connecting your business with strategic partners (B2B, Government, Communities).</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Market Expansion Strategy:</strong> Mapping out expansion opportunities to new regions or market segments in Indonesia.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Key Account Management:</strong> Managing relationships with key strategic partners for long-term cooperation.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Go-To-Market (GTM) Excellence:</strong> Designing new product launch strategies with a wide distribution network.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Negotiation & Deal Making:</strong> Professional assistance in contract negotiation processes and business deals.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Great partnerships are not about who is bigger, but about how two forces unite to dominate the market."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceFinancePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">CORPORATE <br/> FINANCE</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Financial Precision for Unwavering Strategic Decisions."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            At CGLINK Indonesia, we transform your financial data into sharp strategic instruments. We ensure your financial health today is the fuel for your expansion tomorrow.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> FINANCIAL SOLUTION PILLARS</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Financial Planning & Analysis (FP&A):</strong> Cash flow projections, budgeting, and variance analysis for business step accuracy.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Capital Structuring & Optimization:</strong> Determining the best capital composition to minimize capital costs.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Fundraising & Investor Relations:</strong> Funding preparation assistance, pitch decks, through to investor negotiations.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Investment Appraisal:</strong> Investment feasibility analysis (NPV, IRR) for optimal returns.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Financial Risk Management:</strong> Mitigating financial risks to maintain business stability amidst uncertainty.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Profitability is the result of good operations, but sustainability is the result of great financial management."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceHCPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <div className="w-full">
          <h1 className="text-5xl md:text-8xl font-display font-black text-neutral-900 mb-6 tracking-tighter leading-none">HUMAN <br/> CAPITAL</h1>
          <h2 className="text-2xl text-neutral-500 font-bold mb-10 uppercase tracking-widest text-left">"Finding the Best Talent, Building a Winning Culture."</h2>
          
          <p className="text-xl text-neutral-500 leading-relaxed mb-12 font-medium">
            Great businesses are built by great people. At CGLINK Indonesia, we don't just fill empty seats; we connect your company's vision with quality talent.
          </p>

          <h3 className="text-2xl font-display font-black text-neutral-900 mt-16 mb-8 uppercase tracking-tighter"> TALENT MANAGEMENT SOLUTIONS</h3>
          <ul className="space-y-6 mb-16 text-neutral-600">
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Executive Search & Recruitment:</strong> Finding the right leaders and experts for your industry.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Organization Design & Development:</strong> Designing agile and effective organizational structures.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Performance Management System:</strong> Building objective performance appraisal systems based on KPI/OKR.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Compensation & Benefits Mapping:</strong> Designing competitive benefit packages for the retention of top talent.</p></li>
            <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0"></div><p><strong className="text-neutral-900 font-bold">Corporate Culture Transformation:</strong> Implanting company values for an innovative work environment.</p></li>
          </ul>

          <blockquote className="border-l-8 border-neutral-900 pl-8 py-6 my-16 bg-neutral-50 rounded-r-[2rem] italic text-neutral-900 text-xl font-medium text-left leading-relaxed">
            "Recruitment is an investment. The right person in the right position is the main key to your business scalability."
          </blockquote>
          
          <CTASection />
        </div>
      </div>
    </motion.div>
  );
};
