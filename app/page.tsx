'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Ryva
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-2xl font-semibold text-center mb-4">
        Your money, multiplied.
      </p>

      {/* Subtext */}
      <p className="text-gray-400 text-center max-w-md mb-10 text-lg">
        The AI that tells you exactly where to put your idle cash — 
        Treasury Bills, Money Market Funds, Dollar investments and more. 
        Built for Nigeria.
      </p>

      {/* Waitlist Form */}
      {!submitted ? (
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Join the waitlist
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-semibold">You're in. 🎉</p>
          <p className="text-gray-400 mt-2">We'll be in touch soon.</p>
        </div>
      )}

      {/* Footer */}
      <p className="text-gray-600 text-sm mt-16">
        © 2026 Ryva Finance
      </p>

    </main>
  );
}
