"use client";
import Navbar from './Navbar';
import departments from './data/departments.json';
import newsData from './data/news.json';

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white selection:bg-blue-600 selection:text-white">
        
        {/* HERO SECTION - THE CINEMATIC EXPERIENCE */}
        <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
          {/* Animated Background Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900 z-10"></div>
            <img 
              src="/images/history3.png" 
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
              alt="Campus Background"
            />
          </div>

          <div className="relative z-20 text-center px-6 max-w-5xl">
            <div className="inline-block mb-6 overflow-hidden">
              <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] block animate-[slideUp_1s_ease-out]">
                Established 2003 • Passi City, Iloilo
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
              Home of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 drop-shadow-2xl">
                Legends
              </span>
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium mb-12 opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
              Transforming passion into profession. Join the region's fastest-growing academic community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[fadeIn_1.5s_ease-out_1s_forwards]">
              <button className="group relative bg-blue-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/40 overflow-hidden">
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:border-white/40">
                Student Portal
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
          </div>
        </section>

        {/* STATS STRIP - IMPACT IN NUMBERS */}
        <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Students', val: '4,000+' },
              { label: 'Pass Rate', val: '75%' },
              { label: 'Faculty', val: '150+' },
              { label: 'Awards', val: '45' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 text-center border border-slate-50 transition-transform hover:-translate-y-2">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION - REFINED */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="group relative bg-slate-50 rounded-[4rem] p-8 md:p-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <img 
                            src="/images/janice.jpg" 
                            alt="President" 
                            className="relative w-64 h-80 object-cover rounded-[3rem] shadow-2xl" 
                        />
                    </div>
                    <div className="flex-1">
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            Presidential Message
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-tight">
                            "A Legacy of <span className="text-blue-600">Innovation</span> and Service."
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                            Under the visionary leadership of Dr. Janice Jennifer P. Palmares, PCC stands as a beacon of hope and excellence in Western Visayas.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs italic">JP</div>
                            <div>
                                <p className="font-black text-slate-900 uppercase text-sm tracking-tighter leading-none">Dr. Janice Jennifer P. Palmares</p>
                                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-1">College President</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS - INTERACTIVE CARROUSEL STYLE */}
        <section id="departments" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">
                Our <span className="text-blue-600">Academies.</span>
              </h2>
              <a href="/departments" className="group flex items-center gap-3 font-black uppercase tracking-widest text-[10px] text-blue-600">
                Explore All <span className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">→</span>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {departments && departments.slice(0, 3).map((dept, i) => (
                <div key={dept.id} className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl transition-all duration-700 hover:scale-[0.98]">
                  <img src={dept.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{dept.short}</span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-6">{dept.name}</h3>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      View Department
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS GAZETTE - DARK MODE INTERACTIVE */}
        <section className="bg-slate-900 py-32 px-6 rounded-t-[5rem] -mt-10 relative z-40">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-16">
                The <span className="text-blue-500 underline decoration-8 underline-offset-8">Gazette</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-12">
              {latestNews.map((item, idx) => (
                <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8">
                        <img 
                            src={item.image} 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                        />
                        <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            {item.category}
                        </div>
                    </div>
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2 italic">0{idx + 1} — News Item</p>
                    <h4 className="text-2xl font-black text-white leading-tight group-hover:text-blue-400 transition-colors uppercase tracking-tighter">
                        {item.title}
                    </h4>
                    <div className="w-12 h-1 bg-blue-600/20 mt-6 group-hover:w-full transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER - THE FINAL TOUCH */}
        <footer className="bg-slate-900 pt-20 pb-10 px-6 text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <h2 className="text-2xl font-black tracking-tighter italic">PC<span className="text-blue-600 underline">C</span>.</h2>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                © 2026 Crafted with Passion by Dave Labiaga
            </p>
          </div>
        </footer>

      </main>

      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}