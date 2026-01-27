
export default function HomeContent() {

    return (
        <div className="font-sans text-slate-900 bg-white">
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

            <section className="py-16 border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="mb-12 border-l-4 border-yellow-600 pl-4">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                            How We Protect You
                        </h2>
                        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                            Our system is built on one core principle: <strong>Safety First.</strong> You can report a crime without fear, knowing that your identity is completely hidden from everyone—including us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-slate-50">


                        <div className="p-8 hover:bg-white transition-colors group relative overflow-hidden">

                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-900 select-none group-hover:opacity-20 transition-opacity">
                                01
                            </div>


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

        </div>
    )
}