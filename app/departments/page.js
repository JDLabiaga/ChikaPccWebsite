"use client";
import Navbar from '../Navbar';

const departments = [
  { 
    id: "soict",
    name: "Information & Communications Technology", 
    short: "SOICT",
    // Image: Focused on high-tech coding and digital systems
    image: "/images/soict-banner.jpg", 
    desc: "Mastering software development, network systems, and the future of digital innovation.",
    courses: ["BS in Information Technology (BSIT)"]
  },
  { 
    id: "soc",
    name: "Criminal Justice Education", 
    short: "SOC",
    // Image: Focused on forensic investigation and law enforcement
    image: "/images/soc-banner.jpg", 
    desc: "Rigorous training in law enforcement, public safety, and the pillars of justice.",
    courses: ["BS in Criminology (BSCrim)"]
  },
  { 
    id: "sobed",
    name: "Business Education", 
    short: "SOBED",
    // Image: Focused on stock markets, finance, and corporate strategy
    image: "/images/sobed-banner.jpg", 
    desc: "Developing strategic leaders in financial management and marketing excellence.",
    courses: [
      "BSBA in Financial Management", 
   
    ]
  },
  { 
    id: "sohm",
    name: "Hospitality Management", 
    short: "SOHM",
    // Image: Focused on professional kitchen/culinary arts
    image: "/images/sohm-banner.jpg", 
    desc: "World-class training for the culinary, hotel, and global tourism industry.",
    courses: ["BS in Hospitality Management (BSHM)"]
  },
  { 
    id: "sote",
    name: "Teacher Education", 
    short: "SOTE",
    // Image: Focused on traditional classroom instruction and inspiration
    image: "/images/sote.jpg", 
    desc: "Nurturing the next generation of educators in Elementary and Secondary levels.",
    courses: [
      "Bachelor of Elementary Education (BEED)",
      "BSED major in English",
      "BSED major in Mathematics"
    ]
  }
];

export default function DepartmentsGallery() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          <header className="mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">PCC Academic Wings</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mt-2">
              The <span className="text-blue-600">Colleges.</span>
            </h1>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {departments.map((dept, i) => (
              <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4">
                
                {/* Visual Imagery */}
                <img 
                  src={dept.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-1" 
                  alt={dept.name}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                  
                  {/* Department Badge */}
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                      {dept.short}
                    </span>
                  </div>

                  <h3 className="text-white text-3xl font-black mb-4 leading-none tracking-tighter uppercase italic">
                    {dept.name}
                  </h3>
                  
                  <div className="max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-700 ease-in-out">
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-2">
                      {dept.desc}
                    </p>
                    <div className="mb-8 space-y-2">
                      {dept.courses.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          <span className="text-white text-xs font-bold">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`/departments/${dept.id}`}
                    className="bg-white text-slate-900 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] w-full text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                  >
                    Enter College
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}