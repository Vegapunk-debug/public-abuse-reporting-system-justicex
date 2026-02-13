import React from 'react'

export default function TermsOfService() {

    return (

        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                
                <div className="bg-slate-900 px-6 py-8 sm:px-10">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Terms of Service</h1>
                    <p className="mt-2 text-indigo-100">Last updated: February 2026</p>
                </div>

                <div className="px-6 py-8 sm:px-10 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using JusticeX (the "Service"), you agree to comply with and be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">2. Use of Service</h2>
                        <p className="mb-4">
                            JusticeX is an anonymous crime reporting platform designed to facilitate the reporting of illegal activities to law enforcement and relevant authorities.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You agree to use the Service only for lawful purposes.</li>
                            <li>You acknowledge that submitting a report does not guarantee an immediate response from law enforcement. <strong>In case of an emergency, always contact your local emergency services directly.</strong></li>
                            <li>You agree to provide truthful and accurate information to the best of your knowledge.</li>
                        </ul>

                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">3. User Anonymity</h2>
                        <p className="mb-4">
                            We are committed to protecting your anonymity. We do not track IP addresses or device fingerprints. However:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You are responsible for ensuring that the content of your report (e.g., photos, descriptions) does not inadvertently reveal your identity.</li>
                            <li>JusticeX is not liable for any identification that results from the information you voluntarily provide.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">4. Prohibited Activities</h2>
                        <p className="mb-4">
                            You may not use the Service to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Submit false, misleading, or malicious reports. False reporting is a crime and may have legal consequences.</li>
                            <li>Harass, threaten, or defame any person or entity.</li>
                            <li>Upload content that contains viruses, malware, or any other harmful code.</li>
                            <li>Attempt to gain unauthorized access to our systems or interfere with the Service's improved functionality.</li>
                        </ul>
                    </section>

                    <section>

                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">5. Intellectual Property</h2>
                        <p className="mb-4">
                            The design, code, and content of the JusticeX platform are the property of JusticeX and are protected by copyright and other intellectual property laws.
                            However, the content of the reports you submit remains the property of the relevant authorities once transferred.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">6. Limitation of Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, JusticeX and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>The use or inability to use the Service.</li>
                            <li>Any action or inaction by law enforcement agencies in response to a report.</li>
                            <li>Unauthorized access to or alteration of your transmissions or data.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">7. Modifications to Terms</h2>
                        <p className="mb-4">
                            We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page.
                            Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
                        </p>
                    </section>

                    <section>

                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b pb-2">8. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions regarding these Terms of Service, please contact us at:
                        </p>
                        <p className="font-semibold text-slate-900">legal@justicex.org</p>
                    </section>
                </div>
            </div>
        </div>
    )
}