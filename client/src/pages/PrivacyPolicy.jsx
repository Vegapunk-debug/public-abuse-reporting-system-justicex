import React from 'react'

export default function PrivacyPolicy() {

    return (

        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-slate-900 px-6 py-8 sm:px-10">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
                    <p className="mt-2 text-indigo-100">Last updated: February 2026</p>
                </div>

                <div className="px-6 py-8 sm:px-10 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to JusticeX. We are committed to protecting your privacy and ensuring the security of the information you provide.
                            This Privacy Policy explains how we collect, use, and protect your data when you use our anonymous crime reporting system.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">2. Information We Collect</h2>
                        <p className="mb-4">
                            Our primary goal is to allow you to report crimes anonymously. Therefore, we minimize data collection:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Report Data:</strong> We collect the details of the incident you report, including description, date, and location.</li>
                            <li><strong>Media:</strong> Any images or videos you voluntarily upload as evidence.</li>
                            <li><strong>Anonymous Metadata:</strong> We do NOT log IP addresses or device fingerprints associated with reports to ensure your anonymity.</li>
                        </ul>
                        <p className="mt-4 italic text-sm text-gray-500">
                            Note: If you choose to provide contact information, it will be kept unpredictable and only used if law enforcement strictly requires it for follow-up.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            The information collected is used solely for the purpose of:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Facilitating the reporting of crimes to appropriate authorities.</li>
                            <li>Tracking the status of reports via a secure, anonymous ID.</li>
                            <li>Analyzing crime trends to improve community safety (using aggregated, non-personal data).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">4. Data Security</h2>
                        <p className="mb-4">
                            We implement industry-standard security measures to protect your data:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>All data transmission is encrypted using SSL/TLS protocols.</li>
                            <li>Reports are stored in secure, encrypted databases.</li>
                            <li>Access to report data is strictly limited to authorized personnel and law enforcement liaisons.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">5. Third-Party Sharing</h2>
                        <p className="mb-4">
                            We do not sell, trade, or rent your personal information. We may share report details with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Law Enforcement Agencies (Police, Cyber Cell, etc.)</li>
                            <li>Child Welfare Services (for relevant cases)</li>
                            <li>Legal Authorities as required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">6. Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                            You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">7. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-semibold text-slate-900">support@justicex.org</p>
                    </section>
                    
                </div>
            </div>
        </div>
    )
}
