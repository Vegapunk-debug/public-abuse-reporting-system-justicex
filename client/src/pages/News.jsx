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
        const interval = setInterval(goToNext, 5000)
        return () => clearInterval(interval)
    }, [currentIndex])

    const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerView)

    return (
        <div className="font-sans text-slate-900 bg-white">
            <section className="py-16 bg-slate-50 border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6">

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
        </div>
    )
}
