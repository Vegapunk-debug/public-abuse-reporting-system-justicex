import React from 'react';

export default function About() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">About JusticeX</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empowering communities through anonymous reporting — one voice at a time.
        </p>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p>
            JusticeX is committed to building safer communities by enabling individuals to report sensitive issues like
            child abuse, drug activity, and criminal behavior anonymously and securely. Your voice is powerful, and your privacy is respected.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Why We Exist</h3>
          <p>
            Many crimes go unreported due to fear, stigma, or lack of access. Our platform bridges that gap by providing a secure, confidential space where every report is directed to the appropriate authorities without revealing your identity.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Your Safety is Our Priority</h3>
          <p>
            We use encrypted systems and secure data handling practices to protect your information. No personal details are stored or tracked unless you choose to share them. We believe in trust, transparency, and impact.
          </p>
        </div>

        
        <div>
          <h3 className="text-2xl font-semibold mb-2">How You Can Help</h3>
          <p>
            By submitting a report, you help prevent harm, protect lives, and promote accountability. Whether you’ve witnessed a crime, suspect abuse, or want to stop drug activity — every tip matters.
          </p>
        </div>
      </div>
    </section>
  )
}


