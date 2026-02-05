import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'


const newsDatabase = [
    {
        id: 1,
        date: 'JUL 15, 2025',
        category: 'Community Safety',
        title: 'New Crime Prevention Initiative Launched',
        author: 'City Police Dept.',
        image: 'https://www.arpan.org.in/wp-content/uploads/2023/06/Indian-express-article-image.jpg',
        content: `
            <p class="mb-4"><strong>New Delhi:</strong> In a bid to strengthen community security, the City Police Department has today unveiled a comprehensive Crime Prevention Initiative aimed at reducing street-level offenses through active citizen participation and enhanced technological surveillance.</p>
            
            <p class="mb-4">The initiative, dubbed "Operation SecureStreets," focuses on three core pillars:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Community Policing:</strong> Establishing neighborhood watch groups in high-risk zones.</li>
                <li><strong>Smart Surveillance:</strong> Deployment of AI-powered CCTV cameras capable of real-time anomaly detection.</li>
                <li><strong>Rapid Response:</strong> Reducing the average PCR van response time from 15 minutes to under 8 minutes.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3">Public Participation is Key</h3>
            <p class="mb-4">"Law enforcement cannot work in a silo," stated Commissioner R.K. Sharma during the press briefing. "We need the eyes and ears of the public. This initiative empowers citizens to report suspicious activities anonymously without fear of retribution."</p>

            <p class="mb-4">The department has also announced a series of workshops to educate residents on self-defense and digital safety awareness. These sessions will be conducted over the next three months in various community centers.</p>
        `,
        tags: ['Safety', 'Police', 'Community', 'Initiative']
    },
    {
        id: 2,
        date: 'JUL 10, 2025',
        category: 'Tech Update',
        title: 'Anonymous Reporting App Update v2.0',
        author: 'IT Cell',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8oOxyhmnH9UA68__yTWV5uL05yyf5QVWcA&s',
        content: `
            <p class="mb-4">The Ministry of Public Safety's IT Cell is proud to announce the release of <strong>Version 2.0</strong> of the anonymous reporting platform. This update brings critical security enhancements and a more intuitive user interface.</p>
            
            <h3 class="text-xl font-bold mb-3">What's New in v2.0?</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>End-to-End Encryption:</strong> All reports are now encrypted using AES-256 standards before leaving the user's device.</li>
                <li><strong>Tor Network Integration:</strong> Option to route traffic through onion routing for maximum anonymity.</li>
                <li><strong>Offline Mode:</strong> Draft reports can now be saved securely on the device and auto-uploaded when connectivity is restored.</li>
            </ul>

            <p class="mb-4">This update reinforces our commitment to protecting the identity of whistleblowers and victims. "Privacy is not just a feature; it is the foundation of this platform," said the Chief Technologist.</p>
        `,
        tags: ['Technology', 'Update', 'Security', 'Privacy']
    },
    {
        id: 3,
        date: 'JUL 05, 2025',
        category: 'Workshop',
        title: 'Community Safety Workshop',
        author: 'Nodal NGO',
        image: 'https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/6/f8/6f8d8728-b127-11ec-b157-ff9bd0454ecc/624b07e9ad585.image.jpg?resize=1200%2C577',
        content: `
            <p class="mb-4">Local NGO 'SafeFuture' in collaboration with the District Administration is organizing a <strong>Community Safety Workshop</strong> this weekend.</p>
            
            <p class="mb-4">The workshop aims to equip citizens with essential knowledge on legal rights, emergency first-aid, and situational awareness. Special sessions will be dedicated to women's safety and child protection laws.</p>
            
            <div class="bg-blue-50 p-4 border-l-4 border-blue-600 my-6">
                <p class="font-bold text-blue-900">Event Details:</p>
                <p>Date: July 12, 2025<br>Time: 10:00 AM - 4:00 PM<br>Venue: Town Hall, Sector 4</p>
            </div>

            <p>Registration is free and open to all. Certificates of participation will be awarded to attendees.</p>
        `,
        tags: ['Workshop', 'Education', 'Safety', 'Events']
    },
    {
        id: 4,
        date: 'JUN 30, 2025',
        category: 'Statistics',
        title: 'Annual Crime Statistics Report Released',
        author: 'Govt. Statistics',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwVRqEGOSO8r4iMf-9NK6nMREBV52paj4OA&s',
        content: `
            <p class="mb-4">The Annual National Crime Records Bureau (NCRB) report for the fiscal year 2024-25 has been released, showing a promising downward trend in violent crimes across metropolitan areas.</p>
            
            <p class="mb-4">Key highlights from the report include:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>10% Decrease</strong> in overall reported violent crimes compared to the previous year.</li>
                <li><strong>15% Increase</strong> in cyber-crime reporting, attributed to better awareness and reporting mechanisms.</li>
                <li><strong>Significant drop</strong> in street harassment cases in areas with active CCTV monitoring.</li>
            </ul>

            <p class="mb-4">While the numbers are encouraging, officials warn against complacency. The focus for the coming year will remain on cyber-security and protecting vulnerable groups.</p>
        `,
        tags: ['Report', 'Statistics', 'Data', 'Government']
    },
    {
        id: 5,
        date: 'JUN 25, 2025',
        category: 'Campaign',
        title: 'Youth Crime Awareness Campaign',
        author: 'Education Min.',
        image: 'https://www.mhfkolkata.com/wp-content/uploads/44c5573a-9c8a-429e-a770-029a3090d138.jpg',
        content: `
            <p class="mb-4">The Ministry of Education has launched a nationwide "Youth Against Crime" campaign targeting schools and colleges. The initiative seeks to deter juvenile delinquency through education and mentorship.</p>
            
            <p class="mb-4">"Young minds are impressionable," said the Minister. "It is our duty to guide them towards constructive citizenship rather than letting them fall prey to criminal elements."</p>
            
            <h3 class="text-xl font-bold mb-3">Campaign Activities</h3>
            <p>The campaign will include essay competitions, debate leagues, and interactive sessions with reformed convicts sharing their life experiences. A helpline for at-risk youth has also been established.</p>
        `,
        tags: ['Youth', 'Education', 'Campaign', 'Awareness']
    }
];

export default function NewsDetail() {

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
    window.scrollTo(0, 0)
}, [id])

    const article = newsDatabase.find(item => item.id === parseInt(id))

    if (!article) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-800">Article Not Found</h2>
                <button onClick={() => navigate('/news')} className="mt-4 text-blue-600 hover:underline">Return to News</button>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen font-sans">


            <div className="h-[400px] w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 shadow-sm">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>By {article.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <button
                    onClick={() => navigate('/news')}
                    className="mb-8 flex items-center text-slate-500 hover:text-blue-900 transition-colors font-bold text-sm uppercase tracking-wide group">
                    <i className="ri-arrow-left-line mr-2 group-hover:-translate-x-1 transition-transform"></i>
                    Back to Bulletins
                </button>


                <div className="prose prose-lg prose-slate max-w-none text-slate-800 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>


                <div className="mt-12 pt-8 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Filed Under</h4>
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors cursor-default">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
