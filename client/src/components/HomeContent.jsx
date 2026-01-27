import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- NEWS DATA ---
const newsItems = [
    {
        id: 1,
        date: 'JUL 15, 2025',
        title: 'New Crime Prevention Initiative Launched',
        author: 'City Police Dept.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        image: 'https://www.arpan.org.in/wp-content/uploads/2023/06/Indian-express-article-image.jpg',
        summary: 'The city has launched a new initiative to prevent crimes through community awareness programs.',
    },
    {
        id: 2,
        date: 'JUL 10, 2025',
        title: 'Anonymous Reporting App Update v2.0',
        author: 'IT Cell',
        avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8oOxyhmnH9UA68__yTWV5uL05yyf5QVWcA&s',
        summary: 'Latest update includes enhanced encryption protocols for anonymous crime reporting.',
    },
    {
        id: 3,
        date: 'JUL 05, 2025',
        title: 'Community Safety Workshop',
        author: 'Nodal NGO',
        avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
        image: 'https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/6/f8/6f8d8728-b127-11ec-b157-ff9bd0454ecc/624b07e9ad585.image.jpg?resize=1200%2C577',
        summary: 'Workshop on personal safety and situational awareness scheduled for next month.',
    },
    {
        id: 4,
        date: 'JUN 30, 2025',
        title: 'Annual Crime Statistics Report Released',
        author: 'Govt. Statistics',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwVRqEGOSO8r4iMf-9NK6nMREBV52paj4OA&s',
        summary: 'Annual report shows a 10% decrease in reported crimes due to community efforts.',
    },
    {
        id: 5,
        date: 'JUN 25, 2025',
        title: 'Youth Crime Awareness Campaign',
        author: 'Education Min.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        image: 'https://www.mhfkolkata.com/wp-content/uploads/44c5573a-9c8a-429e-a770-029a3090d138.jpg',
        summary: 'New campaign targets youth with information on crime prevention and legal rights.',
    },
];

export default function HomeContent() {
  const navigate = useNavigate();
  
  // --- SLIDER LOGIC ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; 
  const totalItems = newsItems.length;

  const goToPrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? totalItems - itemsPerView : prev - 1));
  };

  const goToNext = () => {
      setCurrentIndex((prev) => (prev >= totalItems - itemsPerView ? 0 : prev + 1));
  };

  useEffect(() => {
      const interval = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
  }, [currentIndex]); // Added dependency to prevent stale closures

  // Get current visible items
  // Note: This logic assumes we always have enough items. For robustness in production, handle array bounds.
  const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerView);
  // If we reach the end and don't have 3 items, we might want to wrap around or show fewer. 
  // For simplicity with this strict slice logic, ensure newsItems.length >= itemsPerView.

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* SECTION 1: OFFICIAL METRICS STRIP */}
      <div className="bg-slate-950 text-white border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            <div className="py-6 px-4 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Operational Status</p>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xl font-bold tracking-tight">ONLINE 24/7</span>
              </div>
            </div>
            <div className="py-6 px-4 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Nodal Agencies</p>
              <h3 className="text-xl font-bold tracking-tight">54 UNITS</h3>
            </div>
            <div className="py-6 px-4 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Data Privacy</p>
              <h3 className="text-xl font-bold tracking-tight">ISO-27001</h3>
            </div>
            <div className="py-6 px-4 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Case Clearance</p>
              <h3 className="text-xl font-bold tracking-tight">92.4%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: INSTITUTIONAL MANDATE */}
      {/* SECTION 2: OUR PROMISE (Simple & Professional) */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-12 border-l-4 border-yellow-600 pl-4">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
              How We Protect You
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Our system is built on one core principle: <strong>Safety First.</strong> You can report a crime without fear, knowing that your identity is completely hidden from everyone—including us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-slate-50">
            
            {/* Block 1: Privacy */}
            <div className="p-8 hover:bg-white transition-colors group relative overflow-hidden">
              {/* Background Number Watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-900 select-none group-hover:opacity-20 transition-opacity">
                01
              </div>
              
              {/* Technical Stamp */}
              <div className="mb-4 inline-block border border-slate-400 px-2 py-1 rounded-sm">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  SEC: PRIVACY
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                100% Anonymous
              </h3>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                We do not ask for your name, phone number, or email. We do not track your location or IP address. Once you hit submit, there is no way to trace the report back to you.
              </p>
            </div>

            {/* Block 2: Routing */}
            <div className="p-8 hover:bg-white transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-900 select-none group-hover:opacity-20 transition-opacity">
                02
              </div>
              <div className="mb-4 inline-block border border-slate-400 px-2 py-1 rounded-sm">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  SEC: ACTION
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                Direct to Authorities
              </h3>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                Your report goes directly to the right team. If you report a child issue, it goes to Child Welfare. If it's a crime, it goes to the Police. No middle-men, no delays.
              </p>
            </div>

            {/* Block 3: Tracking */}
            <div className="p-8 hover:bg-white transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-900 select-none group-hover:opacity-20 transition-opacity">
                03
              </div>
              <div className="mb-4 inline-block border border-slate-400 px-2 py-1 rounded-sm">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  SEC: TRACKING
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                Check Status Secretly
              </h3>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                When you submit, you get a secret code (like <span className="font-mono text-xs bg-slate-200 px-1">JX-1234</span>). You can use this code anytime to see if the police have taken action, without ever revealing who you are.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
            
            {/* Header with Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-300 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Departmental Updates</h2>
                    <p className="text-sm text-slate-500 mt-1">Official press releases and community advisories.</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                    <button onClick={goToPrev} className="bg-white border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white px-3 py-1 rounded-sm transition-colors">
                        ←
                    </button>
                    <button onClick={goToNext} className="bg-white border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white px-3 py-1 rounded-sm transition-colors">
                        →
                    </button>
                </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleItems.map((news) => (
                    <div key={news.id} className="bg-white border border-slate-200 shadow-sm hover:border-slate-400 transition-colors flex flex-col h-full">
                        <div className="h-48 overflow-hidden bg-slate-200 relative">
                             <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                             <div className="absolute top-0 left-0 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 uppercase">
                                 Press Release
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-mono text-slate-500">{news.date}</span>
                                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 border border-slate-200 uppercase">{news.author}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug line-clamp-2">
                                {news.title}
                            </h3>
                            <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                                {news.summary}
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                                <img src={news.avatar} alt={news.author} className="w-6 h-6 rounded-full border border-slate-300" />
                                <span className="text-xs font-semibold text-slate-700">By {news.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </section>

      {/* SECTION 4: PUBLIC NOTICE / ACTION */}
      {/* SECTION 4: PUBLIC NOTICE / ACTION */}
      <section className="bg-slate-100 py-12 px-4">
        <div className="max-w-4xl mx-auto border-2 border-slate-300 bg-white p-1">
          {/* Main Content Box */}
          <div className="border border-slate-300 p-8 sm:p-12 text-center relative overflow-hidden">
            
            {/* 1. Subtle Background Watermark (Official Vibe) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none grayscale">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Watermark" 
                className="w-64 md:w-96"
              />
            </div>

            {/* 2. The Main Logo (Replaced SVG with Official Emblem) */}
            <div className="mb-6 flex justify-center relative z-10">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                 alt="Satyamev Jayate" 
                 className="w-20 md:w-24 h-auto drop-shadow-sm"
               />
            </div>

            <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-tight mb-2">
              Public Grievance Redressal
            </h2>
            <p className="relative z-10 text-slate-600 mb-8 max-w-xl mx-auto text-sm">
              Any citizen witnessing a cognizable offense is encouraged to file a report. Failure to report certain crimes (like POCSO) may be punishable under law.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                 onClick={() => navigate('/report')}
                 className="bg-slate-900 text-white font-semibold py-3 px-8 rounded-sm hover:bg-slate-800 border border-transparent shadow-sm transition-all text-sm uppercase tracking-wide"
               >
                 Proceed to File Report
               </button>
               <button 
                 onClick={() => navigate('/how-it-works')}
                 className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-sm border border-slate-400 hover:bg-slate-50 transition-all text-sm uppercase tracking-wide"
               >
                 View Guidelines
               </button>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 text-xs text-slate-400">
              Reference: Ministry of Public Safety | Information Technology Act, 2000
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}