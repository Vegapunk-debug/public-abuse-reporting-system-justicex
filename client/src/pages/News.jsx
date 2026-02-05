import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    }
]

export default function News() {
    const navigate = useNavigate()

    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerView = 3
    const totalItems = newsItems.length

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalItems - itemsPerView : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev >= totalItems - itemsPerView ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 6000)
        return () => clearInterval(interval)
    }, [currentIndex])

    const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerView)

    return (
        <div className="font-sans text-slate-900 bg-white">
            <section className="py-16 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-slate-200 pb-6">
                        <div>

                            <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">Departmental Updates</h2>
                            <p className="text-slate-500 mt-2 max-w-xl">Stay informed with the latest announcements, safety advisories, and press releases from the Ministry of Public Safety.</p>
                        </div>

                        <div className="flex gap-2 mt-6 md:mt-0">
                            <button
                                onClick={goToPrev}
                                className="w-12 h-12 flex items-center justify-center border border-slate-300 text-slate-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 rounded-full transition-all duration-300 shadow-sm">
                                <i className="ri-arrow-left-line text-xl"></i>
                            </button>
                            <button
                                onClick={goToNext}
                                className="w-12 h-12 flex items-center justify-center border border-slate-300 text-slate-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 rounded-full transition-all duration-300 shadow-sm">
                                <i className="ri-arrow-right-line text-xl"></i>
                            </button>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {visibleItems.map((news) => (
                            <div
                                key={news.id}
                                onClick={() => navigate(`/news/${news.id}`)}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer relative">

                                <div className="h-56 overflow-hidden bg-slate-200 relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-lg">
                                            {news.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col relative bg-white">
                                    <div className="absolute -top-6 right-8 bg-white p-2 rounded shadow-lg border-t-4 border-blue-900 text-center w-16 group-hover:border-red-600 transition-colors">
                                        <span className="block text-2xl font-bold text-slate-900 leading-none">
                                            {news.date.split(' ')[1].replace(',', '')}
                                        </span>
                                        <span className="block text-[10px] font-bold text-slate-500 uppercase">
                                            {news.date.split(' ')[0]}
                                        </span>
                                    </div>

                                    <div className="mt-2 mb-4">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            <span>{news.author}</span>
                                            <span>•</span>
                                            <span>2 Min Read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                            {news.summary}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                            Read Full Release <i className="ri-arrow-right-line"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </div>
    )
}
