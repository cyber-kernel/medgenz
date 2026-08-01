'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/admin');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 border border-slate-100">
        <div className="text-center mb-10">
          <div className="inline-block bg-brand-50 p-4 rounded-3xl mb-6">
             {/* Logo */}
             <div className="font-bold text-brand-600 text-xl">MedGenz Admin</div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500 font-medium">Please enter your credentials to log in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-500 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-600/20 disabled:opacity-50 disabled:transform-none"
          >
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
