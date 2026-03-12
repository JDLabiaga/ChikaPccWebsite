"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import departmentsData from '../../data/departments.json';

export default function DepartmentDetail() {
  const params = useParams();
  const id = params?.id;
  
  // Safety Guard: Force departmentsData to be treated as an array
  const departmentsArray = Array.isArray(departmentsData) ? departmentsData : [];
  
  // Only search if the ID exists and we have data
  const dept = id ? departmentsArray.find(d => d.id === id) : null;

  // Error handling if data is missing
  if (!dept) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
          <div className="text-center p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100 max-w-md mx-6">
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Information Pending</h1>
            <p className="text-slate-500 mt-3 mb-8 text-sm leading-relaxed">
              We are currently updating the data for this department. Please check back soon.
            </p>
            <a href="/" className="bg-blue-600 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
              Return Home
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* HERO HEADER */}
        <header className="relative h-[60vh] flex items-end pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={dept.image} 
              className="w-full h-full object-cover scale-105" 
              alt={dept.name} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-lg">
              Official Program
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] italic">
              {dept.name}
            </h1>
          </div>
        </header>

        {/* CONTENT GRID */}
        <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-3 gap-20">
          
          {/* LEFT: INFO, ACHIEVEMENTS, & HIGHLIGHTS */}
          <div className="lg:col-span-2 space-y-20">
            
            <div className="border-l-4 border-blue-600 pl-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Mission & Vision</h2>
              <p className="text-3xl text-slate-800 leading-tight font-bold tracking-tight italic">
                "{dept.description}"
              </p>
            </div>

            {/* DEAN LEADERSHIP CARD */}
            <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-10">
              <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden bg-slate-200 flex-shrink-0 shadow-2xl ring-8 ring-white">
                <img 
                  src={dept.deanImage} 
                  alt={dept.dean} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Academic Head</span>
                <h3 className="text-3xl font-black text-slate-900 mt-2 mb-2 tracking-tighter italic uppercase">{dept.dean}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                  School Administrator, {dept.short}
                </p>
              </div>
            </div>

              {/* INTERACTIVE ACHIEVEMENTS */}
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-10 italic">
                  Academic <span className="text-blue-600 underline decoration-4 underline-offset-8">Excellence</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {dept.achievements.map((ach, i) => (
                    <div 
                      key={i} 
                      className="group relative p-1 bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-2"
                    >
                      {/* Animated Background Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative bg-white h-full p-8 rounded-[2.4rem] z-10">
                        <div className="flex items-center gap-6">
                          {/* Interactive Icon Circle */}
                          <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-blue-200">
                            <span className="text-white text-xl">★</span>
                          </div>
                          
                          <div className="flex-1">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-60">Verified Achievement</span>
                            <p className="text-slate-800 font-black text-sm md:text-md leading-tight uppercase tracking-tight mt-1">
                              {ach}
                            </p>
                          </div>
                        </div>
                        
                        {/* Subtle Decorative Element */}
                        <div className="absolute bottom-4 right-8 opacity-5 group-hover:opacity-20 transition-opacity">
                          <span className="text-6xl font-black italic">{i + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            {/* DEPARTMENT HIGHLIGHTS SECTION */}
            {dept.highlights && (
              <div className="pt-10">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-12 italic">
                  Department <span className="text-blue-600 underline decoration-4 underline-offset-8">Highlights</span>
                </h3>
                <div className="space-y-16">
                  {dept.highlights.map((item, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
                      <div className="w-full md:w-1/2 h-72 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img 
                          src={item.img} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                          alt={item.title} 
                        />
                      </div>
                      <div className="w-full md:w-1/2 space-y-4">
                        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">Event Feature</span>
                        <h4 className="text-2xl font-black text-slate-900 uppercase italic leading-none">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl sticky top-32">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10">Course Offerings</h3>
              <ul className="space-y-8 mb-12">
                {dept.courses.map((course, i) => (
                  <li key={i} className="group">
                    <p className="text-xl font-black tracking-tight leading-none mb-2 group-hover:text-blue-400 transition-colors italic">
                      {course}
                    </p>
                    <span className="text-[9px] text-white/40 uppercase font-black tracking-widest">CHED Accredited • 4 Years</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6">Campus Life</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {dept.activities.map((act, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em]">
                    {act}
                  </span>
                ))}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-blue-900/20">
                Inquire Admission
              </button>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}