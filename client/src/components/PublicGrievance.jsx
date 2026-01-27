import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublicGrievance() {

    const navigate = useNavigate()

    return (
        <section className="bg-slate-100 py-12 px-4">
            <div className="max-w-4xl mx-auto border-2 border-slate-300 bg-white p-1">
                <div className="border border-slate-300 p-8 sm:p-12 text-center relative overflow-hidden">

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none grayscale">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                            alt="Watermark"
                            className="w-64 md:w-96"
                        />
                    </div>

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
                        <button onClick={() => navigate('/report')} className="bg-slate-900 text-white font-semibold py-3 px-8 rounded-sm hover:bg-slate-800 border border-transparent shadow-sm transition-all text-sm uppercase tracking-wide">
                            Proceed to File Report
                        </button>
                        <button onClick={() => navigate('/how-it-works')} className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-sm border border-slate-400 hover:bg-slate-50 transition-all text-sm uppercase tracking-wide">
                        View Guidelines
                        </button>
                    </div>

                    <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 text-xs text-slate-400">
                        Reference: Ministry of Public Safety | Information Technology Act, 2000
                    </div>

                </div>
            </div>
        </section>
    )
}
