import React from 'react'

export default function Disclaimer() {

    return (

        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">

                <div className="bg-slate-900 px-6 py-8 sm:px-10">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Disclaimer</h1>
                    <p className="mt-2 text-indigo-100">Last updated: February 2026</p>
                </div>

                <div className="px-6 py-8 sm:px-10 space-y-8 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">1. General Information</h2>
                        <p className="mb-4">
                            The information provided by JusticeX ("we," "us," or "our") on our website and mobile application is for general informational purposes only.
                            All information on the Site and our mobile application is provided in good faith, however, we make no representation or warranty of any kind,
                            express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.
                        </p>
                    </section>

                    <section className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h2 className="text-xl font-bold text-red-700 mb-2">2. Not for Emergencies</h2>
                        <p className="font-semibold text-red-800 mb-2">
                            JUSTICEX IS NOT AN EMERGENCY REPORTING SERVICE.
                        </p>
                        <p className="text-red-700">
                            If you are in immediate danger or witnessing a crime in progress that requires an immediate response,
                            please contact your local emergency services (e.g., 100, 112, or 911) immediately.
                            Do not use this website or application to report life-threatening emergencies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">3. Not Legal Advice</h2>
                        <p className="mb-4">
                            The Site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only
                            and is not a substitute for professional advice.
                        </p>
                        <p className="mb-4">
                            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
                            We do not provide any kind of legal advice. The use or reliance of any information contained on the Site or our mobile application is solely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">4. External Links Disclaimer</h2>
                        <p className="mb-4">
                            The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content
                            belonging to or originating from third parties or links to websites and features in banners or other advertising.
                        </p>
                        <p className="mb-4">
                            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites
                            linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible
                            for monitoring any transaction between you and third-party providers of products or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">5. Testimonials and Reports</h2>
                        <p className="mb-4">
                            The Site may contain testimonials or reports by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users.
                            However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services.
                            We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions regarding this Disclaimer, please contact us at:
                        </p>
                        
                        <p className="font-semibold text-slate-900">legal@justicex.org</p>
                    </section>
                </div>
            </div>
        </div>

    )
}